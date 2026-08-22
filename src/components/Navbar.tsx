import React, { useState } from 'react';
import { Phone, Menu, X, Shield, Clock } from 'lucide-react';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-sky-600/20 border-b border-sky-500/20 py-1.5 px-4 text-xs text-sky-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.hours.time}</span>
            </span>
            <span className="hidden sm:flex items-center space-x-1 border-l border-sky-500/30 pl-4">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.city}, {siteConfig.state} & Surrounding Areas</span>
            </span>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1"
          >
            <span>Call Now:</span>
            <span className="underline">{siteConfig.formattedPhone}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <span className="text-xl font-black text-white">A</span>
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
          <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
          <a href="#calculator" className="hover:text-sky-400 transition-colors">Instant Estimate</a>
          <a href="#reviews" className="hover:text-sky-400 transition-colors">Reviews ({siteConfig.reviews.googleRating}★)</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </nav>

        {/* Call to Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onOpenQuoteModal}
            className="px-4 py-2 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
          >
            Get Estimate
          </button>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 rounded-lg shadow-lg shadow-sky-500/25 transition-all flex items-center space-x-2 animate-pulse"
          >
            <Phone className="w-4 h-4" />
            <span>{siteConfig.formattedPhone}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-2">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="p-2 text-white bg-sky-600 rounded-lg flex items-center justify-center"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-slate-800 px-4 pt-3 pb-6 space-y-3">
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
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-sky-400"
          >
            Contact
          </a>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-slate-800 rounded-lg border border-slate-700"
            >
              Request Free Estimate
            </button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-sky-600 rounded-lg flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call {siteConfig.formattedPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
