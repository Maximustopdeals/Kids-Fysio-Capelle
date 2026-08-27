"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import ContactForm from "./ContactForm";

interface PageContentProps {
  html: string;
  scripts: string[];
  slug: string;
}

export default function PageContent({ html, scripts, slug }: PageContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [formMount, setFormMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Zorg dat inline scripts gsap kunnen gebruiken (home-hero animatie)
    (window as unknown as { gsap?: typeof gsap }).gsap = gsap;

    // Voer de inline scripts van de pagina uit
    const timers: number[] = [];
    scripts.forEach((code) => {
      try {
        // Scripts luisteren naar DOMContentLoaded; die is hier al voorbij,
        // daarom direct uitvoeren.
        const normalized = code.replace(
          /document\.addEventListener\(["']DOMContentLoaded["'],\s*(?:\(\)\s*=>|function\s*\(\))\s*{?/,
          "(() => {"
        );
        // Sluit de wrapper correct af wanneer we hem hebben geopend
        const wrapped = normalized.includes("(() => {")
          ? normalized.replace(/}\s*\)?;?\s*$/, "})();")
          : normalized;
        // eslint-disable-next-line no-eval
        (0, eval)(wrapped);
      } catch {
        try {
          // eslint-disable-next-line no-eval
          (0, eval)(code);
        } catch {
          /* animaties zijn optioneel */
        }
      }
    });

    // Elfsight reviews-widget laden
    if (slug === "reviews") {
      const s = document.createElement("script");
      s.src = "https://elfsightcdn.com/platform.js";
      s.async = true;
      document.body.appendChild(s);
    }

    // Mountpunt voor het React-contactformulier
    setFormMount(el.querySelector<HTMLElement>("#kfc-contact-form"));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [html, scripts, slug]);

  return (
    <>
      <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
      {formMount && createPortal(<ContactForm />, formMount)}
    </>
  );
}
