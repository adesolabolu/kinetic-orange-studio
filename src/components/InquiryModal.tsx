import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/sound';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const InquiryModal: React.FC<Props> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [service, setService] = useState<string>(preselectedService || 'RESIDENTIAL LITHIUM PACKAGES');
  const [budget, setBudget] = useState<string>('₦3.5M - ₦6M');
  const [timeline, setTimeline] = useState<string>('Immediate (48-72 hrs)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('VALID EMAIL ADDRESS REQUIRED.');
      sound.playClick(440);
      return;
    }
    setError('');
    sound.playHeavyThud();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto selection:bg-[#FF4D00] selection:text-black"
    >
      <div className="bg-[#FF4D00] text-black border-2 border-black max-w-2xl w-full p-6 sm:p-10 relative shadow-2xl my-8">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-black" />
            <span className="font-mono-tech text-xs uppercase font-bold tracking-wider">
              SOLAR &amp; LITHIUM LOAD AUDIT // 2026
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              sound.playClick(600);
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center cursor-pointer border border-black"
            aria-label="Close modal"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-6 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-full bg-black text-[#FF4D00] mx-auto flex items-center justify-center border-2 border-black">
              <Check size={36} strokeWidth={3} />
            </div>
            <div>
              <h3 className="font-display text-4xl uppercase tracking-[-0.04em]">
                SITE AUDIT REQUEST LOGGED
              </h3>
              <p className="font-mono-tech text-xs uppercase mt-2 max-w-md mx-auto text-black/90">
                OUR LAGOS &amp; ABUJA SOLAR ENGINEERS REVIEW LOAD REQUESTS WITHIN 2 HOURS. EXPECT YOUR KVA SIZING SHEET &amp; QUOTE AT <span className="font-bold underline">{email}</span>.
              </p>
            </div>
            <div className="p-4 bg-black text-white font-mono-tech text-xs uppercase space-y-1 text-left">
              <div>// PACKAGE: {service}</div>
              <div>// BUDGET TIER: {budget}</div>
              <div>// INSTALL WINDOW: {timeline}</div>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-black text-white font-mono-tech text-xs uppercase font-bold hover:bg-white hover:text-black transition-colors border-2 border-black"
            >
              CLOSE SPECIFICATION
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 id="inquiry-title" className="font-display text-3xl sm:text-4xl uppercase tracking-[-0.04em] leading-[0.9]">
                BOOK SOLAR SITE AUDIT
              </h2>
              <p className="font-mono-tech text-xs uppercase mt-1 text-black/80">
                STOP BUYING FUEL &amp; REPLACING DEAD BATTERIES. GET A 24/7 LITHIUM SYSTEM.
              </p>
            </div>

            {/* Scope Selection */}
            <div>
              <label className="font-mono-tech text-xs uppercase font-bold block mb-2">
                1. SELECT SOLAR / LITHIUM PACKAGE:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'RESIDENTIAL LITHIUM PACKAGES',
                  'COMMERCIAL & SME MICROGRIDS',
                  'SMART BMS & LOAD TELEMETRY',
                  'INVERTER UPGRADE & LITHIUM SWAP',
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      sound.playClick(900);
                      setService(s);
                    }}
                    className={`py-2 px-3 text-xs font-mono-tech font-bold uppercase border-2 border-black text-left transition-colors ${
                      service === s ? 'bg-black text-[#FF4D00]' : 'bg-transparent text-black hover:bg-black/10'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="font-mono-tech text-xs uppercase font-bold block mb-2">
                2. ESTIMATED SYSTEM BUDGET (NAIRA):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['₦1.8M - ₦3.5M', '₦3.5M - ₦6M', '₦6M+ DUPLEX / SME'].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => {
                      sound.playClick(850);
                      setBudget(b);
                    }}
                    className={`py-2 px-3 text-xs font-mono-tech font-bold uppercase border-2 border-black text-center transition-colors ${
                      budget === b ? 'bg-black text-[#FF4D00]' : 'bg-transparent text-black hover:bg-black/10'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono-tech text-xs uppercase font-bold block mb-1">
                  NAME &amp; LOCATION (E.G. LEKKI, ABUJA):
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.G. TUNDE BAKARE // LEKKI PHASE 1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white text-black font-mono-tech text-xs px-3 py-2.5 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/40"
                />
              </div>
              <div>
                <label className="font-mono-tech text-xs uppercase font-bold block mb-1">
                  EMAIL ADDRESS:
                </label>
                <input
                  type="email"
                  required
                  placeholder="TUNDE@GMAIL.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-black font-mono-tech text-xs px-3 py-2.5 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/40"
                />
              </div>
            </div>

            <div>
              <label className="font-mono-tech text-xs uppercase font-bold block mb-1">
                APPLIANCES YOU WANT TO POWER + WHATSAPP NUMBER (OPTIONAL):
              </label>
              <textarea
                rows={2}
                placeholder="E.g. 2 Inverter ACs, 1 Deep Freezer, Fridge, Water Pump, TVs — WhatsApp: 0803..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white text-black font-mono-tech text-xs p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/40 resize-none"
              />
            </div>

            {error && (
              <p className="font-mono-tech text-xs font-bold text-black bg-white p-2 border-2 border-black">
                {error}
              </p>
            )}

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t-2 border-black">
              <div className="flex items-center gap-1.5 font-mono-tech text-[10px] text-black/80 uppercase">
                <ShieldCheck size={14} />
                <span>5-YEAR LITHIUM WARRANTY &amp; CERTIFIED COREN ENGINEERS</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-black text-white font-mono-tech text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-150 border-2 border-black cursor-pointer flex items-center justify-center gap-2"
              >
                <span>REQUEST LOAD AUDIT</span>
                <ArrowRight size={14} strokeWidth={2.5} className="text-[#FF4D00]" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
