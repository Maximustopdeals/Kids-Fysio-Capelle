"use client";

import { useState } from "react";
import Link from "next/link";

const behandelingenSub = [
  { href: "/baby-dreumes/", label: "Baby-dreumes" },
  { href: "/peuters-kleuters/", label: "Peuters-kleuters" },
  { href: "/basisschool/", label: "Basisschool" },
  { href: "/tiener/", label: "Tiener" },
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <a
          className="instagram-link"
          href="https://www.instagram.com/kidsfysiocapelle/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Volg Kids Fysio Capelle op Instagram"
        >
          <InstagramIcon />
        </a>
        <span className="topbar-center">
          Samen maken we bewegen weer leuk
        </span>
        <a className="topbar-email" href="mailto:info@kidsfysiocapelle.nl">
          info@kidsfysiocapelle.nl
        </a>
      </div>

      <nav className="mainnav" aria-label="Hoofdmenu">
        <div className="mainnav-inner">
          <Link href="/" className="mainnav-logo" aria-label="Kids Fysio Capelle - Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/kids-fysio-capelle.png" alt="Kids Fysio Capelle" />
          </Link>

          <ul className="mainnav-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/over-ons/">
                Over ons <span className="caret" aria-hidden="true" />
              </Link>
              <ul className="dropdown">
                <li>
                  <Link href="/samenwerkingen/">Samenwerkingen</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/behandelingen/">
                Behandelingen <span className="caret" aria-hidden="true" />
              </Link>
              <ul className="dropdown">
                {behandelingenSub.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/reviews/">Reviews</Link>
            </li>
            <li>
              <Link href="/specialisaties/">Specialisaties</Link>
            </li>
            <li>
              <Link href="/vergoedingen/">Vergoedingen</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>

          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
          <ul>
            <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li><Link href="/over-ons/" onClick={() => setMobileOpen(false)}>Over ons</Link></li>
            <li className="mobile-sub"><Link href="/samenwerkingen/" onClick={() => setMobileOpen(false)}>Samenwerkingen</Link></li>
            <li><Link href="/behandelingen/" onClick={() => setMobileOpen(false)}>Behandelingen</Link></li>
            {behandelingenSub.map((s) => (
              <li className="mobile-sub" key={s.href}>
                <Link href={s.href} onClick={() => setMobileOpen(false)}>{s.label}</Link>
              </li>
            ))}
            <li><Link href="/reviews/" onClick={() => setMobileOpen(false)}>Reviews</Link></li>
            <li><Link href="/specialisaties/" onClick={() => setMobileOpen(false)}>Specialisaties</Link></li>
            <li><Link href="/vergoedingen/" onClick={() => setMobileOpen(false)}>Vergoedingen</Link></li>
            <li><Link href="/contact/" onClick={() => setMobileOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
