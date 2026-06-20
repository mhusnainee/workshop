"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home / الرئيسية" },
    { href: "/services", label: "Services / الخدمات" },
    { href: "/troubleshooting", label: "Diagnostics / التشخيص" },
    { href: "/contact", label: "Contact / اتصل بنا" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-[#090D16]/80 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center text-white font-black text-sm">
            S
          </div>
          <span className="text-lg sm:text-xl font-black tracking-tight text-blue-600 dark:text-blue-400">
            STEEL{" "}
            <span className="text-slate-800 dark:text-white">BENDING</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs sm:text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-blue-600 dark:text-blue-400 font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            <span className="block dark:hidden">🌙</span>
            <span className="hidden dark:block">☀️</span>
          </button>

          <a
            href="tel:+966590098586"
            className="px-4 py-2 text-xs font-bold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 hidden sm:inline-block"
          >
            Call Workshop
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-slate-50 dark:bg-[#090D16] border-t border-slate-200 dark:border-slate-800">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+966590098586"
            className="block py-2 px-3 rounded-lg text-sm font-bold bg-blue-600 text-white text-center mt-2"
          >
            📞 Call Workshop
          </a>
        </div>
      )}
    </header>
  );
}
