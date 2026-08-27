import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/contact.json";

export const metadata: Metadata = {
  title: { absolute: "Contact - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },

  keywords: ["kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam", "Kids Fysio Capelle"],
  alternates: { canonical: "/contact/" },
  openGraph: {
    url: "/contact/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="contact" html={content.html} scripts={content.scripts} />
  );
}
