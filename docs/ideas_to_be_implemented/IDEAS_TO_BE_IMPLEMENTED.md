# Ideas & Backlog Tracker

This document tracks planned features, templates, and operational workflows to be set up as the WaaS platform scales.

Ok, for the next 20 leads, I want you to do this: 

Role: Local Business Lead Generation & Enrichment Specialist

Task: Identify high-intent trade contractors in North Texas (e.g., Plumbers, HVAC, Roofers, Electricians, Towing) who currently HAVE NO WEBSITE LISTED on Google Maps, and enrich their profiles with valid owner/business email addresses.

Target Geographic Area: Collin County, Denton County, Dallas County, Grayson County (McKinney, Frisco, Plano, Allen, Denton, Sherman, Lewisville).

Execution Steps:
1. Search Google Maps for local service trades in the target geographic area.
2. Filter the results to keep ONLY businesses that meet ALL of the following criteria:
   - "website" field is NULL, EMPTY, or missing.
   - Total Review Count is 10 or higher.
   - Average Rating is 4.0 stars or higher.
3. For every identified business with no website, perform an email enrichment lookup:
   - Check the business profile data for any secondary listed email address.
   - Search web sources (such as Facebook Business pages, Yelp, or local trade directories) using the Business Name + Phone Number + City to locate their listed contact email.
   - Run email syntax and deliverability verification checks to ensure the email is deliverable and active.
4. Output the final structured list into a clean CSV/JSON table with these exact columns:
   - Business Name
   - Trade Category
   - City
   - Phone Number
   - Google Maps Review Count / Rating
   - Verified Contact Email
   - Source Notes (e.g., "Enriched via Facebook / Google Profile")

Constraint: Do NOT include any business that already has an active domain or website URL listed on Google Maps. Only output leads that have a verified deliverable email address.

---

## ✅ Completed & Live Setup
- [x] **New Client Onboarding Google Form** (Connected to Stripe payment redirect)
- [x] **Automated Client Welcome Email** (Configured via Zapier with instant DNS instructions)
- [x] **Stripe TOS Integration** (Mandatory terms checkbox + 6-month minimum commitment)
- [x] **GitHub Pages & Vercel Live Deployment** (Fast global hosting & live preview sub-routes)

---

## 💡 Future Ideas Backlog
*(Add new growth ideas, ad strategies, or platform features here as you scale!)*



