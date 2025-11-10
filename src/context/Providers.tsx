"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/app/global-error";

export default function Providers({ children }: { children: ReactNode }) {
  // Must be created inside a client component
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallbackRender={ErrorFallback}>{children}</ErrorBoundary>
    </QueryClientProvider>
  );
}
