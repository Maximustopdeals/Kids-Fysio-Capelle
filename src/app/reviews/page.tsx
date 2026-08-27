import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import content from "@/content/reviews.json";

export const metadata: Metadata = {
  title: { absolute: "Reviews - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging" },

  keywords: ["kinderfysiotherapie Capelle aan den IJssel", "kinderfysiotherapie Rotterdam", "Kids Fysio Capelle"],
  alternates: { canonical: "/reviews/" },
  openGraph: {
    url: "/reviews/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

export default function Page() {
  return (
    <PageContent slug="reviews" html={content.html} scripts={content.scripts} />
  );
}
