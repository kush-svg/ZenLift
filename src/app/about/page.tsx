"use client";

import React from "react";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/components/LanguageContext";

const AboutPage = () => {
  const { language, t } = useLanguage();

  const steps = language === "en" ? [
    {
      step: "01",
      title: "DFY Agency Services",
      description: "We work directly with local business owners in Faridabad & Delhi NCR to build custom websites and set up inquiry capture databases, gaining first-hand market understanding.",
    },
    {
      step: "02",
      title: "Productized Packages",
      description: "We turn recurring client workflows into standardized service packages (e.g. Clinic Appointment Funnels, Demo-Class Reminders), refining templates and lowering costs.",
    },
    {
      step: "03",
      title: "Specialized SaaS Products",
      description: "We package repeated manual workflows into lightweight, affordable SaaS softwares (like WhypaperBill POS or TutorPlus), scaling operations with recurring license tools.",
    },
  ] : [
    {
      step: "01",
      title: "DFY एजेंसी सर्विसेज",
      description: "हम फरीदाबाद और दिल्ली NCR के लोकल बिज़नेस मालिकों के साथ मिलकर कस्टमाइज्ड वेबसाइट्स बनाते हैं और इनक्वायरी डेटाबेस सेटअप करते हैं, जिससे उनके बिज़नेस को लाइव ग्रोथ मिले।",
    },
    {
      step: "02",
      title: "प्रोडक्टाइज़्ड पैकेजेस",
      description: "हम बार-बार इस्तेमाल होने वाले ऑटोमेशन को आसान रेडीमेड सर्विस पैकेजेस (जैसे क्लिनिक अपॉइंटमेंट फनल्स, डेमो रिमाइंडर्स) में बदल देते हैं, जिससे कॉस्ट काफी कम हो जाती है।",
    },
    {
      step: "03",
      title: "स्केलेबल SaaS प्रोडक्ट्स",
      description: "हम लोकल बिज़नेस की रोज़मर्रा की ज़रूरतों को आसान और बेहद किफायती SaaS सॉफ्टवेयर्स (जैसे WhypaperBill POS या TutorPlus) में पैक करते हैं, जो उनके काम को स्केल कर सकें।",
    },
  ];

  const team = language === "en" ? [
    {
      role: "Sales & Client Strategy",
      desc: "Handles outreach, audits business processes, drafts outcome proposals, and manages ongoing client accounts, ensuring our setups solve real operational problems.",
    },
    {
      role: "Design & Conversion Architect",
      desc: "Drafts mobile-first user interfaces, designs sleek layouts, writes niche-specific copy, and sets up high-converting landing pages that capture patient or student leads.",
    },
    {
      role: "Automation & Software Engineer",
      desc: "Programs automated WhatsApp FAQ bots, configures lead logs, creates API integrations, and architects our upcoming lightweight SaaS products.",
    },
  ] : [
    {
      role: "सेल्स और क्लाइंट स्ट्रेटेजी",
      desc: "आउटरीच संभालना, बिज़नेस ऑपरेशन्स का डिजिटल ऑडिट करना, प्रपोजल ड्राफ्ट करना और यह सुनिश्चित करना कि हमारे ऑटोमेशन क्लाइंट्स की असली समस्याओं को ठीक करें।",
    },
    {
      role: "डिजाइन और कनवर्टर आर्किटेक्ट",
      desc: "शानदार मोबाइल-फ्रेंडली इंटरफ़ेस डिज़ाइन करना, प्रीमियम लेआउट्स बनाना, कस्टमाइज्ड कॉपियां लिखना और ऐसे हाई-कन्वर्टिंग पेजेस सेटअप करना जो कस्टमर्स लाएं।",
    },
    {
      role: "ऑटोमेशन और सॉफ्टवेयर इंजीनियर",
      desc: "ऑटोमेटेड WhatsApp चैटबॉट्स कोड करना, गूगल शीट्स लीड लॉग्स और APIs कॉन्फ़िगर करना और हमारे आने वाले हल्के और तेज़ SaaS सॉफ्टवेयर्स का आर्किटेक्चर बनाना।",
    },
  ];

  const techStack = language === "en" ? [
    { name: "Next.js (SSG)", desc: "Static site generation for perfect loading speeds and absolute SEO crawls." },
    { name: "Vercel CDN", desc: "Global edge hosting securing 99.99% uptime with free SSL certificates." },
    { name: "Vanilla CSS", desc: "Custom modular stylesheets allowing micro-animations and zero package bloat." },
    { name: "Node & Google Sheets API", desc: "Fast integrations connecting your chatbot forms to secure Google Sheets spreadsheets instantly." },
  ] : [
    { name: "Next.js (SSG)", desc: "सुपर-फ़ास्ट लोडिंग स्पीड और सर्च इंजन (SEO) में 100% विजिबिलिटी के लिए स्टैटिक साइट जनरेशन टेक्नोलॉजी।" },
    { name: "Vercel CDN", desc: "ग्लोबल एज होस्टिंग जो बिना किसी रुकावट के 99.99% अपटाइम और मुफ्त SSL सिक्योरिटी सर्टिफिकेट्स देती है।" },
    { name: "Vanilla CSS", desc: "कस्टम मॉड्यूलर स्टाइलशीट्स जो आपके पेज को बिना भारी किए बेहद स्मूथ और प्रीमियम एनिमेशन्स देती हैं।" },
    { name: "Node & Google Sheets API", desc: "आपके चैटबॉट फॉर्म्स को सुरक्षित गूगल शीट्स के साथ तुरंत जोड़ने और लीड्स रिकॉर्ड करने के लिए तेज़ इंटीग्रेशन।" },
  ];

  return (
    <div>
      {/* Background glow graphics */}
      <div className="glow-blur-1"></div>

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="live-indicator" style={{ marginBottom: "1.5rem" }}>
            <span className="pulse-dot"></span>
            {t("aboutTag")}
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            {t("aboutTitle")} <br />
            <span className="text-gradient-orange">{t("aboutTitleOrange")}</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            {t("aboutQuote")}
          </p>
        </div>
      </section>

      {/* Our Hybrid Journey Roadmap */}
      <section className="section" style={{ background: "var(--section-bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="tagline">{t("roadmapTag")}</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              {t("roadmapTitle")}
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {t("roadmapSubtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5rem" }}>
            {steps.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "3rem 2rem", position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "2rem",
                    fontSize: "3rem",
                    fontWeight: "900",
                    color: "rgba(240, 123, 0, 0.1)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "1rem", color: "var(--primary)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3 Co-Founders Team Structure */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="tagline">{t("foundersTag")}</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              {t("foundersTitle")}
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {t("foundersSubtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            {team.map((founder, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "var(--primary-glow)",
                    color: "var(--primary)",
                    fontSize: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                    border: "1px solid rgba(240,123,0,0.2)",
                  }}
                >
                  F{idx + 1}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "800", marginBottom: "0.4rem" }}>
                  {language === "en" ? `Founder ${idx + 1}` : `को-फाउंडर ${idx + 1}`}
                </h3>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--accent-gold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-mono)",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {founder.role}
                </span>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {founder.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Subpage Content */}
      <section className="section" style={{ background: "var(--section-bg)" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="tagline">{t("techStackTag")}</span>
              <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
                {t("techStackTitle")}
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                {t("techStackDesc1")}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                {t("techStackDesc2")}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {techStack.map((tech, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "2rem", background: "rgba(255,255,255,0.01)" }}>
                  <h4 style={{ color: "var(--primary)", fontSize: "1rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                    {tech.name}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Contact section */}
      <section className="section">
        <ContactSection />
      </section>
    </div>
  );
};

export default AboutPage;
