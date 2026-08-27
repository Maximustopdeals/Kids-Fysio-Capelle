import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute:
      "Behandelingen - Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging",
  },
  description:
    "Kinderfysiotherapie afgestemd op elke ontwikkelfase: baby-dreumes, peuters-kleuters, basisschoolkinderen en tieners in Capelle aan den IJssel.",
  keywords: [
    "Behandelingen",
    "kinderfysiotherapie Capelle aan den IJssel",
    "kinderfysiotherapie Rotterdam",
    "Kids Fysio Capelle",
  ],
  alternates: { canonical: "/behandelingen/" },
  openGraph: {
    url: "/behandelingen/",
    type: "website",
    locale: "nl_NL",
    siteName: "Kids Fysio Capelle",
  },
};

const categories = [
  {
    href: "/baby-dreumes/",
    img: "/images/Kinderfysiotherapeut-begeleidt-een-baby-tijdens-een-oefening-op-een-speelmat.jpg",
    title: "Baby/Dreumes",
    years: "0-2 jaar",
    text: "Gespecialiseerde zorg voor de allerkleinsten. Van motorische ontwikkeling tot voorkeurshoudingen en overstrekking.",
  },
  {
    href: "/peuters-kleuters/",
    img: "/images/peuter_kleuter-behandeling-bij-kids-fysio-Capelle.png",
    title: "Peuter/Kleuter",
    years: "2-4 jaar",
    text: "Ondersteuning bij de motorische ontwikkeling, evenwicht, coördinatie en voorbereiding op de basisschool.",
  },
  {
    href: "/basisschool/",
    img: "/images/Kinderfysio-basisschool-kids-fysio-Capelle.jpg",
    title: "Basisschool",
    years: "5-12 jaar",
    text: "Hulp bij motorische vaardigheden, schrijfproblemen, houding, sportblessures en conditieverbetering.",
  },
  {
    href: "/tiener/",
    img: "/images/Tiener-die-kinderfysiotherapie-krijgt-van-Kids-Fysio-Capelle.jpg",
    title: "Tiener",
    years: "12-18 jaar",
    text: "Begeleiding bij groeigerelateerde klachten, sportblessures, houdingscorrectie en conditietraining.",
  },
];

export default function BehandelingenPage() {
  return (
    <main style={{ background: "#ffffff" }}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "420px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/afbeelding-KidsFysioCapelle-oefenzaal.webp"
          alt="Oefenzaal van Kids Fysio Capelle"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(181,223,203,0.92) 0%, rgba(181,223,203,0.7) 30%, rgba(181,223,203,0.4) 70%, rgba(181,223,203,0.2) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 24px",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              color: "#1a5c47",
              margin: "0 0 16px",
              maxWidth: "640px",
              lineHeight: 1.15,
            }}
          >
            Behandelingen
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#1e2b2a",
              maxWidth: "560px",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Kinderfysiotherapie afgestemd op elke ontwikkelfase — van baby tot
            tiener, altijd spelenderwijs en op maat.
          </p>
        </div>
      </section>

      {/* Overzichtskaarten */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px" }}>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "#1a5c47",
              margin: "0 0 16px",
            }}
          >
            Kinderfysiotherapie afgestemd op elke ontwikkelfase
          </h2>
          <p style={{ color: "#4a5f5c", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>
            Onze kinderfysiotherapeuten begeleiden kinderen van baby tot tiener
            met gerichte behandeling, motorische stimulatie en ontwikkeling in
            beweging.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{
                display: "block",
                background: "#b5dfcb",
                borderRadius: "24px",
                overflow: "hidden",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={`Kinderfysiotherapie ${c.title} bij Kids Fysio Capelle`}
                style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "28px" }}>
                <div
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    color: "#1a5c47",
                    marginBottom: "4px",
                  }}
                >
                  {c.title}
                </div>
                <div style={{ color: "#2a7d62", fontWeight: 700, marginBottom: "12px" }}>
                  {c.years}
                </div>
                <p style={{ color: "#1e2b2a", lineHeight: 1.6, margin: "0 0 20px" }}>{c.text}</p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px 26px",
                    background: "#ffffff",
                    color: "#1a5c47",
                    borderRadius: "30px",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  Lees meer
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            background: "linear-gradient(145deg, #f0f9f5, #b5dfcb)",
            borderRadius: "24px",
            padding: "60px 40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              color: "#1a5c47",
              margin: "0 0 16px",
            }}
          >
            Heeft u vragen over kinderfysiotherapie?
          </h2>
          <p
            style={{
              color: "#1e2b2a",
              fontSize: "1.1rem",
              maxWidth: "640px",
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Onze gespecialiseerde kinderfysiotherapeuten in Capelle aan den
            IJssel staan voor u klaar. Neem vrijblijvend contact op voor advies
            of het maken van een afspraak.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:0103032575"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "#1a5c47",
                color: "#ffffff",
                borderRadius: "100px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Bel 010-303 2575
            </a>
            <Link
              href="/contact/"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "#ffffff",
                color: "#1a5c47",
                borderRadius: "100px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                textDecoration: "none",
                border: "2px solid #1a5c47",
              }}
            >
              Afspraak maken
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
