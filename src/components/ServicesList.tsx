import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { sound } from '../utils/sound';

interface ServiceItem {
  id: string;
  index: string;
  title: string;
  tags: string[];
  deliverables: string[];
  timeline: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'residential-lithium',
    index: '01',
    title: 'RESIDENTIAL LITHIUM PACKAGES',
    tags: ['5KVA – 15KVA', 'LIFEPO4 LITHIUM', 'RUNS INVERTER ACs', 'ZERO GEN NOISE'],
    timeline: '24–48 HOURS INSTALLATION',
    description:
      'Built for Nigerian flats, terraces, and duplexes in Lekki, Ikeja, Abuja, and PH. Run your air conditioners, deep freezers, pumping machine, and Starlink 24/7 without buying fuel or listening to generator noise.',
    deliverables: [
      'High-Efficiency Hybrid Pure Sine Wave Inverter',
      'Wall-Mounted LiFePO4 Lithium Battery Bank (10-Yr Life)',
      'Tier-1 Half-Cut Monocrystalline Roof Solar Panels',
      'Neat Trunking, Auto-Changeover & 5-Yr Warranty',
    ],
  },
  {
    id: 'commercial-microgrids',
    index: '02',
    title: 'COMMERCIAL & SME MICROGRIDS',
    tags: ['20KVA – 100KVA', '3-PHASE POWER', '80% DIESEL CUT', 'CLINICS & LOUNGES'],
    timeline: '3–5 DAYS DEPLOYMENT',
    description:
      'Eliminate crushing diesel and Band-A tariff bills for supermarkets, hospitals, pharmacies, lounges, and tech offices. Our three-phase commercial lithium systems pay for themselves in saved diesel within 10–14 months.',
    deliverables: [
      'Three-Phase Industrial Hybrid Inverter Cluster',
      'Rack-Mounted High-Voltage Lithium Storage Cabinets',
      'Automated Generator & EKEDC/IKEDC Smart Sync',
      'Dedicated Load Balancing & Surge Protection Panel',
    ],
  },
  {
    id: 'smart-bms-telemetry',
    index: '03',
    title: 'SMART BMS & LOAD TELEMETRY',
    tags: ['MOBILE APP CONTROL', 'BATTERY HEALTH', 'SOLAR YIELD LOGS', 'NEPA TRACKER'],
    timeline: 'INCLUDED IN ALL BUILDS',
    description:
      'Monitor your home or office power from anywhere in the world on your phone. Track real-time solar generation, battery percentage, exact house load in watts, and PHCN/NEPA grid voltage.',
    deliverables: [
      'iOS & Android Real-Time Energy Monitoring App',
      'Automatic Heavy-Load Cutoff & Battery Reserve Guard',
      'Over-Voltage & Thunder/Lightning Arrestor Protection',
      'Remote Diagnostics by Our Lagos & Abuja Engineers',
    ],
  },
  {
    id: 'lithium-retrofit-swap',
    index: '04',
    title: 'INVERTER UPGRADE & LITHIUM SWAP',
    tags: ['DROP TUBULAR BATTERIES', 'LITHIUM RETROFIT', 'SOLAR EXPANSION', 'RAPID SWAP'],
    timeline: 'SAME-DAY 6-HOUR SWAP',
    description:
      'Tired of replacing dead tubular lead-acid batteries every 12 months? We upgrade your existing inverter setup with long-life LiFePO4 lithium batteries and high-wattage solar panels in a single afternoon.',
    deliverables: [
      'Full Load & Wiring Audit of Existing Inverter Setup',
      'Tubular-to-Lithium LiFePO4 Battery Bank Conversion',
      'MPPT Charge Controller & Solar Array Expansion',
      'Old Battery Trade-In Valuation & Safe Removal',
    ],
  },
];

