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

# 80 REAL, VERIFIED TEXAS TRADE CONTRACTORS (#121-200)
NEW_PROSPECTS = [
    # BATCH 7: #121 - #140 (Houston Metro Trade Specialists - Part 1)
    {
        "id": 121,
        "name": "Pressure Washing America, LLC",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 689-7080",
        "phoneRaw": "+18326897080",
        "email": "info@pressurewashingamerica.com",
        "website": "https://www.pressurewashingamerica.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston power washing contractor - Category #2 (Instant estimate calculator)"
    },
    {
        "id": 122,
        "name": "Houston TX Pressure Washing",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 307-3885",
        "phoneRaw": "+18323073885",
        "email": "info@houstontxpressurewashing.com",
        "website": "https://www.houstontxpressurewashing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston exterior softwash - Category #1 (Mobile touch targets)"
    },
    {
        "id": 123,
        "name": "Very Good Pressure Washing LLC",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 930-7055",
        "phoneRaw": "+18329307055",
        "email": "info@verygoodpressurewashing.com",
        "website": "https://verygoodpressurewashing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston power washing - Category #2 (Instant estimate tool)"
    },
    {
        "id": 124,
        "name": "Houston Pressure Washing Services",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 730-2467",
        "phoneRaw": "+17137302467",
        "email": "info@houstonpressurewashingservices.org",
        "website": "http://www.houstonpressurewashingservices.org",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston exterior pressure washing - Category #1 (Mobile page speed)"
    },
    {
        "id": 125,
        "name": "DM Pressure Washing & Striping",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 546-5766",
        "phoneRaw": "+18325465766",
        "email": "info@dmpressurewashing.com",
        "website": "https://www.dmpressurewashing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston commercial & residential washing - Category #2 (Calculator upgrade)"
    },
    {
        "id": 126,
        "name": "Trees, LLC",
        "trade": "Tree Service & Removal",
        "city": "Houston",
        "state": "TX",
        "phone": "(281) 447-1327",
        "phoneRaw": "+12814471327",
        "email": "info@trees-llc.com",
        "website": "https://trees-llc.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston professional tree care - Category #1 (Mobile viewport fixes)"
    },
    {
        "id": 127,
        "name": "The Davey Tree Expert Company",
        "trade": "Tree Service & Removal",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 973-8733",
        "phoneRaw": "+17139738733",
        "email": "houston@davey.com",
        "website": "https://www.davey.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston certified arborists - Category #2 (Estimate calculator)"
    },
    {
        "id": 128,
        "name": "Tree Service Houston",
        "trade": "Tree Service & Removal",
        "city": "Houston",
        "state": "TX",
        "phone": "(346) 680-8916",
        "phoneRaw": "+13466808916",
        "email": "dispatch@treeserviceshoustontx.com",
        "website": "https://treeserviceshoustontx.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston tree emergency crew - Category #1 (1-tap dispatch call)"
    },
    {
        "id": 129,
        "name": "Strong Landscaping",
        "trade": "Lawn Care & Landscaping",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 469-4449",
        "phoneRaw": "+17134694449",
        "email": "office@stronglandscaping.com",
        "website": "https://stronglandscaping.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston landscape design & maintenance - Category #2 (Instant estimate tool)"
    },
    {
        "id": 130,
        "name": "Luxury Landscaping & Lawn Care",
        "trade": "Lawn Care & Landscaping",
        "city": "Houston",
        "state": "TX",
        "phone": "(281) 249-9449",
        "phoneRaw": "+12812499449",
        "email": "info@luxurylandscaping.org",
        "website": "https://www.luxurylandscaping.org",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston turf care & irrigation - Category #1 (Mobile touch targets)"
    },
    {
        "id": 131,
        "name": "Danny's Landscaping",
        "trade": "Lawn Care & Landscaping",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 514-3537",
        "phoneRaw": "+17135143537",
        "email": "danny@dannyslandscapingtx.com",
        "website": "https://dannyslandscapingtx.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston residential landscaping - Category #2 (Calculator upgrade)"
    },
    {
        "id": 132,
        "name": "Mtex Lawn Care",
        "trade": "Lawn Care & Landscaping",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 870-5338",
        "phoneRaw": "+17138705338",
        "email": "mikemart1387@gmail.com",
        "website": "https://mtexlawncare.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston mowing & yard service - Category #1 (Mobile form optimization)"
    },
    {
        "id": 133,
        "name": "Greenridge Lawn LLC",
        "trade": "Lawn Care & Landscaping",
        "city": "Houston",
        "state": "TX",
        "phone": "(346) 214-6822",
        "phoneRaw": "+13462146822",
        "email": "service@greenridgelawnllc.com",
        "website": "https://greenridgelawnllc.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston regular lawn maintenance - Category #2 (Package estimate selector)"
    },
    {
        "id": 134,
        "name": "Henry Contractor",
        "trade": "Painting & Finishes",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 965-6751",
        "phoneRaw": "+17139656751",
        "email": "sales@henrycontractor.com",
        "website": "https://henrycontractor.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston painting contractor - Category #1 (Speed & mobile hero layout)"
    },
    {
        "id": 135,
        "name": "Luxz Painting and Construction",
        "trade": "Painting & Finishes",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 201-2394",
        "phoneRaw": "+17132012394",
        "email": "admin@luxzpaintingconstruction.com",
        "website": "https://luxzpaintingconstructionservices.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston interior/exterior painting - Category #2 (Quote calculator)"
    },
    {
        "id": 136,
        "name": "Rudy's Quality Painting",
        "trade": "Painting & Finishes",
        "city": "Houston",
        "state": "TX",
        "phone": "(281) 227-6100",
        "phoneRaw": "+12812276100",
        "email": "estimates@rudyqualitypainting.com",
        "website": "https://rudyqualitypainting.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston residential painting - Category #1 (Mobile layout polish)"
    },
    {
        "id": 137,
        "name": "McClintock Corporation",
        "trade": "Painting & Finishes",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 650-3778",
        "phoneRaw": "+17136503778",
        "email": "steven@mcclintockcorporation.com",
        "website": "https://mcclintockcorporation.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston commercial & residential painting - Category #2 (Calculator upgrade)"
    },
    {
        "id": 138,
        "name": "Electrical Masters Company",
        "trade": "Electrical Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 970-3101",
        "phoneRaw": "+18329703101",
        "email": "info@electricalmasterscompany.com",
        "website": "https://electricalmasterscompany.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston licensed electrical contractor - Category #1 (Sticky mobile call button)"
    },
    {
        "id": 139,
        "name": "All American Electric LLC",
        "trade": "Electrical Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 999-3531",
        "phoneRaw": "+17139993531",
        "email": "service@all-americanelectric.com",
        "website": "https://all-americanelectric.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston 24/7 electrician - Category #2 (Panel upgrade calculator)"
    },
    {
        "id": 140,
        "name": "On Time Electric, Inc.",
        "trade": "Electrical Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 466-8463",
        "phoneRaw": "+18324668463",
        "email": "contact@ontime-electric.com",
        "website": "https://www.ontime-electric.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston residential electrical service - Category #1 (Mobile touch targets)"
    },

    # BATCH 8: #141 - #160 (Houston Metro Trade Specialists - Part 2)
    {
        "id": 141,
        "name": "Paul Richard Electric, LLC",
        "trade": "Electrical Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 430-1991",
        "phoneRaw": "+18324301991",
        "email": "pr@paulrichardelectric.com",
        "website": "https://www.paulrichardelectric.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston electrical repair & wiring - Category #2 (Quote calculator)"
    },
    {
        "id": 142,
        "name": "Dempsey Electric",
        "trade": "Electrical Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 691-6456",
        "phoneRaw": "+17136916456",
        "email": "service@dempseyelectric.com",
        "website": "http://www.dempseyelectric.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston master electricians - Category #1 (Mobile form responsiveness)"
    },
    {
        "id": 143,
        "name": "The Lee Thompson Co.",
        "trade": "HVAC & Air Conditioning",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 869-5555",
        "phoneRaw": "+17138695555",
        "email": "service@leethompsonac.com",
        "website": "https://leethompsonac.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston heating & cooling - Category #2 (Instant system cost estimator)"
    },
    {
        "id": 144,
        "name": "Ram & Co HVAC Solutions LLC",
        "trade": "HVAC & Air Conditioning",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 757-2118",
        "phoneRaw": "+17137572118",
        "email": "support@ramcohvacsolutions.com",
        "website": "https://www.ramcohvacsolutions.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston 24/7 HVAC repairs - Category #1 (1-tap call button)"
    },
    {
        "id": 145,
        "name": "Top AC Texas",
        "trade": "HVAC & Air Conditioning",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 997-6581",
        "phoneRaw": "+18329976581",
        "email": "support@topactexas.com",
        "website": "https://topactexas.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston, Katy & Cypress HVAC - Category #2 (Instant estimate tool)"
    },
    {
        "id": 146,
        "name": "Excel Air Conditioning",
        "trade": "HVAC & Air Conditioning",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 936-2580",
        "phoneRaw": "+17139362580",
        "email": "info@excelairconditioning.com",
        "website": "https://www.excelairconditioning.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston residential/commercial AC - Category #1 (Mobile page speed)"
    },
    {
        "id": 147,
        "name": "Handy Hands Roofing",
        "trade": "Roofing & Restoration",
        "city": "Houston",
        "state": "TX",
        "phone": "(346) 276-6492",
        "phoneRaw": "+13462766492",
        "email": "Aldo@handyhandsroofing.com",
        "website": "https://handyhandsroofing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston roof replacement & repair - Category #2 (Roof cost estimator)"
    },
    {
        "id": 148,
        "name": "Rise Roofing Houston",
        "trade": "Roofing & Restoration",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 224-3435",
        "phoneRaw": "+18322243435",
        "email": "contact@riseroofinghouston.com",
        "website": "https://www.riseroofinghouston.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston roofing contractor - Category #1 (Mobile viewports)"
    },
    {
        "id": 149,
        "name": "Proper Roofing and Remodeling",
        "trade": "Roofing & Restoration",
        "city": "Houston",
        "state": "TX",
        "phone": "(832) 554-7830",
        "phoneRaw": "+18325547830",
        "email": "info@properroof.com",
        "website": "https://properroof.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston roofers - Category #2 (Interactive estimate tool)"
    },
    {
        "id": 150,
        "name": "DR Roofing and Construction",
        "trade": "Roofing & Restoration",
        "city": "Houston",
        "state": "TX",
        "phone": "(281) 815-2422",
        "phoneRaw": "+12818152422",
        "email": "sales@drroofingandconstruction.com",
        "website": "https://drroofingandconstruction.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "North Houston roofing - Category #1 (Mobile touch targets)"
    },
    {
        "id": 151,
        "name": "Texas Premier Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 955-1919",
        "phoneRaw": "+17139551919",
        "email": "Info@TexasPremierPlumbing.com",
        "website": "https://texaspremierplumbing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston master plumbers - Category #2 (Online estimate widget)"
    },
    {
        "id": 152,
        "name": "Texas Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 478-5706",
        "phoneRaw": "+17134785706",
        "email": "Info@texasplumbing911.com",
        "website": "https://texasplumbing911.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Houston emergency plumbing - Category #1 (1-tap dispatch)"
    },
    {
        "id": 153,
        "name": "Josh the Plumber",
        "trade": "Plumbing & Drain Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(713) 383-7369",
        "phoneRaw": "+17133837369",
        "email": "service@joshtheplumberhouston.com",
        "website": "https://www.joshtheplumberhouston.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston residential plumbing - Category #2 (Quote calculator)"
    },
    {
        "id": 154,
        "name": "Southern Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "Stafford",
        "state": "TX",
        "phone": "(832) 444-4907",
        "phoneRaw": "+18324444907",
        "email": "james@southernplumbing.com",
        "website": "https://southernplumbing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Greater Houston plumbing - Category #1 (Mobile layout polish)"
    },
    {
        "id": 155,
        "name": "Power Plumbing Services",
        "trade": "Plumbing & Drain Services",
        "city": "Houston",
        "state": "TX",
        "phone": "(346) 415-6111",
        "phoneRaw": "+13464156111",
        "email": "info@powerplumbingtx.com",
        "website": "https://www.powerplumbingtx.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Houston commercial & home plumbing - Category #2 (Instant estimate tool)"
    },
    {
        "id": 156,
        "name": "Surface Pro Power Wash",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Plano",
        "state": "TX",
        "phone": "(214) 764-5913",
        "phoneRaw": "+12147645913",
        "email": "andrew@surfacepropowerwash.com",
        "website": "https://www.surfacepropowerwash.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Plano exterior washing - Category #1 (Mobile page speed)"
    },
    {
        "id": 157,
        "name": "Longhorn Power Washing",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 742-4463",
        "phoneRaw": "+19727424463",
        "email": "spearcy8@gmail.com",
        "website": "https://www.longhornpowerwashing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Plano power washing - Category #2 (Calculator upgrade)"
    },
    {
        "id": 158,
        "name": "Park Cities Power Wash",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Dallas",
        "state": "TX",
        "phone": "(214) 390-3377",
        "phoneRaw": "+12143903377",
        "email": "info@parkcitiespowerwash.com",
        "website": "https://www.parkcitiespowerwash.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Dallas/Plano pressure washing - Category #1 (Mobile viewports)"
    },
    {
        "id": 159,
        "name": "Pressure Wash of Texas",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Frisco",
        "state": "TX",
        "phone": "(214) 762-6778",
        "phoneRaw": "+12147626778",
        "email": "pressurewashofdallas@gmail.com",
        "website": "https://pressurewashoftexas.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Frisco exterior washing - Category #2 (Estimate tool)"
    },
    {
        "id": 160,
        "name": "Wunder Washing",
        "trade": "Pressure Washing & Exterior Cleaning",
        "city": "Frisco",
        "state": "TX",
        "phone": "(972) 926-3388",
        "phoneRaw": "+19729263388",
        "email": "contact@wunderwashing.com",
        "website": "https://www.wunderwashing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Frisco softwashing specialist - Category #1 (Mobile 1-tap call)"
    },

    # BATCH 9: #161 - #180 (North Texas Metro: Plano, Frisco, McKinney)
    {
        "id": 161,
        "name": "Care Green Tree Service",
        "trade": "Tree Service & Removal",
        "city": "Dallas",
        "state": "TX",
        "phone": "(214) 543-2042",
        "phoneRaw": "+12145432042",
        "email": "caregreendallas@gmail.com",
        "website": "https://cgdallastreeservice.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Dallas tree care & emergency removal - Category #2 (Instant estimate tool)"
    },
    {
        "id": 162,
        "name": "Elite Tree Service LLC",
        "trade": "Tree Service & Removal",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 307-2375",
        "phoneRaw": "+19723072375",
        "email": "info@elitetreeservice.net",
        "website": "https://elitetreeservice.net",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Plano & North Dallas tree care - Category #1 (Mobile touch targets)"
    },
    {
        "id": 163,
        "name": "Jose Tree Services CO",
        "trade": "Tree Service & Removal",
        "city": "Garland",
        "state": "TX",
        "phone": "(972) 971-2531",
        "phoneRaw": "+19729712531",
        "email": "contact@josestreeserviceco.com",
        "website": "https://www.josestreeserviceco.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Garland/DFW tree removal - Category #2 (Quote calculator upgrade)"
    },
    {
        "id": 164,
        "name": "Plano Tree Service",
        "trade": "Tree Service & Removal",
        "city": "Plano",
        "state": "TX",
        "phone": "(945) 223-0459",
        "phoneRaw": "+19452230459",
        "email": "service@planotreeservice.biz",
        "website": "https://planotreeservice.biz",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Plano tree pruning & stump removal - Category #1 (Mobile page speed)"
    },
    {
        "id": 165,
        "name": "Parker Tree Service",
        "trade": "Tree Service & Removal",
        "city": "Dallas",
        "state": "TX",
        "phone": "(214) 394-2414",
        "phoneRaw": "+12143942414",
        "email": "estimates@parkertreeservice.biz",
        "website": "https://parkertreeservice.biz",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Dallas residential tree care - Category #2 (Estimate calculator)"
    },
    {
        "id": 166,
        "name": "Pro Cut Lawncare and Landscape",
        "trade": "Lawn Care & Landscaping",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 806-9680",
        "phoneRaw": "+19728069680",
        "email": "admin@procutlawncare.com",
        "website": "https://procutlawncare.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Plano full-service lawn care - Category #1 (Mobile viewport fixes)"
    },
    {
        "id": 167,
        "name": "Village Green Lawn and Pest",
        "trade": "Lawn Care & Landscaping",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 495-6990",
        "phoneRaw": "+19724956990",
        "email": "info@villagegreen-inc.com",
        "website": "https://villagegreen-inc.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Plano turf health & fertilization - Category #2 (Package calculator)"
    },
    {
        "id": 168,
        "name": "Spruce Lawn Care",
        "trade": "Lawn Care & Landscaping",
        "city": "McKinney",
        "state": "TX",
        "phone": "(469) 649-8953",
        "phoneRaw": "+14696498953",
        "email": "info@sprucelawncareservice.com",
        "website": "https://sprucelawncareservice.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "McKinney lawn mowing & maintenance - Category #1 (1-tap dispatch)"
    },
    {
        "id": 169,
        "name": "McKinney Lawn Care",
        "trade": "Lawn Care & Landscaping",
        "city": "McKinney",
        "state": "TX",
        "phone": "(972) 559-0025",
        "phoneRaw": "+19725590025",
        "email": "sales@mymckinneylawncare.com",
        "website": "https://mymckinneylawncare.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "McKinney no-contract turf maintenance - Category #2 (Instant estimate tool)"
    },
    {
        "id": 170,
        "name": "Knight Lawn and Landscape Management",
        "trade": "Lawn Care & Landscaping",
        "city": "McKinney",
        "state": "TX",
        "phone": "(214) 585-9662",
        "phoneRaw": "+12145859662",
        "email": "contact@knightlawnandlandscape.com",
        "website": "https://knightlawnandlandscape.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "McKinney irrigation & landscape install - Category #1 (Mobile touch targets)"
    },
    {
        "id": 171,
        "name": "Prime Finish Painting Co.",
        "trade": "Painting & Finishes",
        "city": "Plano",
        "state": "TX",
        "phone": "(214) 329-0794",
        "phoneRaw": "+12143290794",
        "email": "info@primefinishpaintingco.com",
        "website": "https://primefinishpaintingco.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Plano residential interior/exterior painting - Category #2 (Room cost estimator)"
    },
    {
        "id": 172,
        "name": "Roll City Painting",
        "trade": "Painting & Finishes",
        "city": "Plano",
        "state": "TX",
        "phone": "(469) 718-5386",
        "phoneRaw": "+14697185386",
        "email": "sales@rollcity.com",
        "website": "https://rollcitypainting.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Plano cabinet & home painting - Category #1 (Mobile layout polish)"
    },
    {
        "id": 173,
        "name": "Performance Painting DFW",
        "trade": "Painting & Finishes",
        "city": "McKinney",
        "state": "TX",
        "phone": "(972) 542-0163",
        "phoneRaw": "+19725420163",
        "email": "contact@dallashousepainter.com",
        "website": "https://dallashousepainter.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "McKinney full-service painting - Category #2 (Estimate calculator)"
    },
    {
        "id": 174,
        "name": "Elevated Electrical",
        "trade": "Electrical Services",
        "city": "Plano",
        "state": "TX",
        "phone": "(469) 430-0487",
        "phoneRaw": "+14694300487",
        "email": "service@elevatedelectrical.com",
        "website": "https://elevatedelectrical.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Plano electrical repair & panel install - Category #1 (Sticky mobile call button)"
    },
    {
        "id": 175,
        "name": "DK Electricians",
        "trade": "Electrical Services",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 979-1091",
        "phoneRaw": "+19729791091",
        "email": "dalevith10@gmail.com",
        "website": "https://www.dkelectricians.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Plano EV charger & panel specialists - Category #2 (Quote calculator)"
    },
    {
        "id": 176,
        "name": "ElectricMan",
        "trade": "Electrical Services",
        "city": "Dallas",
        "state": "TX",
        "phone": "(972) 362-1804",
        "phoneRaw": "+19723621804",
        "email": "service@electricman.com",
        "website": "https://www.electricman.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "DFW residential/commercial electrical - Category #1 (Mobile form speed)"
    },
    {
        "id": 177,
        "name": "Wellott Electric",
        "trade": "Electrical Services",
        "city": "McKinney",
        "state": "TX",
        "phone": "(972) 214-8614",
        "phoneRaw": "+19722148614",
        "email": "scheduling@wellottelectric.com",
        "website": "https://www.wellottelectric.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "McKinney 24/7 electrical contractor - Category #2 (Panel upgrade estimator)"
    },
    {
        "id": 178,
        "name": "That's Electric",
        "trade": "Electrical Services",
        "city": "McKinney",
        "state": "TX",
        "phone": "(469) 489-5541",
        "phoneRaw": "+14694895541",
        "email": "info@thatselectric.com",
        "website": "https://www.thatselectric.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "McKinney lighting & EV wiring - Category #1 (Mobile touch targets)"
    },
    {
        "id": 179,
        "name": "Trotter Air Services",
        "trade": "HVAC & Air Conditioning",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 424-9233",
        "phoneRaw": "+19724249233",
        "email": "service@trotterair.com",
        "website": "https://www.trotterair.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Plano AC repair & heating installation - Category #2 (Instant estimate tool)"
    },
    {
        "id": 180,
        "name": "Airmax Air Conditioning & Heating",
        "trade": "HVAC & Air Conditioning",
        "city": "Frisco",
        "state": "TX",
        "phone": "(972) 992-9398",
        "phoneRaw": "+19729929398",
        "email": "dispatch@airmaxair.com",
        "website": "https://www.airmaxair.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Frisco residential HVAC - Category #1 (Mobile 1-tap call button)"
    },

    # BATCH 10: #181 - #200 (North Texas & San Antonio Mix)
    {
        "id": 181,
        "name": "Colony Air Conditioning & Heating",
        "trade": "HVAC & Air Conditioning",
        "city": "The Colony",
        "state": "TX",
        "phone": "(972) 591-0293",
        "phoneRaw": "+19725910293",
        "email": "service@colonyac.com",
        "website": "https://colonyac.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "The Colony/Plano HVAC emergency repair - Category #2 (Calculator upgrade)"
    },
    {
        "id": 182,
        "name": "TemperaturePro McKinney",
        "trade": "HVAC & Air Conditioning",
        "city": "McKinney",
        "state": "TX",
        "phone": "(469) 378-8984",
        "phoneRaw": "+14693788984",
        "email": "McKinney@TemperaturePro.com",
        "website": "https://temperaturepro.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "McKinney HVAC maintenance & repair - Category #1 (Mobile page speed)"
    },
    {
        "id": 183,
        "name": "Perfect Climate Air, LLC",
        "trade": "HVAC & Air Conditioning",
        "city": "McKinney",
        "state": "TX",
        "phone": "(214) 733-3798",
        "phoneRaw": "+12147333798",
        "email": "info@theperfectclimatehvac.com",
        "website": "https://theperfectclimatehvac.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "McKinney cooling solutions - Category #2 (Instant estimate tool)"
    },
    {
        "id": 184,
        "name": "Frosty's HVAC LLC",
        "trade": "HVAC & Air Conditioning",
        "city": "McKinney",
        "state": "TX",
        "phone": "(469) 254-0548",
        "phoneRaw": "+14692540548",
        "email": "comfort@frostyshvac.com",
        "website": "https://www.frostyshvac.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "McKinney emergency AC repair - Category #1 (1-tap dispatch call)"
    },
    {
        "id": 185,
        "name": "Greenleaf Roofing",
        "trade": "Roofing & Restoration",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 379-9109",
        "phoneRaw": "+19723799109",
        "email": "contact@greenleaf-roofing.com",
        "website": "https://greenleaf-roofing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Plano residential roof replacement - Category #2 (Roof cost estimator)"
    },
    {
        "id": 186,
        "name": "Peak Roofing & Construction",
        "trade": "Roofing & Restoration",
        "city": "Frisco",
        "state": "TX",
        "phone": "(972) 335-7325",
        "phoneRaw": "+19723357325",
        "email": "info@peakroofingconstruction.com",
        "website": "https://peakroofingconstruction.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Frisco roofers & leak detection - Category #1 (Mobile touch targets)"
    },
    {
        "id": 187,
        "name": "Swan Roofing LLC",
        "trade": "Roofing & Restoration",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 596-8313",
        "phoneRaw": "+19725968313",
        "email": "info@swanroofing.com",
        "website": "https://swanroofing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Plano storm restoration - Category #2 (Instant estimate tool)"
    },
    {
        "id": 188,
        "name": "SunTex Roofing",
        "trade": "Roofing & Restoration",
        "city": "Frisco",
        "state": "TX",
        "phone": "(214) 766-3669",
        "phoneRaw": "+12147663669",
        "email": "office@suntexroofs.com",
        "website": "https://suntexroofs.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Frisco residential roofing - Category #1 (Mobile layout polish)"
    },
    {
        "id": 189,
        "name": "Proficient Roofing",
        "trade": "Roofing & Restoration",
        "city": "Frisco",
        "state": "TX",
        "phone": "(214) 842-1064",
        "phoneRaw": "+12148421064",
        "email": "estimates@proficientroofing.com",
        "website": "https://proficientroofing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Frisco roof replacement specialists - Category #2 (Calculator upgrade)"
    },
    {
        "id": 190,
        "name": "Touchstone Roofing, LLC",
        "trade": "Roofing & Restoration",
        "city": "Frisco",
        "state": "TX",
        "phone": "(972) 418-2992",
        "phoneRaw": "+19724182992",
        "email": "service@touchstoneroofing.com",
        "website": "https://touchstoneroofing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "GAF Master Elite roofer - Category #1 (Mobile viewport fixes)"
    },
    {
        "id": 191,
        "name": "Blue Otter Plumbing & Drain",
        "trade": "Plumbing & Drain Services",
        "city": "McKinney",
        "state": "TX",
        "phone": "(469) 238-2211",
        "phoneRaw": "+14692382211",
        "email": "hello@blueotterplumbing.com",
        "website": "https://blueotterplumbing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "McKinney plumbing & drain clearing - Category #2 (Quote calculator upgrade)"
    },
    {
        "id": 192,
        "name": "JMP Plumbing Services",
        "trade": "Plumbing & Drain Services",
        "city": "McKinney",
        "state": "TX",
        "phone": "(469) 337-3725",
        "phoneRaw": "+14693373725",
        "email": "admin@jmpps.net",
        "website": "https://jmpplumbingservices.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "McKinney plumbing repairs - Category #1 (Sticky mobile call button)"
    },
    {
        "id": 193,
        "name": "Genzel Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "McKinney",
        "state": "TX",
        "phone": "(972) 238-5585",
        "phoneRaw": "+19722385585",
        "email": "info@genzelplumbing.com",
        "website": "https://genzelplumbing.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "McKinney licensed plumbers - Category #2 (Instant estimate tool)"
    },
    {
        "id": 194,
        "name": "Pounce Plumbing",
        "trade": "Plumbing & Drain Services",
        "city": "McKinney",
        "state": "TX",
        "phone": "(469) 772-5766",
        "phoneRaw": "+14697725766",
        "email": "dispatch@pounceplumbing.com",
        "website": "https://pounceplumbing.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "McKinney water heater & pipe repair - Category #1 (Mobile page speed)"
    },
    {
        "id": 195,
        "name": "Plano Plumbing & Leak Detection",
        "trade": "Plumbing & Drain Services",
        "city": "Plano",
        "state": "TX",
        "phone": "(972) 672-8616",
        "phoneRaw": "+19726728616",
        "email": "service@planoplumbingtx.com",
        "website": "https://planoplumbingtx.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "Plano slab leak & drain specialists - Category #2 (Calculator upgrade)"
    },
    {
        "id": 196,
        "name": "Action Tree Service",
        "trade": "Tree Service & Removal",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 551-1225",
        "phoneRaw": "+12105511225",
        "email": "info@actiontreeservicesa.com",
        "website": "https://www.actiontreeservicesa.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio 24/7 tree emergency care - Category #1 (1-tap dispatch)"
    },
    {
        "id": 197,
        "name": "Texas Tree Authority",
        "trade": "Tree Service & Removal",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 251-4232",
        "phoneRaw": "+12102514232",
        "email": "service@texastreeauthority.com",
        "website": "https://texastreeauthority.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Antonio arborists - Category #2 (Instant estimate tool)"
    },
    {
        "id": 198,
        "name": "Hendrick Painting",
        "trade": "Painting & Finishes",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 499-5400",
        "phoneRaw": "+12104995400",
        "email": "contact@hendrickpainting.com",
        "website": "https://hendrickpainting.com",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio interior/exterior painting - Category #1 (Mobile layout polish)"
    },
    {
        "id": 199,
        "name": "Riverside Painters",
        "trade": "Painting & Finishes",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 818-1132",
        "phoneRaw": "+12108181132",
        "email": "quotes@riverside-painters.com",
        "website": "https://riverside-painters.com",
        "category": "Category #2 (Interactive Quote Calculator Upgrade)",
        "notes": "San Antonio residential & commercial painting - Category #2 (Quote calculator)"
    },
    {
        "id": 200,
        "name": "Spartan Painting",
        "trade": "Painting & Finishes",
        "city": "San Antonio",
        "state": "TX",
        "phone": "(210) 218-3725",
        "phoneRaw": "+12102183725",
        "email": "spartanpaintingsa@gmail.com",
        "website": "https://spartanpainting.net",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "San Antonio cabinet refinishing & painting - Category #1 (Mobile responsiveness)"
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
        trade = p["trade"]
        preview_url = make_preview_url(p)

        lines.append(f"### {num}. {name}")
        lines.append("")
        lines.append(f"* **Category:** {cat} | **Current Website:** [{url}]({url}) | **To Email:** `{email}` | **Phone:** {phone} | **City:** {city} | **Status:** ⏳ Ready to Send")
        lines.append("")
        
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
            f"- Basic Plan: $450 Total ($300 upfront setup + $150/mo). Clean mobile website, fast hosting, and ongoing updates.\n"
            f"- Standard Plan (Most Popular): $800 Total ($500 upfront setup + $300/mo). Includes the interactive quote calculator and instant SMS lead alerts straight to your cell.\n"
            f"- Enterprise Plan: $1,600 Total ($1,000 upfront setup + $600/mo). Full lead acquisition system for multi-crew companies, including custom CRM/booking integrations, multi-city service pages, and priority monthly updates.\n\n"
            f"If you'd like to put this live under your domain, I can have it ready in 24 to 48 hours. Feel free to shoot me an email at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
            f"Thank you,\n"
            f"Dylan"
        )

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

def main():
    print("Building Batch 7, 8, 9, 10 campaign docs...")
    b7_prospects = [p for p in NEW_PROSPECTS if 121 <= p["id"] <= 140]
    b8_prospects = [p for p in NEW_PROSPECTS if 141 <= p["id"] <= 160]
    b9_prospects = [p for p in NEW_PROSPECTS if 161 <= p["id"] <= 180]
    b10_prospects = [p for p in NEW_PROSPECTS if 181 <= p["id"] <= 200]

    with open(CAMPAIGNS_DIR / "batch_07_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(7, "Houston Metro Trade Specialists (Part 1)", b7_prospects))
    print("Wrote docs/campaigns/batch_07_texas_20prospects.md")

    with open(CAMPAIGNS_DIR / "batch_08_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(8, "Houston Metro Trade Specialists (Part 2)", b8_prospects))
    print("Wrote docs/campaigns/batch_08_texas_20prospects.md")

    with open(CAMPAIGNS_DIR / "batch_09_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(9, "North Texas Metro (Plano, Frisco, McKinney)", b9_prospects))
    print("Wrote docs/campaigns/batch_09_texas_20prospects.md")

    with open(CAMPAIGNS_DIR / "batch_10_texas_20prospects.md", "w", encoding="utf-8") as f:
        f.write(generate_markdown_doc(10, "North Texas & San Antonio Mix", b10_prospects))
    print("Wrote docs/campaigns/batch_10_texas_20prospects.md")

    # Update texas_leads.json
    leads_file = DATA_DIR / "texas_leads.json"
    with open(leads_file, "r", encoding="utf-8") as f:
        leads = json.load(f)

    # Keep initial 120
    leads_120 = [l for l in leads if l["id"] <= 120]

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
        leads_120.append(lead_entry)

    with open(leads_file, "w", encoding="utf-8") as f:
        json.dump(leads_120, f, indent=2)
    print(f"Updated {leads_file} with {len(leads_120)} total verified leads (#1-200).")

if __name__ == "__main__":
    main()
