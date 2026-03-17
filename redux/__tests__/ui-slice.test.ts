import { describe, it, expect } from "vitest";
import { uiReducer, toggleSidebar, setSidebarOpen } from "../ui-slice";

describe("uiSlice", () => {
  const initialState = { sidebarOpen: false };

  it("toggles sidebar from false to true", () => {
    const next = uiReducer(initialState, toggleSidebar());
    expect(next.sidebarOpen).toBe(true);
  });

  it("toggles sidebar from true to false", () => {
    const next = uiReducer({ sidebarOpen: true }, toggleSidebar());
    expect(next.sidebarOpen).toBe(false);
  });

  it("sets sidebar open explicitly to true", () => {
    const next = uiReducer(initialState, setSidebarOpen(true));
    expect(next.sidebarOpen).toBe(true);
  });

  it("sets sidebar open explicitly to false", () => {
    const next = uiReducer({ sidebarOpen: true }, setSidebarOpen(false));
    expect(next.sidebarOpen).toBe(false);
  });
});
