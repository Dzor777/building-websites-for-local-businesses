import urllib.request
import re
import ssl
import json
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

sites = {
    61: {"name": "DNA Plumbing", "url": "https://dnaplumbing.com", "email": "info@dnaplumbing.com"},
    62: {"name": "Lex Air Conditioning & Heating", "url": "https://lexairconditioning.com", "email": "info@lexairconditioning.com"},
    63: {"name": "J&K Air Conditioning & Heating", "url": "https://jkairconditioning.com", "email": "service@jkairconditioning.com"},
    64: {"name": "Strittmatter Plumbing, Heating & AC", "url": "https://strittmatters.com", "email": "info@strittmatters.com"},
    65: {"name": "Cody & Sons Plumbing, Heating & Air", "url": "https://codyandsons.com", "email": "info@codyandsons.com"},
    66: {"name": "Cold Factor Heating & Air", "url": "https://coldfactor.com", "email": "service@coldfactor.com"},
    67: {"name": "Arrow Electric Inc.", "url": "https://arrowelectric.net", "email": "service@arrowelectric.net"},
    68: {"name": "Rowley Roofing & Construction", "url": "https://rowleyroofing.com", "email": "info@rowleyroofing.com"},
}

for num, data in sites.items():
    print(f"\n--- #{num} {data['name']} ---")
    print(f"Current listed email: {data['email']}")
    url = data['url']
    found_emails = set()
    pages_to_check = [url, url + "/contact", url + "/contact-us", url + "/about", url + "/privacy-policy"]
    for p in pages_to_check:
        try:
            req = urllib.request.Request(p, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=5, context=ctx) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                mailtos = re.findall(r'mailto:([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})', html)
                for m in mailtos:
                    if not any(x in m.lower() for x in ['sentry', 'wixpress', 'wordpress', 'example', 'domain', 'schema']):
                        found_emails.add(m.lower())
                # also regex search in page text
                raw = re.findall(r'[a-zA-Z0-9._%+-]+@' + re.escape(data['url'].split('//')[1].replace('www.', '')) + r'\b', html)
                for r in raw:
                    found_emails.add(r.lower())
        except Exception:
            pass
    print(f"Emails found on live site: {list(found_emails)}")
