"use client";

import styled from "styled-components";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Shell>
      <SiteHeader />
      <Main id="main">{children}</Main>
      <SiteFooter />
    </Shell>
  );
}
