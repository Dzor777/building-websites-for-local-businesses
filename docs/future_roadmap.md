# Future Feature & Enhancement Roadmap

This document tracks planned technical enhancements and feature additions for the WaaS platform.

---

## 🎨 1. Dynamic Niche Color & Logo Preset System (Option 4)

### Objective
Automatically select curated, harmonious color themes and logo icon themes based on the client's business niche when `scripts/generate_demo.py` is called.

### Color Presets Specification
* **Plumbing & Water Services**:
  * Primary: `#0284c7` (Sky Blue)
  * Accent: `#06b6d4` (Cyan / Water)
  * Theme: Clean Hydro Blue
* **HVAC, Heating & Roofing**:
  * Primary: `#ea580c` (Flame Orange)
  * Accent: `#f59e0b` (Warm Amber)
  * Theme: Thermal Energy
* **Landscaping, Lawn & Tree Service**:
  * Primary: `#16a34a` (Forest Green)
  * Accent: `#84cc16` (Lime Accent)
  * Theme: Fresh Eco Green
* **Auto Repair & Towing**:
  * Primary: `#2563eb` (Royal Blue)
  * Accent: `#e11d48` (Performance Red)
  * Theme: Industrial Precision
* **Medical, Dental & Chiropractic**:
  * Primary: `#0d9488` (Teal)
  * Accent: `#38bdf8` (Light Sky)
  * Theme: Clinical Trust

### Implementation Steps
1. Add `themePresets` dictionary inside `scripts/generate_demo.py`.
2. Map `clean_niche` keywords (e.g. "roofing", "plumbing", "hvac", "auto", "landscaping") to corresponding primary/accent hex codes and icon sets.
3. Inject the selected palette into `src/config/site.ts` `colors` object automatically during demo generation.

---

## ⚡ 2. Automated Google Business Profile Scraper Integration
* Integrate Google Places API / Scraper to pull real Google Review counts, ratings, and business addresses directly into lead JSON files.
