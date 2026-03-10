---
name: commit-messages
description: Generates concise, conventional commit messages based on the current diff, focusing on Next.js pages, API routes, and UI using shadcn/ui and TanStack Query. Use when the user asks for a commit message.
---

# Commit Messages

## When to use this skill

- The user wants help writing a commit message for staged or recent changes.

## Format

- Prefer Conventional Commits:
  - `feat(scope): summary`
  - `fix(scope): summary`
  - `refactor(scope): summary`
  - `chore(scope): summary`

- `scope` examples:
  - `pages`, `api`, `ui`, `forms`, `data`, `auth`.

## Instructions

- Summarize the **why** and **what**:
  - Mention when changes introduce new pages, routes, or forms.
  - Note when you migrate UI to shadcn or data to TanStack Query.
- Keep the subject line under ~72 characters.
- Optional body:
  - 1–3 bullet points about key changes or follow-ups.

## Example usage

- "Using the `commit-messages` skill, generate a commit message for the changes in this diff."
- "With `commit-messages`, write a `feat` commit for adding the `/pricing` page and contact form."

