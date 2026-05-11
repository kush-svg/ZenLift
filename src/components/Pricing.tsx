"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹15,000",
      description: "Perfect for new businesses needing a professional web presence.",
      features: [
        "Single Page Landing Site",
        "Responsive Design",
        "Contact Form Integration",
        "Basic SEO Setup",
        "1 Week Delivery",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "₹35,000",
      description: "Ideal for growing businesses looking to scale their digital footprint.",
      features: [
        "Up to 5 Pages",
        "Custom UI/UX Design",
        "CMS Integration (Blog/Portfolio)",
        "Advanced SEO & Analytics",
        "WhatsApp Automation Setup",
        "2 Weeks Delivery",
      ],
      popular: true,
    },
    {
      name: "Scale",
      price: "Custom",
      description: "For established businesses needing complex applications or systems.",
      features: [
        "Full-Stack Web App",
        "E-commerce Functionality",
        "Custom CRM/Dashboards",
        "Third-party API Integrations",
        "Dedicated Support",
        "Timeline varies",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-zen-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-zen-orange uppercase tracking-wider mb-2">Pricing</h2>
          <h3 className="text-4xl font-heading font-bold text-zen-navy">Transparent Pricing for Growth</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl p-8 transition-transform duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-2 border-zen-orange shadow-2xl z-10 py-10" 
                  : "border border-gray-100 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zen-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-2xl font-heading font-bold text-zen-navy mb-2">{plan.name}</h4>
              <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-heading font-bold text-zen-navy">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500">/project</span>}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-zen-orange shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={`https://wa.me/919079144245?text=Hi,%20I'm%20interested%20in%20the%20${plan.name}%20plan`}
                target="_blank"
                className={`block w-full text-center py-4 rounded-full font-medium transition-colors ${
                  plan.popular
                    ? "bg-zen-orange text-white hover:bg-orange-600"
                    : "bg-zen-light text-zen-navy hover:bg-gray-200"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
