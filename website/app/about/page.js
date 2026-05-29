import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "The Team & Hybrid Agency Journey | ZenLift",
  description: "Learn about the three-person co-founding team behind ZenLift. Discover our roadmap scaling local agency services into repeatable SaaS products in Delhi NCR.",
};

const AboutPage = () => {
  const steps = [
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
  ];

  const team = [
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
  ];

  const techStack = [
    { name: "Next.js (SSG)", desc: "Static site generation for perfect loading speeds and absolute SEO crawls." },
    { name: "Vercel CDN", desc: "Global edge hosting securing 99.99% uptime with free SSL certificates." },
    { name: "Vanilla CSS", desc: "Custom modular stylesheets allowing micro-animations and zero package bloat." },
    { name: "Node & Google Sheets API", desc: "Fast integrations connecting your chatbot forms to secure Google Sheets spreadsheets instantly." },
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
            About ZenLift
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            We build systems that <br />
            <span className="text-gradient-orange">work for your business.</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            "We are a three-person co-founding team based in India. We believe local businesses shouldn't
            waste fortunes on complex marketing packages that yield zero booked appointments."
          </p>
        </div>
      </section>

      {/* Our Hybrid Journey Roadmap */}
      <section className="section" style={{ background: "rgba(10, 10, 10, 0.4)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="tagline">Our Roadmap</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              From custom services to scalable software
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              We are intentionally structured as a hybrid business. Our agency work funds our software research,
              ensuring we only build tools that solve actual business struggles.
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
            <span className="tagline">The Founders</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              A lean, functional operations model
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Our agency is managed directly by our three co-founders, guaranteeing that every setup, design,
              and automation receives veteran engineering oversight.
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
                  Founder {idx + 1}
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
      <section className="section" style={{ background: "rgba(10, 10, 10, 0.4)" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="tagline">Tech Stack</span>
              <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
                High-performance foundational structures
              </h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                We believe websites shouldn't be bogged down by heavy builder plugins or slow server calls.
                We build static web files (SSG) that load instantly on all mobile resolutions, giving your clients
                a premium loading experience.
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                Our databases connect directly to standard spreadsheet APIs. You can view all captured leads
                instantly without learning complex CRM panels.
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
