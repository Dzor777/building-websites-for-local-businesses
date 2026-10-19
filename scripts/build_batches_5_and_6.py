import os
import sys
import json
import re
import urllib.parse
from pathlib import Path

WORKSPACE = Path(r"c:\Users\Dylan\.gemini\antigravity-ide\scratch\building-websites-for-local-businesses")
CAMPAIGNS_DIR = WORKSPACE / "docs" / "campaigns"
DATA_DIR = WORKSPACE / "docs" / "data"

# Trade demo slug mapping
TRADE_SLUGS = {
    "Plumbing & Drain Services": "plumbing",
    "Roofing & Restoration": "roofing",
    "HVAC & Air Conditioning": "hvac",
    "Electrical Services": "electrical",
    "Painting & Finishes": "painting",
    "Lawn Care & Landscaping": "lawncare",
    "Tree Service & Removal": "tree-cutting",
    "Pressure Washing & Exterior Cleaning": "pressure-washing"
}

BATCH_5_PROSPECTS = [
    {
        "id": 81,
        "name": "Clear Choice Pool & Pressure Wash",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Arlington",
        "state": "TX",
        "phone": "(817) 600-0833",
        "phoneRaw": "+18176000833",
        "email": "info@clearchoicedfw.com",
        "website": "https://clearchoicedfw.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Arlington exterior cleaner - Category #2 (Instant estimate calculator)"
    },
    {
        "id": 82,
        "name": "Texas Tree Elite",
        "trade": "Tree Service & Removal",
        "city": "Fort Worth",
        "state": "TX",
        "phone": "(817) 805-4422",
        "phoneRaw": "+18178054422",
        "email": "contact@texastreeelite.com",
        "website": "https://texastreeelite.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Fort Worth tree service - Category #1 (Mobile touch targets & responsiveness)"
    },
    {
        "id": 83,
        "name": "GreenSource Lawn Care & Landscapes",
        "trade": "Lawn Care & Landscaping",
        "city": "Fort Worth",
        "state": "TX",
        "phone": "(817) 400-5296",
        "phoneRaw": "+18174005296",
        "email": "info@greensourcedfw.com",
        "website": "https://greensourcedfw.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Fort Worth lawn pro - Category #2 (Instant route pricing calculator)"
    },
    {
        "id": 84,
        "name": "Cowtown Painting Co.",
        "trade": "Painting & Finishes",
        "city": "Fort Worth",
        "state": "TX",
        "phone": "(817) 727-4637",
        "phoneRaw": "+18177274637",
        "email": "info@cowtownpainting.com",
        "website": "https://cowtownpainting.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Fort Worth painter - Category #1 (Broken mobile viewport layout)"
    },
    {
        "id": 85,
        "name": "Metroplex Pro Electrical",
        "trade": "Electrical Services",
        "city": "Arlington",
        "state": "TX",
        "phone": "(817) 538-8924",
        "phoneRaw": "+18175388924",
        "email": "service@metroplexelectric.com",
        "website": "https://metroplexelectric.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Arlington electrician - Category #2 (EV charger & panel estimator)"
    },
    {
        "id": 86,
        "name": "Tom's Mechanical HVAC",
        "trade": "HVAC & Air Conditioning",
        "city": "Arlington",
        "state": "TX",
        "phone": "(817) 277-2434",
        "phoneRaw": "+18172772434",
        "email": "info@tomsmechanical.com",
        "website": "https://tomsmechanical.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Arlington HVAC - Category #2 (AC tune-up & heat pump estimator)"
    },
    {
        "id": 87,
        "name": "Hildebrant's Plumbing Repair",
        "trade": "Plumbing & Drain Services",
        "city": "Fort Worth",
        "state": "TX",
        "phone": "(817) 695-1840",
        "phoneRaw": "+18176951840",
        "email": "service@hildebrantsplumbing.com",
        "website": "https://hildebrantsplumbing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Fort Worth plumber - Category #1 (Emergency 1-tap call button upgrade)"
    },
    {
        "id": 88,
        "name": "First Texas Roofing",
        "trade": "Roofing & Restoration",
        "city": "Fort Worth",
        "state": "TX",
        "phone": "(817) 821-0323",
        "phoneRaw": "+18178210323",
        "email": "office@firsttexasroofing.com",
        "website": "https://firsttexasroofing.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Fort Worth roofer - Category #2 (Hail inspection & tear-off calculator)"
    },
    {
        "id": 89,
        "name": "Hydro Pro Exterior Wash",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Grand Prairie",
        "state": "TX",
        "phone": "(214) 799-6330",
        "phoneRaw": "+12147996330",
        "email": "contact@hydroprodfw.com",
        "website": "https://hydroprodfw.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Grand Prairie pressure washer - Category #1 (Mobile page speed & call link)"
    },
    {
        "id": 90,
        "name": "Arbor Sense Tree Care",
        "trade": "Tree Service & Removal",
        "city": "Denton",
        "state": "TX",
        "phone": "(940) 220-9114",
        "phoneRaw": "+19402209114",
        "email": "info@arborsensedfw.com",
        "website": "https://arborsensedfw.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Denton tree care - Category #2 (Stump & tree removal pricing tool)"
    },
    {
        "id": 91,
        "name": "Purple Care Lawn & Tree",
        "trade": "Lawn Care & Landscaping",
        "city": "Fort Worth",
        "state": "TX",
        "phone": "(817) 880-6052",
        "phoneRaw": "+18178806052",
        "email": "service@purplecare.com",
        "website": "https://purplecare.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Fort Worth landscape pro - Category #2 (Seasonal treatment estimator)"
    },
    {
        "id": 92,
        "name": "Trinity Valley Painting",
        "trade": "Painting & Finishes",
        "city": "Irving",
        "state": "TX",
        "phone": "(214) 850-9382",
        "phoneRaw": "+12148509382",
        "email": "info@trinityvalleypainting.com",
        "website": "https://trinityvalleypainting.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Irving painter - Category #1 (Slow mobile load & broken navigation)"
    },
    {
        "id": 93,
        "name": "Bacon Plumbing Heating Air Electric",
        "trade": "Electrical Services",
        "city": "Rockwall",
        "state": "TX",
        "phone": "(972) 771-4600",
        "phoneRaw": "+19727714600",
        "email": "service@everyonelovesbacon.com",
        "website": "https://everyonelovesbacon.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Rockwall multi-trade - Category #2 (Instant electrical & panel quote calculator)"
    },
    {
        "id": 94,
        "name": "Max Mechanical Air Conditioning",
        "trade": "HVAC & Air Conditioning",
        "city": "Arlington",
        "state": "TX",
        "phone": "(817) 459-4100",
        "phoneRaw": "+18174594100",
        "email": "info@maxairdfw.com",
        "website": "https://maxairdfw.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Arlington HVAC - Category #1 (Mobile formatting & thumb targets)"
    },
    {
        "id": 95,
        "name": "Benchmark Plumbing DFW",
        "trade": "Plumbing & Drain Services",
        "city": "Grand Prairie",
        "state": "TX",
        "phone": "(972) 998-8440",
        "phoneRaw": "+19729988440",
        "email": "info@benchmarkplumbingdfw.com",
        "website": "https://benchmarkplumbingdfw.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Grand Prairie plumber - Category #2 (Water heater & drain clearing calculator)"
    },
    {
        "id": 96,
        "name": "Stallion Roofing & Solar",
        "trade": "Roofing & Restoration",
        "city": "Fort Worth",
        "state": "TX",
        "phone": "(817) 676-4355",
        "phoneRaw": "+18176764355",
        "email": "info@stallionroofing.com",
        "website": "https://stallionroofing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Fort Worth roofer - Category #1 (Missing SSL schema and mobile CTA)"
    },
    {
        "id": 97,
        "name": "Lone Star Power Wash",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Mansfield",
        "state": "TX",
        "phone": "(817) 948-2831",
        "phoneRaw": "+18179482831",
        "email": "contact@lonestarpowerwashdfw.com",
        "website": "https://lonestarpowerwashdfw.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Mansfield power wash - Category #2 (Square footage driveway estimator)"
    },
    {
        "id": 98,
        "name": "Tree Shepherds",
        "trade": "Tree Service & Removal",
        "city": "Denton",
        "state": "TX",
        "phone": "(940) 240-2035",
        "phoneRaw": "+19402402035",
        "email": "office@treeshepherds.net",
        "website": "https://treeshepherds.net",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Denton arborist - Category #1 (Complex desktop navigation on smartphones)"
    },
    {
        "id": 99,
        "name": "Allied Painting Solutions",
        "trade": "Painting & Finishes",
        "city": "Grapevine",
        "state": "TX",
        "phone": "(817) 329-8733",
        "phoneRaw": "+18173298733",
        "email": "sales@alliedpaintingsolutions.com",
        "website": "https://alliedpaintingsolutions.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Grapevine painter - Category #2 (Interior/exterior room estimate tool)"
    },
    {
        "id": 100,
        "name": "Burleson Plumbing & Heating",
        "trade": "Plumbing & Drain Services",
        "city": "Burleson",
        "state": "TX",
        "phone": "(817) 295-2244",
        "phoneRaw": "+18172952244",
        "email": "service@burlesonplumbing.com",
        "website": "https://burlesonplumbing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Burleson plumber - Category #1 (Unclickable phone number header)"
    }
]

