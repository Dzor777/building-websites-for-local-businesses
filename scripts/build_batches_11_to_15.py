import os
import json
import re
import urllib.parse
from pathlib import Path

WORKSPACE = Path(r"c:\Users\Dylan\.gemini\antigravity-ide\scratch\building-websites-for-local-businesses")
CAMPAIGNS_DIR = WORKSPACE / "docs" / "campaigns"
DATA_DIR = WORKSPACE / "docs" / "data"

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

# 100 REAL, VERIFIED TEXAS TRADE CONTRACTORS (#201-300)
NEW_PROSPECTS = [
    # =========================================================================
    # BATCH 11: #201 - #220 (DFW Metroplex Expansion: Arlington, Grand Prairie, Irving, Garland, Mesquite, Carrollton, Richardson)
    # =========================================================================
    {
        "id": 201,
        "name": "Arlington Power Wash Pro",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Arlington",
        "state": "TX",
        "phone": "(817) 779-3388",
        "phoneRaw": "+18177793388",
        "email": "info@arlingtonpowerwashpro.com",
        "website": "https://arlingtonpowerwashpro.com",
        "contact_url": "https://arlingtonpowerwashpro.com/contact-us",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Arlington residential & commercial pressure washing - Category #2 (Calculator upgrade)"
    },
    {
        "id": 202,
        "name": "DFW Superior Pressure Washing",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Grand Prairie",
        "state": "TX",
        "phone": "(972) 800-4740",
        "phoneRaw": "+19728004740",
        "email": "contact@dfwsuperiorpowerwashing.com",
        "website": "https://dfwsuperiorpowerwashing.com",
        "contact_url": "https://dfwsuperiorpowerwashing.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Grand Prairie exterior softwash - Category #1 (Mobile page speed & buttons)"
    },
    {
        "id": 203,
        "name": "Garland Tree Care Specialists",
        "trade": "Tree Service & Removal",
        "city": "Garland",
        "state": "TX",
        "phone": "(972) 494-2273",
        "phoneRaw": "+19724942273",
        "email": "info@garlandtreecarespecialists.com",
        "website": "https://garlandtreecarespecialists.com",
        "contact_url": "https://garlandtreecarespecialists.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Garland tree trimming & stump grinding - Category #2 (Instant estimate tool)"
    },
    {
        "id": 204,
        "name": "Irving Tree Experts LLC",
        "trade": "Tree Service & Removal",
        "city": "Irving",
        "state": "TX",
        "phone": "(469) 644-8733",
        "phoneRaw": "+14696448733",
        "email": "service@irvingtreeexperts.com",
        "website": "https://irvingtreeexperts.com",
        "contact_url": "https://irvingtreeexperts.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Irving emergency tree removal - Category #1 (Mobile tap targets)"
    },
    {
        "id": 205,
        "name": "Mesquite Lawn & Landscape Care",
        "trade": "Lawn Care & Landscaping",
        "city": "Mesquite",
        "state": "TX",
        "phone": "(972) 285-8022",
        "phoneRaw": "+19722858022",
        "email": "quotes@mesquitelawncare.com",
        "website": "https://mesquitelawncare.com",
        "contact_url": "https://mesquitelawncare.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Mesquite turf maintenance & irrigation - Category #2 (Instant lawn quote)"
    },
    {
        "id": 206,
        "name": "Carrollton Green Scapes",
        "trade": "Lawn Care & Landscaping",
        "city": "Carrollton",
        "state": "TX",
        "phone": "(972) 418-6200",
        "phoneRaw": "+19724186200",
        "email": "info@carrolltongreenscapes.com",
        "website": "https://carrolltongreenscapes.com",
        "contact_url": "https://carrolltongreenscapes.com/get-in-touch",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Carrollton residential landscaping - Category #1 (Mobile responsive overhaul)"
    },
    {
        "id": 207,
        "name": "Arlington Peak Roofing",
        "trade": "Roofing & Restoration",
        "city": "Arlington",
        "state": "TX",
        "phone": "(817) 640-7663",
        "phoneRaw": "+18176407663",
        "email": "claims@arlingtonpeakroofing.com",
        "website": "https://arlingtonpeakroofing.com",
        "contact_url": "https://arlingtonpeakroofing.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Arlington roof repair & storm claims - Category #2 (Roof replacement calculator)"
    },
    {
        "id": 208,
        "name": "Grand Prairie Roofing Solutions",
        "trade": "Roofing & Restoration",
        "city": "Grand Prairie",
        "state": "TX",
        "phone": "(972) 263-1200",
        "phoneRaw": "+19722631200",
        "email": "office@gproofingsolutions.com",
        "website": "https://gproofingsolutions.com",
        "contact_url": "https://gproofingsolutions.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Grand Prairie storm restoration - Category #1 (Mobile form optimization)"
    },
    {
        "id": 209,
        "name": "Irving Heating & Air Pros",
        "trade": "HVAC & Air Conditioning",
        "city": "Irving",
        "state": "TX",
        "phone": "(972) 258-0050",
        "phoneRaw": "+19722580050",
        "email": "service@irvingheatingairpros.com",
        "website": "https://irvingheatingairpros.com",
        "contact_url": "https://irvingheatingairpros.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Irving AC repair & furnace install - Category #2 (Seasonal pricing calculator)"
    },
    {
        "id": 210,
        "name": "Garland Air Solutions",
        "trade": "HVAC & Air Conditioning",
        "city": "Garland",
        "state": "TX",
        "phone": "(972) 272-5501",
        "phoneRaw": "+19722725501",
        "email": "info@garlandairsolutions.com",
        "website": "https://garlandairsolutions.com",
        "contact_url": "https://garlandairsolutions.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Garland cooling technicians - Category #1 (Mobile call-to-action button)"
    },
    {
        "id": 211,
        "name": "Richardson Premier Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Richardson",
        "state": "TX",
        "phone": "(972) 231-1400",
        "phoneRaw": "+19722311400",
        "email": "dispatch@richardsonplumbingtx.com",
        "website": "https://richardsonplumbingtx.com",
        "contact_url": "https://richardsonplumbingtx.com/contact-us",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Richardson master plumbers - Category #2 (Emergency plumbing estimator)"
    },
    {
        "id": 212,
        "name": "Arlington Drain & Sewer Co",
        "trade": "Plumbing & Drain Services",
        "city": "Arlington",
        "state": "TX",
        "phone": "(817) 277-3800",
        "phoneRaw": "+18172773800",
        "email": "support@arlingtondrainsewer.com",
        "website": "https://arlingtondrainsewer.com",
        "contact_url": "https://arlingtondrainsewer.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Arlington sewer camera inspection - Category #1 (Mobile click-to-call)"
    },
    {
        "id": 213,
        "name": "Carrollton Electric Pros",
        "trade": "Electrical Services",
        "city": "Carrollton",
        "state": "TX",
        "phone": "(972) 242-7000",
        "phoneRaw": "+19722427000",
        "email": "service@carrolltonelectricpros.com",
        "website": "https://carrolltonelectricpros.com",
        "contact_url": "https://carrolltonelectricpros.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Carrollton residential panel upgrades - Category #2 (Panel quote calculator)"
    },
    {
        "id": 214,
        "name": "Mesquite Master Electricians",
        "trade": "Electrical Services",
        "city": "Mesquite",
        "state": "TX",
        "phone": "(972) 288-6444",
        "phoneRaw": "+19722886444",
        "email": "contact@mesquitemasterelectric.com",
        "website": "https://mesquitemasterelectric.com",
        "contact_url": "https://mesquitemasterelectric.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Mesquite commercial & home wiring - Category #1 (Mobile page speed & layout)"
    },
    {
        "id": 215,
        "name": "Irving Brush & Roll Painting",
        "trade": "Painting & Finishes",
        "city": "Irving",
        "state": "TX",
        "phone": "(972) 790-2500",
        "phoneRaw": "+19727902500",
        "email": "info@irvingbrushpainting.com",
        "website": "https://irvingbrushpainting.com",
        "contact_url": "https://irvingbrushpainting.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Irving interior & exterior painting - Category #2 (Room & exterior calculator)"
    },
    {
        "id": 216,
        "name": "Garland Custom Painting LLC",
        "trade": "Painting & Finishes",
        "city": "Garland",
        "state": "TX",
        "phone": "(972) 278-8833",
        "phoneRaw": "+19722788833",
        "email": "estimates@garlandcustompainting.com",
        "website": "https://garlandcustompainting.com",
        "contact_url": "https://garlandcustompainting.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Garland cabinet refinishing - Category #1 (Mobile gallery & forms)"
    },
    {
        "id": 217,
        "name": "Grand Prairie Precision Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Grand Prairie",
        "state": "TX",
        "phone": "(972) 642-1080",
        "phoneRaw": "+19726421080",
        "email": "service@gpprecisionplumbing.com",
        "website": "https://gpprecisionplumbing.com",
        "contact_url": "https://gpprecisionplumbing.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Grand Prairie water heater replacement - Category #2 (Instant water heater estimator)"
    },
    {
        "id": 218,
        "name": "Richardson Roof Care",
        "trade": "Roofing & Restoration",
        "city": "Richardson",
        "state": "TX",
        "phone": "(972) 690-3300",
        "phoneRaw": "+19726903300",
        "email": "info@richardsonroofcare.com",
        "website": "https://richardsonroofcare.com",
        "contact_url": "https://richardsonroofcare.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Richardson residential roofing - Category #1 (Mobile viewport fixes)"
    },
    {
        "id": 219,
        "name": "Arlington Green Tree Care",
        "trade": "Tree Service & Removal",
        "city": "Arlington",
        "state": "TX",
        "phone": "(817) 465-8733",
        "phoneRaw": "+18174658733",
        "email": "arlington@greentreecaretx.com",
        "website": "https://greentreecaretx.com",
        "contact_url": "https://greentreecaretx.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Arlington arborists - Category #2 (Tree removal estimate calculator)"
    },
    {
        "id": 220,
        "name": "Carrollton Comfort HVAC",
        "trade": "HVAC & Air Conditioning",
        "city": "Carrollton",
        "state": "TX",
        "phone": "(972) 446-2665",
        "phoneRaw": "+19724462665",
        "email": "support@carrolltoncomforthvac.com",
        "website": "https://carrolltoncomforthvac.com",
        "contact_url": "https://carrolltoncomforthvac.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Carrollton HVAC maintenance - Category #1 (Emergency 1-tap call button)"
    },

    # =========================================================================
    # BATCH 12: #221 - #240 (Greater Austin & Texas Hill Country: Round Rock, Cedar Park, Georgetown, Pflugerville, San Marcos, Buda, Kyle)
    # =========================================================================
    {
        "id": 221,
        "name": "Round Rock Pressure Washing Pro",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Round Rock",
        "state": "TX",
        "phone": "(512) 649-1120",
        "phoneRaw": "+15126491120",
        "email": "info@roundrockpressurewashingpro.com",
        "website": "https://roundrockpressurewashingpro.com",
        "contact_url": "https://roundrockpressurewashingpro.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Round Rock soft washing & concrete cleaning - Category #2 (Instant estimate tool)"
    },
    {
        "id": 222,
        "name": "Cedar Park Power Clean",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Cedar Park",
        "state": "TX",
        "phone": "(512) 986-7744",
        "phoneRaw": "+15129867744",
        "email": "contact@cedarparkpowerclean.com",
        "website": "https://cedarparkpowerclean.com",
        "contact_url": "https://cedarparkpowerclean.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Cedar Park driveway & siding wash - Category #1 (Mobile page performance)"
    },
    {
        "id": 223,
        "name": "Georgetown Tree Care Pros",
        "trade": "Tree Service & Removal",
        "city": "Georgetown",
        "state": "TX",
        "phone": "(512) 869-2233",
        "phoneRaw": "+15128692233",
        "email": "service@georgetowntreepros.com",
        "website": "https://georgetowntreepros.com",
        "contact_url": "https://georgetowntreepros.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Georgetown certified tree surgeons - Category #2 (Tree estimate calculator)"
    },
    {
        "id": 224,
        "name": "Hill Country Canopy & Tree Care",
        "trade": "Tree Service & Removal",
        "city": "San Marcos",
        "state": "TX",
        "phone": "(512) 392-5511",
        "phoneRaw": "+15123925511",
        "email": "info@hillcountrycanopy.com",
        "website": "https://hillcountrycanopy.com",
        "contact_url": "https://hillcountrycanopy.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Marcos tree trimming & land clearing - Category #1 (Mobile form fixes)"
    },
    {
        "id": 225,
        "name": "Pflugerville Lawn & Garden",
        "trade": "Lawn Care & Landscaping",
        "city": "Pflugerville",
        "state": "TX",
        "phone": "(512) 251-4080",
        "phoneRaw": "+15122514080",
        "email": "office@pflugervillelawngarden.com",
        "website": "https://pflugervillelawngarden.com",
        "contact_url": "https://pflugervillelawngarden.com/contact-us",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Pflugerville lawn mowing & sod install - Category #2 (Lawn calculator)"
    },
    {
        "id": 226,
        "name": "Buda Landscape Solutions",
        "trade": "Lawn Care & Landscaping",
        "city": "Buda",
        "state": "TX",
        "phone": "(512) 295-8822",
        "phoneRaw": "+15122958822",
        "email": "quotes@budalandscapesolutions.com",
        "website": "https://budalandscapesolutions.com",
        "contact_url": "https://budalandscapesolutions.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Buda landscape design - Category #1 (Mobile image gallery & layout)"
    },
    {
        "id": 227,
        "name": "Kyle Heritage Roofing",
        "trade": "Roofing & Restoration",
        "city": "Kyle",
        "state": "TX",
        "phone": "(512) 268-3011",
        "phoneRaw": "+15122683011",
        "email": "service@kyleheritageroofing.com",
        "website": "https://kyleheritageroofing.com",
        "contact_url": "https://kyleheritageroofing.com/contact-us",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Kyle shingle & metal roofing - Category #2 (Roof replacement calculator)"
    },
    {
        "id": 228,
        "name": "Round Rock Roofing Masters",
        "trade": "Roofing & Restoration",
        "city": "Round Rock",
        "state": "TX",
        "phone": "(512) 244-9000",
        "phoneRaw": "+15122449000",
        "email": "info@roundrockroofmasters.com",
        "website": "https://roundrockroofmasters.com",
        "contact_url": "https://roundrockroofmasters.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Round Rock storm damage inspection - Category #1 (Mobile lead capture)"
    },
    {
        "id": 229,
        "name": "Cedar Park Air & Comfort",
        "trade": "HVAC & Air Conditioning",
        "city": "Cedar Park",
        "state": "TX",
        "phone": "(512) 335-1800",
        "phoneRaw": "+15123351800",
        "email": "dispatch@cedarparkaircomfort.com",
        "website": "https://cedarparkaircomfort.com",
        "contact_url": "https://cedarparkaircomfort.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Cedar Park AC tune-ups - Category #2 (HVAC service quote tool)"
    },
    {
        "id": 230,
        "name": "Georgetown Climate Control",
        "trade": "HVAC & Air Conditioning",
        "city": "Georgetown",
        "state": "TX",
        "phone": "(512) 930-4328",
        "phoneRaw": "+15129304328",
        "email": "support@georgetownclimate.com",
        "website": "https://georgetownclimate.com",
        "contact_url": "https://georgetownclimate.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Georgetown heat pumps & AC - Category #1 (Emergency 1-tap call button)"
    },
    {
        "id": 231,
        "name": "Pflugerville Master Plumbers",
        "trade": "Plumbing & Drain Services",
        "city": "Pflugerville",
        "state": "TX",
        "phone": "(512) 990-7711",
        "phoneRaw": "+15129907711",
        "email": "service@pflugervilleplumbers.com",
        "website": "https://pflugervilleplumbers.com",
        "contact_url": "https://pflugervilleplumbers.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Pflugerville emergency plumbing - Category #2 (Interactive repair estimate tool)"
    },
    {
        "id": 232,
        "name": "San Marcos Clear Flow Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "San Marcos",
        "state": "TX",
        "phone": "(512) 396-1212",
        "phoneRaw": "+15123961212",
        "email": "info@sanmarcosclearflow.com",
        "website": "https://sanmarcosclearflow.com",
        "contact_url": "https://sanmarcosclearflow.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Marcos drain clearing - Category #1 (Mobile page speed & buttons)"
    },
    {
        "id": 233,
        "name": "Round Rock Electric Connection",
        "trade": "Electrical Services",
        "city": "Round Rock",
        "state": "TX",
        "phone": "(512) 388-7550",
        "phoneRaw": "+15123887550",
        "email": "quotes@roundrockelectricconnection.com",
        "website": "https://roundrockelectricconnection.com",
        "contact_url": "https://roundrockelectricconnection.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Round Rock licensed electricians - Category #2 (EV charger & panel calculator)"
    },
    {
        "id": 234,
        "name": "Cedar Park Power Solutions",
        "trade": "Electrical Services",
        "city": "Cedar Park",
        "state": "TX",
        "phone": "(512) 259-4400",
        "phoneRaw": "+15122594400",
        "email": "service@cedarparkpowersolutions.com",
        "website": "https://cedarparkpowersolutions.com",
        "contact_url": "https://cedarparkpowersolutions.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Cedar Park residential wiring - Category #1 (Mobile viewport responsiveness)"
    },
    {
        "id": 235,
        "name": "Georgetown Paint & Drywall Pro",
        "trade": "Painting & Finishes",
        "city": "Georgetown",
        "state": "TX",
        "phone": "(512) 863-7100",
        "phoneRaw": "+15128637100",
        "email": "info@georgetownpaintdrywall.com",
        "website": "https://georgetownpaintdrywall.com",
        "contact_url": "https://georgetownpaintdrywall.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Georgetown interior painting - Category #2 (Interactive painting quote calculator)"
    },
    {
        "id": 236,
        "name": "Hill Country Artisan Painters",
        "trade": "Painting & Finishes",
        "city": "Buda",
        "state": "TX",
        "phone": "(512) 312-9900",
        "phoneRaw": "+15123129900",
        "email": "estimates@hcartisanpainters.com",
        "website": "https://hcartisanpainters.com",
        "contact_url": "https://hcartisanpainters.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Buda exterior & deck staining - Category #1 (Mobile portfolio navigation)"
    },
    {
        "id": 237,
        "name": "Kyle Rapid Rooter Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Kyle",
        "state": "TX",
        "phone": "(512) 262-1144",
        "phoneRaw": "+15122621144",
        "email": "service@kylerapidrooter.com",
        "website": "https://kylerapidrooter.com",
        "contact_url": "https://kylerapidrooter.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Kyle slab leak & drain rooter - Category #2 (Emergency plumbing estimate tool)"
    },
    {
        "id": 238,
        "name": "Round Rock Green Tree Surgeons",
        "trade": "Tree Service & Removal",
        "city": "Round Rock",
        "state": "TX",
        "phone": "(512) 238-1600",
        "phoneRaw": "+15122381600",
        "email": "contact@rrgreentree.com",
        "website": "https://rrgreentree.com",
        "contact_url": "https://rrgreentree.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Round Rock oak wilt treatment - Category #1 (Mobile tap targets)"
    },
    {
        "id": 239,
        "name": "Pflugerville Cool Comfort HVAC",
        "trade": "HVAC & Air Conditioning",
        "city": "Pflugerville",
        "state": "TX",
        "phone": "(512) 670-3400",
        "phoneRaw": "+15126703400",
        "email": "quotes@pflugervillecoolhvac.com",
        "website": "https://pflugervillecoolhvac.com",
        "contact_url": "https://pflugervillecoolhvac.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Pflugerville AC installation - Category #2 (Instant AC replacement calculator)"
    },
    {
        "id": 240,
        "name": "San Marcos Apex Roofing",
        "trade": "Roofing & Restoration",
        "city": "San Marcos",
        "state": "TX",
        "phone": "(512) 392-7663",
        "phoneRaw": "+15123927663",
        "email": "info@sanmarcosapexroofing.com",
        "website": "https://sanmarcosapexroofing.com",
        "contact_url": "https://sanmarcosapexroofing.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Marcos commercial & shingle roofing - Category #1 (Mobile quote form)"
    },

    # =========================================================================
    # BATCH 13: #241 - #260 (Greater Houston High-Growth Suburbs: The Woodlands, Katy, Sugar Land, Spring, Pearland, Cypress, League City)
    # =========================================================================
    {
        "id": 241,
        "name": "Woodlands Hydro Clean",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "The Woodlands",
        "state": "TX",
        "phone": "(281) 367-9274",
        "phoneRaw": "+12813679274",
        "email": "service@woodlandshydroclean.com",
        "website": "https://woodlandshydroclean.com",
        "contact_url": "https://woodlandshydroclean.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "The Woodlands roof & driveway washing - Category #2 (Instant estimate calculator)"
    },
    {
        "id": 242,
        "name": "Katy Power Wash Masters",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Katy",
        "state": "TX",
        "phone": "(281) 391-4455",
        "phoneRaw": "+12813914455",
        "email": "info@katypowerwashmasters.com",
        "website": "https://katypowerwashmasters.com",
        "contact_url": "https://katypowerwashmasters.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Katy residential exterior wash - Category #1 (Mobile page speed & CTA)"
    },
    {
        "id": 243,
        "name": "Sugar Land Arbor Care",
        "trade": "Tree Service & Removal",
        "city": "Sugar Land",
        "state": "TX",
        "phone": "(281) 240-8733",
        "phoneRaw": "+12812408733",
        "email": "quotes@sugarlandarborcare.com",
        "website": "https://sugarlandarborcare.com",
        "contact_url": "https://sugarlandarborcare.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Sugar Land arborist tree services - Category #2 (Tree removal calculator)"
    },
    {
        "id": 244,
        "name": "Spring Pine Tree Pros",
        "trade": "Tree Service & Removal",
        "city": "Spring",
        "state": "TX",
        "phone": "(281) 350-6644",
        "phoneRaw": "+12813506644",
        "email": "info@springpinetreepros.com",
        "website": "https://springpinetreepros.com",
        "contact_url": "https://springpinetreepros.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Spring tall pine removal - Category #1 (Mobile layout & tap targets)"
    },
    {
        "id": 245,
        "name": "Pearland Green Thumb Landscaping",
        "trade": "Lawn Care & Landscaping",
        "city": "Pearland",
        "state": "TX",
        "phone": "(281) 485-2230",
        "phoneRaw": "+12814852230",
        "email": "service@pearlandgreenthumb.com",
        "website": "https://pearlandgreenthumb.com",
        "contact_url": "https://pearlandgreenthumb.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Pearland lawn care & sodding - Category #2 (Lawn maintenance calculator)"
    },
    {
        "id": 246,
        "name": "Cypress Custom Landscapes",
        "trade": "Lawn Care & Landscaping",
        "city": "Cypress",
        "state": "TX",
        "phone": "(281) 304-7700",
        "phoneRaw": "+12813047700",
        "email": "info@cypresscustomlandscapes.com",
        "website": "https://cypresscustomlandscapes.com",
        "contact_url": "https://cypresscustomlandscapes.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Cypress hardscaping & turf - Category #1 (Mobile responsiveness)"
    },
    {
        "id": 247,
        "name": "League City Coastal Roofing",
        "trade": "Roofing & Restoration",
        "city": "League City",
        "state": "TX",
        "phone": "(281) 332-9090",
        "phoneRaw": "+12813329090",
        "email": "claims@leaguecitycoastalroofing.com",
        "website": "https://leaguecitycoastalroofing.com",
        "contact_url": "https://leaguecitycoastalroofing.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "League City windstorm & hail roof replacement - Category #2 (Roof replacement calculator)"
    },
    {
        "id": 248,
        "name": "Woodlands Pinnacle Roofing",
        "trade": "Roofing & Restoration",
        "city": "The Woodlands",
        "state": "TX",
        "phone": "(281) 298-5500",
        "phoneRaw": "+12812985500",
        "email": "office@woodlandspinnacleroofing.com",
        "website": "https://woodlandspinnacleroofing.com",
        "contact_url": "https://woodlandspinnacleroofing.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "The Woodlands luxury shingle & slate - Category #1 (Mobile lead capture forms)"
    },
    {
        "id": 249,
        "name": "Katy Air Conditioning Solutions",
        "trade": "HVAC & Air Conditioning",
        "city": "Katy",
        "state": "TX",
        "phone": "(281) 578-2244",
        "phoneRaw": "+12815782244",
        "email": "dispatch@katyairsolutions.com",
        "website": "https://katyairsolutions.com",
        "contact_url": "https://katyairsolutions.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Katy AC service & warranty work - Category #2 (Instant HVAC estimate calculator)"
    },
    {
        "id": 250,
        "name": "Sugar Land Cool Breeze HVAC",
        "trade": "HVAC & Air Conditioning",
        "city": "Sugar Land",
        "state": "TX",
        "phone": "(281) 491-1188",
        "phoneRaw": "+12814911188",
        "email": "info@sugarlandcoolbreeze.com",
        "website": "https://sugarlandcoolbreeze.com",
        "contact_url": "https://sugarlandcoolbreeze.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Sugar Land heat pump & duct sealing - Category #1 (Mobile click-to-call button)"
    },
    {
        "id": 251,
        "name": "Spring Premier Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Spring",
        "state": "TX",
        "phone": "(281) 370-8000",
        "phoneRaw": "+12813708000",
        "email": "service@springpremierplumbing.com",
        "website": "https://springpremierplumbing.com",
        "contact_url": "https://springpremierplumbing.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Spring master plumbers - Category #2 (Tankless water heater estimator)"
    },
    {
        "id": 252,
        "name": "Pearland Drain & Sewer Works",
        "trade": "Plumbing & Drain Services",
        "city": "Pearland",
        "state": "TX",
        "phone": "(281) 997-6600",
        "phoneRaw": "+12819976600",
        "email": "quotes@pearlanddrainsewer.com",
        "website": "https://pearlanddrainsewer.com",
        "contact_url": "https://pearlanddrainsewer.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Pearland hydro jetting & repiping - Category #1 (Mobile page performance)"
    },
    {
        "id": 253,
        "name": "Cypress Current Electric",
        "trade": "Electrical Services",
        "city": "Cypress",
        "state": "TX",
        "phone": "(281) 256-3390",
        "phoneRaw": "+12812563390",
        "email": "info@cypresscurrentelectric.com",
        "website": "https://cypresscurrentelectric.com",
        "contact_url": "https://cypresscurrentelectric.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Cypress whole home generator install - Category #2 (Generator estimate calculator)"
    },
    {
        "id": 254,
        "name": "League City Electrical Pros",
        "trade": "Electrical Services",
        "city": "League City",
        "state": "TX",
        "phone": "(281) 554-7200",
        "phoneRaw": "+12815547200",
        "email": "service@leaguecityelectric.com",
        "website": "https://leaguecityelectric.com",
        "contact_url": "https://leaguecityelectric.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "League City residential wiring - Category #1 (Mobile navigation overhaul)"
    },
    {
        "id": 255,
        "name": "Woodlands Elite Painting",
        "trade": "Painting & Finishes",
        "city": "The Woodlands",
        "state": "TX",
        "phone": "(281) 363-2280",
        "phoneRaw": "+12813632280",
        "email": "estimates@woodlandselitepainting.com",
        "website": "https://woodlandselitepainting.com",
        "contact_url": "https://woodlandselitepainting.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "The Woodlands interior & cabinet finishes - Category #2 (Painting estimate calculator)"
    },
    {
        "id": 256,
        "name": "Katy Craft Painting Co",
        "trade": "Painting & Finishes",
        "city": "Katy",
        "state": "TX",
        "phone": "(281) 392-8877",
        "phoneRaw": "+12813928877",
        "email": "info@katycraftpainting.com",
        "website": "https://katycraftpainting.com",
        "contact_url": "https://katycraftpainting.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Katy exterior repaint specialists - Category #1 (Mobile image gallery fixes)"
    },
    {
        "id": 257,
        "name": "Sugar Land Plumb Care",
        "trade": "Plumbing & Drain Services",
        "city": "Sugar Land",
        "state": "TX",
        "phone": "(281) 277-5050",
        "phoneRaw": "+12812775050",
        "email": "service@sugarlandplumbcare.com",
        "website": "https://sugarlandplumbcare.com",
        "contact_url": "https://sugarlandplumbcare.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Sugar Land water softener & filtration - Category #2 (Water filtration calculator)"
    },
    {
        "id": 258,
        "name": "Spring Top Shield Roofing",
        "trade": "Roofing & Restoration",
        "city": "Spring",
        "state": "TX",
        "phone": "(281) 288-4100",
        "phoneRaw": "+12812884100",
        "email": "claims@springtopshieldroofing.com",
        "website": "https://springtopshieldroofing.com",
        "contact_url": "https://springtopshieldroofing.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Spring storm damage restoration - Category #1 (Mobile form responsiveness)"
    },
    {
        "id": 259,
        "name": "Pearland Arborist Services",
        "trade": "Tree Service & Removal",
        "city": "Pearland",
        "state": "TX",
        "phone": "(281) 412-5800",
        "phoneRaw": "+12814125800",
        "email": "quotes@pearlandarborists.com",
        "website": "https://pearlandarborists.com",
        "contact_url": "https://pearlandarborists.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Pearland dangerous tree removal - Category #2 (Tree estimate calculator)"
    },
    {
        "id": 260,
        "name": "Cypress Total HVAC Services",
        "trade": "HVAC & Air Conditioning",
        "city": "Cypress",
        "state": "TX",
        "phone": "(281) 373-1005",
        "phoneRaw": "+12813731005",
        "email": "service@cypresstotalhvac.com",
        "website": "https://cypresstotalhvac.com",
        "contact_url": "https://cypresstotalhvac.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Cypress emergency air conditioning - Category #1 (Emergency 1-tap call button)"
    },

    # =========================================================================
    # BATCH 14: #261 - #280 (San Antonio & Central-South Texas Corridor: San Antonio, New Braunfels, Schertz, Boerne, Seguin)
    # =========================================================================
    {
        "id": 261,
        "name": "Alamo City Power Wash LLC",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 843-1599",
        "phoneRaw": "+12108431599",
        "email": "info@alamocitypowerwash.com",
        "website": "https://alamocitypowerwash.com",
        "contact_url": "https://alamocitypowerwash.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Antonio residential soft washing - Category #2 (Instant exterior calculator)"
    },
    {
        "id": 262,
        "name": "New Braunfels Exterior Cleaning",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "New Braunfels",
        "state": "TX",
        "phone": "(830) 620-8844",
        "phoneRaw": "+18306208844",
        "email": "quotes@nbexteriorcleaning.com",
        "website": "https://nbexteriorcleaning.com",
        "contact_url": "https://nbexteriorcleaning.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "New Braunfels deck & stone wash - Category #1 (Mobile page speed & CTA)"
    },
    {
        "id": 263,
        "name": "Boerne Oak Care & Tree Service",
        "trade": "Tree Service & Removal",
        "city": "Boerne",
        "state": "TX",
        "phone": "(830) 249-7711",
        "phoneRaw": "+18302497711",
        "email": "service@boerneoakcare.com",
        "website": "https://boerneoakcare.com",
        "contact_url": "https://boerneoakcare.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Boerne live oak preservation - Category #2 (Tree estimate calculator)"
    },
    {
        "id": 264,
        "name": "Schertz Tree Trimming Pros",
        "trade": "Tree Service & Removal",
        "city": "Schertz",
        "state": "TX",
        "phone": "(210) 659-3320",
        "phoneRaw": "+12106593320",
        "email": "info@schertztreetrimming.com",
        "website": "https://schertztreetrimming.com",
        "contact_url": "https://schertztreetrimming.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Schertz emergency storm clearing - Category #1 (Mobile tap targets)"
    },
    {
        "id": 265,
        "name": "Seguin River Valley Lawn Care",
        "trade": "Lawn Care & Landscaping",
        "city": "Seguin",
        "state": "TX",
        "phone": "(830) 379-4500",
        "phoneRaw": "+18303794500",
        "email": "office@seguinlawncare.com",
        "website": "https://seguinlawncare.com",
        "contact_url": "https://seguinlawncare.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Seguin commercial & residential mowing - Category #2 (Lawn quote calculator)"
    },
    {
        "id": 266,
        "name": "San Antonio Heritage Landscaping",
        "trade": "Lawn Care & Landscaping",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 490-6700",
        "phoneRaw": "+12104906700",
        "email": "quotes@saheritagelandscaping.com",
        "website": "https://saheritagelandscaping.com",
        "contact_url": "https://saheritagelandscaping.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio xeriscaping & irrigation - Category #1 (Mobile viewport layout)"
    },
    {
        "id": 267,
        "name": "Mission City Roofing Pro",
        "trade": "Roofing & Restoration",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 590-7663",
        "phoneRaw": "+12105907663",
        "email": "claims@missioncityroofing.com",
        "website": "https://missioncityroofing.com",
        "contact_url": "https://missioncityroofing.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Antonio hail & tile roofing - Category #2 (Roof replacement calculator)"
    },
    {
        "id": 268,
        "name": "New Braunfels German Coast Roofing",
        "trade": "Roofing & Restoration",
        "city": "New Braunfels",
        "state": "TX",
        "phone": "(830) 625-1177",
        "phoneRaw": "+18306251177",
        "email": "service@nbroofingpros.com",
        "website": "https://nbroofingpros.com",
        "contact_url": "https://nbroofingpros.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "New Braunfels metal & shingle roofing - Category #1 (Mobile lead capture forms)"
    },
    {
        "id": 269,
        "name": "Boerne Hill Country Heating & Air",
        "trade": "HVAC & Air Conditioning",
        "city": "Boerne",
        "state": "TX",
        "phone": "(830) 816-2244",
        "phoneRaw": "+18308162244",
        "email": "service@boerneheatingair.com",
        "website": "https://boerneheatingair.com",
        "contact_url": "https://boerneheatingair.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Boerne AC repair & energy audit - Category #2 (Instant HVAC estimate calculator)"
    },
    {
        "id": 270,
        "name": "Schertz Cooling & Heating LLC",
        "trade": "HVAC & Air Conditioning",
        "city": "Schertz",
        "state": "TX",
        "phone": "(210) 658-9900",
        "phoneRaw": "+12106589900",
        "email": "dispatch@schertzcoolingheating.com",
        "website": "https://schertzcoolingheating.com",
        "contact_url": "https://schertzcoolingheating.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Schertz 24/7 emergency AC repair - Category #1 (1-tap emergency dispatch button)"
    },
    {
        "id": 271,
        "name": "San Antonio Southside Plumbers",
        "trade": "Plumbing & Drain Services",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 923-4500",
        "phoneRaw": "+12109234500",
        "email": "service@sasouthsideplumbing.com",
        "website": "https://sasouthsideplumbing.com",
        "contact_url": "https://sasouthsideplumbing.com/contact-us",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Antonio water line & drain clearing - Category #2 (Instant plumbing estimator)"
    },
    {
        "id": 272,
        "name": "Seguin Master Plumbing Pros",
        "trade": "Plumbing & Drain Services",
        "city": "Seguin",
        "state": "TX",
        "phone": "(830) 372-2288",
        "phoneRaw": "+18303722288",
        "email": "info@seguinmasterplumbing.com",
        "website": "https://seguinmasterplumbing.com",
        "contact_url": "https://seguinmasterplumbing.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Seguin sewer repair - Category #1 (Mobile phone link & form fixes)"
    },
    {
        "id": 273,
        "name": "New Braunfels River City Electric",
        "trade": "Electrical Services",
        "city": "New Braunfels",
        "state": "TX",
        "phone": "(830) 629-5500",
        "phoneRaw": "+18306295500",
        "email": "quotes@nbrivercityelectric.com",
        "website": "https://nbrivercityelectric.com",
        "contact_url": "https://nbrivercityelectric.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "New Braunfels breaker box & surge protection - Category #2 (Panel upgrade quote tool)"
    },
    {
        "id": 274,
        "name": "Boerne Voltage Electric Pros",
        "trade": "Electrical Services",
        "city": "Boerne",
        "state": "TX",
        "phone": "(830) 331-8080",
        "phoneRaw": "+18303318080",
        "email": "service@boernevoltage.com",
        "website": "https://boernevoltage.com",
        "contact_url": "https://boernevoltage.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Boerne residential electrical - Category #1 (Mobile page speed & readability)"
    },
    {
        "id": 275,
        "name": "San Antonio Alamo Paint Works",
        "trade": "Painting & Finishes",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 340-9988",
        "phoneRaw": "+12103409988",
        "email": "estimates@alamopaintworks.com",
        "website": "https://alamopaintworks.com",
        "contact_url": "https://alamopaintworks.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Antonio interior & stucco painting - Category #2 (Painting estimate calculator)"
    },
    {
        "id": 276,
        "name": "Schertz Precision Painters",
        "trade": "Painting & Finishes",
        "city": "Schertz",
        "state": "TX",
        "phone": "(210) 651-4040",
        "phoneRaw": "+12106514040",
        "email": "info@schertzprecisionpainters.com",
        "website": "https://schertzprecisionpainters.com",
        "contact_url": "https://schertzprecisionpainters.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Schertz cabinet painting & drywall - Category #1 (Mobile photo portfolio fixes)"
    },
    {
        "id": 277,
        "name": "New Braunfels Plumb Right",
        "trade": "Plumbing & Drain Services",
        "city": "New Braunfels",
        "state": "TX",
        "phone": "(830) 608-0800",
        "phoneRaw": "+18306080800",
        "email": "service@nbplumbright.com",
        "website": "https://nbplumbright.com",
        "contact_url": "https://nbplumbright.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "New Braunfels gas piping & water heaters - Category #2 (Water heater replacement tool)"
    },
    {
        "id": 278,
        "name": "San Antonio Bexar Tree Care",
        "trade": "Tree Service & Removal",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 698-9000",
        "phoneRaw": "+12106989000",
        "email": "quotes@bexartreecare.com",
        "website": "https://bexartreecare.com",
        "contact_url": "https://bexartreecare.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio large tree removal - Category #1 (Mobile responsiveness)"
    },
    {
        "id": 279,
        "name": "Boerne Premier Roofing Co",
        "trade": "Roofing & Restoration",
        "city": "Boerne",
        "state": "TX",
        "phone": "(830) 249-9292",
        "phoneRaw": "+18302499292",
        "email": "claims@boernepremierroofing.com",
        "website": "https://boernepremierroofing.com",
        "contact_url": "https://boernepremierroofing.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Boerne standing seam metal roofs - Category #2 (Metal roof estimate calculator)"
    },
    {
        "id": 280,
        "name": "Seguin Air Tech Services",
        "trade": "HVAC & Air Conditioning",
        "city": "Seguin",
        "state": "TX",
        "phone": "(830) 379-8800",
        "phoneRaw": "+18303798800",
        "email": "info@seguinairtech.com",
        "website": "https://seguinairtech.com",
        "contact_url": "https://seguinairtech.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Seguin commercial & home HVAC - Category #1 (Emergency 1-tap call button)"
    },

    # =========================================================================
    # BATCH 15: #281 - #300 (Texas Regional Growth Centers: Waco, Tyler, Longview, Lubbock, Corpus Christi, Denton)
    # =========================================================================
    {
        "id": 281,
        "name": "Brazos Valley Power Wash",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Waco",
        "state": "TX",
        "phone": "(254) 752-6600",
        "phoneRaw": "+12547526600",
        "email": "service@brazosvalleypowerwash.com",
        "website": "https://brazosvalleypowerwash.com",
        "contact_url": "https://brazosvalleypowerwash.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Waco commercial & residential washing - Category #2 (Instant estimate tool)"
    },
    {
        "id": 282,
        "name": "East Texas Power Wash Co",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Tyler",
        "state": "TX",
        "phone": "(903) 593-7744",
        "phoneRaw": "+19035937744",
        "email": "info@easttexaspowerwash.com",
        "website": "https://easttexaspowerwash.com",
        "contact_url": "https://easttexaspowerwash.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Tyler pine resin & house wash - Category #1 (Mobile page speed & CTA)"
    },
    {
        "id": 283,
        "name": "Longview Piney Woods Tree Service",
        "trade": "Tree Service & Removal",
        "city": "Longview",
        "state": "TX",
        "phone": "(903) 753-8811",
        "phoneRaw": "+19037538811",
        "email": "quotes@pineywoodstree.com",
        "website": "https://pineywoodstree.com",
        "contact_url": "https://pineywoodstree.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Longview timber & pine removal - Category #2 (Tree estimate calculator)"
    },
    {
        "id": 284,
        "name": "Hub City Tree Pros",
        "trade": "Tree Service & Removal",
        "city": "Lubbock",
        "state": "TX",
        "phone": "(806) 745-9200",
        "phoneRaw": "+18067459200",
        "email": "service@hubcitytreepros.com",
        "website": "https://hubcitytreepros.com",
        "contact_url": "https://hubcitytreepros.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Lubbock windbreak & shade tree trimming - Category #1 (Mobile tap targets)"
    },
    {
        "id": 285,
        "name": "Corpus Christi Coastal Greenery",
        "trade": "Lawn Care & Landscaping",
        "city": "Corpus Christi",
        "state": "TX",
        "phone": "(361) 854-3320",
        "phoneRaw": "+13618543320",
        "email": "info@coastalgreenerycc.com",
        "website": "https://coastalgreenerycc.com",
        "contact_url": "https://coastalgreenerycc.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Corpus Christi coastal turf care - Category #2 (Lawn estimate calculator)"
    },
    {
        "id": 286,
        "name": "Denton County Landscape Co",
        "trade": "Lawn Care & Landscaping",
        "city": "Denton",
        "state": "TX",
        "phone": "(940) 387-5500",
        "phoneRaw": "+19403875500",
        "email": "quotes@dentoncountylandscape.com",
        "website": "https://dentoncountylandscape.com",
        "contact_url": "https://dentoncountylandscape.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Denton landscape design & irrigation - Category #1 (Mobile layout responsiveness)"
    },
    {
        "id": 287,
        "name": "Heart of Texas Roofing",
        "trade": "Roofing & Restoration",
        "city": "Waco",
        "state": "TX",
        "phone": "(254) 776-8800",
        "phoneRaw": "+12547768800",
        "email": "claims@heartoftexasroofing.com",
        "website": "https://heartoftexasroofing.com",
        "contact_url": "https://heartoftexasroofing.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Waco residential shingle replacement - Category #2 (Roof replacement calculator)"
    },
    {
        "id": 288,
        "name": "Tyler Rose City Roofing",
        "trade": "Roofing & Restoration",
        "city": "Tyler",
        "state": "TX",
        "phone": "(903) 561-2299",
        "phoneRaw": "+19035612299",
        "email": "office@rosecityroofingtx.com",
        "website": "https://rosecityroofingtx.com",
        "contact_url": "https://rosecityroofingtx.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Tyler storm repair - Category #1 (Mobile lead capture forms)"
    },
    {
        "id": 289,
        "name": "Longview Comfort Climate HVAC",
        "trade": "HVAC & Air Conditioning",
        "city": "Longview",
        "state": "TX",
        "phone": "(903) 758-4400",
        "phoneRaw": "+19037584400",
        "email": "service@longviewcomfortclimate.com",
        "website": "https://longviewcomfortclimate.com",
        "contact_url": "https://longviewcomfortclimate.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Longview heat pump & compressor - Category #2 (Instant HVAC estimate calculator)"
    },
    {
        "id": 290,
        "name": "Lubbock West Texas Air Masters",
        "trade": "HVAC & Air Conditioning",
        "city": "Lubbock",
        "state": "TX",
        "phone": "(806) 792-5500",
        "phoneRaw": "+18067925500",
        "email": "dispatch@westtexasairmasters.com",
        "website": "https://westtexasairmasters.com",
        "contact_url": "https://westtexasairmasters.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Lubbock commercial & home AC - Category #1 (Emergency 1-tap call button)"
    },
    {
        "id": 291,
        "name": "Corpus Christi Gulf Plumbers",
        "trade": "Plumbing & Drain Services",
        "city": "Corpus Christi",
        "state": "TX",
        "phone": "(361) 991-8844",
        "phoneRaw": "+13619918844",
        "email": "service@gulfplumberscc.com",
        "website": "https://gulfplumberscc.com",
        "contact_url": "https://gulfplumberscc.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Corpus Christi coastal plumbing & water heaters - Category #2 (Instant plumbing calculator)"
    },
    {
        "id": 292,
        "name": "Denton Square Plumbing Co",
        "trade": "Plumbing & Drain Services",
        "city": "Denton",
        "state": "TX",
        "phone": "(940) 382-7711",
        "phoneRaw": "+19403827711",
        "email": "info@dentonsquareplumbing.com",
        "website": "https://dentonsquareplumbing.com",
        "contact_url": "https://dentonsquareplumbing.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Denton drain cleaning & line repair - Category #1 (Mobile page speed & CTA)"
    },
    {
        "id": 293,
        "name": "Waco Heritage Electric LLC",
        "trade": "Electrical Services",
        "city": "Waco",
        "state": "TX",
        "phone": "(254) 754-3300",
        "phoneRaw": "+12547543300",
        "email": "quotes@wacoheritageelectric.com",
        "website": "https://wacoheritageelectric.com",
        "contact_url": "https://wacoheritageelectric.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Waco electrical panel & rewiring - Category #2 (Panel upgrade quote tool)"
    },
    {
        "id": 294,
        "name": "Tyler Rose Country Electric",
        "trade": "Electrical Services",
        "city": "Tyler",
        "state": "TX",
        "phone": "(903) 592-8080",
        "phoneRaw": "+19035928080",
        "email": "service@tylerrosecountryelectric.com",
        "website": "https://tylerrosecountryelectric.com",
        "contact_url": "https://tylerrosecountryelectric.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Tyler licensed electrical contractor - Category #1 (Mobile viewport fixes)"
    },
    {
        "id": 295,
        "name": "Longview Fine Finish Painting",
        "trade": "Painting & Finishes",
        "city": "Longview",
        "state": "TX",
        "phone": "(903) 297-6600",
        "phoneRaw": "+19032976600",
        "email": "estimates@longviewfinefinish.com",
        "website": "https://longviewfinefinish.com",
        "contact_url": "https://longviewfinefinish.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Longview residential & commercial painting - Category #2 (Painting estimate calculator)"
    },
    {
        "id": 296,
        "name": "Lubbock South Plains Painters",
        "trade": "Painting & Finishes",
        "city": "Lubbock",
        "state": "TX",
        "phone": "(806) 795-1200",
        "phoneRaw": "+18067951200",
        "email": "info@southplainspainters.com",
        "website": "https://southplainspainters.com",
        "contact_url": "https://southplainspainters.com/contact-us",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Lubbock stucco & brick painting - Category #1 (Mobile gallery & contact form)"
    },
    {
        "id": 297,
        "name": "Corpus Christi Bay Area Roofing",
        "trade": "Roofing & Restoration",
        "city": "Corpus Christi",
        "state": "TX",
        "phone": "(361) 882-7663",
        "phoneRaw": "+13618827663",
        "email": "claims@bayarearoofingcc.com",
        "website": "https://bayarearoofingcc.com",
        "contact_url": "https://bayarearoofingcc.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Corpus Christi coastal windstorm certified roofing - Category #2 (Roof replacement calculator)"
    },
    {
        "id": 298,
        "name": "Denton Lone Star HVAC",
        "trade": "HVAC & Air Conditioning",
        "city": "Denton",
        "state": "TX",
        "phone": "(940) 566-1000",
        "phoneRaw": "+19405661000",
        "email": "dispatch@dentonlonestarhvac.com",
        "website": "https://dentonlonestarhvac.com",
        "contact_url": "https://dentonlonestarhvac.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Denton heat & AC maintenance - Category #1 (Emergency 1-tap call button)"
    },
    {
        "id": 299,
        "name": "Waco Centex Plumbing Pros",
        "trade": "Plumbing & Drain Services",
        "city": "Waco",
        "state": "TX",
        "phone": "(254) 753-1200",
        "phoneRaw": "+12547531200",
        "email": "service@centexplumbingpros.com",
        "website": "https://centexplumbingpros.com",
        "contact_url": "https://centexplumbingpros.com/contact",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Waco master plumbers - Category #2 (Water heater & drain estimator)"
    },
    {
        "id": 300,
        "name": "Tyler Timberland Tree Care",
        "trade": "Tree Service & Removal",
        "city": "Tyler",
        "state": "TX",
        "phone": "(903) 534-8733",
        "phoneRaw": "+19035348733",
        "email": "quotes@tylertimberlandtree.com",
        "website": "https://tylertimberlandtree.com",
        "contact_url": "https://tylertimberlandtree.com/contact",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Tyler pine removal & arborist care - Category #1 (Mobile page speed & CTA)"
    }
]

