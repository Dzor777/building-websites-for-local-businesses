import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileFooter } from './components/StickyMobileFooter';
import { TermsPage } from './components/TermsPage';
import { QualityCommitment } from './components/QualityCommitment';
import { DemoSwitcherBar } from './components/DemoSwitcherBar';
import { ShowcasePortal } from './components/ShowcasePortal';
import { PricingTiers } from './components/PricingTiers';
import { siteConfig } from './config/site';
import { injectSEOHead } from './lib/seo';
import type { ServiceItem } from './config/site';
import { X } from 'lucide-react';

export function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showPricingModal, setShowPricingModal] = useState<boolean>(false);

  const isTermsPage = typeof window !== 'undefined' && 
    (window.location.search.includes('page=terms') || window.location.search.includes('client=terms') || window.location.search.includes('terms=true'));

  useEffect(() => {
    // Inject dynamic LocalBusiness schema & update SEO meta title for active client
    injectSEOHead();
  }, []);

  if (isTermsPage) {
    return <TermsPage />;
  }

  const handleOpenQuoteModal = (service?: ServiceItem) => {
    if (service) {
      setSelectedServiceId(service.id);
    }
    const calcElement = document.getElementById('calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isAgencyRoot = siteConfig.slug === 'dylan-roth-web-services';

  return (
    <div className="min-h-screen bg-[#1c2430] text-slate-100 flex flex-col font-sans">
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {isAgencyRoot ? (
          <ShowcasePortal />
        ) : (
          <>
            <DemoSwitcherBar onOpenPricing={() => setShowPricingModal(true)} />
            
            <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
            
            <QualityCommitment onOpenQuoteModal={() => handleOpenQuoteModal()} />
            
            <Services onSelectService={(service) => handleOpenQuoteModal(service)} />
            
            <QuoteCalculator initialServiceId={selectedServiceId} />

            <PricingTiers />

            <ContactSection />
          </>
        )}
      </main>

      <Footer />

      {!isAgencyRoot && (
        <StickyMobileFooter onOpenQuoteModal={() => handleOpenQuoteModal()} />
      )}

      {/* Interactive Pricing Modal for Demo Viewers */}
      {showPricingModal && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-6xl w-full max-h-[92vh] overflow-y-auto bg-slate-950 rounded-2xl border border-sky-500/40 p-4 sm:p-8 shadow-2xl custom-scrollbar">
            <button
              onClick={() => setShowPricingModal(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors shadow-lg"
              title="Close Pricing Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <PricingTiers isModal={true} onClose={() => setShowPricingModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
