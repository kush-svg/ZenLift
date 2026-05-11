"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import Link from "next/link";

type FormData = {
  name: string;
  businessName: string;
  service: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zen-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-white"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 leading-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-10 font-light max-w-lg">
              Let's build something amazing together. Fill out the form or reach out directly on WhatsApp for a faster response.
            </p>
            
            <Link
              href="https://wa.me/919079144245?text=Hi,%20I'd%20like%20to%20start%20a%20project%20with%20ZenLift!"
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-zen-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors hover:scale-105 duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"></path></svg>
              Chat on WhatsApp
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    <CheckCircle className="text-green-500 mb-4" size={64} />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-zen-navy mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-zen-orange focus:ring-2 focus:ring-zen-orange/20 transition-all outline-none"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input
                      {...register("businessName", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-zen-orange focus:ring-2 focus:ring-zen-orange/20 transition-all outline-none"
                      placeholder="Acme Corp"
                    />
                    {errors.businessName && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-zen-orange focus:ring-2 focus:ring-zen-orange/20 transition-all outline-none bg-white"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="Social Media">Social Media Management</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      {...register("message", { required: true })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-zen-orange focus:ring-2 focus:ring-zen-orange/20 transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-zen-navy text-white py-4 rounded-xl font-medium text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