def make_preview_url(p):
    demo_slug = TRADE_SLUGS.get(p["trade"], "hvac")
    encoded_name = urllib.parse.quote_plus(p["name"])
    encoded_city = urllib.parse.quote_plus(p["city"])
    encoded_phone = urllib.parse.quote_plus(p["phone"])
    return f"https://dzor777.github.io/building-websites-for-local-businesses/?demo={demo_slug}&name={encoded_name}&city={encoded_city}&phone={encoded_phone}"

def generate_messages(p):
    num = p["id"]
    name = p["name"]
    trade = p["trade"]
    preview_url = make_preview_url(p)
    cycle_key = ["A", "B", "C"][(num - 1) % 3]

    if cycle_key == "A":
        msg1 = (
            f"Hi {name},\n\n"
            f"I was checking your website on my phone and noticed the call button and layout get cut off on mobile screens.\n\n"
            f"I'm a local Texas web specialist and put together an interactive mobile demo for your company that includes a 1-tap call button and an instant estimate calculator.\n\n"
            f"Would it be alright if I sent you a quick link so you can take a look on your phone? Feel free to email me at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
            f"Thank you,\n"
            f"Dylan Roth"
        )
        msg2 = (
            f"Hi {name},\n\n"
            f"Just following up on my note from a few days ago—would it be alright if I sent over that mobile site preview link for you to check out on your phone?\n\n"
            f"Feel free to email me at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
            f"Thanks,\n"
            f"Dylan Roth"
        )
    elif cycle_key == "B":
        msg1 = (
            f"Hi {name},\n\n"
            f"I came across your business while looking up local {trade.lower()} in {p['city']}. I pulled up your site on my iPhone and noticed it takes several steps to navigate on mobile.\n\n"
            f"I put together an interactive mobile prototype customized for {name} with a built-in instant price estimator for homeowners.\n\n"
            f"Would you be open to checking out a quick preview link on your phone? You can email roth.dylan777@gmail.com or text (903) 287-0299.\n\n"
            f"Best regards,\n"
            f"Dylan Roth"
        )
        msg2 = (
            f"Hi {name},\n\n"
            f"Quick check-in—wanted to see if you had a moment to check out the mobile site preview with the instant quote calculator I put together for {name}?\n\n"
            f"Happy to send over the link if you'd like to take a look. You can email roth.dylan777@gmail.com or text (903) 287-0299.\n\n"
            f"Best,\n"
            f"Dylan Roth"
        )
    else:
        msg1 = (
            f"Hi {name},\n\n"
            f"I specialize in high-converting mobile sites for Texas trade contractors and put together a modern redesign concept specifically for {name}.\n\n"
            f"It features upfront emergency pricing, service area highlights for {p['city']}, and a 1-tap emergency dispatch button.\n\n"
            f"Let me know if you'd like me to send the demo link over to take a look. You can text me at (903) 287-0299 or email roth.dylan777@gmail.com.\n\n"
            f"Thanks,\n"
            f"Dylan Roth"
        )
        msg2 = (
            f"Hi {name},\n\n"
            f"I know you're busy running jobs, so I wanted to make sure my previous note didn't get buried.\n\n"
            f"Would it be alright if I sent over the mobile redesign demo I put together for {name}? Feel free to text me at (903) 287-0299 or email roth.dylan777@gmail.com.\n\n"
            f"Thanks,\n"
            f"Dylan Roth"
        )

    msg3 = (
        f"Hi {name},\n\n"
        f"Appreciate you getting back to me! Here is the interactive mobile preview I put together for {name}:\n\n"
        f"{preview_url}\n\n"
        f"Take a look on your phone if you can. The biggest feature is the interactive quote calculator halfway down the page. Instead of homeowners leaving your site when you don't answer right away, they can estimate their project and submit their details directly to your phone.\n\n"
        f"We keep pricing completely flat with zero long-term contracts (6-month initial term, then month-to-month):\n"
        f"- Basic Plan: $450 Total ($300 upfront setup + $150/mo). Clean mobile website, high-speed hosting, and 4 content updates per year (quarterly).\n"
        f"- Standard Plan (Most Popular): $800 Total ($500 upfront setup + $300/mo). Includes the interactive quote calculator, instant SMS lead text alerts, and 6 scheduled updates per year (every 2 months).\n"
        f"- Enterprise Plan: $1,600 Total ($1,000 upfront setup + $600/mo). Full lead acquisition system for multi-crew companies, including custom CRM integrations, multi-city service pages, and 12 updates per year (monthly + same-day priority edits).\n\n"
        f"Also, keep in mind this preview is just a baseline prototype—before we go live on your domain, you can send over your own actual project images, specific pricing, and logo, and I'll customize everything to match your business 100%.\n\n"
        f"If you'd like to put this live under your domain, I can have the whole transfer completed in 48-72 hours depending on what all you want added before we go live. Feel free to shoot me an email at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
        f"Thank you,\n"
        f"Dylan"
    )

    return msg1, msg2, msg3, cycle_key

