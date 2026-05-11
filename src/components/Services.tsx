"use client";

import { motion } from "framer-motion";
import { Laptop, Settings, Share2 } from "lucide-react";

const services = [
  {
    icon: <Laptop size={32} className="text-zen-orange" />,
    title: "Web Development",
    description: "Lightning-fast, SEO-optimized websites built with modern frameworks that convert visitors into customers.",
    tags: ["React & Next.js", "Landing Pages", "E-commerce"],
  },
  {
    icon: <Settings size={32} className="text-zen-orange" />,
    title: "Business Automation",
    description: "Streamline your operations with custom workflows, CRM integrations, and automated data processing.",
    tags: ["WhatsApp Bots", "Zapier", "Custom Dashboards"],
  },
  {
    icon: <Share2 size={32} className="text-zen-orange" />,
    title: "Social Media & Growth",
    description: "Data-driven social media management and ad campaigns designed to maximize ROI and brand awareness.",
    tags: ["Meta Ads", "Content Strategy", "SEO"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-zen-orange uppercase tracking-wider mb-2">What We Do</h2>
          <h3 className="text-4xl font-heading font-bold text-zen-navy">Digital Services for Growth</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-zen-light rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-zen-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <div className="mb-6 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-heading font-bold text-zen-navy mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-zen-navy">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
