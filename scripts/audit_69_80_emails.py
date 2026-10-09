import urllib.request
import re
import ssl
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

with open("docs/data/texas_leads.json", encoding="utf-8") as f:
    leads = json.load(f)

batch4_rest = [l for l in leads if 69 <= l["id"] <= 80]

for l in batch4_rest:
    num = l["id"]
    name = l["business_name"]
    url = l["url"]
    curr_email = l["email"]
    print(f"\n--- #{num} {name} ---")
    print(f"Current listed email: {curr_email}")
    found = set()
    pages = [url, url.rstrip('/') + "/contact", url.rstrip('/') + "/contact-us", url.rstrip('/') + "/privacy-policy"]
    for p in pages:
        try:
            req = urllib.request.Request(p, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=5, context=ctx) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                mailtos = re.findall(r'mailto:([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})', html)
                for m in mailtos:
                    if not any(x in m.lower() for x in ['sentry', 'wixpress', 'wordpress', 'example', 'domain', 'schema', 'cloudflare']):
                        found.add(m.lower())
        except Exception:
            pass
    print(f"Emails found on live site: {list(found)}")
