"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/locales/translations";

type Theme = "light" | "dark";

interface LanguageContextType {
  language: Language;
  theme: Theme;
  showLanguageModal: boolean;
  t: (key: keyof typeof translations["en"]) => string;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  closeLanguageModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<Theme>("light");
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Run client-side checks on mount
    const savedLang = localStorage.getItem("zenlift_lang") as Language | null;
    const savedTheme = localStorage.getItem("zenlift_theme") as Theme | null;

    if (savedLang) {
      setLanguageState(savedLang);
    } else {
      // First-time visitor, show language selection modal
      setShowLanguageModal(true);
    }

    if (savedTheme) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Default to Light Mode
      setThemeState("light");
      document.documentElement.setAttribute("data-theme", "light");
    }

    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("zenlift_lang", lang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("zenlift_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "hi" : "en";
    setLanguage(nextLang);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  const closeLanguageModal = () => {
    setShowLanguageModal(false);
  };

  const t = (key: keyof typeof translations["en"]): string => {
    const translationMap = translations[language] || translations["en"];
    const value = translationMap[key] || translations["en"][key] || String(key);
    return typeof value === "string" ? value : "";
  };

  // Prevent hydration discrepancies by rendering a fallback or transparent wrapper before client state is synced
  return (
    <LanguageContext.Provider
      value={{
        language,
        theme,
        showLanguageModal,
        t,
        setLanguage,
        setTheme,
        toggleLanguage,
        toggleTheme,
        closeLanguageModal,
      }}
    >
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
