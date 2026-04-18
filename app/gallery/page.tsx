import { Suspense } from "react";
import type { Metadata } from "next";
import GallerySection from "@/components/gallery/GallerySection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Property gallery — rentals, houses for sale, and land for sale in Ghana.",
  alternates: { canonical: "/gallery" },
};

function GalleryLoading() {
  return (
    <div
      style={{
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "clamp(2.5rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)",
      }}
    >
      <p style={{ color: "#57534e", margin: 0 }}>Loading gallery…</p>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<GalleryLoading />}>
      <GallerySection />
    </Suspense>
  );
}
