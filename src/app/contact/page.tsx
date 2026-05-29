import React from "react";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Get in Touch & Book a Systems Audit | ZenLift",
  description: "Schedule your free 30-minute digital presence consultation. Get custom automation audits and WhatsApp integrations for your business in Delhi NCR & Faridabad.",
};

const ContactPage = () => {
  return (
    <div>
      {/* Background glow graphics */}
      <div className="glow-blur-1"></div>

      {/* Main Contact Form Section */}
      <section className="section" style={{ paddingBottom: "3rem" }}>
        <ContactSection />
      </section>

      {/* Local regional maps block */}
      <section className="section" style={{ paddingTop: "2rem", background: "rgba(10, 10, 10, 0.4)" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="tagline">Area of Operations</span>
            <h2 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              Dominating Delhi NCR & Faridabad local markets
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto" }}>
              We consult, build, and support offline businesses in Faridabad, Gurugram, Noida, and
              the wider NCR territory.
            </p>
          </div>

          {/* Large Stylish Iframe Google Maps Block */}
          <div
            className="glass-card"
            style={{
              height: "450px",
              borderRadius: "20px",
              borderColor: "var(--border-color)",
              overflow: "hidden",
              position: "relative",
              zIndex: 3,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112316.32631527718!2d77.2460293527209!3d28.392576085521998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15fcc4c39f%3A0xc3676c8c4ad09b7c!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716982420000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.1)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ZenLift Area of Operations - Faridabad & Delhi NCR"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
