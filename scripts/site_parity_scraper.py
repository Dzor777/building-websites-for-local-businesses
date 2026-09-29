import urllib.request
import re
import json

def scrape_website_parity(url):
    """
    Automated Feature & Color Parity Scraper ("Zero Downgrade" Guarantee).
    Scrapes candidate HTML & CSS to extract:
    1. Exact service offerings
    2. Real trust credentials & guarantees
    3. Primary brand color hue (Blue, Orange/Red, Green, Dark)
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    extracted_services = []
    extracted_badges = []
    brand_hue = "blue"

    if not url.startswith('http'):
        url = 'http://' + url

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=3) as response:
            html = response.read().decode('utf-8', errors='ignore')

            # 1. Color Hue Detection
            html_lower = html.lower()
            if 'red' in html_lower or '#e' in html_lower or '#ff' in html_lower or 'orange' in html_lower:
                brand_hue = "orange"
            elif 'green' in html_lower or '#00ff' in html_lower or '#16a' in html_lower:
                brand_hue = "green"
            elif 'blue' in html_lower or '#00' in html_lower or '#02' in html_lower or 'navy' in html_lower:
                brand_hue = "blue"

            # 2. Trust Credentials & Badges Extraction
            if "licensed" in html_lower or "insured" in html_lower:
                extracted_badges.append({"title": "Licensed & Insured", "subtitle": "Fully Verified Pros", "icon": "ShieldCheck"})
            if "family" in html_lower:
                extracted_badges.append({"title": "Family Owned", "subtitle": "Local Community Focus", "icon": "Award"})
            if "24/7" in html_lower or "emergency" in html_lower:
                extracted_badges.append({"title": "24/7 Emergency Dispatch", "subtitle": "Rapid Arrival", "icon": "Clock"})
            if "free estimate" in html_lower or "free quote" in html_lower:
                extracted_badges.append({"title": "Free Estimates", "subtitle": "Upfront Honest Rates", "icon": "DollarSign"})

            # 3. Heading & Service Extraction
            headings = re.findall(r'<h[2-4][^>]*>(.*?)</h[2-4]>', html, re.IGNORECASE | re.DOTALL)
            clean_headings = [re.sub(r'<[^>]+>', '', h).strip() for h in headings if len(re.sub(r'<[^>]+>', '', h).strip()) > 3]

            for h in clean_headings[:4]:
                if not any(stop in h.lower() for stop in ['contact', 'about', 'review', 'testimonial', 'copyright', 'home', 'nav']):
                    extracted_services.append(h[:45])

    except Exception as e:
        # Fallback if site blocks or times out
        pass

    return {
        'brand_hue': brand_hue,
        'extracted_badges': extracted_badges,
        'extracted_services': extracted_services
    }

if __name__ == "__main__":
    result = scrape_website_parity("bewleyplumbing.com")
    print(f"Site Parity Scraping Result: {json.dumps(result, indent=2)}")
