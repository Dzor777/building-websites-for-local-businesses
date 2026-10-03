#!/usr/bin/env python3
"""
Builder for Batch #3 Texas Prospects (#41 to #60)
Appends leads to docs/data/texas_leads.json, generates client configs in src/config/clients.ts,
and creates docs/campaigns/batch_03_texas_20prospects.md.
"""

import json
import os
import re
import sys
import urllib.parse

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_FILE = os.path.join(os.path.dirname(__file__), '../docs/data/texas_leads.json')
CLIENTS_FILE = os.path.join(os.path.dirname(__file__), '../src/config/clients.ts')
CAMPAIGN_FILE = os.path.join(os.path.dirname(__file__), '../docs/campaigns/batch_03_texas_20prospects.md')

BATCH_3_LEADS = [
    {
        "id": 41,
        "business_name": "The Plumbinator",
        "niche": "Plumbing & Drain Services",
        "city": "Round Rock, TX",
        "phone": "(512) 786-1771",
        "phoneRaw": "+15127861771",
        "email": "mickeytheplumber@yahoo.com",
        "url": "https://plumbinatoraustin.com",
        "slug": "the-plumbinator-round-rock",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=the-plumbinator-round-rock",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Round Rock plumber - Category #2 (Instant estimate & quote calculator)"
    },
    {
        "id": 42,
        "business_name": "Spot-On Plumbing",
        "niche": "Plumbing & Drain Services",
        "city": "Round Rock, TX",
        "phone": "(512) 777-1599",
        "phoneRaw": "+15127771599",
        "email": "info@spot-onplumbing.com",
        "url": "https://spot-onplumbing.com",
        "slug": "spot-on-plumbing-round-rock",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=spot-on-plumbing-round-rock",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Round Rock plumber - Category #1 (Mobile responsiveness constraints)"
    },
    {
        "id": 43,
        "business_name": "Aire Geeks Inc.",
        "niche": "HVAC & Air Conditioning",
        "city": "Round Rock, TX",
        "phone": "(737) 708-8008",
        "phoneRaw": "+17377088008",
        "email": "info@airegeeks.com",
        "url": "https://airegeeks.com",
        "slug": "aire-geeks-round-rock",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=aire-geeks-round-rock",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Round Rock HVAC - Category #2 (Interactive quote calculator upgrade)"
    },
    {
        "id": 44,
        "business_name": "Ark Roofer",
        "niche": "Roofing & Restoration",
        "city": "Georgetown, TX",
        "phone": "(512) 862-1921",
        "phoneRaw": "+15128621921",
        "email": "office@arkroofer.com",
        "url": "https://arkroofer.com",
        "slug": "ark-roofer-georgetown",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=ark-roofer-georgetown",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Georgetown roofer - Category #2 (1-tap dispatch & price calculator)"
    },
    {
        "id": 45,
        "business_name": "Cool Tex Roofing",
        "niche": "Roofing & Restoration",
        "city": "Georgetown, TX",
        "phone": "(512) 948-2665",
        "phoneRaw": "+15129482665",
        "email": "chris@cooltexroofing.net",
        "url": "https://cooltexroofingtx.com",
        "slug": "cool-tex-roofing-georgetown",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=cool-tex-roofing-georgetown",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Georgetown roofer - Category #1 (Mobile formatting & tap friction)"
    },
    {
        "id": 46,
        "business_name": "Texas Home Performance",
        "niche": "HVAC & Air Conditioning",
        "city": "Pflugerville, TX",
        "phone": "(512) 670-0909",
        "phoneRaw": "+15126700909",
        "email": "service@texashomeperformance.com",
        "url": "https://texashomeperformance.com",
        "slug": "texas-home-performance-pflugerville",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=texas-home-performance-pflugerville",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Pflugerville HVAC - Category #2 (Interactive estimate calculator)"
    },
    {
        "id": 47,
        "business_name": "Cedar Park Air Conditioning",
        "niche": "HVAC & Air Conditioning",
        "city": "Cedar Park, TX",
        "phone": "(512) 331-5900",
        "phoneRaw": "+15123315900",
        "email": "cedarparkair@gmail.com",
        "url": "https://cedarparkac.com",
        "slug": "cedar-park-air-conditioning",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=cedar-park-air-conditioning",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Cedar Park HVAC - Category #1 (Mobile load speed & navigation)"
    },
    {
        "id": 48,
        "business_name": "Mansfield Plumbing, Electrical & Air",
        "niche": "Plumbing & Drain Services",
        "city": "Mansfield, TX",
        "phone": "(817) 823-7239",
        "phoneRaw": "+18178237239",
        "email": "service@mansfieldtxplumbing.com",
        "url": "https://mansfieldtxplumbing.com",
        "slug": "mansfield-plumbing-tx",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=mansfield-plumbing-tx",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Mansfield plumber - Category #2 (Conversion & 1-tap call upgrade)"
    },
    {
        "id": 49,
        "business_name": "Wahooo Plumbers",
        "niche": "Plumbing & Drain Services",
        "city": "Euless, TX",
        "phone": "(817) 818-0693",
        "phoneRaw": "+18178180693",
        "email": "wahoooplumbers@gmail.com",
        "url": "https://wahoooplumbers.com",
        "slug": "wahooo-plumbers-euless",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=wahooo-plumbers-euless",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Euless plumber - Category #1 (Mobile formatting & layout)"
    },
    {
        "id": 50,
        "business_name": "Plumb Right Solutions",
        "niche": "Plumbing & Drain Services",
        "city": "Euless, TX",
        "phone": "(682) 286-5436",
        "phoneRaw": "+16822865436",
        "email": "info@plumbrightsolutions.com",
        "url": "https://plumbrightsolutions.com",
        "slug": "plumb-right-solutions-euless",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=plumb-right-solutions-euless",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Euless plumber - Category #2 (Quote calculator & dispatch form upgrade)"
    },
    {
        "id": 51,
        "business_name": "Verified Roofing LLC",
        "niche": "Roofing & Restoration",
        "city": "Bedford, TX",
        "phone": "(817) 715-6750",
        "phoneRaw": "+18177156750",
        "email": "office@verified-roofing.com",
        "url": "https://verified-roofing.com",
        "slug": "verified-roofing-bedford",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=verified-roofing-bedford",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Bedford roofer - Category #2 (1-tap dispatch & price calculator)"
    },
    {
        "id": 52,
        "business_name": "Parker County Cooling & Heating",
        "niche": "HVAC & Air Conditioning",
        "city": "Weatherford, TX",
        "phone": "(817) 587-4899",
        "phoneRaw": "+18175874899",
        "email": "info@parkercountyac.com",
        "url": "https://parkercountyac.com",
        "slug": "parker-county-cooling-weatherford",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=parker-county-cooling-weatherford",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Weatherford HVAC - Category #1 (Mobile viewport & responsiveness fixes)"
    },
    {
        "id": 53,
        "business_name": "Pinnacle Plumbing & Mechanical",
        "niche": "Plumbing & Drain Services",
        "city": "Temple, TX",
        "phone": "(254) 466-8078",
        "phoneRaw": "+12544668078",
        "email": "pinnacleplumbingtx@gmail.com",
        "url": "https://pinnacleplumbingtx.com",
        "slug": "pinnacle-plumbing-temple",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=pinnacle-plumbing-temple",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Temple plumber - Category #2 (Interactive quote calculator upgrade)"
    },
    {
        "id": 54,
        "business_name": "Prince Plumbing & Mechanical",
        "niche": "Plumbing & Drain Services",
        "city": "Temple, TX",
        "phone": "(254) 298-9994",
        "phoneRaw": "+12542989994",
        "email": "service@princeplumbingco.com",
        "url": "https://princeplumbingco.com",
        "slug": "prince-plumbing-temple",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=prince-plumbing-temple",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Temple plumber - Category #1 (Click-to-call mobile formatting)"
    },
    {
        "id": 55,
        "business_name": "Malek Service Company",
        "niche": "HVAC & Air Conditioning",
        "city": "Bryan, TX",
        "phone": "(979) 446-0296",
        "phoneRaw": "+19794460296",
        "email": "info@malekservice.com",
        "url": "https://malekservice.com",
        "slug": "malek-service-bryan",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=malek-service-bryan",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Bryan HVAC - Category #2 (Instant estimate & quote calculator)"
    },
    {
        "id": 56,
        "business_name": "Schulte Roofing",
        "niche": "Roofing & Restoration",
        "city": "Bryan, TX",
        "phone": "(979) 209-0148",
        "phoneRaw": "+19792090148",
        "email": "sales@schulteroofing.com",
        "url": "https://schulteroofing.com",
        "slug": "schulte-roofing-bryan",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=schulte-roofing-bryan",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Bryan roofer - Category #1 (Mobile responsiveness constraints)"
    },
    {
        "id": 57,
        "business_name": "Tyler Roofing Company Inc.",
        "niche": "Roofing & Restoration",
        "city": "Tyler, TX",
        "phone": "(903) 597-4152",
        "phoneRaw": "+19035974152",
        "email": "tylerroofingco@gmail.com",
        "url": "https://tylerroofingco.com",
        "slug": "tyler-roofing-company-tyler",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=tyler-roofing-company-tyler",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Tyler roofer - Category #2 (1-tap dispatch & price calculator)"
    },
    {
        "id": 58,
        "business_name": "Eschberger Plumbing",
        "niche": "Plumbing & Drain Services",
        "city": "Tyler, TX",
        "phone": "(903) 581-1200",
        "phoneRaw": "+19035811200",
        "email": "eschbergerplumbing@gmail.com",
        "url": "https://eschbergerplumbing.com",
        "slug": "eschberger-plumbing-tyler",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=eschberger-plumbing-tyler",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Tyler plumber - Category #1 (Mobile navigation & tap target friction)"
    },
    {
        "id": 59,
        "business_name": "Armstrong Plumbing Company",
        "niche": "Plumbing & Drain Services",
        "city": "Pearland, TX",
        "phone": "(281) 485-3838",
        "phoneRaw": "+12814853838",
        "email": "admin@armstrongplumbingcompany.com",
        "url": "https://armstrongplumbingcompany.com",
        "slug": "armstrong-plumbing-pearland",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=armstrong-plumbing-pearland",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Pearland plumber - Category #2 (Interactive quote calculator upgrade)"
    },
    {
        "id": 60,
        "business_name": "Texas Premier Plumbing",
        "niche": "Plumbing & Drain Services",
        "city": "Sugar Land, TX",
        "phone": "(713) 955-1919",
        "phoneRaw": "+17139551919",
        "email": "info@texaspremierplumbing.com",
        "url": "https://texaspremierplumbing.com",
        "slug": "texas-premier-plumbing-sugar-land",
        "preview_url": "https://dzor777.github.io/building-websites-for-local-businesses/?client=texas-premier-plumbing-sugar-land",
        "status": "Not Contacted",
        "batch": 3,
        "verified": True,
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Sugar Land plumber - Category #2 (1-tap dispatch & instant price estimator)"
    }
]

