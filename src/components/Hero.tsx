import React, { useState } from 'react';
import { RotatingScrollIndicator } from './RotatingScrollIndicator';
import { sound } from '../utils/sound';

export const Hero: React.FC = () => {
  const words = ['POWER', 'SOLAR', 'UPTIME', 'LITHIUM'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const cycleWord = () => {
    sound.playClick(1000 + currentWordIndex * 80);
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
  };

  return (
    <section className="relative min-h-screen bg-[#FF4D00] text-black flex flex-col justify-between pt-24 pb-0 select-none overflow-hidden">
      {/* Subtle background coordinate grid lines (sharp, zero soft gradients) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full grid grid-cols-6 md:grid-cols-12 divide-x divide-black">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full" />
          ))}
        </div>
      </div>

      {/* Top micro kicker banner row */}
      <div className="relative z-10 px-6 md:px-12 pt-6 flex items-center justify-between font-mono-tech text-[11px] md:text-xs tracking-[-0.02em] font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-black rounded-none animate-pulse" />
          <span>24/7 UNINTERRUPTED POWER // ZERO DIESEL</span>
        </div>
        <div className="hidden sm:block text-right">
          <span>HIGH-VOLTAGE LITHIUM ENGINEERING</span>
        </div>
      </div>

      {/* Main Centered 16vw Typographic Headline */}
      <div className="relative z-10 w-full px-2 sm:px-6 my-auto flex flex-col items-center justify-center">
        <h1
          onClick={cycleWord}
          title="Click to mutate typographic state"
          className="font-display text-[16vw] uppercase tracking-[-0.04em] leading-[0.85] text-center w-full select-none cursor-pointer transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] text-black"
        >
          {words[currentWordIndex]}
        </h1>
        <div className="flex items-center gap-2 mt-2 font-mono-tech text-[10px] md:text-xs uppercase font-bold text-black/75">
          <span>[ CLICK WORD TO SHIFT MODE: {words[currentWordIndex]} ]</span>
        </div>
      </div>

      {/* 2px Solid Black Border Divider separating Hero from Metadata row */}
      <div className="relative z-10 w-full border-t-2 border-black bg-[#FF4D00]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Left: Based in label */}
          <div className="w-full md:w-1/3 flex flex-col items-start text-left">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-black/60 font-bold mb-1">
              INSTALLATION &amp; COVERAGE ZONES
            </span>
            <p className="font-mono-tech text-xs md:text-sm font-bold uppercase tracking-[-0.02em] leading-snug">
              LAGOS, ABUJA &amp; PORT HARCOURT
              <br />
              <span className="text-black/80 font-normal">LEKKI • IKEJA • VICTORIA ISLAND • MAITAMA • GRA</span>
            </p>
          </div>

          {/* Center: 144px Rotating Circular 'Scroll Down' text indicator */}
          <div className="flex items-center justify-center my-2 md:my-0">
            <RotatingScrollIndicator targetId="manifesto" />
          </div>

          {/* Right: Multi-line Title / Role */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
            <span className="font-mono-tech text-[10px] uppercase tracking-widest text-black/60 font-bold mb-1">
              ENGINEERING &amp; WARRANTY
            </span>
            <p className="font-mono-tech text-xs md:text-sm font-bold uppercase tracking-[-0.02em] leading-snug">
              SMART SOLAR MICROGRIDS &amp;
              <br />
              LIFEPO4 LITHIUM INVERTER SYSTEMS
              <br />
              <span className="text-black/80 font-normal">BYE BYE GENERATOR NOISE // 2026</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
