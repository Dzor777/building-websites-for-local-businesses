import React from 'react';
import { Droplets, Flame, Search, Wrench, Pipette, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import type { ServiceItem } from '../config/site';


interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Droplets': return <Droplets className="w-6 h-6 text-sky-400" />;
    case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
    case 'Search': return <Search className="w-6 h-6 text-emerald-400" />;
    case 'Wrench': return <Wrench className="w-6 h-6 text-purple-400" />;
    case 'Pipette': return <Pipette className="w-6 h-6 text-blue-400" />;
    case 'Building2': return <Building2 className="w-6 h-6 text-indigo-400" />;
    default: return <Wrench className="w-6 h-6 text-sky-400" />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 relative bg-slate-900/50 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional {siteConfig.niche} <br className="hidden sm:inline" /> For Home & Business
          </h2>
          <p className="text-slate-400 text-base">
            All services performed with upfront flat-rate pricing. No surprise fees.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/40 hover:scale-[1.02] transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-4">
                {/* Header row: Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-sky-500/10 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge ? (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      {service.badge}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium">
                      From <strong className="text-white font-bold">${service.basePrice}</strong>
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Extended Details */}
                <div className="pt-2 text-xs text-slate-400 flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{service.fullDesc}</span>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-6 border-t border-slate-800/80 mt-6">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-2.5 px-4 text-sm font-semibold text-sky-400 bg-sky-500/10 hover:bg-sky-500 hover:text-white border border-sky-500/20 rounded-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
