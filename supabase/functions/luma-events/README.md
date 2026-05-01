# luma-events — Supabase Edge Function

A thin server-side proxy in front of Luma's public calendar API.

## Why we need it

Luma's `api.lu.ma/calendar/get-items` returns `Access-Control-Allow-Origin: https://luma.com` only. A browser fetch from any other origin (including localhost and `virke.co`) is blocked by CORS. This function calls Luma server-side with the right `Origin` header and re-emits CORS for our own domains.

In development, `vite.config.ts` already does the same trick via `server.proxy`, so the function is only needed for production builds.

## Deploy

```bash
# one-time, if Supabase isn't linked yet
supabase login
supabase link --project-ref <YOUR_PROJECT_REF>

# deploy
supabase functions deploy luma-events --no-verify-jwt
```

Then set `VITE_LUMA_PROXY_URL` in your production environment to:

```
https://<YOUR_PROJECT_REF>.supabase.co/functions/v1/luma-events
```

`--no-verify-jwt` makes the function publicly callable. The data returned is already public (anyone can see it on `lu.ma/claudecommunity`), so no auth is needed.

## Editing the allowlist

Update `ALLOWED_ORIGINS` in `index.ts` when you add a new staging or preview domain.
