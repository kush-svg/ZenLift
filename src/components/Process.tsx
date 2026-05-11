"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Discovery Call",
      description: "We discuss your business goals, target audience, and digital requirements.",
    },
    {
      id: "02",
      title: "Proposal",
      description: "You receive a detailed plan including timelines, features, and transparent pricing.",
    },
    {
      id: "03",
      title: "Build & Review",
      description: "We build your project with regular check-ins and feedback loops.",
    },
    {
      id: "04",
      title: "Launch",
      description: "We deploy your project, set up analytics, and ensure everything runs flawlessly.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-zen-orange uppercase tracking-wider mb-2">Our Process</h2>
          <h3 className="text-4xl font-heading font-bold text-zen-navy">How We Work</h3>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 z-0 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-white pt-8 pb-6 px-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-zen-navy text-white flex items-center justify-center font-heading font-bold text-xl group-hover:bg-zen-orange group-hover:scale-110 transition-all shadow-md">
                  {step.id}
                </div>
                
                <h4 className="text-xl font-heading font-bold text-center text-zen-navy mt-4 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
