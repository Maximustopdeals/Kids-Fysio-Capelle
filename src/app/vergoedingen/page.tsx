import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/vergoedingen.json";

export const metadata: Metadata = {
  title: { absolute: "Vergoedingen - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },
  description: "Heldere informatie over vergoedingen vanuit de zorgverzekering en onze tarieven. Geen verrassingen, wel optimale zorg voor uw kind.",

  keywords: ["Vergoedingen", "zorgverzekering", "Kids Fysio Capelle", "Kinderfysiotherapie", "kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam"],
  alternates: { canonical: "/vergoedingen/" },
  openGraph: {
    url: "/vergoedingen/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="vergoedingen" html={content.html} scripts={content.scripts} />
  );
}
