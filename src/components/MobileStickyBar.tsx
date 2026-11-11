import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { AGENCY_PHONE_CLEAN, EXACT_WHATSAPP_URL } from '../data/agencyData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0b1120]/95 backdrop-blur-lg border-t border-slate-800/90 px-3 py-2.5 flex items-center gap-2.5 shadow-2xl">
      {/* Call Direct */}
      <a
        href={`tel:${AGENCY_PHONE_CLEAN}`}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold active:bg-slate-700 transition-colors"
        aria-label="Call Swatty Tech Ghana"
      >
        <Phone className="w-3.5 h-3.5 text-cyan-400" />
        <span>Call Office</span>
      </a>

      {/* WhatsApp Conversion CTA */}
      <a
        href={EXACT_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 active:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/30 transition-all border border-blue-400/30"
        aria-label="WhatsApp Swatty Tech Ghana"
      >
        <MessageSquare className="w-3.5 h-3.5 text-cyan-200" />
        <span>WhatsApp Now</span>
      </a>
    </div>
  );
};
