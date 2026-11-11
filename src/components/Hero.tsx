import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { EXACT_WHATSAPP_URL } from '../data/agencyData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed inline metadata kicker (Zero-pill compliant) */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium text-cyan-400 tracking-wide uppercase">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Accra, Ghana
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Turnaround in 48 Hours</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-semibold font-mono-numbers">Standard Launch GH₵2,000</span>
            </div>

            {/* Bold Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.12] tracking-tight [text-wrap:balance]">
              Custom Websites for <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">Accra Businesses</span> in 48 Hours
            </h1>

            {/* Exact Subheadline requested */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Engineered mobile landing pages for local service providers—plumbers, auto repair shops, hardware stores, and retail merchants. Turn casual Accra WhatsApp shoppers into paying clients with sub-second speeds and verified Google Maps locations.
            </p>

            {/* Core Value Props requested */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero monthly software subscription traps</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Paystack & Mobile Money terminal ready</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>1-Tap WhatsApp customer booking buttons</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Google Business Profile & Maps optimization</span>
              </div>
            </div>

            {/* Two Conversion-Focused CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={EXACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/35 transition-all hover:scale-[1.02] border border-blue-400/30 text-center whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 text-cyan-200" />
                <span>WhatsApp Us Now</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 active:bg-slate-900 rounded-xl border border-slate-700/80 hover:border-cyan-500/50 transition-all text-center whitespace-nowrap"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust and Regional Footprint */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-[#0b1120] flex items-center justify-center text-[10px] font-bold text-cyan-400">SP</div>
                <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-[#0b1120] flex items-center justify-center text-[10px] font-bold text-blue-400">EL</div>
                <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-[#0b1120] flex items-center justify-center text-[10px] font-bold text-emerald-400">KN</div>
              </div>
              <div className="text-slate-300">
                <span className="font-semibold text-white font-mono-numbers">50+</span> verified web deployments across <span className="text-slate-200">Spintex, East Legon, Circle, Kaneshie, & Madina</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Glassmorphism Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900/50 backdrop-blur-sm group">
              {/* Studio photography visual asset */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Swatty Tech Ghana engineering studio in Accra"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to secondary high-availability tech workspace image
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-slate-900/40 to-transparent" />
              </div>

              {/* Glassmorphic Overlay Stats Card */}
              <div className="p-5 sm:p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800/90 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <div className="text-xs text-slate-400">Turnaround Guarantee</div>
                    <div className="text-lg font-bold text-white flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="font-mono-numbers">48 Hours</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Standard Launch Package</div>
                    <div className="text-lg font-bold text-cyan-400 font-mono-numbers">
                      GH₵ 2,000
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <div className="text-slate-400">Mobile Speed</div>
                    <div className="text-sm font-semibold text-emerald-400 font-mono-numbers">0.8s on 4G</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <div className="text-slate-400">Local Discovery</div>
                    <div className="text-sm font-semibold text-cyan-400 font-mono-numbers">Google Maps Ready</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    Paystack Merchant Verified
                  </span>
                  <span className="text-slate-400">Accra Time: GMT</span>
                </div>
              </div>
            </div>

            {/* Ambient decorative glow around card */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
