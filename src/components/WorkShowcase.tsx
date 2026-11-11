import React, { useState } from 'react';
import { ExternalLink, Terminal, Cpu, Layers } from 'lucide-react';
import { sound } from '../utils/sound';

interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  tech: string[];
  summary: string;
  wireframeType: 'grid' | 'code' | 'signal';
}

const projects: Project[] = [
  {
    id: 'lekki-duplex',
    index: '01',
    title: 'LEKKI PHASE 1 DUPLEX RIG',
    category: 'RESIDENTIAL',
    metric: '₦420K/MO',
    metricLabel: 'FUEL & BAND-A BILLS SAVED',
    tech: ['10KVA HYBRID', '15KWH LITHIUM', '12X 550W PANELS', 'POWERS 3 ACs'],
    summary:
      'Full 10kVA/48V lithium solar installation for a 5-bedroom detached duplex in Lekki Phase 1. Powers 3 inverter ACs, 2 deep freezers, pumping machine, and Starlink 24/7.',
    wireframeType: 'grid',
  },
  {
    id: 'vi-tech-hub',
    index: '02',
    title: 'VICTORIA ISLAND TECH HUB',
    category: 'COMMERCIAL',
    metric: '99.9% UP',
    metricLabel: 'ZERO-BLINK CHANGEOVER TIME',
    tech: ['30KVA 3-PHASE', '45KWH RACK LITHIUM', 'PURE SINE WAVE', 'ZERO DIESEL'],
    summary:
      'Replaced a guzzling 40kVA diesel generator for a 60-person office in Victoria Island. Seamless <10ms changeover keeps servers, workstations, and office ACs running nonstop.',
    wireframeType: 'signal',
  },
  {
    id: 'maitama-estate',
    index: '03',
    title: 'MAITAMA SMART ESTATE BMS',
    category: 'TELEMETRY',
    metric: '0.0 LTRS',
    metricLabel: 'DIESEL CONSUMED IN 12 MONTHS',
    tech: ['CLOUD BMS APP', 'AUTO LOAD SHED', 'SURGE ARRESTOR', '10-YR CELLS'],
    summary:
      'Smart solar microgrid with mobile telemetry for a luxury residence in Maitama, Abuja. Automatically prioritizes AC and security loads during low-sunlight harmattan days.',
    wireframeType: 'code',
  },
];

