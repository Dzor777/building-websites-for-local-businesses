#!/usr/bin/env python3
"""
Deep Email Deliverability & Discovery Verifier for Local Business Leads
Features:
1. Native DNS MX Record resolution (validates domain can receive mail).
2. Deep Website Contact Crawler (extracts genuine emails from Homepage, /contact, /about, footer mailto: links).
3. Deliverability Confidence Scoring (VERIFIED, MX_VALID, FORM_ONLY, INVALID_DOMAIN).
4. Auto-enrichment & Lead Auto-correction.
"""

import json
import os
import re
import sys
import ssl
import subprocess
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

DATA_FILE = os.path.join(os.path.dirname(__file__), '../docs/data/texas_leads.json')

# SSL context for scraping
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

JUNK_EMAIL_DOMAINS = {
    'sentry.io', 'wixpress.com', 'wordpress.org', 'wordpress.com', 
    'schema.org', 'example.com', 'domain.com', 'test.com', 'email.com',
    'googleapis.com', 'cloudflare.com', 'godaddy.com', 'w3.org'
}

JUNK_PREFIXES = {'support@sentry', 'noreply', 'no-reply', 'mailer-daemon'}

def check_mx_records(domain):
    """
    Checks if a domain has active MX records using nslookup or DNS over HTTPS fallback.
    Returns (has_mx, list_of_mx_servers, error_msg)
    """
    if not domain:
        return False, [], "Empty domain"
    
    # Clean domain
    domain = domain.strip().lower()
    if '/' in domain:
        domain = urllib.parse.urlparse(domain).netloc or domain.split('/')[0]
    domain = re.sub(r'^www\.', '', domain)

    # 1. Native nslookup
    try:
        res = subprocess.run(
            ['nslookup', '-type=MX', domain],
            capture_output=True,
            text=True,
            timeout=4
        )
        output = (res.stdout or "") + (res.stderr or "")
        
        if "Non-existent domain" in output or "can't find" in output or "server can't find" in output:
            return False, [], "Non-existent domain"
        
        mx_servers = []
        for line in output.splitlines():
            line_clean = line.strip()
            if "mail exchanger =" in line_clean:
                server = line_clean.split("mail exchanger =")[-1].strip()
                mx_servers.append(server)
            elif "MX preference =" in line_clean and "," in line_clean:
                server = line_clean.split(",")[-1].replace("mail exchanger =", "").strip()
                mx_servers.append(server)

        if mx_servers:
            return True, mx_servers, None
    except Exception as e:
        pass

    # 2. DNS over HTTPS Fallback (Google DNS API)
    try:
        doh_url = f"https://dns.google/resolve?name={domain}&type=MX"
        req = urllib.request.Request(doh_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=3) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if data.get("Status") == 0 and "Answer" in data:
                servers = [a.get("data", "").split()[-1].rstrip('.') for a in data["Answer"] if a.get("type") == 15]
                if servers:
                    return True, servers, None
            elif data.get("Status") == 3: # NXDOMAIN
                return False, [], "Domain does not exist (NXDOMAIN)"
    except Exception:
        pass

    # 3. Fallback A-record lookup
    try:
        import socket
        socket.getaddrinfo(domain, 80)
        return True, [f"{domain} (A-record fallback)"], None
    except Exception as e:
        return False, [], f"Resolution failed: {str(e)}"

