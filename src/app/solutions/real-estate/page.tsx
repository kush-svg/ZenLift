"use client";

import React from "react";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/locales/translations";

const RealEstatePage = () => {
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
            {t("realestateTag")}
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            {t("realestateHeroH1")} <br />
            <span className="text-gradient-orange">{t("realestateHeroH1Orange")}</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            {t("realestateHeroQuote")}
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            {t("realestateHeroDesc")}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20a%20real%20estate%20broker%20and%20want%20to%20set%20up%20an%20exclusive%20lead%20funnel."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t("btnRealestateAudit")}
            </a>
            <a href="#packages" className="btn btn-secondary">
              {t("btnRealestatePackages")}
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "rgba(18, 18, 18, 0.4)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("realestateStat1")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("realestateStat1Label")}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("realestateStat2")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("realestateStat2Label")}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("realestateStat3")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("realestateStat3Label")}</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{language === "en" ? "Bypass the portal price-war" : "पोर्टल की प्राइस-वॉर से बाहर निकलें"}</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {language === "en"
                ? "Buying listing packages on 99acres or Housing.com sends the same buyer to 10 competing brokers. Here is how we bring serious clients exclusively to you."
                : "99acres या Housing.com जैसी साइट्स पर लिस्टिंग पैकेजेस खरीदने से एक ही बायर 10 अलग-अलग ब्रोकर्स के पास जाता है। यहाँ देखें कि हम सिर्फ आपके लिए सीरियस क्लाइंट्स कैसे लाते हैं।"}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("theProblem")}</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("realestateProblem1")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("realestateProblem1Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("realestateProblem2")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("realestateProblem2Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("realestateProblem3")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("realestateProblem3Desc")}
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("theZenLiftSystem")}</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("realestateSolution1")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("realestateSolution1Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("realestateSolution2")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("realestateSolution2Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("realestateSolution3")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("realestateSolution3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages / Pricing Section */}
      <section className="section" id="packages" style={{ background: "rgba(10, 10, 10, 0.5)" }}>
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
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{language === "en" ? "Brand Presence" : "ब्रांड प्रेजेंस"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("realestatePack1Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", margin: "1rem 0" }}>{t("realestatePack1Price")}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("realestatePack1Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.realestatePack1Bullets.map((bullet: string, idx: number) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Starter%20package%20for%20brokers."
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
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>{language === "en" ? "Highest ROI" : "हाईएस्ट ROI"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("realestatePack2Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>{t("realestatePack2Price")}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("realestatePack2Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.realestatePack2Bullets.map((bullet: string, idx: number) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Brochure%20%26%20Qualifier%20Bot%20package%20for%20brokers."
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
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{language === "en" ? "Ad Campaign Retainer" : "एड कैंपेन रिटेनर"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("realestatePack3Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", margin: "1rem 0" }}>{t("realestatePack3Price")}<span style={{ fontSize: "1rem", fontWeight: "400" }}>{t("realestatePack3PriceUnit")}</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("realestatePack3Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.realestatePack3Bullets.map((bullet: string, idx: number) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Project%20Launch%20Engine%20retainer."
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
                  ? "We respect your brokerage. If we do not deliver your website and booking systems within the working days defined in our proposal, or if they do not perform exactly as agreed, you pay nothing. We refund your advance payment in full, no questions asked."
                  : "हम आपकी ब्रोकरेज का सम्मान करते हैं। यदि हम वादे के मुताबिक आपकी वेबसाइट और बुकिंग सिस्टम डिलीवर नहीं करते, या वे काम नहीं करते, तो आपको कुछ भी पे नहीं करना है। एडवांस पेमेंट 100% वापस होगी।"}
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

export default RealEstatePage;
