"use client";

import React from "react";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/locales/translations";

const FitnessPage = () => {
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
            {t("fitnessTag")}
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            {t("fitnessHeroH1")} <br />
            <span className="text-gradient-orange">{t("fitnessHeroH1Orange")}</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            {t("fitnessHeroQuote")}
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            {t("fitnessHeroDesc")}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20run%20a%20gym%20and%20want%20to%20set%20up%20a%20free%20trial%20funnel."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t("btnFitnessAudit")}
            </a>
            <a href="#packages" className="btn btn-secondary">
              {t("btnFitnessPackages")}
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "var(--section-bg-darker)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("fitnessStat1")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("fitnessStat1Label")}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("fitnessStat2")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("fitnessStat2Label")}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("fitnessStat3")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("fitnessStat3Label")}</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{language === "en" ? "Get control over your membership sales" : "अपनी मेंबरशिप सेल्स पर पूरा कंट्रोल पाएं"}</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {language === "en"
                ? "Most gym owners run Instagram ads that lead to a blank profile. They get comments, views, but zero structured contact sheets. Here is how we bridge that gap."
                : "ज़्यादातर जिम मालिक इंस्टाग्राम एड्स चलाते हैं जो सीधे खाली प्रोफाइल पर जाते हैं। उन्हें कमेंट्स और व्यूज तो मिलते हैं, पर कोई सॉलिड लीड डेटा नहीं मिलता। हम इसी गैप को भरते हैं।"}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("theProblem")}</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("fitnessProblem1")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("fitnessProblem1Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("fitnessProblem2")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("fitnessProblem2Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("fitnessProblem3")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("fitnessProblem3Desc")}
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("theZenLiftSystem")}</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("fitnessSolution1")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("fitnessSolution1Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("fitnessSolution2")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("fitnessSolution2Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("fitnessSolution3")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("fitnessSolution3Desc")}
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
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{language === "en" ? "Offer Showcase" : "ऑफर शोकेस"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("fitnessPack1Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", margin: "1rem 0" }}>{t("fitnessPack1Price")}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("fitnessPack1Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.fitnessPack1Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Starter%20landing%20page%20for%20my%20gym."
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
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>{language === "en" ? "Best Value" : "बेस्ट वैल्यू"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("fitnessPack2Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>{t("fitnessPack2Price")}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("fitnessPack2Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.fitnessPack2Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Trial%20Capture%20Funnel%20package%20for%20my%20gym."
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
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{language === "en" ? "Steady Pipeline" : "स्टेडी पाइपलाइन"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("fitnessPack3Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", margin: "1rem 0" }}>{t("fitnessPack3Price")}<span style={{ fontSize: "1rem", fontWeight: "400" }}>{t("fitnessPack3PriceUnit")}</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("fitnessPack3Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.fitnessPack3Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Gym%20Growth%20Retainer."
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
                {language === "en"
                  ? "We work to make your business grow. If we do not deliver your landing page and trial registration system within the working days defined in our proposal, or if they do not perform exactly as agreed, you pay nothing. We refund your advance payment in full, no questions asked."
                  : "हम आपके बिज़नेस को बढ़ाने के लिए काम करते हैं। यदि हम हमारे प्रपोजल में तय किए गए दिनों के अंदर आपकी लैंडिंग पेज और ट्रायल रजिस्ट्रेशन सिस्टम डिलीवर नहीं करते, या वे काम नहीं करते, तो आपको कुछ भी पे नहीं करना है। एडवांस पेमेंट 100% वापस होगी।"}
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

export default FitnessPage;
