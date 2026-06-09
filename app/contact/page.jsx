"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.051410427306!2d46.7360496150028!3d24.638854984160455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM4JzE5LjkiTiA0NsKwNDQnMTAuOCJF!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `New inquiry from ${formData.name} (${formData.company || "N/A"}):\n${formData.message}\nCallback: ${formData.phone}`;
    window.open(
      `https://wa.me/966590098586?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono mb-4">
          Direct Engineer Contact
        </div>
        <h1 className="text-3xl sm:text-4xl font-black mb-3">
          Connect Directly with Our Engineers
        </h1>
        <h2 className="text-xl font-bold font-cairo text-slate-700 dark:text-slate-300">
          تواصل مباشرة مع المهندسين المختصين بالصناعية
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6 flex flex-col"
        >
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-6 flex-grow">
            <h3 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-3">
              Official Directory | بيانات الاتصال
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    Lead Engineer / مهندس محمد أنور
                  </span>
                  <div className="font-bold text-slate-800 dark:text-slate-100">
                    Eng. Mohammad Anwar
                  </div>
                  <a
                    href="tel:+966590098586"
                    className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +966 59 009 8586
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    Electrical Lead / مهندس تصور
                  </span>
                  <div className="font-bold text-slate-800 dark:text-slate-100">
                    Eng. Tasawwar
                  </div>
                  <a
                    href="tel:+966510243582"
                    className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +966 51 024 3582
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    Workshop Location (موقع الورشة)
                  </span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Abi Shawk Street, off Prince Salman Road,
                    <br />
                    Al-Sinaiyah al-Qadimah, Riyadh
                  </p>
                  <p className="text-xs font-cairo text-slate-500 mt-1">
                    الرياض، المنطقة الصناعية القديمة، شارع أبي شوك المتفرع من
                    الأمير سلمان
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">
                    Hours of Operation
                  </span>
                  <p className="text-sm font-medium">
                    Saturday – Thursday: 8:00 AM – 6:00 PM
                  </p>
                  <p className="text-sm font-medium text-slate-500">
                    Friday: Closed / الجمعة مغلق
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://wa.me/966590098586"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-transform active:scale-95 duration-200 text-sm flex flex-col justify-center items-center gap-1"
            >
              <MessageCircle size={18} />
              <span>WhatsApp (Anwar)</span>
              <span className="text-xs font-normal font-cairo">
                واتساب م. أنور
              </span>
            </a>
            <a
              href="https://wa.me/966510243582"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-transform active:scale-95 duration-200 text-sm flex flex-col justify-center items-center gap-1"
            >
              <MessageCircle size={18} />
              <span>WhatsApp (Tasawwar)</span>
              <span className="text-xs font-normal font-cairo">
                واتساب م. تصور
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="h-[280px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Khalifa Workshop Location"
            />
          </div>

          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-4">
            <h3 className="font-bold text-lg">
              Send an Inquiry / أرسل استفساراً
            </h3>

            {submitted ? (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium text-center">
                ✅ Your message has been composed for WhatsApp. Thank you for
                contacting Khalifa Repair!
                <br />
                <span className="font-cairo text-xs">
                  تم توجيهك إلى واتساب لإرسال استفسارك.
                </span>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0c111e] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">
                      Company / Site
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company or project site"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0c111e] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    Callback Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 ..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0c111e] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">
                    Describe Your Machine Problem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the machine type, symptoms observed, and urgency..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0c111e] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.message}
                  className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-all active:scale-[0.99] duration-200"
                >
                  Send via WhatsApp / إرسال عبر واتساب
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
