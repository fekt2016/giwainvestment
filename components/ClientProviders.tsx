"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/lib/theme";
import GlobalStyles from "@/components/GlobalStyles";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