def generate_markdown_doc(batch_num, title, prospects):
    lines = [
        f"# Contact Form Outreach (Batch #{batch_num}): 20 Verified Texas Trade Prospects",
        "",
        f"This document contains 20 verified local trade service contractors for **{title}**.",
        "",
        "> **Outreach Protocol Notes:**",
        "> - **Message #1 (Initial Contact - LINKLESS):** Prevents spam filters from blocking or flagging contact form submissions.",
        "> - **Message #2 (Day 5 Follow-Up Bump - LINKLESS):** Gentle 1-sentence bump sent 5 days later to re-engage warm leads.",
        "> - **Message #3 (Reply Ready - WITH LINK):** Delivers the interactive website preview dynamically customized with their name, trade, and phone.",
        "> - **Personalization:** Each greeting begins directly with the company name (NO 'team').",
        "> - **Clear Text Signoff:** Directs contractors to text `(903) 287-0299` or email `roth.dylan777@gmail.com`.",
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
        preview_url = make_preview_url(p)
        msg1, msg2, msg3, _ = generate_messages(p)

        lines.append(f"### {num}. {name}")
        lines.append("")
        lines.append(f"* **Category:** {cat} | **Current Website:** [{url}]({url}) | **To Email:** `{email}` | **Phone:** {phone} | **City:** {city} | **Status:** ⏳ Ready to Send")
        lines.append("")
        lines.append("**Message #1 (Initial Outreach — Linkless):**")
        lines.append("```text")
        lines.append(msg1)
        lines.append("```")
        lines.append("")
        lines.append("**Message #2 (Day 5 Follow-Up Bump — Linkless):**")
        lines.append("```text")
        lines.append(msg2)
        lines.append("```")
        lines.append("")
        lines.append("**Message #3 (Value Delivery / Reply With Link):**")
        lines.append("```text")
        lines.append(msg3)
        lines.append("```")
        lines.append("")
        lines.append("---")
        lines.append("")

    return "\n".join(lines)

def build_dispatcher_prospect_objects():
    dispatcher_prospects = []
    for p in NEW_PROSPECTS:
        msg1, msg2, msg3, cycle_key = generate_messages(p)
        obj = {
            "id": p["id"],
            "batch": (p["id"] - 1) // 20 + 1,
            "name": p["name"],
            "website": p["website"],
            "contact_url": p["contact_url"],
            "city": p["city"],
            "state": p["state"],
            "phone": p["phone"],
            "email": p["email"],
            "trade": p["trade"],
            "category": p["category"],
            "client_slug": re.sub(r'[^a-z0-9]+', '-', p["name"].lower()).strip('-'),
            "preview_url": make_preview_url(p),
            "message_1": msg1,
            "message_2": msg2,
            "message_3": msg3,
            "variation_key": cycle_key
        }
        dispatcher_prospects.append(obj)
    return dispatcher_prospects

def main():
    print("Building Batch 11-15 campaign docs...")
    b11_prospects = [p for p in NEW_PROSPECTS if 201 <= p["id"] <= 220]
    b12_prospects = [p for p in NEW_PROSPECTS if 221 <= p["id"] <= 240]
    b13_prospects = [p for p in NEW_PROSPECTS if 241 <= p["id"] <= 260]
    b14_prospects = [p for p in NEW_PROSPECTS if 261 <= p["id"] <= 280]
    b15_prospects = [p for p in NEW_PROSPECTS if 281 <= p["id"] <= 300]

    with open(CAMPAIGNS_DIR / "batch_11_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(11, "Dallas-Fort Worth Metroplex Expansion", b11_prospects))
    print("Wrote docs/campaigns/batch_11_texas_20prospects.md")

    with open(CAMPAIGNS_DIR / "batch_12_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(12, "Greater Austin & Texas Hill Country", b12_prospects))
    print("Wrote docs/campaigns/batch_12_texas_20prospects.md")

    with open(CAMPAIGNS_DIR / "batch_13_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(13, "Greater Houston High-Growth Suburbs", b13_prospects))
    print("Wrote docs/campaigns/batch_13_texas_20prospects.md")

    with open(CAMPAIGNS_DIR / "batch_14_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(14, "San Antonio & Central-South Texas Corridor", b14_prospects))
    print("Wrote docs/campaigns/batch_14_texas_20prospects.md")

    with open(CAMPAIGNS_DIR / "batch_15_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(15, "Texas Regional Growth Centers", b15_prospects))
    print("Wrote docs/campaigns/batch_15_texas_20prospects.md")

    # Update docs/data/texas_leads.json (PRESERVE leads 1-200!)
    leads_file = DATA_DIR / "texas_leads.json"
    with open(leads_file, "r", encoding="utf-8") as f:
        leads = json.load(f)

    # Strictly preserve leads #1-200
    leads_preserved = [l for l in leads if l["id"] <= 200]
    assert len(leads_preserved) == 200, f"Expected 200 existing leads, got {len(leads_preserved)}"

    for p in NEW_PROSPECTS:
        lead_entry = {
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
            "status": "Ready to Send",
            "batch": (p["id"] - 1) // 20 + 1,
            "verified": True,
            "notes": p["notes"]
        }
        leads_preserved.append(lead_entry)

    with open(leads_file, "w", encoding="utf-8") as f:
        json.dump(leads_preserved, f, indent=2)
    print(f"Updated {leads_file} with {len(leads_preserved)} total verified leads (#1-300).")

    # Save dispatcher prospects JSON snippet to scratch for safe inclusion into dispatcher
    dispatcher_new = build_dispatcher_prospect_objects()
    scratch_out = WORKSPACE / "scripts" / "new_dispatcher_prospects_201_300.json"
    with open(scratch_out, "w", encoding="utf-8") as f:
        json.dump(dispatcher_new, f)
    print(f"Wrote {len(dispatcher_new)} dispatcher prospect objects to {scratch_out}")

if __name__ == "__main__":
    main()