export const WorkShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'TELEMETRY'];

  const filteredProjects =
    activeCategory === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative w-full bg-[#FF4D00] text-black py-24 md:py-32 px-4 sm:px-8 md:px-16 border-b-2 border-black selection:bg-black selection:text-[#FF4D00]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2 border-black gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs uppercase text-black font-bold tracking-widest mb-2">
              <span className="w-2.5 h-2.5 bg-black" />
              <span>VERIFIED NIGERIAN INSTALLATIONS // 2025–2026</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-[-0.04em] text-black">
              DEPLOYED POWER SYSTEMS
            </h2>
          </div>

          {/* Interactive Filter Tabs (Pill style allowed for functional controls) */}
          <div className="flex items-center gap-1.5 p-1 bg-black rounded-full border-2 border-black self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  sound.playClick(850);
                  setActiveCategory(cat);
                }}
                className={`px-3 sm:px-4 py-1.5 text-xs font-mono-tech font-bold uppercase rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#FF4D00] text-black shadow-sm'
                    : 'text-white hover:text-[#FF4D00]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-black text-white border-2 border-black flex flex-col justify-between group transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Card Header */}
              <div className="p-6 border-b-2 border-black/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono-tech text-sm text-[#FF4D00] font-bold">
                    [#{project.index}]
                  </span>
                  <span className="font-mono-tech text-xs uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/90">
                    {project.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    sound.playHeavyThud();
                    setSelectedProject(project);
                  }}
                  className="font-mono-tech text-xs text-[#FF4D00] hover:text-white uppercase flex items-center gap-1 cursor-pointer transition-colors"
                  aria-label={`View ${project.title} telemetry`}
                >
                  <span>SPEC</span>
                  <ExternalLink size={12} strokeWidth={2.5} />
                </button>
              </div>

              {/* Card Graphic Container (Brutalist Technical SVG Schematics) */}
              <div className="h-48 sm:h-56 bg-[#111111] p-6 relative flex items-center justify-center overflow-hidden border-b-2 border-black/40">
                {/* Background technical crosshair grid */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="20" y2="0" stroke="#FFFFFF" strokeWidth="0.5" />
                        <line x1="0" y1="0" x2="0" y2="20" stroke="#FFFFFF" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                  </svg>
                </div>

                {project.wireframeType === 'grid' && (
                  <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="w-full grid grid-cols-4 gap-2">
                      {[85, 42, 98, 64, 33, 91, 56, 78].map((h, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div
                            style={{ height: `${h * 0.7}px` }}
                            className="w-full bg-[#FF4D00] border border-white/20 transition-all duration-300 group-hover:bg-white"
                          />
                          <span className="font-mono-tech text-[9px] text-white/50">{h}ms</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.wireframeType === 'signal' && (
                  <div className="relative z-10 w-full flex items-center justify-center">
                    <svg viewBox="0 0 300 80" className="w-full h-20 text-[#FF4D00]">
                      <path
                        d="M 0 40 L 40 40 L 60 10 L 80 70 L 100 20 L 120 60 L 140 40 L 180 40 L 200 5 L 220 75 L 240 30 L 260 50 L 300 40"
                        fill="none"
                        stroke="#FF4D00"
                        strokeWidth="3"
                        className="transition-all duration-300 group-hover:stroke-white"
                      />
                    </svg>
                  </div>
                )}

                {project.wireframeType === 'code' && (
                  <div className="relative z-10 w-full font-mono-tech text-[10px] text-white/80 space-y-1">
                    <div className="text-[#FF4D00] font-bold">&gt; BMS.SOLAR_YIELD_PASS(6.4kW)</div>
                    <div className="text-white/60">BATTERY_SOC: 98.4% LiFePO4 [CHARGING]</div>
                    <div className="text-white/90">GRID_STATUS: IKEDC OFFLINE // SOLAR ACTIVE</div>
                    <div className="text-[#FF4D00]">&gt;&gt; LOAD_OUTPUT: 3.2kW PURE SINE WAVE</div>
                  </div>
                )}

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 font-mono-tech text-[9px] text-[#FF4D00] uppercase font-bold">
                  {project.metricLabel}
                </div>
                <div className="absolute bottom-2 right-2 font-display text-2xl text-white">
                  {project.metric}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-[-0.04em] text-white group-hover:text-[#FF4D00] transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed mb-6 font-sans">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-tech text-[10px] uppercase text-white/80 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Telemetry & Specs */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
            <div className="bg-black text-white border-2 border-[#FF4D00] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
                <span className="font-mono-tech text-xs text-[#FF4D00] font-bold uppercase">
                  TECHNICAL SPECIFICATION // {selectedProject.index}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(600);
                    setSelectedProject(null);
                  }}
                  className="font-mono-tech text-xs text-white hover:text-[#FF4D00] uppercase cursor-pointer"
                >
                  [ CLOSE X ]
                </button>
              </div>

              <h3 className="font-display text-3xl uppercase tracking-[-0.04em] text-white mb-2">
                {selectedProject.title}
              </h3>
              
              <div className="my-4 p-4 bg-[#FF4D00] text-black font-mono-tech text-xs uppercase font-bold flex justify-between items-center">
                <span>PRIMARY OUTCOME</span>
                <span className="text-xl font-display">{selectedProject.metric}</span>
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6 font-sans">
                {selectedProject.summary} Engineered specifically for Nigerian grid fluctuations with heavy-duty surge protection, neat armoured cabling, and mobile app BMS monitoring.
              </p>

              <div className="mb-6">
                <span className="font-mono-tech text-xs text-[#FF4D00] font-bold uppercase block mb-2">
                  INCLUDED HARDWARE &amp; PROTECTION:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech text-white/70">
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-[#FF4D00]" />
                    <span>Tier-1 Mono PERC Solar Array</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu size={14} className="text-[#FF4D00]" />
                    <span>Grade-A LiFePO4 Lithium Cells</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-[#FF4D00]" />
                    <span>Thunder &amp; Surge Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink size={14} className="text-[#FF4D00]" />
                    <span>5-Year Comprehensive Warranty</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  sound.playClick(600);
                  setSelectedProject(null);
                }}
                className="w-full py-3 rounded-full bg-white text-black font-mono-tech text-xs uppercase font-bold hover:bg-[#FF4D00] hover:text-black transition-colors"
              >
                RETURN TO OVERVIEW
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
