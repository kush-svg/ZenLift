import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "AI-Powered Systems for Medical Clinics | ZenLift",
  description: "Get more patients and automate your front desk. Custom clinic websites, smart FAQ chatbots, and Google Business Profile optimization in Faridabad & Delhi NCR.",
};

const ClinicsPage = () => {
  return (
    <div>
      {/* Background glow fx */}
      <div className="glow-blur-1"></div>

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="live-indicator" style={{ marginBottom: "1.5rem" }}>
            <span className="pulse-dot"></span>
            Clinic Automation Specialist
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            More patient bookings. <br />
            <span className="text-gradient-orange">Without front-desk chaos.</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            "Dr. Ramesh no longer misses patient calls. His chatbot books appointments and solicits
            reviews while he treats patients."
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            We build high-converting clinic websites, smart FAQ inquiry flows, and automatic Google
            review systems that establish local trust and fill your calendar.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20run%20a%20clinic%20and%20want%20to%20automate%20my%20patient%20bookings."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Free Clinic Audit
            </a>
            <a href="#packages" className="btn btn-secondary">
              View Clinic Packages
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "rgba(18, 18, 18, 0.4)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>50+</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Local Practices Audited</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>15+</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Daily Calls Automated</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>100%</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Refund Guarantee</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Why standard listings aren't enough</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Practo and basic directories show your name next to 20 competitors, forcing you to fight
              on price. Here's how we help you dominate local search directly.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The Problem</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Invisible in Local Search</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Patients in Sector 15 Faridabad search for a dentist, but your clinic doesn't appear.
                  They choose whoever shows up in the top 3 spots.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Manual Front-Desk Delays</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Inquiries sit unanswered on WhatsApp while the doctor is consulting. Patients get
                  tired of waiting, close the chat, and call another clinic.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>No Review Solicitation</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Patients leave happy, but they forget to write a review. Your profile sits with 4 old reviews,
                  while the corporate polyclinic down the road has 400.
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The ZenLift System</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Google Local SEO Domination</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We optimize your Google Business Profile with precise medical keywords, categories, and tags
                  so patients find you directly instead of clicking on Practo.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Instant WhatsApp FAQ Bot</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Our automated chatbot answers up to 15 common clinic FAQs (hours, location, fees) and
                  captures patient details instantly, sending booking alerts straight to your phone.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Automatic QR Review Engine</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We provide custom desk QR cards and automated WhatsApp follow-ups that make it extremely easy
                  for treated patients to submit 5-star Google ratings on their way out.
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
            <span className="tagline">Packages Tailored for Doctors</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Predictable clinic plans</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Standard prices built for single-doctor or polyclinic practices. Pick what suits your growth.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            {/* Package 1 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Presence Layer</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Digital Starter</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹12,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  A professional, mobile-first clinic website designed to turn local searchers into patients.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ 3-Page Website (Home, Services, Contact)</li>
                  <li>✓ Custom medical copywriting & tags</li>
                  <li>✓ Google Maps integration & directions</li>
                  <li>✓ One-click WhatsApp chat button</li>
                  <li>✓ Google Business Profile setup</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Starter%20package%20for%20clinics."
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
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>Most Requested</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Lead Flow + Chatbot</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>₹15,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  An automated patient inquiry system that responds instantly and books appointments 24/7.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Everything in Digital Starter</li>
                  <li>✓ Smart FAQ Chatbot (Up to 15 clinic FAQs)</li>
                  <li>✓ Patient contact capture flow</li>
                  <li>✓ Google Sheets automated lead log</li>
                  <li>✓ Instant WhatsApp alert to receptionist</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Lead%20Flow%20%2B%20Chatbot%20package%20for%20clinics."
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
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Full Scale</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Clinic Growth Engine</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹8,000<span style={{ fontSize: "1rem", fontWeight: "400" }}>/month</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Ongoing local marketing retainer to dominate patient search results and drive consistent appointments.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Google Maps ranking optimization</li>
                  <li>✓ Automated patient review solicitation</li>
                  <li>✓ 1 local search campaign (Google Ads)</li>
                  <li>✓ Monthly lead & consultation reports</li>
                  <li>✓ Ongoing chatbot tweaks & updates</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Clinic%20Growth%20Engine%20retainer."
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
                We respect your practice's time. If we do not deliver your website and booking systems
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

export default ClinicsPage;
