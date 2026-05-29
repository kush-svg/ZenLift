import React from "react";
import ProductCard from "@/components/ProductCard";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Bespoke SaaS Products & Software for Local Businesses | ZenLift",
  description: "Explore our lightweight, high-performance software suite. Custom POS systems, academy managers, and lead pipelines designed for Faridabad & Delhi NCR.",
};

const ProductsPage = () => {
  const productList = [
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
      isComingSoon: true,
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
      isComingSoon: true,
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
      isComingSoon: true,
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
      isComingSoon: true,
    },
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
            ZenLift Software Suite
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            Systems that power <br />
            <span className="text-gradient-orange">local businesses.</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            "We observe what agency tasks we repeat manually for our clients, and package those exact
            workflows into lightweight software products."
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            No heavy enterprise software. No bloated dashboards. Just simple, highly practical local tools
            designed to help you print bills, register students, and track leads easily.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section" style={{ background: "rgba(10, 10, 10, 0.4)", paddingTop: "5rem" }}>
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
              Custom Development
            </span>
            <h2 style={{ fontSize: "2.4rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              Need a completely bespoke software?
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2.5rem auto", fontSize: "0.95rem" }}>
              Do you have a unique operation workflow that standard software doesn't cover?
              Our co-founding engineers design and build custom web dashboards, API pipelines, and specialized automation
              for regional local businesses.
            </p>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20have%20a%20custom%20software%20requirement%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Consult an Engineer
            </a>
          </div>
        </div>
      </section>

      {/* Reusable Contact section */}
      <section className="section" style={{ background: "rgba(8, 8, 8, 0.5)" }}>
        <ContactSection />
      </section>
    </div>
  );
};

export default ProductsPage;
