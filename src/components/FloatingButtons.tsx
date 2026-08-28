"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config";

function WhatsAppGlyph({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

const waLink = `${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hallo Kids Fysio Capelle, ik heb een vraag."
)}`;

/* Alle stijlen van deze widget staan bewust in het component zelf,
   zodat de widget ook werkt zonder bijgewerkte globals.css. */
const widgetCss = `
.floating-buttons{position:fixed;right:22px;bottom:22px;z-index:2000;display:flex;flex-direction:column;align-items:center;gap:14px}
.whatsapp-float{display:flex;align-items:center;justify-content:center;width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;background:#25d366;color:#fff;box-shadow:0 8px 24px rgba(37,211,102,.45);transition:transform .2s ease,box-shadow .2s ease;position:relative}
.whatsapp-float::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid rgba(37,211,102,.55);animation:whatsapp-pulse 2.4s ease-out infinite}
@keyframes whatsapp-pulse{0%{transform:scale(1);opacity:1}70%{transform:scale(1.45);opacity:0}100%{transform:scale(1.45);opacity:0}}
.whatsapp-float:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 12px 30px rgba(37,211,102,.55)}
.back-to-top{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;border:none;background:#1a5c47;color:#fff;cursor:pointer;box-shadow:0 8px 20px rgba(26,92,71,.35);opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .25s ease,transform .25s ease,visibility .25s,background .2s ease}
.back-to-top.visible{opacity:1;visibility:visible;transform:translateY(0)}
.back-to-top:hover{background:#2a7d62}
.wa-chat{position:fixed;right:22px;bottom:96px;z-index:2100;width:340px;max-width:calc(100vw - 44px);background:#fff;border-radius:18px;box-shadow:0 24px 70px rgba(13,47,38,.28);overflow:hidden;opacity:0;visibility:hidden;transform:translateY(16px) scale(.97);transform-origin:bottom right;transition:opacity .25s ease,transform .25s ease,visibility .25s;pointer-events:none}
.wa-chat.open{opacity:1;visibility:visible;transform:translateY(0) scale(1);pointer-events:auto}
.wa-chat-header{display:flex;align-items:center;gap:14px;padding:16px 18px;background:#fff;border-bottom:1px solid #eef2f0}
.wa-chat-avatar{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;background:#25d366;color:#fff;flex-shrink:0}
.wa-chat-title{display:flex;flex-direction:column;gap:2px;flex:1}
.wa-chat-title strong{font-family:var(--font-nunito),"Nunito",sans-serif;font-weight:800;font-size:1rem;color:#1e2b2a;letter-spacing:.02em}
.wa-chat-status{display:inline-flex;align-items:center;gap:6px;font-size:.85rem;font-weight:600;color:#25d366}
.wa-chat-dot{width:8px;height:8px;border-radius:50%;background:#25d366}
.wa-chat-close{background:none;border:none;cursor:pointer;color:#4a5f5c;padding:6px;border-radius:8px;transition:background .2s ease,color .2s ease}
.wa-chat-close:hover{background:#f0f9f5;color:#1a5c47}
.wa-chat-body{padding:20px 18px;background:#f7faf8}
.wa-chat-bubble{margin:0;background:#fff;border:1px solid #e8f0ec;border-radius:14px;border-top-left-radius:4px;padding:14px 16px;font-size:.98rem;line-height:1.55;color:#1e2b2a;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.wa-chat-start{display:block;margin:0;padding:17px 20px;background:#25d366;color:#fff;text-align:center;font-family:var(--font-nunito),"Nunito",sans-serif;font-weight:800;font-size:1.05rem;letter-spacing:.08em;transition:background .2s ease;text-decoration:none}
.wa-chat-start:hover{background:#1fb857}
`;

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{widgetCss}</style>

      {/* WhatsApp chat-popup */}
      <div className={`wa-chat${chatOpen ? " open" : ""}`} role="dialog" aria-label="WhatsApp chat" aria-hidden={!chatOpen}>
        <div className="wa-chat-header">
          <span className="wa-chat-avatar">
            <WhatsAppGlyph size={26} />
          </span>
          <span className="wa-chat-title">
            <strong>{siteConfig.name}</strong>
            <span className="wa-chat-status">
              <span className="wa-chat-dot" /> Online
            </span>
          </span>
          <button
            type="button"
            className="wa-chat-close"
            aria-label="Chat sluiten"
            onClick={() => setChatOpen(false)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>
        <div className="wa-chat-body">
          <p className="wa-chat-bubble">
            Hallo! Hoe kunnen we u helpen? Stuur ons gerust een bericht. We
            reageren zo snel mogelijk.
          </p>
        </div>
        <a
          className="wa-chat-start"
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          START CHAT
        </a>
      </div>

      <div className="floating-buttons">
        <button
          type="button"
          className={`back-to-top${showTop ? " visible" : ""}`}
          aria-label="Terug naar boven"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>

        <button
          type="button"
          className="whatsapp-float"
          aria-label={chatOpen ? "WhatsApp-chat sluiten" : "Chat via WhatsApp"}
          aria-expanded={chatOpen}
          onClick={() => setChatOpen((v) => !v)}
        >
          {chatOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <WhatsAppGlyph />
          )}
        </button>
      </div>
    </>
  );
}
