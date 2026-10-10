import React, { useState } from 'react';
import { tradeDemosList } from '../config/tradeDemos';
import { PricingTiers } from './PricingTiers';
import { 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Calculator, 
  Clock, 
  Flame, 
  ExternalLink, 
  Mail, 
  Check
} from 'lucide-react';

export const ShowcasePortal: React.FC = () => {
  const [filterTrade, setFilterTrade] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const filteredDemos = filterTrade === 'all' 
    ? tradeDemosList 
    : tradeDemosList.filter(d => d.id === filterTrade);

  const handleLaunchDemo = (demoId: string) => {
    const basePath = window.location.pathname;
    window.location.href = `${basePath}?demo=${demoId}`;
  };

  const handleCopyLink = (demoId: string) => {
    const origin = window.location.origin;
    const path = window.location.pathname;
    const fullUrl = `${origin}${path}?demo=${demoId}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedLink(demoId);
      setTimeout(() => setCopiedLink(null), 2500);
    });
  };

  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen">
      
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-slate-800">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Interactive Demo Portfolio for Texas Contractors</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
            High-Converting Websites Built to Win More{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-amber-500">
              High-Margin Local Jobs
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop losing calls to competitors with broken, slow mobile pages. Explore our 8 production-grade trade demos featuring real photography, instant quote calculators, and 1-tap call buttons.
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 text-center">
              <div className="text-2xl font-black text-sky-400">24–48h</div>
              <div className="text-xs text-slate-400 font-medium">Turnaround Time</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 text-center">
              <div className="text-2xl font-black text-amber-400">1-Tap</div>
              <div className="text-xs text-slate-400 font-medium">Thumb Call Button</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 text-center">
              <div className="text-2xl font-black text-emerald-400">Interactive</div>
              <div className="text-xs text-slate-400 font-medium">Instant Quote Calculators</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 text-center">
              <div className="text-2xl font-black text-purple-400">100%</div>
              <div className="text-xs text-slate-400 font-medium">Done-For-You Hosting</div>
            </div>
          </div>

          {/* Jump to actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#demos"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Explore 8 Live Demos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <span>View Transparent Pricing</span>
            </a>
          </div>

        </div>
      </section>

      {/* Demos Showcase Grid Section */}
      <section id="demos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              Live Interactive Websites
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Pick Your Trade Demo
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Every site is fully responsive, loaded with trade-specific service pricing, realistic photography, and interactive estimate tools. Click to test drive.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterTrade('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterTrade === 'all'
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Trades (8)
            </button>
            {tradeDemosList.map(demo => (
              <button
                key={demo.id}
                onClick={() => setFilterTrade(demo.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterTrade === demo.id
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {demo.trade.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* The 8 Demos Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDemos.map((demo) => {
            return (
              <div 
                key={demo.id}
                className="group bg-slate-900 border border-slate-800 hover:border-sky-500/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img 
                    src={demo.heroImageUrl} 
                    alt={demo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  {/* Trade Badge */}
                  <div className="absolute top-3 left-3">
                    <span 
                      className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-md backdrop-blur-md"
                      style={{ backgroundColor: `${demo.color}dd` }}
                    >
                      {demo.trade}
                    </span>
                  </div>

                  {/* Feature Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-950/80 border border-slate-700/60 text-[10px] text-amber-300 font-medium truncate max-w-full">
                      ⭐ {demo.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {demo.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {demo.shortDesc}
                    </p>

                    {/* Trade specific feature tag */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-sky-400">
                      <Calculator className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Includes instant {demo.trade.split(' ')[0]} calculator</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-5 space-y-2 pt-2">
                    <button
                      onClick={() => handleLaunchDemo(demo.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleCopyLink(demo.id)}
                      className="w-full py-1.5 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-[11px] font-medium transition-all text-center"
                    >
                      {copiedLink === demo.id ? (
                        <span className="text-emerald-400 font-semibold flex items-center justify-center gap-1">
                          <Check className="w-3 h-3" /> Demo Link Copied!
                        </span>
                      ) : (
                        'Copy Shareable Demo Link'
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* Why Contractors Love Our Setup */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Engineered Specially For Blue-Collar Home Services
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Most website builders sell generic corporate brochures. We build conversion machines designed for homeowners searching on their phones during an emergency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Mobile-First Instant Calling</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Over 78% of local service searches happen on a smartphone. We position prominent thumb-friendly call buttons so homeowners reach you before they can back out to Google.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Interactive Quote Calculators</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Homeowners hate waiting for a callback just to get a ballpark price. Our interactive trade estimators qualify customers, collect names &amp; phone numbers, and dispatch to you instantly.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Zero Tech Hassle</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                You run your crew, we handle the technology. Hosting, SSL certificates, mobile speed optimization, seasonal price updates, and technical maintenance are 100% covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Pricing Section */}
      <PricingTiers />

      {/* Contact / Get Started Banner */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready To Launch Your Contractor Website?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Choose a demo template above or let us tailor one for your trade business. We can have your custom site live and taking calls within 24–48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:roth.dylan777@gmail.com?subject=Contractor%20Website%20Inquiry"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Dylan Roth Directly (roth.dylan777@gmail.com)</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-2">
            Local Texas web specialist. No high-pressure sales pitches, just fast, clean craftsmanship.
          </p>
        </div>
      </section>

    </div>
  );
};
