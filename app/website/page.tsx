import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website",
  description: "Website settings and content",
};

export default function WebsitePage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Website</h1>
      <p className="text-muted-foreground">Website settings and content go here.</p>
    </div>
  );
}
