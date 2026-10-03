import type { SiteConfig } from './site';

export const clientRegistry: Record<string, SiteConfig> = {
  "bewley-plumbing": {
    "slug": "bewley-plumbing",
    "name": "Bewley Plumbing, LLC",
    "legalName": "Bewley Plumbing, LLC",
    "domain": "bewleyplumbing.com",
    "url": "https://www.bewleyplumbing.com",
    "logoIcon": "Droplet",
    "tagline": "McKinney's Trusted Family Plumber Since 1947",
    "description": "75+ years of trusted residential plumbing, slab leak detection, tankless water heater installation, and emergency drain cleaning across McKinney and Collin County.",
    "niche": "Plumbing & Drain Services",
    "city": "McKinney",
    "state": "TX",
    "phone": "(972) 562-0037",
    "formattedPhone": "(972) 562-0037",
    "phoneRaw": "+19725620037",
    "email": "info@bewleyplumbing.com",
    "address": {
      "street": "120 S Tennessee St",
      "city": "McKinney",
      "state": "TX",
      "zip": "75069",
      "googleMapsEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.60742111166!2d-96.6152686!3d33.1972101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c125139049449%3A0xb35a3a290ebce297!2sMcKinney%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency Dispatch",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Family Owned 1947",
        "subtitle": "75+ Years in McKinney",
        "icon": "Award"
      },
      {
        "title": "Licensed Master Plumber",
        "subtitle": "State Certified Pros",
        "icon": "ShieldCheck"
      },
      {
        "title": "24/7 Emergency Dispatch",
        "subtitle": "Under 30 Min Arrival",
        "icon": "Clock"
      },
      {
        "title": "Upfront Flat Pricing",
        "subtitle": "No Surprise Fees",
        "icon": "DollarSign"
      }
    ],
    "services": [
      {
        "id": "emergency-drain-cleaning",
        "name": "Emergency Hydro-Jet Drain Cleaning",
        "shortDesc": "High-pressure hydro-jetting & video camera inspection for clogged main lines.",
        "fullDesc": "Clears grease, roots, and debris from main sewer lines with camera verification.",
        "basePrice": 149,
        "iconName": "Droplet",
        "badge": "24/7 Available"
      },
      {
        "id": "tankless-water-heaters",
        "name": "Tankless & Gas Water Heater Setup",
        "shortDesc": "Same-day water heater replacement, flushing, and high-efficiency tankless upgrades.",
        "fullDesc": "Rinnai & Navien certified installations for endless hot water.",
        "basePrice": 299,
        "iconName": "Flame"
      },
      {
        "id": "slab-leak-repair",
        "name": "Slab Leak & Gas Line Repair",
        "shortDesc": "Non-destructive acoustic leak detection under concrete slabs and inside walls.",
        "fullDesc": "Pinpoints foundation leaks early to prevent catastrophic structural damage.",
        "basePrice": 199,
        "iconName": "Search"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 318,
      "items": [
        {
          "id": "r1",
          "author": "David W.",
          "rating": 5,
          "date": "2 days ago",
          "comment": "Bewley Plumbing came out on a Sunday night when our main sewer backed up. Arrived in 25 mins. Honest, upfront, and super clean work!",
          "serviceUsed": "Emergency Hydro-Jet Drain Cleaning",
          "verified": true
        },
        {
          "id": "r2",
          "author": "Sarah M.",
          "rating": 5,
          "date": "1 week ago",
          "comment": "Installed our tankless water heater in McKinney. Lowered our energy bills immediately. Best local plumbers in North Texas!",
          "serviceUsed": "Tankless & Gas Water Heater Setup",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Do you provide emergency plumbing service in McKinney on weekends?",
        "answer": "Yes! Bewley Plumbing provides 24/7 emergency dispatch 365 days a year."
      }
    ]
  },
  "performance-roofing-dfw": {
    "slug": "performance-roofing-dfw",
    "name": "Performance Roofing of DFW",
    "legalName": "Performance Roofing of DFW LLC",
    "domain": "performanceroofingtx.com",
    "url": "https://performanceroofingtx.com",
    "logoIcon": "Home",
    "tagline": "McKinney's Premier Roofing & Storm Restoration Specialists",
    "description": "HAAG-certified storm damage restoration, free drone roof inspections, insurance claim assistance, and architectural shingle replacements across DFW.",
    "niche": "Roofing & Restoration",
    "city": "McKinney",
    "state": "TX",
    "phone": "(972) 360-8042",
    "formattedPhone": "(972) 360-8042",
    "phoneRaw": "+19723608042",
    "email": "sales@performanceroofingtx.com",
    "address": {
      "street": "200 Industrial Blvd",
      "city": "McKinney",
      "state": "TX",
      "zip": "75069",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Saturday",
      "time": "24/7 Emergency Storm Tarping",
      "is24_7": true
    },
    "colors": {
      "primary": "#ea580c",
      "primaryDark": "#c2410c",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "HAAG Certified",
        "subtitle": "Roof Inspectors",
        "icon": "ShieldCheck"
      },
      {
        "title": "Free Drone Audits",
        "subtitle": "100% Free Inspection",
        "icon": "Search"
      },
      {
        "title": "Insurance Experts",
        "subtitle": "Direct Claim Help",
        "icon": "DollarSign"
      },
      {
        "title": "30-Year Warranty",
        "subtitle": "Owens Corning Pro",
        "icon": "Award"
      }
    ],
    "services": [
      {
        "id": "drone-roof-inspection",
        "name": "Free Drone Storm & Hail Inspection",
        "shortDesc": "High-resolution aerial photographic roof inspection for hail and wind damage.",
        "fullDesc": "Complete damage report provided directly for insurance claim filing.",
        "basePrice": 0,
        "iconName": "Search",
        "badge": "100% Free"
      },
      {
        "id": "shingle-replacement",
        "name": "Architectural Shingle Replacement",
        "shortDesc": "Full roof replacements backed by 30-year manufacturer warranties.",
        "fullDesc": "Synthetic underlayment, ice/water shields, and impact-resistant shingles.",
        "basePrice": 4500,
        "iconName": "Home"
      },
      {
        "id": "emergency-tarping",
        "name": "Emergency Roof Tarping & Repair",
        "shortDesc": "24/7 rapid tarping to prevent water intrusion after hail storms.",
        "fullDesc": "Immediate response team protects your home interior from active roof leaks.",
        "basePrice": 249,
        "iconName": "ShieldCheck"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 210,
      "items": [
        {
          "id": "r1",
          "author": "Chris B.",
          "rating": 5,
          "date": "1 week ago",
          "comment": "Handled our entire insurance claim after the McKinney hail storm. New roof installed in 1 day!",
          "serviceUsed": "Free Drone Storm & Hail Inspection",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Will insurance cover my roof replacement after a storm?",
        "answer": "Yes, we work directly with all major insurance adjusters to maximize coverage."
      }
    ]
  },
  "cross-air-heating-cooling": {
    "slug": "cross-air-heating-cooling",
    "name": "Cross Air Heating & Cooling",
    "legalName": "Cross Air Heating & Cooling LLC",
    "domain": "crossairwecare.com",
    "url": "https://crossairwecare.com",
    "logoIcon": "Wind",
    "tagline": "Melissa & North Texas HVAC Specialists",
    "description": "Fast 24/7 emergency AC repair, high-SEER heat pump installation, and seasonal maintenance tune-ups for Melissa and surrounding areas.",
    "niche": "HVAC & Air Conditioning",
    "city": "Melissa",
    "state": "TX",
    "phone": "(945) 220-8181",
    "formattedPhone": "(945) 220-8181",
    "phoneRaw": "+19452208181",
    "email": "service@crossairwecare.com",
    "address": {
      "street": "1500 Central Pkwy",
      "city": "Melissa",
      "state": "TX",
      "zip": "75454",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency AC Repair",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "EPA Certified",
        "subtitle": "Licensed HVAC Techs",
        "icon": "ShieldCheck"
      },
      {
        "title": "Same-Day Dispatch",
        "subtitle": "Under 45 Min Arrival",
        "icon": "Clock"
      },
      {
        "title": "Upfront Estimate",
        "subtitle": "No Hidden Fees",
        "icon": "DollarSign"
      },
      {
        "title": "100% Comfort Guarantee",
        "subtitle": "Cooling Warranty",
        "icon": "Award"
      }
    ],
    "services": [
      {
        "id": "ac-repair",
        "name": "Emergency AC & Heat Repair",
        "shortDesc": "Rapid response diagnostic and repair for all major HVAC brands.",
        "fullDesc": "Fully stocked trucks with replacement capacitors, motors, and refrigerants.",
        "basePrice": 129,
        "iconName": "Flame",
        "badge": "Same Day"
      },
      {
        "id": "ac-tune-up",
        "name": "21-Point AC Maintenance Tune-Up",
        "shortDesc": "Comprehensive seasonal inspection, coil cleaning, and refrigerant charge check.",
        "fullDesc": "Prevents sudden summer breakdowns and reduces monthly electric bills.",
        "basePrice": 99,
        "iconName": "Wrench"
      },
      {
        "id": "system-replacement",
        "name": "High-SEER AC & Heat Pump Install",
        "shortDesc": "Energy Star high-efficiency system replacement with 10-year warranty.",
        "fullDesc": "Top brand Carrier & Trane systems installed by certified technicians.",
        "basePrice": 2499,
        "iconName": "Wind"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 164,
      "items": [
        {
          "id": "r1",
          "author": "Amanda K.",
          "rating": 5,
          "date": "4 days ago",
          "comment": "AC died during a 104\u00b0 Texas summer day. Cross Air arrived in 30 mins and fixed the capacitor. Lifesavers!",
          "serviceUsed": "Emergency AC & Heat Repair",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Do you offer emergency AC repair on weekends?",
        "answer": "Yes, our technicians are on call 24/7 throughout Melissa and North Texas."
      }
    ]
  },
  "banner-roofing-construction": {
    "slug": "banner-roofing-construction",
    "name": "Banner Roofing & Construction",
    "legalName": "Banner Roofing & Construction LLC",
    "domain": "banner-roofing.com",
    "url": "https://banner-roofing.com",
    "logoIcon": "Home",
    "tagline": "Veteran-Owned Anna Roofing & Storm Restoration",
    "description": "Veteran-owned local roofing contractors specializing in hail damage claims, shingle replacement, and gutter installation in Anna, TX.",
    "niche": "Roofing & Restoration",
    "city": "Anna",
    "state": "TX",
    "phone": "(682) 207-1586",
    "formattedPhone": "(682) 207-1586",
    "phoneRaw": "+16822071586",
    "email": "info@banner-roofing.com",
    "address": {
      "street": "400 Powhatan St",
      "city": "Anna",
      "state": "TX",
      "zip": "75409",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Saturday",
      "time": "24/7 Storm Response",
      "is24_7": true
    },
    "colors": {
      "primary": "#ea580c",
      "primaryDark": "#c2410c",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Veteran Owned",
        "subtitle": "Honest Service",
        "icon": "Award"
      },
      {
        "title": "Licensed Roofers",
        "subtitle": "State Certified",
        "icon": "ShieldCheck"
      },
      {
        "title": "Insurance Support",
        "subtitle": "Direct Adjuster Help",
        "icon": "DollarSign"
      },
      {
        "title": "30-Year Warranty",
        "subtitle": "Quality Shingles",
        "icon": "Home"
      }
    ],
    "services": [
      {
        "id": "storm-audit",
        "name": "Free Hail Storm Roof Inspection",
        "shortDesc": "Complete photographic roof inspection report for storm claims.",
        "fullDesc": "Identifies missing shingles, granule loss, and soft spots.",
        "basePrice": 0,
        "iconName": "Search",
        "badge": "Free Audit"
      },
      {
        "id": "shingle-roofing",
        "name": "Architectural Shingle Roofing",
        "shortDesc": "Heavy-duty 30-year shingle roof replacements.",
        "fullDesc": "Complete tear-off, synthetic underlayment, and ridge vent setup.",
        "basePrice": 4200,
        "iconName": "Home"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 98,
      "items": [
        {
          "id": "r1",
          "author": "Jason P.",
          "rating": 5,
          "date": "1 week ago",
          "comment": "Great veteran-owned roofing company. Replaced our roof quickly after storm damage.",
          "serviceUsed": "Architectural Shingle Roofing",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "How long does a typical roof replacement take?",
        "answer": "Most residential roof replacements are completed in just 1 to 2 days."
      }
    ]
  },
  "murley-plumbing": {
    "slug": "murley-plumbing",
    "name": "Murley Plumbing",
    "legalName": "Murley Plumbing LLC",
    "domain": "murleyplumbing.com",
    "url": "https://www.murleyplumbing.com",
    "logoIcon": "Droplet",
    "tagline": "Anna & Collin County Master Plumbers",
    "description": "Trusted local plumbing repair, water heater installation, slab leak detection, and drain jetting serving Anna, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Anna",
    "state": "TX",
    "phone": "(972) 548-0799",
    "formattedPhone": "(972) 548-0799",
    "phoneRaw": "+19725480799",
    "email": "billing@murleyplumbing.com",
    "address": {
      "street": "305 E Finley Blvd",
      "city": "Anna",
      "state": "TX",
      "zip": "75409",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency Service",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Master Plumber",
        "subtitle": "State Licensed",
        "icon": "ShieldCheck"
      },
      {
        "title": "24/7 Dispatch",
        "subtitle": "Rapid Arrival",
        "icon": "Clock"
      },
      {
        "title": "Flat Rates",
        "subtitle": "Upfront Estimates",
        "icon": "DollarSign"
      },
      {
        "title": "100% Guarantee",
        "subtitle": "Quality Workmanship",
        "icon": "Award"
      }
    ],
    "services": [
      {
        "id": "drain-cleaning",
        "name": "Emergency Sewer & Drain Jetting",
        "shortDesc": "Clears stubborn sewer line clogs and root intrusions.",
        "fullDesc": "High-pressure water jetting and video line inspection.",
        "basePrice": 149,
        "iconName": "Droplet",
        "badge": "24/7 Available"
      },
      {
        "id": "water-heater",
        "name": "Water Heater Repair & Flush",
        "shortDesc": "Same-day tank and tankless water heater repairs.",
        "fullDesc": "Restores hot water fast with genuine factory parts.",
        "basePrice": 249,
        "iconName": "Flame"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 182,
      "items": [
        {
          "id": "r1",
          "author": "Megan T.",
          "rating": 5,
          "date": "5 days ago",
          "comment": "Murley Plumbing is our go-to in Anna. Super honest, fast response, and clean work!",
          "serviceUsed": "Emergency Sewer & Drain Jetting",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Do you handle main line sewer clogs?",
        "answer": "Yes, we use hydro-jetters and camera lines to clear main sewer clogs completely."
      }
    ]
  },
  "sirius-plumbing-ac": {
    "slug": "sirius-plumbing-ac",
    "name": "Sirius Plumbing & Air Conditioning",
    "legalName": "Sirius Plumbing & Air Conditioning LLC",
    "domain": "siriuspac.com",
    "url": "https://siriuspac.com",
    "logoIcon": "Wind",
    "tagline": "Frisco's Same-Day Plumbing & AC Specialists",
    "description": "Flat-rate pricing, same-day service, and 24/7 emergency response for plumbing, AC repair, and heating in Frisco, TX.",
    "niche": "Plumbing & HVAC",
    "city": "Frisco",
    "state": "TX",
    "phone": "(972) 703-9450",
    "formattedPhone": "(972) 703-9450",
    "phoneRaw": "+19727039450",
    "email": "service@siriuspac.com",
    "address": {
      "street": "8500 Main St",
      "city": "Frisco",
      "state": "TX",
      "zip": "75034",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency Response",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Sirius Guarantee",
        "subtitle": "100% Satisfaction",
        "icon": "Award"
      },
      {
        "title": "Same-Day Service",
        "subtitle": "Plumbing & AC",
        "icon": "Clock"
      },
      {
        "title": "Flat-Rate Pricing",
        "subtitle": "No Hourly Surprises",
        "icon": "DollarSign"
      },
      {
        "title": "Licensed & Insured",
        "subtitle": "Certified Pros",
        "icon": "ShieldCheck"
      }
    ],
    "services": [
      {
        "id": "sirius-ac-repair",
        "name": "Sirius Same-Day AC Repair",
        "shortDesc": "Rapid response diagnostic & cooling system restoration.",
        "fullDesc": "Fully equipped trucks ready to fix compressors, coils, and capacitors.",
        "basePrice": 129,
        "iconName": "Wind",
        "badge": "Same Day"
      },
      {
        "id": "sirius-drain-clear",
        "name": "Main Sewer & Drain Clearing",
        "shortDesc": "Clears stubborn drain clogs with video inspection.",
        "fullDesc": "Hydro-jetting and auger clearing for sinks, showers, and sewer lines.",
        "basePrice": 149,
        "iconName": "Droplet"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 420,
      "items": [
        {
          "id": "r1",
          "author": "Brian K.",
          "rating": 5,
          "date": "2 days ago",
          "comment": "Sirius lives up to their flat-rate pricing promise. Technicians were polite, clean, and fast in Frisco!",
          "serviceUsed": "Sirius Same-Day AC Repair",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "What does flat-rate pricing mean?",
        "answer": "You get an exact quote upfront before any work begins\u2014no surprise hourly fees."
      }
    ]
  },
  "dna-plumbing-plano": {
    "slug": "dna-plumbing-plano",
    "name": "DNA Plumbing Heating & Air",
    "legalName": "DNA Plumbing Heating & Air LLC",
    "domain": "dnaplumbingservices.com",
    "url": "https://www.dnaplumbingservices.com",
    "logoIcon": "Droplet",
    "tagline": "Family-Owned Plano Plumbing & AC Experts",
    "description": "24/7 emergency plumbing, slab leak detection, tankless water heater upgrades, and AC repair serving Plano and Dallas.",
    "niche": "Plumbing & HVAC",
    "city": "Plano",
    "state": "TX",
    "phone": "(214) 817-3755",
    "formattedPhone": "(214) 817-3755",
    "phoneRaw": "+12148173755",
    "email": "info@dnaplumbingservices.com",
    "address": {
      "street": "1200 Preston Rd",
      "city": "Plano",
      "state": "TX",
      "zip": "75093",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency Dispatch",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Family Owned",
        "subtitle": "Local Plano Business",
        "icon": "Award"
      },
      {
        "title": "24/7 Emergency",
        "subtitle": "Rapid Dispatch",
        "icon": "Clock"
      },
      {
        "title": "Licensed Techs",
        "subtitle": "Master Plumbers",
        "icon": "ShieldCheck"
      },
      {
        "title": "Upfront Rates",
        "subtitle": "No Surprise Charges",
        "icon": "DollarSign"
      }
    ],
    "services": [
      {
        "id": "dna-drain-jetting",
        "name": "Hydro Jet Sewer Line Clearing",
        "shortDesc": "High-pressure drain cleaning for severe blockages.",
        "fullDesc": "Restores full flow to clogged main lines with camera proof.",
        "basePrice": 149,
        "iconName": "Droplet",
        "badge": "24/7"
      },
      {
        "id": "dna-ac-fix",
        "name": "Emergency AC Cooling Diagnostic",
        "shortDesc": "Fast cooling diagnostic and component replacement.",
        "fullDesc": "Restores ice-cold air conditioning in your Plano home.",
        "basePrice": 119,
        "iconName": "Wind"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 350,
      "items": [
        {
          "id": "r1",
          "author": "Karen H.",
          "rating": 5,
          "date": "3 days ago",
          "comment": "DNA Plumbing fixed a major slab leak in Plano without tearing up our hardwood floors. Amazing work!",
          "serviceUsed": "Hydro Jet Sewer Line Clearing",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "How fast can a DNA technician reach my Plano home?",
        "answer": "Our local Plano team typically arrives within 30 to 45 minutes for emergency calls."
      }
    ]
  },
  "dallas-plumbing-co": {
    "slug": "dallas-plumbing-co",
    "name": "Dallas Plumbing & AC Co.",
    "legalName": "Dallas Plumbing & AC Co.",
    "domain": "dallasplumbing.com",
    "url": "https://dallasplumbing.com",
    "logoIcon": "Droplet",
    "tagline": "Serving Dallas Metroplex Since 1903",
    "description": "Over 120 years of continuous plumbing, heating, air conditioning, and commercial mechanical services across Dallas & DFW.",
    "niche": "Plumbing & HVAC",
    "city": "Dallas",
    "state": "TX",
    "phone": "(214) 227-9459",
    "formattedPhone": "(214) 227-9459",
    "phoneRaw": "+12142279459",
    "email": "service@dallasplumbing.com",
    "address": {
      "street": "11055 Denis St",
      "city": "Dallas",
      "state": "TX",
      "zip": "75228",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Dispatch",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Est. 1903",
        "subtitle": "120+ Years Excellence",
        "icon": "Award"
      },
      {
        "title": "Licensed Master Pros",
        "subtitle": "Plumbing & HVAC",
        "icon": "ShieldCheck"
      },
      {
        "title": "24/7 Dispatch",
        "subtitle": "Always Available",
        "icon": "Clock"
      },
      {
        "title": "Upfront Guarantee",
        "subtitle": "Flat Rate Quotes",
        "icon": "DollarSign"
      }
    ],
    "services": [
      {
        "id": "dallas-plumbing-repair",
        "name": "Residential & Commercial Plumbing",
        "shortDesc": "Complete drain, sewer, gas line, and water heater service.",
        "fullDesc": "Backed by 120+ years of Dallas craftsmanship.",
        "basePrice": 149,
        "iconName": "Droplet",
        "badge": "Est. 1903"
      },
      {
        "id": "dallas-ac-service",
        "name": "Dallas AC & Heating Maintenance",
        "shortDesc": "High SEER system replacement and emergency repair.",
        "fullDesc": "Keeps your home cool through intense North Texas summers.",
        "basePrice": 129,
        "iconName": "Wind"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 580,
      "items": [
        {
          "id": "r1",
          "author": "Steven G.",
          "rating": 5,
          "date": "1 week ago",
          "comment": "Dallas Plumbing Co has taken care of our family's home for 30 years. Unbeatable tradition and service.",
          "serviceUsed": "Residential & Commercial Plumbing",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Is Dallas Plumbing Co licensed and insured?",
        "answer": "Yes, we hold master plumbing and HVAC contractor licenses with full commercial liability insurance."
      }
    ]
  },
  "baker-brothers-fort-worth": {
    "slug": "baker-brothers-fort-worth",
    "name": "Baker Brothers Plumbing",
    "legalName": "Baker Brothers Plumbing LLC",
    "domain": "bakerbrothersplumbing.com",
    "url": "https://www.bakerbrothersplumbing.com",
    "logoIcon": "Droplet",
    "tagline": "Fort Worth's Trusted Plumbing, AC & Electrical Pros",
    "description": "Baker Brothers 21-point AC tune-up, emergency drain jetting, tankless water heaters, and electrical repair in Fort Worth.",
    "niche": "Plumbing & HVAC",
    "city": "Fort Worth",
    "state": "TX",
    "phone": "(214) 892-2225",
    "formattedPhone": "(214) 892-2225",
    "phoneRaw": "+12148922225",
    "email": "customer_form@bakerbrothersplumbing.com",
    "address": {
      "street": "2700 Camp Bowie Blvd",
      "city": "Fort Worth",
      "state": "TX",
      "zip": "76107",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency Dispatch",
      "is24_7": true
    },
    "colors": {
      "primary": "#ea580c",
      "primaryDark": "#c2410c",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Baker Guarantee",
        "subtitle": "100% Workmanship",
        "icon": "Award"
      },
      {
        "title": "24/7 Dispatch",
        "subtitle": "Fort Worth Metro",
        "icon": "Clock"
      },
      {
        "title": "Licensed Techs",
        "subtitle": "Plumbing & HVAC",
        "icon": "ShieldCheck"
      },
      {
        "title": "Flat Rates",
        "subtitle": "No Surprise Charges",
        "icon": "DollarSign"
      }
    ],
    "services": [
      {
        "id": "baker-tune-up",
        "name": "Baker 21-Point AC & Heat Tune-Up",
        "shortDesc": "Comprehensive HVAC system inspection and coil flush.",
        "fullDesc": "Optimizes system efficiency and extends equipment life.",
        "basePrice": 99,
        "iconName": "Wind",
        "badge": "21-Point Check"
      },
      {
        "id": "baker-drain",
        "name": "Emergency Sewer & Drain Jetting",
        "shortDesc": "Clears stubborn grease and root clogs fast.",
        "fullDesc": "Heavy-duty hydro-jetters clear main lines with camera proof.",
        "basePrice": 149,
        "iconName": "Droplet"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 640,
      "items": [
        {
          "id": "r1",
          "author": "Patricia M.",
          "rating": 5,
          "date": "3 days ago",
          "comment": "Baker Brothers came out in Fort Worth and fixed our AC unit in 45 minutes. Super professional!",
          "serviceUsed": "Baker 21-Point AC & Heat Tune-Up",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Does Baker Brothers service all of Fort Worth?",
        "answer": "Yes, we serve all neighborhoods in Fort Worth, Arlington, and Tarrant County."
      }
    ]
  },
  "abc-home-austin": {
    "slug": "abc-home-austin",
    "name": "ABC Home & Commercial Services",
    "legalName": "ABC Home & Commercial Services LLC",
    "domain": "abchomeandcommercial.com",
    "url": "https://www.abchomeandcommercial.com/austin/",
    "logoIcon": "Droplet",
    "tagline": "Austin's Premier Licensed Plumbing & Home Pros",
    "description": "Licensed Austin plumbing repairs, AC maintenance, leak detection, and home services trusted across Central Texas.",
    "niche": "Plumbing & Home Services",
    "city": "Austin",
    "state": "TX",
    "phone": "(512) 837-9500",
    "formattedPhone": "(512) 837-9500",
    "phoneRaw": "+15128379500",
    "email": "service@abchomeandcommercial.com",
    "address": {
      "street": "9475 E Hwy 290",
      "city": "Austin",
      "state": "TX",
      "zip": "78724",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Dispatch",
      "is24_7": true
    },
    "colors": {
      "primary": "#16a34a",
      "primaryDark": "#15803d",
      "accent": "#84cc16"
    },
    "trustBadges": [
      {
        "title": "Licensed Pros",
        "subtitle": "State Certified",
        "icon": "ShieldCheck"
      },
      {
        "title": "Austin Local",
        "subtitle": "Central Texas Leader",
        "icon": "Award"
      },
      {
        "title": "24/7 Support",
        "subtitle": "Rapid Response",
        "icon": "Clock"
      },
      {
        "title": "Upfront Pricing",
        "subtitle": "Flat Rate Quotes",
        "icon": "DollarSign"
      }
    ],
    "services": [
      {
        "id": "abc-plumbing-fix",
        "name": "Licensed Austin Plumbing Repair",
        "shortDesc": "Comprehensive drain, sewer, pipe leak, and fixture repair.",
        "fullDesc": "Background-checked master plumbers dedicated to 5-star service.",
        "basePrice": 149,
        "iconName": "Droplet",
        "badge": "Austin Local"
      },
      {
        "id": "abc-ac-service",
        "name": "Austin AC & Heat Pump Maintenance",
        "shortDesc": "Seasonal HVAC tune-ups and diagnostic repairs.",
        "fullDesc": "Keeps your cooling system running at peak SEER efficiency.",
        "basePrice": 119,
        "iconName": "Wind"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 720,
      "items": [
        {
          "id": "r1",
          "author": "Mark T.",
          "rating": 5,
          "date": "2 days ago",
          "comment": "ABC is the most reliable home service company in Austin. Always punctual and polite!",
          "serviceUsed": "Licensed Austin Plumbing Repair",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Does ABC provide emergency plumbing in Austin?",
        "answer": "Yes! Our Austin technicians are available 24/7 for urgent plumbing and AC repairs."
      }
    ]
  },
  "brauns-roofing-houston": {
    "slug": "brauns-roofing-houston",
    "name": "Braun Roofing & Construction",
    "legalName": "Braun Roofing & Construction LLC",
    "domain": "braunsroofing.com",
    "url": "https://www.braunsroofing.com",
    "logoIcon": "Home",
    "tagline": "Houston Storm & Commercial Roofing Experts",
    "description": "Houston hurricane storm restoration, flat roof coatings, commercial waterproofing, and shingle replacement.",
    "niche": "Roofing & Restoration",
    "city": "Houston",
    "state": "TX",
    "phone": "(713) 645-0505",
    "formattedPhone": "(713) 645-0505",
    "phoneRaw": "+17136450505",
    "email": "info@braunsroofing.com",
    "address": {
      "street": "630 Swift St",
      "city": "Houston",
      "state": "TX",
      "zip": "77011",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Saturday",
      "time": "24/7 Hurricane Response",
      "is24_7": true
    },
    "colors": {
      "primary": "#ea580c",
      "primaryDark": "#c2410c",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Houston Local",
        "subtitle": "30+ Years Experience",
        "icon": "Award"
      },
      {
        "title": "Licensed Roofers",
        "subtitle": "State Certified",
        "icon": "ShieldCheck"
      },
      {
        "title": "Free Inspection",
        "subtitle": "Storm & Leak Audit",
        "icon": "Search"
      },
      {
        "title": "30-Year Warranty",
        "subtitle": "Commercial & Resi",
        "icon": "Home"
      }
    ],
    "services": [
      {
        "id": "houston-storm-inspection",
        "name": "Free Houston Storm Damage Inspection",
        "shortDesc": "Aerial drone & manual inspection for wind and hurricane damage.",
        "fullDesc": "Detailed photographic claim reports for insurance coverage.",
        "basePrice": 0,
        "iconName": "Search",
        "badge": "Free Inspection"
      },
      {
        "id": "shingle-roof-houston",
        "name": "Architectural Shingle Roof Replacement",
        "shortDesc": "Wind-resistant shingle installations backed by 30-year warranty.",
        "fullDesc": "Synthetic underlayment and reinforced ridge ventilation.",
        "basePrice": 4800,
        "iconName": "Home"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 310,
      "items": [
        {
          "id": "r1",
          "author": "Carlos D.",
          "rating": 5,
          "date": "1 week ago",
          "comment": "Braun Roofing replaced our Houston roof after storm damage. Fast, clean, and top quality!",
          "serviceUsed": "Free Houston Storm Damage Inspection",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Does Braun Roofing handle commercial flat roofs in Houston?",
        "answer": "Yes, we specialize in TPO, EPDM, and liquid reflective roof coatings for commercial buildings."
      }
    ]
  },
  "kidd-roofing-san-antonio": {
    "slug": "kidd-roofing-san-antonio",
    "name": "Kidd Roofing San Antonio",
    "legalName": "Kidd Roofing San Antonio LLC",
    "domain": "kiddroof.com",
    "url": "https://www.kiddroof.com",
    "logoIcon": "Home",
    "tagline": "San Antonio Tile, Metal & Shingle Roofing",
    "description": "Tile, metal, and shingle roofing installation, emergency leak repair, and hail storm restoration in San Antonio.",
    "niche": "Roofing & Restoration",
    "city": "San Antonio",
    "state": "TX",
    "phone": "(866) 671-7791",
    "formattedPhone": "(866) 671-7791",
    "phoneRaw": "+18666717791",
    "email": "info@kiddroof.com",
    "address": {
      "street": "1205 W Loop 1604 N",
      "city": "San Antonio",
      "state": "TX",
      "zip": "78251",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Saturday",
      "time": "24/7 Emergency Tarping",
      "is24_7": true
    },
    "colors": {
      "primary": "#ea580c",
      "primaryDark": "#c2410c",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Kidd Quality",
        "subtitle": "Serving Texas Since 1982",
        "icon": "Award"
      },
      {
        "title": "Licensed & Insured",
        "subtitle": "Tile & Metal Experts",
        "icon": "ShieldCheck"
      },
      {
        "title": "Free Inspection",
        "subtitle": "Hail Audit",
        "icon": "Search"
      },
      {
        "title": "Warranty Backed",
        "subtitle": "Manufacturer Certified",
        "icon": "Home"
      }
    ],
    "services": [
      {
        "id": "sa-roof-audit",
        "name": "Free San Antonio Hail Audit",
        "shortDesc": "Full tile, metal, and shingle damage inspection.",
        "fullDesc": "Prepares documentation for insurance adjuster claims.",
        "basePrice": 0,
        "iconName": "Search",
        "badge": "Free Audit"
      },
      {
        "id": "tile-metal-roof",
        "name": "Tile & Standing Seam Metal Roofing",
        "shortDesc": "Long-lasting Spanish tile & standing seam metal roof installs.",
        "fullDesc": "Superior heat reflection and hurricane wind resistance.",
        "basePrice": 5200,
        "iconName": "Home"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 280,
      "items": [
        {
          "id": "r1",
          "author": "Elena R.",
          "rating": 5,
          "date": "4 days ago",
          "comment": "Kidd Roofing installed a beautiful metal roof on our San Antonio home. Excellent craftsmanship!",
          "serviceUsed": "Tile & Standing Seam Metal Roofing",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Are metal roofs more energy efficient in San Antonio?",
        "answer": "Yes! Standing seam metal roofs reflect solar radiant heat, lowering summer cooling costs up to 25%."
      }
    ]
  },
  "blackrock-plumbing": {
    "slug": "blackrock-plumbing",
    "name": "BlackRock Plumbing Company",
    "legalName": "BlackRock Plumbing Company LLC",
    "domain": "blackrockplumbingtx.com",
    "url": "https://blackrockplumbingtx.com",
    "logoIcon": "Droplet",
    "tagline": "Heavy Duty Plumbing & Hydro Jetting in Melissa",
    "description": "Heavy-duty sewer jetting, whole house re-piping, tankless water heaters, and slab leak repair in Melissa, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Melissa",
    "state": "TX",
    "phone": "(469) 772-5766",
    "formattedPhone": "(469) 772-5766",
    "phoneRaw": "+14697725766",
    "email": "service@blackrockplumbingtx.com",
    "address": {
      "street": "2100 Fannin Rd",
      "city": "Melissa",
      "state": "TX",
      "zip": "75454",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency Response",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "BlackRock Quality",
        "subtitle": "Master Plumbers",
        "icon": "Award"
      },
      {
        "title": "24/7 Response",
        "subtitle": "Melissa & Collin Co.",
        "icon": "Clock"
      },
      {
        "title": "Licensed & Insured",
        "subtitle": "State Verified",
        "icon": "ShieldCheck"
      },
      {
        "title": "Upfront Rates",
        "subtitle": "No Surprise Fees",
        "icon": "DollarSign"
      }
    ],
    "services": [
      {
        "id": "blackrock-jetting",
        "name": "Heavy Duty Sewer Line Jetting",
        "shortDesc": "Clears stubborn grease, sludge, and tree root blockages.",
        "fullDesc": "High-pressure 4000 PSI hydro-jetting clears main lines completely.",
        "basePrice": 149,
        "iconName": "Droplet",
        "badge": "24/7"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 84,
      "items": [
        {
          "id": "r1",
          "author": "Todd M.",
          "rating": 5,
          "date": "1 week ago",
          "comment": "BlackRock cleared our clogged main sewer line in Melissa in 30 minutes. Super clean job!",
          "serviceUsed": "Heavy Duty Sewer Line Jetting",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Do you provide video camera sewer inspections?",
        "answer": "Yes, we run HD color camera lines to inspect pipe condition before and after jetting."
      }
    ]
  },
  "jasons-airtex-hvac": {
    "slug": "jasons-airtex-hvac",
    "name": "Jason Airtex HVAC",
    "legalName": "Jason Airtex HVAC LLC",
    "domain": "jasonsairtex.com",
    "url": "https://www.jasonsairtex.com",
    "logoIcon": "Wind",
    "tagline": "Anna & North Texas High-SEER AC Specialists",
    "description": "Emergency compressor repair, High-SEER AC replacement, and seasonal heat pump tune-ups in Anna, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Anna",
    "state": "TX",
    "phone": "(972) 285-3700",
    "formattedPhone": "(972) 285-3700",
    "phoneRaw": "+19722853700",
    "email": "jasonsairtex@gmail.com",
    "address": {
      "street": "500 S Interurban St",
      "city": "Anna",
      "state": "TX",
      "zip": "75409",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency AC Repair",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Airtex Certified",
        "subtitle": "Licensed Techs",
        "icon": "ShieldCheck"
      },
      {
        "title": "Same-Day Fix",
        "subtitle": "Anna & Collin Co.",
        "icon": "Clock"
      },
      {
        "title": "Flat Pricing",
        "subtitle": "No Surprise Costs",
        "icon": "DollarSign"
      },
      {
        "title": "Comfort Guarantee",
        "subtitle": "100% Guaranteed",
        "icon": "Award"
      }
    ],
    "services": [
      {
        "id": "airtex-ac-fix",
        "name": "Airtex High-SEER AC Repair",
        "shortDesc": "Rapid response diagnostic & cooling system restoration.",
        "fullDesc": "Fully equipped service vans ready for emergency compressor and coil fixes.",
        "basePrice": 129,
        "iconName": "Wind",
        "badge": "Same Day"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 112,
      "items": [
        {
          "id": "r1",
          "author": "Laura S.",
          "rating": 5,
          "date": "3 days ago",
          "comment": "Jason Airtex saved us during a heatwave in Anna. Fast, friendly, and honest upfront pricing!",
          "serviceUsed": "Airtex High-SEER AC Repair",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "How often should I tune up my AC system in Anna?",
        "answer": "We recommend a tune-up twice a year\u2014once in spring for cooling and once in fall for heating."
      }
    ]
  },
  "augerpros-plumbing": {
    "slug": "augerpros-plumbing",
    "name": "AugerPros Plumbing",
    "legalName": "AugerPros Plumbing LLC",
    "domain": "augerprosplumbing.com",
    "url": "https://augerpros.com",
    "logoIcon": "Droplet",
    "tagline": "McKinney's Drain & Sewer Clearing Experts",
    "description": "Camera sewer line inspection, hydro-jet drain cleaning, slab leak repair, and gas line testing in McKinney.",
    "niche": "Plumbing & Drain Services",
    "city": "McKinney",
    "state": "TX",
    "phone": "(214) 206-6580",
    "formattedPhone": "(214) 206-6580",
    "phoneRaw": "+12142066580",
    "email": "contact@augerpros.com",
    "address": {
      "street": "1700 W Virginia St",
      "city": "McKinney",
      "state": "TX",
      "zip": "75069",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Dispatch",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "AugerPros Techs",
        "subtitle": "Master Plumbers",
        "icon": "ShieldCheck"
      },
      {
        "title": "Rapid Dispatch",
        "subtitle": "Under 30 Min Arrival",
        "icon": "Clock"
      },
      {
        "title": "Upfront Rates",
        "subtitle": "No Surprise Charges",
        "icon": "DollarSign"
      },
      {
        "title": "Guaranteed Clean",
        "subtitle": "Camera Verified",
        "icon": "Award"
      }
    ],
    "services": [
      {
        "id": "auger-jetting",
        "name": "AugerPros Hydro Jetting & Camera Inspection",
        "shortDesc": "Clears stubborn grease and root blockages from sewer lines.",
        "fullDesc": "High-definition camera lines verify complete pipe clearing.",
        "basePrice": 149,
        "iconName": "Droplet",
        "badge": "24/7"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 240,
      "items": [
        {
          "id": "r1",
          "author": "Gregory K.",
          "rating": 5,
          "date": "1 week ago",
          "comment": "AugerPros cleared our clogged sewer line in McKinney fast. Showed us the video camera proof!",
          "serviceUsed": "AugerPros Hydro Jetting & Camera Inspection",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Can hydro-jetting damage old PVC or cast iron pipes?",
        "answer": "Our master plumbers calibrate jet pressure safely for both PVC and legacy cast iron pipes."
      }
    ]
  },
  "smith-and-son-plumbing": {
    "slug": "smith-and-son-plumbing",
    "name": "Smith and Son Plumbing",
    "legalName": "Smith and Son Plumbing LLC",
    "domain": "smithandsonplumbing.com",
    "url": "https://smithandsonplumbing.com",
    "logoIcon": "Droplet",
    "tagline": "Family-Owned McKinney Plumbing Since 1970",
    "description": "Family-owned plumbing repairs, slab leak detection, tankless water heater flushing, and drain clearing in McKinney, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "McKinney",
    "state": "TX",
    "phone": "(214) 430-7747",
    "formattedPhone": "(214) 430-7747",
    "phoneRaw": "+12144307747",
    "email": "service@smithandsonplumbing.com",
    "address": {
      "street": "800 N McDonald St",
      "city": "McKinney",
      "state": "TX",
      "zip": "75069",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency Dispatch",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Family Owned",
        "subtitle": "50+ Years in McKinney",
        "icon": "Award"
      },
      {
        "title": "Master Plumber",
        "subtitle": "State Licensed",
        "icon": "ShieldCheck"
      },
      {
        "title": "24/7 Dispatch",
        "subtitle": "Rapid Arrival",
        "icon": "Clock"
      },
      {
        "title": "Flat Rates",
        "subtitle": "Upfront Estimates",
        "icon": "DollarSign"
      }
    ],
    "services": [
      {
        "id": "smith-drain-fix",
        "name": "Family-Owned Emergency Drain Repair",
        "shortDesc": "Clears clogged sinks, toilets, and main sewer lines.",
        "fullDesc": "Honest upfront pricing with zero high-pressure sales.",
        "basePrice": 149,
        "iconName": "Droplet",
        "badge": "24/7"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 195,
      "items": [
        {
          "id": "r1",
          "author": "Nancy P.",
          "rating": 5,
          "date": "2 days ago",
          "comment": "Smith & Son has been our plumber in McKinney for 15 years. Honest, reliable, and fair pricing!",
          "serviceUsed": "Family-Owned Emergency Drain Repair",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Do you repair gas leaks in McKinney?",
        "answer": "Yes, we perform certified gas line testing, leak detection, and pipe repairs."
      }
    ]
  },
  "onesource-roofing": {
    "slug": "onesource-roofing",
    "name": "OneSource Roofing",
    "legalName": "OneSource Roofing LLC",
    "domain": "onesourceroofs.com",
    "url": "https://onesourceroofs.com",
    "logoIcon": "Home",
    "tagline": "Melissa Hail & Storm Damage Restoration",
    "description": "Free drone hail storm inspections, insurance claim assistance, and architectural shingle replacements in Melissa, TX.",
    "niche": "Roofing & Restoration",
    "city": "Melissa",
    "state": "TX",
    "phone": "(972) 928-2988",
    "formattedPhone": "(972) 928-2988",
    "phoneRaw": "+19729282988",
    "email": "contact@onesourceroofs.com",
    "address": {
      "street": "1800 Central Expy",
      "city": "Melissa",
      "state": "TX",
      "zip": "75454",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Saturday",
      "time": "24/7 Storm Response",
      "is24_7": true
    },
    "colors": {
      "primary": "#ea580c",
      "primaryDark": "#c2410c",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "OneSource Certified",
        "subtitle": "Licensed Roofers",
        "icon": "ShieldCheck"
      },
      {
        "title": "Free Hail Audit",
        "subtitle": "Drone Photographic Report",
        "icon": "Search"
      },
      {
        "title": "Insurance Experts",
        "subtitle": "Direct Adjuster Help",
        "icon": "DollarSign"
      },
      {
        "title": "30-Year Warranty",
        "subtitle": "Premium Shingles",
        "icon": "Home"
      }
    ],
    "services": [
      {
        "id": "onesource-audit",
        "name": "Free OneSource Hail Inspection",
        "shortDesc": "Complete drone audit for wind and hail damage.",
        "fullDesc": "Generates claim photo report for full insurance coverage.",
        "basePrice": 0,
        "iconName": "Search",
        "badge": "Free Audit"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 130,
      "items": [
        {
          "id": "r1",
          "author": "Derek L.",
          "rating": 5,
          "date": "5 days ago",
          "comment": "OneSource handled our roof replacement in Melissa after hail hit us. Zero stress!",
          "serviceUsed": "Free OneSource Hail Inspection",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Will hail damage cause my roof to leak later?",
        "answer": "Yes, hail bruises shingle asphalt layers, leading to active leaks if not replaced."
      }
    ]
  },
  "colony-air-conditioning": {
    "slug": "colony-air-conditioning",
    "name": "Colony Air Conditioning & Heating",
    "legalName": "Colony Air Conditioning & Heating LLC",
    "domain": "colonyac.com",
    "url": "https://www.colonyac.com",
    "logoIcon": "Wind",
    "tagline": "50+ Years Serving Plano & North Dallas",
    "description": "Colony 21-point AC inspection, heat pump replacement, duct sanitation, and emergency repair in Plano, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Plano",
    "state": "TX",
    "phone": "(972) 591-0293",
    "formattedPhone": "(972) 591-0293",
    "phoneRaw": "+19725910293",
    "email": "info@colonyac.com",
    "address": {
      "street": "2400 Coit Rd",
      "city": "Plano",
      "state": "TX",
      "zip": "75075",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Sunday",
      "time": "24/7 Emergency AC Service",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "50+ Years",
        "subtitle": "Plano Leader Since 1973",
        "icon": "Award"
      },
      {
        "title": "EPA Certified",
        "subtitle": "Licensed HVAC Techs",
        "icon": "ShieldCheck"
      },
      {
        "title": "24/7 Dispatch",
        "subtitle": "Plano & DFW",
        "icon": "Clock"
      },
      {
        "title": "Upfront Rates",
        "subtitle": "No Surprise Costs",
        "icon": "DollarSign"
      }
    ],
    "services": [
      {
        "id": "colony-tuneup",
        "name": "Colony 21-Point AC Inspection",
        "shortDesc": "Comprehensive seasonal system tune-up and coil flush.",
        "fullDesc": "Restores cooling power and lowers energy bills.",
        "basePrice": 99,
        "iconName": "Wind",
        "badge": "21-Point Check"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 490,
      "items": [
        {
          "id": "r1",
          "author": "Vicki C.",
          "rating": 5,
          "date": "1 week ago",
          "comment": "Colony AC has maintained our Plano home system for decades. Always polite and top quality!",
          "serviceUsed": "Colony 21-Point AC Inspection",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Does Colony AC offer financing on new heat pump installations?",
        "answer": "Yes, we offer flexible 0% APR financing options on qualified HVAC system upgrades."
      }
    ]
  },
  "hargrove-roofing-austin": {
    "slug": "hargrove-roofing-austin",
    "name": "Hargrove Roofing Austin",
    "legalName": "Hargrove Roofing Austin LLC",
    "domain": "hargroveroofing.com",
    "url": "https://www.hargroveroofing.com",
    "logoIcon": "Home",
    "tagline": "Austin Storm Damage & Commercial Waterproofing",
    "description": "Drone roof damage inspections, commercial TPO coatings, and architectural shingle replacements across Austin, TX.",
    "niche": "Roofing & Restoration",
    "city": "Austin",
    "state": "TX",
    "phone": "(737) 378-8393",
    "formattedPhone": "(737) 378-8393",
    "phoneRaw": "+17373788393",
    "email": "quotes@hargroveroofing.com",
    "address": {
      "street": "3800 N Lamar Blvd",
      "city": "Austin",
      "state": "TX",
      "zip": "78756",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Saturday",
      "time": "24/7 Emergency Tarping",
      "is24_7": true
    },
    "colors": {
      "primary": "#ea580c",
      "primaryDark": "#c2410c",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Austin Local",
        "subtitle": "Licensed Roofers",
        "icon": "ShieldCheck"
      },
      {
        "title": "Drone Audits",
        "subtitle": "Free Photographic Report",
        "icon": "Search"
      },
      {
        "title": "Insurance Claims",
        "subtitle": "Direct Adjuster Help",
        "icon": "DollarSign"
      },
      {
        "title": "30-Year Warranty",
        "subtitle": "Resi & Commercial",
        "icon": "Home"
      }
    ],
    "services": [
      {
        "id": "hargrove-audit",
        "name": "Free Austin Drone Storm Inspection",
        "shortDesc": "High-res aerial photographic inspection for hail damage.",
        "fullDesc": "Detailed claim report provided directly for insurance filing.",
        "basePrice": 0,
        "iconName": "Search",
        "badge": "Free Audit"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 215,
      "items": [
        {
          "id": "r1",
          "author": "Sam K.",
          "rating": 5,
          "date": "2 days ago",
          "comment": "Hargrove Roofing replaced our roof in Central Austin fast. Professional drone photos made insurance approval seamless!",
          "serviceUsed": "Free Austin Drone Storm Inspection",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "Do you install metal roofs in Austin?",
        "answer": "Yes, we install standing seam metal, architectural shingles, and tile roofing."
      }
    ]
  },
  "blue-sky-roofing-sa": {
    "slug": "blue-sky-roofing-sa",
    "name": "Blue Sky Roofing",
    "legalName": "Blue Sky Roofing LLC",
    "domain": "blueskyroofs.com",
    "url": "https://www.blueskyroofs.com",
    "logoIcon": "Home",
    "tagline": "San Antonio Storm Damage & Shingle Experts",
    "description": "Free roof inspection, emergency leak repairs, shingle replacement, and commercial flat roof coatings in San Antonio.",
    "niche": "Roofing & Restoration",
    "city": "San Antonio",
    "state": "TX",
    "phone": "(512) 649-8244",
    "formattedPhone": "(512) 649-8244",
    "phoneRaw": "+15126498244",
    "email": "service@blueskyroofs.com",
    "address": {
      "street": "14500 San Pedro Ave",
      "city": "San Antonio",
      "state": "TX",
      "zip": "78232",
      "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
      "days": "Monday - Saturday",
      "time": "24/7 Emergency Response",
      "is24_7": true
    },
    "colors": {
      "primary": "#0284c7",
      "primaryDark": "#0369a1",
      "accent": "#f59e0b"
    },
    "trustBadges": [
      {
        "title": "Blue Sky Guarantee",
        "subtitle": "100% Workmanship",
        "icon": "Award"
      },
      {
        "title": "Licensed Roofers",
        "subtitle": "San Antonio Pros",
        "icon": "ShieldCheck"
      },
      {
        "title": "Free Inspection",
        "subtitle": "Hail & Leak Audit",
        "icon": "Search"
      },
      {
        "title": "Warranty Backed",
        "subtitle": "30-Year Shingles",
        "icon": "Home"
      }
    ],
    "services": [
      {
        "id": "bluesky-audit",
        "name": "Free San Antonio Roof Leak Audit",
        "shortDesc": "Complete inspection for missing shingles and soft spots.",
        "fullDesc": "Identifies leak causes early to prevent water damage.",
        "basePrice": 0,
        "iconName": "Search",
        "badge": "Free Audit"
      }
    ],
    "reviews": {
      "googleRating": 4.9,
      "totalReviews": 175,
      "items": [
        {
          "id": "r1",
          "author": "Maria G.",
          "rating": 5,
          "date": "4 days ago",
          "comment": "Blue Sky Roofing fixed our roof leak in San Antonio right before heavy rain hit. Fantastic service!",
          "serviceUsed": "Free San Antonio Roof Leak Audit",
          "verified": true
        }
      ]
    },
    "faqs": [
      {
        "question": "How quickly can Blue Sky tarp a leaking roof in San Antonio?",
        "answer": "We dispatch emergency tarping teams within 1 to 2 hours of your call."
      }
    ]
  }
,
  "james-plumbing-allen": {
    "slug": "james-plumbing-allen",
    "name": "James Plumbing",
    "legalName": "James Plumbing LLC",
    "domain": "calljamesplumbing.com",
    "url": "https://calljamesplumbing.com",
    "logoIcon": "Droplet",
    "tagline": "Allen's Trusted Same-Day Plumbing & Drain Solutions",
    "description": "James Plumbing delivers 24/7 emergency plumbing, hydro-jet drain cleaning, slab leak detection, and water heater service. across Allen, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Allen",
    "state": "TX",
    "phone": "(214) 286-6747",
    "formattedPhone": "(214) 286-6747",
    "phoneRaw": "+12142866747",
    "email": "service@calljamesplumbing.com",
    "address": {
        "street": "100 Main St",
        "city": "Allen",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#f59e0b"
    },
    "trustBadges": [
        {
            "title": "Licensed Master Plumber",
            "subtitle": "State Certified Pros",
            "icon": "ShieldCheck"
        },
        {
            "title": "24/7 Emergency Dispatch",
            "subtitle": "Fast Local Arrival",
            "icon": "Clock"
        },
        {
            "title": "Upfront Flat Pricing",
            "subtitle": "No Surprise Fees",
            "icon": "DollarSign"
        },
        {
            "title": "Satisfaction Guaranteed",
            "subtitle": "100% Quality Promise",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "emergency-drain",
            "name": "Emergency Hydro-Jet Drain Cleaning",
            "shortDesc": "Fast high-pressure root & grease removal.",
            "fullDesc": "Clears blocked lines with digital video camera confirmation.",
            "basePrice": 149,
            "iconName": "Droplet",
            "badge": "24/7 Service"
        },
        {
            "id": "water-heater",
            "name": "Water Heater Repair & Replacement",
            "shortDesc": "Same-day tank & tankless water heater installation.",
            "fullDesc": "High-efficiency systems for nonstop reliable hot water.",
            "basePrice": 299,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "James Plumbing did a fantastic job at our home in Allen. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency Hydro-Jet Drain Cleaning",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "Do you provide emergency plumbing service?",
            "answer": "Yes, our certified plumbers are on call 24/7 for urgent leaks, backups, and emergency repairs."
        }
    ]
},
  "over-the-top-roofing-denton": {
    "slug": "over-the-top-roofing-denton",
    "name": "Over The Top Roofing",
    "legalName": "Over The Top Roofing LLC",
    "domain": "ntxroofs.com",
    "url": "https://ntxroofs.com",
    "logoIcon": "Home",
    "tagline": "Denton's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Over The Top Roofing delivers Free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support. across Denton, TX.",
    "niche": "Roofing & Restoration",
    "city": "Denton",
    "state": "TX",
    "phone": "(940) 391-6773",
    "formattedPhone": "(940) 391-6773",
    "phoneRaw": "+19403916773",
    "email": "office@ntxroofs.com",
    "address": {
        "street": "100 Main St",
        "city": "Denton",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#d97706"
    },
    "trustBadges": [
        {
            "title": "GAF Certified",
            "subtitle": "Factory-Trained Installers",
            "icon": "ShieldCheck"
        },
        {
            "title": "Free Inspection",
            "subtitle": "Comprehensive Roof Audit",
            "icon": "Search"
        },
        {
            "title": "Emergency Tarping",
            "subtitle": "Fast Storm Dispatch",
            "icon": "Clock"
        },
        {
            "title": "Warranty Backed",
            "subtitle": "Up to 50-Year Coverage",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "free-inspection",
            "name": "Free Roof & Attic Inspection",
            "shortDesc": "Detailed roof health analysis with photo documentation.",
            "fullDesc": "Identifies hail, wind, and age-related wear before leaks spread.",
            "basePrice": 0,
            "iconName": "Search",
            "badge": "Free Inspection"
        },
        {
            "id": "leak-repair",
            "name": "Emergency Roof Leak & Tarp Service",
            "shortDesc": "Immediate leak stopping and storm damage protection.",
            "fullDesc": "Weather-proof sealing to prevent drywall, insulation, and timber rot.",
            "basePrice": 199,
            "iconName": "Home"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Over The Top Roofing did a fantastic job at our home in Denton. Super fast response and transparent pricing!",
                "serviceUsed": "Free Roof & Attic Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "best-air-denton": {
    "slug": "best-air-denton",
    "name": "Best Air Denton",
    "legalName": "Best Air Denton LLC",
    "domain": "bestairofdenton.com",
    "url": "https://bestairofdenton.com",
    "logoIcon": "Wind",
    "tagline": "Denton's High-Efficiency AC Repair & Heating Specialists",
    "description": "Best Air Denton delivers Emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations. across Denton, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Denton",
    "state": "TX",
    "phone": "(940) 387-9034",
    "formattedPhone": "(940) 387-9034",
    "phoneRaw": "+19403879034",
    "email": "service@bestairofdenton.com",
    "address": {
        "street": "100 Main St",
        "city": "Denton",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "EPA & NATE Certified",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "ac-repair",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Pinpoints component failures to get cool air running fast.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "system-replacement",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Lowers energy bills while maximizing indoor cooling comfort.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Best Air Denton did a fantastic job at our home in Denton. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "ryerson-roofing-grapevine": {
    "slug": "ryerson-roofing-grapevine",
    "name": "Ryerson Roofing",
    "legalName": "Ryerson Roofing LLC",
    "domain": "rroofer.com",
    "url": "https://rroofer.com",
    "logoIcon": "Home",
    "tagline": "Grapevine's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Ryerson Roofing delivers Free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support. across Grapevine, TX.",
    "niche": "Roofing & Restoration",
    "city": "Grapevine",
    "state": "TX",
    "phone": "(817) 756-7686",
    "formattedPhone": "(817) 756-7686",
    "phoneRaw": "+18177567686",
    "email": "info@rroofer.com",
    "address": {
        "street": "100 Main St",
        "city": "Grapevine",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#d97706"
    },
    "trustBadges": [
        {
            "title": "GAF Certified",
            "subtitle": "Factory-Trained Installers",
            "icon": "ShieldCheck"
        },
        {
            "title": "Free Inspection",
            "subtitle": "Comprehensive Roof Audit",
            "icon": "Search"
        },
        {
            "title": "Emergency Tarping",
            "subtitle": "Fast Storm Dispatch",
            "icon": "Clock"
        },
        {
            "title": "Warranty Backed",
            "subtitle": "Up to 50-Year Coverage",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "free-inspection",
            "name": "Free Roof & Attic Inspection",
            "shortDesc": "Detailed roof health analysis with photo documentation.",
            "fullDesc": "Identifies hail, wind, and age-related wear before leaks spread.",
            "basePrice": 0,
            "iconName": "Search",
            "badge": "Free Inspection"
        },
        {
            "id": "leak-repair",
            "name": "Emergency Roof Leak & Tarp Service",
            "shortDesc": "Immediate leak stopping and storm damage protection.",
            "fullDesc": "Weather-proof sealing to prevent drywall, insulation, and timber rot.",
            "basePrice": 199,
            "iconName": "Home"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Ryerson Roofing did a fantastic job at our home in Grapevine. Super fast response and transparent pricing!",
                "serviceUsed": "Free Roof & Attic Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "grapevine-plumbing-co": {
    "slug": "grapevine-plumbing-co",
    "name": "Grapevine Plumbing Co.",
    "legalName": "Grapevine Plumbing Co. LLC",
    "domain": "grapevineplumbingco.com",
    "url": "https://grapevineplumbingco.com",
    "logoIcon": "Droplet",
    "tagline": "Grapevine's Trusted Same-Day Plumbing & Drain Solutions",
    "description": "Grapevine Plumbing Co. delivers 24/7 emergency plumbing, hydro-jet drain cleaning, slab leak detection, and water heater service. across Grapevine, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Grapevine",
    "state": "TX",
    "phone": "(817) 435-4456",
    "formattedPhone": "(817) 435-4456",
    "phoneRaw": "+18174354456",
    "email": "service@grapevineplumbingco.com",
    "address": {
        "street": "100 Main St",
        "city": "Grapevine",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#f59e0b"
    },
    "trustBadges": [
        {
            "title": "Licensed Master Plumber",
            "subtitle": "State Certified Pros",
            "icon": "ShieldCheck"
        },
        {
            "title": "24/7 Emergency Dispatch",
            "subtitle": "Fast Local Arrival",
            "icon": "Clock"
        },
        {
            "title": "Upfront Flat Pricing",
            "subtitle": "No Surprise Fees",
            "icon": "DollarSign"
        },
        {
            "title": "Satisfaction Guaranteed",
            "subtitle": "100% Quality Promise",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "emergency-drain",
            "name": "Emergency Hydro-Jet Drain Cleaning",
            "shortDesc": "Fast high-pressure root & grease removal.",
            "fullDesc": "Clears blocked lines with digital video camera confirmation.",
            "basePrice": 149,
            "iconName": "Droplet",
            "badge": "24/7 Service"
        },
        {
            "id": "water-heater",
            "name": "Water Heater Repair & Replacement",
            "shortDesc": "Same-day tank & tankless water heater installation.",
            "fullDesc": "High-efficiency systems for nonstop reliable hot water.",
            "basePrice": 299,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Grapevine Plumbing Co. did a fantastic job at our home in Grapevine. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency Hydro-Jet Drain Cleaning",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "Do you provide emergency plumbing service?",
            "answer": "Yes, our certified plumbers are on call 24/7 for urgent leaks, backups, and emergency repairs."
        }
    ]
},
  "the-plumbing-service-arlington": {
    "slug": "the-plumbing-service-arlington",
    "name": "The Plumbing Service",
    "legalName": "The Plumbing Service LLC",
    "domain": "theplumbingservice.com",
    "url": "https://theplumbingservice.com",
    "logoIcon": "Droplet",
    "tagline": "Arlington's Trusted Same-Day Plumbing & Drain Solutions",
    "description": "The Plumbing Service delivers 24/7 emergency plumbing, hydro-jet drain cleaning, slab leak detection, and water heater service. across Arlington, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Arlington",
    "state": "TX",
    "phone": "(817) 225-2153",
    "formattedPhone": "(817) 225-2153",
    "phoneRaw": "+18172252153",
    "email": "brent@theplumbingservice.com",
    "address": {
        "street": "100 Main St",
        "city": "Arlington",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#f59e0b"
    },
    "trustBadges": [
        {
            "title": "Licensed Master Plumber",
            "subtitle": "State Certified Pros",
            "icon": "ShieldCheck"
        },
        {
            "title": "24/7 Emergency Dispatch",
            "subtitle": "Fast Local Arrival",
            "icon": "Clock"
        },
        {
            "title": "Upfront Flat Pricing",
            "subtitle": "No Surprise Fees",
            "icon": "DollarSign"
        },
        {
            "title": "Satisfaction Guaranteed",
            "subtitle": "100% Quality Promise",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "emergency-drain",
            "name": "Emergency Hydro-Jet Drain Cleaning",
            "shortDesc": "Fast high-pressure root & grease removal.",
            "fullDesc": "Clears blocked lines with digital video camera confirmation.",
            "basePrice": 149,
            "iconName": "Droplet",
            "badge": "24/7 Service"
        },
        {
            "id": "water-heater",
            "name": "Water Heater Repair & Replacement",
            "shortDesc": "Same-day tank & tankless water heater installation.",
            "fullDesc": "High-efficiency systems for nonstop reliable hot water.",
            "basePrice": 299,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "The Plumbing Service did a fantastic job at our home in Arlington. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency Hydro-Jet Drain Cleaning",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "Do you provide emergency plumbing service?",
            "answer": "Yes, our certified plumbers are on call 24/7 for urgent leaks, backups, and emergency repairs."
        }
    ]
},
  "comfort-authority-arlington": {
    "slug": "comfort-authority-arlington",
    "name": "Comfort Authority",
    "legalName": "Comfort Authority LLC",
    "domain": "comfortauthoritytexas.com",
    "url": "https://comfortauthoritytexas.com",
    "logoIcon": "Wind",
    "tagline": "Arlington's High-Efficiency AC Repair & Heating Specialists",
    "description": "Comfort Authority delivers Emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations. across Arlington, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Arlington",
    "state": "TX",
    "phone": "(682) 900-7489",
    "formattedPhone": "(682) 900-7489",
    "phoneRaw": "+16829007489",
    "email": "hello@comfortauthoritytexas.com",
    "address": {
        "street": "100 Main St",
        "city": "Arlington",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "EPA & NATE Certified",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "ac-repair",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Pinpoints component failures to get cool air running fast.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "system-replacement",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Lowers energy bills while maximizing indoor cooling comfort.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Comfort Authority did a fantastic job at our home in Arlington. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "john-wade-roofing-arlington": {
    "slug": "john-wade-roofing-arlington",
    "name": "John Wade Roofing",
    "legalName": "John Wade Roofing LLC",
    "domain": "johnwaderoofing.com",
    "url": "https://johnwaderoofing.com",
    "logoIcon": "Home",
    "tagline": "Arlington's Storm Damage, Leak Repair & Roof Replacement",
    "description": "John Wade Roofing delivers Free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support. across Arlington, TX.",
    "niche": "Roofing & Restoration",
    "city": "Arlington",
    "state": "TX",
    "phone": "(817) 265-5520",
    "formattedPhone": "(817) 265-5520",
    "phoneRaw": "+18172655520",
    "email": "service@johnwaderoofing.com",
    "address": {
        "street": "100 Main St",
        "city": "Arlington",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#d97706"
    },
    "trustBadges": [
        {
            "title": "GAF Certified",
            "subtitle": "Factory-Trained Installers",
            "icon": "ShieldCheck"
        },
        {
            "title": "Free Inspection",
            "subtitle": "Comprehensive Roof Audit",
            "icon": "Search"
        },
        {
            "title": "Emergency Tarping",
            "subtitle": "Fast Storm Dispatch",
            "icon": "Clock"
        },
        {
            "title": "Warranty Backed",
            "subtitle": "Up to 50-Year Coverage",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "free-inspection",
            "name": "Free Roof & Attic Inspection",
            "shortDesc": "Detailed roof health analysis with photo documentation.",
            "fullDesc": "Identifies hail, wind, and age-related wear before leaks spread.",
            "basePrice": 0,
            "iconName": "Search",
            "badge": "Free Inspection"
        },
        {
            "id": "leak-repair",
            "name": "Emergency Roof Leak & Tarp Service",
            "shortDesc": "Immediate leak stopping and storm damage protection.",
            "fullDesc": "Weather-proof sealing to prevent drywall, insulation, and timber rot.",
            "basePrice": 199,
            "iconName": "Home"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "John Wade Roofing did a fantastic job at our home in Arlington. Super fast response and transparent pricing!",
                "serviceUsed": "Free Roof & Attic Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "ajax-plumbing-carrollton": {
    "slug": "ajax-plumbing-carrollton",
    "name": "Ajax Plumbing Solutions",
    "legalName": "Ajax Plumbing Solutions LLC",
    "domain": "ajaxps.com",
    "url": "https://ajaxps.com",
    "logoIcon": "Droplet",
    "tagline": "Carrollton's Trusted Same-Day Plumbing & Drain Solutions",
    "description": "Ajax Plumbing Solutions delivers 24/7 emergency plumbing, hydro-jet drain cleaning, slab leak detection, and water heater service. across Carrollton, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Carrollton",
    "state": "TX",
    "phone": "(972) 395-3730",
    "formattedPhone": "(972) 395-3730",
    "phoneRaw": "+19723953730",
    "email": "ajaxplumbingsolutions@gmail.com",
    "address": {
        "street": "100 Main St",
        "city": "Carrollton",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#f59e0b"
    },
    "trustBadges": [
        {
            "title": "Licensed Master Plumber",
            "subtitle": "State Certified Pros",
            "icon": "ShieldCheck"
        },
        {
            "title": "24/7 Emergency Dispatch",
            "subtitle": "Fast Local Arrival",
            "icon": "Clock"
        },
        {
            "title": "Upfront Flat Pricing",
            "subtitle": "No Surprise Fees",
            "icon": "DollarSign"
        },
        {
            "title": "Satisfaction Guaranteed",
            "subtitle": "100% Quality Promise",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "emergency-drain",
            "name": "Emergency Hydro-Jet Drain Cleaning",
            "shortDesc": "Fast high-pressure root & grease removal.",
            "fullDesc": "Clears blocked lines with digital video camera confirmation.",
            "basePrice": 149,
            "iconName": "Droplet",
            "badge": "24/7 Service"
        },
        {
            "id": "water-heater",
            "name": "Water Heater Repair & Replacement",
            "shortDesc": "Same-day tank & tankless water heater installation.",
            "fullDesc": "High-efficiency systems for nonstop reliable hot water.",
            "basePrice": 299,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Ajax Plumbing Solutions did a fantastic job at our home in Carrollton. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency Hydro-Jet Drain Cleaning",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "Do you provide emergency plumbing service?",
            "answer": "Yes, our certified plumbers are on call 24/7 for urgent leaks, backups, and emergency repairs."
        }
    ]
},
  "mama-bear-roofing-richardson": {
    "slug": "mama-bear-roofing-richardson",
    "name": "Mama Bear Roofing",
    "legalName": "Mama Bear Roofing LLC",
    "domain": "mamabearroofing.com",
    "url": "https://mamabearroofing.com",
    "logoIcon": "Home",
    "tagline": "Richardson's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Mama Bear Roofing delivers Free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support. across Richardson, TX.",
    "niche": "Roofing & Restoration",
    "city": "Richardson",
    "state": "TX",
    "phone": "(469) 640-4646",
    "formattedPhone": "(469) 640-4646",
    "phoneRaw": "+14696404646",
    "email": "info@mamabearroofing.com",
    "address": {
        "street": "100 Main St",
        "city": "Richardson",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#d97706"
    },
    "trustBadges": [
        {
            "title": "GAF Certified",
            "subtitle": "Factory-Trained Installers",
            "icon": "ShieldCheck"
        },
        {
            "title": "Free Inspection",
            "subtitle": "Comprehensive Roof Audit",
            "icon": "Search"
        },
        {
            "title": "Emergency Tarping",
            "subtitle": "Fast Storm Dispatch",
            "icon": "Clock"
        },
        {
            "title": "Warranty Backed",
            "subtitle": "Up to 50-Year Coverage",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "free-inspection",
            "name": "Free Roof & Attic Inspection",
            "shortDesc": "Detailed roof health analysis with photo documentation.",
            "fullDesc": "Identifies hail, wind, and age-related wear before leaks spread.",
            "basePrice": 0,
            "iconName": "Search",
            "badge": "Free Inspection"
        },
        {
            "id": "leak-repair",
            "name": "Emergency Roof Leak & Tarp Service",
            "shortDesc": "Immediate leak stopping and storm damage protection.",
            "fullDesc": "Weather-proof sealing to prevent drywall, insulation, and timber rot.",
            "basePrice": 199,
            "iconName": "Home"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Mama Bear Roofing did a fantastic job at our home in Richardson. Super fast response and transparent pricing!",
                "serviceUsed": "Free Roof & Attic Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "ac-pros-richardson": {
    "slug": "ac-pros-richardson",
    "name": "AC Pros Heating & Air",
    "legalName": "AC Pros Heating & Air LLC",
    "domain": "acprostx.com",
    "url": "https://acprostx.com",
    "logoIcon": "Wind",
    "tagline": "Richardson's High-Efficiency AC Repair & Heating Specialists",
    "description": "AC Pros Heating & Air delivers Emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations. across Richardson, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Richardson",
    "state": "TX",
    "phone": "(972) 736-8864",
    "formattedPhone": "(972) 736-8864",
    "phoneRaw": "+19727368864",
    "email": "info@acprostx.com",
    "address": {
        "street": "100 Main St",
        "city": "Richardson",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "EPA & NATE Certified",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "ac-repair",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Pinpoints component failures to get cool air running fast.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "system-replacement",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Lowers energy bills while maximizing indoor cooling comfort.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "AC Pros Heating & Air did a fantastic job at our home in Richardson. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "mend-services-round-rock": {
    "slug": "mend-services-round-rock",
    "name": "Mend Services",
    "legalName": "Mend Services LLC",
    "domain": "mendservices.com",
    "url": "https://mendservices.com",
    "logoIcon": "Wind",
    "tagline": "Round Rock's Complete Home Plumbing & AC Comfort Experts",
    "description": "Mend Services delivers Full-service emergency plumbing, drain cleaning, AC repairs, and seasonal HVAC tune-ups. across Round Rock, TX.",
    "niche": "Plumbing & HVAC",
    "city": "Round Rock",
    "state": "TX",
    "phone": "(512) 360-0704",
    "formattedPhone": "(512) 360-0704",
    "phoneRaw": "+15123600704",
    "email": "support@mendservices.com",
    "address": {
        "street": "100 Main St",
        "city": "Round Rock",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0369a1",
        "primaryDark": "#075985",
        "accent": "#f59e0b"
    },
    "trustBadges": [
        {
            "title": "Licensed & Insured",
            "subtitle": "Plumbing & HVAC Certified",
            "icon": "ShieldCheck"
        },
        {
            "title": "Same-Day Dispatch",
            "subtitle": "Rapid Response",
            "icon": "Clock"
        },
        {
            "title": "Upfront Flat Rates",
            "subtitle": "Honest Estimates",
            "icon": "DollarSign"
        },
        {
            "title": "Top-Rated Techs",
            "subtitle": "5-Star Customer Care",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "plumbing-dispatch",
            "name": "Emergency Plumbing & Drain Care",
            "shortDesc": "Fast repairs for leaks, pipes, and drains.",
            "fullDesc": "Full home plumbing repairs with diagnostic camera review.",
            "basePrice": 149,
            "iconName": "Droplet",
            "badge": "24/7 Dispatch"
        },
        {
            "id": "ac-tuneup",
            "name": "Complete AC Repair & Maintenance",
            "shortDesc": "Rapid cooling diagnostics and seasonal tune-ups.",
            "fullDesc": "Restores maximum airflow and energy efficiency quickly.",
            "basePrice": 89,
            "iconName": "Wind"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Mend Services did a fantastic job at our home in Round Rock. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency Plumbing & Drain Care",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician inspect my issue?",
            "answer": "We offer same-day priority dispatch for urgent plumbing leaks and AC outages."
        }
    ]
},
  "alpha-roofing-round-rock": {
    "slug": "alpha-roofing-round-rock",
    "name": "Alpha Roofing Industries",
    "legalName": "Alpha Roofing Industries LLC",
    "domain": "alpharoofingtexas.com",
    "url": "https://alpharoofingtexas.com",
    "logoIcon": "Home",
    "tagline": "Round Rock's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Alpha Roofing Industries delivers Free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support. across Round Rock, TX.",
    "niche": "Roofing & Restoration",
    "city": "Round Rock",
    "state": "TX",
    "phone": "(512) 777-1086",
    "formattedPhone": "(512) 777-1086",
    "phoneRaw": "+15127771086",
    "email": "info@alpharoofingtexas.com",
    "address": {
        "street": "100 Main St",
        "city": "Round Rock",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#d97706"
    },
    "trustBadges": [
        {
            "title": "GAF Certified",
            "subtitle": "Factory-Trained Installers",
            "icon": "ShieldCheck"
        },
        {
            "title": "Free Inspection",
            "subtitle": "Comprehensive Roof Audit",
            "icon": "Search"
        },
        {
            "title": "Emergency Tarping",
            "subtitle": "Fast Storm Dispatch",
            "icon": "Clock"
        },
        {
            "title": "Warranty Backed",
            "subtitle": "Up to 50-Year Coverage",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "free-inspection",
            "name": "Free Roof & Attic Inspection",
            "shortDesc": "Detailed roof health analysis with photo documentation.",
            "fullDesc": "Identifies hail, wind, and age-related wear before leaks spread.",
            "basePrice": 0,
            "iconName": "Search",
            "badge": "Free Inspection"
        },
        {
            "id": "leak-repair",
            "name": "Emergency Roof Leak & Tarp Service",
            "shortDesc": "Immediate leak stopping and storm damage protection.",
            "fullDesc": "Weather-proof sealing to prevent drywall, insulation, and timber rot.",
            "basePrice": 199,
            "iconName": "Home"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Alpha Roofing Industries did a fantastic job at our home in Round Rock. Super fast response and transparent pricing!",
                "serviceUsed": "Free Roof & Attic Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "katy-plumbing-company": {
    "slug": "katy-plumbing-company",
    "name": "The Katy Plumbing Company",
    "legalName": "The Katy Plumbing Company LLC",
    "domain": "katyplumbers.com",
    "url": "https://katyplumbers.com",
    "logoIcon": "Droplet",
    "tagline": "Katy's Trusted Same-Day Plumbing & Drain Solutions",
    "description": "The Katy Plumbing Company delivers 24/7 emergency plumbing, hydro-jet drain cleaning, slab leak detection, and water heater service. across Katy, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Katy",
    "state": "TX",
    "phone": "(281) 601-1513",
    "formattedPhone": "(281) 601-1513",
    "phoneRaw": "+12816011513",
    "email": "service@katyplumbers.com",
    "address": {
        "street": "100 Main St",
        "city": "Katy",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#f59e0b"
    },
    "trustBadges": [
        {
            "title": "Licensed Master Plumber",
            "subtitle": "State Certified Pros",
            "icon": "ShieldCheck"
        },
        {
            "title": "24/7 Emergency Dispatch",
            "subtitle": "Fast Local Arrival",
            "icon": "Clock"
        },
        {
            "title": "Upfront Flat Pricing",
            "subtitle": "No Surprise Fees",
            "icon": "DollarSign"
        },
        {
            "title": "Satisfaction Guaranteed",
            "subtitle": "100% Quality Promise",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "emergency-drain",
            "name": "Emergency Hydro-Jet Drain Cleaning",
            "shortDesc": "Fast high-pressure root & grease removal.",
            "fullDesc": "Clears blocked lines with digital video camera confirmation.",
            "basePrice": 149,
            "iconName": "Droplet",
            "badge": "24/7 Service"
        },
        {
            "id": "water-heater",
            "name": "Water Heater Repair & Replacement",
            "shortDesc": "Same-day tank & tankless water heater installation.",
            "fullDesc": "High-efficiency systems for nonstop reliable hot water.",
            "basePrice": 299,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "The Katy Plumbing Company did a fantastic job at our home in Katy. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency Hydro-Jet Drain Cleaning",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "Do you provide emergency plumbing service?",
            "answer": "Yes, our certified plumbers are on call 24/7 for urgent leaks, backups, and emergency repairs."
        }
    ]
},
  "jerrys-roofing-katy": {
    "slug": "jerrys-roofing-katy",
    "name": "Jerry's Roofing",
    "legalName": "Jerry's Roofing LLC",
    "domain": "roofingbyjerry.com",
    "url": "https://roofingbyjerry.com",
    "logoIcon": "Home",
    "tagline": "Katy's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Jerry's Roofing delivers Free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support. across Katy, TX.",
    "niche": "Roofing & Restoration",
    "city": "Katy",
    "state": "TX",
    "phone": "(409) 351-1529",
    "formattedPhone": "(409) 351-1529",
    "phoneRaw": "+14093511529",
    "email": "jerrysroofinginfo@gmail.com",
    "address": {
        "street": "100 Main St",
        "city": "Katy",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#d97706"
    },
    "trustBadges": [
        {
            "title": "GAF Certified",
            "subtitle": "Factory-Trained Installers",
            "icon": "ShieldCheck"
        },
        {
            "title": "Free Inspection",
            "subtitle": "Comprehensive Roof Audit",
            "icon": "Search"
        },
        {
            "title": "Emergency Tarping",
            "subtitle": "Fast Storm Dispatch",
            "icon": "Clock"
        },
        {
            "title": "Warranty Backed",
            "subtitle": "Up to 50-Year Coverage",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "free-inspection",
            "name": "Free Roof & Attic Inspection",
            "shortDesc": "Detailed roof health analysis with photo documentation.",
            "fullDesc": "Identifies hail, wind, and age-related wear before leaks spread.",
            "basePrice": 0,
            "iconName": "Search",
            "badge": "Free Inspection"
        },
        {
            "id": "leak-repair",
            "name": "Emergency Roof Leak & Tarp Service",
            "shortDesc": "Immediate leak stopping and storm damage protection.",
            "fullDesc": "Weather-proof sealing to prevent drywall, insulation, and timber rot.",
            "basePrice": 199,
            "iconName": "Home"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Jerry's Roofing did a fantastic job at our home in Katy. Super fast response and transparent pricing!",
                "serviceUsed": "Free Roof & Attic Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "woodlands-plumbing-air": {
    "slug": "woodlands-plumbing-air",
    "name": "The Woodlands Plumbing & Air",
    "legalName": "The Woodlands Plumbing & Air LLC",
    "domain": "thewoodlandsplumbingandair.com",
    "url": "https://thewoodlandsplumbingandair.com",
    "logoIcon": "Wind",
    "tagline": "The Woodlands's Complete Home Plumbing & AC Comfort Experts",
    "description": "The Woodlands Plumbing & Air delivers Full-service emergency plumbing, drain cleaning, AC repairs, and seasonal HVAC tune-ups. across The Woodlands, TX.",
    "niche": "Plumbing & HVAC",
    "city": "The Woodlands",
    "state": "TX",
    "phone": "(281) 363-4822",
    "formattedPhone": "(281) 363-4822",
    "phoneRaw": "+12813634822",
    "email": "info@thewoodlandsplumbingandair.com",
    "address": {
        "street": "100 Main St",
        "city": "The Woodlands",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0369a1",
        "primaryDark": "#075985",
        "accent": "#f59e0b"
    },
    "trustBadges": [
        {
            "title": "Licensed & Insured",
            "subtitle": "Plumbing & HVAC Certified",
            "icon": "ShieldCheck"
        },
        {
            "title": "Same-Day Dispatch",
            "subtitle": "Rapid Response",
            "icon": "Clock"
        },
        {
            "title": "Upfront Flat Rates",
            "subtitle": "Honest Estimates",
            "icon": "DollarSign"
        },
        {
            "title": "Top-Rated Techs",
            "subtitle": "5-Star Customer Care",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "plumbing-dispatch",
            "name": "Emergency Plumbing & Drain Care",
            "shortDesc": "Fast repairs for leaks, pipes, and drains.",
            "fullDesc": "Full home plumbing repairs with diagnostic camera review.",
            "basePrice": 149,
            "iconName": "Droplet",
            "badge": "24/7 Dispatch"
        },
        {
            "id": "ac-tuneup",
            "name": "Complete AC Repair & Maintenance",
            "shortDesc": "Rapid cooling diagnostics and seasonal tune-ups.",
            "fullDesc": "Restores maximum airflow and energy efficiency quickly.",
            "basePrice": 89,
            "iconName": "Wind"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "The Woodlands Plumbing & Air did a fantastic job at our home in The Woodlands. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency Plumbing & Drain Care",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician inspect my issue?",
            "answer": "We offer same-day priority dispatch for urgent plumbing leaks and AC outages."
        }
    ]
},
  "squadpro-roofing-woodlands": {
    "slug": "squadpro-roofing-woodlands",
    "name": "SquadPro Roofing",
    "legalName": "SquadPro Roofing LLC",
    "domain": "trustsquadpro.com",
    "url": "https://trustsquadpro.com",
    "logoIcon": "Home",
    "tagline": "The Woodlands's Storm Damage, Leak Repair & Roof Replacement",
    "description": "SquadPro Roofing delivers Free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support. across The Woodlands, TX.",
    "niche": "Roofing & Restoration",
    "city": "The Woodlands",
    "state": "TX",
    "phone": "(832) 559-2475",
    "formattedPhone": "(832) 559-2475",
    "phoneRaw": "+18325592475",
    "email": "help@trustsquadpro.com",
    "address": {
        "street": "100 Main St",
        "city": "The Woodlands",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#d97706"
    },
    "trustBadges": [
        {
            "title": "GAF Certified",
            "subtitle": "Factory-Trained Installers",
            "icon": "ShieldCheck"
        },
        {
            "title": "Free Inspection",
            "subtitle": "Comprehensive Roof Audit",
            "icon": "Search"
        },
        {
            "title": "Emergency Tarping",
            "subtitle": "Fast Storm Dispatch",
            "icon": "Clock"
        },
        {
            "title": "Warranty Backed",
            "subtitle": "Up to 50-Year Coverage",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "free-inspection",
            "name": "Free Roof & Attic Inspection",
            "shortDesc": "Detailed roof health analysis with photo documentation.",
            "fullDesc": "Identifies hail, wind, and age-related wear before leaks spread.",
            "basePrice": 0,
            "iconName": "Search",
            "badge": "Free Inspection"
        },
        {
            "id": "leak-repair",
            "name": "Emergency Roof Leak & Tarp Service",
            "shortDesc": "Immediate leak stopping and storm damage protection.",
            "fullDesc": "Weather-proof sealing to prevent drywall, insulation, and timber rot.",
            "basePrice": 199,
            "iconName": "Home"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "SquadPro Roofing did a fantastic job at our home in The Woodlands. Super fast response and transparent pricing!",
                "serviceUsed": "Free Roof & Attic Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "meyer-heating-air-nb": {
    "slug": "meyer-heating-air-nb",
    "name": "Meyer Heating & Air",
    "legalName": "Meyer Heating & Air LLC",
    "domain": "meyerac.com",
    "url": "https://www.meyerac.com/",
    "logoIcon": "Wind",
    "tagline": "New Braunfels's High-Efficiency AC Repair & Heating Specialists",
    "description": "Meyer Heating & Air delivers Emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations. across New Braunfels, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "New Braunfels",
    "state": "TX",
    "phone": "(830) 407-8631",
    "formattedPhone": "(830) 407-8631",
    "phoneRaw": "+18304078631",
    "email": "info@meyerac.com",
    "address": {
        "street": "100 Main St",
        "city": "New Braunfels",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "EPA & NATE Certified",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "ac-repair",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Pinpoints component failures to get cool air running fast.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "system-replacement",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Lowers energy bills while maximizing indoor cooling comfort.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Meyer Heating & Air did a fantastic job at our home in New Braunfels. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "varni-roofing-nb": {
    "slug": "varni-roofing-nb",
    "name": "Varni Roofing",
    "legalName": "Varni Roofing LLC",
    "domain": "varniroofing.com",
    "url": "https://www.varniroofing.com/",
    "logoIcon": "Home",
    "tagline": "New Braunfels's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Varni Roofing delivers Free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support. across New Braunfels, TX.",
    "niche": "Roofing & Restoration",
    "city": "New Braunfels",
    "state": "TX",
    "phone": "(830) 609-3605",
    "formattedPhone": "(830) 609-3605",
    "phoneRaw": "+18306093605",
    "email": "contact@varniroofing.com",
    "address": {
        "street": "100 Main St",
        "city": "New Braunfels",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#d97706"
    },
    "trustBadges": [
        {
            "title": "GAF Certified",
            "subtitle": "Factory-Trained Installers",
            "icon": "ShieldCheck"
        },
        {
            "title": "Free Inspection",
            "subtitle": "Comprehensive Roof Audit",
            "icon": "Search"
        },
        {
            "title": "Emergency Tarping",
            "subtitle": "Fast Storm Dispatch",
            "icon": "Clock"
        },
        {
            "title": "Warranty Backed",
            "subtitle": "Up to 50-Year Coverage",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "free-inspection",
            "name": "Free Roof & Attic Inspection",
            "shortDesc": "Detailed roof health analysis with photo documentation.",
            "fullDesc": "Identifies hail, wind, and age-related wear before leaks spread.",
            "basePrice": 0,
            "iconName": "Search",
            "badge": "Free Inspection"
        },
        {
            "id": "leak-repair",
            "name": "Emergency Roof Leak & Tarp Service",
            "shortDesc": "Immediate leak stopping and storm damage protection.",
            "fullDesc": "Weather-proof sealing to prevent drywall, insulation, and timber rot.",
            "basePrice": 199,
            "iconName": "Home"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Varni Roofing did a fantastic job at our home in New Braunfels. Super fast response and transparent pricing!",
                "serviceUsed": "Free Roof & Attic Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "ace-repair-plumbing-fw": {
    "slug": "ace-repair-plumbing-fw",
    "name": "Ace Repair Plumbing",
    "legalName": "Ace Repair Plumbing LLC",
    "domain": "acerepairplumbing.com",
    "url": "https://acerepairplumbing.com",
    "logoIcon": "Droplet",
    "tagline": "Fort Worth's Trusted Same-Day Plumbing & Drain Solutions",
    "description": "Ace Repair Plumbing delivers 24/7 emergency plumbing, hydro-jet drain cleaning, slab leak detection, and water heater service. across Fort Worth, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Fort Worth",
    "state": "TX",
    "phone": "(817) 429-1115",
    "formattedPhone": "(817) 429-1115",
    "phoneRaw": "+18174291115",
    "email": "acerepairplumbing@charter.net",
    "address": {
        "street": "100 Main St",
        "city": "Fort Worth",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#f59e0b"
    },
    "trustBadges": [
        {
            "title": "Licensed Master Plumber",
            "subtitle": "State Certified Pros",
            "icon": "ShieldCheck"
        },
        {
            "title": "24/7 Emergency Dispatch",
            "subtitle": "Fast Local Arrival",
            "icon": "Clock"
        },
        {
            "title": "Upfront Flat Pricing",
            "subtitle": "No Surprise Fees",
            "icon": "DollarSign"
        },
        {
            "title": "Satisfaction Guaranteed",
            "subtitle": "100% Quality Promise",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "emergency-drain",
            "name": "Emergency Hydro-Jet Drain Cleaning",
            "shortDesc": "Fast high-pressure root & grease removal.",
            "fullDesc": "Clears blocked lines with digital video camera confirmation.",
            "basePrice": 149,
            "iconName": "Droplet",
            "badge": "24/7 Service"
        },
        {
            "id": "water-heater",
            "name": "Water Heater Repair & Replacement",
            "shortDesc": "Same-day tank & tankless water heater installation.",
            "fullDesc": "High-efficiency systems for nonstop reliable hot water.",
            "basePrice": 299,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 182,
        "items": [
            {
                "id": "r1",
                "author": "Mark R.",
                "rating": 5,
                "date": "3 days ago",
                "comment": "Ace Repair Plumbing did a fantastic job at our home in Fort Worth. Super fast response and transparent pricing!",
                "serviceUsed": "Emergency Hydro-Jet Drain Cleaning",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "Do you provide emergency plumbing service?",
            "answer": "Yes, our certified plumbers are on call 24/7 for urgent leaks, backups, and emergency repairs."
        }
    ]
},
  "the-plumbinator-round-rock": {
    "slug": "the-plumbinator-round-rock",
    "name": "The Plumbinator",
    "legalName": "The Plumbinator LLC",
    "domain": "plumbinatoraustin.com",
    "url": "https://plumbinatoraustin.com",
    "logoIcon": "Wrench",
    "tagline": "Round Rock's Licensed Emergency Plumbing & Drain Specialists",
    "description": "The Plumbinator provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Round Rock, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Round Rock",
    "state": "TX",
    "phone": "(512) 786-1771",
    "formattedPhone": "(512) 786-1771",
    "phoneRaw": "+15127861771",
    "email": "mickeytheplumber@yahoo.com",
    "address": {
        "street": "100 Main St",
        "city": "Round Rock",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "The Plumbinator did an amazing job for us in Round Rock. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Round Rock with rapid emergency response times to protect your property."
        }
    ]
},
  "spot-on-plumbing-round-rock": {
    "slug": "spot-on-plumbing-round-rock",
    "name": "Spot-On Plumbing",
    "legalName": "Spot-On Plumbing LLC",
    "domain": "spot-onplumbing.com",
    "url": "https://spot-onplumbing.com",
    "logoIcon": "Wrench",
    "tagline": "Round Rock's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Spot-On Plumbing provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Round Rock, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Round Rock",
    "state": "TX",
    "phone": "(512) 777-1599",
    "formattedPhone": "(512) 777-1599",
    "phoneRaw": "+15127771599",
    "email": "info@spot-onplumbing.com",
    "address": {
        "street": "100 Main St",
        "city": "Round Rock",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Spot-On Plumbing did an amazing job for us in Round Rock. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Round Rock with rapid emergency response times to protect your property."
        }
    ]
},
  "aire-geeks-round-rock": {
    "slug": "aire-geeks-round-rock",
    "name": "Aire Geeks Inc.",
    "legalName": "Aire Geeks Inc. LLC",
    "domain": "airegeeks.com",
    "url": "https://airegeeks.com",
    "logoIcon": "Wind",
    "tagline": "Round Rock's High-Efficiency AC Repair & Heating Specialists",
    "description": "Aire Geeks Inc. delivers emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations across Round Rock, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Round Rock",
    "state": "TX",
    "phone": "(737) 708-8008",
    "formattedPhone": "(737) 708-8008",
    "phoneRaw": "+17377088008",
    "email": "info@airegeeks.com",
    "address": {
        "street": "100 Main St",
        "city": "Round Rock",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Complete system upgrades with smart thermostat integration.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Aire Geeks Inc. did an amazing job for us in Round Rock. Super communicative and fast!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "ark-roofer-georgetown": {
    "slug": "ark-roofer-georgetown",
    "name": "Ark Roofer",
    "legalName": "Ark Roofer LLC",
    "domain": "arkroofer.com",
    "url": "https://arkroofer.com",
    "logoIcon": "Home",
    "tagline": "Georgetown's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Ark Roofer delivers free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support across Georgetown, TX.",
    "niche": "Roofing & Restoration",
    "city": "Georgetown",
    "state": "TX",
    "phone": "(512) 862-1921",
    "formattedPhone": "(512) 862-1921",
    "phoneRaw": "+15128621921",
    "email": "office@arkroofer.com",
    "address": {
        "street": "100 Main St",
        "city": "Georgetown",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Complimentary Storm & Leak Inspection",
            "shortDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "fullDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "basePrice": 0,
            "iconName": "Home",
            "badge": "Free Inspection"
        },
        {
            "id": "srv-2",
            "name": "Complete Architectural Shingle Replacement",
            "shortDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "fullDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "basePrice": 1200,
            "iconName": "Shield"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Ark Roofer did an amazing job for us in Georgetown. Super communicative and fast!",
                "serviceUsed": "Complimentary Storm & Leak Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "cool-tex-roofing-georgetown": {
    "slug": "cool-tex-roofing-georgetown",
    "name": "Cool Tex Roofing",
    "legalName": "Cool Tex Roofing LLC",
    "domain": "cooltexroofingtx.com",
    "url": "https://cooltexroofingtx.com",
    "logoIcon": "Home",
    "tagline": "Georgetown's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Cool Tex Roofing delivers free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support across Georgetown, TX.",
    "niche": "Roofing & Restoration",
    "city": "Georgetown",
    "state": "TX",
    "phone": "(512) 948-2665",
    "formattedPhone": "(512) 948-2665",
    "phoneRaw": "+15129482665",
    "email": "chris@cooltexroofing.net",
    "address": {
        "street": "100 Main St",
        "city": "Georgetown",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Complimentary Storm & Leak Inspection",
            "shortDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "fullDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "basePrice": 0,
            "iconName": "Home",
            "badge": "Free Inspection"
        },
        {
            "id": "srv-2",
            "name": "Complete Architectural Shingle Replacement",
            "shortDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "fullDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "basePrice": 1200,
            "iconName": "Shield"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Cool Tex Roofing did an amazing job for us in Georgetown. Super communicative and fast!",
                "serviceUsed": "Complimentary Storm & Leak Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "texas-home-performance-pflugerville": {
    "slug": "texas-home-performance-pflugerville",
    "name": "Texas Home Performance",
    "legalName": "Texas Home Performance LLC",
    "domain": "texashomeperformance.com",
    "url": "https://texashomeperformance.com",
    "logoIcon": "Wind",
    "tagline": "Pflugerville's High-Efficiency AC Repair & Heating Specialists",
    "description": "Texas Home Performance delivers emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations across Pflugerville, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Pflugerville",
    "state": "TX",
    "phone": "(512) 670-0909",
    "formattedPhone": "(512) 670-0909",
    "phoneRaw": "+15126700909",
    "email": "service@texashomeperformance.com",
    "address": {
        "street": "100 Main St",
        "city": "Pflugerville",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Complete system upgrades with smart thermostat integration.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Texas Home Performance did an amazing job for us in Pflugerville. Super communicative and fast!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "cedar-park-air-conditioning": {
    "slug": "cedar-park-air-conditioning",
    "name": "Cedar Park Air Conditioning",
    "legalName": "Cedar Park Air Conditioning LLC",
    "domain": "cedarparkac.com",
    "url": "https://cedarparkac.com",
    "logoIcon": "Wind",
    "tagline": "Cedar Park's High-Efficiency AC Repair & Heating Specialists",
    "description": "Cedar Park Air Conditioning delivers emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations across Cedar Park, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Cedar Park",
    "state": "TX",
    "phone": "(512) 331-5900",
    "formattedPhone": "(512) 331-5900",
    "phoneRaw": "+15123315900",
    "email": "cedarparkair@gmail.com",
    "address": {
        "street": "100 Main St",
        "city": "Cedar Park",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Complete system upgrades with smart thermostat integration.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Cedar Park Air Conditioning did an amazing job for us in Cedar Park. Super communicative and fast!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "mansfield-plumbing-tx": {
    "slug": "mansfield-plumbing-tx",
    "name": "Mansfield Plumbing, Electrical & Air",
    "legalName": "Mansfield Plumbing, Electrical & Air LLC",
    "domain": "mansfieldtxplumbing.com",
    "url": "https://mansfieldtxplumbing.com",
    "logoIcon": "Wrench",
    "tagline": "Mansfield's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Mansfield Plumbing, Electrical & Air provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Mansfield, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Mansfield",
    "state": "TX",
    "phone": "(817) 823-7239",
    "formattedPhone": "(817) 823-7239",
    "phoneRaw": "+18178237239",
    "email": "service@mansfieldtxplumbing.com",
    "address": {
        "street": "100 Main St",
        "city": "Mansfield",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Mansfield Plumbing, Electrical & Air did an amazing job for us in Mansfield. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Mansfield with rapid emergency response times to protect your property."
        }
    ]
},
  "wahooo-plumbers-euless": {
    "slug": "wahooo-plumbers-euless",
    "name": "Wahooo Plumbers",
    "legalName": "Wahooo Plumbers LLC",
    "domain": "wahoooplumbers.com",
    "url": "https://wahoooplumbers.com",
    "logoIcon": "Wrench",
    "tagline": "Euless's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Wahooo Plumbers provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Euless, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Euless",
    "state": "TX",
    "phone": "(817) 818-0693",
    "formattedPhone": "(817) 818-0693",
    "phoneRaw": "+18178180693",
    "email": "wahoooplumbers@gmail.com",
    "address": {
        "street": "100 Main St",
        "city": "Euless",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Wahooo Plumbers did an amazing job for us in Euless. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Euless with rapid emergency response times to protect your property."
        }
    ]
},
  "plumb-right-solutions-euless": {
    "slug": "plumb-right-solutions-euless",
    "name": "Plumb Right Solutions",
    "legalName": "Plumb Right Solutions LLC",
    "domain": "plumbrightsolutions.com",
    "url": "https://plumbrightsolutions.com",
    "logoIcon": "Wrench",
    "tagline": "Euless's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Plumb Right Solutions provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Euless, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Euless",
    "state": "TX",
    "phone": "(682) 286-5436",
    "formattedPhone": "(682) 286-5436",
    "phoneRaw": "+16822865436",
    "email": "info@plumbrightsolutions.com",
    "address": {
        "street": "100 Main St",
        "city": "Euless",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Plumb Right Solutions did an amazing job for us in Euless. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Euless with rapid emergency response times to protect your property."
        }
    ]
},
  "verified-roofing-bedford": {
    "slug": "verified-roofing-bedford",
    "name": "Verified Roofing LLC",
    "legalName": "Verified Roofing LLC LLC",
    "domain": "verified-roofing.com",
    "url": "https://verified-roofing.com",
    "logoIcon": "Home",
    "tagline": "Bedford's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Verified Roofing LLC delivers free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support across Bedford, TX.",
    "niche": "Roofing & Restoration",
    "city": "Bedford",
    "state": "TX",
    "phone": "(817) 715-6750",
    "formattedPhone": "(817) 715-6750",
    "phoneRaw": "+18177156750",
    "email": "office@verified-roofing.com",
    "address": {
        "street": "100 Main St",
        "city": "Bedford",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Complimentary Storm & Leak Inspection",
            "shortDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "fullDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "basePrice": 0,
            "iconName": "Home",
            "badge": "Free Inspection"
        },
        {
            "id": "srv-2",
            "name": "Complete Architectural Shingle Replacement",
            "shortDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "fullDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "basePrice": 1200,
            "iconName": "Shield"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Verified Roofing LLC did an amazing job for us in Bedford. Super communicative and fast!",
                "serviceUsed": "Complimentary Storm & Leak Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "parker-county-cooling-weatherford": {
    "slug": "parker-county-cooling-weatherford",
    "name": "Parker County Cooling & Heating",
    "legalName": "Parker County Cooling & Heating LLC",
    "domain": "parkercountyac.com",
    "url": "https://parkercountyac.com",
    "logoIcon": "Wind",
    "tagline": "Weatherford's High-Efficiency AC Repair & Heating Specialists",
    "description": "Parker County Cooling & Heating delivers emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations across Weatherford, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Weatherford",
    "state": "TX",
    "phone": "(817) 587-4899",
    "formattedPhone": "(817) 587-4899",
    "phoneRaw": "+18175874899",
    "email": "info@parkercountyac.com",
    "address": {
        "street": "100 Main St",
        "city": "Weatherford",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Complete system upgrades with smart thermostat integration.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Parker County Cooling & Heating did an amazing job for us in Weatherford. Super communicative and fast!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "pinnacle-plumbing-temple": {
    "slug": "pinnacle-plumbing-temple",
    "name": "Pinnacle Plumbing & Mechanical",
    "legalName": "Pinnacle Plumbing & Mechanical LLC",
    "domain": "pinnacleplumbingtx.com",
    "url": "https://pinnacleplumbingtx.com",
    "logoIcon": "Wrench",
    "tagline": "Temple's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Pinnacle Plumbing & Mechanical provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Temple, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Temple",
    "state": "TX",
    "phone": "(254) 466-8078",
    "formattedPhone": "(254) 466-8078",
    "phoneRaw": "+12544668078",
    "email": "pinnacleplumbingtx@gmail.com",
    "address": {
        "street": "100 Main St",
        "city": "Temple",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Pinnacle Plumbing & Mechanical did an amazing job for us in Temple. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Temple with rapid emergency response times to protect your property."
        }
    ]
},
  "prince-plumbing-temple": {
    "slug": "prince-plumbing-temple",
    "name": "Prince Plumbing & Mechanical",
    "legalName": "Prince Plumbing & Mechanical LLC",
    "domain": "princeplumbingco.com",
    "url": "https://princeplumbingco.com",
    "logoIcon": "Wrench",
    "tagline": "Temple's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Prince Plumbing & Mechanical provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Temple, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Temple",
    "state": "TX",
    "phone": "(254) 298-9994",
    "formattedPhone": "(254) 298-9994",
    "phoneRaw": "+12542989994",
    "email": "service@princeplumbingco.com",
    "address": {
        "street": "100 Main St",
        "city": "Temple",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Prince Plumbing & Mechanical did an amazing job for us in Temple. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Temple with rapid emergency response times to protect your property."
        }
    ]
},
  "malek-service-bryan": {
    "slug": "malek-service-bryan",
    "name": "Malek Service Company",
    "legalName": "Malek Service Company LLC",
    "domain": "malekservice.com",
    "url": "https://malekservice.com",
    "logoIcon": "Wind",
    "tagline": "Bryan's High-Efficiency AC Repair & Heating Specialists",
    "description": "Malek Service Company delivers emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations across Bryan, TX.",
    "niche": "HVAC & Air Conditioning",
    "city": "Bryan",
    "state": "TX",
    "phone": "(979) 446-0296",
    "formattedPhone": "(979) 446-0296",
    "phoneRaw": "+19794460296",
    "email": "info@malekservice.com",
    "address": {
        "street": "100 Main St",
        "city": "Bryan",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency AC Repair & Diagnostic",
            "shortDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "fullDesc": "Rapid cooling diagnostics and refrigerant recharge.",
            "basePrice": 89,
            "iconName": "Wind",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "High-Efficiency HVAC Replacement",
            "shortDesc": "Complete system upgrades with smart thermostat integration.",
            "fullDesc": "Complete system upgrades with smart thermostat integration.",
            "basePrice": 499,
            "iconName": "Flame"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Malek Service Company did an amazing job for us in Bryan. Super communicative and fast!",
                "serviceUsed": "Emergency AC Repair & Diagnostic",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "What is included in an HVAC diagnostic visit?",
            "answer": "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        }
    ]
},
  "schulte-roofing-bryan": {
    "slug": "schulte-roofing-bryan",
    "name": "Schulte Roofing",
    "legalName": "Schulte Roofing LLC",
    "domain": "schulteroofing.com",
    "url": "https://schulteroofing.com",
    "logoIcon": "Home",
    "tagline": "Bryan's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Schulte Roofing delivers free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support across Bryan, TX.",
    "niche": "Roofing & Restoration",
    "city": "Bryan",
    "state": "TX",
    "phone": "(979) 209-0148",
    "formattedPhone": "(979) 209-0148",
    "phoneRaw": "+19792090148",
    "email": "sales@schulteroofing.com",
    "address": {
        "street": "100 Main St",
        "city": "Bryan",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Complimentary Storm & Leak Inspection",
            "shortDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "fullDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "basePrice": 0,
            "iconName": "Home",
            "badge": "Free Inspection"
        },
        {
            "id": "srv-2",
            "name": "Complete Architectural Shingle Replacement",
            "shortDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "fullDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "basePrice": 1200,
            "iconName": "Shield"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Schulte Roofing did an amazing job for us in Bryan. Super communicative and fast!",
                "serviceUsed": "Complimentary Storm & Leak Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "tyler-roofing-company-tyler": {
    "slug": "tyler-roofing-company-tyler",
    "name": "Tyler Roofing Company Inc.",
    "legalName": "Tyler Roofing Company Inc. LLC",
    "domain": "tylerroofingco.com",
    "url": "https://tylerroofingco.com",
    "logoIcon": "Home",
    "tagline": "Tyler's Storm Damage, Leak Repair & Roof Replacement",
    "description": "Tyler Roofing Company Inc. delivers free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support across Tyler, TX.",
    "niche": "Roofing & Restoration",
    "city": "Tyler",
    "state": "TX",
    "phone": "(903) 597-4152",
    "formattedPhone": "(903) 597-4152",
    "phoneRaw": "+19035974152",
    "email": "tylerroofingco@gmail.com",
    "address": {
        "street": "100 Main St",
        "city": "Tyler",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#1e3a8a",
        "primaryDark": "#172554",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Complimentary Storm & Leak Inspection",
            "shortDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "fullDesc": "Thorough drone & physical inspection of shingle integrity and flashing.",
            "basePrice": 0,
            "iconName": "Home",
            "badge": "Free Inspection"
        },
        {
            "id": "srv-2",
            "name": "Complete Architectural Shingle Replacement",
            "shortDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "fullDesc": "Premium Class-4 impact-resistant shingle installations with lifetime warranty.",
            "basePrice": 1200,
            "iconName": "Shield"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Tyler Roofing Company Inc. did an amazing job for us in Tyler. Super communicative and fast!",
                "serviceUsed": "Complimentary Storm & Leak Inspection",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How much does a roof damage inspection cost?",
            "answer": "Our initial storm inspection and damage report are 100% complimentary with no obligation."
        }
    ]
},
  "eschberger-plumbing-tyler": {
    "slug": "eschberger-plumbing-tyler",
    "name": "Eschberger Plumbing",
    "legalName": "Eschberger Plumbing LLC",
    "domain": "eschbergerplumbing.com",
    "url": "https://eschbergerplumbing.com",
    "logoIcon": "Wrench",
    "tagline": "Tyler's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Eschberger Plumbing provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Tyler, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Tyler",
    "state": "TX",
    "phone": "(903) 581-1200",
    "formattedPhone": "(903) 581-1200",
    "phoneRaw": "+19035811200",
    "email": "eschbergerplumbing@gmail.com",
    "address": {
        "street": "100 Main St",
        "city": "Tyler",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Eschberger Plumbing did an amazing job for us in Tyler. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Tyler with rapid emergency response times to protect your property."
        }
    ]
},
  "armstrong-plumbing-pearland": {
    "slug": "armstrong-plumbing-pearland",
    "name": "Armstrong Plumbing Company",
    "legalName": "Armstrong Plumbing Company LLC",
    "domain": "armstrongplumbingcompany.com",
    "url": "https://armstrongplumbingcompany.com",
    "logoIcon": "Wrench",
    "tagline": "Pearland's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Armstrong Plumbing Company provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Pearland, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Pearland",
    "state": "TX",
    "phone": "(281) 485-3838",
    "formattedPhone": "(281) 485-3838",
    "phoneRaw": "+12814853838",
    "email": "admin@armstrongplumbingcompany.com",
    "address": {
        "street": "100 Main St",
        "city": "Pearland",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Armstrong Plumbing Company did an amazing job for us in Pearland. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Pearland with rapid emergency response times to protect your property."
        }
    ]
},
  "texas-premier-plumbing-sugar-land": {
    "slug": "texas-premier-plumbing-sugar-land",
    "name": "Texas Premier Plumbing",
    "legalName": "Texas Premier Plumbing LLC",
    "domain": "texaspremierplumbing.com",
    "url": "https://texaspremierplumbing.com",
    "logoIcon": "Wrench",
    "tagline": "Sugar Land's Licensed Emergency Plumbing & Drain Specialists",
    "description": "Texas Premier Plumbing provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across Sugar Land, TX.",
    "niche": "Plumbing & Drain Services",
    "city": "Sugar Land",
    "state": "TX",
    "phone": "(713) 955-1919",
    "formattedPhone": "(713) 955-1919",
    "phoneRaw": "+17139551919",
    "email": "info@texaspremierplumbing.com",
    "address": {
        "street": "100 Main St",
        "city": "Sugar Land",
        "state": "TX",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    },
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    },
    "colors": {
        "primary": "#0284c7",
        "primaryDark": "#0369a1",
        "accent": "#ea580c"
    },
    "trustBadges": [
        {
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        },
        {
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        },
        {
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        },
        {
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }
    ],
    "services": [
        {
            "id": "srv-1",
            "name": "Emergency Plumbing Repair & Diagnostics",
            "shortDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "fullDesc": "Rapid diagnostics and prompt repair for household leaks and line breaks.",
            "basePrice": 89,
            "iconName": "Wrench",
            "badge": "Same Day"
        },
        {
            "id": "srv-2",
            "name": "Hydro Jetting & Main Sewer Line Clearing",
            "shortDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "fullDesc": "High-pressure clearing of deep clogs, tree roots, and sediment buildup.",
            "basePrice": 189,
            "iconName": "Droplet"
        }
    ],
    "reviews": {
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "Texas Premier Plumbing did an amazing job for us in Sugar Land. Super communicative and fast!",
                "serviceUsed": "Emergency Plumbing Repair & Diagnostics",
                "verified": true
            }
        ]
    },
    "faqs": [
        {
            "question": "How quickly can a technician reach my home in an emergency?",
            "answer": "Our dispatch trucks operate across Sugar Land with rapid emergency response times to protect your property."
        }
    ]
}
};
