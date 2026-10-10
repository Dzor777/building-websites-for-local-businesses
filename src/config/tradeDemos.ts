import type { SiteConfig } from './site';

export interface TradeDemoMeta {
  id: string;
  name: string;
  trade: string;
  tradeNoun: string;
  shortDesc: string;
  tagline: string;
  previewSlug: string;
  aliases: string[];
  heroImageUrl: string;
  badge: string;
  iconName: string;
  color: string;
}

export const tradeDemosList: TradeDemoMeta[] = [
  {
    id: 'hvac',
    name: 'Apex Heating & Air Conditioning',
    trade: 'HVAC & Air Conditioning',
    tradeNoun: 'HVAC TECHNICIANS',
    shortDesc: 'Emergency AC repair, heat pump replacement, 21-point seasonal tune-ups, and duct sanitation.',
    tagline: 'High-Efficiency HVAC Repair & 24/7 Rapid Emergency Cooling',
    previewSlug: 'apex-hvac',
    aliases: ['hvac', 'ac-repair', 'heating-air'],
    heroImageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600',
    badge: '24/7 Rapid Cooling Dispatch',
    iconName: 'Wind',
    color: '#0284c7'
  },
  {
    id: 'roofing',
    name: 'Summit Roofing & Restoration',
    trade: 'Roofing & Restoration',
    tradeNoun: 'ROOFERS',
    shortDesc: 'Drone storm damage inspections, architectural shingle replacement, leak repairs, and seamless gutters.',
    tagline: 'Precision Hail Restoration & Lifetime Architectural Shingle Upgrades',
    previewSlug: 'summit-roofing',
    aliases: ['roofing', 'roofer', 'roof-repair'],
    heroImageUrl: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1600',
    badge: 'Free Drone Hail Inspection',
    iconName: 'Home',
    color: '#ea580c'
  },
  {
    id: 'plumbing',
    name: 'FlowGuard Master Plumbing',
    trade: 'Plumbing & Drain Services',
    tradeNoun: 'PLUMBERS',
    shortDesc: 'Slab leak detection, emergency pipe bursts, tankless water heater installation, and hydro-jetting.',
    tagline: 'Licensed Master Plumbers & Fast 1-Tap Emergency Dispatch',
    previewSlug: 'flowguard-plumbing',
    aliases: ['plumbing', 'plumber', 'drain-cleaning'],
    heroImageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1600',
    badge: '1-Hour Rapid Dispatch',
    iconName: 'Droplet',
    color: '#1e40af'
  },
  {
    id: 'electrical',
    name: 'VoltCraft Electrical Co.',
    trade: 'Electrical Services',
    tradeNoun: 'ELECTRICIANS',
    shortDesc: '200A electrical panel upgrades, EV home charger installs, whole-home rewiring, and emergency diagnostics.',
    tagline: 'Licensed Master Electricians & Precision Code Upgrades',
    previewSlug: 'voltcraft-electric',
    aliases: ['electrical', 'electrician', 'electric'],
    heroImageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1600',
    badge: 'Licensed Master Electricians',
    iconName: 'Zap',
    color: '#d97706'
  },
  {
    id: 'painting',
    name: 'Artisan Pro Painting & Staining',
    trade: 'Painting & Finishes',
    tradeNoun: 'PAINTERS',
    shortDesc: 'Interior wall restoration, exterior weather-shield painting, custom cabinet spraying, and deck staining.',
    tagline: 'Flawless Interior & Exterior Painting with 5-Year Craftsmanship Warranty',
    previewSlug: 'artisan-painting',
    aliases: ['painting', 'painter', 'house-painting'],
    heroImageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1600',
    badge: '5-Year Finish Guarantee',
    iconName: 'Brush',
    color: '#059669'
  },
  {
    id: 'lawncare',
    name: 'GreenHaven Lawn & Landscaping',
    trade: 'Lawn Care & Landscaping',
    tradeNoun: 'LAWN & LANDSCAPING PROS',
    shortDesc: 'Weekly precision mowing, core aeration, seasonal fertilization, flowerbed mulching, and weed defense.',
    tagline: 'Pristine Turf Management & Full-Service Residential Property Care',
    previewSlug: 'greenhaven-lawncare',
    aliases: ['lawncare', 'lawn-care', 'landscaping', 'mowing'],
    heroImageUrl: './images/lawn-care.jpg',
    badge: 'Weekly & Bi-Weekly Routes',
    iconName: 'Trees',
    color: '#16a34a'
  },
  {
    id: 'tree-cutting',
    name: 'Timberline Tree Service & Removal',
    trade: 'Tree Service & Removal',
    tradeNoun: 'TREE ARBORISTS',
    shortDesc: 'Hazardous tree removal, crane-assisted clearing, crown thinning, stump grinding, and storm emergency dispatch.',
    tagline: 'Certified Arborists & Heavy Crane Tree Removal Specialists',
    previewSlug: 'timberline-tree-service',
    aliases: ['tree-cutting', 'tree-service', 'trees', 'tree-removal'],
    heroImageUrl: './images/tree-service.jpg',
    badge: 'Fully Insured & Rigged',
    iconName: 'Shovel',
    color: '#15803d'
  },
  {
    id: 'pressure-washing',
    name: 'AquaClean Pressure Washing & SoftWash',
    trade: 'Pressure Washing & Exterior Cleaning',
    tradeNoun: 'PRESSURE WASHERS',
    shortDesc: 'Driveway surface cleaning, soft-wash house siding, black streak roof algae removal, and commercial concrete.',
    tagline: 'Instant Curb Appeal Restoration & Low-Pressure SoftWash Systems',
    previewSlug: 'aquaclean-pressure-washing',
    aliases: ['pressure-washing', 'power-washing', 'softwash'],
    heroImageUrl: './images/pressure-washing.jpg',
    badge: 'Zero Surface Damage Guarantee',
    iconName: 'Droplets',
    color: '#06b6d4'
  }
];

