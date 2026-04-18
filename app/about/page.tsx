import type { Metadata } from "next";
import Link from "next/link";
import ProsePage from "@/components/ProsePage";
import FounderPhotoGallery from "@/components/founder/FounderPhotoGallery";
import { FOUNDER_NAME } from "@/lib/founder";

export const metadata: Metadata = {
  title: "About",
  description: `Giwa Investment and ${FOUNDER_NAME} — Ghana real estate, land, and housing led from Accra.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
    <ProsePage>
      <h1>About Giwa Investment</h1>
      <p className="lead">
        Giwa Investment belongs to <strong>{FOUNDER_NAME}</strong> — a
        Ghanaian real estate leader and chief who serves clients with patience,
        faith-informed integrity, and clear expectations on land, houses, and
        rentals.
      </p>

      <h2>{FOUNDER_NAME}</h2>
      <h3>Roots in Accra</h3>
      <p>
        Sarki Abass Giwa was born and raised in <strong>Mamobi</strong>, a
        neighbourhood in Accra that sits close to <strong>Nima</strong> — one
        of the capital&apos;s well-known Muslim communities. That upbringing
        shaped his respect for community ties, hospitality, and straight dealing.
      </p>
      <h3>Traditional leadership</h3>
      <p>
        He serves as a <strong>chief</strong> in the <strong>Nanakrom</strong>{" "}
        area of Accra, carrying responsibilities that extend beyond business.
        Clients who work with Giwa Investment benefit from a principal who
        understands both customary respect and the practical realities of
        buying, selling, and leasing property in Ghana today.
      </p>
      <h3>Real estate in Ghana</h3>
      <p>
        Through Giwa Investment he focuses on <strong>land</strong>,{" "}
        <strong>houses</strong>, and wider <strong>real estate</strong>{" "}
        mandates — helping buyers, sellers, and renters move with realistic
        timelines and the right professional support alongside their own
        lawyers and advisers.
      </p>
      <p>
        He is widely connected and holds <strong>significant influence</strong>{" "}
        in Ghana&apos;s property space; the firm&apos;s approach remains grounded in relationship, reputation, and results — not hype.
      </p>

      <h2>The firm today</h2>
      <p>
        Giwa Investment works across <strong>residential sales</strong>,{" "}
        <strong>land</strong>, and <strong>rentals</strong> — including
        apartments and houses. We believe in plain language, honest
        availability, and respect for your time. When you work with us, you get
        responsive communication (including WhatsApp), organized viewings where
        possible, and no empty promises about titles or returns — those
        conversations belong with qualified legal and financial advisers.
      </p>

      <h2>Service areas</h2>
      <p>
        We support clients across Ghana; tell us your preferred region and
        budget and we will be direct about how we can help.
      </p>
      <p>
        <Link href="/contact">Get in touch</Link> ·{" "}
        <Link href="/gallery">See our gallery</Link>
      </p>
    </ProsePage>
    <FounderPhotoGallery />
    </>
  );
}
