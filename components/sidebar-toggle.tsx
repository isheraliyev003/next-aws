"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleSidebar } from "@/redux/ui-slice";
import { Button } from "@/components/ui/button";

export function SidebarToggle() {
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);

  return (
    <Button
      variant={sidebarOpen ? "outline" : "ghost"}
      size="sm"
      onClick={() => dispatch(toggleSidebar())}
    >
      {sidebarOpen ? "Close sidebar" : "Open sidebar"}
    </Button>
  );
}
