# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Read the bundled docs first

This project uses Next.js 16, which has breaking changes from earlier versions. **Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`.** Do not rely on training-data knowledge of Next.js conventions — APIs, file conventions, and patterns may differ.

Key hint from the bundled docs: if fixing slow client-side navigations, `Suspense` alone is not enough — you must also export `unstable_instant` from the route. Read `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.mdx` before touching navigation.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Architecture

- **Router**: App Router (`app/` directory) — no `src/` dir, no Pages Router
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` (not v3 — config and class names may differ)
- **Language**: TypeScript with strict mode
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google` in `app/layout.tsx`

The entry point is `app/page.tsx`; the root layout (metadata, font variables, body wrapper) lives in `app/layout.tsx`. Global styles are in `app/globals.css`.
