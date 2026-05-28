"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "TechNova Retail",
    role: "Founder & CEO",
    content: "ZenLift completely revamped our digital presence. Our e-commerce brand scaled 3x in just four months after they deployed our new Next.js website. The results speak for themselves.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Desai",
    company: "Desai Logistics",
    role: "Operations Head",
    content: "The team built a WhatsApp CRM bot that automated our manual tracking. We are now saving over 40+ hours a week. Incredible ROI for our Indian startup.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    company: "Singh & Co. Legal",
    role: "Managing Partner",
    content: "Our organic leads doubled thanks to ZenLift's growth marketing strategies and the blazing fast landing page they built for us. Highly recommended for any growing firm.",
    rating: 5,
  },
];

export default function Testimonials() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "ProfessionalService",
      "name": "ZenLift"
    },
    "ratingValue": "5",
    "reviewCount": testimonials.length.toString(),
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "ProfessionalService",
        "name": "ZenLift"
      },
      "reviewBody": t.content
    }))
  };

  return (
    <section id="testimonials" className="py-24 bg-zen-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-zen-orange uppercase tracking-wider mb-2">Case Studies & Reviews</h2>
          <h3 className="text-4xl font-heading font-bold text-zen-navy">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-100 w-16 h-16 -z-0" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-zen-orange">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-8 relative leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zen-orange text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-zen-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
