import { siteConfig } from "@/config";

/**
 * Structured data (JSON-LD) voor lokale vindbaarheid:
 * PhysicalTherapy/MedicalBusiness + WebSite.
 */
export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "PhysicalTherapy"],
    "@id": `${siteConfig.domain}/#praktijk`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/kids-fysio-capelle.png`,
    image: `${siteConfig.domain}/images/KidsFysioCapelle-team-2.webp`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Kids+Fysio+Capelle+De+Linie+1D+Capelle+aan+den+IJssel",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.openingHours.days,
      opens: siteConfig.openingHours.opens,
      closes: siteConfig.openingHours.closes,
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [siteConfig.socials.instagram],
    medicalSpecialty: "PediatricPhysicalTherapy",
    availableService: [
      "Kinderfysiotherapie baby en dreumes",
      "Kinderfysiotherapie peuters en kleuters",
      "Kinderfysiotherapie basisschoolkinderen",
      "Kinderfysiotherapie tieners",
      "Sensorische informatieverwerking (SI) therapie",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.domain}/#praktijk` },
    inLanguage: "nl-NL",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
