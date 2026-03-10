---
name: code-review
description: Reviews code for correctness, accessibility, performance, and consistency with project rules, including shadcn/ui and TanStack Query usage. Use when the user asks for code review or feedback on a diff.
---

# Code Review

## When to use this skill

- The user asks for a code review or feedback on:
  - A diff, PR, or branch.
  - New pages, API routes, or forms.

## Checklist

- **Correctness**
  - Does the logic match the described behavior?
  - Are edge cases handled (empty states, errors, loading)?

- **shadcn/ui**
  - Are UI primitives using shadcn components where appropriate?
  - Are accessibility and focus states preserved?

- **TanStack Query**
  - Are query keys stable and descriptive?
  - Are loading and error states handled?
  - Are mutations invalidating or updating cache correctly?

- **TypeScript**
  - Avoid `any`.
  - Use clear types for props and API responses.

- **Layout and UX**
  - Consistent spacing and typography.
  - Clear hierarchy and labels.

## Feedback format

- Group comments into:
  - 🔴 **Critical** – must fix to avoid bugs or serious issues.
  - 🟡 **Suggestion** – improves clarity or UX but not strictly required.
  - 🟢 **Nice to have** – polish or future improvement.

## Example prompt

- "Using the `code-review` skill, review the changes in this diff and list critical issues, suggestions, and nice-to-haves."

