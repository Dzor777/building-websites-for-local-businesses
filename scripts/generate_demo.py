import json
import os
import sys
import argparse

def generate_site_config(name, niche, city, state, phone, domain=""):
    formatted_phone = phone
    phone_raw = "+" + "".join(c for c in phone if c.isdigit())
    if not domain:
        domain = name.lower().replace(" ", "").replace("&", "") + ".com"

    clean_niche = niche if niche else "Local Services"

    config_content = f"""export interface ServiceItem {{
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  basePrice: number;
  iconName: string;
  badge?: string;
}}

export interface ReviewItem {{
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  verified: boolean;
}}

export interface SiteConfig {{
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
  address: {{
    street: string;
    city: string;
    state: string;
    zip: string;
    googleMapsEmbedUrl: string;
  }};
  domain: string;
  url: string;
  googleAnalyticsId: string;
  web3FormsAccessKey: string;
  hours: {{
    days: string;
    time: string;
    is24_7: boolean;
  }};
  colors: {{
    primary: string;
    primaryDark: string;
    accent: string;
  }};
  trustBadges: Array<{{
    title: string;
    subtitle: string;
    icon: string;
  }}>;
  services: ServiceItem[];
  reviews: {{
    googleRating: number;
    totalReviews: number;
    items: ReviewItem[];
  }};
  faqs: Array<{{
    question: string;
    answer: string;
  }}>;
}}

export const siteConfig: SiteConfig = {{
  name: "{name}",
  legalName: "{name} LLC",
  tagline: "24/7 Licensed Top-Rated {clean_niche} in {city}, {state}",
  description: "Fast, reliable, and upfront local {clean_niche.lower()} services. Upfront pricing and 100% satisfaction guaranteed.",
  niche: "{clean_niche}",
  city: "{city}",
  state: "{state}",
  phone: "{formatted_phone}",
  formattedPhone: "{formatted_phone}",
  phoneRaw: "{phone_raw}",
  email: "contact@{domain}",
  address: {{
    street: "100 Main Street",
    city: "{city}",
    state: "{state}",
    zip: "78701",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.60742111166!2d-97.82883015!3d30.2747682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc0391%3A0x5d7f6e1b975d6093!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  }},
  domain: "{domain}",
  url: "https://{domain}",
  googleAnalyticsId: "G-DEMO999",
  web3FormsAccessKey: "YOUR_KEY",
  hours: {{
    days: "Monday - Sunday",
    time: "24/7 Service Available",
    is24_7: true,
  }},
  colors: {{
    primary: "#0284c7",
    primaryDark: "#0369a1",
    accent: "#f59e0b",
  }},
  trustBadges: [
    {{ title: "Fast Arrival", subtitle: "Under 30 minutes", icon: "Clock" }},
    {{ title: "Licensed & Insured", subtitle: "Fully verified pros", icon: "ShieldCheck" }},
    {{ title: "Upfront Pricing", subtitle: "No surprise charges", icon: "DollarSign" }},
    {{ title: "100% Guaranteed", subtitle: "Satisfaction warranty", icon: "Award" }},
  ],
  services: [
    {{
      id: "emergency-service",
      name: "Emergency " + "{clean_niche} Service",
      shortDesc: "Fast response dispatch for urgent residential and commercial issues.",
      fullDesc: "Available 24 hours a day with complete diagnostic inspection.",
      basePrice: 149,
      iconName: "Wrench",
      badge: "24/7 Available",
    }},
    {{
      id: "repair-maintenance",
      name: "{clean_niche} Repair & Tune-Up",
      shortDesc: "Comprehensive repair, troubleshooting, and preventative maintenance.",
      fullDesc: "Extend system lifespan and avoid unexpected breakdowns.",
      basePrice: 199,
      iconName: "Droplets",
    }},
    {{
      id: "system-install",
      name: "Full System Replacement & Upgrade",
      shortDesc: "Energy-efficient installation with multi-year warranty coverage.",
      fullDesc: "Top-tier brand equipment installed by senior technicians.",
      basePrice: 499,
      iconName: "Flame",
    }}
  ],
  reviews: {{
    googleRating: 4.9,
    totalReviews: 128,
    items: [
      {{
        id: "r1",
        author: "Sarah Jenkins",
        rating: 5,
        date: "3 days ago",
        comment: "Called {name} for an emergency repair. They arrived within 25 minutes and solved the issue quickly. Outstanding work!",
        serviceUsed: "Emergency Service",
        verified: true,
      }},
      {{
        id: "r2",
        author: "Robert Miller",
        rating: 5,
        date: "2 weeks ago",
        comment: "Very professional team. Honest upfront estimate with zero pressure.",
        serviceUsed: "System Upgrade",
        verified: true,
      }}
    ],
  }},
  faqs: [
    {{
      question: "Do you offer emergency service on weekends?",
      answer: "Yes! We operate 24 hours a day, 7 days a week including holidays.",
    }},
    {{
      question: "Are your technicians licensed?",
      answer: "Every member of our team is fully licensed, insured, and background-checked.",
    }}
  ],
}};
"""
    return config_content

def main():
    parser = argparse.ArgumentParser(description="Generate customized demo siteConfig.ts for prospect")
    parser.add_argument("--name", default="Lone Star HVAC & Air", help="Business name")
    parser.add_argument("--niche", default="HVAC & Air Conditioning", help="Business niche")
    parser.add_argument("--city", default="Round Rock", help="City")
    parser.add_argument("--state", default="TX", help="State")
    parser.add_argument("--phone", default="(512) 555-0144", help="Phone number")

    args = parser.parse_args()

    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    target_path = os.path.join(project_root, "src", "config", "site.ts")

    content = generate_site_config(args.name, args.niche, args.city, args.state, args.phone)

    with open(target_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"[DEMO GENERATOR] Successfully updated site.ts for target: '{args.name}'")
    print(f"Target location: {target_path}")

if __name__ == "__main__":
    main()
