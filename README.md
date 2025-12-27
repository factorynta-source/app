# NTA FACTORY – Internal Distributor

Bootstrap Next.js + Supabase app for authentication and future music upload flows.

## Prerequisites
- Node.js 18+
- npm
- Supabase project with Email/Password auth enabled

## Environment variables
Create a `.env.local` file:
```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

## Install & run
```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure
- `src/app` – App Router pages (`/login`, `/register`, `/dashboard`)
- `src/lib/supabase` – Supabase browser/server clients
- `supabase/migrations` – SQL schema for profiles, releases, tracks, assets

## Notes
- `/dashboard` is protected by Supabase auth (middleware + server check).
- Auth uses email/password via Supabase; UI is intentionally minimal for extension.
