"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
  const defaultWhatsAppMsg = encodeURIComponent(
    "Hi ZenLift, I visited your website and would like to schedule a free 30-minute consultation for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultWhatsAppMsg}`;

  const niches = [
    { name: "Medical Clinics", path: "/solutions/clinics", desc: "For Dentists, Physios & GPs" },
    { name: "Coaching Centers", path: "/solutions/coaching", desc: "For Institutes & Tutors" },
    { name: "Fitness & Gyms", path: "/solutions/fitness", desc: "For Gyms & Yoga Studios" },
    { name: "Restaurants & Cafes", path: "/solutions/restaurants", desc: "For Cafes & Food Joints" },
    { name: "Real Estate Brokers", path: "/solutions/real-estate", desc: "For Property Consultants" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Crisp CSS/SVG Logo */}
        <Link href="/" onClick={closeMenu} className={styles.logoContainer}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            {/* Dark Charcoal background round square */}
            <rect width="200" height="200" rx="44" fill="#0D0D0D" />
            {/* Pixel particles (light gray/orange) */}
            <rect x="50" y="130" width="16" height="16" rx="4" fill="#FFFFFF" opacity="0.3" />
            <rect x="75" y="115" width="16" height="16" rx="4" fill="#F07B00" opacity="0.6" />
            <rect x="100" y="100" width="16" height="16" rx="4" fill="#F07B00" />
            {/* Upward growing arrow in ZenLift Orange */}
            <path
              d="M130 50 L85 50 L85 65 L115 65 L55 125 L65 135 L125 75 L125 105 L140 105 Z"
              fill="#F07B00"
            />
          </svg>
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
              Home
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.dropdown}`}>
            <div className={`${styles.navLink} ${styles.dropdownTrigger} ${pathname.startsWith("/solutions") ? styles.activeLink : ""}`}>
              Solutions
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
              Products
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/about"
              className={`${styles.navLink} ${pathname === "/about" ? styles.activeLink : ""}`}
            >
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contact"
              className={`${styles.navLink} ${pathname === "/contact" ? styles.activeLink : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop WhatsApp CTA */}
        <div className={styles.actions}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btnDesktop} btn btn-primary`}
          >
            Inquire Now
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
        <ul className={styles.mobileNavLinks}>
          <li>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <span className={styles.mobileNavLink} style={{ display: "block", marginBottom: "0.5rem" }}>Solutions</span>
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
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>
              Contact
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
          WhatsApp Inquiry
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
