import json
from pathlib import Path
import subprocess

WORKSPACE = Path(__file__).resolve().parent.parent

# 1. Truncate src/config/clients.ts back to Batches 1-3
clients_file = WORKSPACE / "src" / "config" / "clients.ts"
lines = clients_file.read_text(encoding="utf-8").splitlines(keepends=True)

# Find where "dna-plumbing-frisco" starts
cut_idx = -1
for i, l in enumerate(lines):
    if '"dna-plumbing-frisco":' in l:
        cut_idx = i
        break

if cut_idx != -1:
    print(f"Truncating clients.ts at line {cut_idx + 1}")
    new_content = "".join(lines[:cut_idx]).rstrip() + "\n};\n"
    clients_file.write_text(new_content, encoding="utf-8")
    print("clients.ts reset to batch 3 clean state.")

# 2. Reset docs/data/texas_leads.json to leads 1-60
leads_file = WORKSPACE / "docs" / "data" / "texas_leads.json"
leads = json.loads(leads_file.read_text(encoding="utf-8"))
leads_60 = [l for l in leads if l["id"] <= 60]
leads_file.write_text(json.dumps(leads_60, indent=2), encoding="utf-8")
print(f"texas_leads.json reset to {len(leads_60)} leads.")

# 3. Run build_batch4.py to cleanly re-populate everything
import build_batch4
build_batch4.update_clients_file()
build_batch4.update_leads_json()
build_batch4.generate_campaign_doc()
print("All batch 4 data re-populated cleanly.")
