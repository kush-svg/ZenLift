import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "ZenLift | We Help Businesses Grow Digitally",
  description: "We build high-converting websites, digital systems, and automation tools tailored for Indian SMEs and modern startups.",
  metadataBase: new URL("https://zenlift.in"), // Crucial for Vercel relative pathing
  openGraph: {
    title: "ZenLift | We Help Businesses Grow Digitally",
    description: "High-converting websites and automation tools for Indian startups.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} font-body antialiased`}
      >
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
