import React from 'react';
import { Check, X, Star, Zap, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface PricingTiersProps {
  onSelectTier?: (tierName: string) => void;
  isModal?: boolean;
  onClose?: () => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({ onSelectTier, isModal = false, onClose }) => {
  const handleChoose = (tierName: string) => {
    if (onSelectTier) {
      onSelectTier(tierName);
    } else {
      const contactEl = document.getElementById('contact') || document.getElementById('calculator');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <section id="pricing" className={`${isModal ? 'py-4' : 'py-20'} bg-slate-950 text-slate-100 relative overflow-hidden`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Transparent Texas Contractor Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Simple, High-ROI Plans Built For <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-amber-300 to-amber-500">
              Phone Calls &amp; Instant Quotes
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Everything your trade business needs to turn smartphone searches into paying customers. No surprise tech bills, no headaches, and fast 24–48 hour deployment.
          </p>

          {/* ROI Callout Banner */}
          <div className="mt-4 inline-block bg-slate-900 border border-emerald-500/40 rounded-xl px-4 py-2.5 text-xs text-emerald-300 font-medium shadow-lg">
            💰 <strong className="text-white">ROI Guarantee:</strong> Just 1 extra service call or repair job per month pays for your entire website.
          </div>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* TIER 1: BASIC (STARTER) */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-200">Basic Web Package</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Starter Mobile Business Card</p>
                </div>
                <span className="text-[11px] font-semibold bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md border border-slate-700">
                  Starter
                </span>
              </div>

              {/* Price */}
              <div className="my-6 pb-6 border-b border-slate-800">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-white">$150</span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  <span className="text-sky-400 font-semibold">$300 one-time setup fee</span>
                  <span className="text-slate-500 block">Initial 6-month term, then month-to-month</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                For solo contractors and newer operators who just need a clean, working mobile web presence with a 1-tap call button.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Custom Mobile-First Website Design</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>1-Tap Click-to-Call Phone Header &amp; Bar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High-Speed Global CDN &amp; SSL Security</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Google Local Business SEO Schema</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Standard Email Contact Form</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>4 Content Updates per Year (Quarterly)</span>
                </li>

                {/* Exclusions to trigger upsell */}
                <li className="flex items-start gap-2.5 text-slate-500 pt-2 border-t border-slate-800/80">
                  <X className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                  <span>No Interactive Quote Calculator</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-500">
                  <X className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                  <span>No Instant SMS Text Alerts (Email only)</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-500">
                  <X className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                  <span>No Automated Google Review Booster</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleChoose('Basic Web Package')}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all text-center"
            >
              Start With Basic ($450 Total)
            </button>
          </div>

          {/* TIER 2: STANDARD (MOST POPULAR - BEST VALUE) */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950/40 border-2 border-sky-500 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-sky-500/10 relative scale-100 lg:-translate-y-2 lg:shadow-sky-500/20">
            {/* Best Value Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              Most Popular — Best Value
            </div>

            <div>
              <div className="flex justify-between items-start mb-4 pt-2">
                <div>
                  <h3 className="text-xl font-extrabold text-white">Standard Web Package</h3>
                  <p className="text-xs text-sky-400 font-semibold mt-0.5">Automated Lead Generator</p>
                </div>
                <span className="text-[11px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40 px-2.5 py-1 rounded-md">
                  High ROI
                </span>
              </div>

              {/* Price */}
              <div className="my-6 pb-6 border-b border-slate-800">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-white">$300</span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  <span className="text-sky-400 font-semibold">$500 one-time setup fee</span>
                  <span className="text-slate-400 block text-[11px] mt-0.5">Just $5/day more than basic for 2x more calls</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                <strong className="text-white">Our most chosen package.</strong> Combines a modern mobile site with interactive quote tools and instant text alerts to win jobs before competitors call back.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs text-slate-200 mb-8">
                <li className="flex items-start gap-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Everything in Basic Package Included</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-300 font-semibold bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Interactive Trade Quote Calculator (Custom estimation tool tailored to your trade)</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium text-sky-200">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Instant SMS Lead Text Alerts (Pushes job requests to your cell in &lt;30s)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Automated Google Review Booster (Collect 5-star reviews on autopilot)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Before &amp; After Project Photo Showcase</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Google Analytics 4 (GA4) Tracking &amp; Monthly Call Reports</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>6 Scheduled Updates per Year (Every 2 Months)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleChoose('Standard Web Package')}
              className="w-full py-3.5 px-4 rounded-xl text-xs font-black text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300 hover:from-sky-300 hover:to-amber-200 transition-all shadow-lg shadow-sky-500/25 text-center flex items-center justify-center gap-2"
            >
              <span>Get Standard (Most Popular)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* TIER 3: ENTERPRISE / PREMIUM (HIGH ANCHOR) */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-200">Enterprise Pipeline</h3>
                  <p className="text-xs text-amber-400 mt-0.5">County Domination Package</p>
                </div>
                <span className="text-[11px] font-semibold bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-md border border-amber-500/30">
                  Full Suite
                </span>
              </div>

              {/* Price */}
              <div className="my-6 pb-6 border-b border-slate-800">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-white">$600</span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  <span className="text-amber-400 font-semibold">$1,000 one-time setup fee</span>
                  <span className="text-slate-500 block">Initial 6-month term, then month-to-month</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                For established contractors with multiple service trucks looking to dominate multiple surrounding cities and automate dispatch.
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 text-xs text-slate-300 mb-8">
                <li className="flex items-start gap-2.5 font-semibold text-white">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Everything in Standard Package Included</span>
                </li>
                <li className="flex items-start gap-2.5 font-medium text-amber-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Up to 5 Multi-City Suburb SEO Landing Pages</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>CRM &amp; Booking Webhook Integrations (Housecall Pro, Jobber, etc.)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Active Local Citation Management across 40+ Directories</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>12 Content Updates per Year (Monthly + Same-Day Priority Edits)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Dedicated VIP Phone &amp; Text Line directly to Dylan</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleChoose('Enterprise Pipeline')}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all text-center"
            >
              Select Enterprise ($1,600 Total)
            </button>
          </div>

        </div>

        {/* Clear Policy & Out-Of-Scope Note */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 text-center text-xs text-slate-400 space-y-2">
          <p className="text-slate-300 font-medium flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>All websites include high-speed hosting, mobile optimization, SSL security, and scheduled updates.</span>
          </p>
          <p className="text-slate-400 italic">
            * Out of scope updates are available for a discussed and negotiated additional fee.
          </p>
        </div>

      </div>
    </section>
  );
};
