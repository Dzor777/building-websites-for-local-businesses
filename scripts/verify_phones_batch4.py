import sys
import re
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

leads = [
    (61, 'DNA Plumbing', 'https://dnaplumbing.com'),
    (62, 'Lex Air Conditioning & Heating', 'https://lexairconditioning.com'),
    (63, 'J&K Air Conditioning & Heating', 'https://jkairconditioning.com'),
    (64, 'Strittmatter Plumbing, Heating & AC', 'https://strittmatters.com'),
    (65, 'Cody & Sons Plumbing, Heating & Air', 'https://codyandsons.com'),
    (66, 'Cold Factor Heating & Air', 'https://coldfactor.com'),
    (67, 'Arrow Electric Inc.', 'https://arrowelectric.net'),
    (68, 'Rowley Roofing & Construction', 'https://rowleyroofing.com'),
    (69, 'Accurate Leak and Line', 'https://accurateleak.com'),
    (70, 'Total Air & Heat', 'https://totalair.com'),
    (71, 'Anderson Roofing & Construction', 'https://andersonroofingtx.com'),
    (72, 'Titus Electrical Services', 'https://tituselectric.com'),
    (73, 'White Rock Roofing', 'https://whiterockroofing.com'),
    (74, 'Classic Heating & Air', 'https://classicheatandair.com'),
    (75, 'Old Pro Roofing', 'https://oldproroofing.com'),
    (76, 'CPR Plumbing Services', 'https://cprplumbing.com'),
    (77, 'Electrician On Call', 'https://electricianoncall.com'),
    (78, 'Texas Star Roofing', 'https://texasstarroofing.com'),
    (79, 'Peak Roofing & Construction', 'https://peakroofingconstruction.com'),
    (80, 'Town & Country Roofing', 'https://townandcountryroofingdfw.com')
]

with sync_playwright() as p:
    b = p.chromium.launch(headless=True)
    page = b.new_page(
        viewport={'width': 390, 'height': 844},
        user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'
    )
    for lid, name, url in leads:
        try:
            page.goto(url, wait_until='domcontentloaded', timeout=15000)
            page.wait_for_timeout(1500)
            tels = page.eval_on_selector_all('a[href^="tel:"]', 'els => els.map(e => ({text: e.innerText.trim(), href: e.href}))')
            tel_clean = [t for t in tels if t['text'] and any(c.isdigit() for c in t['text'])]
            print(f"[{lid}] {name}")
            print(f"     Tel links: {tel_clean[:3]}")
        except Exception as e:
            print(f"[{lid}] {name} Error: {e}")
    b.close()
