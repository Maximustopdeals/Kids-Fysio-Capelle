import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/samenwerkingen.json";

export const metadata: Metadata = {
  title: { absolute: "Samenwerkingen - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },

  keywords: ["kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam", "Kids Fysio Capelle"],
  alternates: { canonical: "/samenwerkingen/" },
  openGraph: {
    url: "/samenwerkingen/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="samenwerkingen" html={content.html} scripts={content.scripts} />
  );
}
