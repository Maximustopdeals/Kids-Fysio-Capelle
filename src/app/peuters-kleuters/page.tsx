import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/peuters-kleuters.json";

export const metadata: Metadata = {
  title: { absolute: "Peuters-kleuters - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },

  keywords: ["kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam", "Kids Fysio Capelle"],
  alternates: { canonical: "/peuters-kleuters/" },
  openGraph: {
    url: "/peuters-kleuters/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="peuters-kleuters" html={content.html} scripts={content.scripts} />
  );
}
