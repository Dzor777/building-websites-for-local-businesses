import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';


interface QuoteCalculatorProps {
  initialServiceId?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialServiceId }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['drain-cleaning']
  );
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [urgency, setUrgency] = useState<'standard' | 'emergency'>('standard');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate Instant Price Estimate
  const rawBase = selectedServices.reduce((acc, serviceId) => {
    const s = siteConfig.services.find(item => item.id === serviceId);
    return acc + (s ? s.basePrice : 0);
  }, 0);

  const multiplierProp = propertyType === 'commercial' ? 1.3 : 1.0;
  const emergencyFee = urgency === 'emergency' ? 75 : 0;
  const estimatedTotal = Math.round(rawBase * multiplierProp + emergencyFee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Price Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get an Instant Estimate in 30 Seconds
          </h2>
          <p className="text-slate-400 text-base">
            Select your service requirements below for an upfront estimate. No hidden fees guaranteed.
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Estimate Request Received!</h3>
                <p className="text-slate-300 max-w-md mx-auto text-sm">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our on-call technician will call you at <strong className="text-sky-400">{formData.phone}</strong> within 15 minutes to confirm your appointment.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 max-w-sm mx-auto text-xs text-slate-400">
                Estimated Total: <strong className="text-emerald-400 font-bold text-base">${estimatedTotal}</strong>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              >
                Calculate Another Estimate
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Choose Services */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between">
                  <span>Step 1: Select Services Needed</span>
                  <span className="text-xs text-slate-400 font-normal">Select 1 or more</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {siteConfig.services.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 select-none ${
                          isSelected
                            ? 'bg-sky-500/15 border-sky-500/60 shadow-md shadow-sky-500/10'
                            : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'bg-sky-500 text-white' : 'border border-slate-600'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold text-white">{service.name}</div>
                          <div className="text-[11px] text-slate-400">${service.basePrice}+</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Options (Property & Urgency) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                {/* Property Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase">Property Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPropertyType('residential')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        propertyType === 'residential'
                          ? 'bg-sky-600 text-white border-sky-500'
                          : 'bg-slate-800/60 text-slate-300 border-slate-700'
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('commercial')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        propertyType === 'commercial'
                          ? 'bg-sky-600 text-white border-sky-500'
                          : 'bg-slate-800/60 text-slate-300 border-slate-700'
                      }`}
                    >
                      Commercial (+30%)
                    </button>
                  </div>
                </div>

                {/* Urgency */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase">Service Urgency</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setUrgency('standard')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        urgency === 'standard'
                          ? 'bg-sky-600 text-white border-sky-500'
                          : 'bg-slate-800/60 text-slate-300 border-slate-700'
                      }`}
                    >
                      Standard Appointment
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('emergency')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        urgency === 'emergency'
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                          : 'bg-slate-800/60 text-slate-300 border-slate-700'
                      }`}
                    >
                      24/7 Emergency (+$75)
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3: Estimated Price Banner & Contact Inputs */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/80 space-y-6">
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Estimated Upfront Cost</span>
                    <div className="text-3xl font-black text-emerald-400 flex items-baseline space-x-1">
                      <span>${estimatedTotal}</span>
                      <span className="text-xs font-normal text-slate-400"> (Est. total)</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 text-center sm:text-right space-y-1">
                    <div className="flex items-center space-x-1 text-sky-400 justify-center sm:justify-end">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Price Guarantee</span>
                    </div>
                    <div>No obligation • On-site verification</div>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(512) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Lock In This Estimate & Request Callback</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
