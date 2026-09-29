import React from 'react';
import { Phone, Calculator } from 'lucide-react';
import { siteConfig } from '../config/site';

interface StickyMobileFooterProps {
  onOpenQuoteModal: () => void;
}

export const StickyMobileFooter: React.FC<StickyMobileFooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-slate-700/60 p-3 shadow-2xl backdrop-blur-xl bg-[#1c2430]/95">
      <div className="flex items-center space-x-2">
        <button
          onClick={onOpenQuoteModal}
          className="flex-1 py-3 px-3 rounded-xl bg-[#253040] hover:bg-[#2e3b4e] border border-slate-700/60 text-slate-100 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-all"
        >
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>Get Estimate</span>
        </button>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-sky-500/25 transition-all live-pulse"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call {siteConfig.formattedPhone}</span>
        </a>
      </div>
    </div>
  );
};
