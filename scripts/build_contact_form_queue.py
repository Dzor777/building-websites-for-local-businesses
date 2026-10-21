import os
import re
import json
from datetime import datetime, timedelta

workspace_dir = r"c:\Users\Dylan\.gemini\antigravity-ide\scratch\building-websites-for-local-businesses"
campaigns_dir = os.path.join(workspace_dir, "docs", "campaigns")

batch_files = [
    os.path.join(campaigns_dir, "batch_01_texas_top20.md"),
    os.path.join(campaigns_dir, "batch_02_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_03_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_04_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_05_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_06_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_07_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_08_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_09_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_10_texas_20prospects.md"),
]

# Trade demo slug mapping for dynamic preview URLs
TRADE_SLUGS = {
    "Plumbing & Drain Services": "plumbing",
    "Roofing & Restoration": "roofing",
    "HVAC & Air Conditioning": "hvac",
    "Electrical Services": "electrical",
    "Painting & Finishes": "painting",
    "Lawn Care & Landscaping": "lawncare",
    "Tree Service & Removal": "tree-cutting",
    "Pressure Washing & Exterior Cleaning": "pressure-washing"
}

prospects = []

for file_path in batch_files:
    if not os.path.exists(file_path):
        print(f"Warning: {file_path} not found")
        continue

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Split by ### <num>.
    sections = re.split(r'\n###\s+(\d+)\.\s+', content)
    for i in range(1, len(sections), 2):
        num_str = sections[i].strip()
        body = sections[i+1]
        
        # First line of body is name
        lines = body.strip().split("\n")
        name = lines[0].strip()
        
        # Extract metadata line
        meta_match = re.search(r'\*\s+\*\*Category:\*\*.*', body)
        meta_line = meta_match.group(0) if meta_match else ""
        
        # Website
        web_match = re.search(r'\*\*Current Website:\*\*\s+\[([^\]]+)\]\(([^)]+)\)', meta_line)
        if not web_match:
            web_match = re.search(r'\*\*Current Website:\*\*\s+([^\s\|]+)', meta_line)
            website = web_match.group(1) if web_match else ""
        else:
            website = web_match.group(2)
            
        website = website.strip('`').strip()
        if website and not website.startswith("http"):
            website = "https://" + website
            
        # Email
        email_match = re.search(r'\*\*To Email:\*\*\s+`?([^`\|\s]+)`?', meta_line)
        email = email_match.group(1) if email_match else ""
        
        # Phone
        phone_match = re.search(r'\*\*Phone:\*\*\s+([^\s\|]+(?:\s+[^\s\|]+)*)', meta_line)
        phone = phone_match.group(1).strip() if phone_match else ""
        
        # City
        city_match = re.search(r'\*\*City:\*\*\s+([^\|]+)', meta_line)
        city_full = city_match.group(1).strip() if city_match else ""
        city = city_full.replace(", TX", "").strip()
        
        # Category
        cat_match = re.search(r'\*\*Category:\*\*\s+([^\|]+)', meta_line)
        category = cat_match.group(1).strip() if cat_match else "Category #1 (Technical & Mobile Fixes)"
        
        # Trade determination
        trade = "Plumbing & Drain Services"
        lower_body = (name + " " + meta_line).lower()
        if "pressure wash" in lower_body or "exterior clean" in lower_body or "soft wash" in lower_body:
            trade = "Pressure Washing & Exterior Cleaning"
        elif "tree" in lower_body:
            trade = "Tree Service & Removal"
        elif "lawn" in lower_body or "landscape" in lower_body or "turf" in lower_body:
            trade = "Lawn Care & Landscaping"
        elif "paint" in lower_body:
            trade = "Painting & Finishes"
        elif "electric" in lower_body:
            trade = "Electrical Services"
        elif "hvac" in lower_body or "air conditioning" in lower_body or "heating" in lower_body or "cool" in lower_body:
            trade = "HVAC & Air Conditioning"
        elif "roof" in lower_body:
            trade = "Roofing & Restoration"
        elif "plumb" in lower_body or "drain" in lower_body:
            trade = "Plumbing & Drain Services"

        # Client slug & Preview URL
        client_slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        pid = int(num_str)
        if pid <= 80:
            preview_url = f"https://dzor777.github.io/building-websites-for-local-businesses/?client={client_slug}"
        else:
            demo_slug = TRADE_SLUGS.get(trade, "hvac")
            import urllib.parse
            preview_url = f"https://dzor777.github.io/building-websites-for-local-businesses/?demo={demo_slug}&name={urllib.parse.quote_plus(name)}&city={urllib.parse.quote_plus(city)}&phone={urllib.parse.quote_plus(phone)}"

        # Contact URL fallback
        contact_url = website.rstrip('/') + "/contact" if website else ""

        # Rotational cycle key for variations (A, B, C)
        cycle_key = ["A", "B", "C"][(pid - 1) % 3]

        # 1. MESSAGE #1 (Initial Outreach - LINKLESS)
        msg1_variations = {
            "A": (
                f"Hi {name},\n\n"
                f"I was checking your website on my phone and noticed the call button and layout get cut off on mobile screens.\n\n"
                f"I'm a local Texas web specialist and put together an interactive mobile demo for your company that includes a 1-tap call button and an instant estimate calculator.\n\n"
                f"Would it be alright if I sent you a quick link so you can take a look on your phone? Feel free to email me at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
                f"Thank you,\n"
                f"Dylan Roth"
            ),
            "B": (
                f"Hi {name},\n\n"
                f"I came across your business while looking up local {trade.lower()} in {city}. I pulled up your site on my iPhone and noticed it takes several steps to navigate on mobile.\n\n"
                f"I put together an interactive mobile prototype customized for {name} with a built-in instant price estimator for homeowners.\n\n"
                f"Would you be open to checking out a quick preview link on your phone? You can email roth.dylan777@gmail.com or text (903) 287-0299.\n\n"
                f"Best regards,\n"
                f"Dylan Roth"
            ),
            "C": (
                f"Hi {name},\n\n"
                f"I specialize in high-converting mobile sites for Texas trade contractors and put together a modern redesign concept specifically for {name}.\n\n"
                f"It features upfront emergency pricing, service area highlights for {city}, and a 1-tap emergency dispatch button.\n\n"
                f"Let me know if you'd like me to send the demo link over to take a look. You can text me at (903) 287-0299 or email roth.dylan777@gmail.com.\n\n"
                f"Thanks,\n"
                f"Dylan Roth"
            )
        }
        msg1 = msg1_variations[cycle_key]

        # 2. MESSAGE #2 (Day 5 Follow-Up Bump - LINKLESS)
        msg2_variations = {
            "A": (
                f"Hi {name},\n\n"
                f"Just following up on my note from a few days ago—would it be alright if I sent over that mobile site preview link for you to check out on your phone?\n\n"
                f"Feel free to email me at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
                f"Thanks,\n"
                f"Dylan Roth"
            ),
            "B": (
                f"Hi {name},\n\n"
                f"Quick check-in—wanted to see if you had a moment to check out the mobile site preview with the instant quote calculator I put together for {name}?\n\n"
                f"Happy to send over the link if you'd like to take a look. You can email roth.dylan777@gmail.com or text (903) 287-0299.\n\n"
                f"Best,\n"
                f"Dylan Roth"
            ),
            "C": (
                f"Hi {name},\n\n"
                f"I know you're busy running jobs, so I wanted to make sure my previous note didn't get buried.\n\n"
                f"Would it be alright if I sent over the mobile redesign demo I put together for {name}? Feel free to text me at (903) 287-0299 or email roth.dylan777@gmail.com.\n\n"
                f"Thanks,\n"
                f"Dylan Roth"
            )
        }
        msg2 = msg2_variations[cycle_key]

        # 3. MESSAGE #3 (Value Delivery / Reply Ready With Personalized Demo Link)
        msg3 = (
            f"Hi {name},\n\n"
            f"Appreciate you getting back to me! Here is the interactive mobile preview I put together for {name}:\n\n"
            f"{preview_url}\n\n"
            f"Take a look on your phone if you can. The biggest feature is the interactive quote calculator halfway down the page. Instead of homeowners leaving your site when you don't answer right away, they can estimate their project and submit their details directly to your phone.\n\n"
            f"We keep pricing completely flat with zero long-term contracts (6-month initial term, then month-to-month):\n"
            f"- Basic Plan: $450 Total ($300 upfront setup + $150/mo). Clean mobile website, fast hosting, and ongoing updates.\n"
            f"- Standard Plan (Most Popular): $800 Total ($500 upfront setup + $300/mo). Includes the interactive quote calculator and instant SMS lead alerts straight to your cell.\n"
            f"- Enterprise Plan: $1,600 Total ($1,000 upfront setup + $600/mo). Full lead acquisition system for multi-crew companies, including custom CRM/booking integrations, multi-city service pages, and priority monthly updates.\n\n"
            f"If you'd like to put this live under your domain, I can have it ready in 24 to 48 hours. Feel free to shoot me an email at roth.dylan777@gmail.com or text me directly at (903) 287-0299.\n\n"
            f"Thank you,\n"
            f"Dylan"
        )

        prospects.append({
            "id": pid,
            "batch": (pid - 1) // 20 + 1,
            "name": name,
            "website": website,
            "contact_url": contact_url,
            "city": city,
            "state": "TX",
            "phone": phone,
            "email": email,
            "trade": trade,
            "category": category,
            "client_slug": client_slug,
            "preview_url": preview_url,
            "message_1": msg1,
            "message_2": msg2,
            "message_3": msg3,
            "variation_key": cycle_key
        })

