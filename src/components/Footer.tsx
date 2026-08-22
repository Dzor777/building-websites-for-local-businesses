import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { siteConfig } from '../config/site';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-lg">
                A
              </div>
              <div className="font-extrabold text-white text-base">{siteConfig.name}</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center space-x-1 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>State Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Our Services</a></li>
              <li><a href="#calculator" className="hover:text-sky-400 transition-colors">Instant Estimate</a></li>
              <li><a href="#reviews" className="hover:text-sky-400 transition-colors">Google Reviews ({siteConfig.reviews.googleRating}★)</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">24/7 Dispatch</a></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.services.slice(0, 4).map((s) => (
                <li key={s.id} className="hover:text-sky-400 transition-colors">
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2 text-xs">
              <a href={`tel:${siteConfig.phoneRaw}`} className="block font-bold text-amber-400 hover:underline">
                Call {siteConfig.formattedPhone}
              </a>
              <div>{siteConfig.email}</div>
              <div>{siteConfig.address.street}, {siteConfig.city}, {siteConfig.state}</div>
              <div className="text-sky-400 font-medium">{siteConfig.hours.time}</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center space-x-1 text-slate-400">
            <span>Built & Managed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by Local WaaS Platform</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