BATCH_6_PROSPECTS = [
    {
        "id": 101,
        "name": "Hill Country SoftWash & Pressure Wash",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Austin",
        "state": "TX",
        "phone": "(512) 808-7244",
        "phoneRaw": "+15128087244",
        "email": "info@hillcountrysoftwash.com",
        "website": "https://hillcountrysoftwash.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Austin exterior clean - Category #2 (Instant roof streak & patio calculator)"
    },
    {
        "id": 102,
        "name": "Austin Tree Specialists",
        "trade": "Tree Service & Removal",
        "city": "Austin",
        "state": "TX",
        "phone": "(512) 291-8844",
        "phoneRaw": "+15122918844",
        "email": "info@austintreespecialists.com",
        "website": "https://austintreespecialists.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Austin arborist - Category #1 (Cut-off mobile header & text overlap)"
    },
    {
        "id": 103,
        "name": "GrassWorks Lawn Care",
        "trade": "Lawn Care & Landscaping",
        "city": "Austin",
        "state": "TX",
        "phone": "(512) 797-1640",
        "phoneRaw": "+15127971640",
        "email": "info@grassworkslawncare.com",
        "website": "https://grassworkslawncare.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Austin lawn maintenance - Category #2 (Recurring route pricing tool)"
    },
    {
        "id": 104,
        "name": "Texas Star Painting",
        "trade": "Painting & Finishes",
        "city": "Round Rock",
        "state": "TX",
        "phone": "(512) 900-5022",
        "phoneRaw": "+15129005022",
        "email": "estimates@texasstarpainting.com",
        "website": "https://texasstarpainting.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Round Rock painter - Category #1 (Mobile responsiveness & CTA button)"
    },
    {
        "id": 105,
        "name": "Dunman Electric",
        "trade": "Electrical Services",
        "city": "Austin",
        "state": "TX",
        "phone": "(512) 523-5007",
        "phoneRaw": "+15125235007",
        "email": "info@dunmanelectric.com",
        "website": "https://dunmanelectric.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Austin electrician - Category #2 (EV charging & breaker estimate calculator)"
    },
    {
        "id": 106,
        "name": "Fox Service Company HVAC",
        "trade": "HVAC & Air Conditioning",
        "city": "Austin",
        "state": "TX",
        "phone": "(512) 442-6782",
        "phoneRaw": "+15124426782",
        "email": "service@foxservice.com",
        "website": "https://foxservice.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Austin HVAC - Category #1 (Emergency mobile dispatch button)"
    },
    {
        "id": 107,
        "name": "S&D Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Buda",
        "state": "TX",
        "phone": "(512) 598-4274",
        "phoneRaw": "+15125984274",
        "email": "service@sanddplumbing.com",
        "website": "https://sanddplumbing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Buda plumber - Category #2 (Slab leak & drain clearing price estimator)"
    },
    {
        "id": 108,
        "name": "Ja-Mar Roofing & Sheet Metal",
        "trade": "Roofing & Restoration",
        "city": "Buda",
        "state": "TX",
        "phone": "(512) 441-8437",
        "phoneRaw": "+15124418437",
        "email": "info@jamarroofing.com",
        "website": "https://jamarroofing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Buda roofer - Category #1 (Mobile page performance & tap targets)"
    },
    {
        "id": 109,
        "name": "Alamo SoftWash & Surface Cleaners",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 939-9274",
        "phoneRaw": "+12109399274",
        "email": "info@alamosoftwash.com",
        "website": "https://alamosoftwash.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "San Antonio pressure washing - Category #2 (House wash & concrete cleaning tool)"
    },
    {
        "id": 110,
        "name": "San Antonio Tree Surgeons",
        "trade": "Tree Service & Removal",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 656-4003",
        "phoneRaw": "+12106564003",
        "email": "info@satreesurgeons.com",
        "website": "https://satreesurgeons.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio arborist - Category #1 (Mobile layout scaling & phone click)"
    },
    {
        "id": 111,
        "name": "Bob Jenkins Pest & Lawn Care",
        "trade": "Lawn Care & Landscaping",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 979-7378",
        "phoneRaw": "+12109797378",
        "email": "service@bobjenkinspestlawn.com",
        "website": "https://bobjenkinspestlawn.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Antonio lawn care - Category #2 (Turf fertilization & aeration calculator)"
    },
    {
        "id": 112,
        "name": "Alamo Paint & Remodel",
        "trade": "Painting & Finishes",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 880-4949",
        "phoneRaw": "+12108804949",
        "email": "quotes@alamopaintingtx.com",
        "website": "https://alamopaintingtx.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio painter - Category #1 (Mobile viewport navigation)"
    },
    {
        "id": 113,
        "name": "Mister Sparky San Antonio",
        "trade": "Electrical Services",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 899-5525",
        "phoneRaw": "+12108995525",
        "email": "info@mistersparkysatx.com",
        "website": "https://mistersparkysatx.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "San Antonio electrician - Category #2 (Electrical panel & lighting quote tool)"
    },
    {
        "id": 114,
        "name": "Champion AC & Heating",
        "trade": "HVAC & Air Conditioning",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 699-0022",
        "phoneRaw": "+12106990022",
        "email": "dispatch@championac.com",
        "website": "https://championac.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio HVAC - Category #1 (Fast 1-tap thumb calling for AC breakdown)"
    },
    {
        "id": 115,
        "name": "Beyer Plumbing Co.",
        "trade": "Plumbing & Drain Services",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 656-9027",
        "phoneRaw": "+12106569027",
        "email": "info@beyerplumbing.com",
        "website": "https://beyerplumbing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Antonio plumber - Category #2 (Water heater & hydro-jetting estimator)"
    },
    {
        "id": 116,
        "name": "Rhino Roofers",
        "trade": "Roofing & Restoration",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 361-7663",
        "phoneRaw": "+12103617663",
        "email": "contact@rhinoroofers.com",
        "website": "https://rhinoroofers.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio roofer - Category #1 (Mobile page speed & inspection scheduler)"
    },
    {
        "id": 117,
        "name": "Canyon Lake Pressure Washing",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "New Braunfels",
        "state": "TX",
        "phone": "(830) 214-4112",
        "phoneRaw": "+18302144112",
        "email": "info@canyonlakepressurewash.com",
        "website": "https://canyonlakepressurewash.com",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "New Braunfels exterior wash - Category #2 (Boat dock & driveway price tool)"
    },
    {
        "id": 118,
        "name": "Hill Country Tree Care",
        "trade": "Tree Service & Removal",
        "city": "Boerne",
        "state": "TX",
        "phone": "(830) 249-8733",
        "phoneRaw": "+18302498733",
        "email": "office@hillcountrytreecaretx.com",
        "website": "https://hillcountrytreecaretx.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Boerne tree arborist - Category #1 (Mobile layout & tap-to-call action)"
    },
    {
        "id": 119,
        "name": "Texas Cool Air Solutions",
        "trade": "HVAC & Air Conditioning",
        "city": "San Marcos",
        "state": "TX",
        "phone": "(512) 805-4328",
        "phoneRaw": "+15128054328",
        "email": "service@texascoolair.com",
        "website": "https://texascoolair.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Marcos HVAC - Category #2 (Seasonal AC tune-up & repair pricing tool)"
    },
    {
        "id": 120,
        "name": "Hill Country Mechanical Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Georgetown",
        "state": "TX",
        "phone": "(512) 869-7770",
        "phoneRaw": "+15128697770",
        "email": "info@hillcountryplumbingtx.com",
        "website": "https://hillcountryplumbingtx.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Georgetown plumber - Category #1 (Mobile form responsiveness)"
    }
]

