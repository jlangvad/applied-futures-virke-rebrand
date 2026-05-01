// Vercel Edge function — Luma calendar proxy for production.
//
// Mirrors the Vite dev proxy in `vite.config.ts` and the Supabase Edge
// Function in `supabase/functions/luma-events/`. Pick whichever runtime your
// production hosting prefers; this is the zero-config option for Vercel.
//
// Why we proxy: api.lu.ma sends `Access-Control-Allow-Origin: https://luma.com`
// only — a browser fetch from any other origin is blocked. We forge the
// Origin server-side and re-emit CORS for our own domain.

export const config = { runtime: 'edge' }

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(req) })
  }
  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders(req) })
  }

  const url = new URL(req.url)
  // Vercel maps /api/luma/<path> to this file; strip the prefix to get
  // the upstream path verbatim ("/calendar/get-items", "/ics/get", ...).
  const upstreamPath = url.pathname.replace(/^\/api\/luma/, '') || '/'
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
      {
        status: 502,
        headers: { ...corsHeaders(req), 'content-type': 'application/json' },
      },
    )
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      ...corsHeaders(req),
      'content-type': upstream.headers.get('content-type') ?? 'application/json',
      // Edge cache for 5 min; Luma calendars don't change minute-by-minute
      // and this absorbs traffic spikes without billing extra invocations.
      'cache-control': 'public, max-age=60, s-maxage=300',
    },
  })
}

const ALLOWED_ORIGIN_PATTERNS: RegExp[] = [
  /^https:\/\/virke\.co$/,
  /^https:\/\/www\.virke\.co$/,
  /^https:\/\/[a-z0-9-]+\.vercel\.app$/, // Vercel preview + production deploys
  /^http:\/\/localhost(:\d+)?$/,
]

function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('origin') ?? ''
  const allowed = ALLOWED_ORIGIN_PATTERNS.some((re) => re.test(origin))
  return {
    'access-control-allow-origin': allowed ? origin : 'https://virke.co',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-max-age': '86400',
    vary: 'origin',
  }
}
