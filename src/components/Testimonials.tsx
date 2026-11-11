import React from 'react';
import { Quote, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Verified Local Impact
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Trusted by Business Owners Across Accra
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Real outcomes from service providers and retailers who transitioned from offline struggles to automated customer booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-between border border-slate-800/80 hover:border-slate-700 transition-all space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-cyan-400/30" />
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Verified Result:</span>
                  <span className="font-bold text-emerald-400 font-mono-numbers flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.metric}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-xs text-slate-400">
                    {item.role}, <span className="text-slate-300 font-medium">{item.company}</span>
                  </div>
                  <div className="text-xs text-cyan-400/90 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
