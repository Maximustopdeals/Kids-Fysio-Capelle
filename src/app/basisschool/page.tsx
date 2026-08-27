import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/basisschool.json";

export const metadata: Metadata = {
  title: { absolute: "Basisschool - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },
  description: "Professionele begeleiding voor kinderen van 4–12 jaar bij motorische ontwikkeling, schrijfproblemen en sportblessures in Capelle aan den IJssel",

  keywords: ["Kinderfysiotherapie voor Basisschoolkinderen", "kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam", "Kids Fysio Capelle"],
  alternates: { canonical: "/basisschool/" },
  openGraph: {
    url: "/basisschool/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="basisschool" html={content.html} scripts={content.scripts} />
  );
}
