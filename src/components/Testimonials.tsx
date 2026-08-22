import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';


export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 relative bg-slate-900/60 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            Verified Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Loved by Homes & Businesses Across {siteConfig.city}
          </h2>
          <p className="text-slate-400 text-base">
            See what your neighbors have to say about our fast 24/7 service and honest upfront pricing.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="max-w-md mx-auto p-6 rounded-2xl glass-card border border-amber-500/20 text-center space-y-2 mb-12 shadow-xl">
          <div className="flex items-center justify-center text-amber-400 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400" />
            ))}
          </div>
          <div className="text-4xl font-black text-white">{siteConfig.reviews.googleRating} / 5.0</div>
          <div className="text-xs text-slate-400 font-medium">
            Based on {siteConfig.reviews.totalReviews}+ Verified Google Reviews
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.reviews.items.map((review) => (
            <div
              key={review.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 space-x-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">{review.date}</span>
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{review.author}</div>
                  <div className="text-xs text-sky-400">{review.serviceUsed}</div>
                </div>
                {review.verified && (
                  <div className="flex items-center space-x-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
