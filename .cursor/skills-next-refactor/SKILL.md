---
name: next-refactor
description: Guides larger Next.js refactors such as migrating components to shadcn/ui, adopting TanStack Query, or changing API response shapes. Use when the user asks for broad or risky refactors across multiple files.
---

# Next Refactor

## When to use this skill

- The user wants to:
  - Replace raw HTML elements with shadcn/ui components.
  - Migrate data fetching to TanStack Query.
  - Update API response shapes and propagate changes.
  - Rename or move many components or routes consistently.

## Workflow

### 1. Scope the refactor

- Identify:
  - Which directories are in scope (e.g. `app/(dashboard)/**`, `app/api/**`).
  - Which patterns are being replaced and with what (e.g. `<button>` → `<Button />` from `@/components/ui/button`).

### 2. Plan by search

- Use search to find all occurrences of the old pattern.
- Group changes by:
  - Component type (UI, data, API, hooks).
  - Risk (low, medium, high).

### 3. Apply changes incrementally

- Prefer changing one concern at a time:
  - First update UI primitives to shadcn.
  - Then migrate data fetching to TanStack Query.
  - Then adjust API shapes if needed.
- Keep commits small and focused when possible.

### 4. Keep behavior consistent

- Preserve existing behavior by default:
  - Do not silently change props or semantics unless requested.
  - Maintain loading and error states when switching to TanStack Query.

### 5. Validation

- After changes, ensure:
  - TypeScript compiles without new errors.
  - Query keys and API routes align with the updated shapes.
  - UI renders correctly with shadcn components.

## Examples of user requests

- "Using the `next-refactor` skill, replace all raw `<button>` elements in the dashboard pages with our shadcn `Button` component."
- "Use `next-refactor` to migrate this list page to TanStack Query for client-side data fetching while keeping server-side initial data."

