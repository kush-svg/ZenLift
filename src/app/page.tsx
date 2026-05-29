import React from "react";
import Link from "next/link";
import NicheCard from "@/components/NicheCard";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "ZenLift | AI-Powered Web Systems & Automation for Local Businesses",
  description: "We build custom websites, smart inquiry chatbots, and automated workflows that double revenue for local businesses in Faridabad & Delhi NCR.",
};

const Homepage = () => {
  const niches = [
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
  ];

  const products = [
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
              ZenLift 2.0 Is Live
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
              Stop losing customers to a <br />
              <span className="text-gradient-orange">weak online presence.</span>
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
              We build custom websites and automated systems that bring your business more bookings,
              inquiries, and revenue — automatically.
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
              Outcome-first local solutions starting from{" "}
              <strong style={{ color: "var(--primary)" }}>₹5,000</strong>. Supported by our 100%
              refund guarantee.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20want%20to%20get%20more%20leads%20and%20grow%20my%20local%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Inquire on WhatsApp
              </a>
              <a href="#solutions" className="btn btn-secondary">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Scrolling Capabilities Strip */}
      <div className="marquee-container">
        <div className="marquee-content">
          <div className="marquee-item">
            <span className="marquee-dot"></span>Instant Lead Response
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Smart FAQ Chatbots
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Automated Follow-ups
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Local Maps Optimization
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Exclusive Lead Funnels
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>WhatsApp API Integrations
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Performance Dashboards
          </div>
          {/* Repeat items for infinite scroll effect */}
          <div className="marquee-item">
            <span className="marquee-dot"></span>Instant Lead Response
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Smart FAQ Chatbots
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Automated Follow-ups
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Local Maps Optimization
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Exclusive Lead Funnels
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>WhatsApp API Integrations
          </div>
          <div className="marquee-item">
            <span className="marquee-dot"></span>Performance Dashboards
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
              <span className="tagline">Our Philosophy</span>
              <h2 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Technology should work FOR your business, not complicate it.
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                Most agencies want to sell you complicated retainer contracts or code apps you don't
                need. We do the opposite. We find the smallest, highest-impact leak in your digital
                front door and patch it first.
              </p>
              <p style={{ color: "var(--text-secondary)" }}>
                Whether it is a dentist clinic losing referrals because of a broken map listing, or a
                coaching institute losing student enrollments during demo class rushes, we build the
                exact automation that recovers that revenue.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div
                className="glass-card"
                style={{ padding: "2rem", textAlign: "center", background: "rgba(255,255,255,0.01)" }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>5</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Target Industries</div>
              </div>
              <div
                className="glass-card"
                style={{ padding: "2rem", textAlign: "center", background: "rgba(255,255,255,0.01)" }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>50+</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Businesses Consulted</div>
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
                <div style={{ fontSize: "2.2rem", fontWeight: "800", color: "#FFF" }}>100%</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Refund Guarantee Policy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Niche Selector Grid */}
      <section className="section" id="solutions" style={{ background: "rgba(10, 10, 10, 0.3)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="tagline">Solutions Tailored for You</span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              What niche is your business?
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Click on your industry to see exactly how our custom websites and automated chatbots
              can streamline your customer acquisition.
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
              Differentiator
            </span>
            <h2 style={{ fontSize: "2.8rem", marginTop: "0.5rem", marginBottom: "2rem" }}>
              What We Do <span className="serif-font" style={{ color: "var(--primary)" }}>Not</span> Do.
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
                  ✕ No Generic Templates
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  We don't copy-paste generic layouts. Every clinic, tuition, or broker layout is written
                  with niche-tailored copies that actually convert.
                </p>
              </div>
              <div>
                <h4 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  ✕ No Retainer Lock-ins
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  We don't force you into long monthly fees. Our websites and chatbot setups are 100%
                  one-time setups. Retainers are entirely optional.
                </p>
              </div>
              <div>
                <h4 style={{ color: "var(--primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  ✕ No Disappearing Acts
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  We don't launch your site and disappear. Every client gets 30 days of free support and a
                  shared Google lead-tracker sheet.
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
            <span className="tagline">Upcoming SaaS Products</span>
            <h2 style={{ fontSize: "2.5rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              Softwares that power businesses
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              We build specialized, lightweight software products from the repeated automation needs of
              our local business clients.
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
              View Complete Product Suite
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
              Frequently Asked Questions
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
              Have questions about our setups, guarantee, or timeline? We've got you covered.
            </p>
          </div>

          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Homepage;
