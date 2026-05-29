import React from "react";

export const metadata = {
  title: "Terms of Service | ZenLift",
  description: "Read the Terms of Service for ZenLift Agency. Learn about our billing, payment terms, and 100% Refund Guarantee conditions.",
};

const TermsPage = () => {
  return (
    <div>
      {/* Background glow graphics */}
      <div className="glow-blur-1"></div>

      <section className="section">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span className="tagline" style={{ marginBottom: "1rem" }}>Legal Agreements</span>
            <h1 className="text-gradient" style={{ fontSize: "3rem", marginBottom: "2rem" }}>
              Terms of Service
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "3rem" }}>
              Last Updated: May 2026
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "0.95rem" }}>
              
              <div>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  1. Agreement to Terms
                </h3>
                <p>
                  By engaging ZenLift (\"we\", \"us\", or \"our\") for website design, chatbot automation,
                  local search optimization, or campaign management services, you (\"Client\", \"you\") agree
                  to be bound by these Terms of Service. Please read them carefully before submitting an advance payment.
                </p>
              </div>

              <div>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  2. Scope of Services
                </h3>
                <p>
                  We deliver digital systems categorized under our three standardized starter offerings:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Digital Starter:</strong> Basic website or landing page with search index configurations.</li>
                  <li><strong>Lead Capture + Chatbot:</strong> Rule-based FAQ chatbots, input capture sheets, and instant notifications.</li>
                  <li><strong>Growth Support:</strong> Ongoing monthly local optimization, ad campaigns, and broadcast text assistance.</li>
                </ul>
                <p style={{ marginTop: "0.8rem" }}>
                  Any work outside the specific scope defined in your signed project proposal will be billed
                  separately as custom developments.
                </p>
              </div>

              <div>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  3. Client Responsibilities & Onboarding
                </h3>
                <p>
                  To deliver your digital systems on time, we depend on active participation. Upon payment, you
                  agree to complete our <strong>Client Onboarding Checklist</strong> and provide all required assets
                  (logo files, clinic/office photos, business hours, and hosting logins) within <strong>48 hours</strong>.
                </p>
                <p style={{ marginTop: "0.8rem" }}>
                  Delays in providing onboarding assets will automatically extend the project delivery timeline
                  by an equivalent number of working days.
                </p>
              </div>

              <div>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  4. Payment Terms & Billing
                </h3>
                <p>
                  For all standardized one-time setup projects (Offering 1 and 2), payment is structured as follows:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>50% Advance Payment:</strong> Required to initiate brief reviews and design phases.</li>
                  <li><strong>50% Final Payment:</strong> Due upon staging approval, immediately prior to moving systems live on your domain.</li>
                </ul>
                <p style={{ marginTop: "0.8rem" }}>
                  For monthly Growth Support, invoicing occurs on the 1st of each calendar month. We require a 30-day
                  written cancellation notice to terminate ongoing retainers.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "2.5rem", background: "rgba(212, 175, 55, 0.02)", borderColor: "rgba(212,175,55,0.2)" }}>
                <h3 style={{ color: "var(--accent-gold)", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  🛡️ 5. 100% Refund Guarantee Terms
                </h3>
                <p style={{ color: "var(--text-primary)" }}>
                  We stand behind our work. Our 100% refund guarantee applies to one-time setup packages (Offering 1 and 2)
                  under the following strict conditions:
                </p>
                <ul style={{ paddingLeft: "1.5rem", marginTop: "0.8rem", display: "flex", flexDirection: "column", gap: "0.5rem", color: "var(--text-secondary)" }}>
                  <li><strong>Timeline Guarantee:</strong> If we fail to deliver a functional staging draft within the working days specified in your signed proposal, you may request a 100% refund of your advance payment.</li>
                  <li><strong>Functionality Guarantee:</strong> If the delivered system does not perform the primary automated tasks (e.g. form submissions do not log, chatbot triggers fail) outlined in the proposal, and we are unable to fix the error in 3 working days, you may request a full refund.</li>
                  <li><strong>Client Dependency Clause:</strong> The timeline guarantee is void if you fail to submit all items in the onboarding checklist within 48 hours of project kickoff, or if revisions take more than 2 working days of review time.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginBottom: "0.8rem", fontWeight: "700" }}>
                  6. Limitation of Liability
                </h3>
                <p>
                  While we optimize setups for search visibility and inquiry captures, ZenLift does not guarantee
                  exact conversion rates, ad campaign margins, or patient volumes. Third-party ad budgets (Meta, Google)
                  and platform fees (WhatsApp API, ManyChat, domain registrars) are paid directly by the client and
                  are entirely non-refundable.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
