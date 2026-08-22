import { clientRegistry } from './clients';

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  basePrice: number;
  iconName: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  verified: boolean;
}

export interface SiteConfig {
  slug?: string;
  name: string;
  legalName: string;

  tagline: string;
  description: string;
  niche: string;
  city: string;
  state: string;
  phone: string;
  formattedPhone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    googleMapsEmbedUrl: string;
  };
  domain: string;
  url: string;
  googleAnalyticsId: string;
  web3FormsAccessKey: string;
  hours: {
    days: string;
    time: string;
    is24_7: boolean;
  };
  colors: {
    primary: string;
    primaryDark: string;
    accent: string;
  };
  trustBadges: Array<{
    title: string;
    subtitle: string;
    icon: string;
  }>;
  services: ServiceItem[];
  reviews: {
    googleRating: number;
    totalReviews: number;
    items: ReviewItem[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

// Function to resolve active site config dynamically from URL query string (?client=slug)
export function getActiveSiteConfig(): SiteConfig {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const clientParam = params.get('client');
    if (clientParam && clientRegistry[clientParam]) {
      return clientRegistry[clientParam];
    }
  }
  
  // Default to first client (mckinney-pro-plumbing) if no param supplied
  const defaultSlug = Object.keys(clientRegistry)[0] || 'mckinney-pro-plumbing';
  return clientRegistry[defaultSlug];
}

// Export initial siteConfig reference
export const siteConfig: SiteConfig = getActiveSiteConfig();
