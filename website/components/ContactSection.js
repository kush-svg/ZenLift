"use client";

import React, { useState } from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "Dental / Clinic",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate standard server/database dispatch
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        businessType: "Dental / Clinic",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className={styles.sectionWrapper}>
      {/* Background glow graphics */}
      <div className="glow-blur-1" style={{ top: "20%", right: "-200px" }}></div>
      <div className="glow-blur-2" style={{ bottom: "0", left: "-200px" }}></div>

      <div className="container">
        <div className={styles.grid}>
          {/* Left Details Column */}
          <div className={styles.infoCol}>
            <span className={styles.tagline}>Get In Touch</span>
            <h2 className={styles.title}>Let's scale your local operations</h2>
            <p className={styles.description}>
              Have questions about setting up a custom website or inquiry chatbot? Fill out the form
              and our co-founding team will review your business and contact you in under 4 hours.
            </p>

            <div className={styles.channelsList}>
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919999999999?text=Hi%20ZenLift%2C%20I'm%20interested%20in%20scaling%20my%20business%20digital%20presence."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelCard}
              >
                <div className={styles.channelIcon}>WA</div>
                <div>
                  <div className={styles.channelTitle}>Quick Chat</div>
                  <div className={styles.channelValue}>+91 99999 99999</div>
                </div>
              </a>

              {/* Email Card */}
              <div className={styles.channelCard}>
                <div className={styles.channelIcon}>@</div>
                <div>
                  <div className={styles.channelTitle}>Email Channel</div>
                  <div className={styles.channelValue}>hello@zenlift.in</div>
                </div>
              </div>

              {/* Location Card */}
              <div className={styles.channelCard}>
                <div className={styles.channelIcon}>LOC</div>
                <div>
                  <div className={styles.channelTitle}>Main Office</div>
                  <div className={styles.channelValue}>Faridabad, Delhi NCR, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className={styles.formCol}>
            {success ? (
              <div className={styles.successContainer}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Inquiry Submitted</h3>
                <p className={styles.successMessage}>
                  Thank you! We have successfully received your information. A co-founder from the
                  ZenLift team will review your business presence and reach out to you via WhatsApp
                  or phone in under 4 hours.
                </p>
                <button className="btn btn-secondary" style={{ marginTop: "1rem" }} onClick={() => setSuccess(false)}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.gridFormRow} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="businessType" className={styles.label}>
                    Business Industry
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Dental / Clinic">Medical Clinic / Dentist / Physio</option>
                    <option value="Coaching / Tuition">Coaching Institute / Tuition Center</option>
                    <option value="Gym / Fitness">Gym / Fitness Studio / Yoga</option>
                    <option value="Cafe / Restaurant">Restaurant / Café / Cloud Kitchen</option>
                    <option value="Real Estate Broker">Real Estate Broker / Property Agency</option>
                    <option value="Other">Other / Custom Enterprise</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Tell us about your business goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="e.g., I want to set up an automated demo-class registration sheet and a course website."
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "1rem" }}
                >
                  {loading ? "Submitting Inquiry..." : "Submit Digital Consultation Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
