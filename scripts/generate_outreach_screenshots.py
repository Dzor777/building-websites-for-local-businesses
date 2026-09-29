import sys
import os
import json
import argparse
import time
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
LEADS_FILE = WORKSPACE_ROOT / "docs" / "data" / "texas_leads.json"
DEFAULT_OUTPUT_DIR = WORKSPACE_ROOT / "assets" / "outreach_screenshots" / "batch_01"


def get_font(size: int, bold: bool = False):
    """Attempt to load a clean system font or fallback to default."""
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "segoeuib.ttf" if bold else "segoeui.ttf",
        "arialbd.ttf" if bold else "arial.ttf"
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            pass
    return ImageFont.load_default()


def create_comparison_image(before_path: Path, after_path: Path, output_path: Path, business_name: str):
    """Stitches before and after mobile screenshots side-by-side with professional labels."""
    before_img = Image.open(before_path).convert("RGB")
    after_img = Image.open(after_path).convert("RGB")

    width, height = before_img.size  # 780 x 1688 (2x scaled)
    gap = 36
    padding = 36
    header_height = 110
    bottom_bar_height = 50

    total_width = (width * 2) + gap + (padding * 2)
    total_height = height + header_height + bottom_bar_height + (padding * 2)

    # Canvas background - modern dark slate
    canvas = Image.new("RGB", (total_width, total_height), color=(15, 23, 42))  # #0f172a
    draw = ImageDraw.Draw(canvas)

    title_font = get_font(32, bold=True)
    label_font = get_font(20, bold=True)
    footer_font = get_font(18, bold=False)

    # Top Title
    draw.text((padding, padding), f"Mobile Experience Comparison: {business_name}", fill=(255, 255, 255), font=title_font)

    # Left Column (Current Site)
    left_x = padding
    img_y = padding + header_height

    # Label Left: Current Site (Red/Muted Tag)
    draw.rounded_rectangle([left_x, img_y - 50, left_x + 230, img_y - 12], radius=8, fill=(185, 28, 28), outline=(239, 68, 68), width=2)
    draw.text((left_x + 18, img_y - 44), "CURRENT WEBSITE", fill=(255, 255, 255), font=label_font)

    # Paste Left Screenshot
    canvas.paste(before_img, (left_x, img_y))
    draw.rectangle([left_x - 1, img_y - 1, left_x + width, img_y + height], outline=(51, 65, 85), width=2)

    # Right Column (Modern Upgrade)
    right_x = left_x + width + gap

    # Label Right: Modern Upgrade (Emerald Tag)
    draw.rounded_rectangle([right_x, img_y - 50, right_x + 310, img_y - 12], radius=8, fill=(5, 150, 105), outline=(16, 185, 129), width=2)
    draw.text((right_x + 18, img_y - 44), "MODERN MOBILE UPGRADE", fill=(255, 255, 255), font=label_font)

    # Paste Right Screenshot
    canvas.paste(after_img, (right_x, img_y))
    draw.rectangle([right_x - 2, img_y - 2, right_x + width + 1, img_y + height + 1], outline=(56, 189, 248), width=3)

    # Bottom Branding
    footer_y = total_height - padding - 24
    draw.text((padding, footer_y), "Prepared by Dylan Roth Web Services | 1-Tap Call Dispatch • Instant Quote Estimator • Modern Speed", fill=(148, 163, 184), font=footer_font)

    # Save
    output_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output_path, "PNG", optimize=True)


