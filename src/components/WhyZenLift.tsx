"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyZenLift() {
  const reasons = [
    {
      title: "Full Attention",
      description: "We don't juggle 50 projects at once. We take on a select few to ensure your business gets the dedicated attention it deserves.",
    },
    {
      title: "Startup Pricing",
      description: "Enterprise-grade quality without the enterprise price tag. We understand startup budgets and deliver maximum value.",
    },
    {
      title: "We Grow Together",
      description: "Your success is our portfolio. We build long-term partnerships focused on measurable business outcomes, not just deliverables.",
    },
  ];

  return (
    <section className="py-24 bg-zen-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-zen-orange uppercase tracking-wider mb-2">Why ZenLift</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-zen-navy mb-6 leading-tight">
              A Partner That Actually Cares About Your Growth
            </h3>
            <p className="text-xl text-gray-600 mb-8 font-light">
              We're not just another agency that builds a site and disappears. We act as your fractional tech and growth team.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-zen-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold text-zen-navy mb-2">{reason.title}</h4>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img 
                src="/cover.png" 
                alt="ZenLift Brand Banner" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-zen-navy to-transparent">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white">
                  <div className="text-4xl font-bold font-heading mb-2">100%</div>
                  <div className="text-white/80 font-medium">Commitment to your success</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-zen-orange rounded-full mix-blend-multiply blur-xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply blur-xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
