import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "ZenLift Software Suite | Lightweight SaaS for Local Businesses",
  description: "Explore our lightweight, highly practical local business tools. Simplify billing, admissions scheduling, deal tracking, lead scoring, and automated customer follow-ups.",
  openGraph: {
    title: "ZenLift Software Suite | Lightweight SaaS for Local Businesses",
    description: "Explore our lightweight, highly practical local business tools. Simplify billing, admissions scheduling, deal tracking, lead scoring, and automated customer follow-ups.",
    type: 'website',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
