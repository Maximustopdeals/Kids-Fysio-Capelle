import type { Metadata } from "next";
import { Nunito, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Analytics, { GtmNoscript } from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default:
      "Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging",
    template: "%s",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "kinderfysiotherapie Capelle aan den IJssel",
    "kinderfysiotherapeut Capelle aan den IJssel",
    "kinderfysiotherapie Rotterdam",
    "Kids Fysio Capelle",
    "baby fysiotherapie",
    "SI-therapie kinderen",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
    description: siteConfig.description,
    images: [
      {
        url: "/images/KidsFysioCapelle-team-2.webp",
        width: 1200,
        height: 630,
        alt: "Het team van Kids Fysio Capelle in de praktijk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
    description: siteConfig.description,
    images: ["/images/KidsFysioCapelle-team-2.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console-verificatie — code invullen in src/config.ts
  ...(siteConfig.googleSiteVerification
    ? { verification: { google: siteConfig.googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl-NL" className={`${nunito.variable} ${openSans.variable}`}>
      <body>
        <GtmNoscript />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
