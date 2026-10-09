import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Trees, Scissors, Brush, Droplets } from 'lucide-react';
import { siteConfig } from '../config/site';

interface QuoteCalculatorProps {
  initialServiceId?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialServiceId }) => {
  const defaultService = siteConfig.services[0]?.id || 'service-1';
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServiceId ? [initialServiceId] : [defaultService]
  );
  
  // Generic / Commercial options
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [commercialSqFt, setCommercialSqFt] = useState<number>(3500);
  const [urgency, setUrgency] = useState<'standard' | 'emergency'>('standard');

  // Trade Specific State Options
  // Tree cutting
  const [treeSize, setTreeSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [stumpGrindingOption, setStumpGrindingOption] = useState<'none' | 'one' | 'multiple'>('none');

  // Lawn care
  const [lawnLotSize, setLawnLotSize] = useState<'small' | 'medium' | 'large' | 'acreage'>('medium');
  const [lawnCadence, setLawnCadence] = useState<'weekly' | 'biweekly' | 'onetime'>('weekly');

  // Painting
  const [paintScope, setPaintScope] = useState<'interior' | 'exterior' | 'both' | 'cabinets'>('interior');
  const [paintRooms, setPaintRooms] = useState<'1-2' | '3-5' | 'whole-home'>('3-5');

  // Pressure Washing
  const [washScope, setWashScope] = useState<'driveway' | 'house' | 'bundle' | 'full-property'>('driveway');

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const nicheLower = siteConfig.niche.toLowerCase();
  const isRoofing = nicheLower.includes('roof');
  const isHVAC = nicheLower.includes('hvac') || nicheLower.includes('air conditioning');
  const isElectrical = nicheLower.includes('electr');
  const isPainting = nicheLower.includes('paint');
  const isLawnCare = nicheLower.includes('lawn') || nicheLower.includes('landscape') || nicheLower.includes('mow');
  const isTree = nicheLower.includes('tree');
  const isPressureWash = nicheLower.includes('pressure') || nicheLower.includes('wash');

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // 1. Base Services Price Sum
  const rawBase = selectedServices.reduce((acc, serviceId) => {
    const s = siteConfig.services.find(item => item.id === serviceId);
    return acc + (s ? s.basePrice : 0);
  }, 0);

  // 2. Trade-Specific Adjustments
  let tradeAdjustment = 0;

  if (isTree) {
    if (treeSize === 'medium') tradeAdjustment += 180;
    if (treeSize === 'large') tradeAdjustment += 450;
    if (stumpGrindingOption === 'one') tradeAdjustment += 150;
    if (stumpGrindingOption === 'multiple') tradeAdjustment += 275;
  } else if (isLawnCare) {
    if (lawnLotSize === 'medium') tradeAdjustment += 15;
    if (lawnLotSize === 'large') tradeAdjustment += 45;
    if (lawnLotSize === 'acreage') tradeAdjustment += 95;
    if (lawnCadence === 'biweekly') tradeAdjustment += 10;
    if (lawnCadence === 'onetime') tradeAdjustment += 120;
  } else if (isPainting) {
    if (paintScope === 'exterior') tradeAdjustment += 450;
    if (paintScope === 'both') tradeAdjustment += 850;
    if (paintScope === 'cabinets') tradeAdjustment += 350;
    if (paintRooms === '3-5') tradeAdjustment += 300;
    if (paintRooms === 'whole-home') tradeAdjustment += 750;
  } else if (isPressureWash) {
    if (washScope === 'house') tradeAdjustment += 120;
    if (washScope === 'bundle') tradeAdjustment += 220;
    if (washScope === 'full-property') tradeAdjustment += 380;
  } else {
    // Standard Commercial / Area adjustment for HVAC, Roofing, Plumbing, Electrical
    if (propertyType === 'commercial') {
      if (isRoofing) {
        tradeAdjustment = Math.round(commercialSqFt * 45);
      } else if (isHVAC) {
        const tons = commercialSqFt / 500;
        tradeAdjustment = Math.round(tons * 220);
      } else if (isElectrical) {
        tradeAdjustment = 280;
      } else {
        tradeAdjustment = Math.round((commercialSqFt / 1000) * 95);
      }
    }
  }

  const emergencyFee = urgency === 'emergency' ? 100 : 0;
  const estimatedTotal = Math.max(45, Math.round(rawBase + tradeAdjustment + emergencyFee));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '014ce85a-f806-45da-978d-a0e22f5fd503',
          subject: `⚡ Demo Quote Test: ${siteConfig.name} (${siteConfig.city}, ${siteConfig.state})`,
          from_name: 'WaaS Demo Preview System',
          client_name: siteConfig.name,
          client_city: siteConfig.city,
          prospect_name: formData.name,
          prospect_phone: formData.phone,
          estimated_total: `$${estimatedTotal}`,
          property_type: propertyType,
          urgency: urgency,
          selected_services: selectedServices.join(', ')
        })
      });
    } catch (err) {
      // Ignore network errors in demo mode
    }

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
            Get an Instant {siteConfig.niche} Estimate in 30 Seconds
          </h2>
          <p className="text-slate-400 text-base">
            Select your service requirements below for an upfront price estimate. No surprise diagnostic fees guaranteed.
          </p>
        </div>

        {/* Estimator Card Container */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {submitted ? (
            <div className="py-10 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Estimate Request Received!</h3>
                <p className="text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. A representative from <strong className="text-sky-400">{siteConfig.name}</strong> will be contacting you at <strong className="text-sky-400">{formData.phone}</strong> shortly to confirm your service.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 max-w-sm mx-auto text-xs text-slate-400">
                Estimated Upfront Total: <strong className="text-emerald-400 font-bold text-base">${estimatedTotal}</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-800/50 max-w-md mx-auto text-xs text-sky-300 italic">
                💡 <strong>Demo Mode Preview</strong>: On your live production website, this quote request is instantly dispatched to your cell phone via SMS within 30 seconds!
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
                  <span>Step 1: Select Required Services</span>
                  <span className="text-xs text-slate-400 font-normal">Choose 1 or more options</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
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
                          <div className="text-[11px] text-slate-400">${service.basePrice > 0 ? `${service.basePrice}+` : 'Custom Quote'}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Trade-Specific Project Calibration */}
              <div className="pt-6 border-t border-slate-800 space-y-6">
                <label className="text-sm font-bold text-slate-200 uppercase tracking-wider block">
                  Step 2: Project Specifications
                </label>

                {/* CASE A: TREE SERVICE */}
                {isTree && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase flex items-center gap-1.5">
                        <Trees className="w-3.5 h-3.5 text-emerald-400" />
                        Tree Height / Complexity
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'small', label: '< 25 ft' },
                          { id: 'medium', label: '25–50 ft' },
                          { id: 'large', label: '50+ ft (Hazard)' }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setTreeSize(opt.id as any)}
                            className={`py-2 px-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                              treeSize === opt.id
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-slate-800/60 text-slate-300 border-slate-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase">Stump Grinding</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'none', label: 'None' },
                          { id: 'one', label: '1 Stump' },
                          { id: 'multiple', label: '2+ Stumps' }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setStumpGrindingOption(opt.id as any)}
                            className={`py-2 px-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                              stumpGrindingOption === opt.id
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-slate-800/60 text-slate-300 border-slate-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* CASE B: LAWN CARE */}
                {isLawnCare && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase flex items-center gap-1.5">
                        <Scissors className="w-3.5 h-3.5 text-emerald-400" />
                        Property Lot Size
                      </label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { id: 'small', label: '< 0.25 Ac' },
                          { id: 'medium', label: '0.25–0.5 Ac' },
                          { id: 'large', label: '0.5–1 Ac' },
                          { id: 'acreage', label: '1+ Acre' }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setLawnLotSize(opt.id as any)}
                            className={`py-2 px-1 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                              lawnLotSize === opt.id
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-slate-800/60 text-slate-300 border-slate-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase">Service Schedule</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'weekly', label: 'Weekly' },
                          { id: 'biweekly', label: 'Bi-Weekly' },
                          { id: 'onetime', label: '1-Time Clean' }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setLawnCadence(opt.id as any)}
                            className={`py-2 px-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                              lawnCadence === opt.id
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-slate-800/60 text-slate-300 border-slate-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* CASE C: PAINTING */}
                {isPainting && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase flex items-center gap-1.5">
                        <Brush className="w-3.5 h-3.5 text-emerald-400" />
                        Painting Scope
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'interior', label: 'Interior Only' },
                          { id: 'exterior', label: 'Exterior Weather Shield' },
                          { id: 'both', label: 'Full Interior + Exterior' },
                          { id: 'cabinets', label: 'Cabinet Spraying' }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setPaintScope(opt.id as any)}
                            className={`py-2 px-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                              paintScope === opt.id
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-slate-800/60 text-slate-300 border-slate-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase">Estimated Size / Rooms</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: '1-2', label: '1–2 Rooms' },
                          { id: '3-5', label: '3–5 Rooms' },
                          { id: 'whole-home', label: 'Whole Home (6+)' }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setPaintRooms(opt.id as any)}
                            className={`py-2 px-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                              paintRooms === opt.id
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-slate-800/60 text-slate-300 border-slate-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* CASE D: PRESSURE WASHING */}
                {isPressureWash && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                      Surface Cleaning Package
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'driveway', label: 'Driveway & Sidewalk' },
                        { id: 'house', label: 'House Siding SoftWash' },
                        { id: 'bundle', label: 'Driveway + House Bundle' },
                        { id: 'full-property', label: 'Full Property + Roof' }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setWashScope(opt.id as any)}
                          className={`py-2 px-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                            washScope === opt.id
                              ? 'bg-cyan-600 text-white border-cyan-500'
                              : 'bg-slate-800/60 text-slate-300 border-slate-700'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* CASE E: GENERAL / HVAC / ROOFING / PLUMBING / ELECTRICAL */}
                {!isTree && !isLawnCare && !isPainting && !isPressureWash && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                          Commercial
                        </button>
                      </div>

                      {propertyType === 'commercial' && (
                        <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-800/50 space-y-2 transition-all mt-2">
                          <div className="flex justify-between items-center text-[11px] font-semibold">
                            <span className="text-sky-300">
                              {isRoofing ? 'Commercial Roof Area (Squares):' : isHVAC ? 'Building Cooling Sizing (Sq Ft):' : 'Facility Area (Sq Ft):'}
                            </span>
                            <span className="text-emerald-400 font-extrabold text-xs">
                              {isRoofing
                                ? `${commercialSqFt > 100 ? 30 : (commercialSqFt < 10 ? 30 : commercialSqFt)} Squares`
                                : isHVAC
                                ? `${commercialSqFt.toLocaleString()} sq ft (~${Math.round(commercialSqFt / 500)} Tons)`
                                : `${commercialSqFt.toLocaleString()} sq ft`}
                            </span>
                          </div>
                          
                          <input
                            type="range"
                            min={isRoofing ? "10" : "1000"}
                            max={isRoofing ? "100" : "15000"}
                            step={isRoofing ? "5" : "500"}
                            value={isRoofing && commercialSqFt > 100 ? 30 : commercialSqFt}
                            onChange={(e) => setCommercialSqFt(Number(e.target.value))}
                            className="w-full accent-sky-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                          />
                        </div>
                      )}
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
                          Standard Schedule
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
                          Emergency (+$100)
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Step 3: Estimated Price Banner & Contact Inputs */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/80 space-y-6">
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Estimated Upfront Cost</span>
                    <div className="text-3xl font-black text-emerald-400 flex items-baseline space-x-1">
                      <span>${estimatedTotal}</span>
                      <span className="text-xs font-normal text-slate-400"> (Est. upfront)</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 text-center sm:text-right space-y-1">
                    <div className="flex items-center space-x-1 text-sky-400 justify-center sm:justify-end">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Upfront Price Guarantee</span>
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
                      placeholder="(214) 555-0199"
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
                  <span>Lock In This Estimate &amp; Request Callback</span>
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
