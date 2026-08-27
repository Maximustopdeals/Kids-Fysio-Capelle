import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/home.json";

export const metadata: Metadata = {
  title: { absolute: "Home - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },

  keywords: ["kinderfysiotherapie capelle aan den ijssel", "Kids Fysio Capelle", "kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam"],
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="home" html={content.html} scripts={content.scripts} />
  );
}