def extract_emails_from_html(html, target_domain=None):
    """
    Extracts valid email addresses from raw HTML.
    """
    if not html:
        return []

    # 1. Look for mailto: links
    mailto_matches = re.findall(r'href=["\']mailto:([^\?"\'\s>]+)', html, re.IGNORECASE)
    
    # 2. General regex matches
    raw_matches = re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', html)
    
    candidates = list(set(mailto_matches + raw_matches))
    valid_emails = []

    for email in candidates:
        email = email.strip().lower()
        # Clean urlencoded chars
        email = urllib.parse.unquote(email)
        
        # Validate format
        if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email):
            continue
            
        parts = email.split('@')
        if len(parts) != 2:
            continue
            
        user, domain = parts
        
        # Filter image filenames mistaken for emails (e.g. logo@2x.png)
        if any(email.endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']):
            continue
            
        # Filter junk domains
        if domain in JUNK_EMAIL_DOMAINS:
            continue
            
        # Filter junk prefixes
        if any(user.startswith(junk) for junk in JUNK_PREFIXES):
            continue

        valid_emails.append(email)

    # Prioritize domain-matching emails if target_domain is given
    if target_domain:
        clean_target = re.sub(r'^www\.', '', target_domain.lower())
        domain_matched = [e for e in valid_emails if clean_target in e.split('@')[1]]
        others = [e for e in valid_emails if clean_target not in e.split('@')[1]]
        return domain_matched + others

    return valid_emails

def crawl_site_for_emails(url):
    """
    Crawls the website homepage and common contact/about subpages to locate published emails.
    """
    if not url:
        return [], None
        
    parsed = urllib.parse.urlparse(url)
    if not parsed.scheme:
        url = "https://" + url
        parsed = urllib.parse.urlparse(url)
        
    base_domain = parsed.netloc
    clean_domain = re.sub(r'^www\.', '', base_domain)
    
    subpages = [
        "",                 # Homepage
        "/contact",
        "/contact-us",
        "/about",
        "/about-us"
    ]
    
    found_emails = set()
    has_contact_form = False
    
    for sub in subpages:
        target_url = urllib.parse.urljoin(url, sub)
        try:
            req = urllib.request.Request(target_url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=3.5) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                
                # Check for forms
                if any(k in html.lower() for k in ['<form', 'contact-form', 'wpforms', 'gravityform']):
                    has_contact_form = True
                    
                emails = extract_emails_from_html(html, target_domain=clean_domain)
                for e in emails:
                    found_emails.add(e)
                    
            if found_emails: # Stop early if found on main or contact page
                break
        except Exception:
            continue

    return list(found_emails), has_contact_form

def verify_lead_email(lead):
    """
    Full verification check for a single lead.
    Returns audit dict with status, mx_status, scraped_emails, suggested_email.
    """
    lead_id = lead.get('id', '?')
    name = lead.get('business_name', 'Unknown')
    current_email = lead.get('email', '').strip()
    website = lead.get('url', '').strip()
    
    result = {
        'id': lead_id,
        'name': name,
        'current_email': current_email,
        'website': website,
        'status': 'UNKNOWN',
        'mx_valid': False,
        'mx_servers': [],
        'scraped_emails': [],
        'has_form': False,
        'suggested_email': current_email,
        'note': ''
    }
    
    # 1. Check current email MX
    if current_email and '@' in current_email:
        email_domain = current_email.split('@')[1]
        mx_valid, servers, err = check_mx_records(email_domain)
        result['mx_valid'] = mx_valid
        result['mx_servers'] = servers
        if not mx_valid:
            result['note'] = f"MX Failure: {err}"
    else:
        result['note'] = "Missing or malformed email"
        
    # 2. Scrape live site for actual published email
    if website:
        scraped, has_form = crawl_site_for_emails(website)
        result['scraped_emails'] = scraped
        result['has_form'] = has_form
        
        if scraped:
            # Check MX on top scraped email
            top_email = scraped[0]
            top_domain = top_email.split('@')[1]
            top_mx, _, _ = check_mx_records(top_domain)
            if top_mx:
                result['suggested_email'] = top_email
                if current_email.lower() == top_email.lower():
                    result['status'] = 'VERIFIED_EXACT'
                else:
                    result['status'] = 'UPDATED_FROM_SITE'
            else:
                result['status'] = 'SCRAPED_MX_FAIL'
        else:
            if result['mx_valid']:
                result['status'] = 'MX_VALID_ONLY'
            elif has_form:
                result['status'] = 'FORM_ONLY'
            else:
                result['status'] = 'INVALID_NO_CONTACT'
    else:
        result['status'] = 'NO_WEBSITE'
        
    return result

def audit_leads_batch(leads, max_workers=8):
    """
    Audits a batch of leads in parallel.
    """
    print(f"\n🔍 Auditing {len(leads)} lead(s) for email deliverability & live MX records...")
    print("=" * 110)
    print(f"{'ID':<4} | {'BUSINESS NAME':<26} | {'CURRENT EMAIL':<26} | {'STATUS':<18} | {'DELIVERABLE / SUGGESTED':<28}")
    print("=" * 110)
    
    results = []
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        for res in executor.map(verify_lead_email, leads):
            results.append(res)
            
            status_symbol = "✅" if res['status'] in ['VERIFIED_EXACT', 'UPDATED_FROM_SITE', 'MX_VALID_ONLY'] else "⚠️"
            if res['status'] in ['INVALID_NO_CONTACT', 'SCRAPED_MX_FAIL']:
                status_symbol = "❌"
                
            print(f"{res['id']:<4} | {res['name'][:26]:<26} | {res['current_email'][:26]:<26} | {status_symbol} {res['status'][:15]:<16} | {res['suggested_email'][:28]:<28}")
            
    print("=" * 110)
    return results

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Deep Email Deliverability & MX Verifier")
    parser.add_argument("--domain", help="Check MX records for a single domain")
    parser.add_argument("--url", help="Crawl a website for published emails")
    parser.add_argument("--email", help="Verify a single email address")
    parser.add_argument("--batch", type=int, help="Verify specific batch number from texas_leads.json")
    
    args = parser.parse_args()
    
    if args.domain:
        valid, servers, err = check_mx_records(args.domain)
        print(f"Domain: {args.domain} | MX Valid: {valid} | Servers: {servers} | Error: {err}")
    elif args.url:
        emails, has_form = crawl_site_for_emails(args.url)
        print(f"URL: {args.url} | Found Emails: {emails} | Has Form: {has_form}")
    elif args.email:
        domain = args.email.split('@')[-1]
        valid, servers, err = check_mx_records(domain)
        print(f"Email: {args.email} | MX Valid: {valid} | Servers: {servers} | Error: {err}")
    elif args.batch:
        if os.path.exists(DATA_FILE):
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                all_leads = json.load(f)
            batch_leads = [l for l in all_leads if l.get('batch') == args.batch]
            audit_leads_batch(batch_leads)
        else:
            print(f"Error: Data file {DATA_FILE} not found.")
    else:
        print("Usage: python scripts/verify_email_deliverability.py [--domain DOMAIN | --url URL | --email EMAIL | --batch BATCH_NUM]")
