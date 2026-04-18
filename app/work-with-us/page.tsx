import type { Metadata } from "next";
import Link from "next/link";
import ProsePage from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Work with us",
  description:
    "Partnership and collaboration enquiries for Giwa Investment in Ghana real estate.",
  alternates: { canonical: "/work-with-us" },
};

export default function WorkWithUsPage() {
  return (
    <ProsePage>
      <h1>Work with us</h1>
      <p className="lead">
        Developers, landowners, agents, and project partners — if there is a fit,
        we would like to hear from you.
      </p>
      <p>
        Partnership discussions are led by <strong>Sarki Abass Giwa</strong> and
        the Giwa Investment team — grounded in his leadership as a chief in the
        Nanakrom area and long-standing ties to Accra&apos;s communities,
        including Mamobi and Nima.
      </p>
      <p>
        This page is for <strong>collaboration enquiries</strong>: joint
        ventures, co-marketing, introductions, land conversations, and other
        professional partnerships. It does not create any obligation on either
        side until formal documents are signed.
      </p>
      <h2>We typically speak with</h2>
      <ul>
        <li>Landowners exploring development or disposal options</li>
        <li>Developers and project marketers seeking aligned channels</li>
        <li>Agents and referrers who value transparent handoffs</li>
      </ul>
      <h2>How to reach us</h2>
      <p>
        Use WhatsApp or the contact form — share your role, location, and a
        short summary. We will respond as soon as practical.
      </p>
      <p className="legal-note">
        Please do not rely on this page for exclusive mandates or guaranteed
        deal flow. Specific arrangements are agreed in writing.
      </p>
      <p>
        <Link href="/investors">Investor enquiries</Link> ·{" "}
        <Link href="/contact">Contact</Link>
      </p>
    </ProsePage>
  );
}
