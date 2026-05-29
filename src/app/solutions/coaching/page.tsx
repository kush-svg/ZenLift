import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Demo-Class Registration & Web Systems for Coaching Centers | ZenLift",
  description: "Get more enrollments and eliminate admission-season chaos. Automated demo-class capture, smart WhatsApp follow-up bots, and custom academy websites in Faridabad & Delhi NCR.",
};

const CoachingPage = () => {
  return (
    <div>
      {/* Background glow fx */}
      <div className="glow-blur-1"></div>

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="live-indicator" style={{ marginBottom: "1.5rem" }}>
            <span className="pulse-dot"></span>
            Education Marketing Expert
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            Fill your demo classes. <br />
            <span className="text-gradient-orange">Enroll more students automatically.</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            "Amit Sir used to spend all evening calling parents to remind them of the demo class.
            Now, our WhatsApp system reminders do it for him, doubling his attendance rate."
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            We set up smart demo-class registration funnels, automated WhatsApp parent confirmations, and
            structured academy websites that build parental trust and boost batch enrollments.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20run%20a%20coaching%20center%20and%20want%20to%20fill%20my%20demo%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Free Admissions Review
            </a>
            <a href="#packages" className="btn btn-secondary">
              View Academy Packages
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "rgba(18, 18, 18, 0.4)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>40%+</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Demo Attendance Increase</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>500+</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Student Inquiries Logged</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>100%</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>On-Time Launch Guarantee</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Solve the admission season leakage</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Most coaching centers lose 30–40% of prospective students simply due to delayed responses
              or missed follow-up calls. Our systems capture and qualify interest immediately.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The Problem</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Admissions Inquiry Chaos</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  During peak seasons, inquiries land on parent WhatsApp group chats, sticky notes, and receptionist phone logs.
                  There is no single source of truth for who has been contacted.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Demo-Class No-Shows</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Parents register their kids for a free demo class over the phone, but on Sunday morning half of them forget to
                  show up. Without automated reminders, you waste empty chairs and faculty time.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>No Trust-Building Presence</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  A neighbor recommends your tuition center. The parent searches you on Google and finds a blank map profile or
                  no website. Skeptical about your batch quality, they choose a competitor.
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The ZenLift System</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Centralized Student Lead Log</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Every parent inquiry, from website form or WhatsApp chat, is logged automatically in a clean visual sheet
                  with their name, class/subject, batch preference, and enrollment status.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>WhatsApp Automated Reminders</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  When a parent registers for a demo, our system instantly triggers a WhatsApp confirmation, followed by
                  an automatic reminder 24 hours and 2 hours before the batch starts.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Sleek Academy Course Portal</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We build a breathable, modern academy site displaying batches, subjects, teacher qualifications, past topper
                  photos, and local parent reviews that establish immediate authority.
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
            <span className="tagline">Packages Built for Growth</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Academy packages & tiers</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Standard prices designed for neighborhood tuition centers and multi-branch coaching institutes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            {/* Package 1 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Basic Authority</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Digital Starter</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹12,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  A clean, professional academy website to showcase batches, courses, toppers, and build trust.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ 3-Page Website (Home, Batches, Contact)</li>
                  <li>✓ Professional course & subject layout</li>
                  <li>✓ Teacher profiles & student reviews</li>
                  <li>✓ WhatsApp chat button integration</li>
                  <li>✓ Google Business Profile audit</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Starter%20package%20for%20coaching%20centers."
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
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>Highly Recommended</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Demo Class Funnel</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>₹15,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Our automated student capture system that registers demo bookings and drives class attendance.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Everything in Digital Starter</li>
                  <li>✓ Demo-class registration landing flow</li>
                  <li>✓ Automated WhatsApp parent confirmation</li>
                  <li>✓ Auto-send 24-hour demo class reminder</li>
                  <li>✓ Centralized student lead spreadsheet</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Demo%20Class%20Funnel%20package%20for%20coaching%20centers."
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
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Peak Season Support</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Admissions Retention</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹14,000<span style={{ fontSize: "1rem", fontWeight: "400" }}>/month</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Ongoing local digital campaign support and content management during active batch enrollment cycles.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Local parent-targeted Meta Ad campaigns</li>
                  <li>✓ 8–12 monthly custom social graphics</li>
                  <li>✓ Google Business Profile weekly updates</li>
                  <li>✓ Automated parent review solicitation</li>
                  <li>✓ Monthly performance & batch lead report</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Admissions%20Retention%20retainer."
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
                We respect your institution's admissions cycle. If we do not deliver your website and booking systems
                within the working days defined in our proposal, or if they do not function exactly as agreed,
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

export default CoachingPage;
