import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface Props {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenInquiry }) => {
  const [audioActive, setAudioActive] = useState(sound.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = () => {
    sound.enabled = !sound.enabled;
    setAudioActive(sound.enabled);
    if (sound.enabled) {
      sound.playClick(1050);
    }
  };

  const navLinks = [
    { label: 'MANIFESTO', href: '#manifesto' },
    { label: 'PACKAGES', href: '#services' },
    { label: 'INSTALLS', href: '#work' },
    { label: 'LOAD CALC', href: '#estimate' },
    { label: 'BOOK AUDIT', href: '#cta' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick(880);
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo / Wordmark */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              sound.playHeavyThud();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Kinetic Orange Studio Home"
          >
            <div className="w-8 h-8 bg-black flex items-center justify-center border-2 border-black group-hover:scale-105 transition-transform duration-150">
              <span className="font-display text-[#FF4D00] text-sm">KO</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-black text-lg md:text-xl tracking-[-0.04em] leading-none group-hover:text-black transition-colors">
                KINETIC
              </span>
              <span className="font-mono-tech text-[10px] uppercase tracking-wider text-black font-bold -mt-0.5">
                SOLAR LABS // NG
              </span>
            </div>
          </a>
        </div>

        {/* Center: Floating Black Pill Navigation */}
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto hidden md:flex items-center bg-[#000000] border-2 border-black rounded-full px-4 py-2 shadow-2xl space-x-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white font-mono-tech text-[12px] font-bold tracking-[-0.02em] px-3.5 py-1.5 rounded-full transition-colors duration-150 hover:bg-white hover:text-black whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Audio Toggle & Social / Action */}
        <div className="pointer-events-auto flex items-center gap-2 md:gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={toggleAudio}
            title={audioActive ? 'Mute UI Acoustic Feedback' : 'Enable UI Acoustic Feedback'}
            className="w-10 h-10 rounded-full bg-black text-[#FF4D00] flex items-center justify-center border-2 border-black hover:scale-110 active:scale-95 transition-transform duration-150 cursor-pointer shadow-md focus:outline-none"
            aria-label="Toggle Brutalist Audio Feedback"
          >
            {audioActive ? <Volume2 size={16} strokeWidth={2.5} /> : <VolumeX size={16} strokeWidth={2.5} />}
          </button>

          {/* Social / External Links */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick(720)}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center border-2 border-black hover:scale-110 hover:bg-white hover:text-black transition-all duration-150 shadow-md font-mono-tech text-xs font-bold"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick(750)}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center border-2 border-black hover:scale-110 hover:bg-white hover:text-black transition-all duration-150 shadow-md font-mono-tech text-xs font-bold"
              aria-label="X (Twitter)"
            >
              𝕏
            </a>
          </div>

          {/* Quick Sprint Button */}
          <button
            onClick={() => {
              sound.playHeavyThud();
              onOpenInquiry();
            }}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black border-2 border-black font-mono-tech text-[12px] font-bold uppercase tracking-[-0.02em] hover:scale-105 active:scale-95 transition-all duration-150 shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>POWER UP NOW</span>
            <ArrowUpRight size={14} strokeWidth={3} className="text-[#FF4D00]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sound.playClick(600);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden w-10 h-10 rounded-full bg-black text-white flex items-center justify-center border-2 border-black active:scale-95 transition-transform"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-3 md:hidden bg-black text-white border-2 border-black p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-2xl tracking-[-0.04em] uppercase text-white hover:text-[#FF4D00] hover:translate-x-2 transition-all py-1 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 bg-[#FF4D00] text-black font-mono-tech text-xs uppercase font-bold tracking-wider rounded-full hover:bg-white transition-colors"
              >
                POWER UP // BOOK SITE AUDIT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
