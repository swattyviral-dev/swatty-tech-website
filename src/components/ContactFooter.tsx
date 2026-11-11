import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AGENCY_PHONE, AGENCY_PHONE_CLEAN, AGENCY_EMAIL, AGENCY_LOCATION, EXACT_WHATSAPP_URL } from '../data/agencyData';

export const ContactFooter: React.FC = () => {
  // Fast inquiry form state
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    neighborhood: 'Spintex Road',
    serviceType: '1-Page Mobile Website (GH₵2,000)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.phone) return;

    // Direct to exact WhatsApp format
    window.open(EXACT_WHATSAPP_URL, '_blank');
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-[#080d19] text-slate-300 border-t border-slate-800 relative">
      {/* Contact & Consultation Intake Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Accra Headquarters */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Direct Contact & Accra Location
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
                Start Your 48-Hour Website Build Today
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Reach our Accra development team directly on WhatsApp or call our local line. We reply promptly during operating hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* WhatsApp direct card */}
              <a
                href={EXACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel glass-panel-hover flex items-center justify-between gap-4 border border-blue-500/30 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Official WhatsApp (Ghana)</div>
                    <div className="text-base font-bold text-white font-mono-numbers">
                      {AGENCY_PHONE}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Chat Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Phone call link */}
              <a
                href={`tel:${AGENCY_PHONE_CLEAN}`}
                className="p-4 rounded-xl glass-panel glass-panel-hover flex items-center justify-between gap-4 border border-slate-800 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Telephone Call</div>
                    <div className="text-base font-bold text-white font-mono-numbers">
                      {AGENCY_PHONE}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-white flex items-center gap-1">
                  Call Direct <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Physical Location */}
              <div className="p-4 rounded-xl glass-panel flex items-start gap-3.5 border border-slate-800/80">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Accra Base of Operations</div>
                  <div className="text-sm font-semibold text-white">
                    {AGENCY_LOCATION}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    On-site hardware deployment available across Greater Accra
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-4 rounded-xl glass-panel flex items-start gap-3.5 border border-slate-800/80">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Operating Hours</div>
                  <div className="text-sm font-semibold text-white">
                    Monday - Saturday: 8:00 AM - 7:00 PM GMT
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Emergency support & server monitoring 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-white">
                  Get a Free Consultation & 48-Hour Slot
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Fill in your details below to lock in your build date. We will connect with you on WhatsApp immediately.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/70 border border-emerald-500/50 space-y-3 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Inquiry Forwarded to WhatsApp!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Our engineering team in Accra has received your inquiry. We look forward to building your custom website in 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-cyan-400 hover:underline font-medium"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Business / Company Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Spintex Auto Clinic"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Phone / WhatsApp Number <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 053 891 3068"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Accra Neighborhood / Area
                      </label>
                      <select
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Spintex Road">Spintex Road</option>
                        <option value="East Legon">East Legon</option>
                        <option value="Osu / Oxford Street">Osu / Oxford Street</option>
                        <option value="Kaneshie / Odorkor">Kaneshie / Odorkor</option>
                        <option value="Circle / Adabraka">Circle / Adabraka</option>
                        <option value="Madina / Adenta">Madina / Adenta</option>
                        <option value="Tema Metro">Tema Metro</option>
                        <option value="Lapaz / Achimota">Lapaz / Achimota</option>
                        <option value="Other Area in Ghana">Other Area in Ghana</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Requested Solution
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="1-Page Mobile Website (GH₵2,000)">1-Page Mobile Website (GH₵2,000)</option>
                        <option value="Google Maps Optimization & Setup (GH₵850)">Google Maps Optimization (GH₵850)</option>
                        <option value="Paystack & MoMo Payment Integration (GH₵1,200)">Paystack & MoMo Integration (GH₵1,200)</option>
                        <option value="POS Hardware & System Configuration (GH₵1,500)">POS & Hardware Setup (GH₵1,500)</option>
                        <option value="Full Complete Bundle (Website + Maps + Paystack)">Full Complete Bundle</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Additional Requirements or Business Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Need mobile booking and Paystack MoMo integration ready in 48 hours."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/35 transition-all text-center border border-blue-400/30"
                  >
                    <MessageSquare className="w-4 h-4 text-cyan-200" />
                    <span>Send Inquiry & WhatsApp Us Now</span>
                    <ArrowRight className="w-4 h-4 text-cyan-200" />
                  </button>

                  <div className="text-center text-[11px] text-slate-500">
                    Direct WhatsApp: <strong className="text-slate-300">{AGENCY_PHONE}</strong> · Fast response time
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Contact Banner & Phone Call Link */}
      <div className="border-t border-slate-800/80 py-6 bg-[#0a1020]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-sm text-slate-300">
            Have questions or need emergency hardware setup in Accra? Call our office:
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${AGENCY_PHONE_CLEAN}`}
              className="text-lg font-extrabold text-cyan-400 hover:text-cyan-300 font-mono-numbers flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{AGENCY_PHONE}</span>
            </a>
            <a
              href={EXACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/40 text-xs font-semibold text-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Quiet Legal & Copyright Bar */}
      <div className="border-t border-slate-800/80 py-8 bg-[#060a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-slate-400">Swatty Tech Ghana</span>
            <span>·</span>
            <span className="text-slate-300 font-medium">Telephone / WhatsApp: {AGENCY_PHONE}</span>
            <span>·</span>
            <span>Accra, Greater Accra Region</span>
            <span>·</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-slate-300 transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-slate-300 transition-colors">Pricing</a>
            <a href={`mailto:${AGENCY_EMAIL}`} className="hover:text-slate-300 transition-colors">{AGENCY_EMAIL}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
