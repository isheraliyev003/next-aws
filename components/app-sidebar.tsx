"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleSidebar } from "@/redux/ui-slice";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  LayoutGrid,
  Users,
  Globe,
  Database,
  Send,
  Table2,
  Mail,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/posts", label: "All", icon: LayoutGrid },
  { href: "/users", label: "Users", icon: Users, svg: "/application/persons_many.svg" },
  { href: "/website", label: "Website", icon: Globe },
  { href: "/static-data", label: "Static Data", icon: Database },
  { href: "/telegram", label: "Telegram Bot", icon: Send },
  { href: "/gp-table", label: "GP Table", icon: Table2 },
  { href: "/gmail", label: "Gmail", icon: Mail },
];

export function AppSidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);

  return (
    <aside
      className={cn(
        "flex shrink-0 flex-col overflow-hidden border-r border-sidebar-border bg-sidebar transition-[width] duration-300 ease-in-out",
        sidebarOpen ? "w-64" : "w-[72px]"
      )}
    >
      {/* Header with logo and toggle */}
      <div className="flex h-16 items-center justify-between gap-2 border-b border-sidebar-border px-3">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden"
        >
          {sidebarOpen ? (
            <Image
              src="/logo.png"
              alt="Trip Asia"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          ) : (
            <Image
              src="/mini_logo.png"
              alt="Trip Asia"
              width={40}
              height={40}
              className="size-10 shrink-0 object-contain"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          )}
        </Link>
        <button
          type="button"
          onClick={() => dispatch(toggleSidebar())}
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-sidebar-border bg-background transition-colors hover:bg-sidebar-accent"
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarOpen ? (
            <Image
              src="/application/arrow_both_side.svg"
              alt=""
              width={15}
              height={8}
              className="opacity-70"
            />
          ) : (
            <Image
              src="/application/right_arrow.svg"
              alt=""
              width={9}
              height={8}
              className="opacity-70"
            />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground"
              )}
            >
              {"svg" in item && item.svg ? (
                <Image
                  src={item.svg}
                  alt=""
                  width={20}
                  height={20}
                  className={cn("size-5 shrink-0 opacity-80", isActive && "opacity-100")}
                />
              ) : (
                <Icon className={cn("size-5 shrink-0", isActive && "text-primary")} />
              )}
              {sidebarOpen && (
                <span className="truncate">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User profile at bottom */}
      <div className="border-t border-sidebar-border p-2">
        <div
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2",
            !sidebarOpen && "justify-center"
          )}
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-accent">
            <Image
              src="/application/agent_default_img.svg"
              alt="User"
              width={20}
              height={20}
              className="opacity-80"
            />
          </div>
          {sidebarOpen && (
            <span className="truncate text-sm text-sidebar-foreground">
              User
            </span>
          )}
        </div>
      </div>
    </aside>
  );
}
