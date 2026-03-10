---
name: next-form
description: Builds client-side forms in a Next.js App Router project using React, TypeScript, and Tailwind. Use when the user asks to create or update a form UI and basic validation.
---

# Next Form

## Instructions

- Use this skill when the user requests a new form (e.g. "add a login form", "create a contact form"), or updates to an existing form.
- Prefer colocating form components near the route in an `_components` directory (e.g. `app/contact/_components/ContactForm.tsx`).

### 1. Component setup

- Mark form components as client components:
  - Add `"use client"` at the top of the form file.
- Use a typed props object for any configurable pieces (e.g. default values, callbacks).

### 2. Form structure

- Use semantic HTML: `<form>`, `<label>`, `<input>`, `<textarea>`, `<button>`.
- Add accessible `htmlFor` / `id` pairs and `aria-*` attributes where helpful.
- Style with Tailwind classes consistent with the rest of the app (rounded inputs, focus styles, spacing).

### 3. State and validation

- Use `useState` or a form library if the user mentions one.
- Implement basic validation based on the user’s description:
  - Required fields.
  - Email format checks when relevant.
  - Min/max lengths where specified.
- Show inline error messages near each field.

### 4. Submission

- Use `onSubmit` with `event.preventDefault()`.
- If calling an API route, use `fetch("/api/...", { method: "POST", body: JSON.stringify(...), headers: { "Content-Type": "application/json" } })`.
- Handle loading and success/error states in the UI (e.g. disabled button while submitting, success message).

## Examples

### Example: Contact form

- Location: `app/contact/_components/ContactForm.tsx`.
- Fields: name, email, message (all required).
- On submit: POST to `/api/contact` and show success/error alert based on response.
