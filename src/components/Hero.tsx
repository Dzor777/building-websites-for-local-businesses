import React, { useState } from 'react';
import { Star, Send, Check } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    propertyType: 'residential',
    agreed: true
  });

  const isAgencyRoot = siteConfig.slug === 'dylan-roth-web-services';
  const isRoofing = siteConfig.niche.toLowerCase().includes('roof');
  const isHVAC = siteConfig.niche.toLowerCase().includes('hvac') || siteConfig.niche.toLowerCase().includes('air conditioning');
  const isPlumbing = siteConfig.niche.toLowerCase().includes('plumb') || siteConfig.niche.toLowerCase().includes('drain');

  const tradeNoun = isAgencyRoot
    ? 'LOCAL CONTRACTORS & SERVICE TRADES'
    : isRoofing 
    ? 'ROOFERS' 
    : isHVAC 
    ? 'HVAC TECHNICIANS' 
    : isPlumbing
    ? 'PLUMBERS'
    : 'CONTRACTORS';

  const eyebrowText = isAgencyRoot
    ? 'MODERN WEBSITES FOR LOCAL TEXAS CONTRACTORS & TRADES'
    : `EXPERT ${tradeNoun}. HONEST PRICING. EXCEPTIONAL RESULTS.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone) return;

    try {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '014ce85a-f806-45da-978d-a0e22f5fd503',
          subject: isAgencyRoot
            ? `⚡ Agency Mockup Request: ${formData.firstName} ${formData.lastName} (${formData.propertyType})`
            : `⚡ Hero Consultation Lead: ${siteConfig.name} (${siteConfig.city}, TX)`,
          from_name: 'PainterBros Layout Hero Form',
          client_name: siteConfig.name,
          prospect_name: `${formData.firstName} ${formData.lastName}`.trim(),
          prospect_phone: formData.phone,
          prospect_email: formData.email,
          zip_code: formData.zipCode,
          property_type: formData.propertyType
        })
      });
    } catch (err) {
      // Ignore in demo
    }

    setSubmitted(true);
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-slate-950">
      {/* Background Image / Ambient Overlay (PainterBros Full Bleed) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 filter brightness-75 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('${
            isAgencyRoot
              ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'
              : isRoofing 
              ? 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1600'
              : isHVAC
              ? 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600'
              : 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1600'
          }')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (60%): Massive Headline & Stats */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Upper Eyebrow Tag */}
            <div className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
              {eyebrowText}
            </div>

            {/* Massive Bold Main Headline */}
            {isAgencyRoot ? (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                TURN MORE LOCAL SEARCHES <br />
                <span className="text-amber-400 uppercase">INTO HIGH-PAYING CALLS.</span> <br />
                MODERN WEBSITES FOR TEXAS TRADES
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                YOUR HOME OR BUSINESS <br />
                <span className="text-amber-400 uppercase">PERFECTLY SERVICED.</span> <br />
                GET A FREE ESTIMATE TODAY
              </h1>
            )}

            {/* Sub-description */}
            {isAgencyRoot ? (
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                We build, host, and manage fast mobile-first websites for plumbers, roofers, HVAC pros, electricians, and local contractors across Texas. Flat monthly rates, interactive quote calculators, 24-48 hour turnaround, and zero technical hassle.
              </p>
            ) : (
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                {siteConfig.description} Upfront flat-rate pricing, 100% satisfaction guaranteed, and fast dispatch across {siteConfig.city} and surrounding areas.
              </p>
            )}

            {/* Stats Bar */}
            {isAgencyRoot ? (
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">24-48h</div>
                  <div className="text-xs text-slate-400 font-medium">Launch Turnaround</div>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <div className="text-2xl sm:text-3xl font-black text-white flex items-center space-x-1">
                    <span>5.0★</span>
                  </div>
                  <div className="flex text-amber-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-xs text-slate-400 font-medium">Mobile Optimized</div>
                </div>
              </div>
            ) : (
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">500+</div>
                  <div className="text-xs text-slate-400 font-medium">Google Reviews</div>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <div className="text-2xl sm:text-3xl font-black text-white flex items-center space-x-1">
                    <span>{siteConfig.reviews.googleRating}★</span>
                  </div>
                  <div className="flex text-amber-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <div className="text-2xl sm:text-3xl font-black text-white">100k+</div>
                  <div className="text-xs text-slate-400 font-medium">Jobs Completed</div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column (40%): Embedded Hero Consultation Form Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl bg-slate-900/90 backdrop-blur-md">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Consultation Request Received!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.firstName}</strong>. A representative from <strong className="text-sky-400">{siteConfig.name}</strong> will contact you at <strong className="text-sky-400">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {isAgencyRoot ? (
                    <div className="text-center space-y-1 mb-4">
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                        Claim Your Free 48-Hour
                      </h3>
                      <div className="text-xl sm:text-2xl font-black text-sky-400 uppercase">
                        Custom Website Mockup
                      </div>
                      <p className="text-xs text-slate-400 pt-1">
                        See how your trade business looks on mobile before spending a dime.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center space-y-1 mb-4">
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                        Work With Our Experts &amp; Schedule Your
                      </h3>
                      <div className="text-xl sm:text-2xl font-black text-sky-400 uppercase">
                        FREE Consultation
                      </div>
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  {/* Email Field */}
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />

                  {/* Phone & Zip Code Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                    <input
                      type="text"
                      placeholder={isAgencyRoot ? "City, TX *" : "Zip Code"}
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  {/* Trade / Property Type */}
                  {isAgencyRoot ? (
                    <div>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500"
                      >
                        <option value="Plumbing">Plumbing &amp; Drain Services</option>
                        <option value="Roofing">Roofing &amp; Restoration</option>
                        <option value="HVAC">HVAC &amp; Air Conditioning</option>
                        <option value="Electrical">Electrical Services</option>
                        <option value="Landscaping">Landscaping &amp; Tree Care</option>
                        <option value="Painting">Painting &amp; Drywall</option>
                        <option value="Remodeling">Remodeling &amp; General Contracting</option>
                        <option value="Other Trade">Other Local Service Trade</option>
                      </select>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-6 py-1 text-xs text-slate-300">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyType"
                          value="residential"
                          checked={formData.propertyType === 'residential'}
                          onChange={() => setFormData({ ...formData, propertyType: 'residential' })}
                          className="text-sky-500 focus:ring-sky-500"
                        />
                        <span>Residential</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyType"
                          value="commercial"
                          checked={formData.propertyType === 'commercial'}
                          onChange={() => setFormData({ ...formData, propertyType: 'commercial' })}
                          className="text-sky-500 focus:ring-sky-500"
                        />
                        <span>Commercial</span>
                      </label>
                    </div>
                  )}

                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-2 text-[10px] text-slate-400 leading-tight">
                    <input
                      type="checkbox"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="mt-0.5 rounded text-sky-500"
                    />
                    <span>
                      By checking this box, you agree to receiving communications from {siteConfig.name}. We never sell your info.
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-extrabold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-slate-950 fill-slate-950" />
                    <span>{isAgencyRoot ? 'Request Free Live Mockup' : 'Get My Free Quote'}</span>
                  </button>

                  {/* Optional Interactive Estimator Modal Link */}
                  {!isAgencyRoot && (
                    <div className="text-center pt-1">
                      <button
                        type="button"
                        onClick={onOpenQuoteModal}
                        className="text-xs text-amber-400 hover:text-amber-300 underline font-semibold transition-colors"
                      >
                        Or calculate instant itemized price estimate →
                      </button>
                    </div>
                  )}
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
