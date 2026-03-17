import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gmail",
  description: "Gmail integration",
};

export default function GmailPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Gmail</h1>
      <p className="text-muted-foreground">Gmail integration content goes here.</p>
    </div>
  );
}
