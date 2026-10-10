import React from 'react';
import { Droplets, Flame, Search, Wrench, Pipette, Building2, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';
import { getTradeVisualDetails } from '../lib/tradeVisuals';
import type { ServiceItem } from '../config/site';

interface ServicesProps {
  onSelectService: (service?: ServiceItem) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Droplets': return <Droplets className="w-6 h-6 text-sky-400" />;
    case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
    case 'Search': return <Search className="w-6 h-6 text-emerald-400" />;
    case 'Wrench': return <Wrench className="w-6 h-6 text-purple-400" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
    case 'Pipette': return <Pipette className="w-6 h-6 text-blue-400" />;
    case 'Building2': return <Building2 className="w-6 h-6 text-cyan-400" />;
    default: return <Wrench className="w-6 h-6 text-sky-400" />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const tradeVisuals = getTradeVisualDetails(siteConfig.niche, siteConfig.name, siteConfig.heroImageUrl);
  const tradeName = tradeVisuals.tradeName;

  return (
    <section id="services" className="py-24 relative bg-slate-950 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PainterBros Watermark Section Header (Image 3 Style) */}
        <div className="relative text-center mb-16 select-none">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 uppercase tracking-widest leading-none pointer-events-none opacity-40">
            OUR SERVICES
          </div>
          <h2 className="-mt-8 sm:-mt-12 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight relative z-10">
            Comprehensive {tradeName} Services for Homes & Commercial Locations
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mt-3">
            Upfront flat-rate estimates, licensed technicians, and zero hidden fees guaranteed across {siteConfig.city}, TX.
          </p>
        </div>

        {/* 2-Column Featured Cards: Residential vs Commercial (PainterBros Image 3 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Card 1: Residential Services */}
          <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between group">
            <div>
              {/* Full-Width Image Container */}
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={tradeVisuals.residentialImage}
                  alt={`Residential ${tradeName}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-sky-400 border border-slate-700">
                  Residential Focus
                </div>
              </div>

              {/* Text Copy Area */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-black text-white group-hover:text-sky-400 transition-colors">
                  Residential {tradeName} Services
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Your home deserves the perfect finish and reliable function. Our expert technicians handle residential inspections, emergency repairs, and full system upgrades with maximum care and cleanliness.
                </p>
                <div className="space-y-2 text-xs text-slate-400 pt-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Same-day emergency dispatch & flexible scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Transparent upfront pricing with zero hidden trip fees</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-8 pb-8">
              <button
                onClick={() => onSelectService()}
                className="w-full py-3.5 px-4 text-sm font-extrabold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Request Residential Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Commercial Services */}
          <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col justify-between group">
            <div>
              {/* Full-Width Image Container */}
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={tradeVisuals.commercialImage}
                  alt={`Commercial ${tradeName}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-slate-700">
                  Commercial Facility Focus
                </div>
              </div>

              {/* Text Copy Area */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-black text-white group-hover:text-sky-400 transition-colors">
                  Commercial {tradeName} Services
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  First impressions matter and operational uptime is critical. We specialize in commercial facility maintenance, large-scale property repairs, and ongoing service plans to keep your business running smoothly.
                </p>
                <div className="space-y-2 text-xs text-slate-400 pt-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Minimized downtime with off-hours work scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Property management & corporate compliance documentation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-8 pb-8">
              <button
                onClick={() => onSelectService()}
                className="w-full py-3.5 px-4 text-sm font-extrabold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Request Commercial Estimate</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Detailed Itemized Services Grid Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Itemized Service Options
          </h3>
        </div>

        {/* Services Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header row: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-sky-500/40 group-hover:bg-sky-500/10 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge ? (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      {service.badge}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400 font-semibold px-2.5 py-1 bg-slate-800/80 rounded-lg border border-slate-700">
                      From <strong className="text-white font-bold">${service.basePrice}</strong>
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h4 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                  {service.name}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Extended Details */}
                <div className="pt-2 text-xs text-slate-400 flex items-start space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{service.fullDesc}</span>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-5 border-t border-slate-800/80 mt-6">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-sky-400 bg-sky-500/10 hover:bg-sky-500 hover:text-slate-950 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Select Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
