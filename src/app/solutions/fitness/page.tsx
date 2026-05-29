import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Free Trial Funnels & Systems for Gyms & Fitness | ZenLift",
  description: "Stop losing free trial leads. We build high-converting landing pages, instant WhatsApp lead bots, and trial conversion trackers for gyms in Faridabad & Delhi NCR.",
};

const FitnessPage = () => {
  return (
    <div>
      {/* Background glow fx */}
      <div className="glow-blur-1"></div>

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="live-indicator" style={{ marginBottom: "1.5rem" }}>
            <span className="pulse-dot"></span>
            Fitness Marketing Specialist
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            Every free trial is a member. <br />
            <span className="text-gradient-orange">Stop losing them to slow follow-ups.</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            "Rohit was getting 30 trial inquiries a month on Instagram but converting only 3 into memberships.
            Our follow-up tracking sheet helped him close 14 instead."
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            We build high-converting, offer-led gym landing pages, smart free-trial booking forms, and automated
            WhatsApp confirmations that turn online clicks into actual gym footfall.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20run%20a%20gym%20and%20want%20to%20set%20up%20a%20free%20trial%20funnel."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Free Gym Audit
            </a>
            <a href="#packages" className="btn btn-secondary">
              View Gym Packages
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "rgba(18, 18, 18, 0.4)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>3x</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Trial-to-Paid Conversion</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>100%</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Leads Logged Automatically</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>₹0</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Setup Cost If Not Delivered On-Time</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Get control over your membership sales</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Most gym owners run Instagram ads that lead to a blank profile. They get comments, views,
              but zero structured contact sheets. Here is how we bridge that gap.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The Problem</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Untracked Free Trials</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Prospects ask about membership pricing or free trials verbally or via DM. They visit the gym once,
                  and disappear. You have no phone number or record to follow up.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Delayed Inquiry Responses</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  A prospect messages your page asking: \"What are the gym hours and monthly fees?\" You reply 4 hours later.
                  By then, they have already booked a session with the crossfit gym next door.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Inconsistent Instagram Posts</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  You post workouts when you remember, but there is no call to action. People watch your stories,
                  like them, but never take the step to register for a membership.
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The ZenLift System</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Free Trial Booking Funnel</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We replace vague links with a focused free trial page. Prospects enter their name and phone number
                  to instantly unlock a trial pass, which logs them into your database.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>24/7 FAQ Response Chatbot</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Our automated chatbot handles incoming DMs instantly, answering standard gym FAQs (timing, membership plans,
                  personal trainer availability) and capturing contact info immediately.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Consistent Local Promo System</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Under our Growth Support, we set up continuous local ad pushes targeting fitness enthusiasts in your exact sectors
                  with high-converting membership discount and trial offers.
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
            <span className="tagline">Packages Built for Footfall</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Predictable fitness plans</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Tailored setups designed for neighborhood gyms, yoga centers, and dance academies.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            {/* Package 1 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Offer Showcase</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Digital Starter</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹7,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  A focused, beautiful single-page landing page highlighting your gym equipment, training options, and key offer.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ 1-Page Landing Page (Offer-focused)</li>
                  <li>✓ Visual gym gallery & map embed</li>
                  <li>✓ Client testimonials & pricing table</li>
                  <li>✓ Sticky WhatsApp Click-to-Chat CTA</li>
                  <li>✓ Google Profile review & verification</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Starter%20landing%20page%20for%20my%20gym."
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
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>Best Value</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Trial Capture Funnel</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>₹12,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Our structured free-trial booking pipeline. Captures interest, logs info, and follow-ups automatically.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Everything in Digital Starter</li>
                  <li>✓ Smart Free Trial booking form</li>
                  <li>✓ Automated WhatsApp confirmation</li>
                  <li>✓ Automated 24-hour reminder before visit</li>
                  <li>✓ Gym lead-tracking Google Sheet log</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Trial%20Capture%20Funnel%20package%20for%20my%20gym."
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
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Steady Pipeline</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Gym Growth Retainer</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹14,000<span style={{ fontSize: "1rem", fontWeight: "400" }}>/month</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Ongoing monthly retainers to design gym promotions, handle social posts, and drive local leads.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ 12 Custom gym graphics & workout clips</li>
                  <li>✓ Local trial ad campaign setup (Meta/IG Ads)</li>
                  <li>✓ Google Business Profile review updates</li>
                  <li>✓ 2 Broadcast promotional WhatsApp blasts/mo</li>
                  <li>✓ Monthly member conversion report</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Gym%20Growth%20Retainer."
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
                We work to make your business grow. If we do not deliver your landing page and trial registration system
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

export default FitnessPage;
