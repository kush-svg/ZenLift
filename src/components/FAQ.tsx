"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "Will a website actually bring me new customers?",
      answer:
        "A website alone is just a digital card. What we build is a comprehensive client-acquisition system. We connect your site to a optimized Google Business Profile and set up one-click WhatsApp CTAs so local people who are actively searching for your services can find you, trust you, and contact you in seconds.",
    },
    {
      question: "I don't have time to manage this. Who handles the content and updates?",
      answer:
        "We handle everything. Under our starter offerings, our team does the copywriting, structures the automated chatbots, and sets up your lead sheets. For clients on our monthly Growth Support, we manage all posts, map listings, and ad campaigns. You focus on serving clients; your systems work in the background.",
    },
    {
      question: "What does the 100% Refund Guarantee cover?",
      answer:
        "We are outcome-led and trust-first. For our Digital Starter and Lead Capture setups (Offering 1 and 2), if we fail to deliver the completed systems within our agreed timeline or if the setup does not function according to our approved design, we refund your advance in full. No complicated loopholes, just honest service.",
    },
    {
      question: "How do your software products fit into my business?",
      answer:
        "We believe in starting with a service to understand your exact operations. As you grow and we standardise your client workflows, we migrate you to our specialized SaaS products (like WhypaperBill for POS/billing, or TutorPlus for tuition scheduling) which gives you robust control at a fraction of standard developer retainers.",
    },
    {
      question: "Can this system integrate with the official WhatsApp Business API?",
      answer:
        "Absolutely. For businesses like Clinics, Coaching Centers, and Real Estate Brokers that need higher volume automation, we set up official API platforms (e.g. WATI or ManyChat). This lets you send bulk promotional campaigns, automate class or appointment reminders, and run smart interactive chat flows legally and reliably.",
    },
  ];

  return (
    <div className={styles.faqSection}>
      {faqData.map((item, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div
            key={idx}
            className={`${styles.faqItem} ${isOpen ? styles.activeItem : ""}`}
            onClick={() => toggleFAQ(idx)}
          >
            <div className={styles.questionRow}>
              <h4 className={styles.question}>{item.question}</h4>
              <div className={styles.iconContainer}>
                <svg className={styles.toggleIcon} viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
            </div>
            <div className={styles.answerRow}>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
