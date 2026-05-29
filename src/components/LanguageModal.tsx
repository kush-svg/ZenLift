"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";

const LanguageModal = () => {
  const { showLanguageModal, setLanguage, closeLanguageModal } = useLanguage();
  const [isFadingOut, setIsFadingOut] = useState(false);

  if (!showLanguageModal) return null;

  const selectLanguage = (lang: "en" | "hi") => {
    setIsFadingOut(true);
    setTimeout(() => {
      setLanguage(lang);
      closeLanguageModal();
    }, 400); // Allow fadeout transition to run
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(13, 13, 13, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        transition: "opacity 0.4s ease",
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? "none" : "auto",
      }}
    >
      <div
        className="glass-card"
        style={{
          width: "90%",
          maxWidth: "480px",
          padding: "3rem 2rem",
          textAlign: "center",
          borderColor: "rgba(240, 123, 0, 0.25)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(240, 123, 0, 0.1)",
          background: "var(--card-bg)",
          transform: isFadingOut ? "scale(0.95)" : "scale(1)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Animated Custom Vector Logo */}
        <div style={{ marginBottom: "1.5rem", display: "inline-block" }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", margin: "0 auto" }}
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
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "0.5rem" }}>
          Select your language
        </h2>
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            color: "var(--text-secondary)",
            marginBottom: "2.5rem",
          }}
        >
          अपनी पसंदीदा भाषा चुनें
        </h3>

        {/* Action selection columns */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button
            onClick={() => selectLanguage("en")}
            className="btn btn-primary"
            style={{
              padding: "1.2rem",
              borderRadius: "12px",
              width: "100%",
              justifyContent: "center",
              fontSize: "1.05rem",
            }}
          >
            English
          </button>
          <button
            onClick={() => selectLanguage("hi")}
            className="btn btn-secondary"
            style={{
              padding: "1.2rem",
              borderRadius: "12px",
              width: "100%",
              justifyContent: "center",
              fontSize: "1.05rem",
              borderColor: "rgba(240, 123, 0, 0.3)",
              background: "rgba(240, 123, 0, 0.05)",
            }}
          >
            हिंदी (Conversational)
          </button>
        </div>

        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            marginTop: "2rem",
            lineHeight: "1.4",
          }}
        >
          You can toggle your language or theme at any time using the switches in the navigation bar.
          <br />
          आप नेविगेशन बार में किसी भी समय अपनी भाषा या थीम बदल सकते हैं।
        </p>
      </div>
    </div>
  );
};

export default LanguageModal;
