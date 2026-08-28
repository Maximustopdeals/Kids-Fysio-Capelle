import Script from "next/script";
import { siteConfig } from "@/config";

/**
 * Google Tag Manager + Google Analytics 4.
 * Worden pas geladen zodra de ID's in src/config.ts zijn ingevuld.
 */
export default function Analytics() {
  const { googleTagManagerId, googleAnalyticsId } = siteConfig;
  return (
    <>
      {googleTagManagerId && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${googleTagManagerId}');`,
          }}
        />
      )}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${googleAnalyticsId}');`,
            }}
          />
        </>
      )}
    </>
  );
}

/** <noscript>-variant van GTM — direct na <body> geplaatst in layout.tsx */
export function GtmNoscript() {
  const { googleTagManagerId } = siteConfig;
  if (!googleTagManagerId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
