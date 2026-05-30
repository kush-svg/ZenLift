import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "ChatFlow — WhatsApp Bot Designers & Lead Capturers | ZenLift",
  description: "Visual auto-response editor and simulator. Answer local customer FAQs instantly, capture contact information, and route live hot leads to your WhatsApp.",
  openGraph: {
    title: "ChatFlow — WhatsApp Bot Designers & Lead Capturers | ZenLift",
    description: "Visual auto-response editor and simulator. Answer local customer FAQs instantly, capture contact information, and route live hot leads to your WhatsApp.",
    type: 'website',
  },
};

export default function ChatFlowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
