"use client";

import React from "react";
import { motion } from "framer-motion";
import DiagnosticWidget from "@/components/DiagnosticWidget";

export default function TroubleshootingPage() {
  return (
    <div className="py-16 px-4 max-w-5xl mx-auto sm:px-6 lg:px-8 space-y-16">
      {/* Title */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono">
          Field Engineering Reference Manual
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Technical Specifications &amp; Field Diagnostic Guide
        </h1>
        <p className="text-slate-600 dark:text-slate-400 font-cairo leading-relaxed">
          Detailed mechanical standards, calculations, and diagnostic manuals
          for workshop machinery repairs.
          <br />
          الدليل الهندسي لخصائص التشغيل وحسابات الجهد الميكانيكي ومعالجة أعطال
          ماكينات الحديد.
        </p>
      </div>

      {/* Physics & Torque Calculation Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] space-y-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold">
          1. Applied Physics &amp; Mechanical Limits
        </h2>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            To calibrate repaired bending clutches and ensure structural safety,
            the required bending moment (<em>M</em>) for round steel rebar is
            modeled by the plastic section modulus (<em>W</em>
            <sub>p</sub>) and material yield strength (σ<sub>y</sub>):
          </p>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-[#0c111e] border border-slate-200 dark:border-slate-800 text-center font-mono text-blue-600 dark:text-blue-400 text-lg">
            M = W<sub>p</sub> · σ<sub>y</sub>
          </div>

          <p>
            Where the circular cross-section plastic modulus is derived from the
            rebar diameter (<em>d</em>):
          </p>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-[#0c111e] border border-slate-200 dark:border-slate-800 text-center font-mono text-blue-600 dark:text-blue-400 text-lg">
            W<sub>p</sub> = d³ / 6
          </div>

          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 text-amber-800 dark:text-amber-300 text-sm">
            <strong>Example Calculation:</strong> For maximum single bar
            structural bending (d = 25 mm), yielding Grade SD400 carbon steel (σ
            <sub>y</sub> = 400 N/mm²), the minimum continuous torque required is{" "}
            <strong>1041.67 N·m</strong>. Slipping clutches indicate
            electromagnetic coil decay or plate oil contamination.
          </div>
        </div>
      </motion.section>

      {/* Machine Specifications Tables */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold">
          2. Original Machine Specifications
        </h2>

        <div className="space-y-8">
          {/* Table 1: JCF JMB-25 Bender */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-blue-500">
              JCF JMB-25 Table-Top Rebar Bender (KOREA)
            </h3>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3 font-semibold w-1/2">
                      Technical Parameter
                    </th>
                    <th className="p-3 font-semibold w-1/2">
                      Specification Standard
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {[
                    [
                      "Bending Capacity",
                      "Up to Ø25 mm (1 inch) / (SD400 rebar standards)",
                    ],
                    [
                      "Motor Power",
                      "2.2 kW / 3.0 HP continuous duty induction motor",
                    ],
                    [
                      "Electric Supply",
                      "220 Volts / 50–60 Hz, Single Phase (job site friendly)",
                    ],
                    ["Bending Speed", "0 to 180 degrees in 6.0 seconds"],
                    [
                      "Dimensions & Weight",
                      "485 × 465 × 470 mm | 102 Kilograms",
                    ],
                    [
                      "Clutch Type",
                      "Electromagnetic plate clutch, 24V DC coil, 0.2–0.3 mm air gap",
                    ],
                  ].map(([param, spec]) => (
                    <tr
                      key={param}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="p-3 font-medium">{param}</td>
                      <td className="p-3">{spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 2: Molendijk Shearing Machines */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-blue-500">
              Molendijk Schilt and Omer Heavy Shearing Machines
            </h3>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3 font-semibold">Parameter</th>
                    <th className="p-3 font-semibold">Molendijk MSC38-E</th>
                    <th className="p-3 font-semibold">Molendijk MSC74-E</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {[
                    [
                      "Structure",
                      "One-piece cast iron chassis",
                      "Heavy duty one-piece cast iron",
                    ],
                    ["Motor Power", "3.0 kW (3-Phase)", "7.5 kW (3-Phase)"],
                    ["Max Output RPM", "52 RPM", "30 RPM"],
                    [
                      "Cutting Capacity",
                      "1 × Ø30 mm (R = 650 N/mm²)",
                      "1 × Ø64 mm (R = 650 N/mm²)",
                    ],
                    ["Chassis Weight", "245 kg", "1280 kg"],
                    [
                      "Blade Clearance",
                      "5–8% of bar diameter",
                      "5–8% of bar diameter",
                    ],
                  ].map(([param, val1, val2]) => (
                    <tr
                      key={param}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="p-3 font-medium">{param}</td>
                      <td className="p-3">{val1}</td>
                      <td className="p-3">{val2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Table 3: Motor Standards */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-blue-500">
              Electric Motor Rewinding Reference Standards
            </h3>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3 font-semibold">Test / Parameter</th>
                    <th className="p-3 font-semibold">Pass Threshold</th>
                    <th className="p-3 font-semibold">Action if Failed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {[
                    [
                      "Insulation Resistance (Megger)",
                      "≥ 1 MΩ phase-to-ground",
                      "Bake at 120°C for 4hr, retest. Rewind if still below threshold.",
                    ],
                    [
                      "Winding Resistance Balance",
                      "± 2% between phases",
                      "Inspect for open turns or cold solder joints in wound coil ends.",
                    ],
                    [
                      "Bearing Radial Play",
                      "< 0.1 mm",
                      "Replace bearing with equivalent SKF/NSK grade.",
                    ],
                    [
                      "Surface Temperature Rise",
                      "< 80°C above ambient",
                      "Check load, ventilation, supply voltage balance.",
                    ],
                    [
                      "No-Load Current",
                      "20–50% of FLA",
                      "Higher suggests air gap issue or saturated core.",
                    ],
                  ].map(([test, pass, action]) => (
                    <tr
                      key={test}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="p-3 font-medium">{test}</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400">
                        {pass}
                      </td>
                      <td className="p-3 text-slate-500 dark:text-slate-400 text-xs">
                        {action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Diagnostic Widget */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-bold">
          3. Interactive Field Troubleshooting Finder
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Select your machine type and symptom to immediately view the
          corresponding diagnostic process and corrective action.
        </p>
        <DiagnosticWidget />
      </motion.section>
    </div>
  );
}
