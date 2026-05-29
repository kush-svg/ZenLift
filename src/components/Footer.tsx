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
              <svg
                width="28"
                height="28"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="200" height="200" rx="44" fill="#0D0D0D" />
                <rect x="50" y="130" width="16" height="16" rx="4" fill="#FFFFFF" opacity="0.3" />
                <rect x="75" y="115" width="16" height="16" rx="4" fill="#F07B00" opacity="0.6" />
                <rect x="100" y="100" width="16" height="16" rx="4" fill="#F07B00" />
                <path
                  d="M130 50 L85 50 L85 65 L115 65 L55 125 L65 135 L125 75 L125 105 L140 105 Z"
                  fill="#F07B00"
                />
              </svg>
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
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                IG
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61590547858434"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                FB
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/zenlift/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                LN
              </a>
              {/* Google Business Profile */}
              <a
                href="https://share.google/I1463zNIAh9GIbCX0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Google Business"
              >
                G
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
