import json
import csv
import time
import urllib.request
import urllib.parse
import ssl
import re
import os

def audit_url(url):
    """
    Runs automated checks on a target website URL:
    - SSL HTTPS security
    - Mobile Viewport meta tag
    - Latency / Load Speed
    - Local SEO Schema (JSON-LD)
    - Click-to-Call tel: links
    """
    results = {
        "has_ssl": False,
        "status_code": 0,
        "response_time_sec": 0.0,
        "has_mobile_viewport": False,
        "has_local_schema": False,
        "has_click_to_call": False,
        "audit_score": 100,
        "issues_found": [],
        "pitch_talking_point": ""
    }

    parsed = urllib.parse.urlparse(url)
    if not parsed.scheme:
        url = "http://" + url
        parsed = urllib.parse.urlparse(url)

    if parsed.scheme == "https":
        results["has_ssl"] = True
    else:
        results["issues_found"].append("Missing SSL / Non-secure HTTP")
        results["audit_score"] -= 30

    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) LocalSiteAuditor/1.0"}
    )

    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    start_time = time.time()
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=8) as response:
            elapsed = time.time() - start_time
            results["response_time_sec"] = round(elapsed, 2)
            results["status_code"] = response.getcode()

            if elapsed > 2.5:
                results["issues_found"].append(f"Slow response time ({results['response_time_sec']}s)")
                results["audit_score"] -= 20

            html_bytes = response.read(500000) # Read first 500KB
            html_text = html_bytes.decode('utf-8', errors='ignore')

            # Check Mobile Viewport Meta Tag
            if re.search(r'<meta[^>]+name=["\']viewport["\']', html_text, re.IGNORECASE):
                results["has_mobile_viewport"] = True
            else:
                results["issues_found"].append("Missing Mobile Viewport meta tag (Unresponsive layout)")
                results["audit_score"] -= 30

            # Check Schema Markup
            if "schema.org" in html_text or "LocalBusiness" in html_text:
                results["has_local_schema"] = True
            else:
                results["issues_found"].append("Missing Local Business Google Schema")
                results["audit_score"] -= 10

            # Check Click to Call Tel Links
            if re.search(r'href=["\']tel:', html_text, re.IGNORECASE):
                results["has_click_to_call"] = True
            else:
                results["issues_found"].append("Missing tap-to-call mobile phone link")
                results["audit_score"] -= 10

    except Exception as e:
        results["response_time_sec"] = round(time.time() - start_time, 2)
        results["issues_found"].append(f"Connection error / Unreachable ({str(e)[:50]})")
        results["audit_score"] = 10

    # Ensure score bounds
    results["audit_score"] = max(0, results["audit_score"])

    # Generate custom pitch snippet based on highest impact issue
    if "Missing Mobile Viewport meta tag (Unresponsive layout)" in results["issues_found"]:
        results["pitch_talking_point"] = "Your website text and buttons cut off on mobile devices, causing potential clients to hit back and call competitors."
    elif "Missing SSL / Non-secure HTTP" in results["issues_found"]:
        results["pitch_talking_point"] = "Browsers display a 'Not Secure' warning to prospective customers when opening your site."
    elif any("Slow response" in issue for issue in results["issues_found"]):
        results["pitch_talking_point"] = f"Your site takes over {results['response_time_sec']} seconds to load on phones, losing up to 40% of mobile search traffic."
    else:
        results["pitch_talking_point"] = "Your site lacks interactive booking calculators and local Google schema to rank top in local maps."

    return results

import argparse

def main():
    parser = argparse.ArgumentParser(description="Audit local business websites from JSON dataset")
    parser.add_argument("--file", default="sample_leads.json", help="Input JSON file inside scripts/")
    parser.add_argument("--out", default="leads_audited.csv", help="Output CSV file inside scripts/")

    args = parser.parse_args()

    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(script_dir, args.file)
    output_file = os.path.join(script_dir, args.out)

    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found.")
        return

    with open(input_file, "r", encoding="utf-8") as f:
        leads = json.load(f)

    print(f"[AUDIT] Starting automated audit of {len(leads)} local business leads from '{args.file}'...\n")

    audited_rows = []
    for lead in leads:
        name = lead.get("business_name")
        url = lead.get("url")
        print(f"Auditing [{name}] ({url})...")
        audit_res = audit_url(url)

        row = {
            "business_name": name,
            "niche": lead.get("niche", ""),
            "city": lead.get("city", ""),
            "phone": lead.get("phone", ""),
            "url": url,
            "audit_score": audit_res["audit_score"],
            "has_ssl": "YES" if audit_res["has_ssl"] else "NO",
            "mobile_viewport": "YES" if audit_res["has_mobile_viewport"] else "NO",
            "load_time_sec": audit_res["response_time_sec"],
            "issues_summary": " | ".join(audit_res["issues_found"]),
            "pitch_talking_point": audit_res["pitch_talking_point"],
        }
        audited_rows.append(row)

    # Save CSV
    fieldnames = [
        "business_name", "niche", "city", "phone", "url",
        "audit_score", "has_ssl", "mobile_viewport", "load_time_sec",
        "issues_summary", "pitch_talking_point"
    ]

    with open(output_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(audited_rows)

    print(f"\n[COMPLETE] Audit finished! Results saved to: {output_file}")
    print(f"[SUMMARY] Audited Leads Overview:")
    for r in audited_rows:
        print(f"  * {r['business_name']} ({r['niche']}) | Score: {r['audit_score']}/100 | Issues: {r['issues_summary']}")


if __name__ == "__main__":
    main()

