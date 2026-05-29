"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { useLanguage } from "@/components/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919079144245";
  const defaultWhatsAppMsg = encodeURIComponent(
    t("waMsgDefault")
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultWhatsAppMsg}`;

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Giant banner CTA */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaTextContainer}>
            <h3 className={styles.ctaTitle}>{t("footerCtaTitle")}</h3>
            <p className={styles.ctaDesc}>
              {t("footerCtaDesc")}
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t("getStarted")}
            </a>
            <Link href="/contact" className="btn btn-secondary">
              {t("navContact")}
            </Link>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className={styles.columnsGrid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.logoContainer}>
              <img
                src="/symbol_transparent.png"
                alt="ZenLift Logo"
                width="28"
                height="28"
                style={{ display: "block", objectFit: "contain" }}
              />
              <span>
                Zen<span className={styles.logoSpan}>Lift</span>
              </span>
            </div>
            <p className={styles.brandDesc}>
              {t("footerDesc")}
            </p>
            <div className={styles.socials}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/zenlift.in/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.instagram}`}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61590547858434"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.facebook}`}
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/zenlift/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.linkedin}`}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Google Business Profile */}
              <a
                href="https://share.google/I1463zNIAh9GIbCX0"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialIcon} ${styles.google}`}
                aria-label="Google Business"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className={styles.colTitle}>{t("navSolutions")}</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/solutions/clinics">{t("clinicTag")}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/solutions/coaching">{t("coachingTag")}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/solutions/fitness">{t("fitnessTag")}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/solutions/restaurants">{t("restaurantTag")}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/solutions/real-estate">{t("realestateTag")}</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className={styles.colTitle}>ZenLift</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <Link href="/">{t("navHome")}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/products">{t("navProducts")}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/about">{t("navAbout")}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact">{t("navContact")}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={styles.colTitle}>{t("navContact")}</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>zenlift.contact@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1.985 1.985 0 00-2 0l-2.18 2.18c-2.82-1.43-5.13-3.74-6.56-6.56l2.18-2.18a1.99 1.99 0 00.57-3.53C7.4 3.6 7.2 2.41 7.2 1.18c0-1.1-.9-2-2-2H1.99c-1.1 0-2 .9-2 2 0 11.03 8.97 20 20 20 1.1 0 2-.9 2-2v-3.81c0-1.1-.9-2-2-2z" />
                </svg>
                <span>+91 90791 44245</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Faridabad, Delhi NCR, India</span>
              </div>
              <div className={styles.contactItem} style={{ marginTop: "0.5rem" }}>
                <span className="live-indicator">
                  <span className="pulse-dot"></span>
                  {t("activeOps")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className={styles.bottomRow}>
          <p>© {currentYear} ZenLift Agency. {t("allRightsReserved")}</p>
          <div className={styles.bottomLinks}>
            <Link href="/terms">{t("terms")}</Link>
            <Link href="/privacy">{t("privacy")}</Link>
          </div>
        </div>

        {/* Giant Outlined Typography Background Accent */}
        <div className={styles.giantBrand}>ZenLift</div>
      </div>
    </footer>
  );
};

export default Footer;
