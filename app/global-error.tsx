"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-950 px-4 text-white">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="max-w-md text-center text-sm text-zinc-400">
            {error.message}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
