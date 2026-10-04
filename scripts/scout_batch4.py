import sys
import os
import re
import json
import urllib.request
import urllib.parse
import ssl
from pathlib import Path

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
LEADS_FILE = WORKSPACE_ROOT / "docs" / "data" / "texas_leads.json"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

def check_mx(email):
    if not email or '@' not in email:
        return False
    domain = email.split('@')[-1].strip().lower()
    try:
        url = f"https://dns.google/resolve?name={domain}&type=MX"
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=4) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if data.get("Status") == 0 and "Answer" in data:
                return True
    except Exception:
        pass
    return False

# Candidates list curated from North Texas contractors across target cities and trades
PROSPECT_CANDIDATES = [
    # 61. Frisco Plumbing
    {
        "id": 61,
        "business_name": "DNA Plumbing",
        "niche": "Plumbing & Drain Services",
        "city": "Frisco, TX",
        "phone": "(214) 225-8777",
        "phoneRaw": "+12142258777",
        "email": "info@dnaplumbing.com",
        "url": "https://dnaplumbing.com",
        "slug": "dna-plumbing-frisco",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Frisco plumber - Category #2 (Interactive quote calculator upgrade)"
    },
    # 62. Plano Electrician
    {
        "id": 62,
        "business_name": "D&N Electric Co.",
        "niche": "Electrical Services",
        "city": "Plano, TX",
        "phone": "(972) 424-6997",
        "phoneRaw": "+19724246997",
        "email": "service@dnelectric.com",
        "url": "https://dnelectric.com",
        "slug": "dn-electric-plano",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Plano electrician - Category #1 (Mobile formatting & click-to-call)"
    },
    # 63. McKinney HVAC
    {
        "id": 63,
        "business_name": "Harris Air Services",
        "niche": "HVAC & Air Conditioning",
        "city": "McKinney, TX",
        "phone": "(469) 325-1934",
        "phoneRaw": "+14693251934",
        "email": "office@harrisairservices.com",
        "url": "https://harrisairservices.com",
        "slug": "harris-air-services-mckinney",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "McKinney HVAC - Category #2 (Instant quote estimator & dispatch forms)"
    },
    # 64. Allen Roofing
    {
        "id": 64,
        "business_name": "Northeast Texas Roofing",
        "niche": "Roofing & Restoration",
        "city": "Allen, TX",
        "phone": "(972) 727-8975",
        "phoneRaw": "+19727278975",
        "email": "netexasroofing@gmail.com",
        "url": "https://netexasroofing.com",
        "slug": "northeast-texas-roofing-allen",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Allen roofer - Category #1 (Mobile responsiveness constraints)"
    },
    # 65. Denton Plumber
    {
        "id": 65,
        "business_name": "C&W Plumbing",
        "niche": "Plumbing & Drain Services",
        "city": "Denton, TX",
        "phone": "(972) 395-2597",
        "phoneRaw": "+19723952597",
        "email": "info@candwplumbing.com",
        "url": "https://candwplumbing.com",
        "slug": "cw-plumbing-denton",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Denton plumber - Category #2 (Instant price calculator & 1-tap dispatch)"
    },
    # 66. Lewisville HVAC
    {
        "id": 66,
        "business_name": "Cold Factor Heating & Air",
        "niche": "HVAC & Air Conditioning",
        "city": "Lewisville, TX",
        "phone": "(214) 717-8878",
        "phoneRaw": "+12147178878",
        "email": "service@coldfactor.com",
        "url": "https://coldfactor.com",
        "slug": "cold-factor-lewisville",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Lewisville HVAC - Category #1 (Mobile touch targets & layout)"
    },
    # 67. Carrollton Electrician
    {
        "id": 67,
        "business_name": "Arrow Electric Inc.",
        "niche": "Electrical Services",
        "city": "Carrollton, TX",
        "phone": "(214) 778-1569",
        "phoneRaw": "+12147781569",
        "email": "service@arrowelectric.net",
        "url": "https://arrowelectric.net",
        "slug": "arrow-electric-carrollton",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Carrollton electrician - Category #2 (Interactive panel & rewiring calculator)"
    },
    # 68. Frisco Roofing
    {
        "id": 68,
        "business_name": "Rowley Roofing & Construction",
        "niche": "Roofing & Restoration",
        "city": "Frisco, TX",
        "phone": "(972) 668-0919",
        "phoneRaw": "+19726680919",
        "email": "info@rowleyroofing.com",
        "url": "https://rowleyroofing.com",
        "slug": "rowley-roofing-frisco",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Frisco roofer - Category #2 (Storm damage estimate calculator)"
    },
    # 69. McKinney Plumber
    {
        "id": 69,
        "business_name": "O'Bryan Plumbing Services",
        "niche": "Plumbing & Drain Services",
        "city": "McKinney, TX",
        "phone": "(972) 727-6364",
        "phoneRaw": "+19727276364",
        "email": "info@obryanplumbing.com",
        "url": "https://obryanplumbing.com",
        "slug": "obryan-plumbing-mckinney",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "McKinney plumber - Category #1 (Mobile formatting & tap targets)"
    },
    # 70. Plano HVAC
    {
        "id": 70,
        "business_name": "Total Air & Heat",
        "niche": "HVAC & Air Conditioning",
        "city": "Plano, TX",
        "phone": "(972) 881-0020",
        "phoneRaw": "+19728810020",
        "email": "info@totalair.com",
        "url": "https://totalair.com",
        "slug": "total-air-heat-plano",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Plano HVAC - Category #2 (High-efficiency replacement calculator)"
    },
    # 71. Denton Roofing
    {
        "id": 71,
        "business_name": "Anderson Roofing & Construction",
        "niche": "Roofing & Restoration",
        "city": "Denton, TX",
        "phone": "(940) 279-0520",
        "phoneRaw": "+19402790520",
        "email": "info@andersonroofingtx.com",
        "url": "https://andersonroofingtx.com",
        "slug": "anderson-roofing-denton",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Denton roofer - Category #1 (Mobile load speed & navigation)"
    },
    # 72. Allen Electrician
    {
        "id": 72,
        "business_name": "Adair Electric LLC",
        "niche": "Electrical Services",
        "city": "Allen, TX",
        "phone": "(972) 424-6479",
        "phoneRaw": "+19724246479",
        "email": "office@adairelectric.com",
        "url": "https://adairelectric.com",
        "slug": "adair-electric-allen",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Allen electrician - Category #2 (Interactive electrical estimate tool)"
    },
    # 73. Richardson Plumbing
    {
        "id": 73,
        "business_name": "Harvey West Plumbing",
        "niche": "Plumbing & Drain Services",
        "city": "Richardson, TX",
        "phone": "(972) 509-0224",
        "phoneRaw": "+19725090224",
        "email": "service@harveywestplumbing.com",
        "url": "https://harveywestplumbing.com",
        "slug": "harvey-west-plumbing-richardson",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Richardson plumber - Category #1 (Mobile layout & tap friction)"
    },
    # 74. Garland HVAC
    {
        "id": 74,
        "business_name": "Classic Heating & Air",
        "niche": "HVAC & Air Conditioning",
        "city": "Garland, TX",
        "phone": "(214) 310-2665",
        "phoneRaw": "+12143102665",
        "email": "info@classicheatandair.com",
        "url": "https://classicheatandair.com",
        "slug": "classic-heating-air-garland",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Garland HVAC - Category #2 (Instant repair calculator & dispatch)"
    },
    # 75. Grapevine Roofing
    {
        "id": 75,
        "business_name": "Old Pro Roofing",
        "niche": "Roofing & Restoration",
        "city": "Grapevine, TX",
        "phone": "(817) 929-7699",
        "phoneRaw": "+18179297699",
        "email": "service@oldproroofing.com",
        "url": "https://oldproroofing.com",
        "slug": "old-pro-roofing-grapevine",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Grapevine roofer - Category #1 (Mobile responsiveness constraints)"
    },
    # 76. Lewisville Plumber
    {
        "id": 76,
        "business_name": "Lewisville Plumbing Co.",
        "niche": "Plumbing & Drain Services",
        "city": "Lewisville, TX",
        "phone": "(972) 221-7595",
        "phoneRaw": "+19722217595",
        "email": "info@lewisvilleplumbing.com",
        "url": "https://lewisvilleplumbing.com",
        "slug": "lewisville-plumbing-co",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Lewisville plumber - Category #2 (Interactive quote calculator upgrade)"
    },
    # 77. Frisco Electrician
    {
        "id": 77,
        "business_name": "Benchmark Electrical Solutions",
        "niche": "Electrical Services",
        "city": "Frisco, TX",
        "phone": "(469) 200-1418",
        "phoneRaw": "+14692001418",
        "email": "info@benchmarkelectrical.com",
        "url": "https://benchmarkelectrical.com",
        "slug": "benchmark-electrical-frisco",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Frisco electrician - Category #1 (Mobile formatting & tap targets)"
    },
    # 78. McKinney Roofing
    {
        "id": 78,
        "business_name": "Heritage Roofing Systems",
        "niche": "Roofing & Restoration",
        "city": "McKinney, TX",
        "phone": "(972) 562-7880",
        "phoneRaw": "+19725627880",
        "email": "contact@heritageroofingtx.com",
        "url": "https://heritageroofingtx.com",
        "slug": "heritage-roofing-mckinney",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "McKinney roofer - Category #2 (1-tap dispatch & price calculator)"
    },
    # 79. Carrollton HVAC
    {
        "id": 79,
        "business_name": "Calverley Heating & Cooling",
        "niche": "HVAC & Air Conditioning",
        "city": "Carrollton, TX",
        "phone": "(817) 380-4000",
        "phoneRaw": "+18173804000",
        "email": "service@calverleyair.com",
        "url": "https://calverleyair.com",
        "slug": "calverley-air-carrollton",
        "category": "Category #1 (Technical & Mobile Fixes)",
        "notes": "Carrollton HVAC - Category #1 (Mobile formatting & tap friction)"
    },
    # 80. Plano Plumber
    {
        "id": 80,
        "business_name": "At Your Service Plumbing",
        "niche": "Plumbing & Drain Services",
        "city": "Plano, TX",
        "phone": "(972) 424-7127",
        "phoneRaw": "+19724247127",
        "email": "service@aysplumbingtx.com",
        "url": "https://aysplumbingtx.com",
        "slug": "at-your-service-plumbing-plano",
        "category": "Category #2 (Conversion & Calculator Upgrade)",
        "notes": "Plano plumber - Category #2 (Instant price estimator & quote calculator)"
    }
]

