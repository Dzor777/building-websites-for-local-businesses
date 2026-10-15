import os
import re
import json

workspace_dir = r"c:\Users\Dylan\.gemini\antigravity-ide\scratch\building-websites-for-local-businesses"
campaigns_dir = os.path.join(workspace_dir, "docs", "campaigns")

batch_files = [
    os.path.join(campaigns_dir, "batch_01_texas_top20.md"),
    os.path.join(campaigns_dir, "batch_02_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_03_texas_20prospects.md"),
    os.path.join(campaigns_dir, "batch_04_texas_20prospects.md"),
]

prospects = []

for file_path in batch_files:
    if not os.path.exists(file_path):
        print(f"Warning: {file_path} not found")
        continue

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Split by ### <num>.
    sections = re.split(r'\n###\s+(\d+)\.\s+', content)
    # sections[0] is preamble, then alternating (num, body)
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
            
        # Clean website
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
        city = city_match.group(1).replace(", TX", "").replace("TX", "").strip() if city_match else "Texas"
        
        # Category
        cat_match = re.search(r'\*\*Category:\*\*\s+([^\|]+)', meta_line)
        category = cat_match.group(1).strip() if cat_match else ""
        
        # Preview URL & Client slug
        preview_match = re.search(r'https://dzor777\.github\.io/building-websites-for-local-businesses/\?client=([a-zA-Z0-9_\-]+)', body)
        if preview_match:
            client_slug = preview_match.group(1)
            preview_url = f"https://dzor777.github.io/building-websites-for-local-businesses/?client={client_slug}"
        else:
            # Fallback to trade demo search or generic
            client_slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
            preview_url = f"https://dzor777.github.io/building-websites-for-local-businesses/?client={client_slug}"
            
        # Trade determination
        trade_match = re.search(r'contractors in (?:[A-Za-z\s]+), I came across|specialists in (?:[A-Za-z\s]+), I ran across|technicians in (?:[A-Za-z\s]+), I came across', body)
        # Search for known trades in body or name
        trade = "Home Services"
        body_lower = (name + " " + body).lower()
        if "plumb" in body_lower or "drain" in body_lower:
            trade = "Plumbing & Drain Services"
        elif "roof" in body_lower:
            trade = "Roofing & Restoration"
        elif "hvac" in body_lower or "air condition" in body_lower or "heating" in body_lower:
            trade = "HVAC & Air Conditioning"
        elif "electric" in body_lower:
            trade = "Electrical Services"
        elif "paint" in body_lower:
            trade = "Painting & Finishes"
        elif "lawn" in body_lower or "landscap" in body_lower:
            trade = "Lawn Care & Landscaping"
        elif "tree" in body_lower:
            trade = "Tree Service & Removal"
        elif "pressure" in body_lower or "power wash" in body_lower:
            trade = "Pressure Washing & Exterior Cleaning"
        elif "remodel" in body_lower or "general contract" in body_lower:
            trade = "Remodeling & General Contracting"

        # Guess contact page URL
        clean_web = website.rstrip('/')
        contact_url = f"{clean_web}/contact" if clean_web else ""

        # Build Linkless Message 1 Variations (A, B, C)
        variations = {
            "A": (
                f"Hi {name} team,\n\n"
                f"I was checking your website on my phone and noticed the call button and layout get cut off on mobile screens.\n\n"
                f"I'm a local Texas web specialist and put together an interactive mobile demo for your company that includes a 1-tap call button and an instant estimate calculator.\n\n"
                f"Would it be alright if I emailed you a quick link so you can take a look on your phone?\n\n"
                f"Thank you,\n"
                f"Dylan Roth"
            ),
            "B": (
                f"Hi {name} team,\n\n"
                f"I came across your business while looking up local {trade} contractors in {city}. I pulled up your site on my iPhone and noticed it takes a while to load and the phone button is tough to tap on mobile.\n\n"
                f"I put together an interactive mobile preview for your trade with an instant quote calculator.\n\n"
                f"Would you be open to checking out a quick preview link?\n\n"
                f"Thank you,\n"
                f"Dylan Roth"
            ),
            "C": (
                f"Hi {name} team,\n\n"
                f"Quick question for you. I build high-converting mobile sites for Texas trade contractors, and I put together an interactive mobile demo customized for {trade} with a built-in estimate calculator for homeowners.\n\n"
                f"Mind if I email over a quick link so you can see how it looks on a phone?\n\n"
                f"Thank you,\n"
                f"Dylan Roth"
            )
        }

        # Keep existing 80 on Variation A; cycle future batches (>80) through A, B, C
        pid = int(num_str)
        if pid <= 80:
            msg1 = variations["A"]
        else:
            cycle_key = ["A", "B", "C"][(pid - 81) % 3]
            msg1 = variations[cycle_key]
        
        # Build Value Delivery Message 2 (when they reply)
        msg2 = (
            f"Hi {name} team,\n\n"
            f"Appreciate you getting back to me. Here is the interactive mobile preview I put together for {name}:\n\n"
            f"[Click to view {name} Mobile Preview]({preview_url})\n\n"
            f"Take a look on your phone if you can. The biggest feature is the interactive quote calculator halfway down the page. Instead of homeowners leaving your site when you don't answer right away, they can estimate their project and submit their details directly to your phone.\n\n"
            f"We keep pricing completely flat with zero contracts:\n"
            f"- Basic Plan: $300 setup fee and $150/mo. Clean mobile website, fast hosting, and ongoing updates.\n"
            f"- Standard Plan (Most Popular): $500 setup fee and $300/mo. Includes the interactive quote calculator and instant SMS lead alerts straight to your cell.\n"
            f"- Enterprise Plan: $1,000 setup fee and $600/mo. Full lead acquisition system for multi-crew companies, including custom CRM/booking integrations, multi-city service pages, and priority monthly updates.\n\n"
            f"*Out of scope updates are available for a discussed and negotiated additional fee.*\n\n"
            f"If you'd like to put this live under your domain, I can have it ready in 24 to 48 hours. Let me know what you think!\n\n"
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
            "variations": variations,
            "message_2": msg2
        })

