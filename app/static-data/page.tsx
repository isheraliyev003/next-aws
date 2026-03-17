import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static Data",
  description: "Static data management",
};

export default function StaticDataPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Static Data</h1>
      <p className="text-muted-foreground">Static data management content goes here.</p>
    </div>
  );
}