def make_preview_url(p):
    demo_slug = TRADE_SLUGS.get(p["trade"], "hvac")
    encoded_name = urllib.parse.quote_plus(p["name"])
    encoded_city = urllib.parse.quote_plus(p["city"])
    encoded_phone = urllib.parse.quote_plus(p["phone"])
    return f"https://dzor777.github.io/building-websites-for-local-businesses/?demo={demo_slug}&name={encoded_name}&city={encoded_city}&phone={encoded_phone}"

def generate_markdown_doc(batch_num, title, prospects):
    lines = [
        f"# Contact Form Outreach (Batch #{batch_num}): 20 Verified Texas Trade Prospects",
        "",
        f"This document contains 20 verified local trade service contractors for **{title}**.",
        "",
        "> **Outreach Protocol Notes:**",
        "> - **NO LINKS in Message #1**: Prevents spam filters from blocking or flagging contact form submissions.",
        "> - **Personalization**: Each message greeting begins directly with the company name (NO 'team').",
        "> - **Clear Text Signoff**: Directs contractors to text `(903) 287-0299` or email `roth.dylan777@gmail.com`.",
        "> - **Dynamic Demo Personalization**: Message #2 delivers a real live interactive website preview dynamically customized with their name, trade, and phone number.",
        "",
        "---",
        ""
    ]

    for p in prospects:
        num = p["id"]
        name = p["name"]
        cat = p["category"]
        url = p["website"]
        email = p["email"]
        phone = p["phone"]
        city = f"{p['city']}, {p['state']}"
        trade = p["trade"]
        preview_url = make_preview_url(p)

        lines.append(f"### {num}. {name}")
        lines.append("")
        lines.append(f"* **Category:** {cat} | **Current Website:** [{url}]({url}) | **To Email:** `{email}` | **Phone:** {phone} | **City:** {city} | **Status:** ⏳ Ready to Send")
        lines.append("")
        
        # Determine rotating variation (A, B, C)
        cycle_key = ["A", "B", "C"][(num - 81) % 3]

        if cycle_key == "A":
            msg1 = (
                f"Hi {name},\n\n"
                f"I was checking your website on my phone and noticed the call button and layout get cut off on mobile screens.\n\n"
                f"I'm a local Texas web specialist and put together an interactive mobile demo for your company that includes a 1-tap call button and an instant estimate calculator.\n\n"
                f"Would it be alright if I sent you a quick link so you can take a look on your phone? Feel free to email me at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
                f"Thank you,\n"
                f"Dylan Roth"
            )
        elif cycle_key == "B":
            msg1 = (
                f"Hi {name},\n\n"
                f"I came across your business while looking up local {trade} contractors in {p['city']}. I pulled up your site on my iPhone and noticed it takes a while to load and the phone button is tough to tap on mobile.\n\n"
                f"I put together an interactive mobile preview for your trade with an instant quote calculator.\n\n"
                f"Would you be open to checking out a quick preview link? You can email roth.dylan777@gmail.com or text me at (903) 287-0299.\n\n"
                f"Thank you,\n"
                f"Dylan Roth"
            )
        else: # C
            msg1 = (
                f"Hi {name},\n\n"
                f"Quick question for you. I build high-converting mobile sites for Texas trade contractors, and I put together an interactive mobile demo customized for {trade} with a built-in estimate calculator for homeowners.\n\n"
                f"Mind if I email over a quick link so you can see how it looks on a phone? Feel free to email roth.dylan777@gmail.com or shoot me a text at (903) 287-0299.\n\n"
                f"Thank you,\n"
                f"Dylan Roth"
            )

        msg2 = (
            f"Hi {name},\n\n"
            f"Appreciate you getting back to me. Here is the interactive mobile preview I put together for {name}:\n\n"
            f"[Click to view {name} Mobile Preview]({preview_url})\n\n"
            f"Take a look on your phone if you can. The biggest feature is the interactive quote calculator halfway down the page. Instead of homeowners leaving your site when you don't answer right away, they can estimate their project and submit their details directly to your phone.\n\n"
            f"We keep pricing completely flat with zero contracts:\n"
            f"- Basic Plan: $300 setup fee and $150/mo. Clean mobile website, fast hosting, and ongoing updates.\n"
            f"- Standard Plan (Most Popular): $500 setup fee and $300/mo. Includes the interactive quote calculator and instant SMS lead alerts straight to your cell.\n"
            f"- Enterprise Plan: $1,000 setup fee and $600/mo. Full lead acquisition system for multi-crew companies, including custom CRM/booking integrations, multi-city service pages, and priority monthly updates.\n\n"
            f"*Out of scope updates are available for a discussed and negotiated additional fee.*\n\n"
            f"If you'd like to put this live under your domain, I can have it ready in 24 to 48 hours. Feel free to shoot me an email at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
            f"Thank you,\n"
            f"Dylan"
        )

        lines.append(f"**Message 1 (Linkless Touch - Variation {cycle_key}):**")
        lines.append("```text")
        lines.append(msg1)
        lines.append("```")
        lines.append("")
        lines.append("**Message 2 (Value Delivery & Preview Link):**")
        lines.append("```text")
        lines.append(msg2)
        lines.append("```")
        lines.append("")
        lines.append("---")
        lines.append("")

    return "\n".join(lines)

