import sys
import os
import json
import time
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = WORKSPACE_ROOT / "assets" / "outreach_screenshots" / "batch_01" / "batch 3 comparison"
INDIV_DIR = OUTPUT_DIR / "individual"
INDIV_DIR.mkdir(parents=True, exist_ok=True)

WAHOOO_HTML_PATH = Path(r"C:\Users\Dylan\.gemini\antigravity-ide\brain\4475c581-378a-40f8-b4fd-5e966fb6c28e\.system_generated\steps\3920\content.md")

def get_font(size: int, bold: bool = False):
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "segoeuib.ttf" if bold else "segoeui.ttf",
        "arialbd.ttf" if bold else "arial.ttf"
    ]
    for p in candidates:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            pass
    return ImageFont.load_default()

def create_comparison_image(before_path: Path, after_path: Path, output_path: Path, business_name: str):
    before_img = Image.open(before_path).convert("RGB")
    after_img = Image.open(after_path).convert("RGB")

    width, height = before_img.size  # 780 x 1688
    gap = 36
    padding = 36
    header_height = 110
    bottom_bar_height = 50

    total_width = (width * 2) + gap + (padding * 2)
    total_height = height + header_height + bottom_bar_height + (padding * 2)

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

    # Label Left: Current Site
    draw.rounded_rectangle([left_x, img_y - 50, left_x + 230, img_y - 12], radius=8, fill=(185, 28, 28), outline=(239, 68, 68), width=2)
    draw.text((left_x + 18, img_y - 44), "CURRENT WEBSITE", fill=(255, 255, 255), font=label_font)

    # Paste Left Screenshot
    canvas.paste(before_img, (left_x, img_y))
    draw.rectangle([left_x - 1, img_y - 1, left_x + width, img_y + height], outline=(51, 65, 85), width=2)

    # Right Column (Modern Upgrade)
    right_x = left_x + width + gap

    # Label Right: Modern Upgrade
    draw.rounded_rectangle([right_x, img_y - 50, right_x + 310, img_y - 12], radius=8, fill=(5, 150, 105), outline=(16, 185, 129), width=2)
    draw.text((right_x + 18, img_y - 44), "MODERN MOBILE UPGRADE", fill=(255, 255, 255), font=label_font)

    # Paste Right Screenshot
    canvas.paste(after_img, (right_x, img_y))
    draw.rectangle([right_x - 2, img_y - 2, right_x + width + 1, img_y + height + 1], outline=(56, 189, 248), width=3)

    # Bottom Branding
    footer_y = total_height - padding - 24
    draw.text((padding, footer_y), "Prepared by Dylan Roth Web Services | 1-Tap Call Dispatch • Instant Quote Estimator • Modern Speed", fill=(148, 163, 184), font=footer_font)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output_path, "PNG", optimize=True)
    print(f"  [SAVED] {output_path.name} ({total_width}x{total_height})")

def main():
    print("Starting screenshot generation for leads 47, 49, 53, 56, 59...")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 390, "height": 844},
            device_scale_factor=2,
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
        )

        leads_to_update = [
            {
                "id": 47,
                "name": "Cedar Park Air Conditioning",
                "slug": "cedar-park-air-conditioning",
                "live_url": "https://cedarparkac.com",
                "redo_before": False
            },
            {
                "id": 49,
                "name": "Wahooo Plumbers",
                "slug": "wahooo-plumbers-euless",
                "live_url": "https://wahoooplumbers.com",
                "redo_before": True,
                "special_wahooo": True
            },
            {
                "id": 53,
                "name": "Ellis Air Systems",
                "slug": "ellis-air-systems-temple",
                "live_url": "https://ellisairsystems.com",
                "redo_before": True
            },
            {
                "id": 56,
                "name": "Schulte Roofing",
                "slug": "schulte-roofing-bryan",
                "live_url": "https://schulteroofing.com",
                "redo_before": False
            },
            {
                "id": 59,
                "name": "Armstrong Plumbing Company",
                "slug": "armstrong-plumbing-pearland",
                "live_url": "https://armstrongplumbingcompany.com",
                "redo_before": False
            }
        ]

        for item in leads_to_update:
            lead_id = item["id"]
            name = item["name"]
            slug = item["slug"]
            before_file = INDIV_DIR / f"{lead_id:02d}_{slug}_before.png"
            after_file = INDIV_DIR / f"{lead_id:02d}_{slug}_after.png"
            comp_file = OUTPUT_DIR / f"{lead_id:02d}_{slug}_comparison.png"

            print(f"\nProcessing #{lead_id}: {name} ({slug})")

            # --- BEFORE SCREENSHOT ---
            if item.get("special_wahooo"):
                print("  --> Rendering Wahooo Plumbers from verified HTML content...")
                with open(WAHOOO_HTML_PATH, "r", encoding="utf-8") as f:
                    lines = f.readlines()
                wahooo_html = "".join(lines[8:])
                page = context.new_page()
                page.set_content(wahooo_html, wait_until="load")
                page.wait_for_timeout(3000)
                page.screenshot(path=str(before_file))
                page.close()
                print(f"  --> Saved before screenshot: {before_file.name}")
            elif item["redo_before"] or not before_file.exists():
                print(f"  --> Capturing live website: {item['live_url']}")
                page = context.new_page()
                try:
                    page.goto(item["live_url"], wait_until="networkidle", timeout=25000)
                except Exception as e:
                    print(f"  [!] Note: {e}. Retrying with domcontentloaded...")
                    page.goto(item["live_url"], wait_until="domcontentloaded", timeout=25000)
                page.wait_for_timeout(2500)
                # Hide annoying badges if present
                page.add_style_tag(content=".grecaptcha-badge, #onetrust-consent-sdk { display: none !important; }")
                page.screenshot(path=str(before_file))
                page.close()
                print(f"  --> Saved before screenshot: {before_file.name}")
            else:
                print(f"  --> Using verified existing before screenshot: {before_file.name}")

            # --- AFTER SCREENSHOT (from local demo) ---
            demo_url = f"http://localhost:4173/?client={slug}"
            print(f"  --> Capturing modern demo from: {demo_url}")
            page = context.new_page()
            page.goto(demo_url, wait_until="networkidle", timeout=20000)
            page.wait_for_timeout(2000)
            page.screenshot(path=str(after_file))
            page.close()
            print(f"  --> Saved after screenshot: {after_file.name}")

            # --- STITCH COMPOSITE ---
            print(f"  --> Generating composite: {comp_file.name}")
            create_comparison_image(before_file, after_file, comp_file, name)

        browser.close()

    print("\nAll target comparison screenshots successfully updated!")

if __name__ == "__main__":
    main()
