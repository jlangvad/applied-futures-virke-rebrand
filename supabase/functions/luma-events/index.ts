// Supabase Edge Function — Luma calendar proxy.
//
// Deploy:
//   supabase functions deploy luma-events --no-verify-jwt
//
// Why this exists: Luma's `api.lu.ma/calendar/get-items` only sends CORS
// headers for `Origin: https://luma.com`, so a browser fetch from any other
// origin (localhost, virke.co) is blocked. This function proxies the
// request, forging the Origin server-side, and re-emits CORS for our domain.
//
// Frontend wiring: set `VITE_LUMA_PROXY_URL` to
//   https://<project-ref>.supabase.co/functions/v1/luma-events
// and the rest of the path/query (`/calendar/get-items?calendar_api_id=...`)
// is forwarded verbatim.

const ALLOWED_ORIGINS = new Set([
  'https://virke.co',
  'https://www.virke.co',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5173',
])

const CORS_BASE_HEADERS: Record<string, string> = {
  'access-control-allow-methods': 'GET, OPTIONS',
  'access-control-allow-headers': 'authorization, x-client-info, apikey, content-type',
  'access-control-max-age': '86400',
}

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://virke.co'
  return { ...CORS_BASE_HEADERS, 'access-control-allow-origin': allow, vary: 'origin' }
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get('origin')
  const cors = corsHeaders(origin)

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors })
  }
  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405, headers: cors })
  }

  const url = new URL(req.url)
  // Strip the `/functions/v1/luma-events` prefix that Supabase routes add.
  const upstreamPath = url.pathname.replace(/^.*\/luma-events/, '') || '/'
  const upstreamUrl = `https://api.lu.ma${upstreamPath}${url.search}`

  let upstream: Response
  try {
    upstream = await fetch(upstreamUrl, {
      headers: {
        accept: 'application/json',
        origin: 'https://luma.com',
        referer: 'https://luma.com/',
        'user-agent': 'virke-luma-proxy/1.0 (+https://virke.co)',
      },
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'upstream-fetch-failed', message: String(err) }),
      { status: 502, headers: { ...cors, 'content-type': 'application/json' } },
    )
  }

  const body = await upstream.text()
  return new Response(body, {
    status: upstream.status,
    headers: {
      ...cors,
      'content-type': upstream.headers.get('content-type') ?? 'application/json',
      // Cache at the edge for 5 min — Luma calendar rarely changes mid-minute,
      // and this saves us calls under load.
      'cache-control': 'public, max-age=60, s-maxage=300',
    },
  })
})
