#!/usr/bin/env python3
"""
CLI Prospect Lead Viewer & Email Pitch Generator
Usage:
  python scripts/view_leads.py --list                 (List all 20 prospects in a table)
  python scripts/view_leads.py --id 1                  (View details & cold email pitch for Lead #1)
  python scripts/view_leads.py --search "McKinney"     (Search prospects by city, name, or trade)
  python scripts/view_leads.py --status 1 "Sent"       (Update status for Lead #1)
"""

import json
import os
import sys
import argparse

# Force UTF-8 stdout encoding for Windows terminal compatibility
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')


DATA_FILE = os.path.join(os.path.dirname(__file__), '../docs/data/texas_leads.json')

def load_leads():
    if not os.path.exists(DATA_FILE):
        print(f"Error: Lead data file not found at {DATA_FILE}")
        sys.exit(1)
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_leads(leads):
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(leads, f, indent=2)

def generate_email(lead):
    notes = lead.get('notes', '')
    is_cat_2 = "Category #2" in notes
    category_label = "Category #2 (Conversion & Calculator Upgrade)" if is_cat_2 else "Category #1 (Technical & Mobile Fixes)"
    city_short = lead['city'].split(',')[0]
    
    if is_cat_2:
        subject = f"Modern quote calculator preview for {lead['business_name']} / {city_short}"
        body = f"""Hi {lead['business_name']} Team,

I'm a local Texas web developer, and while reviewing top-rated {lead['niche']} specialists in {city_short}, I ran across {lead['business_name']}.

Your current site provides great information, but mobile visitors looking for fast service estimates have to hunt around to submit a request.

I put together a fast, mobile-friendly live mockup for {lead['business_name']}:

📷 [Attached: Mobile_Calculator_Preview.png]
👉 Live GitHub Mobile Preview: {lead['preview_url']}

It features an interactive quote calculator customized for {lead['niche']} services, instant 1-tap call buttons, and fast 24/7 quote request forms (Note: The quote calculator, colors, and layout are customizable sample templates. Project photos can also be added upon request for your final site).

Click the live preview link above to test out your personalized example website on your phone! If you'd like to chat about quick setup options to put it live under your domain, just reply to this email!

Best regards,

Dylan Roth
Local Web Specialist & Developer
roth.dylan777@gmail.com"""
    else:
        subject = f"Quick note regarding {lead['business_name']}'s mobile site / {city_short}"
        body = f"""Hi {lead['business_name']} Team,

I'm a local Texas web developer, and while running mobile technical checks on local {lead['niche']} contractors in {city_short}, I came across {lead['business_name']}.

I noticed your site appears to have an SSL/security issue on mobile, making it difficult for prospective clients to contact you directly on their smartphones.

I put together a fast mobile-first preview and attached two side-by-side screenshots:

📷 [Attached: Before_vs_After_Mobile.png]
👉 Live GitHub Mobile Preview: {lead['preview_url']}

It includes a 1-tap call button, 24/7 dispatch forms, and an instant price estimate calculator (Note: The quote calculator, colors, and layout are customizable sample templates. Project photos can also be added upon request for your final site).

Click the live preview link above to test out your personalized example website on your phone! If you'd like to chat about quick setup options to put it live under your domain, just reply to this email!

Best regards,

Dylan Roth
Local Web Specialist & Developer
roth.dylan777@gmail.com"""

    return category_label, subject, body


def list_leads(leads):
    print("\n" + "="*110)
    print(f"{'ID':<4} | {'BUSINESS NAME':<35} | {'CITY':<15} | {'NICHE':<22} | {'STATUS':<14}")
    print("="*110)
    for lead in leads:
        print(f"{lead['id']:<4} | {lead['business_name'][:35]:<35} | {lead['city'][:15]:<15} | {lead['niche'][:22]:<22} | {lead['status']:<14}")
    print("="*110 + "\n")

def show_lead_detail(lead):
    cat_label, subject, body = generate_email(lead)
    print("\n" + "="*80)
    print(f"PROSPECT #{lead['id']}: {lead['business_name'].upper()}")
    print("="*80)
    print(f"• City:           {lead['city']}")
    print(f"• Trade:          {lead['niche']}")
    print(f"• Contact Email:  {lead['email']}")
    print(f"• Contact Phone:  {lead['phone']}")
    print(f"• Current Site:   {lead['url']}")
    print(f"• Live Preview:   {lead['preview_url']}")
    print(f"• Status:         {lead['status']}")
    print(f"• Audit Category: {cat_label}")
    print("="*80)
    print("\n✉️ READY-TO-SEND COLD EMAIL PITCH:\n")
    print(f"SUBJECT: {subject}\n")
    print("BODY:")
    print(body)
    print("\n" + "="*80 + "\n")

def main():
    parser = argparse.ArgumentParser(description="Prospect Lead Viewer & Cold Pitch Generator")
    parser.add_argument("-l", "--list", action="store_true", help="List all prospect leads")
    parser.add_argument("-b", "--batch", type=int, help="Filter prospect leads by batch number (e.g. --batch 1)")
    parser.add_argument("-i", "--id", type=int, help="Display full details and cold email pitch for target lead ID")
    parser.add_argument("-s", "--search", type=str, help="Search prospect leads by name, city, or niche")
    parser.add_argument("--status", nargs=2, metavar=('ID', 'NEW_STATUS'), help="Update status for lead ID (e.g. --status 1 Sent)")

    args = parser.parse_args()
    leads = load_leads()

    if args.status:
        lead_id = int(args.status[0])
        new_status = args.status[1]
        found = False
        for lead in leads:
            if lead['id'] == lead_id:
                lead['status'] = new_status
                found = True
                save_leads(leads)
                print(f"✅ Updated Lead #{lead_id} ({lead['business_name']}) status to: '{new_status}'")
                break
        if not found:
            print(f"❌ Lead ID {lead_id} not found.")
        return

    if args.id:
        target = next((l for l in leads if l['id'] == args.id), None)
        if target:
            show_lead_detail(target)
        else:
            print(f"❌ Lead ID {args.id} not found.")
        return

    if args.batch:
        batch_leads = [l for l in leads if l.get('batch') == args.batch]
        if batch_leads:
            print(f"\n📦 BATCH #{args.batch} PROSPECTS ({len(batch_leads)} Leads):")
            list_leads(batch_leads)
        else:
            print(f"\n❌ No leads found in Batch #{args.batch}.")
        return

    if args.search:
        term = args.search.lower()
        results = [l for l in leads if term in l['business_name'].lower() or term in l['city'].lower() or term in l['niche'].lower() or term in l['notes'].lower()]
        if results:
            print(f"\n🔍 Found {len(results)} matching lead(s) for '{args.search}':")
            list_leads(results)
        else:
            print(f"\n❌ No leads found matching '{args.search}'.")
        return

    # Default to listing leads
    list_leads(leads)


if __name__ == "__main__":
    main()
