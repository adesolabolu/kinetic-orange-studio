import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, Check } from 'lucide-react';
import { sound } from '../utils/sound';

interface Props {
  onOpenInquiryWithScope?: (scope: string) => void;
}

export const SprintEstimator: React.FC<Props> = ({ onOpenInquiryWithScope }) => {
  const [weeks, setWeeks] = useState<number>(2);
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'HYBRID PURE SINE WAVE INVERTER',
    'LIFEPO4 LITHIUM BATTERY BANK',
    'TIER-1 ROOF SOLAR PANEL ARRAY',
  ]);
  const [highPriority, setHighPriority] = useState<boolean>(false);

  const availableDisciplines = [
    { id: 'tokens', label: 'HYBRID PURE SINE WAVE INVERTER', base: 850000 },
    { id: 'react', label: 'LIFEPO4 LITHIUM BATTERY BANK', base: 1450000 },
    { id: 'spatial', label: 'TIER-1 ROOF SOLAR PANEL ARRAY', base: 950000 },
    { id: 'audio', label: 'AC & HEAVY APPLIANCE SURGE PANEL', base: 250000 },
    { id: 'perf', label: 'SMART MOBILE BMS & AUTO-CHANGEOVER', base: 200000 },
  ];

  const capacityLabels: Record<number, string> = {
    1: '3.5KVA FLAT',
    2: '5KVA HOME',
    3: '10KVA DUPLEX',
    4: '20KVA OFFICE',
  };

  const toggleDiscipline = (label: string) => {
    sound.playClick(850);
    if (selectedDisciplines.includes(label)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((d) => d !== label));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, label]);
    }
  };

  const calculateEstimate = () => {
    const disciplineTotal = selectedDisciplines.reduce((acc, label) => {
      const match = availableDisciplines.find((d) => d.label === label);
      return acc + (match ? match.base : 0);
    }, 0);
    const kvaMultiplier = weeks === 1 ? 0.75 : weeks === 2 ? 1.0 : weeks === 3 ? 1.85 : 3.2;
    const priorityMultiplier = highPriority ? 1.15 : 1.0;
    return Math.round((disciplineTotal * kvaMultiplier * priorityMultiplier) / 50000) * 50000;
  };

  const estimatedCost = calculateEstimate();

  const handleTransfer = () => {
    sound.playHeavyThud();
    if (onOpenInquiryWithScope) {
      onOpenInquiryWithScope(
        `CUSTOM SOLAR RIG: ${capacityLabels[weeks]} (${selectedDisciplines.length} MODULES // ₦${estimatedCost.toLocaleString()})`
      );
    }
  };

  return (
    <section id="estimate" className="relative w-full bg-[#000000] text-white py-24 md:py-32 px-4 sm:px-8 md:px-16 border-b-2 border-black selection:bg-[#FF4D00] selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/20">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase text-[#FF4D00] font-bold tracking-widest mb-2">
              <Calculator size={14} className="text-[#FF4D00]" />
              <span>INTERACTIVE SOLAR LOAD &amp; COST CALCULATOR</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-[-0.04em] text-white">
              SYSTEM ESTIMATOR
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono-tech text-xs text-white/60 uppercase tracking-[-0.02em] max-w-xs text-left md:text-right">
            CONFIGURE YOUR KVA CAPACITY, LITHIUM STORAGE, AND SOLAR ARRAY IN REAL TIME.
          </div>
        </div>

        {/* Interactive Scope Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Discipline Pickers */}
          <div className="lg:col-span-7 space-y-8">
            {/* System KVA Capacity Selector */}
            <div>
              <label className="font-mono-tech text-xs uppercase font-bold text-[#FF4D00] tracking-wider block mb-3">
                // SELECT SYSTEM CAPACITY TIER (KVA):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => {
                      sound.playClick(900 + w * 50);
                      setWeeks(w);
                    }}
                    className={`py-3 px-4 text-center font-mono-tech text-xs uppercase font-bold border-2 transition-all cursor-pointer ${
                      weeks === w
                        ? 'border-[#FF4D00] bg-[#FF4D00] text-black shadow-lg'
                        : 'border-white/20 bg-transparent text-white hover:border-white/60'
                    }`}
                  >
                    {capacityLabels[w]}
                  </button>
                ))}
              </div>
            </div>

            {/* Hardware Modules Selection */}
            <div>
              <label className="font-mono-tech text-xs uppercase font-bold text-[#FF4D00] tracking-wider block mb-3">
                // SELECT HARDWARE &amp; STORAGE MODULES:
              </label>
              <div className="space-y-2">
                {availableDisciplines.map((d) => {
                  const isChecked = selectedDisciplines.includes(d.label);
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => toggleDiscipline(d.label)}
                      className={`w-full p-4 flex items-center justify-between border-2 text-left transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#FF4D00] bg-white/[0.06] text-white'
                          : 'border-white/10 bg-transparent text-white/50 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 flex items-center justify-center border ${
                            isChecked ? 'bg-[#FF4D00] border-[#FF4D00] text-black' : 'border-white/40'
                          }`}
                        >
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>
                        <span className="font-mono-tech text-xs uppercase font-bold tracking-tight">
                          {d.label}
                        </span>
                      </div>
                      <span className="font-mono-tech text-xs text-[#FF4D00] font-bold">
                        ₦{d.base.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* High Priority Toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  sound.playClick(1000);
                  setHighPriority(!highPriority);
                }}
                className={`w-full p-4 border-2 flex items-center justify-between transition-colors cursor-pointer ${
                  highPriority
                    ? 'border-[#FF4D00] bg-[#FF4D00]/10 text-white'
                    : 'border-white/10 text-white/60 hover:border-white/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Zap
                    size={18}
                    className={highPriority ? 'text-[#FF4D00]' : 'text-white/40'}
                  />
                  <div className="text-left">
                    <span className="font-mono-tech text-xs font-bold uppercase block text-white">
                      48-HOUR EXPRESS INSTALLATION TRACK (+15%)
                    </span>
                    <span className="font-mono-tech text-[10px] text-white/50 uppercase">
                      Priority engineering team dispatch in Lagos, Abuja or PH within 48hrs
                    </span>
                  </div>
                </div>
                <span className="font-mono-tech text-xs uppercase font-bold">
                  {highPriority ? '[ ACTIVE ]' : '[ OFF ]'}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Calculated Summary Display */}
          <div className="lg:col-span-5 bg-[#FF4D00] text-black p-6 sm:p-8 border-2 border-black sticky top-28">
            <span className="font-mono-tech text-xs uppercase tracking-widest font-bold block mb-1">
              ESTIMATED SYSTEM INVESTMENT
            </span>
            <div className="font-display text-4xl sm:text-5xl uppercase tracking-[-0.04em] leading-none my-4">
              ₦{estimatedCost.toLocaleString()}
            </div>

            <div className="space-y-3 py-4 border-y-2 border-black font-mono-tech text-xs uppercase font-bold">
              <div className="flex justify-between">
                <span>SYSTEM CAPACITY:</span>
                <span>{capacityLabels[weeks]}</span>
              </div>
              <div className="flex justify-between">
                <span>INCLUDED HARDWARE:</span>
                <span>{selectedDisciplines.length} MODULES</span>
              </div>
              <div className="flex justify-between">
                <span>INSTALLATION TRACK:</span>
                <span>{highPriority ? '48-HR EXPRESS INSTALL' : 'STANDARD 3-5 DAY INSTALL'}</span>
              </div>
            </div>

            <p className="font-mono-tech text-[10px] uppercase text-black/80 mt-4 leading-relaxed">
              * FINAL FIXED QUOTE CONFIRMED AFTER PHYSICAL OR WHATSAPP LOAD AUDIT. INCLUDES FULL INSTALLATION, ARMOURED CABLING &amp; 5-YEAR WARRANTY.
            </p>

            <button
              type="button"
              onClick={handleTransfer}
              className="mt-6 w-full py-4 rounded-full bg-black text-white font-mono-tech text-xs uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-150 border-2 border-black cursor-pointer flex items-center justify-center gap-2 shadow-xl"
            >
              <span>LOCK ESTIMATE &amp; BOOK AUDIT</span>
              <ArrowRight size={16} strokeWidth={2.5} className="text-[#FF4D00]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
