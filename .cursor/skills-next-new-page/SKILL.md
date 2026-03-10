---
name: next-new-page
description: Creates a new Next.js App Router page route with metadata, layout alignment, and a typed React component. Use when the user asks to add or scaffold a new page under the app/ directory.
---

# Next New Page

## Instructions

- When the user asks to create a new page (e.g. "add /pricing page" or "create /dashboard route"), follow this workflow in the project root.
- Interpret the requested path like `/pricing` or `/dashboard/settings`.

### 1. Choose the route directory

- Map the requested path to an `app/` route:
  - `/` → `app/page.tsx` (update existing home page instead of creating a new file).
  - `/segment` → `app/segment/page.tsx`.
  - `/parent/child` → `app/parent/child/page.tsx`.
- If intermediate folders do not exist (e.g. `app/parent/child`), create them.

### 2. Define metadata

- In the new `page.tsx`, export a `metadata` object when appropriate:
  - Import `Metadata` as a type: `import type { Metadata } from "next";`.
  - Export `metadata` with a clear title and description based on the route purpose.

### 3. Implement the page component

- Create a default-exported React Server Component named `Page`:
  - Do **not** add `"use client"` unless the user explicitly needs client-only features.
  - Use Tailwind classes consistent with the existing `app/page.tsx` and `app/globals.css`.
  - Accept no props unless this is a dynamic route; for dynamic routes, use the standard Next.js App Router `params` typing.

### 4. Keep style and structure consistent

- Use `<main>` as the top-level semantic wrapper inside the layout body when reasonable.
- Follow the existing typography and spacing patterns from the home page.
- Prefer small, focused JSX; if the page grows large, create a local `_components` directory and extract subcomponents there.

## Examples

### Example: /pricing

- Path: `/pricing`
- File: `app/pricing/page.tsx`
- Includes `metadata` with title "Pricing" and a short description.
- Renders a hero heading, short description, and placeholder pricing tiers using Tailwind.

### Example: /dashboard/settings

- Path: `/dashboard/settings`
- File: `app/dashboard/settings/page.tsx`
- Creates nested directories `app/dashboard/settings/` as needed.
- Uses layout similar to the home page but tailored to an authenticated dashboard context when the user mentions it.
