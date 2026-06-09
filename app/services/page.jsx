"use client";

import React from "react";
import { motion } from "framer-motion";

const servicesList = [
  {
    icon: "⚙️",
    titleEn: "Steel Rebar Bending Machine Repair",
    titleAr: "إصلاح مكائن ثني الحديد",
    descEn:
      "Complete overhaul of tabletop and floor-mount rebar benders, including clutch plate replacement, gearbox rebuild, electromagnetic coil testing, and calibration for Ø6–Ø40 mm bars. Brands handled: JCF, BN Max, Eurobend, Pedax.",
    descAr:
      "إصلاح شامل لمكائن ثني حديد التسليح من نوع الطاولة والأرضية، بما يشمل استبدال القرص الكلاتش وإعادة تجميع علبة التروس واختبار الملفات الكهرومغناطيسية وضبط قضبان الحديد من 6 إلى 40 ملم.",
  },
  {
    icon: "✂️",
    titleEn: "Heavy Shear Cutting Machine Repair",
    titleAr: "إصلاح مكائن قص الحديد الثقيلة",
    descEn:
      "Field and workshop maintenance for industrial iron cutters — motor replacement, blade alignment, hydraulic valve servicing, and full mechanical strip-down for Molendijk, Schilt, and Omer series machines rated up to Ø64 mm rebar.",
    descAr:
      "صيانة ميدانية وورشية لمكائن قص الحديد الصناعية، تشمل استبدال المحركات وضبط الشفرات وصيانة الصمامات الهيدروليكية وتفكيك كامل للآلات من موليندايك وشيلت وعمر بقطر يصل إلى 64 ملم.",
  },
  {
    icon: "🔋",
    titleEn: "Electric Motor Rewinding",
    titleAr: "لف الدينموات الكهربائية",
    descEn:
      "Professional stator and rotor rewinding for single-phase and three-phase induction motors from 0.25 kW up to 75 kW. Services include insulation resistance testing, vacuum varnish impregnation, dynamic balancing, and post-repair load testing.",
    descAr:
      "إعادة لف محترفة للاستاتور والروتور لمحركات الحث أحادية وثلاثية الطور من 0.25 إلى 75 كيلوواط، وتشمل اختبارات مقاومة العزل والتشريب بالورنيش والموازنة الديناميكية واختبار الحمل بعد الإصلاح.",
  },
  {
    icon: "🔌",
    titleEn: "Portable Generator Servicing",
    titleAr: "خدمة مولدات الكهرباء المتنقلة",
    descEn:
      "Site generator tune-ups including AVR replacement, rotor winding inspection, capacitor testing, carbon brush replacement, and diesel engine governor calibration. Applicable to Honda, Yamaha, Kipor, and Chinese OEM construction generators.",
    descAr:
      "صيانة مولدات موقع البناء: استبدال منظم الجهد الأوتوماتيكي وفحص لف الروتور واختبار المكثفات واستبدال فرش الكربون وضبط حاكم المحرك الديزل لمولدات هوندا وياماها وكيبور والتصنيع الأصلي الصيني.",
  },
  {
    icon: "🛠️",
    titleEn: "Power Tool Repair & Maintenance",
    titleAr: "إصلاح وصيانة المعدات الكهربائية اليدوية",
    descEn:
      "Overhaul of industrial-grade power tools: angle grinders, circular saws, hammer drills, belt sanders, and vibratory compactors. Includes carbon brush replacement, armature testing, gear servicing, and safety switch inspection.",
    descAr:
      "إصلاح شامل للمعدات الكهربائية الصناعية اليدوية: الجلاخات الزاوية، المناشير الدائرية، المثاقب التصادمية، آلات السنفرة الشريطية والحواصيل، مع استبدال فرش الكربون واختبار الأرماتير وصيانة التروس.",
  },
  {
    icon: "📐",
    titleEn: "Precision Calibration & Field Testing",
    titleAr: "المعايرة الدقيقة والاختبار الميداني",
    descEn:
      "Post-repair calibration services ensuring all repaired machines operate within original manufacturer specifications. Includes torque testing for benders, blade clearance verification for cutters, and full no-load/load run-in cycles.",
    descAr:
      "خدمات معايرة ما بعد الإصلاح لضمان تشغيل جميع الآلات المصلحة ضمن مواصفات الشركة المصنعة الأصلية، بما يشمل اختبار العزم لآلات الثني والتحقق من فجوة الشفرة لآلات القص ودورات التشغيل الأولي.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono mb-4">
          6 Specialized Service Verticals
        </div>
        <h1 className="text-3xl sm:text-4xl font-black mb-4">
          Our Professional Portfolio / خدماتنا الفنية
        </h1>
        <p className="text-slate-600 dark:text-slate-400 font-cairo text-sm sm:text-base">
          Specialized field mechanical and electrical engineering support on Abi
          Shawk Street, Sinaiyah al-Qadimah.
          <br />
          خدمات هندسية متكاملة لضمان استمرارية تشغيل معداتكم في مواقع البناء
          والمصانع بالرياض.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {service.titleEn}
            </h3>
            <h4 className="text-base font-bold font-cairo text-slate-800 dark:text-slate-200 mb-4">
              {service.titleAr}
            </h4>

            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
              <p>{service.descEn}</p>
              <p className="font-cairo text-[13px] border-t border-slate-100 dark:border-slate-800/50 pt-3">
                {service.descAr}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center space-y-4"
      >
        <h2 className="text-2xl font-black">
          Need an urgent repair? / هل تحتاج إصلاحاً عاجلاً؟
        </h2>
        <p className="text-blue-200 font-cairo">
          تواصل مباشرة مع مهندسينا للحصول على تقييم فوري لمعداتك
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+966590098586"
            className="px-6 py-3 rounded-lg font-bold bg-white text-blue-700 hover:bg-blue-50 transition-colors"
          >
            📞 Call Eng. Mohammad Anwar
          </a>
          <a
            href="https://wa.me/966590098586"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </motion.div>
    </div>
  );
}
