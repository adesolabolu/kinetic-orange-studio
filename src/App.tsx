/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkewedMarquee } from './components/SkewedMarquee';
import { ServicesList } from './components/ServicesList';
import { WorkShowcase } from './components/WorkShowcase';
import { SprintEstimator } from './components/SprintEstimator';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('RESIDENTIAL LITHIUM PACKAGES');

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FF4D00] text-black selection:bg-black selection:text-[#FF4D00] relative font-sans antialiased">
      {/* Floating Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Stack */}
      <main>
        {/* Fullscreen Typographic Hero */}
        <Hero />

        {/* -2deg Skewed Marquee Section */}
        <SkewedMarquee />

        {/* Vertical Service List (Brutalist Service Cards) */}
        <ServicesList onSelectServiceForInquiry={(service) => handleOpenInquiry(service)} />

        {/* Selected Artifacts / Commissions */}
        <WorkShowcase />

        {/* Interactive Sprint & Scope Estimator */}
        <SprintEstimator onOpenInquiryWithScope={(scope) => handleOpenInquiry(scope)} />

        {/* Giant 14vw CTA & 2px Border Footer */}
        <Footer onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Interactive Discovery Brief Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={handleCloseInquiry}
        preselectedService={preselectedService}
      />
    </div>
  );
}
