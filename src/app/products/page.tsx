"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";
import ContactSection from "@/components/ContactSection";
import { useLanguage } from "@/components/LanguageContext";
import MotivationalQuote from "@/components/MotivationalQuote";

const ProductsPage = () => {
  const { language, t } = useLanguage();

  const productList = language === "en" ? [
    {
      title: "WhypaperBill",
      description: "A super-fast, offline-capable POS and Billing system built specifically for retail and local brick-and-mortar stores in India. Simplifies inventory, gst invoices, and daily registers.",
      features: [
        "Lightning-fast invoice printing",
        "SMS & WhatsApp bill dispatch",
        "GST & non-GST options",
        "Offline-first local database",
        "E-way billing integration",
        "Daily automated sales register",
      ],
      isFeatured: true,
      isComingSoon: false,
      ctaUrl: "/products/whypaperbill",
    },
    {
      title: "TutorPlus",
      description: "Automated student scheduling and admissions manager. Simplifies demo-class reservations, schedules batches, tracks fees, and manages parent announcements without admin strain.",
      features: [
        "Demo-class registration sheets",
        "Auto parent WhatsApp notifications",
        "Batch scheduling & alerts",
        "Fee collections & payment lists",
        "Offline student database logs",
      ],
      isFeatured: false,
      isComingSoon: false,
      ctaUrl: "/products/tutorplus",
    },
    {
      title: "ZenDesk CRM",
      description: "A simplified customer and pipeline manager for local service businesses (physiotherapists, salons, brokers). Helps track leads, manage active contracts, and log follow-ups.",
      features: [
        "Visual deal status pipeline board",
        "One-click quote & invoice generator",
        "WhatsApp follow-up reminders",
        "Client logs & service history",
        "Automated review requests",
      ],
      isFeatured: false,
      isComingSoon: false,
      ctaUrl: "/products/zendesk-crm",
    },
    {
      title: "LeadPulse",
      description: "An AI-powered central lead dashboard showing active Google Business Profile inquiries, website form submissions, and active ad campaign outputs in a single screen.",
      features: [
        "Unified multi-channel lead feed",
        "Google Maps inquiry tracking",
        "Campaign cost-per-lead analysis",
        "Receptionist response time auditing",
        "Weekly performance digests",
      ],
      isFeatured: false,
      isComingSoon: false,
      ctaUrl: "/products/leadpulse",
    },
    {
      title: "ChatFlow Panel",
      description: "A simple interactive chatbot designer that lets local business owners customize their FAQ triggers, website greetings, and WhatsApp chatbot answers in a tap.",
      features: [
        "Visual drag-and-drop FAQ designer",
        "WhatsApp Business API integration",
        "Smart intent categorization",
        "Lead handoff notifications",
        "Instant chatbot analytics logs",
      ],
      isFeatured: false,
      isComingSoon: false,
      ctaUrl: "/products/chatflow",
    },
  ] : [
    {
      title: "WhypaperBill",
      description: "एक सुपर-फ़ास्ट, ऑफ़लाइन-कैपेबल POS और बिलिंग सिस्टम जो खास तौर पर भारत के रिटेल और लोकल स्टोर्स के लिए बना है। यह आपकी इन्वेंटरी, GST इनवॉइस और डेली रजिस्टर आसान बनाता है।",
      features: [
        "बिजली की तरह तेज़ इनवॉइस प्रिंटिंग",
        "SMS और WhatsApp पर बिल भेजें",
        "GST और नॉन-GST ऑप्शंस",
        "ऑफलाइन-फर्स्ट लोकल डेटाबेस",
        "E-way बिलिंग इंटीग्रेशन",
        "डेली ऑटोमेटेड सेल्स रजिस्टर",
      ],
      isFeatured: true,
      isComingSoon: false,
      ctaUrl: "/products/whypaperbill",
    },
    {
      title: "TutorPlus",
      description: "ऑटोमेटेड स्टूडेंट शेड्यूलिंग और एडमिशन्स मैनेजर। यह डेमो-क्लास रिजर्वेशन, बैच शेड्यूलिंग, फीस ट्रैकिंग और पेरेंट्स के साथ कम्यूनिकेशन को आसान बनाता है।",
      features: [
        "डेमो-क्लास रजिस्ट्रेशन शीट्स",
        "ऑटोमेटेड WhatsApp पेरेंट नोटिफिकेशन्स",
        "बैच शेड्यूलिंग और अलर्ट्स",
        "फीस कलेक्शन और पेमेंट लिस्ट्स",
        "ऑफलाइन स्टूडेंट डेटाबेस लॉग्स",
      ],
      isFeatured: false,
      isComingSoon: false,
      ctaUrl: "/products/tutorplus",
    },
    {
      title: "ZenDesk CRM",
      description: "लोकल सर्विस बिज़नेसेज (जैसे डेंटिस्ट, सलून्स, ब्रोकर्स) के लिए एक बेहद आसान कस्टमर और पाइपलाइन मैनेजर। लीड्स ट्रैक करें, एक्टिव कॉन्ट्रैक्ट्स मैनेज करें और फॉलो-अप लॉग्स बनाएं।",
      features: [
        "विजुअल डील स्टेटस पाइपलाइन बोर्ड",
        "एक क्लिक में कोट और इनवॉइस जनरेटर",
        "WhatsApp फॉलो-अप रिमाइंडर्स",
        "क्लाइंट लॉग्स और सर्विस हिस्ट्री",
        "ऑटोमेटेड रिव्यु रिक्वेस्ट्स",
      ],
      isFeatured: false,
      isComingSoon: false,
      ctaUrl: "/products/zendesk-crm",
    },
    {
      title: "LeadPulse",
      description: "एक AI-संचालित सेंट्रल लीड डैशबोर्ड जो आपके Google Business Profile इनक्वायरी, वेबसाइट फॉर्म सबमिशन और ad campaigns के रिस्पॉन्स को एक ही स्क्रीन पर दिखाता है।",
      features: [
        "एकीकृत मल्टी-चैनल लीड फ़ीड",
        "गूगल मैप्स इनक्वायरी ट्रैकिंग",
        "कैंपेन कॉस्ट-पर-लीड एनालिसिस",
        "रिसेप्शनिस्ट रिस्पॉन्स टाइम ऑडिट",
        "वीकली परफॉर्मेंस समरी",
      ],
      isFeatured: false,
      isComingSoon: false,
      ctaUrl: "/products/leadpulse",
    },
    {
      title: "ChatFlow Panel",
      description: "एक साधारण और आसान चैटबॉट डिज़ाइनर जो लोकल बिज़नेस मालिकों को अपने FAQ ट्रिगर्स, वेबसाइट ग्रीटिंग्स और WhatsApp चैटबॉट के जवाबों को कस्टमाइज करने में मदद करता है।",
      features: [
        "ड्रैग-एंड-ड्रॉप FAQ डिज़ाइनर",
        "WhatsApp बिज़नेस API इंटीग्रेशन",
        "स्मार्ट इंटेंट केटेगरी",
        "लीड हैंडऑफ नोटिफिकेशन्स",
        "इंस्टेंट चैटबॉट एनालिटिक्स लॉग्स",
      ],
      isFeatured: false,
      isComingSoon: false,
      ctaUrl: "/products/chatflow",
    },
  ];

  return (
    <div>
      {/* Background glow graphics */}
      <div className="glow-blur-1"></div>

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <MotivationalQuote />
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            {t("prodTitle")} <br />
            <span className="text-gradient-orange">{t("prodTitleOrange")}</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            {t("prodQuote")}
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            {t("prodDesc")}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section" style={{ background: "var(--section-bg)", paddingTop: "5rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
            }}
          >
            {productList.map((product, idx) => (
              <ProductCard
                key={idx}
                title={product.title}
                description={product.description}
                features={product.features}
                isFeatured={product.isFeatured}
                isComingSoon={product.isComingSoon}
                ctaUrl={product.ctaUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Banner Section */}
      <section className="section">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="glass-card"
            style={{
              padding: "4rem 3rem",
              background: "linear-gradient(135deg, rgba(8, 8, 8, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)",
              borderColor: "var(--border-color)",
              borderRadius: "20px",
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <span className="tagline" style={{ color: "var(--accent-gold)" }}>
              {t("customDevTag")}
            </span>
            <h2 style={{ fontSize: "2.4rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              {t("customDevTitle")}
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2.5rem auto", fontSize: "0.95rem" }}>
              {t("customDevDesc")}
            </p>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20have%20a%20custom%20software%20requirement%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t("consultEngineer")}
            </a>
          </div>
        </div>
      </section>

      {/* Reusable Contact section */}
      <section className="section" style={{ background: "var(--section-bg-darker)" }}>
        <ContactSection />
      </section>
    </div>
  );
};

export default ProductsPage;
