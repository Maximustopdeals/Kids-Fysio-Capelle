import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/over-ons.json";

export const metadata: Metadata = {
  title: { absolute: "Over ons - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },

  keywords: ["Over ons", "De praktijk", "Kinderfysiotherapie in Capelle aan den IJssel", "Kids Fysio Capelle", "kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam"],
  alternates: { canonical: "/over-ons/" },
  openGraph: {
    url: "/over-ons/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="over-ons" html={content.html} scripts={content.scripts} />
  );
}
