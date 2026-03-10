---
name: next-api-route
description: Scaffolds a Next.js App Router API route with typed handlers, validation, and proper error responses. Use when the user asks to add or modify an API endpoint under app/api/.
---

# Next API Route

## Instructions

- Use this skill when the user asks for a new API endpoint (e.g. "create /api/products" or "add POST /api/contact").
- Implement routes in the App Router style under `app/api/`.

### 1. Choose HTTP methods and route path

- Map the requested endpoint to `app/api/.../route.ts`.
- Include handlers only for the methods the user needs (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).

### 2. Handler signatures

- Use the Next.js 13+ App Router `Request`/`Response` style:
  - Import from `next/server`: `import { NextResponse } from "next/server";`.
  - Export `async function GET(req: Request)` / `POST(req: Request)` etc.

### 3. Types and validation

- Define TypeScript types for request body and response shape when clear from the user request.
- For JSON bodies:
  - Parse with `await req.json()`.
  - Validate required fields; if invalid, return `NextResponse.json({ error: "..." }, { status: 400 });`.

### 4. Error handling

- Wrap external calls (DB, APIs) in try/catch.
- On unexpected errors, log with context and return a 500 JSON response:
  - `NextResponse.json({ error: "Internal Server Error" }, { status: 500 });`.

### 5. Responses

- Always return `NextResponse.json(...)` with a clear schema.
- Use appropriate status codes: 200/201 for success, 400 for bad input, 404 when the resource is missing, 500 for unexpected errors.

## Examples

### Example: GET /api/health

- File: `app/api/health/route.ts`.
- Exports `GET` that returns `{ status: "ok" }` with 200.

### Example: POST /api/contact

- File: `app/api/contact/route.ts`.
- Exports `POST` that expects `{ name, email, message }` in JSON.
- Validates that all fields are non-empty; returns 400 with an `error` field when invalid.
