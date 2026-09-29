# Dylan Roth Web Services LLC — Websites-as-a-Service (WaaS) Platform

High-performance, glassmorphic React + TypeScript + Vite web platform and cold outreach pipeline tailored for local service businesses across Texas (Plumbing, HVAC, Roofing).

---

## 📚 Master Documentation Architecture (`docs/`)

- **[docs/OUTREACH_PLAYBOOK.md](file:///c:/Users/Dylan/.gemini/antigravity-ide/scratch/building-websites-for-local-businesses/docs/OUTREACH_PLAYBOOK.md)** — Cold email templates, 4-step sequence schedule, Loom video audit scripts, cold SMS, and objection handling.
- **[docs/SALES_AND_LEGAL.md](file:///c:/Users/Dylan/.gemini/antigravity-ide/scratch/building-websites-for-local-businesses/docs/SALES_AND_LEGAL.md)** — Pricing tiers ($150–$600/mo), master 1-page agreement templates, sales cheat sheet, and TOS sync rules.
- **[docs/OPERATIONS_AND_ONBOARDING.md](file:///c:/Users/Dylan/.gemini/antigravity-ide/scratch/building-websites-for-local-businesses/docs/OPERATIONS_AND_ONBOARDING.md)** — 4-step client onboarding SOP, Stripe checkout setup, Vercel free hosting deployment, DNS cutover steps, and bi-monthly update workflow.
- **[docs/campaigns/](file:///c:/Users/Dylan/.gemini/antigravity-ide/scratch/building-websites-for-local-businesses/docs/campaigns/)** — Outreach email campaigns organized into clean 20-lead batch markdown files (e.g., [batch_01_texas_top20.md](file:///c:/Users/Dylan/.gemini/antigravity-ide/scratch/building-websites-for-local-businesses/docs/campaigns/batch_01_texas_top20.md)).
- **[docs/ideas_to_be_implemented/](file:///c:/Users/Dylan/.gemini/antigravity-ide/scratch/building-websites-for-local-businesses/docs/ideas_to_be_implemented/IDEAS_TO_BE_IMPLEMENTED.md)** — Ideas, draft emails, and features to be set up as the platform scales.
- **[docs/data/texas_leads.json](file:///c:/Users/Dylan/.gemini/antigravity-ide/scratch/building-websites-for-local-businesses/docs/data/texas_leads.json)** — Canonical lead database for verified Texas prospects.


---

## 🛠️ Prospect Lead Viewer CLI (`scripts/view_leads.py`)

Manage and inspect prospect leads directly in your terminal:

```bash
# List all prospect leads in a clean summary table
python scripts/view_leads.py --list

# Filter prospect leads by batch number (e.g., Batch #1)
python scripts/view_leads.py --batch 1

# View full details, audit category, and ready-to-send cold email pitch for Lead #1
python scripts/view_leads.py --id 1

# Search leads by city, trade, or business name
python scripts/view_leads.py --search "McKinney"

# Update outreach status for Lead #1
python scripts/view_leads.py --status 1 "Sent"

# Enforce 100% verified phone/email/domain integrity before any campaign send
python scripts/verify_leads_contact.py
```



