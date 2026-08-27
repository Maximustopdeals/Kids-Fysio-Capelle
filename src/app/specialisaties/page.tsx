import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/specialisaties.json";

export const metadata: Metadata = {
  title: { absolute: "Specialisaties - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },

  keywords: ["kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam", "Kids Fysio Capelle"],
  alternates: { canonical: "/specialisaties/" },
  openGraph: {
    url: "/specialisaties/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="specialisaties" html={content.html} scripts={content.scripts} />
  );
}
