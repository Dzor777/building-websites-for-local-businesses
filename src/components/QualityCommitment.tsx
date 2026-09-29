import React from 'react';
import { Star, Quote, ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

interface QualityCommitmentProps {
  onOpenQuoteModal: () => void;
}

export const QualityCommitment: React.FC<QualityCommitmentProps> = ({ onOpenQuoteModal }) => {
  const isRoofing = siteConfig.niche.toLowerCase().includes('roof');
  const isHVAC = siteConfig.niche.toLowerCase().includes('hvac') || siteConfig.niche.toLowerCase().includes('air conditioning');
  const tradeTitle = isRoofing ? 'Roofing & Restoration Contractors' : isHVAC ? 'HVAC & Climate Contractors' : 'Plumbing & Drain Contractors';

  return (
    <section className="py-24 relative bg-slate-950 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PainterBros Watermark Section Header */}
        <div className="relative text-center mb-16 select-none">
          {/* Faint Background Watermark Text */}
          <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 uppercase tracking-widest leading-none pointer-events-none opacity-40">
            PROFESSIONAL CONTRACTORS
          </div>
          {/* Overlay Section Title */}
          <h2 className="-mt-6 sm:-mt-10 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight relative z-10">
            Professional {tradeTitle}
          </h2>
        </div>

        {/* Panoramic Banner Image Block with Accent Overlay (PainterBros Style) */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl mb-16 h-64 sm:h-80 md:h-96 group">
          <img
            src={
              isRoofing
                ? "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1600"
                : isHVAC
                ? "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600"
                : "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1600"
            }
            alt={tradeTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Accent Overlay Lines (PainterBros Image 2 Graphic Feature) */}
          <div className="absolute bottom-6 right-6 hidden sm:flex space-x-2">
            <div className="w-16 h-3 bg-sky-500/80 rounded-full blur-[1px]" />
            <div className="w-24 h-3 bg-amber-400/80 rounded-full blur-[1px]" />
            <div className="w-12 h-3 bg-blue-600/80 rounded-full blur-[1px]" />
          </div>
        </div>

        {/* Bottom Split Row: Left Commitment Copy vs Right Featured Review Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (60%): Quality Description & CTA Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Committed to Exceptional Quality & Outstanding Results
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Transform your property with <strong className="text-white">{siteConfig.name}</strong>. Our professional team delivers residential and commercial {siteConfig.niche} services tailored to your exact property specifications. From minor repairs to full-scale installations, we provide unmatched attention to detail and commitment to quality.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every craftsman on our team is trained, experienced, and insured—bringing both skill and professionalism to your project. With transparent flat-rate estimates and premium materials, we make sure your job is completed on time and on budget.
            </p>

            {/* Dual CTA Buttons (PainterBros Image 2 Bottom Left) */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 text-sm font-extrabold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg transition-all flex items-center space-x-2"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {siteConfig.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column (40%): Featured Customer Review Card (PainterBros Image 2 Bottom Right) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-8 border border-slate-800 shadow-xl bg-slate-900/80 relative overflow-hidden">
              {/* Background Quotation Mark Watermark */}
              <Quote className="absolute top-4 right-4 w-20 h-20 text-slate-800/40 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                {/* 5 Gold Stars */}
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <h4 className="text-lg font-bold text-white">
                  Hear From Our Satisfied Customers
                </h4>

                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{siteConfig.reviews.items && siteConfig.reviews.items.length > 0 ? siteConfig.reviews.items[0].comment : `The team at ${siteConfig.name} was very knowledgeable and answered all of my questions, making me feel very comfortable working with them.`}"
                </p>

                <div className="pt-2 text-xs font-semibold text-slate-400 border-t border-slate-800">
                  – {siteConfig.reviews.items && siteConfig.reviews.items.length > 0 ? siteConfig.reviews.items[0].author : 'Ben Jones'}, Verified Customer in {siteConfig.city}, TX
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
