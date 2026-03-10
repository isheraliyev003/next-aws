"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api/posts";

export default function PostsClient() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-4 text-zinc-500">Loading…</p>;
  if (isError) return <p className="p-4 text-red-600">Error: {String(error?.message)}</p>;
  if (!data?.length) return <p className="p-4 text-zinc-500">No posts.</p>;

  return (
    <main className="min-h-screen p-8 font-sans">
      <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Posts (SSR + TanStack Query)
      </h1>
      <ul className="space-y-4">
        {data.map((post) => (
          <li
            key={post.id}
            className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              {post.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
