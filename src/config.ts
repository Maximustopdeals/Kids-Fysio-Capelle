/**
 * Centrale siteconfiguratie — Kids Fysio Capelle
 *
 * Vul hier straks alleen de ontvangen codes in; de rest van de site
 * (analytics, Search Console-verificatie, formulier) pakt ze automatisch op.
 */
export const siteConfig = {
  name: "Kids Fysio Capelle",
  legalName: "Kids Fysio Capelle",
  domain: "https://kidsfysiocapelle.nl",
  tagline: "Samen maken we bewegen weer leuk",
  description:
    "Gespecialiseerde kinderfysiotherapie in Capelle aan den IJssel. Voor baby's, dreumesen, peuters, kleuters, basisschoolkinderen en tieners. Vergoed door alle zorgverzekeraars.",

  // Contactgegevens
  phone: "010 303 2575",
  phoneHref: "tel:0103032575",
  email: "info@kidsfysiocapelle.nl",
  whatsapp: "https://wa.me/31682013490",

  // Adres & geo (voor LocalBusiness structured data)
  address: {
    street: "De Linie 1D",
    postalCode: "2905 AX",
    city: "Capelle aan den IJssel",
    country: "NL",
  },
  geo: { lat: 51.9341695, lng: 4.5948005 },
  kvk: "87211445",

  // Openingstijden (Ma t/m Vrij 08:30-18:00, avondspreekuur op afspraak)
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "18:00" },

  // Vindbaarheidsgebied (local SEO)
  areaServed: [
    "Capelle aan den IJssel",
    "Rotterdam",
    "Krimpen aan den IJssel",
    "Nieuwerkerk aan den IJssel",
    "Zevenhuizen",
    "Moerkapelle",
  ],

  socials: {
    instagram: "https://www.instagram.com/kidsfysiocapelle/",
  },

  /* ─── Integraties: codes hier invullen zodra ontvangen ─── */
  // Formspree formulier-ID, bijv. "abcdwxyz" (alleen het ID, niet de volledige URL)
  formspreeFormId: "VUL_HIER_FORM_ID_IN",
  // Google Analytics 4 measurement ID, bijv. "G-XXXXXXXXXX"
  googleAnalyticsId: "",
  // Google Tag Manager ID, bijv. "GTM-XXXXXXX"
  googleTagManagerId: "",
  // Google Search Console verificatiecode (alleen de content-waarde van de meta tag)
  googleSiteVerification: "",
} as const;

export const formspreeEndpoint = `https://formspree.io/f/${siteConfig.formspreeFormId}`;