def verify_candidates():
    print(f"Verifying {len(PROSPECT_CANDIDATES)} candidates for Batch 4 (Leads #61-80)...", flush=True)
    verified_leads = []

    for c in PROSPECT_CANDIDATES:
        c_id = c["id"]
        name = c["business_name"]
        url = c["url"]
        email = c["email"]
        phone = c["phone"]

        print(f"\n[Lead #{c_id}] {name} ({c['city']})")
        print(f"  Target URL: {url}")
        print(f"  Target Email: {email}")

        # 1. Website connectivity check
        web_ok = False
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=8, context=ctx) as resp:
                if resp.status in (200, 301, 302):
                    web_ok = True
                    print(f"  [OK] Website HTTP {resp.status}")
                else:
                    print(f"  [!] HTTP Status {resp.status}")
        except Exception as e:
            print(f"  [!] Web request error: {e}")

        # 2. Email MX verification check
        mx_ok = check_mx(email)
        print(f"  {'[OK] MX Verified' if mx_ok else '[!] MX Failed'} for {email}")

        c["preview_url"] = f"https://dzor777.github.io/building-websites-for-local-businesses/?client={c['slug']}"
        c["status"] = "Not Contacted"
        c["batch"] = 4
        c["verified"] = web_ok and mx_ok
        verified_leads.append(c)

    # Summary
    all_verified = all(l["verified"] for l in verified_leads)
    print(f"\nVerification Complete: {sum(1 for l in verified_leads if l['verified'])}/{len(verified_leads)} fully verified.", flush=True)
    return verified_leads

if __name__ == "__main__":
    verify_candidates()
