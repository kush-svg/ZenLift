import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
        />
      </head>
      <body>
        {/* Branded Slow-Motion Persistent Background */}
        <div className="pixel-grid-bg"></div>
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
      </body>
    </html>
  );
}
