import sys
import os
import json
import time
import subprocess
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

WORKSPACE_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = WORKSPACE_ROOT / "assets" / "outreach_screenshots" / "batch_01" / "batch 4 comparison"
INDIV_DIR = OUTPUT_DIR / "individual"

def get_font(size: int, bold: bool = False):
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
    print(f"  [SAVED] {output_path.name}")

def main():
    # Remove old files for replaced leads 72, 73, 76
    old_files = [
        "72_titus-electrical-services-mckinney_comparison.png",
        "73_white-rock-roofing-richardson_comparison.png",
        "76_cpr-plumbing-services-the-colony_comparison.png",
        "individual/72_titus-electrical-services-mckinney_before.png",
        "individual/72_titus-electrical-services-mckinney_after.png",
        "individual/73_white-rock-roofing-richardson_before.png",
        "individual/73_white-rock-roofing-richardson_after.png",
        "individual/76_cpr-plumbing-services-the-colony_before.png",
        "individual/76_cpr-plumbing-services-the-colony_after.png",
    ]
    for of in old_files:
        p = OUTPUT_DIR / of
        if p.exists():
            p.unlink()
            print(f"Removed deprecated file: {p.name}")

    leads_to_update = [
        {
            "id": 62,
            "name": "Lex Air Conditioning & Heating",
            "slug": "lex-air-conditioning-carrollton",
            "url": "https://lexairconditioning.com"
        },
        {
            "id": 67,
            "name": "Arrow Electric Inc.",
            "slug": "arrow-electric-carrollton",
            "url": "https://arrowelectric.net"
        },
        {
            "id": 69,
            "name": "Accurate Leak and Line",
            "slug": "accurate-leak-line-plano",
            "url": "https://accurateleak.com"
        },
        {
            "id": 72,
            "name": "White Electric",
            "slug": "white-electric-lewisville",
            "url": "https://white-electric.com"
        },
        {
            "id": 73,
            "name": "Armor Roofing | Exteriors",
            "slug": "armor-roofing-plano",
            "url": "https://armorroofco.com"
        },
        {
            "id": 76,
            "name": "Brown & Sons Plumbing",
            "slug": "brown-and-sons-plumbing-denton",
            "url": "https://brownandsonsplumbing.com"
        }
    ]

    preview_port = 4173
    server_process = subprocess.Popen(
        ["npx.cmd", "vite", "preview", "--port", str(preview_port)],
        cwd=str(WORKSPACE_ROOT),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    time.sleep(2)

    with sync_playwright() as p:
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

        for lead in leads_to_update:
            lead_id = lead["id"]
            name = lead["name"]
            slug = lead["slug"]
            current_url = lead["url"]
            preview_url = f"http://localhost:{preview_port}/?client={slug}"

            before_path = INDIV_DIR / f"{lead_id:02d}_{slug}_before.png"
            after_path = INDIV_DIR / f"{lead_id:02d}_{slug}_after.png"
            comp_path = OUTPUT_DIR / f"{lead_id:02d}_{slug}_comparison.png"

            print(f"\nProcessing Lead #{lead_id}: {name}...")

            # Capture Before site
            print(f"  --> Capturing before site: {current_url}")
            try:
                page.goto(current_url, timeout=20000, wait_until="domcontentloaded")
                page.wait_for_timeout(2500)
                # Dismiss cookie popups if any
                try:
                    page.evaluate("""() => {
                        const selectors = ['#onetrust-banner-sdk', '.cookie-banner', '.ot-sdk-container', '[id*="cookie"]', '.modal-backdrop'];
                        selectors.forEach(s => {
                            document.querySelectorAll(s).forEach(el => el.remove());
                        });
                    }""")
                except Exception:
                    pass
                page.wait_for_timeout(500)
                page.screenshot(path=str(before_path))
            except Exception as e:
                print(f"  [!] Note: {e}")

            # Capture After demo
            print(f"  --> Capturing after demo: {preview_url}")
            try:
                page.goto(preview_url, timeout=15000, wait_until="networkidle")
                page.wait_for_timeout(1500)
                page.screenshot(path=str(after_path))
            except Exception as e:
                page.goto(preview_url, timeout=15000, wait_until="domcontentloaded")
                page.wait_for_timeout(2000)
                page.screenshot(path=str(after_path))

            # Composite
            create_comparison_image(before_path, after_path, comp_path, name)

        browser.close()

    server_process.terminate()
    print("\n✅ Finished regenerating all updated screenshots!")

if __name__ == "__main__":
    main()
