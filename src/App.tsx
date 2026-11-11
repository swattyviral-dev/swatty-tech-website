/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ProcessAndPricing } from './components/ProcessAndPricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactFooter } from './components/ContactFooter';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 tech-grid-bg relative selection:bg-blue-600/40 selection:text-cyan-300 pb-16 sm:pb-0">
      {/* Top Bar Navigation */}
      <Header />

      {/* Main 1-Page Journey */}
      <main>
        {/* Section 1: Hero Header */}
        <Hero />

        {/* Section 2: Services Grid */}
        <ServicesGrid onSelectServiceForCalculator={handleScrollToPricing} />

        {/* Section 3: Work Portfolio Showcase */}
        <PortfolioShowcase />

        {/* Section 4: Pricing & Process */}
        <ProcessAndPricing />

        {/* Local Accra Proof & Evidence */}
        <Testimonials />

        {/* Objection Handling: FAQs */}
        <FAQ />
      </main>

      {/* Section 5: Footer & Contact Bar */}
      <ContactFooter />

      {/* Mobile-only Sticky Conversion Bar (Under 15% viewport height) */}
      <MobileStickyBar />
    </div>
  );
}
