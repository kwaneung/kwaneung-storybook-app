"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";
import { FontSizeProvider } from "@/lib/font-size-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <FontSizeProvider>{children}</FontSizeProvider>
    </ThemeProvider>
  );
}
