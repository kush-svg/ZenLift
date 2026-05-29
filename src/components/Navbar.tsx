"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, theme, toggleLanguage, toggleTheme, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const whatsappNumber = "919079144245"; // Default ZenLift WhatsApp

  const getWhatsAppMessage = () => {
    switch (pathname) {
      case "/": return t("waMsgHome");
      case "/solutions/clinics": return t("waMsgClinics");
      case "/solutions/coaching": return t("waMsgCoaching");
      case "/solutions/fitness": return t("waMsgFitness");
      case "/solutions/restaurants": return t("waMsgRestaurants");
      case "/solutions/real-estate": return t("waMsgRealEstate");
      case "/products": return t("waMsgProducts");
      case "/about": return t("waMsgAbout");
      case "/contact": return t("waMsgContact");
      default: return t("waMsgDefault");
    }
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  const niches = [
    { name: t("clinicTag"), path: "/solutions/clinics", desc: language === "en" ? "For Dentists, Physios & GPs" : "डेंटिस्ट, फिजियो और जीपी के लिए" },
    { name: t("coachingTag"), path: "/solutions/coaching", desc: language === "en" ? "For Institutes & Tutors" : "इंस्टीट्यूट्स और ट्यूटर्स के लिए" },
    { name: t("fitnessTag"), path: "/solutions/fitness", desc: language === "en" ? "For Gyms & Yoga Studios" : "जिम और योग स्टूडियो के लिए" },
    { name: t("restaurantTag"), path: "/solutions/restaurants", desc: language === "en" ? "For Cafes & Food Joints" : "कैफ़े और फ़ूड जॉइंट्स के लिए" },
    { name: t("realestateTag"), path: "/solutions/real-estate", desc: language === "en" ? "For Property Consultants" : "प्रॉपर्टी कंसल्टेंट्स के लिए" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" onClick={closeMenu} className={styles.logoContainer}>
          <img
            src="/symbol_transparent.png"
            alt="ZenLift Logo"
            width="32"
            height="32"
            style={{ display: "block", objectFit: "contain" }}
          />
          <span>
            Zen<span className={styles.logoSpan}>Lift</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={`${styles.navLink} ${pathname === "/" ? styles.activeLink : ""}`}
            >
              {t("navHome")}
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <div className={`${styles.navLink} ${styles.dropdownTrigger} ${pathname.startsWith("/solutions") ? styles.activeLink : ""}`}>
              {t("navSolutions")}
              <svg className={styles.dropdownIcon} viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
            <div className={styles.dropdownMenu}>
              {niches.map((niche, idx) => (
                <Link
                  key={idx}
                  href={niche.path}
                  className={styles.dropdownItem}
                  onClick={closeMenu}
                >
                  <span className={styles.dropdownTitle}>{niche.name}</span>
                  <span className={styles.dropdownDesc}>{niche.desc}</span>
                </Link>
              ))}
            </div>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/products"
              className={`${styles.navLink} ${pathname === "/products" ? styles.activeLink : ""}`}
            >
              {t("navProducts")}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/about"
              className={`${styles.navLink} ${pathname === "/about" ? styles.activeLink : ""}`}
            >
              {t("navAbout")}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contact"
              className={`${styles.navLink} ${pathname === "/contact" ? styles.activeLink : ""}`}
            >
              {t("navContact")}
            </Link>
          </li>
        </ul>

        {/* Desktop Controls & WhatsApp CTA */}
        <div className={styles.actions}>
          {/* Language Selector Toggle */}
          <button
            onClick={toggleLanguage}
            className={styles.langSwitchBtn}
            title={language === "en" ? "Translate to Hindi" : "अंग्रेज़ी में अनुवाद करें"}
            aria-label="Toggle language"
          >
            {language === "en" ? "HI" : "हिं"}
          </button>

          {/* Theme Mode Selector Toggle */}
          <button
            onClick={toggleTheme}
            className={styles.toggleBtn}
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg className={styles.toggleIcon} viewBox="0 0 24 24">
                <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.5-.1 1 .2 1.2.7.2.5 0 1.1-.4 1.4-2.8 1.9-4.2 5.4-3.5 8.8.7 3.4 3.6 6 7.1 6.3.4 0 .8.3 1 .7.2.4.1.9-.2 1.2-1.9 1.9-4.5 3-7.3 3zm-2.8-17.5C6.2 5.9 4.2 9 4.2 12c0 4.3 3.5 7.8 7.8 7.8 1.6 0 3.1-.5 4.4-1.4-2.5-.9-4.4-3.2-4.9-6-.6-3.4.6-6.8 3-8.9-1.7-.5-3.4-.6-5-.3z"/>
              </svg>
            ) : (
              <svg className={styles.toggleIcon} viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zm0 14c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1zm8.66-10.66c-.39-.39-1.02-.39-1.41 0l-.71.71c-.39.39-.39 1.02 0 1.41.2.2.45.3.71.3s.51-.1.71-.3l.71-.71c.39-.39.39-1.02 0-1.41zm-15.6 12.02c-.39-.39-1.02-.39-1.41 0l-.71.71c-.39.39-.39 1.02 0 1.41.2.2.45.3.71.3s.51-.1.71-.3l.71-.71c.39-.39.39-1.02 0-1.41zM22 12c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1zm-16 0c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1zm12.66 4.66c-.39-.39-1.02-.39-1.41 0l-.71.71c-.39.39-.39 1.02 0 1.41.2.2.45.3.71.3s.51-.1.71-.3l.71-.71c.39-.39.39-1.02 0-1.41zm-12.02-12c-.39-.39-1.02-.39-1.41 0l-.71.71c-.39.39-.39 1.02 0 1.41.2.2.45.3.71.3s.51-.1.71-.3l.71-.71c.39-.39.39-1.02 0-1.41z"/>
              </svg>
            )}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btnDesktop} btn btn-primary`}
          >
            {t("inquireNow")}
          </a>

          {/* Burger Menu Trigger */}
          <div
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", justifyContent: "flex-end" }}>
          <button
            onClick={toggleLanguage}
            className={styles.langSwitchBtn}
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            {language === "en" ? "HINDI" : "ENGLISH"}
          </button>
          <button
            onClick={toggleTheme}
            className={styles.toggleBtn}
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <ul className={styles.mobileNavLinks}>
          <li>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("navHome")}
            </Link>
          </li>
          <li>
            <span className={styles.mobileNavLink} style={{ display: "block", marginBottom: "0.5rem" }}>
              {t("navSolutions")}
            </span>
            <div className={styles.mobileSubLinks}>
              {niches.map((niche, idx) => (
                <Link
                  key={idx}
                  href={niche.path}
                  className={styles.mobileSubLink}
                  onClick={closeMenu}
                >
                  {niche.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/products" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("navProducts")}
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("navAbout")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
              {t("navContact")}
            </Link>
          </li>
        </ul>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="btn btn-primary"
          style={{ width: "100%", padding: "1.2rem" }}
        >
          {t("whatsappInquiry")}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
