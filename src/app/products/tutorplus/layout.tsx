import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "TutorPlus — Academy Admissions & Parent Alerts Manager | ZenLift",
  description: "Automated student scheduling and admissions manager. Simplify demo-class reservations, batch schedules, parent WhatsApp announcements, and fee collections.",
  openGraph: {
    title: "TutorPlus — Academy Admissions & Parent Alerts Manager | ZenLift",
    description: "Automated student scheduling and admissions manager. Simplify demo-class reservations, batch schedules, parent WhatsApp announcements, and fee collections.",
    type: 'website',
  },
};

export default function TutorPlusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
