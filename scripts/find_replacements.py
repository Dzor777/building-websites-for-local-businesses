import urllib.request
import json
import re
from playwright.sync_api import sync_playwright

prospects = [
    # Electrical candidates
    {'trade': 'Electrical Services', 'name': 'Benchmark Electrical Services', 'city': 'Frisco', 'url': 'https://benchmarkelectricalservices.com', 'domain': 'benchmarkelectricalservices.com', 'cat': 2},
    {'trade': 'Electrical Services', 'name': 'Adon Complete Air Conditioning & Electrical', 'city': 'McKinney', 'url': 'https://adoncomplete.com', 'domain': 'adoncomplete.com', 'cat': 2},
    {'trade': 'Electrical Services', 'name': 'Denton Electric, Inc.', 'city': 'Denton', 'url': 'https://dentonelectricinc.com', 'domain': 'dentonelectricinc.com', 'cat': 2},
    {'trade': 'Electrical Services', 'name': 'Bacon Plumbing, Heating, Air & Electric', 'city': 'Rockwall', 'url': 'https://baconhvac.com', 'domain': 'baconhvac.com', 'cat': 2},
    
    # Roofing candidates
    {'trade': 'Roofing & Restoration', 'name': 'Concord Roofing & Construction', 'city': 'Plano', 'url': 'https://concordroofingservices.com', 'domain': 'concordroofingservices.com', 'cat': 1},
    {'trade': 'Roofing & Restoration', 'name': 'T-Rock Roofing & Construction', 'city': 'Dallas', 'url': 'https://trockroofing.com', 'domain': 'trockroofing.com', 'cat': 1},
    {'trade': 'Roofing & Restoration', 'name': 'Stonewater Roofing', 'city': 'Plano', 'url': 'https://stonewaterroofing.com', 'domain': 'stonewaterroofing.com', 'cat': 1},
    {'trade': 'Roofing & Restoration', 'name': 'Bert Roofing Inc.', 'city': 'Dallas', 'url': 'https://bertroofing.com', 'domain': 'bertroofing.com', 'cat': 1},

    # Plumbing candidates
    {'trade': 'Plumbing & Drain Services', 'name': 'O\'Bryan Plumbing Services', 'city': 'Allen', 'url': 'https://obryanplumbing.com', 'domain': 'obryanplumbing.com', 'cat': 2},
    {'trade': 'Plumbing & Drain Services', 'name': 'Goose Plumbing', 'city': 'Frisco', 'url': 'https://gooseplumbing.com', 'domain': 'gooseplumbing.com', 'cat': 2},
    {'trade': 'Plumbing & Drain Services', 'name': 'Staggs Plumbing', 'city': 'Plano', 'url': 'https://staggsplumbing.info', 'domain': 'staggsplumbing.info', 'cat': 2},
    {'trade': 'Plumbing & Drain Services', 'name': 'Legacy Plumbing', 'city': 'Frisco', 'url': 'https://legacyplumbing.net', 'domain': 'legacyplumbing.net', 'cat': 2}
]

with open('docs/data/texas_leads.json', 'r', encoding='utf-8') as f:
    existing = json.load(f)
existing_domains = {x.get('url', '').lower().strip('/') for x in existing}
existing_names = {x.get('business_name', '').lower() for x in existing}

print(f"Total existing leads: {len(existing)}")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 390, 'height': 844})
    
    for pr in prospects:
        domain = pr['domain']
        url = pr['url'].strip('/')
        if url in existing_domains or pr['name'].lower() in existing_names:
            print(f"SKIP (Already in db): {pr['name']}")
            continue

        # Check DNS MX
        doh = f'https://dns.google/resolve?name={domain}&type=MX'
        try:
            req = urllib.request.Request(doh, headers={'User-Agent': 'Mozilla/5.0'})
            res = json.loads(urllib.request.urlopen(req, timeout=4).read().decode('utf-8'))
            mx_records = [ans.get('data') for ans in res.get('Answer', []) if ans.get('type') == 15]
            if not mx_records:
                print(f"NO MX: {domain}")
                continue
        except Exception as e:
            print(f"MX Error: {domain} -> {e}")
            continue

        try:
            resp = page.goto(url, timeout=15000, wait_until='domcontentloaded')
            page.wait_for_timeout(2000)
            if not resp or resp.status != 200:
                print(f"HTTP Status {resp.status if resp else 'None'}: {url}")
                continue

            content = page.content()
            tels = [a.get_attribute('href').replace('tel:', '').strip() for a in page.query_selector_all('a[href^="tel:"]')]
            
            # Find emails
            emails = re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', content)
            valid_emails = [
                e for e in emails 
                if not any(x in e.lower() for x in ['png', 'jpg', 'sentry', 'wix', 'schema', 'example', 'domain', 'bootstrap', 'google'])
            ]

            print(f"\nSUCCESS: [{pr['trade']}] {pr['name']} ({pr['city']})")
            print(f"  URL: {url}")
            print(f"  MX: {mx_records[0]}")
            print(f"  Tels: {tels[:3]}")
            print(f"  Emails: {list(dict.fromkeys(valid_emails))[:3]}")
        except Exception as e:
            print(f"Playwright error on {url}: {e}")

    browser.close()
