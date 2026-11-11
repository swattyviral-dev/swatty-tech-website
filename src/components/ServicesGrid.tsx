import React from 'react';
import { Globe, MapPin, CreditCard, Cpu, ArrowUpRight, Check, MessageSquare } from 'lucide-react';
import { SERVICES, EXACT_WHATSAPP_URL } from '../data/agencyData';

interface ServicesGridProps {
  onSelectServiceForCalculator?: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForCalculator }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-blue-400" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0c1427]/70 relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Engineered Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Turnkey Web & Tech Solutions Built for the Ghanaian Market
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Eliminate developer delays and vague quotes. Every service comes with fixed Ghanaian Cedi pricing, local payment support, and rapid Accra execution.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const isMarquee = service.id === 'mobile-website';

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl glass-panel glass-panel-hover p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isMarquee 
                    ? 'border-cyan-500/40 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-950/40 shadow-xl shadow-cyan-950/20' 
                    : 'border-slate-800/80 bg-slate-900/70'
                }`}
              >
                {/* Highlight Badge if Marquee */}
                {isMarquee && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    Standard Launch Package · GH₵2,000
                  </div>
                )}

                <div className="space-y-5">
                  {/* Icon & Meta Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
                      {getIcon(service.iconName)}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
                        GH₵ {service.priceGh.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-400">{service.priceNote}</div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      What is included:
                    </div>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended For & Turnaround */}
                  <div className="pt-2 text-xs text-slate-400 space-y-1">
                    <div>
                      <span className="text-slate-500 font-medium">Best for: </span>
                      <span className="text-slate-300">{service.recommendedFor}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-medium">Delivery: </span>
                      <span className="text-cyan-300 font-semibold">{service.turnaround}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={EXACT_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm transition-all text-center whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4 text-cyan-200" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  {onSelectServiceForCalculator && (
                    <button
                      onClick={() => onSelectServiceForCalculator(service.id)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg border border-slate-700/70 transition-colors whitespace-nowrap"
                    >
                      <span>Customize in Calculator</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
