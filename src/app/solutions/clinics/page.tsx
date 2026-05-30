"use client";

import React from "react";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/locales/translations";

const ClinicsPage = () => {
  const { language, t } = useLanguage();
  const tMap = translations[language] || translations["en"];

  return (
    <div>
      {/* Background glow fx */}
      <div className="glow-blur-1"></div>

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="live-indicator" style={{ marginBottom: "1.5rem" }}>
            <span className="pulse-dot"></span>
            {t("clinicTag")}
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            {t("clinicHeroH1")} <br />
            <span className="text-gradient-orange">{t("clinicHeroH1Orange")}</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            {t("clinicHeroQuote")}
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            {t("clinicHeroDesc")}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20run%20a%20clinic%20and%20want%20to%20automate%20my%20patient%20bookings."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t("btnClinicAudit")}
            </a>
            <a href="#packages" className="btn btn-secondary">
              {t("btnClinicPackages")}
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "var(--section-bg-darker)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("clinicStat1")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("clinicStat1Label")}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("clinicStat2")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("clinicStat2Label")}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("clinicStat3")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("clinicStat3Label")}</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{t("whyStandardListings")}</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {t("dominateLocalSearch")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("theProblem")}</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("clinicProblem1")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("clinicProblem1Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("clinicProblem2")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("clinicProblem2Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("clinicProblem3")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("clinicProblem3Desc")}
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("theZenLiftSystem")}</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("clinicSolution1")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("clinicSolution1Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("clinicSolution2")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("clinicSolution2Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("clinicSolution3")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("clinicSolution3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages / Pricing Section */}
      <section className="section" id="packages" style={{ background: "var(--section-bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="tagline">{t("packagesTag")}</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>{t("packagesTitle")}</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {t("packagesSubtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            {/* Package 1 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{language === "en" ? "Presence Layer" : "प्रेजेंस लेयर"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("clinicPack1Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", margin: "1rem 0" }}>{t("clinicPack1Price")}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("clinicPack1Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.clinicPack1Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Starter%20package%20for%20clinics."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                {t("inquireBtn")}
              </a>
            </div>

            {/* Package 2 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", borderColor: "var(--primary)", background: "rgba(240, 123, 0, 0.03)" }}>
              <div>
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>{language === "en" ? "Most Requested" : "मोस्ट रिक्वेस्टेड"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("clinicPack2Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>{t("clinicPack2Price")}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("clinicPack2Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.clinicPack2Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Lead%20Flow%20%2B%20Chatbot%20package%20for%20clinics."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                {t("bookSetupBtn")}
              </a>
            </div>

            {/* Package 3 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{language === "en" ? "Full Scale" : "फुल स्केल"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("clinicPack3Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", margin: "1rem 0" }}>{t("clinicPack3Price")}<span style={{ fontSize: "1rem", fontWeight: "400" }}>{t("clinicPack3PriceUnit")}</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("clinicPack3Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.clinicPack3Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Clinic%20Growth%20Engine%20retainer."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                {t("inquireBtn")}
              </a>
            </div>
          </div>

          {/* Refund policy highlight banner */}
          <div className="glass-card" style={{ marginTop: "3rem", padding: "2rem", display: "flex", alignItems: "center", gap: "2rem", background: "rgba(212, 175, 55, 0.03)", borderColor: "rgba(212, 175, 55, 0.2)" }}>
            <div style={{ fontSize: "2.5rem" }}>🛡️</div>
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--accent-gold)", marginBottom: "0.3rem" }}>
                {t("onTimeGuaranteeTitle")}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                {t("onTimeGuaranteeDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Contact form */}
      <section className="section">
        <ContactSection />
      </section>
    </div>
  );
};

export default ClinicsPage;
