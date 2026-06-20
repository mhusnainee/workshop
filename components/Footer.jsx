import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c111e] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center text-white font-black text-sm">
              S
            </div>
            <span className="font-black text-blue-600 dark:text-blue-400 tracking-tight">
              STEEL BENDING
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Expert industrial machinery repair services in Riyadh.
            <br />
            <span className="font-cairo">
              خدمات إصلاح المعدات الصناعية في الرياض
            </span>
          </p>
          <p className="text-xs font-mono text-slate-400">
            Abi Shawk St, Al-Sinaiyah al-Qadimah, Riyadh
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Quick Links
          </h4>
          <div className="space-y-2">
            {[
              { href: "/", label: "Home / الرئيسية" },
              { href: "/services", label: "Services / الخدمات" },
              { href: "/troubleshooting", label: "Diagnostics / التشخيص" },
              { href: "/contact", label: "Contact / اتصل" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Summary */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
            Contact
          </h4>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-[11px] text-slate-400 block">
                Eng. Mohammad Anwar
              </span>
              <a
                href="tel:+966590098586"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                +966 59 009 8586
              </a>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">
                Eng. Tasawwar
              </span>
              <a
                href="tel:+966510243582"
                className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                +966 51 024 3582
              </a>
            </div>
            <div className="flex gap-2 pt-1">
              <a
                href="https://wa.me/966590098586"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="/contact"
                className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Map / Location
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 px-4 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Steel Bending Repair | خليفة لصيانة
        المعدات الصناعية — All rights reserved.
      </div>
    </footer>
  );
}
