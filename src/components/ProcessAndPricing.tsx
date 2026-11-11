import React, { useState } from 'react';
import { Check, CheckCircle2, MessageSquare, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { ADD_ONS, EXACT_WHATSAPP_URL } from '../data/agencyData';

interface ProcessAndPricingProps {
  initialServiceId?: string;
}

export const ProcessAndPricing: React.FC<ProcessAndPricingProps> = () => {
  // Base website price
  const BASE_PRICE_GH = 2000;

  // Selected add-on IDs
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'addon-maps',
    'addon-paystack'
  ]);

  // Industry quick selector
  const [businessType, setBusinessType] = useState('Service Business');

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate live total
  const calculatedTotal = BASE_PRICE_GH + ADD_ONS
    .filter(addon => selectedAddons.includes(addon.id))
    .reduce((sum, item) => sum + item.priceGh, 0);

  return (
    <section id="process" className="py-20 bg-[#0c1427]/80 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 4A: 3-Step 48-Hour Process */}
        <div>
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Streamlined Delivery Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Our 3-Step Process: From Idea to Live in 48 Hours
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              We eliminate endless meetings and technical delays. In just 3 disciplined steps, your Accra business is online, ranking, and accepting customer payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative rounded-2xl glass-panel p-6 sm:p-8 space-y-5 border border-slate-800/90 group hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 font-extrabold text-lg">
                  01
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Hour 0 - 6
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Step 1: Select Template & Architecture
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Choose your business blueprint—whether you need a Mobile Money status hub, an automated data store, a laptop retail catalog, or an emergency service booking engine.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Category-specific UX tested on Accra users</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Mobile layout prioritized for quick calls</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl glass-panel p-6 sm:p-8 space-y-5 border border-slate-800/90 group hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 font-extrabold text-lg">
                  02
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Hour 6 - 24
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Step 2: Customize Details
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Send your product photos, price list, logo, Accra shop location, and Mobile Money numbers via WhatsApp. We craft sharp copy and configure your branding.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Accra neighborhood geotagging</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>WhatsApp direct routing and phone setup</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl glass-panel p-6 sm:p-8 space-y-5 border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-blue-950/30 group hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-extrabold text-lg">
                  03
                </div>
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Hour 24 - 48
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Step 3: Launch in 48 Hours
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Your website goes live on ultra-fast cloud hosting with SSL security, Google Maps indexation, and Paystack integration. Ready to receive customer inquiries immediately.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero monthly software subscription traps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>30 days dedicated post-launch support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4B: Transparent Pricing & Interactive Package Customizer */}
        <div id="pricing" className="pt-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Transparent Ghanaian Cedi Pricing
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Standard Launch Package at GH₵2,000
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Start with our complete 1-Page Mobile Website architecture and select only the add-ons your business requires.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Configurator */}
            <div className="lg:col-span-7 space-y-6">
              {/* Core Base Card */}
              <div className="rounded-2xl p-6 sm:p-7 bg-slate-900/90 border border-blue-500/50 shadow-xl space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Standard Launch Package
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">
                      1-Page Custom Mobile Website
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold text-white font-mono-numbers">
                      GH₵ {BASE_PRICE_GH.toLocaleString()}
                    </span>
                    <span className="block text-xs text-slate-400">One-time launch price</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Custom coded, lightweight, mobile-first design with 1-tap WhatsApp booking buttons, fast cloud hosting, SSL padlock, and Accra localized copy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>48-Hour delivery guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Mobile responsive (iPhone & Android)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero monthly software subscription traps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Paystack & Mobile Money terminal ready</span>
                  </div>
                </div>
              </div>

              {/* Add-on Selectors */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Optional High-Impact Add-ons:
                </div>

                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                        isChecked
                          ? 'border-cyan-500/70 bg-blue-950/30 shadow-md'
                          : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-cyan-500 text-slate-950' : 'border border-slate-600 bg-slate-800'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white flex items-center gap-2">
                            <span>{addon.name}</span>
                            {addon.popular && (
                              <span className="text-[10px] bg-blue-600/40 text-cyan-300 px-2 py-0.5 rounded font-mono">
                                POPULAR
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-300 mt-0.5">
                            {addon.description}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold text-white font-mono-numbers">
                          +GH₵ {addon.priceGh}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Live Summary & Direct WhatsApp Order Box */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="rounded-2xl glass-panel p-6 sm:p-7 border border-slate-700/80 shadow-2xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-lg font-bold text-white">Your Package Summary</h3>
                  <div className="text-xs text-slate-400 mt-1">
                    Delivered & fully deployed in Accra within 48 hours
                  </div>
                </div>

                {/* Business Type Quick Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-medium">Your Business Category in Accra:</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Mobile Money Agent & Financial Hub">MoMo Agent & Financial Hub</option>
                    <option value="Mobile Data Storefront & Telecom">Data Storefront & Telecom</option>
                    <option value="Laptop & Gadget Retailer">Laptop & Electronics Store</option>
                    <option value="Auto Repair & Diagnostic Workshop">Auto Repair & Garage</option>
                    <option value="Emergency Plumbing Service">Emergency Plumbing & Borehole</option>
                    <option value="Hardware & Building Supplies Store">Hardware & Building Supplies</option>
                    <option value="SaaS & Digital Platform">SaaS & Digital Platform</option>
                    <option value="General Retail & Service">General Retail / Service</option>
                  </select>
                </div>

                {/* Itemized calculation */}
                <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span>1-Page Mobile Website (Base)</span>
                    <span className="font-mono-numbers text-white">GH₵ {BASE_PRICE_GH.toLocaleString()}</span>
                  </div>

                  {ADD_ONS.filter(addon => selectedAddons.includes(addon.id)).map(addon => (
                    <div key={addon.id} className="flex justify-between text-slate-400">
                      <span className="truncate pr-2">+ {addon.name}</span>
                      <span className="font-mono-numbers text-cyan-300 shrink-0">GH₵ {addon.priceGh}</span>
                    </div>
                  ))}
                </div>

                {/* Total Display */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Total Investment</div>
                    <div className="text-xs text-emerald-400">Zero subscription traps</div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono-numbers">
                    GH₵ {calculatedTotal.toLocaleString()}
                  </div>
                </div>

                {/* Order Button via exact WhatsApp link format */}
                <a
                  href={EXACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/35 transition-all text-center border border-blue-400/30"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-200" />
                  <span>Order via WhatsApp (48h Slot)</span>
                  <ArrowRight className="w-4 h-4 text-cyan-200" />
                </a>

                {/* Trust cues */}
                <div className="space-y-2 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Countdown starts as soon as details are received</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Paystack & Mobile Money receipts provided</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
