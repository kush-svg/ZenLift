import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Admissions Marketing & Demo Class Funnels for Coaching | ZenLift",
  description: "Fill your demo classes and enroll more students automatically. We set up academy websites, WhatsApp parent reminders, and student lead databases in Faridabad & Delhi NCR.",
  openGraph: {
    title: "Admissions Marketing & Demo Class Funnels for Coaching | ZenLift",
    description: "Fill your demo classes and enroll more students automatically. We set up academy websites, WhatsApp parent reminders, and student lead databases in Faridabad & Delhi NCR.",
    type: 'website',
  },
};

export default function CoachingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
