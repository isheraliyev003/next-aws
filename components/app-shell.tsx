"use client";

import { type ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="min-h-screen flex-1 overflow-auto bg-background">
        {children}
      </main>
    </div>
  );
}
