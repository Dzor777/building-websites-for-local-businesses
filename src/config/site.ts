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
  logoUrl?: string;
  logoIcon?: string;



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
// Generic default agency template when visiting root URL without ?client= parameter
const genericAgencyConfig: SiteConfig = {
  slug: "dylan-roth-web-services",
  name: "Dylan Roth Web Services",
  legalName: "Dylan Roth Web Services LLC",
  domain: "dzor777.github.io",
  url: "https://dzor777.github.io/building-websites-for-local-businesses/",
  googleAnalyticsId: "",
  web3FormsAccessKey: "",
  tagline: "High-Converting Mobile Websites for Local Texas Contractors",
  description: "We build, host, and maintain 5-star mobile websites for local service contractors across all of Texas, including plumbers, roofers, HVAC, electricians, painters, and remodelers. Upfront flat-rate pricing, 24-hour turnaround, and 100% satisfaction guaranteed.",
  niche: "Contractor Web Design & Digital Growth",
  city: "Dallas-Fort Worth",
  state: "TX",
  phone: "roth.dylan777@gmail.com",
  formattedPhone: "roth.dylan777@gmail.com",
  phoneRaw: "roth.dylan777@gmail.com",
  email: "roth.dylan777@gmail.com",

  address: {
    street: "Serving All of Texas",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    googleMapsEmbedUrl: ""
  },
  hours: {
    days: "Mon - Sat",
    time: "Fast Email Response",
    is24_7: true
  },
  trustBadges: [
    { title: "Texas Local", subtitle: "Serving All of Texas", icon: "Shield" },
    { title: "99.9% Uptime SLA", subtitle: "Global CDN Hosting", icon: "Clock" },
    { title: "Flat Monthly Fee", subtitle: "From $150 / month", icon: "DollarSign" },
    { title: "5-Star Quality", subtitle: "Mobile-First Design", icon: "Award" }
  ],
  services: [
    {
      id: "mobile-web-design",
      name: "Mobile Web Design & Hosting",
      shortDesc: "Ultra-fast, mobile-first websites engineered for high call conversion.",
      fullDesc: "Complete mobile web design, global CDN hosting, SSL security, and quarterly content updates.",
      basePrice: 150,
      iconName: "Globe"
    },
    {
      id: "quote-calculators",
      name: "Instant Quote Calculators",
      shortDesc: "Interactive price estimation tools that capture high-intent leads 24/7.",
      fullDesc: "Custom multi-step estimate calculator widgets that text lead details directly to your phone.",
      basePrice: 300,
      iconName: "Calculator"
    },
    {
      id: "google-review-booster",
      name: "Google Review Booster",
      shortDesc: "Automated customer review workflows to boost your Google Map Pack ranking.",
      fullDesc: "Automated SMS/email review request system to collect 5-star Google reviews on autopilot.",
      basePrice: 100,
      iconName: "Star"
    },
    {
      id: "logo-modernization",
      name: "Logo & Brand Modernization",
      shortDesc: "Vector logo redesigns optimized for smartphones, service trucks, and uniforms.",
      fullDesc: "High-resolution vector artwork package (SVG, PNG, EPS) with full commercial copyright ownership.",
      basePrice: 300,
      iconName: "Shield"
    }
  ],

  colors: {
    primary: "#38bdf8",
    primaryDark: "#0284c7",
    accent: "#fbbf24"
  },

  faqs: [
    {
      question: "How fast will my site go live?",
      answer: "Sites go live within 24 to 48 hours after subscribing."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Subscriptions have an initial 6-month commitment, then convert to month-to-month."
    }
  ],
  reviews: {
    googleRating: 5.0,
    totalReviews: 24,

    items: [
      {
        id: "rev-1",
        author: "Mark S.",
        rating: 5,
        date: "1 week ago",
        comment: "Dylan built a fantastic mobile site for our local business. Calls increased immediately!",
        serviceUsed: "Mobile Web Design",
        verified: true
      },
      {
        id: "rev-2",
        author: "David R.",
        rating: 5,
        date: "3 weeks ago",
        comment: "Super fast setup, zero hassle, and upfront flat monthly pricing. Highly recommend!",
        serviceUsed: "Website Hosting & Management",
        verified: true
      }
    ]
  }
};




export function getActiveSiteConfig(): SiteConfig {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const clientParam = params.get('client');
    if (clientParam && clientRegistry[clientParam]) {
      return clientRegistry[clientParam];
    }
    if (clientParam === 'mckinney-pro-plumbing' && clientRegistry['mckinney-plumbing-pro']) {
      return clientRegistry['mckinney-plumbing-pro'];
    }
  }
  
  // Default to generic agency portfolio if no ?client= param supplied
  return genericAgencyConfig;
}


// Export initial siteConfig reference
export const siteConfig: SiteConfig = getActiveSiteConfig();
