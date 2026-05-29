import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Exclusive Lead Funnels & Bots for Real Estate Brokers | ZenLift",
  description: "Get exclusive property leads and qualify buyers automatically. Custom project landing pages, smart WhatsApp brochure bots, and lead trackers in Delhi NCR.",
};

const RealEstatePage = () => {
  return (
    <div>
      {/* Background glow fx */}
      <div className="glow-blur-1"></div>

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="live-indicator" style={{ marginBottom: "1.5rem" }}>
            <span className="pulse-dot"></span>
            Real Estate Growth Partner
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            Be the first broker they call. <br />
            <span className="text-gradient-orange">And the only one they stay with.</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            "Harish Sir was buying shared leads that went to 10 other brokers.
            We built him a single project page, giving him 15 exclusive leads, resulting in 2 closures in 30 days."
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            We build focused, high-converting project landing pages, automated WhatsApp brochure delivery systems,
            and smart buyer qualification bots that filter serious buyers from tire-kickers.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919999999999?text=Hi%20ZenLift%2C%20I'm%20a%20real%20estate%20broker%20and%20want%20to%20set%20up%20an%20exclusive%20lead%20funnel."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Free Property Audit
            </a>
            <a href="#packages" className="btn btn-secondary">
              View Broker Packages
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "rgba(18, 18, 18, 0.4)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>100%</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Exclusive Leads (No Shared Portals)</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>30 Sec</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Brochure Delivery Response Speed</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>5x+</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Site Visit Booking Efficiency</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Bypass the portal price-war</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Buying listing packages on 99acres or Housing.com sends the same buyer to 10 competing brokers.
              Here is how we bring serious clients exclusively to you.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The Problem</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Shared Portal Lead Races</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Listing packages sell the same lead to 10 competing brokers simultaneously. If you don't call the buyer
                  within the first 2 minutes, you lose the deal entirely.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Time-Consuming PDF Dumps</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  When a buyer requests property plans or brochures, you copy-paste massive files and 30 photos manually
                  on WhatsApp. It looks chaotic, slow, and unprofessional.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Tire-Kicker Call Exhaustion</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  You waste hours calling leads who are \"just browsing\" or have a budget of ₹40 Lakhs when you are selling
                  a luxury project starting at ₹1.5 Crores.
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The ZenLift System</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Exclusive Project Funnel</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We build project-specific landing pages that capture exclusive buyers. When a lead submits an inquiry,
                  it goes straight to you and nobody else.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Instant Brochure Delivery Bot</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Our system instantly delivers a clean, professional link displaying project plans, photos, and brochures
                  the second a buyer inquires, making you look highly credible.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>WhatsApp Intent Qualifier</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Before you waste time calling, our chatbot qualifies the buyer's timeline, micro-location preference, and
                  exact budget range, logging it all in a structured CRM sheet.
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
            <span className="tagline">Packages Tailored for Closures</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Predictable broker plans</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Standard prices built for independent brokers and small agencies. A single deal pays this back 10x.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            {/* Package 1 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Brand Presence</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Digital Starter</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹12,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  A professional broker website to showcase your active residential/commercial listings and build trust.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ 3-Page Website (Home, Listings, Contact)</li>
                  <li>✓ Agent profile & brokerage achievements</li>
                  <li>✓ Google Maps office directions embed</li>
                  <li>✓ Direct WhatsApp Click-to-Chat CTA</li>
                  <li>✓ Google Business Profile audit</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919999999999?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Starter%20package%20for%20brokers."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                Inquire
              </a>
            </div>

            {/* Package 2 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", borderColor: "var(--primary)", background: "rgba(240, 123, 0, 0.03)" }}>
              <div>
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>Highest ROI</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Brochure & Qualifier Bot</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>₹15,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Our automated brochure delivery and buyer qualification bot. Bypasses call fatigue and filters serious leads.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Everything in Digital Starter</li>
                  <li>✓ Custom PDF brochure link delivery</li>
                  <li>✓ WhatsApp Qualification Bot</li>
                  <li>✓ Automatic budget & timeline filters</li>
                  <li>✓ Google Sheets broker lead log</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919999999999?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Brochure%20%26%20Qualifier%20Bot%20package%20for%20brokers."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Book Setup
              </a>
            </div>

            {/* Package 3 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Ad Campaign Retainer</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Project Launch Engine</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹14,000<span style={{ fontSize: "1rem", fontWeight: "400" }}>/month</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Ongoing Meta lead-generation ad campaign setup and optimization to drive fresh home-buyer inquiries.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Project-focused Meta Ad campaigns</li>
                  <li>✓ Custom listing graphics & interior edits</li>
                  <li>✓ Weekly lead optimization audits</li>
                  <li>✓ CRM sheet lead status weekly syncing</li>
                  <li>✓ WhatsApp follow-up copy templates</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919999999999?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Project%20Launch%20Engine%20retainer."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                Inquire
              </a>
            </div>
          </div>

          {/* Refund policy highlight banner */}
          <div className="glass-card" style={{ marginTop: "3rem", padding: "2rem", display: "flex", alignItems: "center", gap: "2rem", background: "rgba(212, 175, 55, 0.03)", borderColor: "rgba(212, 175, 55, 0.2)" }}>
            <div style={{ fontSize: "2.5rem" }}>🛡️</div>
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--accent-gold)", marginBottom: "0.3rem" }}>
                100% On-Time & Functionality Guarantee
              </h4>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                We respect your brokerage. If we do not deliver your website and booking systems
                within the working days defined in our proposal, or if they do not perform exactly as agreed,
                you pay nothing. We refund your advance payment in full, no questions asked.
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
