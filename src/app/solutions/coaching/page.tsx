"use client";

import React from "react";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/locales/translations";

const CoachingPage = () => {
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
            {t("coachingTag")}
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            {t("coachingHeroH1")} <br />
            <span className="text-gradient-orange">{t("coachingHeroH1Orange")}</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            {t("coachingHeroQuote")}
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            {t("coachingHeroDesc")}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20run%20a%20coaching%20center%20and%20want%20to%20fill%20my%20demo%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t("btnCoachingAudit")}
            </a>
            <a href="#packages" className="btn btn-secondary">
              {t("btnCoachingPackages")}
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "rgba(18, 18, 18, 0.4)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("coachingStat1")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("coachingStat1Label")}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("coachingStat2")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("coachingStat2Label")}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>{t("coachingStat3")}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("coachingStat3Label")}</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{language === "en" ? "Solve the admission season leakage" : "एडमिशन सीजन की कमियों को ठीक करें"}</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {language === "en"
                ? "Most coaching centers lose 30–40% of prospective students simply due to delayed responses or missed follow-up calls. Our systems capture and qualify interest immediately."
                : "ज़्यादातर कोचिंग सेंटर्स सिर्फ देरी से जवाब देने या फॉलो-अप कॉल्स मिस होने की वजह से 30-40% स्टूडेंट्स खो देते हैं। हमारा सिस्टम तुरंत लीड्स कैप्चर करता है।"}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("theProblem")}</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("coachingProblem1")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("coachingProblem1Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("coachingProblem2")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("coachingProblem2Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>{t("coachingProblem3")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("coachingProblem3Desc")}
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t("theZenLiftSystem")}</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("coachingSolution1")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("coachingSolution1Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("coachingSolution2")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("coachingSolution2Desc")}
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>{t("coachingSolution3")}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  {t("coachingSolution3Desc")}
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
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{language === "en" ? "Basic Authority" : "बुनियादी अथॉरिटी"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("coachingPack1Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", margin: "1rem 0" }}>{t("coachingPack1Price")}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("coachingPack1Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.coachingPack1Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Starter%20package%20for%20coaching%20centers."
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
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>{language === "en" ? "Highly Recommended" : "हाईली रिकमेंडेड"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("coachingPack2Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>{t("coachingPack2Price")}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("coachingPack2Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.coachingPack2Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Demo%20Class%20Funnel%20package%20for%20coaching%20centers."
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
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{language === "en" ? "Peak Season Support" : "पीक सीजन सपोर्ट"}</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>{t("coachingPack3Name")}</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-primary)", margin: "1rem 0" }}>{t("coachingPack3Price")}<span style={{ fontSize: "1rem", fontWeight: "400" }}>{t("coachingPack3PriceUnit")}</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  {t("coachingPack3Desc")}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {tMap.coachingPack3Bullets.map((bullet, idx) => (
                    <li key={idx}>✓ {bullet}</li>
                  ))}
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Admissions%20Retention%20retainer."
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
                  ? "We respect your institution's admissions cycle. If we do not deliver your website and booking systems within the working days defined in our proposal, or if they do not function exactly as agreed, you pay nothing. We refund your advance payment in full, no questions asked."
                  : "हम आपकी एकेडमी के एडमिशन साइकिल का सम्मान करते हैं। यदि हम वादे के मुताबिक आपकी वेबसाइट और बुकिंग सिस्टम डिलीवर नहीं करते, या वे काम नहीं करते, तो आपको कुछ भी पे नहीं करना है। एडवांस पेमेंट 100% वापस कर दी जाएगी।"}
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

export default CoachingPage;
