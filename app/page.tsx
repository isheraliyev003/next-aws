import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-4 py-16 sm:px-8">
        <Card className="w-full border-border bg-card/80 backdrop-blur">
          <CardHeader className="flex flex-row flex-wrap items-center gap-4">
            <Image
              className="h-10 w-auto dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={40}
              priority
            />
            <CardTitle className="text-xl font-semibold tracking-tight">
              Next.js + TanStack Query + shadcn/ui
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              This project is wired with server-prefetched data using TanStack
              Query and UI primitives from shadcn/ui.
            </p>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Quick search (demo)
              </label>
              <Input
                placeholder="Type to filter posts (client-side demo)…"
                className="max-w-md"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button>
                <a href="/posts">View posts (SSR + Query)</a>
              </Button>
              <Button variant="outline">
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js docs
                </a>
              </Button>
              <Button variant="ghost">
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shadcn/ui docs
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