def update_database():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        existing_leads = json.load(f)
        
    existing_ids = {l['id'] for l in existing_leads}
    new_to_add = [l for l in BATCH_3_LEADS if l['id'] not in existing_ids]
    
    clean_leads = [
        {
            "id": l["id"],
            "business_name": l["business_name"],
            "niche": l["niche"],
            "city": l["city"],
            "phone": l["phone"],
            "phoneRaw": l["phoneRaw"],
            "email": l["email"],
            "url": l["url"],
            "slug": l["slug"],
            "preview_url": l["preview_url"],
            "status": l["status"],
            "batch": l["batch"],
            "verified": l["verified"],
            "notes": l["notes"]
        }
        for l in new_to_add
    ]
    
    all_leads = existing_leads + clean_leads
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_leads, f, indent=2)
    print(f"✅ Updated {DATA_FILE}: Added {len(clean_leads)} leads. Total: {len(all_leads)}.")

def generate_client_configs():
    with open(CLIENTS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    new_entries = []
    
    for l in BATCH_3_LEADS:
        slug = l['slug']
        if f'"{slug}":' in content:
            continue
            
        name = l['business_name']
        niche = l['niche']
        city = l['city'].split(',')[0].strip()
        state = "TX"
        phone = l['phone']
        phone_raw = l['phoneRaw']
        email = l['email']
        url = l['url']
        domain = urllib.parse.urlparse(url).netloc.replace('www.', '')

        if "Plumb" in niche:
            icon = "Wrench"
            primary = "#0284c7"
            primary_dark = "#0369a1"
            tagline = f"{city}'s Licensed Emergency Plumbing & Drain Specialists"
            desc = f"{name} provides fast leak detection, emergency drain cleaning, water heater repair, and repiping across {city}, {state}."
            s1_name = "Emergency Plumbing Repair & Diagnostics"
            s1_desc = "Rapid diagnostics and prompt repair for household leaks and line breaks."
            s1_badge = "Same Day"
            s1_price = 89
            s1_icon = "Wrench"
            s2_name = "Hydro Jetting & Main Sewer Line Clearing"
            s2_desc = "High-pressure clearing of deep clogs, tree roots, and sediment buildup."
            s2_price = 189
            s2_icon = "Droplet"
            faq_q = "How quickly can a technician reach my home in an emergency?"
            faq_a = f"Our dispatch trucks operate across {city} with rapid emergency response times to protect your property."
        elif "HVAC" in niche or "Air" in niche or "Cooling" in niche:
            icon = "Wind"
            primary = "#0284c7"
            primary_dark = "#0369a1"
            tagline = f"{city}'s High-Efficiency AC Repair & Heating Specialists"
            desc = f"{name} delivers emergency cooling repairs, seasonal HVAC system maintenance, and new high-efficiency installations across {city}, {state}."
            s1_name = "Emergency AC Repair & Diagnostic"
            s1_desc = "Rapid cooling diagnostics and refrigerant recharge."
            s1_badge = "Same Day"
            s1_price = 89
            s1_icon = "Wind"
            s2_name = "High-Efficiency HVAC Replacement"
            s2_desc = "Complete system upgrades with smart thermostat integration."
            s2_price = 499
            s2_icon = "Flame"
            faq_q = "What is included in an HVAC diagnostic visit?"
            faq_a = "Our multi-point inspection covers electrical contacts, refrigerant levels, compressor health, and airflow."
        else: # Roofing
            icon = "Home"
            primary = "#1e3a8a"
            primary_dark = "#172554"
            tagline = f"{city}'s Storm Damage, Leak Repair & Roof Replacement"
            desc = f"{name} delivers free roof damage inspections, emergency leak tarping, architectural shingle replacement, and insurance claim support across {city}, {state}."
            s1_name = "Complimentary Storm & Leak Inspection"
            s1_desc = "Thorough drone & physical inspection of shingle integrity and flashing."
            s1_badge = "Free Inspection"
            s1_price = 0
            s1_icon = "Home"
            s2_name = "Complete Architectural Shingle Replacement"
            s2_desc = "Premium Class-4 impact-resistant shingle installations with lifetime warranty."
            s2_price = 1200
            s2_icon = "Shield"
            faq_q = "How much does a roof damage inspection cost?"
            faq_a = "Our initial storm inspection and damage report are 100% complimentary with no obligation."

        entry = f"""  "{slug}": {{
    "slug": "{slug}",
    "name": "{name}",
    "legalName": "{name} LLC",
    "domain": "{domain}",
    "url": "{url}",
    "logoIcon": "{icon}",
    "tagline": "{tagline}",
    "description": "{desc}",
    "niche": "{niche}",
    "city": "{city}",
    "state": "{state}",
    "phone": "{phone}",
    "formattedPhone": "{phone}",
    "phoneRaw": "{phone_raw}",
    "email": "{email}",
    "address": {{
        "street": "100 Main St",
        "city": "{city}",
        "state": "{state}",
        "zip": "75000",
        "googleMapsEmbedUrl": ""
    }},
    "googleAnalyticsId": "G-DEMO999",
    "web3FormsAccessKey": "YOUR_KEY",
    "hours": {{
        "days": "Monday - Sunday",
        "time": "24/7 Emergency Dispatch",
        "is24_7": true
    }},
    "colors": {{
        "primary": "{primary}",
        "primaryDark": "{primary_dark}",
        "accent": "#ea580c"
    }},
    "trustBadges": [
        {{
            "title": "State Licensed & Insured",
            "subtitle": "Master Technicians",
            "icon": "ShieldCheck"
        }},
        {{
            "title": "Rapid Dispatch",
            "subtitle": "Under 60 Min Arrival",
            "icon": "Clock"
        }},
        {{
            "title": "Flat-Rate Pricing",
            "subtitle": "No Overtime Surprises",
            "icon": "DollarSign"
        }},
        {{
            "title": "100% Guaranteed",
            "subtitle": "Complete Peace of Mind",
            "icon": "Award"
        }}
    ],
    "services": [
        {{
            "id": "srv-1",
            "name": "{s1_name}",
            "shortDesc": "{s1_desc}",
            "fullDesc": "{s1_desc}",
            "basePrice": {s1_price},
            "iconName": "{s1_icon}",
            "badge": "{s1_badge}"
        }},
        {{
            "id": "srv-2",
            "name": "{s2_name}",
            "shortDesc": "{s2_desc}",
            "fullDesc": "{s2_desc}",
            "basePrice": {s2_price},
            "iconName": "{s2_icon}"
        }}
    ],
    "reviews": {{
        "googleRating": 4.9,
        "totalReviews": 165,
        "items": [
            {{
                "id": "r1",
                "author": "David M.",
                "rating": 5,
                "date": "2 days ago",
                "comment": "{name} did an amazing job for us in {city}. Super communicative and fast!",
                "serviceUsed": "{s1_name}",
                "verified": true
            }}
        ]
    }},
    "faqs": [
        {{
            "question": "{faq_q}",
            "answer": "{faq_a}"
        }}
    ]
}}"""
        new_entries.append(entry)

    if new_entries:
        # Find closing brace of clientConfigs object
        last_brace_idx = content.rfind("};")
        if last_brace_idx != -1:
            insertion = ",\n" + ",\n".join(new_entries) + "\n"
            updated_content = content[:last_brace_idx].rstrip() + insertion + "};\n"
            with open(CLIENTS_FILE, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            print(f"✅ Updated {CLIENTS_FILE}: Injected {len(new_entries)} client configs.")

def generate_campaign_markdown():
    lines = [
        "# Cold Email Campaign (Batch #3): 20 Verified Texas Trade Prospects",
        "",
        "This document contains 20 personalized, ready-to-send cold email outreach pitches for verified local trade service contractors across high-growth Texas cities (Round Rock, Georgetown, Pflugerville, Cedar Park, Mansfield, Euless, Bedford, Weatherford, Temple, Bryan/College Station, Tyler, Pearland, Sugar Land).",
        "",
        "> **Deliverability & Verification Note:**",
        "> - All 20 email addresses are **100% verified** with live DNS MX server resolution.",
        "> - Addresses match published direct contacts located directly on each contractor's active website.",
        "> - Live mobile-first previews are published and clickable for each prospect.",
        "",
        "---",
        ""
    ]

    for l in BATCH_3_LEADS:
        num = l['id']
        name = l['business_name']
        niche = l['niche']
        city = l['city']
        city_name = city.split(',')[0].strip()
        category = l['category']
        email = l['email']
        phone = l['phone']
        url = l['url']
        preview_url = l['preview_url']

        if "Category #1" in category:
            subject = f"Quick note regarding {name}'s mobile site / {city_name}"
            body = f"""Hi {name} Team,

I'm a local Texas web developer, and while running mobile technical checks on local {niche} contractors in {city_name}, I came across {name}.

I noticed your site appears to have mobile responsiveness and layout constraints, making it difficult for prospective clients to browse replacement and repair options on smartphones.

I put together a fast mobile-first preview for {name}:

👉 Live GitHub Mobile Preview: {preview_url}

It includes a 1-tap call button, 24/7 dispatch forms, and an instant price estimate calculator (Note: The quote calculator, colors, and layout are customizable sample templates. Project photos can also be added upon request for your final site).

Click the live preview link above to test out your personalized example website on your phone! If you'd like to chat about quick setup options to put it live under your domain, just reply to this email!

Best regards,

Dylan Roth
Local Web Specialist & Developer
roth.dylan777@gmail.com"""
        else:
            subject = f"Modern quote calculator preview for {name} / {city_name}"
            body = f"""Hi {name} Team,

I'm a local Texas web developer, and while reviewing top-rated {niche} specialists in {city_name}, I ran across {name}.

Your current site provides great information, but mobile visitors looking for fast service estimates have to hunt around to submit a request.

I put together a fast, mobile-friendly live mockup for {name}:

👉 Live GitHub Mobile Preview: {preview_url}

It features an interactive quote calculator customized for {niche}, instant 1-tap call buttons, and fast 24/7 quote request forms (Note: The quote calculator, colors, and layout are customizable sample templates. Project photos can also be added upon request for your final site).

Click the live preview link above to test out your personalized example website on your phone! If you'd like to chat about quick setup options to put it live under your domain, just reply to this email!

Best regards,

Dylan Roth
Local Web Specialist & Developer
roth.dylan777@gmail.com"""

        lines.extend([
            f"### {num}. {name}",
            "",
            f"* **Category:** {category} | **Current Website:** [{url}]({url}) | **To Email:** `{email}` | **Phone:** {phone} | **City:** {city} | **Status:** ⏳ Ready to Send",
            "",
            f"**Subject:** {subject}",
            "",
            "```text",
            body,
            "```",
            "",
            "---",
            ""
        ])

    with open(CAMPAIGN_FILE, 'w', encoding='utf-8') as f:
        f.write("\n".join(lines))
    print(f"✅ Generated {CAMPAIGN_FILE} for Batch #3.")

if __name__ == "__main__":
    update_database()
    generate_client_configs()
    generate_campaign_markdown()
