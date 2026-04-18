import type { Metadata } from "next";
import Link from "next/link";
import ProsePage from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Introductory information for investors exploring conversations with Giwa Investment.",
  alternates: { canonical: "/investors" },
};

export default function InvestorsPage() {
  return (
    <ProsePage>
      <h1>Investors</h1>
      <p className="lead">
        If you want to explore capital alignment with Giwa Investment, start
        with a conversation — not a promise on a web page.
      </p>
      <p>
        Giwa Investment is privately led by <strong>Sarki Abass Giwa</strong>,
        whose roots in Accra (Mamobi and ties to the Nima community) and his
        leadership as a chief in the Nanakrom area inform how we approach every
        conversation.
      </p>
      <p>
        This section is <strong>introductory</strong>. We do not offer
        guaranteed returns, &ldquo;risk-free&rdquo; opportunities, or legal
        advice here. Anything involving your money should be reviewed with your
        own lawyers and advisers.
      </p>
      <h2>Who this is for</h2>
      <ul>
        <li>
          Individuals or groups interested in discussing real estate-linked
          opportunities in Ghana
        </li>
        <li>
          Parties seeking a structured first call before sharing sensitive
          documents
        </li>
      </ul>
      <h2>What happens next</h2>
      <p>
        Reach out via WhatsApp or our contact page. We may ask about your goals,
        timeline, and how you prefer to work. Detailed terms belong in private
        discussion and formal agreements — not on this website.
      </p>
      <p className="legal-note">
        Giwa Investment does not use this site to market securities. Nothing
        here is an offer to sell or a solicitation to buy any investment
        product.
      </p>
      <p>
        <Link href="/work-with-us">Explore partnerships</Link> ·{" "}
        <Link href="/contact">Contact</Link>
      </p>
    </ProsePage>
  );
}
