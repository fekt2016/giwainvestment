import type { Metadata } from "next";
import ProsePage from "@/components/ProsePage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Giwa Investment and giwainvestment.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <ProsePage>
      <h1>Privacy policy</h1>
      <p className="lead">
        Short policy for giwainvestment.com. Review with a lawyer before relying
        on it for compliance.
      </p>
      <p>
        <strong>Who we are.</strong> Giwa Investment operates this website to
        share information about our real estate services in Ghana.
      </p>
      <p>
        <strong>What we collect.</strong> If you contact us, we may receive your
        name, email address, phone number, and any details you choose to provide.
        If you use WhatsApp, your message is handled under WhatsApp&apos;s terms
        as well.
      </p>
      <p>
        <strong>How we use information.</strong> We use contact details only to
        respond to your enquiry and, if you agree, to follow up about related
        services.
      </p>
      <p>
        <strong>Cookies.</strong> This site may use limited technical cookies if
        your host or embeds add them. If you add analytics later, update this
        section and obtain consent if required.
      </p>
      <p>
        <strong>Retention.</strong> We keep messages only as long as needed to
        complete your request or meet legal obligations.
      </p>
      <p>
        <strong>Your rights.</strong> You may ask to access or correct your
        personal data by emailing{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p>
        <strong>Changes.</strong> We may update this page; the latest version
        will always be posted here with a revised date.
      </p>
      <p>
        <em>Last updated: April 2026</em>
      </p>
    </ProsePage>
  );
}
