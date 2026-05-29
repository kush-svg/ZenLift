"use client";

import React from "react";
import Link from "next/link";
import NicheCard from "@/components/NicheCard";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import { useLanguage } from "@/components/LanguageContext";

const Homepage = () => {
  const { language, t } = useLanguage();

  const niches = language === "en" ? [
    {
      title: "Medical Clinics",
      description: "For Dentists, Physios & GPs. Streamline booking, handle routine questions, and automate 5-star Google review requests.",
      icon: "clinic",
      path: "/solutions/clinics",
    },
    {
      title: "Coaching Centers",
      description: "For Tuitions & Academies. Capture student leads, automate WhatsApp batch confirmations, and double demo attendance.",
      icon: "coaching",
      path: "/solutions/coaching",
    },
    {
      title: "Fitness & Gyms",
      description: "For Gyms & Yoga Studios. Launch free-trial booking funnels, respond 24/7, and track member conversion rates.",
      icon: "fitness",
      path: "/solutions/fitness",
    },
    {
      title: "Restaurants & Cafes",
      description: "For Cafes & Dine-ins. Drive local footfall, optimize Google Maps visibility, and capture repeat orders without Zomato fees.",
      icon: "restaurant",
      path: "/solutions/restaurants",
    },
    {
      title: "Real Estate Brokers",
      description: "For Property Consultants. Set up project-focused land pages, qualify buyers via WhatsApp, and automate brochure sharing.",
      icon: "real-estate",
      path: "/solutions/real-estate",
    },
  ] : [
    {
      title: "Medical Clinics",
      description: "डेंटिस्ट, फिजियो और GPs के लिए। बुकिंग आसान बनाएं, रोज़मर्रा के सवालों के जवाब दें और 5-स्टार गूगल रिव्यूज ऑटोमैटिकली पाएं।",
      icon: "clinic",
      path: "/solutions/clinics",
    },
    {
      title: "Coaching Centers",
      description: "ट्यूशन और एकेडेमीज़ के लिए। स्टूडेंट लीड्स कैप्चर करें, WhatsApp पर बैच कन्फर्मेशन ऑटोमेट करें और डेमो क्लास अटेंडेंस डबल करें।",
      icon: "coaching",
      path: "/solutions/coaching",
    },
    {
      title: "Fitness & Gyms",
      description: "जिम्स और योग स्टूडियोज के लिए। फ्री-ट्रायल बुकिंग फनल्स शुरू करें, 24/7 तुरंत जवाब दें और मेंबर कन्वर्शन रेट्स ट्रैक करें।",
      icon: "fitness",
      path: "/solutions/fitness",
    },
    {
      title: "Restaurants & Cafes",
      description: "कैफ़े और डाइन-इन्स के लिए। लोकल फुटफॉल बढ़ाएं, गूगल मैप्स विजिबिलिटी को बेहतर करें और बिना Zomato कमीशन के सीधे ऑर्डर्स पाएं।",
      icon: "restaurant",
      path: "/solutions/restaurants",
    },
    {
      title: "Real Estate Brokers",
      description: "प्रॉपर्टी कंसलटेंट्स के लिए। प्रोजेक्ट-फोकस्ड लैंडिंग पेजेस बनाएं, WhatsApp पर बायर्स को क्वालीफाई करें और ब्रोशर ऑटोमैटिकली शेयर करें।",
      icon: "real-estate",
      path: "/solutions/real-estate",
    },
  ];

  const products = language === "en" ? [
    {
      title: "WhypaperBill",
      description: "A super-fast, offline-capable POS and Billing system built specifically for retail and local brick-and-mortar stores in India. Simplifies inventory, gst invoices, and daily registers.",
      features: [
        "Lightning-fast invoice print",
        "SMS/WhatsApp bill dispatch",
        "GST & non-GST options",
        "Offline-first local database",
        "E-way billing integration",
      ],
      isFeatured: true,
      isComingSoon: false,
    },
    {
      title: "TutorPlus",
      description: "Automated student scheduling and admissions manager.",
      features: ["Demo-class pipeline", "Auto parent WhatsApps", "Fee collection lists"],
      isFeatured: false,
      isComingSoon: true,
    },
    {
      title: "ZenDesk CRM",
      description: "Simple customer and pipeline board for service businesses.",
      features: ["Lead status pipeline", "Auto quote generator", "Payment reminders"],
      isFeatured: false,
      isComingSoon: true,
    },
  ] : [
    {
      title: "WhypaperBill",
      description: "एक सुपर-फ़ास्ट, ऑफलाइन-कैपेबल POS और बिलिंग सिस्टम जो खास तौर पर भारत के रिटेल और लोकल स्टोर्स के लिए बना है। इन्वेंटरी, GST इनवॉइस और डेली रजिस्टर आसान बनाएं।",
      features: [
        "बिजली की तरह तेज़ इनवॉइस प्रिंट",
        "SMS/WhatsApp पर बिल भेजें",
        "GST और नॉन-GST ऑप्शंस",
        "ऑफलाइन-फर्स्ट लोकल डेटाबेस",
        "E-way बिलिंग इंटीग्रेशन",
      ],
      isFeatured: true,
      isComingSoon: false,
    },
    {
      title: "TutorPlus",
      description: "ऑटोमेटेड स्टूडेंट शेड्यूलिंग और एडमिशन्स मैनेजर।",
      features: ["डेमो-क्लास पाइपलाइन", "पेरेंट्स को ऑटो WhatsApp", "फीस कलेक्शन लिस्ट्स"],
      isFeatured: false,
      isComingSoon: true,
    },
    {
      title: "ZenDesk CRM",
      description: "सर्विस बिज़नेसेज के लिए एक आसान कस्टमर और पाइपलाइन बोर्ड।",
      features: ["लीड स्टेटस पाइपलाइन", "ऑटो कोट जनरेटर", "पेमेंट रिमाइंडर्स"],
      isFeatured: false,
      isComingSoon: true,
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* Background glow graphics */}
      <div className="glow-blur-1"></div>

      {/* 1. Hero Section */}
      <section className="section" style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            {/* Live active tag */}
            <span className="live-indicator" style={{ marginBottom: "1.5rem" }}>
              <span className="pulse-dot"></span>
              {t("liveTag")}
            </span>

            {/* Problem hook → Outcome promise */}
            <h1
              className="text-gradient"
              style={{
                fontSize: "4rem",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
              }}
            >
              {t("heroTitle")} <br />
              <span className="text-gradient-orange">{t("heroTitleGradient")}</span>
            </h1>

            <p
              className="serif-font"
              style={{
                fontSize: "1.5rem",
                color: "var(--text-secondary)",
                marginBottom: "2rem",
                lineHeight: "1.4",
              }}
            >
              {t("heroSubtitle")}
            </p>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "1.05rem",
                marginBottom: "3rem",
                maxWidth: "600px",
                margin: "0 auto 3rem auto",
              }}
            >
              {t("heroCostNote")}{" "}
              <strong style={{ color: "var(--primary)" }}>₹5,000</strong>. {t("statGuaranteetitle")}.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20want%20to%20get%20more%20leads%20and%20grow%20my%20local%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t("whatsappInquiry")}
              </a>
              <a href="#solutions" className="btn btn-secondary">
                {t("exploreSolutions")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Scrolling Capabilities Strip */}
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Instant Lead Response" : "इंस्टेंट लीड रिस्पांस"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Smart FAQ Chatbots" : "स्मार्ट FAQ चैटबॉट्स"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Automated Follow-ups" : "ऑटोमेटेड फॉलो-अप्स"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Local Maps Optimization" : "लोकल मैप्स ऑप्टिमाइज़ेशन"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Exclusive Lead Funnels" : "एक्सक्लूसिव लीड फनल्स"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "WhatsApp API Integrations" : "WhatsApp API इंटीग्रेशन"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Performance Dashboards" : "परफॉरमेंस डैशबोर्ड्स"}
          </div>
          {/* Repeat items for infinite scroll effect */}
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Instant Lead Response" : "इंस्टेंट लीड रिस्पांस"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Smart FAQ Chatbots" : "स्मार्ट FAQ चैटबॉट्स"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Automated Follow-ups" : "ऑटोमेटेड फॉलो-अप्स"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Local Maps Optimization" : "लोकल मैप्स ऑप्टिमाइज़ेशन"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Exclusive Lead Funnels" : "एक्सक्लूसिव लीड फनल्स"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "WhatsApp API Integrations" : "WhatsApp API इंटीग्रेशन"}
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>{language === "en" ? "Performance Dashboards" : "परफॉरमेंस डैशबोर्ड्स"}
          </div>
        </div>
      </div>

      {/* 3. Philosophy & Stats */}
      <section className="section">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <span className="tagline">{t("philosophyTag")}</span>
              <h2 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                {t("philosophyTitle")}
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                {t("philosophyText1")}
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                {t("philosophyText2")}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div
                className="glass-card"
                style={{ padding: "2rem", textAlign: "center", background: "rgba(255,255,255,0.01)" }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>5</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{t("statNichestitle")}</div>
              </div>
              <div
                className="glass-card"
                style={{ padding: "2rem", textAlign: "center", background: "rgba(255,255,255,0.01)" }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>50+</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{t("statConsultedtitle")}</div>
              </div>
              <div
                className="glass-card"
                style={{
                  padding: "2rem",
                  textAlign: "center",
                  gridColumn: "span 2",
                  background: "rgba(240, 123, 0, 0.02)",
                  borderColor: "rgba(240,123,0,0.2)",
                }}
              >
                <div style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--text-primary)" }}>100%</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{t("statGuaranteetitle")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Niche Selector Grid */}
      <section className="section" id="solutions" style={{ background: "rgba(10, 10, 10, 0.3)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="tagline">{t("nicheSelectorTag")}</span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              {t("nicheSelectorTitle")}
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {t("nicheSelectorSubtitle")}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {niches.map((niche, idx) => (
              <NicheCard
                key={idx}
                title={niche.title}
                description={niche.description}
                icon={niche.icon}
                path={niche.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. "We Don't Do..." Section */}
      <section className="section">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="glass-card"
            style={{
              padding: "4rem",
              background: "linear-gradient(135deg, rgba(8, 8, 8, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)",
              borderColor: "rgba(255, 255, 255, 0.08)",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <span className="tagline" style={{ color: "var(--accent-gold)" }}>
              {t("dontDoTag")}
            </span>
            <h2 style={{ fontSize: "2.8rem", marginTop: "0.5rem", marginBottom: "2rem" }}>
              {t("dontDoTitle")} <span className="serif-font" style={{ color: "var(--primary)" }}>{t("dontDoNot")}</span> {t("dontDoDo")}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "2rem",
                textAlign: "left",
                marginTop: "1rem",
              }}
            >
              <div>
                <h4 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  {t("dontDoTitle1")}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {t("dontDoDesc1")}
                </p>
              </div>
              <div>
                <h4 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  {t("dontDoTitle2")}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {t("dontDoDesc2")}
                </p>
              </div>
              <div>
                <h4 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  {t("dontDoTitle3")}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  {t("dontDoDesc3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Products Preview Section */}
      <section className="section" style={{ background: "rgba(10, 10, 10, 0.4)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="tagline">{t("saasTag")}</span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              {t("saasTitle")}
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              {t("saasSubtitle")}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                title={product.title}
                description={product.description}
                features={product.features}
                isFeatured={product.isFeatured}
                isComingSoon={product.isComingSoon}
              />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/products" className="btn btn-secondary">
              {t("viewSuite")}
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="tagline">FAQ</span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              {t("faqTitle")}
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
              {t("faqSubtitle")}
            </p>
          </div>

          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