export const tradeDemosConfigs: Record<string, SiteConfig> = {
  'apex-hvac': {
    slug: 'apex-hvac',
    name: 'Apex Heating & Air Conditioning',
    legalName: 'Apex Heating & Air Conditioning LLC',
    domain: 'apexheatingair-demo.com',
    url: 'https://dzor777.github.io/building-websites-for-local-businesses/?demo=hvac',
    googleAnalyticsId: '',
    web3FormsAccessKey: '',
    heroImageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600',
    logoIcon: 'Wind',
    tagline: 'High-Efficiency HVAC Repair & 24/7 Rapid Emergency Cooling',
    description: 'Emergency AC repair, seasonal tune-ups, high-efficiency heat pump replacement, and air duct sanitation across North Texas.',
    niche: 'HVAC & Air Conditioning',
    city: 'Dallas-Fort Worth',
    state: 'TX',
    phone: '(469) 555-0142',
    formattedPhone: '(469) 555-0142',
    phoneRaw: '+14695550142',
    email: 'service@apexheatingair-demo.com',
    address: {
      street: '1240 Service Way',
      city: 'Carrollton',
      state: 'TX',
      zip: '75006',
      googleMapsEmbedUrl: ''
    },
    hours: {
      days: 'Mon - Sun',
      time: '24/7 Emergency Dispatch',
      is24_7: true
    },
    colors: {
      primary: '#0284c7',
      primaryDark: '#0369a1',
      accent: '#f59e0b'
    },
    trustBadges: [
      { title: 'Licensed & Insured', subtitle: 'Texas TACLB #88412E', icon: 'ShieldCheck' },
      { title: 'Upfront Flat Pricing', subtitle: 'No Surprise Diagnostics', icon: 'DollarSign' },
      { title: '1-Hour Response', subtitle: 'Emergency Cooling Crews', icon: 'Clock' },
      { title: '100% Satisfaction', subtitle: 'Guaranteed Craftsmanship', icon: 'Award' }
    ],
    services: [
      {
        id: 'ac-repair',
        name: 'Emergency AC Diagnostic & Repair',
        shortDesc: 'Rapid troubleshooting for refrigerant leaks, blown capacitors, frozen coils, and fan motors.',
        fullDesc: 'Comprehensive electrical diagnostics, compressor test, airflow calibration, and same-day replacement parts.',
        basePrice: 185,
        iconName: 'Wind',
        badge: 'Most Requested'
      },
      {
        id: 'seasonal-tuneup',
        name: '21-Point HVAC Maintenance Tune-Up',
        shortDesc: 'Seasonal multi-point inspection to boost cooling efficiency and prevent mid-summer breakdowns.',
        fullDesc: 'Coil cleaning, electrical terminal tightening, thermostat calibration, filter change, and motor lubrication.',
        basePrice: 89,
        iconName: 'CheckCircle2'
      },
      {
        id: 'system-replacement',
        name: 'High-Efficiency System Replacement',
        shortDesc: 'Complete SEER2-rated AC and heat pump installations with 10-year manufacturer warranty.',
        fullDesc: 'Custom load calculation, variable-speed condenser install, digital smart thermostat, and old system disposal.',
        basePrice: 3850,
        iconName: 'Cpu',
        badge: '10-Yr Warranty'
      },
      {
        id: 'duct-sanitation',
        name: 'Air Duct Cleaning & Sanitation',
        shortDesc: 'Eliminate indoor dust, allergens, and mold spores with whole-home negative air sanitation.',
        fullDesc: 'High-power rotary brush duct scouring, anti-microbial fogging, register grate cleaning, and airflow testing.',
        basePrice: 295,
        iconName: 'Sparkles'
      }
    ],
    reviews: {
      googleRating: 4.9,
      totalReviews: 384,
      items: [
        {
          id: 'hvac-1',
          author: 'Marcus Vance',
          rating: 5,
          date: '3 days ago',
          comment: 'Our AC completely died on a 102-degree afternoon. Apex arrived in 45 minutes, replaced the capacitor, and had cold air blowing before dinner. Incredible emergency service!',
          serviceUsed: 'Emergency AC Repair',
          verified: true
        },
        {
          id: 'hvac-2',
          author: 'Rachel Steinberg',
          rating: 5,
          date: '2 weeks ago',
          comment: 'Upgraded to a 18 SEER heat pump. The quote calculator on their website gave us an exact estimate with zero pressure. Our electric bill dropped $140 the first month.',
          serviceUsed: 'System Replacement',
          verified: true
        }
      ]
    },
    faqs: [
      {
        question: 'How fast can a technician arrive for an emergency AC breakdown?',
        answer: 'Our on-call mobile vans are dispatched immediately, with typical arrival times under 60 minutes across the metro area.'
      },
      {
        question: 'Do you charge extra for weekend or after-hours service calls?',
        answer: 'We provide upfront flat-rate pricing with zero hidden surcharges or surprise diagnostic fees before work begins.'
      }
    ]
  },

  'summit-roofing': {
    slug: 'summit-roofing',
    name: 'Summit Roofing & Restoration',
    legalName: 'Summit Roofing & Restoration LLC',
    domain: 'summitroofing-demo.com',
    url: 'https://dzor777.github.io/building-websites-for-local-businesses/?demo=roofing',
    googleAnalyticsId: '',
    web3FormsAccessKey: '',
    heroImageUrl: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1600',
    logoIcon: 'Home',
    tagline: 'Precision Hail Restoration & Lifetime Architectural Shingle Upgrades',
    description: 'Drone storm damage inspections, architectural shingle replacement, leak repairs, and seamless gutters across North Texas.',
    niche: 'Roofing & Restoration',
    city: 'Plano',
    state: 'TX',
    phone: '(972) 555-0188',
    formattedPhone: '(972) 555-0188',
    phoneRaw: '+19725550188',
    email: 'info@summitroofing-demo.com',
    address: {
      street: '4800 Legacy Drive',
      city: 'Plano',
      state: 'TX',
      zip: '75024',
      googleMapsEmbedUrl: ''
    },
    hours: {
      days: 'Mon - Sat',
      time: '7:00 AM - 7:00 PM (Emergency Storm Crews 24/7)',
      is24_7: true
    },
    colors: {
      primary: '#ea580c',
      primaryDark: '#c2410c',
      accent: '#38bdf8'
    },
    trustBadges: [
      { title: 'Owens Corning Platinum', subtitle: 'Certified Master Installer', icon: 'ShieldCheck' },
      { title: 'Free Drone Inspection', subtitle: 'High-Res Roof Photos', icon: 'Camera' },
      { title: 'Class 4 Impact Shingles', subtitle: 'Up to 25% Insurance Discount', icon: 'Award' },
      { title: 'Lifetime Workmanship', subtitle: 'Transferable Warranty', icon: 'CheckCircle2' }
    ],
    services: [
      {
        id: 'hail-inspection',
        name: 'High-Definition Drone Roof Inspection',
        shortDesc: 'Comprehensive aerial drone imaging to detect micro-cracks, displaced granules, and flashing leaks.',
        fullDesc: 'Full photographic roof report, attic moisture check, chimney flashing analysis, and insurance documentation.',
        basePrice: 0,
        iconName: 'Camera',
        badge: '100% Free'
      },
      {
        id: 'roof-replacement',
        name: 'Complete Architectural Roof Replacement',
        shortDesc: 'Tear-off, synthetic underlayment, and Class 4 impact-resistant architectural shingles.',
        fullDesc: 'Complete 6-nail wind-rated installation, ice & water shield in valleys, ridge vent ventilation, and magnet nail sweep.',
        basePrice: 5200,
        iconName: 'Home',
        badge: 'Lifetime Warranty'
      },
      {
        id: 'emergency-leak-repair',
        name: 'Emergency Tarping & Active Leak Repair',
        shortDesc: 'Immediate waterproof tarp installation and structural leak diagnosis during severe storms.',
        fullDesc: 'Pipe boot replacement, step flashing seal, damaged decking repair, and temporary waterproof membrane.',
        basePrice: 350,
        iconName: 'Wrench'
      },
      {
        id: 'seamless-gutters',
        name: '6-Inch Seamless Aluminum Gutters',
        shortDesc: 'Custom on-site extruded seamless gutters with leaf guard protection to protect foundations.',
        fullDesc: 'Baked-on enamel color matching, heavy-duty hidden hangers, enlarged 3x4 downspouts, and foundation splash blocks.',
        basePrice: 850,
        iconName: 'Droplet'
      }
    ],
    reviews: {
      googleRating: 5.0,
      totalReviews: 412,
      items: [
        {
          id: 'roof-1',
          author: 'Brian Kirkpatrick',
          rating: 5,
          date: '1 week ago',
          comment: 'After the spring hail storm, Summit came out with a drone, showed us high-res photos of the damage, and replaced our entire 3,200 sq ft roof in just one day. Cleaned up every nail!',
          serviceUsed: 'Roof Replacement',
          verified: true
        },
        {
          id: 'roof-2',
          author: 'Courtney Miller',
          rating: 5,
          date: '3 weeks ago',
          comment: 'Had a persistent leak around our chimney that two other roofers failed to solve. Summit rebuilt the saddle flashing properly and it has been bone-dry through three major storms.',
          serviceUsed: 'Leak Repair',
          verified: true
        }
      ]
    },
    faqs: [
      {
        question: 'Do you help homeowners navigate insurance hail claims?',
        answer: 'Yes, we provide documented drone photos and meet directly with your insurance adjuster on the roof to ensure all storm damage is properly covered.'
      },
      {
        question: 'How long does a full residential roof replacement take?',
        answer: 'Over 90% of our residential roof replacements are completed in a single day, followed by thorough ground magnet sweeping.'
      }
    ]
  },

  'flowguard-plumbing': {
    slug: 'flowguard-plumbing',
    name: 'FlowGuard Master Plumbing',
    legalName: 'FlowGuard Master Plumbing LLC',
    domain: 'flowguardplumbing-demo.com',
    url: 'https://dzor777.github.io/building-websites-for-local-businesses/?demo=plumbing',
    googleAnalyticsId: '',
    web3FormsAccessKey: '',
    heroImageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1600',
    logoIcon: 'Droplet',
    tagline: 'Licensed Master Plumbers & Fast 1-Tap Emergency Dispatch',
    description: 'Slab leak detection, emergency pipe bursts, tankless water heater installation, and hydro-jetting across North Texas.',
    niche: 'Plumbing & Drain Services',
    city: 'McKinney',
    state: 'TX',
    phone: '(214) 555-0193',
    formattedPhone: '(214) 555-0193',
    phoneRaw: '+12145550193',
    email: 'dispatch@flowguardplumbing-demo.com',
    address: {
      street: '710 Industrial Blvd',
      city: 'McKinney',
      state: 'TX',
      zip: '75069',
      googleMapsEmbedUrl: ''
    },
    hours: {
      days: 'Mon - Sun',
      time: '24/7 Emergency Dispatch',
      is24_7: true
    },
    colors: {
      primary: '#1e40af',
      primaryDark: '#1e3a8a',
      accent: '#f59e0b'
    },
    trustBadges: [
      { title: 'Texas Master Plumber', subtitle: 'License #M-42198', icon: 'ShieldCheck' },
      { title: 'Zero Slab Destruction', subtitle: 'Acoustic Leak Detection', icon: 'Activity' },
      { title: 'Upfront Flat Pricing', subtitle: 'No Hourly Guesswork', icon: 'DollarSign' },
      { title: '24/7 Mobile Vans', subtitle: 'Fully Stocked Parts', icon: 'Clock' }
    ],
    services: [
      {
        id: 'slab-leak-detection',
        name: 'Non-Invasive Slab Leak Detection',
        shortDesc: 'Acoustic ultrasound and thermal imaging to pinpoint sub-foundation leaks without tearing up floors.',
        fullDesc: 'Electronic pipe tracing, hydrostatic pressure test, thermal imaging, and direct non-destructive pipe bypass options.',
        basePrice: 285,
        iconName: 'Activity',
        badge: 'Specialized'
      },
      {
        id: 'tankless-water-heater',
        name: 'Navien Tankless Water Heater Install',
        shortDesc: 'Endless on-demand hot water, space-saving wall mount, and up to 40% energy bill savings.',
        fullDesc: 'Gas line sizing calculation, venting install, old tank disposal, dedicated scale filter, and digital controller.',
        basePrice: 2200,
        iconName: 'Flame',
        badge: 'Endless Hot Water'
      },
      {
        id: 'hydro-jetting',
        name: 'High-Pressure Hydro Jetting',
        shortDesc: '4,000 PSI scouring to clear stubborn tree root intrusions, grease buildup, and recurring sewer clogs.',
        fullDesc: 'Full HD color camera inspection before & after, complete 360-degree sewer pipe scouring, and line warranty.',
        basePrice: 395,
        iconName: 'Droplets'
      },
      {
        id: 'drain-clearing',
        name: 'Main Drain & Toilet Clearing',
        shortDesc: 'Fast mechanical snaking to clear clogged kitchen sinks, showers, and blocked main drains.',
        fullDesc: 'Motorized drain snake clearing, camera check, and bio-enzyme pipe restoration treatment.',
        basePrice: 125,
        iconName: 'Wrench'
      }
    ],
    reviews: {
      googleRating: 4.9,
      totalReviews: 298,
      items: [
        {
          id: 'plumb-1',
          author: 'Jason Hargrove',
          rating: 5,
          date: '5 days ago',
          comment: 'We heard running water under our kitchen tile with high water bills. FlowGuard found the exact copper pinhole leak in 20 minutes without jackhammering our living room. True professionals.',
          serviceUsed: 'Slab Leak Detection',
          verified: true
        },
        {
          id: 'plumb-2',
          author: 'Elena Gomez',
          rating: 5,
          date: '3 weeks ago',
          comment: 'Swapped out our 12-year-old leaking 50-gallon tank for a Navien tankless system. FlowGuard completed the entire job cleanly in under 5 hours. Endless hot water forever!',
          serviceUsed: 'Tankless Water Heater',
          verified: true
        }
      ]
    },
    faqs: [
      {
        question: 'What are the classic warning signs of a slab leak under my foundation?',
        answer: 'Unusually high water bills, warm spots on tile or wood floors, the sound of rushing water when fixtures are off, or sudden foundation cracks.'
      },
      {
        question: 'Do you offer flat-rate pricing before opening the walls or pipes?',
        answer: 'Always. We diagnose the issue, explain the exact options, and provide a binding flat-rate price before any tool touches your home.'
      }
    ]
  },

  'voltcraft-electric': {
    slug: 'voltcraft-electric',
    name: 'VoltCraft Electrical Co.',
    legalName: 'VoltCraft Electrical Co. LLC',
    domain: 'voltcraftelectric-demo.com',
    url: 'https://dzor777.github.io/building-websites-for-local-businesses/?demo=electrical',
    googleAnalyticsId: '',
    web3FormsAccessKey: '',
    heroImageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1600',
    logoIcon: 'Zap',
    tagline: 'Licensed Master Electricians & Precision Code Upgrades',
    description: '200A electrical panel upgrades, EV home charger installs, whole-home rewiring, and emergency diagnostics across North Texas.',
    niche: 'Electrical Services',
    city: 'Frisco',
    state: 'TX',
    phone: '(469) 555-0176',
    formattedPhone: '(469) 555-0176',
    phoneRaw: '+14695550176',
    email: 'service@voltcraftelectric-demo.com',
    address: {
      street: '8900 Main Street',
      city: 'Frisco',
      state: 'TX',
      zip: '75034',
      googleMapsEmbedUrl: ''
    },
    hours: {
      days: 'Mon - Sat',
      time: '7:30 AM - 6:30 PM (24/7 Emergency Outage)',
      is24_7: true
    },
    colors: {
      primary: '#d97706',
      primaryDark: '#b45309',
      accent: '#38bdf8'
    },
    trustBadges: [
      { title: 'Master Electrician', subtitle: 'Texas TDLR #TECL-31920', icon: 'ShieldCheck' },
      { title: 'Code Compliant Guarantee', subtitle: '100% Passed Inspections', icon: 'CheckCircle2' },
      { title: 'Whole-Home Surge Spec', subtitle: 'Protect High-End Tech', icon: 'Zap' },
      { title: 'Upfront Flat Quotes', subtitle: 'Zero Hourly Metering', icon: 'DollarSign' }
    ],
    services: [
      {
        id: 'panel-upgrade',
        name: '200-Amp Main Breaker Panel Upgrade',
        shortDesc: 'Replace outdated or hazardous panels with modern 200A square D/Siemens breaker panels.',
        fullDesc: 'Whole-home load calculation, grounding rod installation, whole-home surge protector, and city permit & inspection.',
        basePrice: 1950,
        iconName: 'Cpu',
        badge: 'Home Safety Must'
      },
      {
        id: 'ev-charger',
        name: 'Level 2 EV Charger Installation',
        shortDesc: 'Dedicated 240V 50A circuits for Tesla Wall Connector, ChargePoint, and universal EV chargers.',
        fullDesc: 'Dedicated heavy-gauge copper conduit run, GFCI protection breaker, wall mounting, and smart vehicle charge testing.',
        basePrice: 550,
        iconName: 'Zap',
        badge: 'Fast Charging'
      },
      {
        id: 'generator-hookup',
        name: 'Whole-Home Generator Interlock Switch',
        shortDesc: 'Safe, code-compliant manual transfer switches to run AC and home essentials during grid power outages.',
        fullDesc: 'Generator inlet box exterior mount, mechanical interlock kit, load breaker labeling, and test run.',
        basePrice: 750,
        iconName: 'Power'
      },
      {
        id: 'lighting-recessed',
        name: 'LED Recessed Can & Accent Lighting',
        shortDesc: 'Ultra-thin modern LED wafer lighting layouts for kitchens, living rooms, and exterior soffits.',
        fullDesc: 'Clean drywall cutting, junction box wiring, Lutron smart dimmer switch install, and color temperature tuning.',
        basePrice: 420,
        iconName: 'Sun'
      }
    ],
    reviews: {
      googleRating: 5.0,
      totalReviews: 247,
      items: [
        {
          id: 'elec-1',
          author: 'Travis Holloway',
          rating: 5,
          date: '2 weeks ago',
          comment: 'VoltCraft upgraded our old 100A panel to 200A and installed a Tesla Level 2 charger in our garage. Passed city inspection on the very first try. Flawless conduit bends and clean labels!',
          serviceUsed: 'Panel Upgrade & EV Charger',
          verified: true
        },
        {
          id: 'elec-2',
          author: 'Sophia Chen',
          rating: 5,
          date: '1 month ago',
          comment: 'We were having recurring breaker trips whenever the microwave and oven ran together. VoltCraft diagnosed a loose bus bar and fixed it within an hour. Honest, transparent technicians.',
          serviceUsed: 'Emergency Electrical Repair',
          verified: true
        }
      ]
    },
    faqs: [
      {
        question: 'Do I need a panel upgrade to charge an electric car at home?',
        answer: 'If your home has a 100-amp panel, adding a 50-amp EV circuit can overload your service. We run a free load calculation to tell you exactly what is required.'
      },
      {
        question: 'Do you pull permits with the local municipality?',
        answer: 'Yes, all heavy electrical service upgrades, panel replacements, and EV circuits include full municipal permitting and master inspection sign-offs.'
      }
    ]
  },

  'artisan-painting': {
    slug: 'artisan-painting',
    name: 'Artisan Pro Painting & Staining',
    legalName: 'Artisan Pro Painting & Staining LLC',
    domain: 'artisanpainting-demo.com',
    url: 'https://dzor777.github.io/building-websites-for-local-businesses/?demo=painting',
    googleAnalyticsId: '',
    web3FormsAccessKey: '',
    heroImageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1600',
    logoIcon: 'Brush',
    tagline: 'Flawless Interior & Exterior Painting with 5-Year Craftsmanship Warranty',
    description: 'Interior wall restoration, exterior weather-shield painting, custom cabinet spraying, and deck staining across North Texas.',
    niche: 'Painting & Finishes',
    city: 'Denton',
    state: 'TX',
    phone: '(940) 555-0164',
    formattedPhone: '(940) 555-0164',
    phoneRaw: '+19405550164',
    email: 'info@artisanpainting-demo.com',
    address: {
      street: '320 Oak Street',
      city: 'Denton',
      state: 'TX',
      zip: '76201',
      googleMapsEmbedUrl: ''
    },
    hours: {
      days: 'Mon - Fri',
      time: '7:30 AM - 6:00 PM (Sat Estimates by Appt)',
      is24_7: false
    },
    colors: {
      primary: '#059669',
      primaryDark: '#047857',
      accent: '#f59e0b'
    },
    trustBadges: [
      { title: 'Sherwin-Williams Pro', subtitle: 'Premium Emerald Paints', icon: 'ShieldCheck' },
      { title: 'Meticulous Prep Work', subtitle: 'Caulked, Sanded & Primed', icon: 'CheckCircle2' },
      { title: '5-Year No-Peel Warranty', subtitle: 'Exterior Weather Shield', icon: 'Award' },
      { title: 'Clean Home Promise', subtitle: 'Floors Masked & Protected', icon: 'Sparkles' }
    ],
    services: [
      {
        id: 'interior-painting',
        name: 'Whole-Home Interior Painting',
        shortDesc: 'Walls, ceilings, trim, baseboards, and doors painted with low-VOC premium Sherwin-Williams paints.',
        fullDesc: 'Comprehensive drywall spackle & hole patching, tape-line masking, furniture covering, 2 finish coats, and final touchup walk.',
        basePrice: 950,
        iconName: 'Brush',
        badge: 'Most Popular'
      },
      {
        id: 'exterior-painting',
        name: 'Exterior Weather-Shield Painting',
        shortDesc: 'Power-wash prep, rotted wood replacement, elastomeric caulking, and durable exterior weather protection.',
        fullDesc: 'High-pressure wash, peeling paint scraping, primer coat on bare wood, trim spray & back-roll, and 5-year warranty.',
        basePrice: 2400,
        iconName: 'Home',
        badge: '5-Yr Guarantee'
      },
      {
        id: 'cabinet-refinishing',
        name: 'Factory-Finish Cabinet Spraying',
        shortDesc: 'Transform dated oak cabinets into smooth factory-finish enamel (white, navy, charcoal, or custom).',
        fullDesc: 'Door removal, degreasing, multi-stage sanding, high-adhesion bonding primer, dual spray urethane topcoats, and hardware install.',
        basePrice: 1850,
        iconName: 'Layers'
      },
      {
        id: 'deck-fence-staining',
        name: 'Fence & Deck Staining / Sealing',
        shortDesc: 'Restore weathered cedar fencing and pergolas with penetrating oil-based UV defense stains.',
        fullDesc: 'Pre-rinse wood brightening, structural screw check, even airless spray application, and 3-year water repellency.',
        basePrice: 650,
        iconName: 'Shield'
      }
    ],
    reviews: {
      googleRating: 5.0,
      totalReviews: 215,
      items: [
        {
          id: 'paint-1',
          author: 'Danielle Morrison',
          rating: 5,
          date: '1 week ago',
          comment: 'Artisan sprayed our kitchen cabinets from dark honey oak to pure white. The finish feels like baked factory lacquer. Zero brush marks, flawlessly masked floors, and finished on schedule!',
          serviceUsed: 'Cabinet Refinishing',
          verified: true
        },
        {
          id: 'paint-2',
          author: 'Keith Gallagher',
          rating: 5,
          date: '4 weeks ago',
          comment: 'Painted our entire two-story brick and siding home. Their crew spent an entire day just prepping, power washing, and caulking every seam before applying a single drop of paint. Superb quality.',
          serviceUsed: 'Exterior Painting',
          verified: true
        }
      ]
    },
    faqs: [
      {
        question: 'What paint brands do you use for interior and exterior jobs?',
        answer: 'We exclusively apply commercial-grade Sherwin-Williams Emerald & Duration lines, as well as Benjamin Moore Regal Select for rich pigment depth.'
      },
      {
        question: 'How do you protect furniture and hardwood floors during interior jobs?',
        answer: 'We move and seal furniture with plastic sheeting, tape heavy builder paper across all flooring, and clean the work area thoroughly at the end of each day.'
      }
    ]
  },

  'greenhaven-lawncare': {
    slug: 'greenhaven-lawncare',
    name: 'GreenHaven Lawn & Landscaping',
    legalName: 'GreenHaven Lawn & Landscaping LLC',
    domain: 'greenhavenlawn-demo.com',
    url: 'https://dzor777.github.io/building-websites-for-local-businesses/?demo=lawncare',
    googleAnalyticsId: '',
    web3FormsAccessKey: '',
    heroImageUrl: './images/lawn-care.jpg',
    logoIcon: 'Trees',
    tagline: 'Pristine Turf Management & Full-Service Residential Property Care',
    description: 'Weekly precision mowing, core aeration, seasonal fertilization, flowerbed mulching, and weed defense across North Texas.',
    niche: 'Lawn Care & Landscaping',
    city: 'Allen',
    state: 'TX',
    phone: '(214) 555-0131',
    formattedPhone: '(214) 555-0131',
    phoneRaw: '+12145550131',
    email: 'hello@greenhavenlawn-demo.com',
    address: {
      street: '1500 Exchange Pkwy',
      city: 'Allen',
      state: 'TX',
      zip: '75002',
      googleMapsEmbedUrl: ''
    },
    hours: {
      days: 'Mon - Sat',
      time: '7:00 AM - 6:30 PM',
      is24_7: false
    },
    colors: {
      primary: '#16a34a',
      primaryDark: '#15803d',
      accent: '#facc15'
    },
    trustBadges: [
      { title: 'Commercial Mowers', subtitle: 'Razor-Sharp Blades Weekly', icon: 'ShieldCheck' },
      { title: 'Texas Turf Certified', subtitle: 'Bermuda & St. Augustine', icon: 'Award' },
      { title: 'Reliable Schedule', subtitle: 'Same Day Every Week', icon: 'Clock' },
      { title: 'Gate Latch Guarantee', subtitle: 'Pets Kept 100% Safe', icon: 'CheckCircle2' }
    ],
    services: [
      {
        id: 'weekly-mowing',
        name: 'Weekly Precision Mowing & Edging',
        shortDesc: 'Striped mowing, string trimming around obstacles, razor-sharp hard edging, and driveway blowing.',
        fullDesc: 'Deck height adjusted for Bermuda / St. Augustine health, curb trench edging, weed whacking, and clean debris blowing.',
        basePrice: 45,
        iconName: 'Scissors',
        badge: 'Weekly Route'
      },
      {
        id: 'aeration-overseeding',
        name: 'Core Aeration & Soil Conditioning',
        shortDesc: 'Relieve dense clay soil compaction to allow water, air, and vital nutrients to reach root systems.',
        fullDesc: 'Commercial hollow-tine aeration machine pass, double plug pulling, gypsum soil conditioning, and organic compost top-dress.',
        basePrice: 160,
        iconName: 'Layers'
      },
      {
        id: 'mulching-bed-care',
        name: 'Hardwood Mulch & Flowerbed Cleanout',
        shortDesc: 'Fresh dark shredded hardwood mulch installation, hand weeding, and clean trench edging.',
        fullDesc: 'Hand weeding, pre-emergent weed barrier application, shrub sculpting, and 3-inch triple-shredded hardwood mulch bed.',
        basePrice: 320,
        iconName: 'Flower2',
        badge: 'Curb Appeal Boost'
      },
      {
        id: 'fertilization-weed',
        name: '7-Step Fertilization & Weed Control',
        shortDesc: 'Season-long weed prevention, grub protection, and deep green organic fertilizer treatments.',
        fullDesc: 'Spring pre-emergent crabgrass barrier, summer slow-release nitrogen, fall broadleaf killer, and winter root builder.',
        basePrice: 65,
        iconName: 'Sparkles'
      }
    ],
    reviews: {
      googleRating: 4.9,
      totalReviews: 189,
      items: [
        {
          id: 'lawn-1',
          author: 'Greg Sullins',
          rating: 5,
          date: '2 weeks ago',
          comment: 'GreenHaven has been servicing our Allen home for two seasons. They show up the exact same time every Thursday, cut clean diagonal stripes, and always verify the side gate is closed for our golden retriever.',
          serviceUsed: 'Weekly Mowing Route',
          verified: true
        },
        {
          id: 'lawn-2',
          author: 'Amanda Foster',
          rating: 5,
          date: '1 month ago',
          comment: 'Our lawn was full of dandelions and hard clay. Their core aeration and mulch install turned our front yard into the best looking lawn on our street. Very transparent pricing.',
          serviceUsed: 'Aeration & Mulch',
          verified: true
        }
      ]
    },
    faqs: [
      {
        question: 'Do I have to sign an annual contract for weekly mowing?',
        answer: 'No long-term contracts. You can pause, skip, or cancel weekly service anytime with simple 24-hour advance text notice.'
      },
      {
        question: 'What happens if it rains on our scheduled mowing day?',
        answer: 'We never mow soggy lawns to prevent rutting. Your service is automatically shifted to the next dry morning.'
      }
    ]
  },

  'timberline-tree-service': {
    slug: 'timberline-tree-service',
    name: 'Timberline Tree Service & Removal',
    legalName: 'Timberline Tree Service & Removal LLC',
    domain: 'timberlinetree-demo.com',
    url: 'https://dzor777.github.io/building-websites-for-local-businesses/?demo=tree-cutting',
    googleAnalyticsId: '',
    web3FormsAccessKey: '',
    heroImageUrl: './images/tree-service.jpg',
    logoIcon: 'Shovel',
    tagline: 'Certified Arborists & Heavy Crane Tree Removal Specialists',
    description: 'Hazardous tree removal, crane-assisted clearing, crown thinning, stump grinding, and storm emergency dispatch across North Texas.',
    niche: 'Tree Service & Removal',
    city: 'Lewisville',
    state: 'TX',
    phone: '(972) 555-0157',
    formattedPhone: '(972) 555-0157',
    phoneRaw: '+19725550157',
    email: 'dispatch@timberlinetree-demo.com',
    address: {
      street: '2200 Valley Ridge Pkwy',
      city: 'Lewisville',
      state: 'TX',
      zip: '75067',
      googleMapsEmbedUrl: ''
    },
    hours: {
      days: 'Mon - Sat',
      time: '7:00 AM - 7:00 PM (Emergency Storm Crews 24/7)',
      is24_7: true
    },
    colors: {
      primary: '#15803d',
      primaryDark: '#166534',
      accent: '#f59e0b'
    },
    trustBadges: [
      { title: 'ISA Certified Arborist', subtitle: 'Tree Risk Assessment Spec', icon: 'ShieldCheck' },
      { title: '$2M Liability Coverage', subtitle: 'Full Property Protection', icon: 'Award' },
      { title: 'Crane & Rigging Fleet', subtitle: 'Zero Lawn Lawn Damage', icon: 'CheckCircle2' },
      { title: '24/7 Storm Response', subtitle: 'Immediate Downed Trees', icon: 'Clock' }
    ],
    services: [
      {
        id: 'tree-removal',
        name: 'Hazardous Tree Removal & Crane Rigging',
        shortDesc: 'Safe, controlled sectional takedown of dying, leaning, or storm-damaged trees near structures.',
        fullDesc: 'Rope rigging or 40-ton crane hoist over power lines and rooftops, sectional trunk lowering, wood chipping, and ground rake.',
        basePrice: 850,
        iconName: 'Shovel',
        badge: 'Insured $2M'
      },
      {
        id: 'tree-trimming',
        name: 'Canopy Thinning & Deadwood Pruning',
        shortDesc: 'Arborist-guided crown lifting, roof clearance trimming, and structural wind resistance thinning.',
        fullDesc: 'Removal of hazardous dead branches, 10-ft clearance from roof shingles, mistletoe removal, and tree wound sealing.',
        basePrice: 350,
        iconName: 'Scissors',
        badge: 'Arborist Inspected'
      },
      {
        id: 'stump-grinding',
        name: 'Deep Root Stump Grinding',
        shortDesc: 'Commercial Vermeer stump grinder grinding stumps 8–12 inches below ground level for grass seeding.',
        fullDesc: 'Grinding root flares, mulch backfill into hole, utility line pre-locating, and surface smoothing.',
        basePrice: 175,
        iconName: 'CircleDot'
      },
      {
        id: 'storm-damage',
        name: '24/7 Emergency Storm Tree Clearing',
        shortDesc: 'Immediate dispatch for storm-fallen trees resting on roofs, driveways, or electrical hazards.',
        fullDesc: 'Emergency crane extraction, roof structural tarping, street access clearing, and insurance documentation.',
        basePrice: 650,
        iconName: 'Zap',
        badge: '24/7 On-Call'
      }
    ],
    reviews: {
      googleRating: 5.0,
      totalReviews: 318,
      items: [
        {
          id: 'tree-1',
          author: 'Robert McAllister',
          rating: 5,
          date: '1 week ago',
          comment: 'We had an 80-foot dead oak leaning directly over our master bedroom. Timberline brought in a crane, rigged the limbs section by section, and had it removed without a single leaf touching our roof. Masterful work.',
          serviceUsed: 'Hazardous Tree Removal',
          verified: true
        },
        {
          id: 'tree-2',
          author: 'Colleen Wright',
          rating: 5,
          date: '3 weeks ago',
          comment: 'Trimmed five mature live oaks and ground three ugly stumps. Their cleanup was unbelievable—raked every stick and blew off our driveway. True professionals with fair pricing.',
          serviceUsed: 'Trimming & Stump Grinding',
          verified: true
        }
      ]
    },
    faqs: [
      {
        question: 'Are you fully insured if a limb falls near my house or fence?',
        answer: 'Yes, we carry a $2,000,000 comprehensive commercial liability policy and provide certificates of insurance directly to you before any crew climbs.'
      },
      {
        question: 'What do you do with the wood and mulch after removing a tree?',
        answer: 'We chip branches on-site and haul away all heavy logs. If you want firewood cut or organic wood mulch left behind for landscaping, we provide it free of charge.'
      }
    ]
  },

  'aquaclean-pressure-washing': {
    slug: 'aquaclean-pressure-washing',
    name: 'AquaClean Pressure Washing & SoftWash',
    legalName: 'AquaClean Pressure Washing & SoftWash LLC',
    domain: 'aquacleanwash-demo.com',
    url: 'https://dzor777.github.io/building-websites-for-local-businesses/?demo=pressure-washing',
    googleAnalyticsId: '',
    web3FormsAccessKey: '',
    heroImageUrl: './images/pressure-washing.jpg',
    logoIcon: 'Droplets',
    tagline: 'Instant Curb Appeal Restoration & Low-Pressure SoftWash Systems',
    description: 'Driveway surface cleaning, soft-wash house siding, black streak roof algae removal, and commercial concrete across North Texas.',
    niche: 'Pressure Washing & Exterior Cleaning',
    city: 'Grapevine',
    state: 'TX',
    phone: '(817) 555-0129',
    formattedPhone: '(817) 555-0129',
    phoneRaw: '+18175550129',
    email: 'info@aquacleanwash-demo.com',
    address: {
      street: '1200 S Main St',
      city: 'Grapevine',
      state: 'TX',
      zip: '76051',
      googleMapsEmbedUrl: ''
    },
    hours: {
      days: 'Mon - Sat',
      time: '7:30 AM - 6:00 PM',
      is24_7: false
    },
    colors: {
      primary: '#06b6d4',
      primaryDark: '#0891b2',
      accent: '#f59e0b'
    },
    trustBadges: [
      { title: 'Low-Pressure SoftWash', subtitle: 'Zero Siding/Stucco Damage', icon: 'ShieldCheck' },
      { title: 'Commercial 8 GPM Rigs', subtitle: 'Deep Concrete Cleaning', icon: 'Award' },
      { title: 'Plant-Safe Solutions', subtitle: '100% Protected Landscaping', icon: 'Sparkles' },
      { title: 'Upfront Flat Quotes', subtitle: 'No Surprise Extras', icon: 'DollarSign' }
    ],
    services: [
      {
        id: 'driveway-cleaning',
        name: 'Rotary Driveway & Sidewalk Scouring',
        shortDesc: '20-inch industrial surface cleaner scouring away oil stains, tire marks, grime, and green mildew.',
        fullDesc: 'Eco-friendly degreaser pre-treatment, 4,000 PSI high-volume rotary pass, post-treatment algaecide to prevent re-growth.',
        basePrice: 175,
        iconName: 'Droplets',
        badge: 'Instant Results'
      },
      {
        id: 'house-softwash',
        name: 'Whole-Home SoftWash Siding Restoration',
        shortDesc: 'Gentle low-pressure cleaning for vinyl siding, painted wood, hardy board, and delicate stucco.',
        fullDesc: 'Low-pressure chemical application, organic algae/mildew eradication, plant & window rinsing, and gutter exterior wipe.',
        basePrice: 280,
        iconName: 'Home',
        badge: 'Safe on Stucco'
      },
      {
        id: 'roof-wash',
        name: 'No-Pressure Black Streak Roof Cleaning',
        shortDesc: 'Eradicate dark Gloeocapsa Magma roof algae streaks without stripping protective shingle granules.',
        fullDesc: 'Dedicated chemical pump soft-wash solution, shingle granule preservation, gutter flushing, and 2-year algae-free guarantee.',
        basePrice: 450,
        iconName: 'Shield'
      },
      {
        id: 'patio-pool-deck',
        name: 'Patio & Pool Deck Stain Removal',
        shortDesc: 'Restore flagstone, stamped concrete, pavers, and pool surrounds to bright, slip-resistant condition.',
        fullDesc: 'Mildew and calcium scale clearing, polymeric sand preservation, low-pressure rinse, and optional sealant.',
        basePrice: 225,
        iconName: 'Sparkles'
      }
    ],
    reviews: {
      googleRating: 5.0,
      totalReviews: 164,
      items: [
        {
          id: 'wash-1',
          author: 'Gary Pennington',
          rating: 5,
          date: '1 week ago',
          comment: 'Our driveway hadn\'t been washed in 8 years and was black from tree sap and mildew. AquaClean made it look like brand new poured concrete in under 2 hours. Super crisp edges!',
          serviceUsed: 'Driveway Pressure Washing',
          verified: true
        },
        {
          id: 'wash-2',
          author: 'Kelly Sutherland',
          rating: 5,
          date: '3 weeks ago',
          comment: 'Had ugly black streaks across our roof shingles. AquaClean soft-washed the roof safely without using high pressure. Roof looks brand new and saved us thousands on replacement.',
          serviceUsed: 'Roof SoftWash',
          verified: true
        }
      ]
    },
    faqs: [
      {
        question: 'Will high pressure damage my vinyl siding or blast off paint?',
        answer: 'Never. For house siding and roofs, we exclusively use SoftWash technology—a low-pressure chemical rinse under 200 PSI that kills algae at the root without damaging siding.'
      },
      {
        question: 'Do your cleaning solutions hurt pets or flowerbed plants?',
        answer: 'No. We pre-soak and continuously rinse all nearby flowerbeds and landscaping with clean water, and use biodegradable, plant-safe cleaning solutions.'
      }
    ]
  }
};