print(f"Parsed {len(prospects)} prospects total.")

# Save JSON
json_out = os.path.join(campaigns_dir, "contact_forms_80_queue.json")
with open(json_out, "w", encoding="utf-8") as f:
    json.dump(prospects, f, indent=2)
print(f"Saved JSON queue to {json_out}")

# Save Markdown Queue
md_out = os.path.join(campaigns_dir, "contact_forms_80_queue.md")
with open(md_out, "w", encoding="utf-8") as f:
    f.write("# Master Contact Form Outreach Queue (80 Texas Prospects)\n\n")
    f.write("This document contains all 80 verified Texas contractor prospects formatted specifically for **Website Contact Form Submissions** with zero email bounces, zero phone calls, zero cold SMS, and **0 links in Message #1**.\n\n")
    f.write("---\n\n")
    for p in prospects:
        f.write(f"### {p['id']}. {p['name']}\n\n")
        f.write(f"- **Trade:** {p['trade']} | **City:** {p['city']}, TX | **Phone:** {p['phone']}\n")
        f.write(f"- **Website:** [{p['website']}]({p['website']})\n")
        f.write(f"- **Contact Form:** [{p['contact_url']}]({p['contact_url']})\n")
        f.write(f"- **Pre-built Preview Link (Message #2):** [{p['preview_url']}]({p['preview_url']})\n\n")
        f.write("**Message #1 (Copy & Submit in Form — 0 Links):**\n")
        f.write("```text\n")
        f.write(p['message_1'] + "\n")
        f.write("```\n\n")
        f.write("**Message #2 (Reply via Email when they respond 'Sure'):**\n")
        f.write("```text\n")
        f.write(p['message_2'] + "\n")
        f.write("```\n\n")
        f.write("---\n\n")

print(f"Saved Markdown queue to {md_out}")

# Build Standalone Interactive HTML Dispatcher Dashboard
html_out = os.path.join(workspace_dir, "docs", "contact_form_dispatcher.html")
prospects_json_str = json.dumps(prospects)

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>80 Prospects Contact Form Dispatcher | Texas Contractor Web Services</title>
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
  </style>
