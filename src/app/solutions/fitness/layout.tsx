import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Gym Landing Pages & Free Trial Capture Funnels | ZenLift",
  description: "Turn online clicks into gym footfall. We build high-converting gym landing pages, offer-led free trial booking forms, and automated WhatsApp follow-ups in Faridabad & Delhi NCR.",
  openGraph: {
    title: "Gym Landing Pages & Free Trial Capture Funnels | ZenLift",
    description: "Turn online clicks into gym footfall. We build high-converting gym landing pages, offer-led free trial booking forms, and automated WhatsApp follow-ups in Faridabad & Delhi NCR.",
    type: 'website',
  },
};

export default function FitnessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
