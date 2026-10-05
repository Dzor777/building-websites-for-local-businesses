import subprocess
import time
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from playwright.sync_api import sync_playwright

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

    # Paste Before Image
    canvas.paste(before_img, (left_x, img_y))

    # Right Column (Modern Mobile Upgrade)
    right_x = left_x + width + gap

    # Label Right: Modern Mobile Upgrade
    draw.rounded_rectangle([right_x, img_y - 50, right_x + 310, img_y - 12], radius=8, fill=(15, 118, 110), outline=(20, 184, 166), width=2)
    draw.text((right_x + 20, img_y - 44), "MODERN MOBILE UPGRADE", fill=(255, 255, 255), font=label_font)

    # Paste After Image
    canvas.paste(after_img, (right_x, img_y))

    # Draw Subtle Border around both previews
    draw.rectangle([left_x, img_y, left_x + width, img_y + height], outline=(51, 65, 85), width=2)
    draw.rectangle([right_x, img_y, right_x + width, img_y + height], outline=(14, 165, 233), width=3)

    # Footer
    footer_text = "Prepared by Dylan Roth Web Services | 1-Tap Call Dispatch • Instant Quote Estimator • Modern Speed"
    draw.text((padding, total_height - padding - 20), footer_text, fill=(148, 163, 184), font=footer_font)

    canvas.save(output_path, "PNG", quality=95)
    print(f"  [SAVED] {output_path.name}")

def main():
    leads = [
        {
            "id": 62,
            "name": "Lex Air Conditioning & Heating",
            "slug": "lex-air-conditioning-carrollton"
        },
        {
            "id": 67,
            "name": "Arrow Electric Inc.",
            "slug": "arrow-electric-carrollton"
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
            device_scale_factor=2
        )
        page = context.new_page()

        for lead in leads:
            lead_id = lead["id"]
            name = lead["name"]
            slug = lead["slug"]
            preview_url = f"http://localhost:{preview_port}/?client={slug}"

            before_path = INDIV_DIR / f"{lead_id:02d}_{slug}_before.png"
            after_path = INDIV_DIR / f"{lead_id:02d}_{slug}_after.png"
            comp_path = OUTPUT_DIR / f"{lead_id:02d}_{slug}_comparison.png"

            print(f"Capturing after demo for #{lead_id} ({slug})...")
            page.goto(preview_url, timeout=15000, wait_until="networkidle")
            page.wait_for_timeout(1500)
            page.screenshot(path=str(after_path))

            create_comparison_image(before_path, after_path, comp_path, name)

        browser.close()

    server_process.terminate()
    print("Done recompositing 62 & 67!")

if __name__ == "__main__":
    main()
