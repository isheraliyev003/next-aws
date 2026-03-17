"use client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { useMemo, useState, type ReactNode } from "react";
import { makeStore } from "@/redux/store";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

export default function Providers({
  children,
  initialSidebarOpen,
}: {
  children: ReactNode;
  initialSidebarOpen?: boolean;
}) {
  const [queryClient] = useState(() => makeQueryClient());
  const { store } = useMemo(
    () => makeStore(initialSidebarOpen),
    [initialSidebarOpen]
  );

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ReduxProvider>
  );
}
