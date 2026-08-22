import json
import os

def create_client_config(name, niche, city, state, phone, email="", domain=""):
    slug = name.lower().replace("&", "and").replace(".", "").replace("'", "").replace(" ", "-")
    formatted_phone = phone
    phone_raw = "+" + "".join(c for c in phone if c.isdigit())
    if not domain:
        domain = slug + ".com"
    if not email:
        email = f"service@{domain}"

    clean_niche = niche if niche else "Local Services"

    # Assign icons and base pricing according to niche
    if "plumb" in clean_niche.lower() or "drain" in clean_niche.lower():
        services = [
            {
                "id": "emergency-drain",
                "name": "Emergency Drain Cleaning",
                "shortDesc": "High-pressure hydro-jetting and clearing for clogged drains, sinks, and main sewer lines.",
                "fullDesc": "Advanced video camera inspections and heavy-duty hydro-jetters clear stubborn clogs instantly.",
                "basePrice": 149,
                "iconName": "Droplets",
                "badge": "24/7 Available"
            },
            {
                "id": "water-heater",
                "name": "Water Heater Repair & Install",
                "shortDesc": "Tankless and traditional water heater repair, flushing, and same-day replacement.",
                "fullDesc": "Never run out of hot water. Servicing tankless, gas, and electric systems.",
                "basePrice": 299,
                "iconName": "Flame"
            },
            {
                "id": "leak-detection",
                "name": "Slab & Pipe Leak Detection",
                "shortDesc": "Non-destructive acoustic leak detection for hidden wall, ceiling, and under-slab leaks.",
                "fullDesc": "Detect underground leaks early before costly foundation damage occurs.",
                "basePrice": 199,
                "iconName": "Search"
            }
        ]
    elif "hvac" in clean_niche.lower() or "air" in clean_niche.lower() or "climate" in clean_niche.lower():
        services = [
            {
                "id": "ac-repair",
                "name": "Emergency AC & Heating Repair",
                "shortDesc": "Fast response diagnostic and same-day repair for home and commercial AC units.",
                "fullDesc": "Fully stocked service trucks ready to restore cooling and heating immediately.",
                "basePrice": 129,
                "iconName": "Flame",
                "badge": "Same Day"
            },
            {
                "id": "tune-up",
                "name": "Seasonal System Maintenance & Tune-Up",
                "shortDesc": "Comprehensive 21-point HVAC system inspection, refrigerant check, and coil cleaning.",
                "fullDesc": "Improve energy efficiency and prevent sudden summer breakdowns.",
                "basePrice": 99,
                "iconName": "Wrench"
            },
            {
                "id": "system-replacement",
                "name": "Full HVAC System Replacement",
                "shortDesc": "Energy-efficient heat pump and high-SEER AC installation with warranty coverage.",
                "fullDesc": "Top brand system upgrades installed by certified HVAC specialists.",
                "basePrice": 2499,
                "iconName": "Building2"
            }
        ]
    elif "roof" in clean_niche.lower() or "storm" in clean_niche.lower():
        services = [
            {
                "id": "roof-inspection",
                "name": "Free Storm Damage Inspection",
                "shortDesc": "Complete drone & manual roof inspection for hail, wind, and storm damage.",
                "fullDesc": "Detailed photographic inspection report provided for insurance claims.",
                "basePrice": 0,
                "iconName": "Search",
                "badge": "Free Inspection"
            },
            {
                "id": "leak-repair",
                "name": "Emergency Roof Leak Repair",
                "shortDesc": "Fast tarping and permanent repair for leaking shingles, flashing, and vents.",
                "fullDesc": "Protect your home interior from water damage with rapid dispatch.",
                "basePrice": 249,
                "iconName": "ShieldCheck"
            },
            {
                "id": "roof-replacement",
                "name": "Full Roof Replacement",
                "shortDesc": "Architectural shingle, metal, and tile roof replacement backed by 30-year warranty.",
                "fullDesc": "Complete tear-off, synthetic underlayment, and premium shingle installation.",
                "basePrice": 4500,
                "iconName": "Building2"
            }
        ]
    else:
        services = [
            {
                "id": "service-1",
                "name": f"Emergency {clean_niche}",
                "shortDesc": f"Fast local dispatch for residential and commercial {clean_niche.lower()}.",
                "fullDesc": "Available 24 hours a day with complete upfront pricing.",
                "basePrice": 149,
                "iconName": "Wrench",
                "badge": "24/7 Available"
            },
            {
                "id": "service-2",
                "name": f"{clean_niche} Repair & Tune-Up",
                "shortDesc": "Comprehensive troubleshooting, repair, and preventative care.",
                "fullDesc": "Extend system lifespan and avoid unexpected breakdowns.",
                "basePrice": 199,
                "iconName": "ShieldCheck"
            },
            {
                "id": "service-3",
                "name": "Full Installation & Upgrade",
                "shortDesc": "Top-tier brand equipment installed by licensed local technicians.",
                "fullDesc": "Professional installation backed by multi-year warranty.",
                "basePrice": 499,
                "iconName": "Building2"
            }
        ]

    return {
        "slug": slug,
        "name": name,
        "legalName": f"{name} LLC",
        "tagline": f"24/7 Licensed Top-Rated {clean_niche} in {city}, {state}",
        "description": f"Fast, reliable, and upfront local {clean_niche.lower()} services. 30-minute emergency arrival and 100% satisfaction guaranteed.",
        "niche": clean_niche,
        "city": city,
        "state": state,
        "phone": formatted_phone,
        "formattedPhone": formatted_phone,
        "phoneRaw": phone_raw,
        "email": email,
        "address": {
            "street": "100 Main Street",
            "city": city,
            "state": state,
            "zip": "75069" if city == "McKinney" else ("75409" if city == "Anna" else "75454"),
            "googleMapsEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.60742111166!2d-96.6152686!3d33.1972101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c125139049449%3A0xb35a3a290ebce297!2sMcKinney%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        },
        "domain": domain,
        "url": f"https://{domain}",
        "googleAnalyticsId": "G-DEMO999",
        "web3FormsAccessKey": "YOUR_KEY",
        "hours": {
            "days": "Monday - Sunday",
            "time": "24/7 Emergency Service",
            "is24_7": True
        },
        "colors": {
            "primary": "#0284c7",
            "primaryDark": "#0369a1",
            "accent": "#f59e0b"
        },
        "trustBadges": [
            { "title": "Fast Arrival", "subtitle": "Under 30 minutes", "icon": "Clock" },
            { "title": "Licensed & Insured", "subtitle": "Fully verified pros", "icon": "ShieldCheck" },
            { "title": "Upfront Pricing", "subtitle": "No surprise charges", "icon": "DollarSign" },
            { "title": "100% Guaranteed", "subtitle": "Satisfaction warranty", "icon": "Award" }
        ],
        "services": services,
        "reviews": {
            "googleRating": 4.9,
            "totalReviews": 142,
            "items": [
                {
                    "id": "r1",
                    "author": "Sarah Jenkins",
                    "rating": 5,
                    "date": "3 days ago",
                    "comment": f"Called {name} for an emergency repair. They arrived in 20 minutes and fixed it cleanly. Outstanding local service!",
                    "serviceUsed": services[0]["name"],
                    "verified": True
                },
                {
                    "id": "r2",
                    "author": "Robert Miller",
                    "rating": 5,
                    "date": "2 weeks ago",
                    "comment": f"Honest upfront pricing with zero pressure. Highly recommend {name} for anyone in {city}!",
                    "serviceUsed": services[1]["name"],
                    "verified": True
                }
            ]
        },
        "faqs": [
            {
                "question": f"Do you provide emergency service in {city} on weekends?",
                "answer": "Yes! We operate 24 hours a day, 7 days a week including holidays."
            },
            {
                "question": "Are your technicians state-licensed and insured?",
                "answer": "Every technician on our team is fully licensed, insured, and background-checked for your peace of mind."
            }
        ]
    }

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(script_dir, "north_texas_leads.json")
    target_ts = os.path.join(os.path.dirname(script_dir), "src", "config", "clients.ts")

    with open(input_file, "r", encoding="utf-8") as f:
        leads = json.load(f)

    client_registry = {}
    for lead in leads:
        cfg = create_client_config(
            lead["business_name"],
            lead["niche"],
            lead["city"].split(",")[0].strip(),
            "TX",
            lead["phone"],
            lead.get("email", ""),
            lead.get("url", "").replace("http://", "").replace("https://", "").replace("/", "")
        )
        client_registry[cfg["slug"]] = cfg

    ts_content = f"import type {{ SiteConfig }} from './site';\n\nexport const clientRegistry: Record<string, SiteConfig> = {json.dumps(client_registry, indent=2)};\n"


    with open(target_ts, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"[CLIENT REGISTRY] Built {len(client_registry)} client configurations in {target_ts}")

if __name__ == "__main__":
    main()
