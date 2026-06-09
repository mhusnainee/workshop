'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, Zap, Settings, Award, MapPin } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years Experience', labelAr: 'سنة خبرة' },
  { value: '500+', label: 'Machines Repaired', labelAr: 'آلة تم إصلاحها' },
  { value: '2', label: 'Lead Engineers', labelAr: 'مهندس متخصص' },
  { value: '24h', label: 'Turnaround', labelAr: 'وقت الاستجابة' },
];

const highlights = [
  { icon: <Wrench size={20} />, text: 'Steel Cutting & Bending Machines', textAr: 'مكائن قص وثني الحديد' },
  { icon: <Zap size={20} />, text: 'Electric Motor Rewinding', textAr: 'لف الدينموات الكهربائية' },
  { icon: <Settings size={20} />, text: 'Site Generator Maintenance', textAr: 'صيانة مولدات الكهرباء' },
  { icon: <Award size={20} />, text: 'Professional Power Tools', textAr: 'المعدات الصناعية اليدوية' },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        {/* Blueprint background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* Copy Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              Sinaiyah al-Qadimah, Riyadh | الصناعية القديمة، الرياض
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Khalifa Industrial <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500 dark:from-blue-400 dark:to-amber-400">
                  Machinery Repair
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold font-cairo text-slate-700 dark:text-slate-300">
                ورشة صيانة خليفة للمعدات الصناعية
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Established field support on Abi Shawk Street. Delivering heavy duty repairs for structural rebar benders
              and shears, electrical motor rewinding, job-site generators, and mechanical workshop tools.
              <br />
              <span className="font-cairo block mt-2 text-sm sm:text-base">
                نقدم خدمات الصيانة والإصلاح المعتمدة لمكائن قص وثني الحديد، لف الدينموات، مولدات الكهرباء،
                والمعدات اليدوية في قلب المنطقة الصناعية بالرياض.
              </span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg transition-transform active:scale-95 duration-200"
              >
                Contact Engineers / اتصل بنا
              </Link>
              <Link
                href="/troubleshooting"
                className="px-6 py-3 rounded-lg font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-200"
              >
                View Troubleshooting Manual
              </Link>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-blue-500 mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <span className="block font-medium text-slate-800 dark:text-slate-200">{item.text}</span>
                    <span className="block text-xs font-cairo">{item.textAr}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-[#111827]/50 p-4 flex flex-col justify-between group overflow-hidden">

              <div className="absolute inset-0 opacity-5 dark:opacity-10"
                style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

              <div className="flex justify-between items-center z-10">
                <span className="text-xs font-mono text-slate-400">KHALIFA_ENG_TEAM</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[10px] font-mono font-bold">
                  ON-SITE SERVICE
                </span>
              </div>

              <div className="flex flex-col items-center justify-center text-center py-8 z-10 flex-grow">
                <div className="w-20 h-20 rounded-full bg-blue-500/10 border-2 border-dashed border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Client Photo Placeholder</h3>
                <p className="text-xs text-slate-500 max-w-xs mt-2 font-cairo leading-relaxed">
                  Place image in <code className="bg-slate-200 dark:bg-slate-800 px-1 rounded text-[10px]">/public/images/placeholder-engineers.jpg</code><br />
                  Eng. Mohammad Anwar & Eng. Tasawwar
                </p>
              </div>

              <div className="p-3 bg-white dark:bg-[#0c111e] rounded-xl border border-slate-200 dark:border-slate-800 z-10 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <div className="font-bold">Eng. Mohammad Anwar</div>
                    <div className="text-[10px] text-slate-400">Mechanical Systems Lead</div>
                  </div>
                  <a href="tel:+966590098586" className="text-right text-[10px] font-mono text-blue-500 hover:underline">
                    +966 590098586
                  </a>
                </div>
                <div className="flex justify-between items-center text-xs border-t border-slate-100 dark:border-slate-800 pt-2">
                  <div>
                    <div className="font-bold">Eng. Tasawwar</div>
                    <div className="text-[10px] text-slate-400">Electrical Systems Lead</div>
                  </div>
                  <a href="tel:+966510243582" className="text-right text-[10px] font-mono text-blue-500 hover:underline">
                    +966 510243582
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-3xl font-black">{stat.value}</div>
              <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              <div className="text-xs font-cairo text-blue-300">{stat.labelAr}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Location Banner */}
      <div className="bg-amber-50 dark:bg-amber-900/10 border-y border-amber-200 dark:border-amber-900/30 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm text-amber-800 dark:text-amber-400 font-medium">
          <MapPin size={16} className="shrink-0" />
          <span>
            Abi Shawk Street, off Prince Salman Road, Al-Sinaiyah al-Qadimah, Riyadh, Saudi Arabia
            &nbsp;|&nbsp;
            <span className="font-cairo">شارع أبي شوك، الصناعية القديمة، الرياض</span>
          </span>
        </div>
      </div>
    </div>
  );
}
