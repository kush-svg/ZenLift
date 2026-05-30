import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "ZenDesk CRM — Visual Sales Pipelines & Quote Builders | ZenLift",
  description: "Lightweight deal tracker and quote generator designed for local B2B service firms. Qualify inquiries, schedule consultations, send quotes, and close deals.",
  openGraph: {
    title: "ZenDesk CRM — Visual Sales Pipelines & Quote Builders | ZenLift",
    description: "Lightweight deal tracker and quote generator designed for local B2B service firms. Qualify inquiries, schedule consultations, send quotes, and close deals.",
    type: 'website',
  },
};

export default function ZenDeskCrmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
