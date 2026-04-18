import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import ClientProviders from "@/components/ClientProviders";
import AppShell from "@/components/layout/AppShell";
import { SITE_URL } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Giwa Investment | Real estate in Ghana",
    template: "%s | Giwa Investment",
  },
  description:
    "Buy, sell, and rent houses, apartments, and land in Ghana. Giwa Investment — clear guidance and trusted support.",
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Giwa Investment",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ClientProviders>
            <AppShell>{children}</AppShell>
          </ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
