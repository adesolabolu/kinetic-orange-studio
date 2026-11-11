import React from 'react';
import { ArrowDown } from 'lucide-react';
import { sound } from '../utils/sound';

interface Props {
  targetId?: string;
  className?: string;
}

export const RotatingScrollIndicator: React.FC<Props> = ({
  targetId = 'manifesto',
  className = '',
}) => {
  const handleClick = () => {
    sound.playClick(940);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll down to next section"
      className={`relative w-[144px] h-[144px] flex items-center justify-center cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${className}`}
    >
      {/* Outer subtle boundary or guide circle (sharp brutalist accent) */}
      <div className="absolute inset-0 rounded-full border border-black/20 group-hover:border-black transition-colors duration-200" />

      {/* Rotating SVG text container (360deg over 12s linear) */}
      <div className="absolute inset-0 animate-spin-12s will-change-transform flex items-center justify-center">
        <svg
          viewBox="0 0 144 144"
          width="144"
          height="144"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <path
              id="scrollTextPath"
              d="M 72, 72 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
              fill="none"
            />
          </defs>
          <text
            fontSize="9"
            fontWeight="bold"
            letterSpacing="2.8"
            fill="#000000"
            style={{ fontFamily: "'Space Mono', monospace" }}
            className="uppercase select-none font-bold"
          >
            <textPath href="#scrollTextPath" startOffset="0%">
              SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •{' '}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Static Arrow Down Icon centered */}
      <div className="relative z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#FF4D00] group-hover:scale-110 group-hover:bg-[#000000] transition-transform duration-200 shadow-md">
        <ArrowDown
          size={18}
          strokeWidth={3}
          className="text-[#FF4D00] group-hover:translate-y-0.5 transition-transform duration-200"
        />
      </div>
    </button>
  );
};
