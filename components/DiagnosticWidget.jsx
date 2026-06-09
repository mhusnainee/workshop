'use client';

import React, { useState } from 'react';

const troubleshootingDatabase = {
  bender: [
    {
      symptom: 'Machine does not complete full 180° bend',
      cause: 'Electromagnetic clutch coil resistance degraded below 15Ω or clutch plate gap exceeds 0.4 mm tolerance.',
      fix: 'Measure coil resistance with multimeter. If below spec, rewind or replace coil. Re-shim clutch plate to 0.2–0.3 mm air gap. Verify 24V DC supply to clutch terminal.',
    },
    {
      symptom: 'Motor runs but bending plate does not move',
      cause: 'Drive shaft key sheared or gearbox input pinion stripped under overload conditions.',
      fix: 'Disconnect power. Rotate bending disk manually to identify resistance point. Inspect drive key on motor shaft. Remove gearbox cover and inspect all pinion teeth for shearing. Replace damaged components.',
    },
    {
      symptom: 'Bending angle inconsistent across bars',
      cause: 'Return spring tension unequal, or angular limit switch cam out of calibration position.',
      fix: 'Inspect return spring for fatigue — replace if coil pitch uneven. Re-zero the cam follower on the angle-control limit switch. Test 5 consecutive bends and measure with angle gauge.',
    },
    {
      symptom: 'Machine trips circuit breaker on startup',
      cause: 'Induction motor capacitor failed (for single-phase units) or short in main winding.',
      fix: 'Discharge and test run capacitor with LCR meter. Replace if capacitance is below 80% of rated value. Measure winding resistance with megohmmeter — resistance below 1 MΩ to ground indicates winding damage.',
    },
    {
      symptom: 'Excessive vibration during bending cycle',
      cause: 'Central bending pin bearing worn, or debris lodged in gearbox oil bath.',
      fix: 'Remove bending pin assembly. Check radial play on pin bearing — replace if play exceeds 0.1 mm. Drain and flush gearbox. Refill with ISO VG 220 gear oil to marked level.',
    },
  ],
  cutter: [
    {
      symptom: 'Cutter blade does not complete full shear stroke',
      cause: 'Eccentric gear key failed, or flywheel-to-crankshaft coupling bolts sheared under peak load.',
      fix: 'Stop machine immediately. Lock out energy. Inspect eccentric gear key and coupling bolts. Replace sheared key with hardened steel Woodruff key. Torque coupling bolts to manufacturer spec (typically 120–180 Nm for MSC-class).',
    },
    {
      symptom: 'Upper blade crashes into lower blade (no clearance)',
      cause: 'Blade shimming incorrect after blade replacement, or wear has closed the clearance below 5% of bar diameter.',
      fix: 'Blade clearance should be 5–8% of maximum bar diameter. Add precision shim stock behind upper blade holder. Test with scrap bar of rated diameter before resuming production.',
    },
    {
      symptom: 'Cut bars show burr or unclean shear face',
      cause: 'Blade edge radius exceeded 0.5 mm or blade material work-hardened beyond service limit.',
      fix: 'Inspect blade cutting edge under magnification. If edge radius visible, grind blade face on surface grinder — remove minimum material. Reharden if required. If blade length consumed beyond 15% of original, replace.',
    },
    {
      symptom: '3-phase motor overloads on full-diameter bar',
      cause: 'Motor phase voltage imbalance greater than 3% or motor de-rated from previous rewind.',
      fix: 'Measure all 3 supply phase voltages under load. Imbalance above 3% causes disproportionate current increase. Contact supply authority or add phase-correction capacitors. Verify motor nameplate rating matches load.',
    },
    {
      symptom: 'Flywheel does not reach rated RPM before clutch engagement',
      cause: 'Brake pad dragging on flywheel rim, or clutch spring tension insufficient.',
      fix: 'Allow motor to reach full speed with clutch disengaged. If flywheel lags, check brake release mechanism. Adjust brake spring tension or replace worn brake lining. Verify clutch engagement torque with torque wrench.',
    },
  ],
  motor: [
    {
      symptom: 'Motor hums but shaft does not rotate',
      cause: 'Single-phasing condition (one phase open) or starting capacitor failed in single-phase motor.',
      fix: 'For 3-phase: measure current on all three terminals with clamp meter — zero current on one phase confirms open phase. Check fuse, contactor, and cable. For single-phase: test start capacitor with LCR meter and replace if failed.',
    },
    {
      symptom: 'Motor runs hot beyond 80°C surface temperature',
      cause: 'Overloading, reduced ventilation from clogged cooling fins, or inter-turn short in stator winding.',
      fix: 'Check ambient temperature and motor load current against nameplate FLA. Clean cooling fins with compressed air. If temperature remains high at no-load, perform surge test or impulse test on stator to identify inter-turn fault.',
    },
    {
      symptom: 'Insulation resistance below 1 MΩ to ground',
      cause: 'Moisture ingress, chemical contamination, or thermal degradation of winding insulation (Class F limit 155°C).',
      fix: 'Disassemble and bake stator in oven at 120°C for 4 hours to drive out moisture. Re-test. If IR remains low, strip and rewind with Class H polyimide-insulated wire. Vacuum impregnate with epoxy varnish. Cure per manufacturer cycle.',
    },
    {
      symptom: 'Bearing noise — grinding or squealing during operation',
      cause: 'Grease degraded in sealed bearing, or bearing race spalled from overloading.',
      fix: 'Remove end shields. Extract bearings with puller. Inspect races — spalling indicates fatigue failure from overloading. Replace with equivalent-rated SKF or NSK bearing. For standard motors, bearing preload should be light radial only.',
    },
    {
      symptom: 'Motor runs in reverse direction after rewind',
      cause: 'Phase sequence of two supply leads reversed relative to winding reconnection.',
      fix: 'For 3-phase: swap any two of the three supply leads at the terminal box. For single-phase: reverse the connections of the starting winding relative to the running winding inside the motor junction.',
    },
  ],
};