def capture_lead_screenshots(lead, page, output_dir: Path, keep_before: bool = False, local_port: int = None):
    lead_id = lead["id"]
    name = lead.get("business_name") or lead.get("businessName", f"Lead #{lead_id}")
    slug = lead.get("slug", f"lead-{lead_id}")
    current_url = lead.get("url") or lead.get("currentWebsite", "")
    if local_port:
        preview_url = f"http://localhost:{local_port}/?client={slug}"
    else:
        preview_url = lead.get("preview_url") or f"https://dzor777.github.io/building-websites-for-local-businesses/?client={slug}"

    indiv_dir = output_dir / "individual"
    indiv_dir.mkdir(parents=True, exist_ok=True)

    before_path = indiv_dir / f"{lead_id:02d}_{slug}_before.png"
    after_path = indiv_dir / f"{lead_id:02d}_{slug}_after.png"
    comp_path = output_dir / f"{lead_id:02d}_{slug}_comparison.png"

    print(f"\n[{lead_id}/20] Processing {name}...")

    # 1. Capture Current Site (Before)
    if keep_before and before_path.exists():
        print(f"  --> Using existing verified before screenshot: {before_path.name}")
    else:
        print(f"  --> Capturing current website: {current_url}")
        try:
            page.goto(current_url, timeout=25000, wait_until="domcontentloaded")
            page.wait_for_timeout(3000)
            page.screenshot(path=str(before_path))
        except Exception as e:
            print(f"  [!] Note: Could not load live site ({e}). Creating fallback card.")
            fb = Image.new("RGB", (390, 844), color=(30, 41, 59))
            fb_draw = ImageDraw.Draw(fb)
            fb_draw.text((40, 380), "Site Security Warning / Offline", fill=(248, 113, 113), font=get_font(18, bold=True))
            fb_draw.text((40, 420), f"URL: {current_url}", fill=(148, 163, 184), font=get_font(12))
            fb_draw.text((40, 440), "Unable to establish secure HTTPS connection", fill=(148, 163, 184), font=get_font(12))
            fb.save(before_path, "PNG")

    # 2. Capture Demo Upgrade (After)
    print(f"  --> Capturing modern demo: {preview_url}")
    try:
        page.goto(preview_url, timeout=25000, wait_until="networkidle")
        page.wait_for_timeout(2000)
        page.screenshot(path=str(after_path))
    except Exception as e:
        print(f"  [!] Error loading demo ({e}). Retrying with domcontentloaded...")
        page.goto(preview_url, timeout=25000, wait_until="domcontentloaded")
        page.wait_for_timeout(2500)
        page.screenshot(path=str(after_path))

    # 3. Create Side-by-Side Comparison Image
    print(f"  --> Generating side-by-side composite: {comp_path.name}")
    create_comparison_image(before_path, after_path, comp_path, name)
    print(f"  ✅ Saved: {comp_path}")
    return comp_path


def main():
    parser = argparse.ArgumentParser(description="Automate mobile screenshots for outreach emails")
    parser.add_argument("--id", type=int, help="Target lead ID (1-20)")
    parser.add_argument("--start", type=int, help="Start lead ID range (e.g. --start 1)")
    parser.add_argument("--end", type=int, help="End lead ID range (e.g. --end 5)")
    parser.add_argument("--batch", type=int, default=1, help="Target batch number (default: 1)")
    parser.add_argument("--keep-before", action="store_true", help="Preserve existing before screenshots if present")
    parser.add_argument("--local-port", type=int, default=None, help="Use local dev/preview port for after demo")
    parser.add_argument("--output-dir", type=str, default=str(DEFAULT_OUTPUT_DIR), help="Output directory")
    args = parser.parse_args()

    if not LEADS_FILE.exists():
        print(f"Error: Leads file not found at {LEADS_FILE}")
        sys.exit(1)

    with open(LEADS_FILE, "r", encoding="utf-8") as f:
        leads = json.load(f)

    target_leads = []
    if args.id:
        target_leads = [lead for lead in leads if lead["id"] == args.id]
        if not target_leads:
            print(f"Error: Lead ID {args.id} not found in database.")
            sys.exit(1)
    elif args.start or args.end:
        start_id = args.start or 1
        end_id = args.end or 999
        target_leads = [lead for lead in leads if start_id <= lead["id"] <= end_id]
    else:
        target_leads = leads

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    print("==========================================================================")
    print("🚀 AUTOMATED MOBILE OUTREACH SCREENSHOT GENERATOR")
    print(f"Targeting {len(target_leads)} prospect(s) | Output: {output_dir}")
    print("==========================================================================")

    start_time = time.time()

    with sync_playwright() as p:
        try:
            browser = p.chromium.launch(channel="chrome", headless=False)
        except Exception:
            browser = p.chromium.launch(headless=True)

        context = browser.new_context(
            viewport={"width": 390, "height": 844},
            is_mobile=True,
            has_touch=True,
            device_scale_factor=2,
            ignore_https_errors=True,
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1"
        )
        page = context.new_page()

        for lead in target_leads:
            capture_lead_screenshots(lead, page, output_dir, keep_before=args.keep_before, local_port=args.local_port)

        browser.close()

    elapsed = round(time.time() - start_time, 1)
    print("\n==========================================================================")
    print(f"🎉 COMPLETED: Generated screenshots for {len(target_leads)} prospect(s) in {elapsed}s!")
    print(f"📁 Output folder: {output_dir}")
    print("==========================================================================")


if __name__ == "__main__":
    main()
