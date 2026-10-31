import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jericho — open to new opportunities, freelance projects, and collaboration.",
  openGraph: {
    title: "Contact | Jericho Portfolio",
    description: "Open to new opportunities, freelance, and collaboration.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}