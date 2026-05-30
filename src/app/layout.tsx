import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { LanguageProvider } from "@/components/LanguageContext";
import LanguageModal from "@/components/LanguageModal";
import DotCorridorBg from "@/components/DotCorridorBg";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "ZenLift | AI-Powered Web Systems & Automation for Local Businesses",
  description: "We build high-converting websites, smart inquiry chatbots, and automated follow-ups that double revenue for local businesses in Delhi NCR & Faridabad.",
  metadataBase: new URL("https://zenlift.in"), // Crucial for Vercel relative pathing
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ZenLift | AI-Powered Web Systems & Automation for Local Businesses",
    description: "We build high-converting websites, smart inquiry chatbots, and automated follow-ups that double revenue for local businesses.",
    url: "https://zenlift.in",
    siteName: "ZenLift",
    images: [
      {
        url: "https://kommodo.ai/i/vanhD6ImBiIdtLfQGYXa",
        width: 1200,
        height: 630,
        alt: "ZenLift Digital Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head />
      <body>
        <LanguageProvider>
          {/* Branded Slow-Motion Persistent Background */}
          <DotCorridorBg />
          <div className="pixel-grid-overlay"></div>
          <div className="logo-particle-container">
            <div className="logo-particle logo-particle-1"></div>
            <div className="logo-particle logo-particle-2"></div>
            <div className="logo-particle logo-particle-3"></div>
            <div className="logo-particle logo-particle-4"></div>
          </div>

          <Navbar />
          <main style={{ minHeight: "calc(100vh - 80px)", paddingTop: "80px" }}>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <LanguageModal />
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
