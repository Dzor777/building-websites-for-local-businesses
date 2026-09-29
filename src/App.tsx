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
import { siteConfig } from './config/site';
import { injectSEOHead } from './lib/seo';
import type { ServiceItem } from './config/site';

export function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
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
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
        
        {!isAgencyRoot && (
          <>
            <QualityCommitment onOpenQuoteModal={() => handleOpenQuoteModal()} />
            <Services onSelectService={(service) => handleOpenQuoteModal(service)} />
            <QuoteCalculator initialServiceId={selectedServiceId} />

            <ContactSection />
          </>
        )}
      </main>

      <Footer />

      {!isAgencyRoot && (
        <StickyMobileFooter onOpenQuoteModal={() => handleOpenQuoteModal()} />
      )}
    </div>
  );
}



export default App;
