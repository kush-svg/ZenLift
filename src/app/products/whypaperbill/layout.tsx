import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "WhypaperBill POS — Lightning-Fast Offline POS & Billing | ZenLift",
  description: "A super-fast, offline-capable POS and Billing system built specifically for retail and local brick-and-mortar stores in India. Simplifies inventory, GST invoices, and daily registers.",
  openGraph: {
    title: "WhypaperBill POS — Lightning-Fast Offline POS & Billing | ZenLift",
    description: "A super-fast, offline-capable POS and Billing system built specifically for retail and local brick-and-mortar stores in India. Simplifies inventory, GST invoices, and daily registers.",
    type: 'website',
  },
};

export default function WhypaperBillLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
