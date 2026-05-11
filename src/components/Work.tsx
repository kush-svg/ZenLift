"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Work() {
  return (
    <section id="work" className="py-24 bg-zen-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-zen-orange uppercase tracking-wider mb-2">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">Featured Projects</h3>
          </div>
          <p className="text-gray-400 max-w-md mt-6 md:mt-0">
            We're currently building our first batch of client projects. Soon, this space will be filled with success stories.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
        >
          <div className="w-20 h-20 bg-zen-orange/20 text-zen-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <h4 className="text-2xl md:text-3xl font-heading font-bold mb-4">Your Project Could Be Here</h4>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Partner with us to build something extraordinary. We're looking for ambitious businesses ready to scale.
          </p>
          <Link
            href="https://wa.me/919079144245?text=Hi,%20I'd%20like%20to%20be%20one%20of%20your%20first%20success%20stories!"
            target="_blank"
            className="inline-flex items-center gap-2 bg-zen-orange text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-colors hover:scale-105 duration-200"
          >
            Start a Project
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
