import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/baby-dreumes.json";

export const metadata: Metadata = {
  title: { absolute: "Baby-dreumes - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },
  description: "Professionele begeleiding voor kinderen van 0-2 jaar bij motorische ontwikkeling, voorkeurshouding en overstrekken in Capelle aan den IJssel",

  keywords: ["Kinderfysiotherapie voor Baby & Dreumes", "kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam", "Kids Fysio Capelle"],
  alternates: { canonical: "/baby-dreumes/" },
  openGraph: {
    url: "/baby-dreumes/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="baby-dreumes" html={content.html} scripts={content.scripts} />
  );
}
