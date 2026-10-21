import json
from pathlib import Path

workspace = Path(r"c:\Users\Dylan\.gemini\antigravity-ide\scratch\building-websites-for-local-businesses")
leads_file = workspace / "docs" / "data" / "texas_leads.json"

with open(leads_file, "r", encoding="utf-8") as f:
    leads = json.load(f)

for lead in leads:
    if lead["id"] <= 80:
        lead["status"] = "Needs Follow-up"
    else:
        lead["status"] = "Ready to Send"

with open(leads_file, "w", encoding="utf-8") as f:
    json.dump(leads, f, indent=2)

print(f"Updated {len(leads)} leads in texas_leads.json: #1-80 marked as 'Needs Follow-up', #81-120 marked as 'Ready to Send'.")
