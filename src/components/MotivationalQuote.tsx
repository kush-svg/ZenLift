"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

interface Quote {
  en: { text: string; author: string };
  hi: { text: string; author: string };
}

const quotesList: Quote[] = [
  {
    en: { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    hi: { text: "भविष्य का अनुमान लगाने का सबसे अच्छा तरीका इसे बनाना है।", author: "पीटर ड्रकर" }
  },
  {
    en: { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
    hi: { text: "गुणवत्ता का अर्थ है तब सही काम करना जब कोई देख नहीं रहा हो।", author: "हेनरी फोर्ड" }
  },
  {
    en: { text: "Don't find customers for your products, find products for your customers.", author: "Seth Godin" },
    hi: { text: "अपने प्रोडक्ट्स के लिए कस्टमर्स मत ढूंढिए, अपने कस्टमर्स के लिए प्रोडक्ट्स बनाइए।", author: "सेठ गोडिन" }
  },
  {
    en: { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
    hi: { text: "आपके सबसे नाखुश ग्राहक आपके सीखने का सबसे बड़ा स्रोत हैं।", author: "बिल गेट्स" }
  },
  {
    en: { text: "Chase the vision, not the money; the money will end up following you.", author: "Tony Hsieh" },
    hi: { text: "विज़न का पीछा करें, पैसों का नहीं; पैसे अंततः आपके पीछे आएंगे।", author: "टोनी ह्शेह" }
  },
  {
    en: { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    hi: { text: "कार्रवाई ही सभी सफलता की मूलभूत कुंजी है।", author: "पाब्लो पिकासो" }
  }
];

const MotivationalQuote = () => {
  const { language } = useLanguage();
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  useEffect(() => {
    // Select a random quote only on mount to prevent hydration discrepancies
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    setSelectedQuote(quotesList[randomIndex]);
  }, []);

  if (!selectedQuote) return null;

  const activeQuote = selectedQuote[language];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.6rem 1.2rem",
        borderRadius: "50px",
        background: "var(--card-bg)",
        border: "1px solid rgba(240, 123, 0, 0.25)",
        boxShadow: "0 4px 15px rgba(240, 123, 0, 0.05), inset 0 0 10px rgba(240, 123, 0, 0.02)",
        maxWidth: "92%",
        margin: "0 auto 1.8rem auto",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "all 0.3s ease"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", textAlign: "left", flexWrap: "wrap", justifyContent: "center" }}>
        <span 
          style={{ 
            display: "inline-block", 
            width: "6px", 
            height: "6px", 
            borderRadius: "50%", 
            backgroundColor: "var(--primary)",
            boxShadow: "0 0 8px var(--primary)",
            flexShrink: 0
          }}
        />
        <span 
          style={{ 
            fontSize: "0.85rem", 
            fontWeight: "500", 
            color: "var(--text-primary)", 
            lineHeight: "1.4",
            fontStyle: "italic"
          }}
        >
          &quot;{activeQuote.text}&quot;
        </span>
        <span 
          style={{ 
            fontSize: "0.75rem", 
            fontWeight: "700", 
            color: "var(--primary)", 
            textTransform: "uppercase", 
            letterSpacing: "0.05em",
            flexShrink: 0,
            marginLeft: "0.3rem"
          }}
        >
          — {activeQuote.author}
        </span>
      </div>
    </div>
  );
};

export default MotivationalQuote;
