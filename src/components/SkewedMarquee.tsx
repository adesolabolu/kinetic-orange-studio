import React from 'react';

export const SkewedMarquee: React.FC = () => {
  const row1Text = 'ZERO GENERATOR NOISE • ZERO DIESEL BILLS • 24/7 LITHIUM SOLAR SYSTEMS • PURE SINE WAVE UPTIME • ';
  const row2Text = 'RUN YOUR ACs ON SOLAR • INSTANT NEPA SWITCHOVER • 10-YEAR LITHIUM WARRANTY • LAGOS TO ABUJA • ';

  return (
    <div id="manifesto" className="relative w-full bg-[#FF4D00] py-16 md:py-24 overflow-hidden border-b-2 border-black">
      {/* Skewed Container at -2deg */}
      <div className="w-[110%] -ml-[5%] transform -skew-y-2 bg-[#000000] py-10 md:py-16 border-y-2 border-black overflow-hidden shadow-2xl">
        
        {/* Row 1: Orange text (#FF4D00) in Archivo Black, 10vw size, scrolling left */}
        <div className="w-full overflow-hidden flex whitespace-nowrap mb-2 md:mb-4 select-none">
          <div className="animate-marquee-left flex items-center">
            <span className="font-display text-[10vw] leading-[0.88] text-[#FF4D00] uppercase tracking-[-0.04em] pr-4">
              {row1Text}
            </span>
            <span className="font-display text-[10vw] leading-[0.88] text-[#FF4D00] uppercase tracking-[-0.04em] pr-4" aria-hidden="true">
              {row1Text}
            </span>
            <span className="font-display text-[10vw] leading-[0.88] text-[#FF4D00] uppercase tracking-[-0.04em] pr-4" aria-hidden="true">
              {row1Text}
            </span>
          </div>
        </div>

        {/* Row 2: White text with 80% opacity, scrolling in reverse (right), 10vw size */}
        <div className="w-full overflow-hidden flex whitespace-nowrap select-none">
          <div className="animate-marquee-right flex items-center">
            <span className="font-display text-[10vw] leading-[0.88] text-white/80 uppercase tracking-[-0.04em] pr-4">
              {row2Text}
            </span>
            <span className="font-display text-[10vw] leading-[0.88] text-white/80 uppercase tracking-[-0.04em] pr-4" aria-hidden="true">
              {row2Text}
            </span>
            <span className="font-display text-[10vw] leading-[0.88] text-white/80 uppercase tracking-[-0.04em] pr-4" aria-hidden="true">
              {row2Text}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
