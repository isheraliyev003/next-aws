import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GP Table",
  description: "GP Table data",
};

export default function GpTablePage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">GP Table</h1>
      <p className="text-muted-foreground">GP Table content goes here.</p>
    </div>
  );
}
