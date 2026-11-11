import React, { useState } from 'react';
import { X, CheckCircle, Smartphone, MapPin, Wrench, Shield, ShoppingCart, MessageSquare, ArrowRight, Laptop, Activity, Wifi, Database } from 'lucide-react';
import { PortfolioItem, EXACT_WHATSAPP_URL, generateWhatsAppUrl } from '../data/agencyData';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for interactive demo widgets
  const [selectedService, setSelectedService] = useState<string>(project.liveDemoData.sampleServices[0]?.name || '');
  const [selectedNetwork, setSelectedNetwork] = useState('MTN Ghana');
  const [customerPhone, setCustomerPhone] = useState('');
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Cart state for e-commerce / data / laptop demo
  const [selectedLaptop, setSelectedLaptop] = useState('Dell XPS 15 (Core i7, 16GB RAM, 512GB SSD)');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Verified Project Showcase
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300 font-medium">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close preview modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Top Info Strip */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
                <span>Client: <strong className="text-slate-200">{project.clientName}</strong></span>
                <span>·</span>
                <span>Location: <strong className="text-slate-200">{project.location}</strong></span>
                <span>·</span>
                <span className="text-cyan-400 font-semibold">{project.turnaroundTime}</span>
              </div>
            </div>

            <div className="md:col-span-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Demonstrated Impact
              </div>
              <div className="text-sm font-semibold text-emerald-400">
                {project.highlightMetric}
              </div>
              <div className="text-xs text-slate-400">
                Delivery: 48-Hour Swatty Tech Architecture
              </div>
            </div>
          </div>

          {/* Interactive Live Simulator Area */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#0b1120] border border-cyan-500/30 shadow-inner space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Interactive Demo: {project.liveDemoData.heroTitle}
                </span>
              </div>
              <span className="text-xs text-cyan-400 font-mono-numbers">Live Engine</span>
            </div>

            {/* Project 1: Adjei Mobile Money Hub */}
            {project.id === 'adjei-momo-hub' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-400">
                  Live Network Gateway Status (Auto-refreshed for Accra merchants):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.liveDemoData.sampleServices.map((srv, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-slate-800 bg-slate-900/70 flex items-center justify-between text-xs sm:text-sm"
                    >
                      <div className="space-y-0.5">
                        <div className="font-semibold text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span>{srv.name}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">{srv.detail}</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 font-mono-numbers">
                        {srv.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-500/40 text-xs text-slate-300">
                  {project.liveDemoData.sampleNotice}
                </div>

                <a
                  href={EXACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-200" />
                  <span>{project.liveDemoData.actionLabel}</span>
                </a>
              </div>
            )}

            {/* Project 2: Multi-Network Data Storefront */}
            {project.id === 'multi-network-data' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-400">
                  Select non-expiry data package for instant top-up:
                </div>
                <div className="flex flex-wrap gap-2">
                  {['MTN Ghana', 'Telecel Ghana', 'AirtelTigo (AT)'].map((net) => (
                    <button
                      key={net}
                      onClick={() => setSelectedNetwork(net)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        selectedNetwork === net
                          ? 'border-cyan-400 bg-blue-900/50 text-white'
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {net}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.liveDemoData.sampleServices.map((pkg, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedService(pkg.name)}
                      className={`p-3 rounded-lg text-left border text-xs sm:text-sm transition-all flex items-center justify-between ${
                        selectedService === pkg.name
                          ? 'border-cyan-400 bg-blue-900/40 text-white shadow-sm'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-white">{pkg.name}</div>
                        <div className="text-[11px] text-slate-400">{pkg.detail}</div>
                      </div>
                      <span className="font-bold text-cyan-300 font-mono-numbers shrink-0">{pkg.price}</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <input
                    type="text"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Recipient Phone e.g. 053 891 3068"
                    className="px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    onClick={() => setDemoSubmitted(true)}
                    className="px-4 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Simulate Paystack MoMo Checkout</span>
                  </button>
                </div>

                {demoSubmitted && (
                  <div className="p-3.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>
                      Demo checkout simulated! Connects to Paystack automated webhook for instant non-expiry data delivery to {selectedNetwork}.
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Project 3: SWATTY LAPTOP BIZ */}
            {project.id === 'swatty-laptop-biz' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-400">
                  Select a certified laptop to view direct WhatsApp ordering:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.liveDemoData.sampleServices.map((laptop, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedLaptop(laptop.name)}
                      className={`p-3 rounded-lg text-left border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${
                        selectedLaptop === laptop.name
                          ? 'border-cyan-400 bg-blue-900/40 text-white shadow-sm'
                          : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="font-semibold text-white">{laptop.name}</div>
                        <div className="text-[11px] text-cyan-300">{laptop.detail}</div>
                      </div>
                      <span className="font-extrabold text-cyan-400 font-mono-numbers shrink-0">
                        {laptop.price}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-cyan-400" />
                    <span>Selected: <strong className="text-white">{selectedLaptop}</strong></span>
                  </div>
                  <span className="text-emerald-400 font-mono-numbers">In Stock in Accra</span>
                </div>

                <a
                  href={EXACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30 text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{project.liveDemoData.actionLabel}</span>
                </a>
              </div>
            )}

            {/* Project 4: WhatsApp Seller OS (MoMo Books) */}
            {project.id === 'whatsapp-seller-os' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-400">
                  Daily revenue, active orders, and MoMo balances in GHS:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.liveDemoData.sampleServices.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                      <div className="text-[11px] text-slate-400 truncate">{metric.name}</div>
                      <div className="text-sm font-bold text-white font-mono-numbers">{metric.price}</div>
                      <div className="text-[10px] text-emerald-400">{metric.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                  {project.liveDemoData.sampleNotice}
                </div>

                <a
                  href={EXACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30 text-center"
                >
                  <Activity className="w-4 h-4 text-cyan-200" />
                  <span>Request Custom Merchant Dashboard on WhatsApp</span>
                </a>
              </div>
            )}

            {/* Project 5: PulseFlow SaaS Platform */}
            {project.id === 'pulseflow-saas' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-400">
                  Automated operational workflows visualizer:
                </div>
                <div className="space-y-2.5">
                  {project.liveDemoData.sampleServices.map((wf, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs sm:text-sm"
                    >
                      <div className="space-y-0.5">
                        <div className="font-semibold text-white">{wf.name}</div>
                        <div className="text-xs text-slate-400">{wf.detail}</div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 font-mono">
                        {wf.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-200">
                  {project.liveDemoData.sampleNotice}
                </div>

                <a
                  href={EXACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/30 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-200" />
                  <span>Build High-Converting SaaS Landing Page on WhatsApp</span>
                </a>
              </div>
            )}
          </div>

          {/* Screenshot Showcase */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Interface Screenshot
            </div>
            <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-[16/10] bg-slate-950">
              <img
                src={project.imageSrc}
                alt={project.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA Footer in Modal */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Want a similar custom architecture for your business? We build & deploy it in 48 hours for GH₵ 2,000.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={EXACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-cyan-200" />
                <span>Build Similar in 48h</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
