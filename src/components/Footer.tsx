import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface Props {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    sound.playHeavyThud();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { label: 'GITHUB', href: 'https://github.com' },
    { label: 'TWITTER / 𝕏', href: 'https://x.com' },
    { label: 'ARE.NA', href: 'https://are.na' },
    { label: 'SUBSTACK', href: 'https://substack.com' },
    { label: 'EMAIL', href: 'mailto:studio@kinetic-orange.io' },
  ];

  return (
    <div id="cta" className="relative w-full bg-[#FF4D00] text-black overflow-hidden selection:bg-black selection:text-[#FF4D00]">
      
      {/* Giant Centered CTA Section */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center select-none">
        <span className="font-mono-tech text-xs uppercase font-bold tracking-widest text-black/80 mb-4">
          // FREE LOAD AUDIT &amp; INSTALLATION DESK
        </span>

        {/* 14vw Heading in Archivo Black */}
        <h2 className="font-display text-[14vw] uppercase tracking-[-0.04em] leading-[0.88] text-black text-center w-full mb-8 sm:mb-12">
          POWER UP 24/7
        </h2>

        {/* Large Rounded-Full Button (#000000 background, white text, scale-110 on hover) */}
        <button
          type="button"
          onClick={() => {
            sound.playHeavyThud();
            onOpenInquiry();
          }}
          className="group px-8 sm:px-14 py-5 sm:py-7 rounded-full bg-[#000000] text-[#FFFFFF] font-mono-tech text-sm sm:text-lg md:text-xl font-bold uppercase tracking-[-0.02em] border-2 border-black hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer shadow-2xl flex items-center gap-3 sm:gap-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-black"
        >
          <span>BOOK SOLAR LOAD AUDIT</span>
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#FF4D00] transition-colors">
            <ArrowUpRight size={18} strokeWidth={3} />
          </div>
        </button>

        <p className="font-mono-tech text-[11px] md:text-xs uppercase text-black/75 font-bold mt-6 tracking-wider">
          OUR LAGOS, ABUJA &amp; PH ENGINEERS RESPOND WITHIN 2 HOURS
        </p>
      </section>

      {/* Footer is separated by a 2px black top border */}
      <footer className="w-full border-t-2 border-black bg-[#FF4D00] py-8 sm:py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono-tech text-[12px] uppercase font-bold text-black text-center sm:text-left">
            <span>&copy; 2026 KINETIC SOLAR LABS NIGERIA.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-black/75">24/7 LITHIUM POWER</span>
          </div>

          {/* Horizontal Social Links in Space Mono (12px) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono-tech text-[12px] uppercase font-bold text-black">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick(800)}
                className="hover:text-white transition-colors duration-150 border-b border-transparent hover:border-black"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono-tech text-[12px] uppercase font-bold text-black hover:text-white transition-colors duration-150 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowUp size={12} strokeWidth={3} />
            </div>
          </button>

        </div>
      </footer>

    </div>
  );
};
