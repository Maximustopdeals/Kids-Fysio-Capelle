"use client";

import { useState } from "react";
import { formspreeEndpoint } from "@/config";

// Het Formspree-endpoint wordt centraal beheerd in src/config.ts
// (formspreeFormId invullen zodra de code is ontvangen).
const FORMSPREE_ENDPOINT = formspreeEndpoint;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  border: "1px solid rgba(26, 92, 71, 0.2)",
  borderRadius: "12px",
  fontSize: "1rem",
  fontFamily: "'Open Sans', sans-serif",
  color: "#1e2b2a",
  background: "#ffffff",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 700,
  color: "#1a5c47",
  marginBottom: "8px",
  fontSize: "0.95rem",
};

const fieldStyle: React.CSSProperties = { marginBottom: "20px" };

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "32px 20px",
          background: "#f0f9f5",
          borderRadius: "16px",
          border: "1px solid rgba(26, 92, 71, 0.15)",
        }}
      >
        <h3 style={{ color: "#1a5c47", fontFamily: "'Nunito', sans-serif", marginTop: 0 }}>
          Bedankt voor uw bericht!
        </h3>
        <p style={{ color: "#4a5f5c", marginBottom: 0 }}>
          We nemen zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="grid gap-5 md:grid-cols-2"
        style={{ marginBottom: "0" }}
      >
        <div style={fieldStyle}>
          <label htmlFor="kfc-naam" style={labelStyle}>
            Uw naam *
          </label>
          <input
            id="kfc-naam"
            name="uw_naam"
            type="text"
            required
            style={inputStyle}
            placeholder="Vul hier uw voor en achternaam in"
          />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="kfc-naam-kind" style={labelStyle}>
            Naam van uw kind *
          </label>
          <input
            id="kfc-naam-kind"
            name="naam_kind"
            type="text"
            required
            style={inputStyle}
            placeholder="Vul hier de naam van uw kind in"
          />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="kfc-geboortedatum" style={labelStyle}>
            Geboortedatum van uw kind *
          </label>
          <input
            id="kfc-geboortedatum"
            name="geboortedatum_kind"
            type="date"
            required
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="kfc-email" style={labelStyle}>
            E-mail *
          </label>
          <input
            id="kfc-email"
            name="email"
            type="email"
            required
            style={inputStyle}
            placeholder="Vul hier uw e-mailadres in"
          />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="kfc-telefoon" style={labelStyle}>
            Telefoonnummer *
          </label>
          <input
            id="kfc-telefoon"
            name="telefoonnummer"
            type="tel"
            required
            style={inputStyle}
            placeholder="Vul hier uw telefoonnummer in"
          />
        </div>
        <div className="grid grid-cols-2 gap-5" style={fieldStyle}>
          <div>
            <label htmlFor="kfc-postcode" style={labelStyle}>
              Postcode *
            </label>
            <input
              id="kfc-postcode"
              name="postcode"
              type="text"
              required
              style={inputStyle}
              placeholder="Vul hier uw postcode in"
            />
          </div>
          <div>
            <label htmlFor="kfc-huisnummer" style={labelStyle}>
              Huisnummer *
            </label>
            <input
              id="kfc-huisnummer"
              name="huisnummer"
              type="text"
              required
              style={inputStyle}
              placeholder="Vul hier uw huisnummer in"
            />
          </div>
        </div>
      </div>

      <div style={fieldStyle}>
        <label htmlFor="kfc-gevonden" style={labelStyle}>
          Hoe heb je mij gevonden? *
        </label>
        <select id="kfc-gevonden" name="hoe_gevonden" required style={inputStyle} defaultValue="">
          <option value="" disabled>
            --- Selecteer keuze ---
          </option>
          <option value="Google">Google</option>
          <option value="Familie en/ of vrienden">Familie en/ of vrienden</option>
          <option value="Instagram">Instagram</option>
          <option value="Anders">Anders</option>
        </select>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label htmlFor="kfc-info" style={labelStyle}>
          Aanvullende informatie *
        </label>
        <textarea
          id="kfc-info"
          name="aanvullende_informatie"
          required
          rows={6}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Vertel hier kort waar we u mee kunnen helpen"
        />
      </div>

      {status === "error" && (
        <p style={{ color: "#b3261e", marginBottom: "16px" }}>
          Er ging iets mis bij het versturen. Probeer het opnieuw of mail naar{" "}
          <a href="mailto:info@kidsfysiocapelle.nl">info@kidsfysiocapelle.nl</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          display: "inline-block",
          width: "100%",
          padding: "16px 32px",
          background: "#1a5c47",
          color: "#ffffff",
          border: "none",
          borderRadius: "100px",
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 800,
          fontSize: "1.05rem",
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.7 : 1,
          transition: "background 0.2s ease, transform 0.2s ease",
        }}
      >
        {status === "sending" ? "Versturen..." : "Verstuur bericht"}
      </button>
    </form>
  );
}
