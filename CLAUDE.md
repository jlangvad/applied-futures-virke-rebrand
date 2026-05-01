# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **Bun** (pinned to `bun@1.3.6` via `packageManager`). Use `bun` / `bunx`, not `npm` / `npx`.

- `bun install` — install dependencies
- `bun run dev` — Vite dev server on `0.0.0.0:3000`
- `bun run build` — type-check (`tsc -b`) **then** build with Vite. The build fails on TS errors, so this is the de-facto "lint" step
- `bun run preview` — serve the production build

There is no test runner, no ESLint, and no Prettier configured. Don't add one without checking first.

## Architecture

This is an early-stage React 18 + Vite + TypeScript SPA scaffold (the "Virke rebrand"). `src/App.tsx` is currently a placeholder showing only the Clawd logo on a dot-grid background — most feature work will involve replacing it.

What is already wired up and should be reused rather than re-introduced:

- **shadcn/ui** — the full default component set is pre-installed under `src/components/ui/` (`components.json` is configured with `style: default`, `baseColor: slate`, `cssVariables: true`). Add new shadcn components with `bunx shadcn@latest add <name>`; they will land in `@/components/ui`.
- **Path alias** — `@/*` resolves to `src/*` (configured in both `tsconfig.json` and `vite.config.ts`). Always import via `@/...`.
- **Tailwind** — theme tokens are CSS variables defined in `src/index.css` (light + `.dark` class). The Tailwind config consumes them as `hsl(var(--token))`. To restyle the app, edit those CSS variables rather than the Tailwind config or component classnames. `cn()` in `src/lib/utils.ts` is the canonical `clsx + tailwind-merge` helper.
- **TanStack Query** — `QueryClientProvider` wraps the app in `src/main.tsx` using the singleton from `src/lib/queryClient.ts`. Use this client for all server state; don't instantiate another.
- **Supabase** — `src/lib/supabase.ts` exports a single `supabase` client configured with `flowType: 'pkce'` (the comment explains this is intentional for the claude.ai iframe magic-link flow — don't change it). It reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` from `.env`; if those aren't set it logs a warning and queries fail silently. Provision the DB via `mcp__supabase__provision_database` to populate them.

## Vite cache quirk

`vite.config.ts` sets `cacheDir: './.vite'` instead of the default `node_modules/.vite`. This is **deliberate**: `node_modules` is a symlink into `/opt/baku-templates`, and the default cache location would write through the symlink into the shared template tree. Don't "fix" this back to the default.

## TypeScript strictness

`tsconfig.json` enables `strict`, `noUnusedLocals`, and `noUnusedParameters`. Unused imports / variables fail the build, not just produce warnings — clean them up as you go.