def main():
    # 1. Write batch 5 and 6 markdown docs
    b5_md = generate_markdown_doc(5, "Dallas-Fort Worth Metroplex Trades", BATCH_5_PROSPECTS)
    b5_path = CAMPAIGNS_DIR / "batch_05_texas_20prospects.md"
    b5_path.write_text(b5_md, encoding="utf-8")
    print(f"Wrote Batch 5 doc to {b5_path}")

    b6_md = generate_markdown_doc(6, "Austin & San Antonio Corridor Trades", BATCH_6_PROSPECTS)
    b6_path = CAMPAIGNS_DIR / "batch_06_texas_20prospects.md"
    b6_path.write_text(b6_md, encoding="utf-8")
    print(f"Wrote Batch 6 doc to {b6_path}")

    # 2. Append to texas_leads.json
    leads_path = DATA_DIR / "texas_leads.json"
    data = json.loads(leads_path.read_text(encoding="utf-8"))
    existing_ids = {x["id"] for x in data}
    
    all_new = BATCH_5_PROSPECTS + BATCH_6_PROSPECTS
    added = 0
    for p in all_new:
        if p["id"] in existing_ids:
            continue
        entry = {
            "id": p["id"],
            "business_name": p["name"],
            "niche": p["trade"],
            "city": f"{p['city']}, {p['state']}",
            "phone": p["phone"],
            "phoneRaw": p["phoneRaw"],
            "email": p["email"],
            "url": p["website"],
            "slug": re.sub(r'[^a-z0-9]+', '-', p["name"].lower()).strip('-'),
            "preview_url": make_preview_url(p),
            "status": "Not Contacted",
            "batch": 5 if p["id"] <= 100 else 6,
            "verified": True,
            "notes": p["notes"]
        }
        data.append(entry)
        added += 1

    leads_path.write_text(json.dumps(data, indent=2), encoding="utf-8")
    print(f"Appended {added} leads to texas_leads.json (Total now: {len(data)})")

if __name__ == "__main__":
    main()
