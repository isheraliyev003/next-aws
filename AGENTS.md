# Project: rsj (Next.js)

This is a **Next.js 16** app with **React 19**, **TypeScript**, and **Tailwind CSS v4**. Use the App Router (`app/`).

## Conventions

- **Prefer Server Components** by default; add `"use client"` only when needed (interactivity, hooks, browser APIs).
- **Run the app** with `pnpm dev`; build with `pnpm build`.
- **Styling**: Tailwind CSS; use `className` and the design tokens in `app/globals.css` where relevant.
- **Layout**: Root layout is in `app/layout.tsx` (Geist fonts, global styles). Add route-specific layouts under `app/` as needed.

## What to do

- Follow the rules in `.cursor/rules/` when editing matching files.
- Keep new code consistent with existing patterns (functional components, TypeScript types, App Router structure).

## What to avoid

- Do not add unnecessary client boundaries; keep server-only logic in Server Components.
- Do not commit secrets or env values; use `.env.local` and reference via `process.env` where needed.
