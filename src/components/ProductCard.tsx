import React from "react";
import Link from "next/link";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  description: string;
  features?: string[];
  isFeatured?: boolean;
  isComingSoon?: boolean;
  ctaText?: string;
  ctaUrl?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  features = [],
  isFeatured = false,
  isComingSoon = false,
  ctaText = "Learn More",
  ctaUrl = "",
}) => {
  const whatsappNumber = "919079144245";
  const defaultWhatsAppMsg = encodeURIComponent(
    `Hi ZenLift, I'm interested in your product: ${title}. Could you share more details or a demo?`
  );
  const whatsappUrl = ctaUrl || `https://wa.me/${whatsappNumber}?text=${defaultWhatsAppMsg}`;

  return (
    <div className={`${styles.card} ${isFeatured ? styles.featured : ""}`}>
      <div>
        {/* Badge Indicator */}
        <div className={styles.badgeRow}>
          {isComingSoon ? (
            <span className={`${styles.productBadge} ${styles.soonBadge}`}>
              <span className="pulse-dot pulse-dot-blue"></span>
              Coming Soon
            </span>
          ) : (
            <span className={`${styles.productBadge} ${styles.activeBadge}`}>
              <span className="pulse-dot"></span>
              Live Product
            </span>
          )}
          
          {isFeatured && (
            <span className={styles.productBadge} style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Featured Solution
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Features Bullet List */}
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <span className={isComingSoon ? styles.soonCheck : styles.featureCheck}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button CTA Actions */}
      <div className={styles.actions}>
        {ctaUrl.startsWith("/products/") ? (
          <>
            <Link href={ctaUrl} className="btn btn-primary" style={{ display: "block", textAlign: "center" }}>
              Launch Interactive Demo
            </Link>
            <a
              href={`https://wa.me/919079144245?text=${encodeURIComponent(
                `Hi ZenLift, I'm interested in your product: ${title}. Could you share more details or a custom quote?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ display: "block", textAlign: "center" }}
            >
              Inquire on WhatsApp
            </a>
          </>
        ) : isComingSoon ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Join Waitlist / Pre-register
          </a>
        ) : (
          <>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Beta Access
            </a>
            <Link href="/contact" className="btn btn-secondary">
              Talk to Sales
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
