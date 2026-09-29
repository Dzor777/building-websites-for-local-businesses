import json
import os
from scout_texas_leads import audit_website, build_email_pitch

# Remove old sunset campaign file if present
old_file = 'docs/north_texas_outreach_campaign.md'
if os.path.exists(old_file):
    os.remove(old_file)
    print(f'Sunsetted {old_file}')

with open('docs/data/texas_leads.json', 'r', encoding='utf-8') as f:
    leads = json.load(f)

lines = []
lines.append(f'# Cold Email Campaign: {len(leads)} Verified Texas Prospects Across 10 Major Cities (Categorized & Audited)\n')
lines.append(f'This document contains {len(leads)} personalized, ready-to-send cold email pitches for verified local service businesses across Texas cities (Frisco, Plano, Dallas, Fort Worth, Austin, Houston, San Antonio, McKinney, Anna, Melissa), categorized by Category #1 (Technical Bug Fix) and Category #2 (Conversion & Quote Calculator Upgrade), signed by Dylan Roth.\n')
lines.append('> **Honest Opening Strategy:** All emails introduce you as a local Texas web developer. This ensures 100% honesty and positions you as a local technical authority.')
lines.append('> **GitHub Pages Live Links:** Pre-configured to point to your live GitHub Pages URL: `https://dzor777.github.io/building-websites-for-local-businesses/?client=[slug]`.\n')
lines.append('---\n')
lines.append(f'## 🏙️ TEXAS TARGET PROSPECTS (1 - {len(leads)})\n')

for i, lead in enumerate(leads, 1):
    category, issues = audit_website(lead['url'])
    pitch = build_email_pitch(lead, category, issues)
    lead['id'] = i
    lines.append(f'### {i}. {lead["business_name"]}')
    lines.append(pitch['header'].replace(f'### {lead["business_name"]}\n', ''))
    lines.append(pitch['body'])
    lines.append('\n---\n')

with open('docs/data/texas_leads.json', 'w', encoding='utf-8') as f:
    json.dump(leads, f, indent=2)

new_file = 'docs/texas_outreach_campaign.md'
with open(new_file, 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(lines))

print(f'Successfully updated docs/data/texas_leads.json and restored {new_file} with all {len(leads)} target prospects!')



