import React from "react";

export const metadata = {
  title: "Privacy Policy | ZenLift",
  description: "Read the Privacy Policy for ZenLift Agency. Learn how we handle and protect patient, student, and buyer lead data securely.",
};

const PrivacyPage = () => {
  return (
    <div>
      {/* Background glow graphics */}
      <div className="glow-blur-1"></div>

      <section className="section">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span className="tagline" style={{ marginBottom: "1rem" }}>Data Security</span>
            <h1 className="text-gradient" style={{ fontSize: "3rem", marginBottom: "2rem" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "3rem" }}>
              Last Updated: May 2026
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "0.95rem" }}>
              
              <div>
                <h3 style={{ color: "#FFF", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  1. Information We Collect
                </h3>
                <p>
                  At ZenLift, we prioritize the confidentiality of both our agency clients and their end customers.
                  We collect information through several channels:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Consultation Requests:</strong> When you submit a form on our site, we collect your name, phone number, email address, and business industry.</li>
                  <li><strong>Client Onboarding details:</strong> Login credentials for hosting domains, maps, or Google accounts are collected securely and exclusively to set up services.</li>
                  <li><strong>Lead Automation Data:</strong> Patient, student, or buyer leads captured by the chatbots we build for you are routed directly to your personal databases.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: "#FFF", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  2. How We Use Information
                </h3>
                <p>
                  We utilize collected information solely for operating and delivering digital solutions:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>To review your local digital presence and conduct customized growth audits.</li>
                  <li>To configure and host website codes and domain integrations.</li>
                  <li>To test, verify, and connect chatbot forms and email alert notification channels.</li>
                </ul>
                <p style={{ marginTop: "0.8rem" }}>
                  We <strong>never</strong> sell, distribute, or share client information or their customer database leads
                  to any third-party marketers or list brokers.
                </p>
              </div>

              <div>
                <h3 style={{ color: "#FFF", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  3. Secure Third-Party API Integrations
                </h3>
                <p>
                  The lead capture chatbots and forms we build leverage secure industry integrations:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Google Sheets API:</strong> Captured lead columns are piped securely to a Google Sheet spreadsheet owned exclusively by the client. We do not maintain copies of customer leads on our servers.</li>
                  <li><strong>WhatsApp Business API:</strong> Messaging transmissions follow end-to-end security compliance guidelines defined by Meta's official API terms.</li>
                  <li><strong>Vercel Hostings:</strong> Static web files are delivered using secure serverless CDN architectures equipped with automatic SSL.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: "#FFF", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  4. Data Security Standards
                </h3>
                <p>
                  We treat onboarding information with the highest security precautions. All hosting login credentials
                  are stored inside encrypted team vaults and are deleted from our local networks immediately upon
                  staging approval and successful delivery handovers.
                </p>
              </div>

              <div>
                <h3 style={{ color: "#FFF", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  5. Client Database Ownership
                </h3>
                <p>
                  You retain full, 100% intellectual property ownership of your website copy, your domain setup, and
                  all customer list leads logged in your sheets. ZenLift has no administrative rights to client lead trackers
                  post-handover unless actively engaged under a Growth Support monthly maintenance retainer.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
