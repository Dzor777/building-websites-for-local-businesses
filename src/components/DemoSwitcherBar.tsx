import React, { useState } from 'react';
import { tradeDemosList } from '../config/tradeDemos';
import { siteConfig } from '../config/site';
import { Sparkles, Layers, ChevronDown, Tag, ArrowRight, X, Eye } from 'lucide-react';

interface DemoSwitcherBarProps {
  onOpenPricing?: () => void;
}

export const DemoSwitcherBar: React.FC<DemoSwitcherBarProps> = ({ onOpenPricing }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Find currently active demo matching siteConfig
  const currentDemo = tradeDemosList.find(
    d => d.previewSlug === siteConfig.slug || d.id === siteConfig.slug || d.aliases.includes(siteConfig.slug || '')
  ) || tradeDemosList[0];

  const handleSelectDemo = (demoId: string) => {
    const basePath = window.location.pathname;
    window.location.href = `${basePath}?demo=${demoId}`;
  };

  const handleGoToPortal = () => {
    const basePath = window.location.pathname;
    window.location.href = basePath;
  };

  if (isMinimized) {
    return (
      <aside aria-label="Demo site controls" className="fixed top-24 right-3 sm:right-6 z-40 animate-in fade-in slide-in-from-top-2">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/95 text-sky-400 border border-sky-500/50 shadow-2xl backdrop-blur-xl text-xs font-bold hover:bg-slate-800 hover:text-sky-300 transition-all hover:scale-105"
          title="Expand Demo Switcher"
        >
          <Layers className="w-4 h-4 text-sky-400 animate-pulse" />
          <span>Demo: {currentDemo.trade.split(' ')[0]}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Demo site controls" className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-3xl animate-in fade-in slide-in-from-top-3">
      <div className="bg-slate-950/95 border border-sky-500/40 backdrop-blur-xl rounded-2xl shadow-2xl p-2 sm:px-4 sm:py-2.5 text-white transition-all">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Active Demo Label & Dropdown Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-[11px] font-bold uppercase tracking-wider shrink-0">
              <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
              <span className="hidden xs:inline">Interactive</span> Demo
            </span>

            {/* Dropdown Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-sky-500/50 text-xs sm:text-sm font-semibold text-slate-100 hover:text-white transition-all shadow-inner"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full shrink-0" 
                  style={{ backgroundColor: currentDemo.color }} 
                />
                <span className="truncate max-w-[130px] sm:max-w-[200px]">
                  {currentDemo.trade}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-sky-400' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div 
                  className="absolute left-0 mt-2 w-72 sm:w-80 rounded-xl bg-slate-900/98 border border-slate-700 shadow-2xl backdrop-blur-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 mb-1 flex justify-between items-center">
                    <span>Select Trade Demo (8 Total)</span>
                    <button 
                      onClick={handleGoToPortal}
                      className="text-sky-400 hover:text-sky-300 font-semibold lowercase flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" /> view hub
                    </button>
                  </div>
                  
                  <div className="max-h-80 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                    {tradeDemosList.map((demo) => {
                      const isActive = demo.previewSlug === currentDemo.previewSlug;
                      return (
                        <button
                          key={demo.id}
                          onClick={() => {
                            setIsOpen(false);
                            handleSelectDemo(demo.id);
                          }}
                          className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center gap-2.5 transition-all ${
                            isActive
                              ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40'
                              : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          <div 
                            className="w-2.5 h-2.5 rounded-full shrink-0" 
                            style={{ backgroundColor: demo.color }} 
                          />
                          <div className="min-w-0 flex-1">
                            <div className="truncate font-medium">{demo.name}</div>
                            <div className="text-[10px] text-slate-400 truncate">{demo.trade}</div>
                          </div>
                          {isActive && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500 text-slate-950 font-bold shrink-0">
                              Active
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Pricing Button & Hub Link & Dismiss */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {onOpenPricing && (
              <button
                type="button"
                onClick={onOpenPricing}
                className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-105"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>Pricing Plans</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleGoToPortal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
            >
              <span>Showcase Portal</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Minimize Demo Bar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </aside>
  );
};