const categories = ['bender', 'cutter', 'motor'];

export default function DiagnosticWidget() {
  const [category, setCategory] = useState('bender');
  const [selectedCase, setSelectedCase] = useState(0);

  const activeCases = troubleshootingDatabase[category];

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-[#111827] shadow-lg">

      {/* Tab selection */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => { setCategory(tab); setSelectedCase(0); }}
            className={`flex-1 py-4 text-xs sm:text-sm font-bold capitalize transition-all duration-200 ${
              category === tab
                ? 'bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            {tab === 'bender' && 'Benders (مكائن الثني)'}
            {tab === 'cutter' && 'Cutters (مكائن القص)'}
            {tab === 'motor' && 'Motors (الدينموات)'}
          </button>
        ))}
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Symptoms List */}
        <div className="md:col-span-5 space-y-2">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            Select Diagnostic Symptom
          </div>
          {activeCases.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`w-full text-left p-3 rounded-lg text-xs sm:text-sm font-medium border transition-all duration-200 ${
                selectedCase === index
                  ? 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300'
                  : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
              }`}
            >
              <span className="mr-2 text-slate-400">{index + 1}.</span>
              {item.symptom}
            </button>
          ))}
        </div>

        {/* Breakdown Output */}
        <div className="md:col-span-7 bg-slate-50 dark:bg-[#0c111e] p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Selected Symptom
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {activeCases[selectedCase]?.symptom}
              </p>
            </div>

            <div className="h-px bg-slate-200 dark:bg-slate-800" />

            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Identified Root Cause
              </div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {activeCases[selectedCase]?.cause}
              </p>
            </div>

            <div className="h-px bg-slate-200 dark:bg-slate-800" />

            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Corrective Action (صيانة وإصلاح)
              </div>
              <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400 leading-relaxed">
                {activeCases[selectedCase]?.fix}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-3">
            <span>Diagnosed by Khalifa Tech Group</span>
            <span className="text-blue-500 font-bold">Standard Procedure</span>
          </div>
        </div>

      </div>
    </div>
  );
}
