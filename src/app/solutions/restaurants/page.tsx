import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Google Maps Domination & Systems for Restaurants & Cafes | ZenLift",
  description: "Drive more walk-ins and reduce Swiggy/Zomato commission leakage. Responsive menu landing pages, automated maps review engines, and promo bots in Delhi NCR.",
};

const RestaurantsPage = () => {
  return (
    <div>
      {/* Background glow fx */}
      <div className="glow-blur-1"></div>

      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: "4rem" }}>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="live-indicator" style={{ marginBottom: "1.5rem" }}>
            <span className="pulse-dot"></span>
            Restaurant Growth Specialist
          </span>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>
            More local walk-ins. <br />
            <span className="text-gradient-orange">Less commission eaten by Zomato.</span>
          </h1>
          <p
            className="serif-font"
            style={{ fontSize: "1.4rem", color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}
          >
            "Ayesha's cafe got good reviews but didn't show up in the top three spots on Google Maps.
            We optimized her listing and added a table QR reviews code, bringing in 80+ new walk-ins monthly."
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto 3rem auto",
              fontSize: "1.05rem",
            }}
          >
            We build lightning-fast, mobile-friendly menu pages, automated Google Maps review systems, and
            automated WhatsApp coupon flows that turn hungry local searchers into loyal regulars.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I%20run%20a%20restaurant%2Fcafe%20and%20want%20to%20drive%20more%20walk-ins."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Free Restaurant Audit
            </a>
            <a href="#packages" className="btn btn-secondary">
              View Cafe Packages
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Proof Strip */}
      <section style={{ background: "rgba(18, 18, 18, 0.4)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", padding: "2.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>₹0</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Zomato/Swiggy Commission on Direct Visits</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>150+</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>New Google Reviews in 90 Days</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--primary)" }}>30%+</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Footfall Increase via Map Optimization</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Recover your hard-earned restaurant margins</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Paying Zomato up to 35% commission on every order kills local food businesses.
              Here is how we bring searchers directly to your door.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Column Pain Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "rgba(255, 255, 255, 0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The Problem</h3>
              
              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Swiggy & Zomato Dependency</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  You do all the hard work in the kitchen, but third-party platforms eat 30% of your revenue in commission
                  and advertising fees, leaving you with thin, unsustainable margins.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Invisible on Google Maps</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  When locals search \"best pasta near me\" or \"cafes in Faridabad\", your competitors with more active listings
                  rank first. Your map profile sits empty and ignored.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid rgba(220, 50, 50, 0.5)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>No Repeat-Visit System</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Dine-in customers visit once, love your food, and walk out. You have zero ways to capture their contact info,
                  announce new weekend offers, or bring them back.
                </p>
              </div>
            </div>

            {/* Column Solutions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>The ZenLift System</h3>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Direct Menu Ordering Portal</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We design custom menu pages that let customers browse dishes and request delivery directly over WhatsApp,
                  allowing you to bypass third-party fees entirely.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Google Maps SEO & QR Drive</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We clean up and optimize your Google profile, and provide tabletop review cards that prompt guests to
                  instantly drop 5-star reviews on your map profile during billing.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2rem", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem", color: "var(--primary)" }}>Automatic WhatsApp Promo Club</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We set up simple coupon-capture workflows. Guests submit their details to unlock a promo code, which logs them into
                  your database for automated monthly WhatsApp blasts.
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
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>Predictable cafe plans</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Perceived outcomes scaled for coffee houses, fine-dining restaurants, and active local bakeries.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            {/* Package 1 */}
            <div className="glass-card" style={{ padding: "3rem 2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Digital Presence</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Digital Menu Starter</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹12,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  A gorgeous, ultra-fast mobile menu page that lets visitors browse your food instantly.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Mobile-first menu landing page</li>
                  <li>✓ Location hours & map embeds</li>
                  <li>✓ Visual dish gallery highlight</li>
                  <li>✓ WhatsApp Order Click button</li>
                  <li>✓ Google Business Profile basic audit</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Digital%20Menu%20Starter%20package%20for%20my%20cafe."
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
                <span className="live-indicator" style={{ marginBottom: "0.8rem" }}>Most Popular</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Maps & Review Drive</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "var(--primary)", margin: "1rem 0" }}>₹15,000</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Dominate local restaurant maps search. Drives reviews on billing tables and automates customer clubs.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ Everything in Digital Menu Starter</li>
                  <li>✓ Complete Google Maps SEO Optimization</li>
                  <li>✓ Tabletop QR card designs</li>
                  <li>✓ Automatic promo code capture forms</li>
                  <li>✓ Google Sheets customer list log</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Maps%20%26%20Review%20Drive%20package%20for%20my%20cafe."
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
                <span style={{ fontSize: "0.8rem", color: "var(--accent-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Total Retainer</span>
                <h3 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Local Footfall Engine</h3>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFF", margin: "1rem 0" }}>₹8,000<span style={{ fontSize: "1rem", fontWeight: "400" }}>/month</span></div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
                  Ongoing monthly retainers to handle social posts, GBP updates, and drive weekend discount pushes.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  <li>✓ 8 Custom monthly social designs/clips</li>
                  <li>✓ GBP weekly updates & review replies</li>
                  <li>✓ 1 Local target campaign (Meta/Google Ads)</li>
                  <li>✓ 2 WhatsApp broadcast promotions/mo</li>
                  <li>✓ Monthly dine-in footfall report</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919079144245?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20your%20Local%20Footfall%20Engine%20retainer."
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
                We respect your kitchen operations. If we do not deliver your website and booking systems
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

export default RestaurantsPage;
