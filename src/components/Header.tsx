import React, { useState } from 'react';
import { MessageSquare, Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { AGENCY_PHONE_CLEAN, EXACT_WHATSAPP_URL } from '../data/agencyData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b1120]/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <span className="text-white font-extrabold text-sm tracking-normal">ST</span>
          </div>
          <span>
            Swatty Tech <span className="text-cyan-400 font-semibold">Ghana</span>
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
            Services
          </a>
          <a href="#portfolio" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
            Portfolio
          </a>
          <a href="#process" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
            Process
          </a>
          <a href="#pricing" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
            Pricing
          </a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={EXACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-md shadow-blue-600/30 transition-all hover:shadow-cyan-500/25 whitespace-nowrap shrink-0 border border-blue-400/30"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cyan-200" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${AGENCY_PHONE_CLEAN}`}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700/60"
            aria-label="Call Swatty Tech Ghana"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700/60 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-200" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0b1120]/95 backdrop-blur-xl px-5 py-6 space-y-4 transition-all">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 transition-colors"
            >
              Services Grid
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 transition-colors"
            >
              Verified Works Portfolio
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 transition-colors"
            >
              3-Step 48-Hour Process
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 transition-colors"
            >
              GH₵2000 Pricing & Calculator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 transition-colors"
            >
              Accra Office & Direct Contact
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={EXACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 text-cyan-200" />
              <span>WhatsApp Us Now</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-300" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
