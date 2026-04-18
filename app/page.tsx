import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
