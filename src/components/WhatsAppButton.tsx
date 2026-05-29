"use client";

import React from "react";
import { usePathname } from "next/navigation";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  const pathname = usePathname();
  const whatsappNumber = "919079144245"; // ZenLift WhatsApp

  const getCustomMessage = () => {
    switch (pathname) {
      case "/":
        return "Hi ZenLift, I visited your homepage and would like to get a free digital audit for my business.";
      case "/solutions/clinics":
        return "Hi ZenLift, I run a medical practice and want to set up an automated clinic appointment funnel.";
      case "/solutions/coaching":
        return "Hi ZenLift, I run a coaching institute and want to set up a demo-class registration funnel.";
      case "/solutions/fitness":
        return "Hi ZenLift, I run a gym/fitness center and want to capture and track free trial inquiries.";
      case "/solutions/restaurants":
        return "Hi ZenLift, I run a restaurant/cafe and want to setup review automation and drive walk-ins.";
      case "/solutions/real-estate":
        return "Hi ZenLift, I am a property consultant and want to setup automatic brochure sharing and lead qualification.";
      case "/products":
        return "Hi ZenLift, I want to learn more about your upcoming products (specifically WhypaperBill).";
      case "/about":
        return "Hi ZenLift, I read about your co-founding team and want to discuss digital automation opportunities.";
      case "/contact":
        return "Hi ZenLift, I'd like to schedule a free 30-minute digital systems consultation.";
      default:
        return "Hi ZenLift, I'd like to ask a few questions about your AI web agency services.";
    }
  };

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getCustomMessage())}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Contact ZenLift on WhatsApp"
    >
      <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.48 1.332 5l-1.356 4.966 5.082-1.332c1.474.802 3.126 1.232 4.814 1.232 5.506 0 10.004-4.482 10.004-9.988.002-5.506-4.482-9.988-10.004-9.988zm6.05 13.918c-.244.692-1.22 1.272-1.684 1.344-.44.068-.996.114-2.91-.652-2.446-.976-4.02-3.456-4.142-3.62-.122-.162-.996-1.32-.996-2.52 0-1.2.632-1.792.854-2.036.224-.244.488-.306.652-.306.162 0 .324.002.466.008.148.006.348-.052.544.42.204.492.692 1.69.752 1.812.062.122.102.264.02.428-.082.164-.122.264-.244.406-.122.144-.256.322-.366.432-.122.122-.25.254-.108.498.142.242.63 1.036 1.354 1.682.934.832 1.716 1.088 1.96 1.21.244.122.386.102.488-.018.102-.12.448-.52.57-.692.122-.172.244-.142.408-.082.164.06.1.488 2.01.996.122.062.204.122.264.244.06.122.06.692-.184 1.384z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
