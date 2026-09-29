"""
Texas Local Service Business Lead Scouting & Site Audit Script
Scans local service business websites across Texas (Plumbing, HVAC, Roofing, Electrical, Landscaping),
evaluates technical metrics, and categorizes sites into:
  - Category #1: Technical Bug Fix (Missing SSL, non-responsive viewport, non-clickable tel)
  - Category #2: Conversion Upgrade (Looks okay, but missing interactive quote calculator & mobile action bar)
  - Category #3: Excluded (High-end modern agency sites)
"""

import urllib.request
import urllib.parse
import re
import json
import os
import ssl

# Ignore SSL errors when inspecting unencrypted or self-signed candidate sites
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def audit_website(url):
    """
    Performs automated technical analysis on candidate website.
    Returns (category, audit_details)
    """
    category = "Category #2" # Default to conversion upgrade if site loads
    issues = []
    
    # 1. SSL Check
    is_http = url.startswith("http://")
    if is_http:
        issues.append("Missing SSL Security Certificate (displays 'Not Secure' warning)")
        category = "Category #1"

    # 2. HTML Inspection
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        )
        with urllib.request.urlopen(req, context=ctx, timeout=1.5) as response:

            html = response.read().decode('utf-8', errors='ignore')
            
            # Check viewport
            if 'name="viewport"' not in html and "name='viewport'" not in html:
                issues.append("Missing mobile viewport tag (causes smartphone layout zoom/cutoff)")
                category = "Category #1"
                
            # Check tel link
            if 'href="tel:' not in html and "href='tel:" not in html:
                issues.append("Missing 1-tap clickable telephone link")
                if category != "Category #1":
                    category = "Category #2"

            # Check interactive calculator/estimator
            has_calculator = any(k in html.lower() for k in ['calculator', 'estimate-widget', 'quote-builder', 'instant-quote'])
            if not has_calculator:
                issues.append("Missing interactive mobile price estimate calculator")

            # Check high-end agency badge/widgets to exclude Category #3
            is_agency_site = any(k in html.lower() for k in ['webflow.com', 'hubspot', 'housecallpro', 'service-titan', 'servicetitan'])
            if is_agency_site and category != "Category #1":
                return "Category #3", ["High-end agency site with custom CRM"]

    except Exception as e:
        issues.append(f"Connection timeout or loading error: {str(e)}")
        category = "Category #1"

    return category, issues

def build_email_pitch(lead, category, issues):
    """
    Generates tailored cold email copy based on category:
      - Category #1: Technical Bug Fix Pitch
      - Category #2: Conversion & Calculator Upgrade Pitch
    """
    name = lead['business_name']
    url = lead['url']
    email = lead['email']
    phone = lead['phone']
    city = lead['city']
    city_name = city.split(',')[0]
    niche = lead['niche']
    slug = lead.get('slug', re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-'))
    preview_url = f"https://dzor777.github.io/building-websites-for-local-businesses/?client={slug}"
    disclaimer = " (note: the calculator in the preview is a sample template—we customize it to match your exact services, custom add-ons, and real pricing structure. We also styled this preview around your primary brand colors, but can adjust all colors, fonts, and layouts to match your exact preference during setup. Please note our preview sites don't include project photos, but any photos you supply will be added to your final website upon request)"

    if category == "Category #1":
        # Technical Fix Pitch
        issue_str = ", ".join(issues[:2]) if issues else "mobile layout bugs"
        subject = f"Quick note regarding {name}'s mobile site / {city_name}"
        body = f"""Hi {name} Team,

I'm a local Texas web developer, and while running mobile technical checks on local {niche} contractors in {city_name}, I came across {name}.

I noticed a couple of technical issues on mobile screens ({issue_str}), making it difficult for prospective clients to contact you directly on their smartphones.

Since over 75% of local service calls come from mobile phones, I put together a fast mobile-first preview and attached two side-by-side screenshots:

📷 [Attached: Before_vs_After_Mobile.png]
👉 Live GitHub Mobile Preview: {preview_url}

It includes a 1-tap call button to {phone}, 24/7 dispatch forms, and an instant price estimate calculator {disclaimer}.

Click the live preview link above to test out your personalized example website and see how the interactive quote calculator works on your phone! If you'd like to chat about quick setup options to put it live under your domain, just reply to this email!

Best regards,

Dylan Roth
Local Web Specialist & Developer
roth.dylan777@gmail.com"""

    else:
        # Category #2: Conversion & Calculator Upgrade Pitch
        subject = f"Quick conversion upgrade idea for {name} / {city_name}"
        body = f"""Hi {name} Team,

I'm a local Texas web developer, and while reviewing {niche} websites in {city_name}, I came across {name}.

Your website looks great! I noticed you don't have an interactive mobile price estimator yet—most homeowners prefer estimating job costs right on their phones before placing a service call.

Instead of just pointing it out, I built a fast mobile preview featuring an instant quote calculator & 1-tap call bar, and attached two comparison screenshots:

📷 [Attached: Before_vs_After_Mobile.png]
👉 Live GitHub Mobile Preview: {preview_url}

It includes a 1-tap call button to {phone}, 24/7 dispatch forms, and an instant price estimate calculator {disclaimer}.

Click the live preview link above to test out your personalized example website and see how the interactive quote calculator works on your phone! If you'd like to chat about quick setup options to put it live for your business, just reply to this email!

Best regards,

Dylan Roth
Local Web Specialist & Developer
roth.dylan777@gmail.com"""

    return {
        'header': f"### {name}\n* **Category:** {category} | **Current Website:** [{url}]({url}) | **To Email:** `{email}` | **Phone:** {phone} | **City:** {city}\n\n**Subject:** {subject}",
        'body': f"```text\n{body}\n```"
    }


if __name__ == "__main__":
    print("Scouting script initialized!")
