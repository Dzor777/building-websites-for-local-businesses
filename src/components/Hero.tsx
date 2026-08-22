import React from 'react';
import { Phone, ShieldCheck, Clock, DollarSign, Award, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow background accent */}
      <div className="hero-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Call To Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available 24/7 in {siteConfig.city}, {siteConfig.state}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Fast, Reliable <br />
              <span className="gradient-text">{siteConfig.niche}</span> <br />
              When You Need It Most.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {siteConfig.description} Upfront pricing, 30-minute emergency arrival, and 100% satisfaction guaranteed.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero After-Hours Extra Fees</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Local Specialists</span>
              </div>

              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Same-Day Service Appointments</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Year Warranty On All Work</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 rounded-xl shadow-xl shadow-sky-500/30 hover:scale-105 transition-all flex items-center justify-center space-x-3"
              >
                <Phone className="w-5 h-5" />
                <span>Call {siteConfig.formattedPhone}</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-4 text-base font-semibold text-slate-100 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Get Instant Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Proof Snippet */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-3 text-xs text-slate-400">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span>
                <strong className="text-white font-bold">{siteConfig.reviews.googleRating} / 5.0</strong> based on {siteConfig.reviews.totalReviews}+ Google Reviews
              </span>
            </div>

          </div>

          {/* Right Column: Hero Card & Trust Matrix */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Need Emergency Service?</h3>
                  <p className="text-xs text-slate-400">Dispatching technicians in {siteConfig.city}</p>
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-emerald-400 text-xs font-semibold animate-pulse">
                  Live Dispatch
                </div>
              </div>

              {/* Trust Grid */}
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.trustBadges.map((badge, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-1">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      {idx === 0 && <Clock className="w-4 h-4" />}
                      {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                      {idx === 2 && <DollarSign className="w-4 h-4 text-emerald-400" />}
                      {idx === 3 && <Award className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div className="font-bold text-sm text-white pt-1">{badge.title}</div>
                    <div className="text-xs text-slate-400">{badge.subtitle}</div>
                  </div>
                ))}
              </div>

              {/* Call Out Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Limited Offer</div>
                  <div className="text-sm font-bold text-white">$50 OFF First Service Call</div>
                </div>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors"
                >
                  Claim Offer
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
