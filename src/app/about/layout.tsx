import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Our Story & Mission | ZenLift Hybrid Digital Agency",
  description: "Meet our co-founding team. We build high-performance static websites and lightweight SaaS products tailored for regional local businesses in Faridabad & Delhi NCR.",
  openGraph: {
    title: "Our Story & Mission | ZenLift Hybrid Digital Agency",
    description: "Meet our co-founding team. We build high-performance static websites and lightweight SaaS products tailored for regional local businesses in Faridabad & Delhi NCR.",
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
