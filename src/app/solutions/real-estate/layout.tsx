import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Exclusive Real Estate Lead Funnels & Brochure Bots | ZenLift",
  description: "Stop competing on shared listing portals. We build high-converting project landing pages, automated WhatsApp brochure delivery bots, and lead qualification systems in Faridabad & Delhi NCR.",
  openGraph: {
    title: "Exclusive Real Estate Lead Funnels & Brochure Bots | ZenLift",
    description: "Stop competing on shared listing portals. We build high-converting project landing pages, automated WhatsApp brochure delivery bots, and lead qualification systems in Faridabad & Delhi NCR.",
    type: 'website',
  },
};

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
