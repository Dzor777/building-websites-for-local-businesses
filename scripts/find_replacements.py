import sys
import urllib.request
import urllib.parse
import json
import ssl

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

def check_lead(url, email):
    web_ok = False
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=6, context=ctx) as resp:
            if resp.status in (200, 301, 302):
                web_ok = True
    except Exception as e:
        pass

    mx_ok = False
    if email and '@' in email:
        domain = email.split('@')[-1].strip().lower()
        try:
            doh_url = f"https://dns.google/resolve?name={domain}&type=MX"
            req = urllib.request.Request(doh_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=4) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                if data.get("Status") == 0 and "Answer" in data:
                    mx_ok = True
        except Exception:
            pass

    return web_ok, mx_ok

# Candidates to test
test_list = [
    # Plano / Frisco / McKinney / Allen / Denton / Lewisville / Garland / Carrollton
    ("Milestone Electric, A/C & Plumbing", "https://callmilestone.com", "customercare@callmilestone.com"),
    ("Lex Air Conditioning & Heating", "https://lexairconditioning.com", "info@lexairconditioning.com"),
    ("K&S Heating & Air", "https://kandsair.com", "info@kandsair.com"),
    ("Force Home Services", "https://forcehomeservices.com", "info@forcehomeservices.com"),
    ("J&K Air Conditioning & Heating", "https://jkairconditioning.com", "service@jkairconditioning.com"),
    ("Strittmatter Plumbing, Heating & AC", "https://strittmatters.com", "info@strittmatters.com"),
    ("Cody & Sons Plumbing, Heating & Air", "https://codyandsons.com", "info@codyandsons.com"),
    ("Bacon Plumbing Heating Air Electric", "https://baconhvac.com", "info@baconhvac.com"),
    ("Baker Brothers Plumbing", "https://bakerbrothersplumbing.com", "info@bakerbrothersplumbing.com"),
    ("Berkeys Plumbing, Air Conditioning & Electrical", "https://berkeys.com", "info@berkeys.com"),
    ("Classic Heating & Air", "https://classicheatandair.com", "info@classicheatandair.com"),
    ("Air Patrol Air Conditioning", "https://airpatrolairconditioning.com", "info@airpatrolairconditioning.com"),
    ("Titus Electrical Services", "https://tituselectric.com", "service@tituselectric.com"),
    ("White Rock Roofing", "https://whiterockroofing.com", "info@whiterockroofing.com"),
    ("Texas Star Roofing", "https://texasstarroofing.com", "info@texasstarroofing.com"),
    ("Peak Roofing & Construction", "https://peakroofingconstruction.com", "info@peakroofingconstruction.com"),
    ("KPost Roofing & Waterproofing", "https://kpostcompany.com", "info@kpostcompany.com"),
    ("Starr Roofing & Gutters", "https://starrroofing.com", "service@starrroofing.com"),
    ("Town & Country Roofing", "https://townandcountryroofingdfw.com", "info@townandcountryroofingdfw.com"),
    ("Accurate Leak and Line", "https://accurateleak.com", "info@accurateleak.com"),
    ("Cathey's Plumbing", "https://catheysplumbing.com", "service@catheysplumbing.com"),
    ("CPR Plumbing Services", "https://cprplumbing.com", "info@cprplumbing.com"),
    ("Goose Green Energy Electric", "https://gooseelectric.com", "service@gooseelectric.com"),
    ("Electrician On Call", "https://electricianoncall.com", "info@electricianoncall.com"),
    ("Arrow Electric", "https://arrowelectric.net", "service@arrowelectric.net"),
    ("Mister Sparky DFW", "https://mistersparky.com", "info@mistersparky.com"),
    ("Texas Electrical", "https://texaselectrical.com", "info@texaselectrical.com"),
]

print("Testing replacements...")
passed = []
for name, url, email in test_list:
    w, m = check_lead(url, email)
    if w and m:
        passed.append((name, url, email))
        print(f"  [PASS] {name} | {url} | {email}")
    else:
        print(f"  [FAIL] {name} (web={w}, mx={m})")

print(f"\nTotal passed: {len(passed)}")
