import json
import re
from pathlib import Path

WORKSPACE = Path(r"c:\Users\Dylan\.gemini\antigravity-ide\scratch\building-websites-for-local-businesses")
DISPATCHER_PATH = WORKSPACE / "docs" / "contact_form_dispatcher.html"
NEW_PROSPECTS_PATH = WORKSPACE / "scripts" / "new_dispatcher_prospects_201_300.json"

def main():
    print("Reading contact_form_dispatcher.html...")
    with open(DISPATCHER_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Update Title and Header text
    html = re.sub(
        r'<title>Texas Contractor Contact Form Dispatcher \(\d+ Leads\)</title>',
        '<title>Texas Contractor Contact Form Dispatcher (300 Leads)</title>',
        html
    )
    html = re.sub(
        r'<h1 class="text-lg sm:text-xl font-black text-white">Texas Contractor Outreach \(\d+ Leads\)</h1>',
        '<h1 class="text-lg sm:text-xl font-black text-white">Texas Contractor Outreach (300 Leads)</h1>',
        html
    )
    html = re.sub(
        r'<p class="text-xs text-slate-400 mt-0.5">3-Message Pipeline • Auto 5-Day Bump Tracker • Multi-Select Bulk Actions</p>',
        '<p class="text-xs text-slate-400 mt-0.5">3-Message Pipeline • Auto 5-Day Bump Tracker • Daily Velocity & Outreach Analytics</p>',
        html
    )

    # 2. Update Header Counters Section
    old_header_counters_pattern = r'<!-- Quick Progress Bar & Counters -->\s*<div class="flex flex-wrap items-center gap-4 sm:gap-6">.*?</div>\s*</div>\s*</div>'
    new_header_counters = '''<!-- Quick Progress Bar & Counters -->
      <div class="flex flex-wrap items-center gap-2 sm:gap-3">
        <!-- Total Leads Badge -->
        <button onclick="filterStatus('all')" title="Click to show all leads" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-all cursor-pointer">
          <span class="text-sm">📋</span>
          <div class="text-left leading-tight">
            <div class="text-[9px] uppercase font-bold tracking-wider text-slate-400">Total</div>
            <div class="text-xs font-black text-white"><span id="total-count">300</span></div>
          </div>
        </button>

        <!-- Contacted Badge -->
        <button onclick="filterStatus('contacted')" title="Click to filter to contacted leads" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition-all cursor-pointer">
          <span class="text-sm">✉️</span>
          <div class="text-left leading-tight">
            <div class="text-[9px] uppercase font-bold tracking-wider text-emerald-400/80">Contacted</div>
            <div class="text-xs font-black text-emerald-400"><span id="contacted-count">0</span></div>
          </div>
        </button>

        <!-- Sent Today Badge (Daily Velocity Tracker) -->
        <button onclick="filterStatus('sent_today')" title="Click to filter to leads sent today" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 transition-all cursor-pointer">
          <span class="text-sm">⚡</span>
          <div class="text-left leading-tight">
            <div class="text-[9px] uppercase font-bold tracking-wider text-cyan-400/80">Sent Today</div>
            <div class="text-xs font-black text-cyan-300"><span id="sent-today-count">0</span></div>
          </div>
        </button>

        <!-- Unreachable Badge -->
        <button onclick="filterStatus('dead_lead')" title="Click to filter to unreachable/dead leads" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 transition-all cursor-pointer">
          <span class="text-sm">⛔</span>
          <div class="text-left leading-tight">
            <div class="text-[9px] uppercase font-bold tracking-wider text-rose-400/80">Unreachable</div>
            <div class="text-xs font-black text-rose-400"><span id="unreachable-count">0</span></div>
          </div>
        </button>

        <!-- Interactive Due Today Badge -->
        <button onclick="filterDueToday()" title="Click to filter to follow-up bumps due today" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 transition-all cursor-pointer">
          <span class="text-sm">🔥</span>
          <div class="text-left leading-tight">
            <div class="text-[9px] uppercase font-bold tracking-wider text-amber-400/80">Due Today</div>
            <div class="text-xs font-black text-amber-300"><span id="due-today-count">0</span> Leads</div>
          </div>
        </button>

        <!-- Progress Summary -->
        <div class="text-right pl-1 sm:pl-2">
          <div class="text-xs font-bold text-slate-300">
            <span id="sent-count" class="text-emerald-400 font-extrabold text-sm">0</span> / <span id="total-count-inline">300</span> Active
          </div>
          <div class="w-24 sm:w-28 h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
            <div id="progress-bar" class="h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <div class="flex items-center gap-1.5 pl-1">
          <button onclick="exportProgressJSON()" title="Download JSON backup" class="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors">
            Backup
          </button>
          <button onclick="resetAllProgress()" class="text-[11px] text-slate-500 hover:text-slate-300 underline">
            Reset
          </button>
        </div>
      </div>
    </div>'''

    match = re.search(old_header_counters_pattern, html, flags=re.DOTALL)
    if not match:
        raise ValueError("Could not find old header counters section to replace!")
    html = html[:match.start()] + new_header_counters + html[match.end():]
    print("Replaced header counters with expanded metrics bar.")

    # 3. Update Batch Filter Dropdown
    old_batch_select_pattern = r'<select id="batch-select" onchange="setBatchFilter\(this\.value\)".*?</select>'
    new_batch_select = '''<select id="batch-select" onchange="setBatchFilter(this.value)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-sky-500/60 text-xs font-bold text-sky-400 focus:outline-none focus:border-sky-500 transition-all cursor-pointer">
            <option value="all">All Batches (1–15 · 300 Total)</option>
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
            <option value="11">Batch 11: #201–220 (DFW Metroplex Expansion)</option>
            <option value="12">Batch 12: #221–240 (Austin & Hill Country)</option>
            <option value="13">Batch 13: #241–260 (Houston Suburbs)</option>
            <option value="14">Batch 14: #261–280 (San Antonio & South TX)</option>
            <option value="15">Batch 15: #281–300 (Texas Regional Centers)</option>
          </select>'''
    html = re.sub(old_batch_select_pattern, new_batch_select, html, flags=re.DOTALL)
    print("Updated batch filter dropdown to Batches 1-15.")

    # 4. Update Status Filter Dropdown
    old_status_filter_pattern = r'<select id="status-filter" onchange="renderCards\(\)".*?</select>'
    new_status_filter = '''<select id="status-filter" onchange="renderCards()" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-amber-300 focus:outline-none focus:border-sky-500 cursor-pointer">
            <option value="all">All Statuses</option>
            <option value="due_today">🔥 Due Today / Overdue</option>
            <option value="contacted">✉️ Contacted (Active Pipeline)</option>
            <option value="sent_today">⚡ Sent Today</option>
            <option value="needs_followup">📅 Needs Follow-up (Active)</option>
            <option value="pending">⏳ Ready to Send (Initial)</option>
            <option value="sent_followup">🚀 Follow-up Sent</option>
            <option value="done">✅ Done / Closed</option>
            <option value="dead_lead">⛔ Dead Lead / Unreachable</option>
          </select>'''
    html = re.sub(old_status_filter_pattern, new_status_filter, html, flags=re.DOTALL)
    print("Updated status filter dropdown.")

    # 5. Update Prospects Array (Append #201-300)
    with open(NEW_PROSPECTS_PATH, "r", encoding="utf-8") as f:
        new_prospects = json.load(f)

    prospects_match = re.search(r'const prospects = (\[.*?\]);', html, flags=re.DOTALL)
    if not prospects_match:
        raise ValueError("Could not find 'const prospects = [...]' in HTML!")
    
    current_prospects = json.loads(prospects_match.group(1))
    print(f"Current prospects count: {len(current_prospects)}")
    assert len(current_prospects) == 200, f"Expected 200 existing prospects, found {len(current_prospects)}"
    
    # Strictly preserve existing 200
    merged_prospects = current_prospects + new_prospects
    print(f"Merged prospects count: {len(merged_prospects)}")
    assert len(merged_prospects) == 300, f"Expected 300 merged prospects, found {len(merged_prospects)}"

    # Safely replace prospects array
    prospects_json_str = json.dumps(merged_prospects)
    html = html[:prospects_match.start()] + f"const prospects = {prospects_json_str};" + html[prospects_match.end():]
    print("Appended new prospects #201-300 to HTML.")

    # 6. Update getFilteredProspects function
    old_filtered_pattern = r'function getFilteredProspects\(\)\s*\{.*?return prospects\.filter\(p => \{.*?\}\);\s*\}'
    new_filtered = '''function filterStatus(status) {
      const select = document.getElementById('status-filter');
      if (select) {
        select.value = status;
        renderCards();
      }
    }

    function getFilteredProspects() {
      const searchQuery = (document.getElementById('search-input').value || '').toLowerCase().trim();
      const statusFilter = document.getElementById('status-filter').value;
      const tradeSelect = document.getElementById('trade-select');
      const tradeFilter = tradeSelect ? tradeSelect.value : 'all';
      const todayStr = new Date().toISOString().split('T')[0];

      return prospects.filter(p => {
        if (currentBatchFilter !== 'all' && p.batch !== Number(currentBatchFilter)) return false;
        
        const state = getLeadState(p.id);
        
        if (statusFilter === 'due_today') {
          if (state.status !== 'needs_followup') return false;
          const diff = getDueDifferenceInDays(state.dueDate);
          if (diff > 0) return false; // Not due today or overdue
        } else if (statusFilter === 'contacted') {
          if (state.status !== 'needs_followup' && state.status !== 'sent_followup' && state.status !== 'done') return false;
        } else if (statusFilter === 'sent_today') {
          if (state.sentDate !== todayStr && state.actionDate !== todayStr) return false;
        } else if (statusFilter !== 'all' && state.status !== statusFilter) {
          return false;
        }

        if (tradeFilter !== 'all' && !p.trade.toLowerCase().includes(tradeFilter.toLowerCase())) return false;
        
        if (searchQuery) {
          const haystack = (p.name + ' ' + p.city + ' ' + p.trade).toLowerCase();
          if (!haystack.includes(searchQuery)) return false;
        }
        return true;
      });
    }'''
    html = re.sub(old_filtered_pattern, new_filtered, html, flags=re.DOTALL)
    print("Updated getFilteredProspects and added filterStatus.")

    # 7. Update updateCounters function
    old_counters_pattern = r'function updateCounters\(\)\s*\{.*?const dueEl = document\.getElementById\(\'due-today-count\'\);\s*if \(dueEl\) dueEl\.innerText = dueTodayCount;\s*\}'
    new_counters = '''function updateCounters() {
      const todayStr = new Date().toISOString().split('T')[0];
      let activeSent = 0;
      let unreachableCount = 0;
      let sentTodayCount = 0;
      let dueTodayCount = 0;

      prospects.forEach(p => {
        const state = getLeadState(p.id);
        if (state.status === 'needs_followup' || state.status === 'sent_followup' || state.status === 'done') {
          activeSent++;
        }
        if (state.status === 'dead_lead') {
          unreachableCount++;
        }
        if (state.sentDate === todayStr || state.actionDate === todayStr) {
          sentTodayCount++;
        }
        if (state.status === 'needs_followup') {
          const diff = getDueDifferenceInDays(state.dueDate);
          if (diff <= 0) dueTodayCount++;
        }
      });

      const totalCount = prospects.length;
      const totalEl = document.getElementById('total-count');
      if (totalEl) totalEl.innerText = totalCount;
      const totalInlineEl = document.getElementById('total-count-inline');
      if (totalInlineEl) totalInlineEl.innerText = totalCount;

      const contactedEl = document.getElementById('contacted-count');
      if (contactedEl) contactedEl.innerText = activeSent;

      const sentCountEl = document.getElementById('sent-count');
      if (sentCountEl) sentCountEl.innerText = activeSent;

      const sentTodayEl = document.getElementById('sent-today-count');
      if (sentTodayEl) sentTodayEl.innerText = sentTodayCount;

      const unreachableEl = document.getElementById('unreachable-count');
      if (unreachableEl) unreachableEl.innerText = unreachableCount;

      const pct = totalCount > 0 ? Math.round((activeSent / totalCount) * 100) : 0;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) progressBar.style.width = pct + '%';
      
      const dueEl = document.getElementById('due-today-count');
      if (dueEl) dueEl.innerText = dueTodayCount;
    }'''
    html = re.sub(old_counters_pattern, new_counters, html, flags=re.DOTALL)
    print("Updated updateCounters function.")

    # 8. Update setLeadStatus to record actionDate
    old_set_status_pattern = r'function setLeadStatus\(id, newStatus\)\s*\{.*?saveLeadState\(id, state\);'
    new_set_status = '''function setLeadStatus(id, newStatus) {
      const state = getLeadState(id);
      state.status = newStatus;
      const todayStr = new Date().toISOString().split('T')[0];
      state.actionDate = todayStr;

      if (newStatus === 'needs_followup') {
        if (!state.sentDate) state.sentDate = todayStr;
        state.dueDate = calculateDueDate(state.sentDate, 5);
        state.activeMessage = 2;
        showToast('Marked #' + id + ' as Needs Follow-up (Due in 5 Days). Message 2 prepared!');
      } else if (newStatus === 'sent_followup') {
        if (!state.sentDate) state.sentDate = todayStr;
        state.activeMessage = 3;
        showToast('Marked #' + id + ' Follow-up Sent. Message 3 (Demo Link) ready for their reply!');
      } else if (newStatus === 'done') {
        state.activeMessage = 3;
        showToast('Marked #' + id + ' as Done/Closed!');
      } else if (newStatus === 'dead_lead') {
        showToast('Marked #' + id + ' as Dead Lead / Unreachable.');
      } else if (newStatus === 'pending') {
        state.sentDate = null;
        state.dueDate = null;
        state.activeMessage = 1;
      }

      saveLeadState(id, state);'''
    html = re.sub(old_set_status_pattern, new_set_status, html, flags=re.DOTALL)
    print("Updated setLeadStatus to track actionDate.")

    # 9. Update bulkSetStatus to track actionDate
    old_bulk_pattern = r'function bulkSetStatus\(status\)\s*\{.*?selectedIds\.forEach\(id => \{.*?saveLeadState\(id, state\);\s*\}\);'
    new_bulk = '''function bulkSetStatus(status) {
      if (selectedIds.size === 0) return;
      const count = selectedIds.size;
      const todayStr = new Date().toISOString().split('T')[0];

      selectedIds.forEach(id => {
        const state = getLeadState(id);
        state.status = status;
        state.actionDate = todayStr;

        if (status === 'needs_followup') {
          if (!state.sentDate) state.sentDate = todayStr;
          state.dueDate = calculateDueDate(state.sentDate, 5);
          state.activeMessage = 2;
        } else if (status === 'sent_followup') {
          if (!state.sentDate) state.sentDate = todayStr;
          state.activeMessage = 3;
        } else if (status === 'done') {
          state.activeMessage = 3;
        } else if (status === 'pending') {
          state.sentDate = null;
          state.dueDate = null;
          state.activeMessage = 1;
        }
        saveLeadState(id, state);
      });'''
    html = re.sub(old_bulk_pattern, new_bulk, html, flags=re.DOTALL)
    print("Updated bulkSetStatus to track actionDate.")

    # Write back to contact_form_dispatcher.html
    with open(DISPATCHER_PATH, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Successfully updated {DISPATCHER_PATH}")

if __name__ == "__main__":
    main()
