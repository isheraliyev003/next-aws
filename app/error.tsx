"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <h2 className="text-xl font-semibold text-foreground">Something went wrong</h2>
      <p className="max-w-md text-center text-sm text-muted-foreground">
        {error.message}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Try again
      </button>
    </div>
  );
}
