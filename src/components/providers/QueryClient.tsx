"use client";

import { getQueryClient } from "@/lib/queryCient";
import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const QueryClient = ({ children }: PropsWithChildren) => {
  const client = getQueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryClient;
