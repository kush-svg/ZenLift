"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const text = "We Help Businesses Grow Digitally".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zen-light pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zen-orange/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-zen-navy/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-zen-navy tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              key={i}
              className={`inline-block mr-3 ${el.toLowerCase() === 'grow' ? 'italic text-zen-orange' : ''}`}
            >
              {el}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-light"
        >
          We build high-converting websites, digital systems, and automation tools tailored for Indian SMEs and modern startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://wa.me/919079144245?text=Hi,%20I'd%20like%20to%20start%20a%20project%20with%20ZenLift!"
            target="_blank"
            className="flex items-center gap-2 bg-zen-orange text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-zen-orange/30 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            <span>Start a Project</span>
          </Link>

          {/* 🌟 CRITICAL SEO FIX: Prevents text from bundling as "Start a ProjectSee Our Work" */}
          <span className="sr-only"> content separator </span>

          <Link
            href="#work"
            className="flex items-center gap-2 bg-white text-zen-navy border border-gray-200 px-8 py-4 rounded-full font-medium text-lg hover:border-zen-navy transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <span>See Our Work</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}