</head>
<body class="bg-[#0b1120] text-slate-100 min-h-screen font-sans">

  <!-- Fixed Top Header & Progress Bar -->
  <header class="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 shadow-xl px-4 py-3 sm:px-8">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold text-xs uppercase tracking-wider border border-sky-500/30">
            Outreach Dispatcher
          </span>
          <h1 class="text-lg sm:text-xl font-black text-white">80 Texas Contractor Contact Forms</h1>
        </div>
        <p class="text-xs text-slate-400 mt-0.5">Zero email bounces • Linkless hand-raise submissions • Instant local clipboard</p>
      </div>

      <!-- Quick Progress Bar & Counters -->
      <div class="flex items-center gap-6">
        <div class="text-right">
          <div class="text-xs font-bold text-slate-300">
            <span id="sent-count" class="text-emerald-400 font-extrabold text-base">0</span> / 80 Sent
          </div>
          <div class="w-36 h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
            <div id="progress-bar" class="h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <button onclick="resetAllProgress()" class="text-[11px] text-slate-500 hover:text-slate-300 underline">
          Reset Progress
        </button>
      </div>
    </div>

    <!-- Filter & Search Controls Bar -->
    <div class="max-w-7xl mx-auto mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-xs font-semibold text-slate-400">Filter Batch:</span>
        <button onclick="setBatchFilter('all')" class="batch-btn px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-500 text-slate-950 transition-all" data-batch="all">All (80)</button>
        <button onclick="setBatchFilter(1)" class="batch-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all" data-batch="1">Batch 1 (1–20)</button>
        <button onclick="setBatchFilter(2)" class="batch-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all" data-batch="2">Batch 2 (21–40)</button>
        <button onclick="setBatchFilter(3)" class="batch-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all" data-batch="3">Batch 3 (41–60)</button>
        <button onclick="setBatchFilter(4)" class="batch-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all" data-batch="4">Batch 4 (61–80)</button>
      </div>

      <div class="flex items-center gap-3">
        <select id="status-filter" onchange="renderCards()" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200">
          <option value="all">All Statuses</option>
          <option value="pending">Pending Only</option>
          <option value="sent">Sent Only</option>
          <option value="replied">Replied (Ready for Msg 2)</option>
        </select>
        
        <input 
          type="text" 
          id="search-input" 
          oninput="renderCards()" 
          placeholder="Search name, city, trade..." 
          class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 w-48 sm:w-64 focus:outline-none focus:border-sky-500"
        />
      </div>
    </div>
  </header>

  <!-- Global Fast Info Bar -->
  <div class="max-w-7xl mx-auto px-4 sm:px-8 mt-4">
    <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between text-xs gap-3">
      <div class="flex items-center gap-2 text-slate-300">
        <span class="text-amber-400 font-bold">Fast Fill Credentials:</span>
        <button onclick="copyText('Dylan Roth', 'Name copied!')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700">Copy Name: Dylan Roth</button>
        <button onclick="copyText('roth.dylan777@gmail.com', 'Email copied!')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 font-medium border border-slate-700">Copy Email: roth.dylan777@gmail.com</button>
      </div>
      <div class="text-slate-400 text-[11px]">
        💡 Click <strong>"Open Form"</strong>, paste Message 1, check the box, and move to the next.
      </div>
    </div>
  </div>

  <!-- Main Card Grid -->
  <main class="max-w-7xl mx-auto px-4 sm:px-8 py-6">
    <div id="cards-container" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Cards dynamically rendered here -->
    </div>
  </main>

  <!-- Toast Notification Container -->
  <div id="toast-container" class="fixed bottom-6 right-6 z-50 pointer-events-none"></div>

  <!-- Data & Application Logic -->
  <script>
    const prospects = {prospects_json_str};
    let currentBatchFilter = 'all';

    // Load progress from localStorage
    function getStatus(id) {{
      return localStorage.getItem('cf_status_' + id) || 'pending';
    }}

    function setStatus(id, status) {{
      localStorage.setItem('cf_status_' + id, status);
      updateCounters();
      renderCards();
    }}

    function resetAllProgress() {{
      if (confirm('Reset all sent statuses back to Pending?')) {{
        prospects.forEach(p => localStorage.removeItem('cf_status_' + p.id));
        updateCounters();
        renderCards();
      }}
    }}

    function setBatchFilter(batch) {{
      currentBatchFilter = batch;
      document.querySelectorAll('.batch-btn').forEach(btn => {{
        if (btn.getAttribute('data-batch') === String(batch)) {{
          btn.className = 'batch-btn px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-500 text-slate-950 transition-all';
        }} else {{
          btn.className = 'batch-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all';
        }}
      }});
      renderCards();
    }}

    function copyText(text, successMsg) {{
      navigator.clipboard.writeText(text).then(() => {{
        showToast(successMsg || 'Copied to clipboard!');
      }});
    }}

    function showToast(msg) {{
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast bg-emerald-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-2xl text-xs mb-2 flex items-center gap-2';
      toast.innerHTML = '<span>✓</span> <span>' + msg + '</span>';
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 2600);
    }}

    function updateCounters() {{
      let sent = 0;
      prospects.forEach(p => {{
        const s = getStatus(p.id);
        if (s === 'sent' || s === 'replied') sent++;
      }});
      document.getElementById('sent-count').innerText = sent;
      const pct = Math.round((sent / prospects.length) * 100);
      document.getElementById('progress-bar').style.width = pct + '%';
    }}

    function renderCards() {{
      const container = document.getElementById('cards-container');
      const searchQuery = (document.getElementById('search-input').value || '').toLowerCase().trim();
      const statusFilter = document.getElementById('status-filter').value;

      container.innerHTML = '';

      const filtered = prospects.filter(p => {{
        if (currentBatchFilter !== 'all' && p.batch !== Number(currentBatchFilter)) return false;
        const currentStatus = getStatus(p.id);
        if (statusFilter !== 'all' && currentStatus !== statusFilter) return false;
        if (searchQuery) {{
          const haystack = (p.name + ' ' + p.city + ' ' + p.trade).toLowerCase();
          if (!haystack.includes(searchQuery)) return false;
        }}
        return true;
      }});

      if (filtered.length === 0) {{
        container.innerHTML = '<div class="col-span-2 text-center py-16 text-slate-500 text-sm">No prospects match the selected filter.</div>';
        return;
      }}

      filtered.forEach(p => {{
        const status = getStatus(p.id);
        const card = document.createElement('div');
        card.className = `p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${{
          status === 'sent' 
            ? 'bg-slate-950/60 border-emerald-500/40 opacity-80' 
            : status === 'replied'
            ? 'bg-amber-950/30 border-amber-500/60 shadow-lg shadow-amber-500/10'
            : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-lg'
        }}`;

        const badgeClass = status === 'sent' 
          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
          : status === 'replied'
          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
          : 'bg-slate-800 text-slate-400 border-slate-700';

        card.innerHTML = `
          <div>
            <!-- Header Row -->
            <div class="flex items-start justify-between gap-3 mb-2">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-black text-sky-400">#${{p.id}}</span>
                  <span class="text-[11px] px-2 py-0.5 rounded-full border ${{badgeClass}} uppercase font-bold">
                    ${{status === 'pending' ? 'Pending' : status === 'sent' ? 'Sent' : 'Replied!'}}
                  </span>
                  <span class="text-[10px] text-slate-500">Batch ${{p.batch}}</span>
                </div>
                <h3 class="text-base font-bold text-white mt-1">${{p.name}}</h3>
                <div class="text-xs text-slate-400">${{p.trade}} • <strong class="text-slate-300">${{p.city}}, TX</strong></div>
              </div>

              <!-- Quick Status Selector -->
              <select onchange="setStatus(${{p.id}}, this.value)" class="text-[11px] px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 focus:outline-none">
                <option value="pending" ${{status === 'pending' ? 'selected' : ''}}>Pending</option>
                <option value="sent" ${{status === 'sent' ? 'selected' : ''}}>Mark Sent</option>
                <option value="replied" ${{status === 'replied' ? 'selected' : ''}}>Replied (Need Msg 2)</option>
              </select>
            </div>

            <!-- Target Links -->
            <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <a href="${{p.contact_url || p.website}}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold shadow-md transition-all hover:scale-105">
                <span>↗ Open Contact Form</span>
              </a>
              <a href="${{p.website}}" target="_blank" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] border border-slate-700">
                Site Homepage
              </a>
              <a href="${{p.preview_url}}" target="_blank" class="px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-[11px] border border-amber-500/30">
                Test Preview (?client=${{p.client_slug}})
              </a>
            </div>

            <!-- Message 1 Box -->
            <div class="mt-4 p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[11px] font-bold text-sky-400 uppercase tracking-wider">Message #1 (0 Links)</span>
                <button onclick="copyText(prospects[${{p.id - 1}}].message_1, 'Message #1 copied for #${{p.id}}!')" class="text-xs px-2.5 py-1 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-bold border border-sky-500/30 transition-colors">
                  📋 Copy Message #1
                </button>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">${{p.message_1}}</p>
            </div>

            <!-- Message 2 Quick Access (When they reply) -->
            <div class="mt-3">
              <details class="text-xs text-slate-400">
                <summary class="cursor-pointer hover:text-amber-400 font-semibold text-[11px] flex items-center gap-1">
                  <span>▶ View Message #2 (Ready for their reply)</span>
                </summary>
                <div class="mt-2 p-3 bg-slate-950/90 rounded-xl border border-amber-500/30">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[11px] font-bold text-amber-400">Message #2 (With ${{p.name}} Preview Link)</span>
                    <button onclick="copyText(prospects[${{p.id - 1}}].message_2, 'Message #2 copied for #${{p.id}}!')" class="text-xs px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold border border-amber-500/30 transition-colors">
                      📋 Copy Message #2
                    </button>
                  </div>
                  <p class="text-[11px] text-slate-300 leading-relaxed font-mono whitespace-pre-wrap">${{p.message_2}}</p>
                </div>
              </details>
            </div>
          </div>

          <!-- Bottom Footer Action -->
          <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div>Phone: ${{p.phone || 'N/A'}}</div>
            <button onclick="setStatus(${{p.id}}, '${{status === 'sent' ? 'pending' : 'sent'}}')" class="text-xs font-semibold ${{status === 'sent' ? 'text-slate-400 hover:text-white' : 'text-emerald-400 hover:text-emerald-300'}}">
              ${{status === 'sent' ? '↺ Undo Mark Sent' : '✓ Mark as Sent'}}
            </button>
          </div>
        `;

        container.appendChild(card);
      }});
    }}

    // Initialize on load
    updateCounters();
    renderCards();
  </script>
</body>
</html>
"""

with open(html_out, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Generated Interactive Fast Dispatcher Dashboard at {html_out}")
