import React from "react";
import Link from "next/link";
import styles from "./NicheCard.module.css";

interface NicheCardProps {
  title: string;
  description: string;
  icon: string;
  path: string;
}

const NicheCard: React.FC<NicheCardProps> = ({ title, description, icon, path }) => {
  // Render clean custom inline SVGs matching our design language
  const renderIcon = () => {
    switch (icon) {
      case "clinic":
        return (
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
          </svg>
        );
      case "coaching":
        return (
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.49 12c.66.76 1.58 1.31 2.68 1.57A7.012 7.012 0 0012 15c1.43 0 2.76-.43 3.83-1.43l1.83 1C15.83 16.57 14 17 12 17s-3.83-.43-5.66-2.43l-.85-2.57z" />
          </svg>
        );
      case "fitness":
        return (
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M20.57 14.86L22 13.43l-1.43-1.43-1.43 1.43 1.43 1.43zm-3.57-3.57L21 7.29 19.71 6 15.71 10l1.29 1.29zM10.29 18l-4-4 1.29-1.29L11.57 16 10.29 18zm-4.86.57L4 17.14l1.43-1.43 1.43 1.43-1.43 1.43zM6.86 5.43L5.43 4l-1.43 1.43 1.43 1.43 1.43-1.43zm3.57 3.57L6.43 5 5.14 6.29 9.14 10.29 10.43 9zM19 17.71l-4-4 1.29-1.29 4 4L19 17.71z" />
          </svg>
        );
      case "restaurant":
        return (
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4v-2z" />
          </svg>
        );
      case "real-estate":
        return (
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5 0.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
        );
      default:
        return (
          <svg className={styles.icon} viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
          </svg>
        );
    }
  };

  return (
    <Link href={path} className={styles.card}>
      <div className={styles.iconContainer}>{renderIcon()}</div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.cta}>
          <span>See How We Help</span>
          <svg className={styles.arrow} viewBox="0 0 24 24">
            <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default NicheCard;
