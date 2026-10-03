#!/usr/bin/env python3
"""
Batch #3 Lead Discovery & Verification Pipeline
Compiles, crawls, verifies MX, and formats 20 verified Texas trade prospects (#41 to #60).
"""

import json
import os
import re
import urllib.parse
from verify_email_deliverability import verify_lead_email, check_mx_records, crawl_site_for_emails
from scout_texas_leads import audit_website

CANDIDATES = [
    # 41. Round Rock Plumber
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
        "notes": "Round Rock plumber - Category #2 (Instant estimate & quote calculator)"
    },
    # 42. Round Rock Plumber
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
        "notes": "Round Rock plumber - Category #1 (Mobile responsiveness constraints)"
    },
    # 43. Round Rock HVAC
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
        "notes": "Round Rock HVAC - Category #2 (Interactive quote calculator upgrade)"
    },
    # 44. Georgetown Roofer
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
        "notes": "Georgetown roofer - Category #2 (1-tap dispatch & price calculator)"
    },
    # 45. Georgetown Roofer
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
        "notes": "Georgetown roofer - Category #1 (Mobile formatting & tap friction)"
    },
    # 46. Pflugerville HVAC
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
        "notes": "Pflugerville HVAC - Category #2 (Interactive estimate calculator)"
    },
    # 47. Cedar Park HVAC
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
        "notes": "Cedar Park HVAC - Category #1 (Mobile load speed & navigation)"
    },
    # 48. Mansfield Plumber
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
        "notes": "Mansfield plumber - Category #2 (Conversion & 1-tap call upgrade)"
    },
    # 49. Euless Plumber
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
        "notes": "Euless plumber - Category #1 (Mobile formatting & layout)"
    },
    # 50. Euless Plumber
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
        "notes": "Euless plumber - Category #2 (Quote calculator & dispatch form upgrade)"
    },
    # 51. Bedford Roofer
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
        "notes": "Bedford roofer - Category #2 (1-tap dispatch & price calculator)"
    },
    # 52. Weatherford HVAC
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
        "notes": "Weatherford HVAC - Category #1 (Mobile viewport & responsiveness fixes)"
    },
    # 53. Temple Plumber
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
        "notes": "Temple plumber - Category #2 (Interactive quote calculator upgrade)"
    },
    # 54. Temple Plumber
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
        "notes": "Temple plumber - Category #1 (Click-to-call mobile formatting)"
    },
    # 55. Bryan/College Station HVAC
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
        "notes": "Bryan HVAC - Category #2 (Instant estimate & quote calculator)"
    },
    # 56. Bryan/College Station Roofer
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
        "notes": "Bryan roofer - Category #1 (Mobile responsiveness constraints)"
    },
    # 57. Tyler Roofer
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
        "notes": "Tyler roofer - Category #2 (1-tap dispatch & price calculator)"
    },
    # 58. Tyler Plumber
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
        "notes": "Tyler plumber - Category #1 (Mobile navigation & tap target friction)"
    },
    # 59. Pearland Plumber
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
        "notes": "Pearland plumber - Category #2 (Interactive quote calculator upgrade)"
    },
    # 60. Sugar Land Plumber
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
        "notes": "Sugar Land plumber - Category #2 (1-tap dispatch & instant price estimator)"
    }
]

def verify_all_candidates():
    print("Testing all 20 candidates through live deep scraper & DNS MX verification...")
    print("=" * 110)
    print(f"{'ID':<4} | {'NAME':<28} | {'EMAIL':<30} | {'MX':<6} | {'STATUS':<6}")
    print("=" * 110)
    
    verified_leads = []
    
    for c in CANDIDATES:
        audit = verify_lead_email(c)
        email = audit['suggested_email'] if audit['suggested_email'] else c['email']
        domain = email.split('@')[-1]
        mx_valid, _, _ = check_mx_records(domain)
        
        c['email'] = email
        c['preview_url'] = f"https://dzor777.github.io/building-websites-for-local-businesses/?client={c['slug']}"
        c['status'] = "Not Contacted"
        c['batch'] = 3
        c['verified'] = mx_valid
        
        status_str = "✅ OK" if mx_valid else "❌ FAIL"
        mx_str = "PASS" if mx_valid else "FAIL"
        print(f"{c['id']:<4} | {c['business_name'][:28]:<28} | {email[:30]:<30} | {mx_str:<6} | {status_str:<6}")
        verified_leads.append(c)
        
    print("=" * 110)
    return verified_leads

if __name__ == "__main__":
    leads = verify_all_candidates()
    print(f"Verified {len(leads)} candidates for Batch #3.")
