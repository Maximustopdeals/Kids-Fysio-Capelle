# Kids Fysio Capelle — Next.js migratie

1-op-1 migratie van kidsfysiocapelle.nl van WordPress (Divi) naar **Next.js 16** (App Router, TypeScript), volledig statisch geëxporteerd. Compatibel met **Node.js 24** (minimum 20.9, zie `.nvmrc`).

## Commando's

```bash
npm install
npm run dev     # lokale ontwikkelserver
npm run build   # statische export naar out/ én dist/
```

De map `dist/` bevat de complete statische site en kan direct worden geüpload naar elke webhosting (Vercel, Netlify, cPanel, Nginx, ...).

## Structuur

- `src/app/` — routes (12 pagina's) + gedeelde layout
- `src/components/Header.tsx` / `Footer.tsx` — navigatie en footer
- `src/components/PageContent.tsx` — rendert de originele pagina-content (HTML + animatiescripts)
- `src/components/ContactForm.tsx` — contactformulier via Formspree
- `src/content/*.json` — opgeschoonde pagina-content uit de Migratik-export
- `public/images/` — alle afbeeldingen en documenten (lokaal, geen WordPress meer nodig)

## Integraties (src/config.ts)

Alle externe codes staan centraal in `src/config.ts` — eenmaal invullen en klaar:

| Sleutel | Wat | Zodra ontvangen |
|---|---|---|
| `formspreeFormId` | Contactformulier (Formspree) | alleen het formulier-ID invullen |
| `googleAnalyticsId` | Google Analytics 4 (G-…) | invullen, gtag wordt automatisch geladen |
| `googleTagManagerId` | Google Tag Manager (GTM-…) | invullen, GTM + noscript worden geladen |
| `googleSiteVerification` | Search Console | content-waarde van de meta tag invullen |

## SEO & structured data

- JSON-LD `PhysicalTherapy`/`MedicalBusiness`: adres, geo, openingstijden, KVK-vermelding, `areaServed` (Capelle aan den IJssel, Rotterdam e.o.)
- Per pagina: canonical URL, Open Graph, Twitter Card, keywords uit Rank Math
- `public/robots.txt` en `public/sitemap.xml` met prioriteiten

## Deployment (Vercel + Cloud86)

- DNS verhuist van Cloud86 naar Vercel: A-record → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`
- **MX-records voor de e-mail blijven ongemoeid bij Cloud86** — niet meenemen in de wijziging
- In Vercel: domein toevoegen als `kidsfysiocapelle.nl` en `www` → redirect naar non-www instellen
- Upload deze map als project; build command `npm run build`, output `out`

## Reviews

De reviewspagina gebruikt de bestaande Elfsight-widget (Google-reviews), die wordt
client-side geladen zoals op de WordPress-site.

## SEO

- Paginatitels en descriptions komen uit de Rank Math-metadata van de export
- `public/robots.txt` en `public/sitemap.xml` zijn inbegrepen
- Favicons overgenomen van de originele site