interface Props {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesList: React.FC<Props> = ({ onSelectServiceForInquiry }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (service: ServiceItem) => {
    sound.playClick( expandedId === service.id ? 700 : 920 );
    setExpandedId(expandedId === service.id ? null : service.id);
  };

  return (
    <section id="services" className="relative w-full bg-[#000000] text-[#FFFFFF] py-24 md:py-32 px-4 sm:px-8 md:px-16 border-b-2 border-black selection:bg-[#FF4D00] selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/20">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase text-[#FF4D00] font-bold tracking-widest mb-2">
              <span className="w-2 h-2 bg-[#FF4D00]" />
              <span>SOLAR &amp; LITHIUM SYSTEMS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-[-0.04em] text-white">
              POWER MATRIX
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono-tech text-xs text-white/60 uppercase tracking-[-0.02em] max-w-xs text-left md:text-right">
            EXPAND ANY PACKAGE FOR APPLIANCE LOAD CAPACITY, SPECS, AND INSTALL TIMELINES.
          </div>
        </div>

        {/* Vertical Service List Items */}
        <div className="w-full border-t border-white/20">
          {servicesData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="w-full border-b border-white/20 group transition-colors duration-200 hover:bg-white/[0.05]"
              >
                {/* Clickable Header Row: [Index (Orange, Mono)] [Title + Tags (White, Archivo)] [Arrow Icon (Hidden, Orange)] */}
                <button
                  type="button"
                  onClick={() => handleCardClick(item)}
                  className="w-full text-left py-8 md:py-12 px-2 sm:px-4 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer focus:outline-none focus-visible:bg-white/[0.08]"
                  aria-expanded={isExpanded}
                >
                  {/* Left: Index (Orange, Mono) + Title & Tags */}
                  <div className="flex items-start md:items-baseline gap-4 sm:gap-8 flex-1">
                    {/* Index (Orange, Mono) */}
                    <span className="font-mono-tech text-2xl sm:text-3xl md:text-4xl text-[#FF4D00] font-bold shrink-0 pt-1 md:pt-0">
                      {item.index}
                    </span>

                    {/* Title + Tags (White, Archivo) */}
                    <div className="flex flex-col gap-4">
                      {/* Title: uppercase Archivo Black 7vw, moves +16px (translate-x-4) on hover */}
                      <h3 className="font-display text-3xl sm:text-4xl md:text-[5vw] lg:text-[7vw] leading-[0.88] uppercase text-white tracking-[-0.04em] transition-transform duration-200 group-hover:translate-x-4 will-change-transform">
                        {item.title}
                      </h3>

                      {/* Pill-shaped tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 transition-transform duration-200 group-hover:translate-x-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/10 text-white/90 text-[11px] md:text-xs font-mono-tech uppercase px-3 py-1 rounded-full whitespace-nowrap border border-white/10 group-hover:border-white/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Arrow Icon (Hidden/revealed on hover in #FF4D00, rotates 45deg) */}
                  <div className="flex items-center justify-end gap-4 shrink-0 self-end lg:self-center pr-2">
                    <span className="hidden sm:inline font-mono-tech text-xs text-white/40 uppercase group-hover:text-white/80 transition-colors">
                      {isExpanded ? '[ COLLAPSE ]' : '[ INSPECT ]'}
                    </span>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#FF4D00] group-hover:bg-[#FF4D00]/10">
                      <ArrowUpRight
                        size={32}
                        strokeWidth={2.5}
                        className="text-[#FF4D00] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45"
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Drawer Details (Interactive inspection panel) */}
                {isExpanded && (
                  <div className="px-4 sm:px-12 pb-10 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-6 md:p-8 bg-white/[0.03] border-2 border-white/10 rounded-none flex flex-col md:flex-row gap-8 justify-between">
                      {/* Left: Scope details */}
                      <div className="md:w-3/5 space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono-tech text-xs uppercase px-2.5 py-0.5 bg-[#FF4D00] text-black font-bold">
                            TIMELINE: {item.timeline}
                          </span>
                        </div>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="pt-2">
                          <h4 className="font-mono-tech text-xs uppercase text-[#FF4D00] font-bold tracking-wider mb-2">
                            INCLUDED HARDWARE &amp; INSTALLATION SPECS:
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.deliverables.map((del, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs font-mono-tech text-white/90">
                                <CheckCircle2 size={14} className="text-[#FF4D00] shrink-0 mt-0.5" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Direct action for this service */}
                      <div className="md:w-2/5 flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
                        <div className="text-left md:text-right">
                          <span className="font-mono-tech text-[10px] text-white/50 uppercase block mb-1">
                            LAGOS • ABUJA • PORT HARCOURT
                          </span>
                          <span className="font-mono-tech text-xs text-white uppercase block">
                            INSTALLATION SLOTS OPEN THIS WEEK
                          </span>
                        </div>

                        {onSelectServiceForInquiry && (
                          <button
                            type="button"
                            onClick={() => {
                              sound.playHeavyThud();
                              onSelectServiceForInquiry(item.title);
                            }}
                            className="mt-6 w-full md:w-auto px-6 py-3 rounded-full bg-[#FF4D00] text-black font-mono-tech text-xs uppercase font-bold tracking-tight hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                          >
                            <span>BOOK {item.title}</span>
                            <ArrowUpRight size={14} strokeWidth={3} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
