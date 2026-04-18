import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Giwa Investment — phone, WhatsApp, email, and message form.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
