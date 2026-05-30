import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "LeadPulse — Marketing ROI Dashboards & CAC Optimizers | ZenLift",
  description: "Consolidate Meta Ads and Google leads in one simple view. Automatically sync inquiries, map acquisition costs (CAC) per niche, and audit agency performance.",
  openGraph: {
    title: "LeadPulse — Marketing ROI Dashboards & CAC Optimizers | ZenLift",
    description: "Consolidate Meta Ads and Google leads in one simple view. Automatically sync inquiries, map acquisition costs (CAC) per niche, and audit agency performance.",
    type: 'website',
  },
};

export default function LeadPulseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
