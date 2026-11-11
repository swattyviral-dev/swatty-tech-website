import React, { useState } from 'react';
import { Play, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioItem, EXACT_WHATSAPP_URL } from '../data/agencyData';
import { ProjectModal } from './ProjectModal';

export const PortfolioShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);

  const categories = [
    'All',
    'Fintech & MoMo Agent',
    'Data Bundles & Telecom',
    'E-Commerce & Hardware',
    'Merchant Dashboard & POS',
    'SaaS & Automation'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-[#0b1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Verified Client Deployments
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Featured Swatty Tech Works
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Explore 5 production architectures built and deployed for Ghanaian businesses—from MoMo network status desks and automated data storefronts to laptop e-commerce and operational SaaS.
            </p>
          </div>

          {/* Interactive Filter Controls (§1.A Segmented Controls) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat === 'All' ? 'All (5 Works)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel glass-panel-hover overflow-hidden flex flex-col justify-between border border-slate-800/90 transition-all duration-300"
            >
              <div>
                {/* Screenshot Container with Click to Preview */}
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer group-hover:brightness-105 transition-all"
                >
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Floating Action Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/90 text-white text-xs font-semibold shadow-lg backdrop-blur-sm">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Test-Drive Demo</span>
                    </span>
                  </div>

                  {/* Clean unboxed category overlay */}
                  <div className="absolute top-3 left-3 text-xs font-semibold text-cyan-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
                    {project.category}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 space-y-4">
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{project.clientName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Quantitative outcome */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Business Metric:
                    </div>
                    <div className="text-xs font-semibold text-emerald-400">
                      {project.highlightMetric}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center gap-2.5">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-850 rounded-lg border border-slate-700/80 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Demo</span>
                </button>

                <a
                  href={EXACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 text-slate-300 hover:text-white bg-blue-600/20 hover:bg-blue-600/40 rounded-lg border border-blue-500/30 transition-colors"
                  title="Inquire on WhatsApp"
                  aria-label="Order similar via WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