# Sort by ID
prospects.sort(key=lambda x: x["id"])
print(f"Parsed and configured {len(prospects)} prospects.")

# Save JSON Queue
json_out = os.path.join(campaigns_dir, "contact_forms_80_queue.json")
with open(json_out, "w", encoding="utf-8") as f:
    json.dump(prospects, f, indent=2)
print(f"Saved JSON queue to {json_out}")

# Save Markdown Master Queue
md_out = os.path.join(campaigns_dir, "contact_forms_80_queue.md")
with open(md_out, "w", encoding="utf-8") as f:
    f.write("# Master Contact Form Outreach Queue (120 Texas Trade Prospects)\n\n")
    f.write("This document contains all 120 verified Texas contractor prospects formatted for **Website Contact Form Submissions** with:\n")
    f.write("- **Message #1:** Initial Outreach (0 Links)\n")
    f.write("- **Message #2:** Day 5 Follow-Up Bump (0 Links)\n")
    f.write("- **Message #3:** Value Delivery / Ready for Reply (With Demo Link & Flat Pricing)\n\n")
    f.write("---\n\n")
    for p in prospects:
        f.write(f"### {p['id']}. {p['name']}\n\n")
        f.write(f"- **Trade:** {p['trade']} | **City:** {p['city']}, TX | **Phone:** {p['phone']} | **Batch:** #{p['batch']}\n")
        f.write(f"- **Website:** [{p['website']}]({p['website']})\n")
        f.write(f"- **Contact Form:** [{p['contact_url']}]({p['contact_url']})\n")
        f.write(f"- **Interactive Demo:** [{p['preview_url']}]({p['preview_url']})\n\n")
        f.write("**Message #1 (Initial Outreach — Linkless):**\n")
        f.write("```text\n")
        f.write(p['message_1'] + "\n")
        f.write("```\n\n")
        f.write("**Message #2 (Day 5 Follow-Up Bump — Linkless):**\n")
        f.write("```text\n")
        f.write(p['message_2'] + "\n")
        f.write("```\n\n")
        f.write("**Message #3 (Reply / Value Delivery With Link):**\n")
        f.write("```text\n")
        f.write(p['message_3'] + "\n")
        f.write("```\n\n")
        f.write("---\n\n")

