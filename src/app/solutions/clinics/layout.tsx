import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "AI-Powered Clinic Websites & Appointment Funnels | ZenLift",
  description: "Double patient bookings and eliminate front-desk chaos with custom clinic websites, smart WhatsApp FAQ chatbots, and automated Google review engines in Faridabad & Delhi NCR.",
  openGraph: {
    title: "AI-Powered Clinic Websites & Appointment Funnels | ZenLift",
    description: "Double patient bookings and eliminate front-desk chaos with custom clinic websites, smart WhatsApp FAQ chatbots, and automated Google review engines in Faridabad & Delhi NCR.",
    type: 'website',
  },
};

export default function ClinicsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
