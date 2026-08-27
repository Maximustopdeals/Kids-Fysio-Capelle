import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/tiener.json";

export const metadata: Metadata = {
  title: { absolute: "Tiener - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },

  keywords: ["kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam", "Kids Fysio Capelle"],
  alternates: { canonical: "/tiener/" },
  openGraph: {
    url: "/tiener/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="tiener" html={content.html} scripts={content.scripts} />
  );
}
