import React, { useState } from 'react';
import { Phone, Menu, X, Shield, Droplets, Flame, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';



interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      {/* Top Utility Header Bar (PainterBros Style) */}
      <div className="bg-slate-950/90 border-b border-slate-800 py-2 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-6">
            {siteConfig.slug === 'dylan-roth-web-services' ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center space-x-2 text-white font-bold hover:text-sky-400 transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.email}</span>
              </a>
            ) : (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center space-x-2 text-white font-bold hover:text-sky-400 transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform">
                  <Phone className="w-3.5 h-3.5 fill-slate-950" />
                </div>
                <span>{siteConfig.formattedPhone}</span>
              </a>
            )}

            <div className="hidden sm:flex items-center space-x-2 text-slate-300 font-medium border-l border-slate-800 pl-6">
              <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span>{siteConfig.slug === 'dylan-roth-web-services' ? 'Serving All Texas Trades' : `${siteConfig.city}, TX`}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {siteConfig.slug === 'dylan-roth-web-services' ? (
              <span className="px-3 py-1 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 rounded-md">
                All Local Texas Trades
              </span>
            ) : (
              <a
                href="#contact"
                className="px-3 py-1 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center space-x-1 shadow-sm"
              >
                <MapPin className="w-3 h-3 text-slate-950" />
                <span>Location Map</span>
              </a>
            )}

            {siteConfig.slug !== 'dylan-roth-web-services' && (
              <a
                href="#contact"
                className="hidden md:inline-block font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Customer Login
              </a>
            )}
          </div>
        </div>
      </div>


      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform overflow-hidden p-1">
            {siteConfig.logoUrl && !siteConfig.logoUrl.includes('google.com/s2/favicons') ? (
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.name}
                className="w-full h-full object-contain bg-white/10 rounded-lg p-0.5"
              />
            ) : (
              <span className="font-extrabold text-white text-lg flex items-center justify-center">
                {siteConfig.niche.toLowerCase().includes('plumb') || siteConfig.niche.toLowerCase().includes('drain') ? (
                  <Droplets className="w-5 h-5 text-white" />
                ) : siteConfig.niche.toLowerCase().includes('hvac') || siteConfig.niche.toLowerCase().includes('air') ? (
                  <Flame className="w-5 h-5 text-amber-300" />
                ) : siteConfig.niche.toLowerCase().includes('roof') || siteConfig.niche.toLowerCase().includes('storm') ? (
                  <Shield className="w-5 h-5 text-emerald-300" />
                ) : (
                  <span>{siteConfig.name.charAt(0).toUpperCase()}</span>
                )}
              </span>
            )}
          </div>
          <div>
            <div className="font-extrabold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
              {siteConfig.name}
            </div>
            <div className="text-xs text-slate-400 font-medium">{siteConfig.tagline}</div>
          </div>
        </a>



        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          {siteConfig.slug === 'dylan-roth-web-services' ? (
            <>
              <a href="#" className="hover:text-sky-400 transition-colors">Home</a>
              <a href="./?page=terms" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold">Terms of Service</a>
            </>
          ) : (
            <>
              <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
              <a href="#calculator" className="hover:text-sky-400 transition-colors">Instant Estimate</a>
              <a href="#reviews" className="hover:text-sky-400 transition-colors">Reviews ({siteConfig.reviews.googleRating}★)</a>
              <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
            </>
          )}
        </nav>

        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {siteConfig.slug !== 'dylan-roth-web-services' && (
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2.5 text-sm font-semibold text-slate-200 bg-[#253040] hover:bg-[#2e3b4e] border border-slate-700/60 rounded-xl transition-all"
            >
              Get Estimate
            </button>
          )}

          <a
            href={`mailto:${siteConfig.email}`}
            className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 rounded-xl shadow-lg shadow-sky-500/25 transition-all flex items-center space-x-2 live-pulse"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>Email Us</span>
          </a>
        </div>

        {/* Mobile Hamburger & Action Button */}
        <div className="md:hidden flex items-center space-x-2">
          {siteConfig.slug === 'dylan-roth-web-services' ? (
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2.5 text-white bg-sky-500 rounded-xl flex items-center justify-center shadow-md shadow-sky-500/20"
              aria-label="Email Us"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          ) : (
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-2.5 text-white bg-sky-500 rounded-xl flex items-center justify-center shadow-md shadow-sky-500/20"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5 fill-white" />
            </a>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-300 hover:text-white rounded-xl focus:outline-none bg-[#253040] border border-slate-700/60"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-slate-700/60 px-4 pt-3 pb-6 space-y-3">
          {siteConfig.slug === 'dylan-roth-web-services' ? (
            <>
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-200 font-medium hover:text-sky-400"
              >
                Home
              </a>
              <a
                href="./?page=terms"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-amber-400 font-medium hover:text-amber-300"
              >
                Terms of Service
              </a>
            </>
          ) : (
            <>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-200 font-medium hover:text-sky-400"
              >
                Services
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-200 font-medium hover:text-sky-400"
              >
                Instant Estimate
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-slate-200 font-medium hover:text-sky-400"
              >
                Reviews ({siteConfig.reviews.googleRating}★)
              </a>
              <a
                href="./?page=terms"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-amber-400 font-medium hover:text-amber-300"
              >
                Terms of Service
              </a>
            </>
          )}

          <div className="pt-2 flex flex-col space-y-2">
            {siteConfig.slug !== 'dylan-roth-web-services' && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-sm font-semibold text-slate-200 bg-[#253040] rounded-xl border border-slate-700/60"
              >
                Request Free Estimate
              </button>
            )}
            
            {siteConfig.slug === 'dylan-roth-web-services' ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Email {siteConfig.email}</span>
              </a>
            ) : (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call {siteConfig.formattedPhone}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

