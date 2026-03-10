import type { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPosts } from "@/lib/api/posts";
import PostsClient from "./posts-client";

export const metadata: Metadata = {
  title: "Posts",
  description: "Server-prefetched posts with TanStack Query hydration",
};

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsClient />
    </HydrationBoundary>
  );
}