print(f"Saved Markdown queue to {md_out}")

# Update Batch Campaign Markdown Files (Batches 1-10) with the 3 messages
for batch_idx in range(1, 11):
    b_prospects = [p for p in prospects if p["batch"] == batch_idx]
    if not b_prospects:
        continue
    
    fname = f"batch_0{batch_idx}_texas_top20.md" if batch_idx == 1 else (f"batch_0{batch_idx}_texas_20prospects.md" if batch_idx < 10 else f"batch_{batch_idx}_texas_20prospects.md")
    b_file = os.path.join(campaigns_dir, fname)
    
    batch_title = {
        1: "McKinney, Frisco & North Dallas Metro",
        2: "Houston & Gulf Coast Trade Specialists",
        3: "Central Texas & DFW Metroplex",
        4: "North Texas & DFW Trade Contractors",
        5: "Dallas-Fort Worth Metroplex (Verified Leads)",
        6: "Austin & San Antonio Corridor (Verified Leads)",
        7: "Houston Metro Trade Specialists (Part 1)",
        8: "Houston Metro Trade Specialists (Part 2)",
        9: "North Texas Metro (Plano, Frisco, McKinney)",
        10: "North Texas & San Antonio Mix"
    }.get(batch_idx, f"Batch #{batch_idx}")

    lines = [
        f"# Contact Form Outreach (Batch #{batch_idx}): 20 Verified Texas Trade Prospects",
        "",
        f"This document contains 20 verified local trade service contractors for **{batch_title}**.",
        "",
        "> **Outreach Protocol Notes:**",
        "> - **Message #1 (Initial Contact - LINKLESS):** Prevents spam filters from blocking or flagging contact form submissions.",
        "> - **Message #2 (Day 5 Follow-Up Bump - LINKLESS):** Gentle 1-sentence bump sent 5 days later to re-engage warm leads.",
        "> - **Message #3 (Reply Ready - WITH LINK):** Delivers the interactive website preview dynamically customized with their name, trade, and phone.",
        "> - **Personalization:** Each greeting begins directly with the company name (NO 'team').",
        "> - **Clear Text Signoff:** Directs contractors to text `(903) 287-0299` or email `roth.dylan777@gmail.com`.",
        "",
        "---",
        ""
    ]

    for p in b_prospects:
        status_text = "📅 Needs Follow-up (5-Day Bump Active)" if p["id"] <= 80 else "⏳ Ready to Send"
        lines.append(f"### {p['id']}. {p['name']}")
        lines.append("")
        lines.append(f"* **Category:** {p['category']} | **Current Website:** [{p['website']}]({p['website']}) | **To Email:** `{p['email']}` | **Phone:** {p['phone']} | **City:** {p['city']}, TX | **Status:** {status_text}")
        lines.append("")
        lines.append("**Message #1 (Initial Outreach — Linkless):**")
        lines.append("```text")
        lines.append(p["message_1"])
        lines.append("```")
        lines.append("")
        lines.append("**Message #2 (Day 5 Follow-Up Bump — Linkless):**")
        lines.append("```text")
        lines.append(p["message_2"])
        lines.append("```")
        lines.append("")
        lines.append("**Message #3 (Value Delivery / Reply With Link):**")
        lines.append("```text")
        lines.append(p["message_3"])
        lines.append("```")
        lines.append("")
        lines.append("---")
        lines.append("")

    with open(b_file, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Updated campaign document {fname}")

# Build Standalone Interactive HTML Dispatcher Dashboard
html_out = os.path.join(workspace_dir, "docs", "contact_form_dispatcher.html")
prospects_json_str = json.dumps(prospects)

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Texas Contractor Contact Form Dispatcher (120 Leads)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Custom Scrollbar & Toast animation */
    ::-webkit-scrollbar {{ width: 8px; }}
    ::-webkit-scrollbar-track {{ background: #0f172a; }}
    ::-webkit-scrollbar-thumb {{ background: #334155; border-radius: 4px; }}
    ::-webkit-scrollbar-thumb:hover {{ background: #475569; }}
    .toast {{
      animation: fadeInOut 2.5s ease-in-out forwards;
    }}
    @keyframes fadeInOut {{
      0% {{ opacity: 0; transform: translateY(10px); }}
      15% {{ opacity: 1; transform: translateY(0); }}
      85% {{ opacity: 1; transform: translateY(0); }}
      100% {{ opacity: 0; transform: translateY(-10px); }}
    }}
    .pulse-amber {{
      box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7);
      animation: pulseAmber 2s infinite;
    }}
    @keyframes pulseAmber {{
      0% {{ box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7); }}
      70% {{ box-shadow: 0 0 0 10px rgba(245, 158, 11, 0); }}
      100% {{ box-shadow: 0 0 0 0 rgba(245, 158, 11, 0); }}
    }}
    .pulse-red {{
      box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
      animation: pulseRed 1.8s infinite;
    }}
    @keyframes pulseRed {{
      0% {{ box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }}
      70% {{ box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }}
      100% {{ box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }}
    }}
  </style>
</head>
<body class="bg-[#0b1120] text-slate-100 min-h-screen font-sans pb-28">

  <!-- Fixed Top Header & Progress Bar -->
  <header class="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 shadow-xl px-4 py-3 sm:px-8">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold text-xs uppercase tracking-wider border border-sky-500/30">
            Outreach Dispatcher
          </span>
          <h1 class="text-lg sm:text-xl font-black text-white">Texas Contractor Outreach (200 Leads)</h1>
        </div>
        <p class="text-xs text-slate-400 mt-0.5">3-Message Pipeline • Auto 5-Day Bump Tracker • Multi-Select Bulk Actions</p>
      </div>

      <!-- Quick Progress Bar & Counters -->
      <div class="flex flex-wrap items-center gap-4 sm:gap-6">
        <!-- Interactive Due Today Badge -->
        <button onclick="filterDueToday()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 transition-all cursor-pointer">
          <span class="text-sm">🔥</span>
          <div class="text-left">
            <div class="text-[10px] uppercase font-bold tracking-wider text-amber-400/80 leading-none">Due Today</div>
            <div class="text-xs font-black text-amber-300"><span id="due-today-count">0</span> Leads</div>
          </div>
        </button>

        <!-- Progress Summary -->
        <div class="text-right">
          <div class="text-xs font-bold text-slate-300">
            <span id="sent-count" class="text-emerald-400 font-extrabold text-base">0</span> / <span id="total-count">{len(prospects)}</span> Active
          </div>
          <div class="w-32 sm:w-36 h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
            <div id="progress-bar" class="h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="resetToDefaultCampaignSplit()" title="Set #1-80 to Needs Follow-up & #81-200 to Ready to Send" class="text-[11px] px-2.5 py-1 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-bold border border-sky-500/40 transition-colors">
            🔄 Preset: 1-80 Follow-up / 81-200 Ready
          </button>
          <button onclick="exportProgressJSON()" title="Download JSON backup" class="text-[11px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700">
            Backup
          </button>
          <button onclick="resetAllProgress()" class="text-[11px] text-slate-500 hover:text-slate-300 underline">
            Reset
          </button>
        </div>
      </div>
    </div>

    <!-- Filter & Search Controls Bar -->
    <div class="max-w-7xl mx-auto mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap items-center gap-2.5">
        <!-- Batch Filter Dropdown -->
        <div class="flex items-center gap-1.5">
          <label for="batch-select" class="text-xs font-semibold text-slate-400">Batch:</label>
          <select id="batch-select" onchange="setBatchFilter(this.value)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-sky-500/60 text-xs font-bold text-sky-400 focus:outline-none focus:border-sky-500 transition-all cursor-pointer">
            <option value="all">All Batches (1–10 · 200 Total)</option>
            <option value="1">Batch 1: #1–20 (McKinney & Austin)</option>
            <option value="2">Batch 2: #21–40 (Houston & Gulf Coast)</option>
            <option value="3">Batch 3: #41–60 (Central TX & DFW)</option>
            <option value="4">Batch 4: #61–80 (North Texas & DFW)</option>
            <option value="5">Batch 5: #81–100 (DFW Metroplex)</option>
            <option value="6">Batch 6: #101–120 (Austin & San Antonio)</option>
            <option value="7">Batch 7: #121–140 (Houston Metro Part 1)</option>
            <option value="8">Batch 8: #141–160 (Houston Metro Part 2)</option>
            <option value="9">Batch 9: #161–180 (Plano, Frisco, McKinney)</option>
            <option value="10">Batch 10: #181–200 (North Texas & San Antonio)</option>
          </select>
        </div>

        <!-- Trade Filter Dropdown -->
        <div class="flex items-center gap-1.5">
          <label for="trade-select" class="text-xs font-semibold text-slate-400">Trade:</label>
          <select id="trade-select" onchange="renderCards()" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs font-medium text-slate-200 focus:outline-none focus:border-sky-500 transition-all cursor-pointer">
            <option value="all">All Trades (8 Total)</option>
            <option value="pressure">Pressure Washing & SoftWash</option>
            <option value="tree">Tree Service & Removal</option>
            <option value="lawn">Lawn Care & Landscaping</option>
            <option value="roof">Roofing & Restoration</option>
            <option value="hvac">HVAC & Air Conditioning</option>
            <option value="plumb">Plumbing & Drain Services</option>
            <option value="electr">Electrical Services</option>
            <option value="paint">Painting & Finishes</option>
          </select>
        </div>

        <!-- Status Filter Dropdown -->
        <div class="flex items-center gap-1.5">
          <label for="status-filter" class="text-xs font-semibold text-slate-400">Status:</label>
          <select id="status-filter" onchange="renderCards()" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-amber-300 focus:outline-none focus:border-sky-500 cursor-pointer">
            <option value="all">All Statuses</option>
            <option value="due_today">🔥 Due Today / Overdue</option>
            <option value="needs_followup">📅 Needs Follow-up (Active)</option>
            <option value="pending">⏳ Ready to Send (Initial)</option>
            <option value="sent_followup">🚀 Follow-up Sent</option>
            <option value="done">✅ Done / Closed</option>
            <option value="dead_lead">⛔ Dead Lead / Unreachable</option>
          </select>
        </div>
      </div>

      <!-- Search Box & Select All in View -->
      <div class="flex items-center gap-3">
        <label class="flex items-center gap-1.5 text-xs text-slate-300 font-semibold cursor-pointer select-none bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-700 hover:border-slate-600">
          <input type="checkbox" id="select-all-checkbox" onchange="toggleSelectAll(this.checked)" class="rounded bg-slate-800 border-slate-700 text-sky-500 focus:ring-0 cursor-pointer">
          <span>Select All Visible</span>
        </label>
        
        <input 
          type="text" 
          id="search-input" 
          oninput="renderCards()" 
          placeholder="Search name, city, trade..." 
          class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 w-44 sm:w-60 focus:outline-none focus:border-sky-500"
        />
      </div>
    </div>
  </header>

  <!-- Global Fast Info & Credentials Bar -->
  <div class="max-w-7xl mx-auto px-4 sm:px-8 mt-4">
    <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between text-xs gap-3">
      <div class="flex flex-wrap items-center gap-2 text-slate-300">
        <span class="text-amber-400 font-bold">1-Click Credentials:</span>
        <button onclick="copyText('Dylan Roth', 'Name copied!')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700">Copy Name: Dylan Roth</button>
        <button onclick="copyText('roth.dylan777@gmail.com', 'Email copied!')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 font-medium border border-slate-700">Copy Email: roth.dylan777@gmail.com</button>
        <button onclick="copyText('(903) 287-0299', 'Phone copied!')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 font-medium border border-slate-700">Copy Phone: (903) 287-0299</button>
      </div>
      <div class="text-slate-400 text-[11px]">
        💡 Marking <strong>Needs Follow-up</strong> sets a 5-day timer and automatically prepares <strong>Message 2</strong>.
      </div>
    </div>
  </div>

  <!-- Main Card Grid -->
  <main class="max-w-7xl mx-auto px-4 sm:px-8 py-6">
    <div id="cards-container" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Cards dynamically rendered here -->
    </div>
  </main>

  <!-- Sticky Bottom Multi-Select Bulk Actions Toolbar -->
  <div id="bulk-toolbar" class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#0f172a]/95 border border-sky-500/50 shadow-2xl rounded-2xl px-5 py-3 flex flex-wrap items-center gap-3 backdrop-blur-md transition-all duration-300 transform translate-y-32 opacity-0 pointer-events-none">
    <div class="flex items-center gap-2 pr-3 border-r border-slate-700 text-xs font-bold text-white">
      <span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
      <span id="selected-count-badge" class="text-sky-400">0</span> Selected
    </div>

    <div class="flex flex-wrap items-center gap-2 text-xs">
      <button onclick="bulkSetStatus('needs_followup')" class="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-black shadow-md transition-all hover:scale-105">
        📅 Mark Needs Follow-up (5-Day Timer)
      </button>
      <button onclick="bulkSetStatus('sent_followup')" class="px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-bold shadow transition-all hover:scale-105">
        🚀 Mark Follow-up Sent
      </button>
      <button onclick="bulkSetStatus('done')" class="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black shadow transition-all hover:scale-105">
        ✅ Mark Done
      </button>
      <button onclick="bulkSetStatus('dead_lead')" class="px-2.5 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-bold transition-all">
        ⛔ Dead Lead
      </button>
      <button onclick="bulkSetStatus('pending')" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-medium">
        ⏳ Reset to Ready
      </button>
      <button onclick="clearSelection()" class="text-slate-400 hover:text-white px-2 py-1 text-xs underline">
        Deselect All
      </button>
    </div>
  </div>

  <!-- Toast Notification Container -->
  <div id="toast-container" class="fixed bottom-6 right-6 z-50 pointer-events-none"></div>

  <!-- Data & Application Logic -->
  <script>
    const prospects = {prospects_json_str};
    let currentBatchFilter = 'all';
    let selectedIds = new Set();

    // Lead State Manager: reads/writes JSON state to localStorage
    // Structure: {{ status: string, sentDate: string, dueDate: string, activeMessage: number }}
    function getLeadState(id) {{
      const raw = localStorage.getItem('cf_lead_state_' + id);
      if (raw) {{
        try {{ return JSON.parse(raw); }} catch (e) {{}}
      }}
      // Backward compatibility check with old cf_status_
      const oldStatus = localStorage.getItem('cf_status_' + id);
      if (oldStatus) {{
        const initialStatus = oldStatus === 'sent' ? 'needs_followup' : (oldStatus === 'replied' ? 'done' : 'pending');
        const state = {{
          status: initialStatus,
          sentDate: initialStatus === 'needs_followup' ? new Date().toISOString().split('T')[0] : null,
          dueDate: initialStatus === 'needs_followup' ? calculateDueDate(new Date()) : null,
          activeMessage: initialStatus === 'needs_followup' ? 2 : (initialStatus === 'done' ? 3 : 1)
        }};
        saveLeadState(id, state);
        return state;
      }}

      return {{
        status: 'pending',
        sentDate: null,
        dueDate: null,
        activeMessage: 1
      }};
    }}

    function saveLeadState(id, state) {{
      localStorage.setItem('cf_lead_state_' + id, JSON.stringify(state));
      // Keep old key synced for backup
      localStorage.setItem('cf_status_' + id, state.status);
    }}

    function calculateDueDate(fromDate, days = 5) {{
      const d = new Date(fromDate);
      d.setDate(d.getDate() + days);
      return d.toISOString().split('T')[0];
    }}

    function setLeadStatus(id, newStatus) {{
      const state = getLeadState(id);
      state.status = newStatus;
      const todayStr = new Date().toISOString().split('T')[0];

      if (newStatus === 'needs_followup') {{
        if (!state.sentDate) state.sentDate = todayStr;
        state.dueDate = calculateDueDate(state.sentDate, 5);
        // Automatically switch to Message 2 (Day 5 Follow-up Bump)
        state.activeMessage = 2;
        showToast('Marked #' + id + ' as Needs Follow-up (Due in 5 Days). Message 2 prepared!');
      }} else if (newStatus === 'sent_followup') {{
        // Follow-up was sent, switch to Message 3 so it's ready when they reply
        state.activeMessage = 3;
        showToast('Marked #' + id + ' Follow-up Sent. Message 3 (Demo Link) ready for their reply!');
      }} else if (newStatus === 'done') {{
        state.activeMessage = 3;
        showToast('Marked #' + id + ' as Done/Closed!');
      }} else if (newStatus === 'pending') {{
        state.sentDate = null;
        state.dueDate = null;
        state.activeMessage = 1;
      }}

      saveLeadState(id, state);
      updateCounters();
      renderCards();
    }}

    function setCardActiveMessage(id, msgNum) {{
      const state = getLeadState(id);
      state.activeMessage = Number(msgNum);
      saveLeadState(id, state);
      renderCards();
    }}

    // Multi-Select Handling
    function toggleSelect(id, checked) {{
      if (checked) {{
        selectedIds.add(id);
      }} else {{
        selectedIds.delete(id);
      }}
      updateBulkToolbar();
    }}

    function toggleSelectAll(checked) {{
      const visible = getFilteredProspects();
      visible.forEach(p => {{
        if (checked) selectedIds.add(p.id);
        else selectedIds.delete(p.id);
      }});
      updateBulkToolbar();
      renderCards();
    }}

    function clearSelection() {{
      selectedIds.clear();
      const masterCheckbox = document.getElementById('select-all-checkbox');
      if (masterCheckbox) masterCheckbox.checked = false;
      updateBulkToolbar();
      renderCards();
    }}

    function updateBulkToolbar() {{
      const bar = document.getElementById('bulk-toolbar');
      const badge = document.getElementById('selected-count-badge');
      if (badge) badge.innerText = selectedIds.size;

      if (selectedIds.size > 0) {{
        bar.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
        bar.classList.add('translate-y-0', 'opacity-100');
      }} else {{
        bar.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
        bar.classList.remove('translate-y-0', 'opacity-100');
      }}
    }}

    function bulkSetStatus(status) {{
      if (selectedIds.size === 0) return;
      const count = selectedIds.size;
      selectedIds.forEach(id => {{
        const state = getLeadState(id);
        state.status = status;
        const todayStr = new Date().toISOString().split('T')[0];

        if (status === 'needs_followup') {{
          state.sentDate = todayStr;
          state.dueDate = calculateDueDate(todayStr, 5);
          state.activeMessage = 2;
        }} else if (status === 'sent_followup') {{
          state.activeMessage = 3;
        }} else if (status === 'done') {{
          state.activeMessage = 3;
        }} else if (status === 'pending') {{
          state.sentDate = null;
          state.dueDate = null;
          state.activeMessage = 1;
        }}
        saveLeadState(id, state);
      }});

      showToast('Updated ' + count + ' leads to ' + status.replace('_', ' ') + '!');
      clearSelection();
      updateCounters();
      renderCards();
    }}

    function filterDueToday() {{
      const select = document.getElementById('status-filter');
      if (select) {{
        select.value = 'due_today';
        renderCards();
      }}
    }}

    function getDueDifferenceInDays(dueDateStr) {{
      if (!dueDateStr) return 999;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const [y, m, d] = dueDateStr.split('-').map(Number);
      const due = new Date(y, m - 1, d);
      due.setHours(0, 0, 0, 0);
      return Math.round((due - today) / (1000 * 60 * 60 * 24));
    }}

    function getFilteredProspects() {{
      const searchQuery = (document.getElementById('search-input').value || '').toLowerCase().trim();
      const statusFilter = document.getElementById('status-filter').value;
      const tradeSelect = document.getElementById('trade-select');
      const tradeFilter = tradeSelect ? tradeSelect.value : 'all';

      return prospects.filter(p => {{
        if (currentBatchFilter !== 'all' && p.batch !== Number(currentBatchFilter)) return false;
        
        const state = getLeadState(p.id);
        
        if (statusFilter === 'due_today') {{
          if (state.status !== 'needs_followup') return false;
          const diff = getDueDifferenceInDays(state.dueDate);
          if (diff > 0) return false; // Not due today or overdue
        }} else if (statusFilter !== 'all' && state.status !== statusFilter) {{
          return false;
        }}

        if (tradeFilter !== 'all' && !p.trade.toLowerCase().includes(tradeFilter.toLowerCase())) return false;
        
        if (searchQuery) {{
          const haystack = (p.name + ' ' + p.city + ' ' + p.trade).toLowerCase();
          if (!haystack.includes(searchQuery)) return false;
        }}
        return true;
      }});
    }}

    function updateCounters() {{
      let activeSent = 0;
      let dueTodayCount = 0;

      prospects.forEach(p => {{
        const state = getLeadState(p.id);
        if (state.status === 'needs_followup' || state.status === 'sent_followup' || state.status === 'done') {{
          activeSent++;
        }}
        if (state.status === 'needs_followup') {{
          const diff = getDueDifferenceInDays(state.dueDate);
          if (diff <= 0) dueTodayCount++;
        }}
      }});

      document.getElementById('sent-count').innerText = activeSent;
      const totalEl = document.getElementById('total-count');
      if (totalEl) totalEl.innerText = prospects.length;
      const pct = Math.round((activeSent / prospects.length) * 100);
      document.getElementById('progress-bar').style.width = pct + '%';
      
      const dueEl = document.getElementById('due-today-count');
      if (dueEl) dueEl.innerText = dueTodayCount;
    }}

    function copyText(text, successMsg) {{
      navigator.clipboard.writeText(text).then(() => {{
        showToast(successMsg || 'Copied to clipboard!');
      }});
    }}

    function showToast(msg) {{
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast bg-emerald-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-2xl text-xs mb-2 flex items-center gap-2 border border-emerald-400';
      toast.innerHTML = '<span>✓</span> <span>' + msg + '</span>';
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 2600);
    }}

    function resetAllProgress() {{
      if (confirm('Reset all lead statuses and follow-up timers back to Pending?')) {{
        prospects.forEach(p => {{
          localStorage.removeItem('cf_lead_state_' + p.id);
          localStorage.removeItem('cf_status_' + p.id);
        }});
        clearSelection();
        updateCounters();
        renderCards();
      }}
    }}

    function setBatchFilter(batch) {{
      currentBatchFilter = batch;
      const batchSelect = document.getElementById('batch-select');
      if (batchSelect && batchSelect.value !== String(batch)) {{
        batchSelect.value = String(batch);
      }}
      renderCards();
    }}

    function exportProgressJSON() {{
      const data = {{}};
      prospects.forEach(p => {{
        data[p.id] = getLeadState(p.id);
      }});
      const blob = new Blob([JSON.stringify(data, null, 2)], {{ type: 'application/json' }});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contractor_outreach_progress_' + new Date().toISOString().split('T')[0] + '.json';
      a.click();
      URL.revokeObjectURL(url);
      showToast('Exported outreach progress backup!');
    }}

    function renderCards() {{
      const container = document.getElementById('cards-container');
      const filtered = getFilteredProspects();

      container.innerHTML = '';

      if (filtered.length === 0) {{
        container.innerHTML = '<div class="col-span-2 text-center py-16 text-slate-500 text-sm">No prospects match the selected filter.</div>';
        return;
      }}

      filtered.forEach(p => {{
        const state = getLeadState(p.id);
        const status = state.status;
        const activeMsgNum = state.activeMessage || 1;
        const isSelected = selectedIds.has(p.id);

        let activeMsgText = p.message_1;
        let activeMsgBadge = 'Message #1 (Initial Outreach — Linkless)';
        if (activeMsgNum === 2) {{
          activeMsgText = p.message_2;
          activeMsgBadge = 'Message #2 (Day 5 Follow-Up Bump — Linkless)';
        }} else if (activeMsgNum === 3) {{
          activeMsgText = p.message_3;
          activeMsgBadge = 'Message #3 (Value Delivery / Demo Link Ready)';
        }}

        // Card Border and Background Styling based on status
        let cardBgClass = 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-lg';
        let badgeClass = 'bg-slate-800 text-slate-400 border-slate-700';
        let statusTitle = '⏳ Ready to Send';

        // Due date analysis
        let duePillHtml = '';
        if (status === 'needs_followup' && state.dueDate) {{
          const diff = getDueDifferenceInDays(state.dueDate);
          if (diff < 0) {{
            cardBgClass = 'bg-rose-950/20 border-rose-500/60 shadow-lg pulse-red';
            badgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
            statusTitle = '⚠️ Overdue';
            duePillHtml = `<span class="px-2 py-0.5 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[11px] font-bold">⚠️ Overdue by ${{Math.abs(diff)}}d (${{state.dueDate}})</span>`;
          }} else if (diff === 0) {{
            cardBgClass = 'bg-amber-950/20 border-amber-500/60 shadow-lg pulse-amber';
            badgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
            statusTitle = '🔥 Due Today';
            duePillHtml = `<span class="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/50 text-amber-300 text-[11px] font-black">🔥 Follow-up Due Today!</span>`;
          }} else {{
            cardBgClass = 'bg-sky-950/20 border-sky-500/40 shadow-lg';
            badgeClass = 'bg-sky-500/20 text-sky-300 border-sky-500/30';
            statusTitle = '📅 Needs Follow-up';
            duePillHtml = `<span class="px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[11px] font-semibold">📅 Due in ${{diff}}d (${{state.dueDate}})</span>`;
          }}
        }} else if (status === 'sent_followup') {{
          cardBgClass = 'bg-indigo-950/20 border-indigo-500/40 shadow-md';
          badgeClass = 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
          statusTitle = '🚀 Follow-up Sent';
          duePillHtml = `<span class="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 text-[11px]">Awaiting Owner Reply</span>`;
        }} else if (status === 'done') {{
          cardBgClass = 'bg-emerald-950/20 border-emerald-500/40 shadow-md';
          badgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
          statusTitle = '✅ Done';
        }} else if (status === 'dead_lead') {{
          cardBgClass = 'bg-slate-950/80 border-slate-800 opacity-60';
          badgeClass = 'bg-slate-800 text-slate-500 border-slate-700';
          statusTitle = '⛔ Dead Lead';
        }}

        const card = document.createElement('div');
        card.className = `p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${{cardBgClass}} ${{isSelected ? 'ring-2 ring-sky-500' : ''}}`;

        card.innerHTML = `
          <div>
            <!-- Top Card Action & Metadata Row -->
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex items-start gap-2.5">
                <input 
                  type="checkbox" 
                  ${{isSelected ? 'checked' : ''}} 
                  onchange="toggleSelect(${{p.id}}, this.checked)"
                  class="mt-1 w-4 h-4 rounded bg-slate-800 border-slate-700 text-sky-500 focus:ring-0 cursor-pointer"
                />
                <div>
                  <div class="flex flex-wrap items-center gap-1.5">
                    <span class="text-xs font-black text-sky-400">#${{p.id}}</span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full border ${{badgeClass}} uppercase font-bold">
                      ${{statusTitle}}
                    </span>
                    <span class="text-[10px] text-slate-500">Batch ${{p.batch}}</span>
                    ${{duePillHtml}}
                  </div>
                  <h3 class="text-base font-bold text-white mt-1">${{p.name}}</h3>
                  <div class="text-xs text-slate-400">${{p.trade}} • <strong class="text-slate-300">${{p.city}}, TX</strong></div>
                </div>
              </div>

              <!-- Individual Status Selector Dropdown -->
              <div class="text-right">
                <label class="text-[10px] text-slate-400 block mb-1">Status:</label>
                <select onchange="setLeadStatus(${{p.id}}, this.value)" class="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-sky-500 cursor-pointer">
                  <option value="pending" ${{status === 'pending' ? 'selected' : ''}}>⏳ Ready to Send</option>
                  <option value="needs_followup" ${{status === 'needs_followup' ? 'selected' : ''}}>📅 Needs Follow-up (5d)</option>
                  <option value="sent_followup" ${{status === 'sent_followup' ? 'selected' : ''}}>🚀 Follow-up Sent</option>
                  <option value="done" ${{status === 'done' ? 'selected' : ''}}>✅ Done / Closed</option>
                  <option value="dead_lead" ${{status === 'dead_lead' ? 'selected' : ''}}>⛔ Dead Lead</option>
                </select>
              </div>
            </div>

            <!-- Target Links -->
            <div class="mt-2 flex flex-wrap items-center gap-2 text-xs">
              <a href="${{p.contact_url || p.website}}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold shadow transition-all hover:scale-105">
                <span>↗ Open Contact Form</span>
              </a>
              <a href="${{p.website}}" target="_blank" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] border border-slate-700">
                Website
              </a>
              <a href="${{p.preview_url}}" target="_blank" class="px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-[11px] border border-amber-500/30">
                Demo Preview
              </a>
            </div>

            <!-- Message Dropdown & Active Copy Box -->
            <div class="mt-4 p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-800/80">
                <!-- Dropdown for Message 1, 2, 3 -->
                <div class="flex items-center gap-1.5">
                  <label class="text-[10px] uppercase font-bold text-slate-400">Message:</label>
                  <select onchange="setCardActiveMessage(${{p.id}}, this.value)" class="text-xs font-bold px-2 py-1 rounded bg-slate-900 border border-slate-700 text-sky-400 focus:outline-none focus:border-sky-500 cursor-pointer">
                    <option value="1" ${{activeMsgNum === 1 ? 'selected' : ''}}>Msg 1: Initial Outreach (Linkless)</option>
                    <option value="2" ${{activeMsgNum === 2 ? 'selected' : ''}}>Msg 2: Day 5 Follow-Up Bump (Linkless)</option>
                    <option value="3" ${{activeMsgNum === 3 ? 'selected' : ''}}>Msg 3: Value Delivery (With Link)</option>
                  </select>
                </div>

                <!-- 1-Click Copy Button for Active Message -->
                <button onclick="copyCurrentCardMessage(${{p.id}})" class="text-xs px-2.5 py-1 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-bold border border-sky-500/30 transition-colors flex items-center gap-1">
                  <span>📋</span> <span>Copy Msg ${{activeMsgNum}}</span>
                </button>
              </div>

              <!-- Formatted Active Message Content -->
              <div class="text-[10px] text-slate-400 font-semibold mb-1 flex items-center justify-between">
                <span>${{activeMsgBadge}}</span>
                <span class="text-slate-500 font-mono">Var: ${{p.variation_key}}</span>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed font-mono whitespace-pre-wrap select-all bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">${{activeMsgText}}</p>
            </div>
          </div>

          <!-- Bottom Card Footer Action -->
          <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div>Phone: <strong class="text-slate-300">${{p.phone || 'N/A'}}</strong></div>
            <div class="flex items-center gap-2">
              ${{
                status === 'pending'
                  ? `<button onclick="setLeadStatus(${{p.id}}, 'needs_followup')" class="px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold border border-emerald-500/40 text-[11px]">
                      ✓ Sent Msg 1 (Start 5d Timer)
                    </button>`
                  : status === 'needs_followup'
                  ? `<button onclick="setLeadStatus(${{p.id}}, 'sent_followup')" class="px-2.5 py-1 rounded bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-bold border border-indigo-500/40 text-[11px]">
                      ✓ Sent Msg 2 (Bump)
                    </button>`
                  : `<button onclick="setLeadStatus(${{p.id}}, 'pending')" class="text-slate-500 hover:text-slate-300 underline text-[11px]">
                      Reset
                    </button>`
              }}
            </div>
          </div>
        `;

        container.appendChild(card);
      }});
    }}

    function copyCurrentCardMessage(id) {{
      const state = getLeadState(id);
      const p = prospects.find(x => x.id === id);
      if (!p) return;
      
      const num = state.activeMessage || 1;
      let text = p.message_1;
      if (num === 2) text = p.message_2;
      else if (num === 3) text = p.message_3;

      copyText(text, 'Message #' + num + ' copied for #' + id + ' (' + p.name + ')!');
    }}

    function initDefaultLeadStates() {{
      const initKey = 'cf_split_v4_200leads';
      if (localStorage.getItem(initKey) !== 'true') {{
        prospects.forEach(p => {{
          if (p.id <= 80) {{
            const state = {{
              status: 'needs_followup',
              sentDate: '2026-10-19',
              dueDate: '2026-10-24',
              activeMessage: 2
            }};
            saveLeadState(p.id, state);
          }} else {{
            const state = {{
              status: 'pending',
              sentDate: null,
              dueDate: null,
              activeMessage: 1
            }};
            saveLeadState(p.id, state);
          }}
        }});
        localStorage.setItem(initKey, 'true');
      }}
    }}

    function resetToDefaultCampaignSplit() {{
      if (confirm('Set Leads #1-80 to Needs Follow-up (5-Day Bump Active) and #81-200 to Ready to Send?')) {{
        prospects.forEach(p => {{
          if (p.id <= 80) {{
            const state = {{
              status: 'needs_followup',
              sentDate: '2026-10-19',
              dueDate: '2026-10-24',
              activeMessage: 2
            }};
            saveLeadState(p.id, state);
          }} else {{
            const state = {{
              status: 'pending',
              sentDate: null,
              dueDate: null,
              activeMessage: 1
            }};
            saveLeadState(p.id, state);
          }}
        }});
        clearSelection();
        updateCounters();
        renderCards();
        showToast('Set #1-80 to Needs Follow-up & #81-200 to Ready to Send!');
      }}
    }}

    // Initialize on load
    initDefaultLeadStates();
    updateCounters();
    renderCards();
  </script>
</body>
</html>
"""

with open(html_out, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Generated Interactive Fast Dispatcher Dashboard at {html_out}")
