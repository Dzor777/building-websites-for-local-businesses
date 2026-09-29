import React from 'react';
import { ShieldCheck, ArrowLeft, CheckCircle2, FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1c2430] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-6">
          <a
            href="./"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
          <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Legal Terms</span>
          </div>
        </div>

        {/* Title & Headline */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>Dylan Roth Web Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service & Subscription Agreement
          </h1>
          <p className="text-sm text-slate-400">
            Last Updated: August 2026 | Standard Website-as-a-Service (WaaS) Agreement
          </p>
        </div>

        {/* Legal Terms Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-8 border border-slate-700/60 shadow-2xl leading-relaxed text-sm text-slate-300">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 text-xs font-black flex items-center justify-center">1</span>
              <span>Services Included by Tier</span>
            </h2>
            <div className="pl-8 space-y-3">
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                <div className="font-bold text-white text-sm flex items-center justify-between">
                  <span>Tier 1 (Basic Package)</span>
                  <span className="text-sky-400 font-semibold">$300 Setup + $150/mo</span>
                </div>
                <p className="text-xs text-slate-300">
                  Full custom mobile website design, 99.9% uptime hosting, SSL security certificate, local Google SEO schema, and up to 4 scheduled quarterly content updates per year (business hours, photos, pricing text, new basic services).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                <div className="font-bold text-white text-sm flex items-center justify-between">
                  <span>Tier 2 (Standard Package)</span>
                  <span className="text-sky-400 font-semibold">$500 Setup + $300/mo</span>
                </div>
                <p className="text-xs text-slate-300">
                  Everything in Tier 1, plus interactive quote calculators, GA4 analytics tracking, and up to 1 scheduled content update every 2 months (6 updates per year).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                <div className="font-bold text-white text-sm flex items-center justify-between">
                  <span>Tier 3 (Enterprise Package)</span>
                  <span className="text-sky-400 font-semibold">$1,000 Setup + $600/mo</span>
                </div>
                <p className="text-xs text-slate-300">
                  Everything in Tier 2, plus custom CRM/booking webhook integrations, instant lead notifications, active local citation management, and monthly content updates.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start space-x-2 mt-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                <span>
                  <strong>Out-of-Scope Updates:</strong> Out-of-scope or structural updates outside your plan's schedule are available upon request for a separate negotiated fee.
                </span>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-slate-700/60 pt-6">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 text-xs font-black flex items-center justify-center">2</span>
              <span>Pricing & Billing</span>
            </h2>
            <p className="text-slate-300 pl-8">
              Your selected plan rate (billed as a one-time setup fee + recurring monthly subscription) automatically processes every 30 days via card/ACH.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-slate-700/60 pt-6">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 text-xs font-black flex items-center justify-center">3</span>
              <span>Term Commitment & Cancellation</span>
            </h2>
            <p className="text-slate-300 pl-8">
              Initial 6-month minimum commitment for Client (to cover initial custom design, setup, and deployment costs), converting to month-to-month thereafter. Client may cancel after the initial 6-month term with 30 days advance written notice. Provider reserves the right to terminate or discontinue services at any time during or after the initial term upon providing 30 days written notice (or immediately in the event of non-payment or material breach).
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-slate-700/60 pt-6">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 text-xs font-black flex items-center justify-center">4</span>
              <span>Ownership</span>
            </h2>
            <p className="text-slate-300 pl-8">
              You retain 100% ownership of your business brand, domain name, logos, and custom copy content. Underlying site frameworks and code remain licensed under your active subscription.
            </p>
          </section>



        </div>

        {/* Footer info */}
        <div className="text-center text-xs text-slate-400 pt-4">
          © {new Date().getFullYear()} Dylan Roth Web Services. All rights reserved.
        </div>

      </div>
    </div>
  );
};
