"""Automated Test Suite for PKMKPI V2 Landing Page Verification.

Validates:
1. Zero-build standalone architecture & required files integrity for v2.
2. Exact mandatory copy, institutional declarations, SEC registration CN202105447, and logo CDN URL.
3. AEIOU Strategic Pillars & 5 Filipino Core Values.
4. 17-Region Federation dataset completeness across Luzon (8), Visayas (3), Mindanao (6).
5. 10 Disability classification guide data & accessibility rights.
6. Playwright Headless E2E verification:
   - GSAP / ScrollTrigger initialized on page.
   - 3D Tilt Card Physics on mouse move (computed matrix3d transform != 'none').
   - Hybrid Scroll Reveal trigger on scroll.
   - PWD Accessibility Suite (Font scaling, High Contrast, Dyslexia mode, Motion Pause).
   - V2 Sliding Right-Side Drawer Panel (#sector-drawer).
   - V2 1-Click Copy Banking Cards (#copy-toast).
   - V2 17-Region Island Tab Filtering (Luzon, Visayas, Mindanao).
"""

import os
import re
import pathlib
from playwright.sync_api import sync_playwright

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


def read_file(rel_path: str) -> str:
    full_path = os.path.join(ROOT_DIR, rel_path)
    assert os.path.isfile(full_path), f"Missing required file: {rel_path}"
    with open(full_path, "r", encoding="utf-8") as f:
        return f.read()


def test_files_exist():
    """Validates existence of all architectural files in zero-build stack."""
    required_files = [
        "index.html",
        "DESIGN.md",
        "design-system/pkmkpi/MASTER.md",
        "src/styles/global.css",
        "src/styles/components.css",
        "src/styles/motion.css",
        "src/styles/accessibility.css",
        "src/data/regions.js",
        "src/data/disabilities.js",
        "src/scripts/accessibility.js",
        "src/scripts/interactive-sections.js",
        "src/scripts/animations.js",
    ]
    for rel_path in required_files:
        full_path = os.path.join(ROOT_DIR, rel_path)
        assert os.path.isfile(full_path), f"Missing required file: {rel_path}"


def test_exact_content_and_images():
    """Validates exact institutional copy, declarations, and image CDN URLs in index.html."""
    html = read_file("index.html")

    # SEC Accreditation & Federation Identity
    assert "CN202105447" in html, "SEC Registration number CN202105447 missing"
    assert "Pambansang Kapisanan ng mga May Kapansanan ng Pilipinas, Inc." in html, (
        "Full institutional name missing"
    )
    assert "PKMKPI" in html, "PKMKPI acronym missing"

    # Solemn Motto & Cultural Declarations
    assert "Nothing About Us Without Us" in html, "Core motto missing"
    assert "Walang Kami Kung Hindi Kami" in html, "Filipino motto missing"
    assert "Nihil de nobis, sine nobis" in html, "Latin motto translation missing"
    assert "Isang Bansa" in html, "National declaration line 1 missing"
    assert "Isang Kapisanan" in html, "National declaration line 2 missing"
    assert "Isang Layunin" in html, "National declaration line 3 missing"
    assert "Walang Iwanan" in html, "National declaration line 4 missing"
    assert "Lahat ay Mahalaga" in html, "National declaration line 5 missing"

    # Exact Contact & Headquarters Info
    assert "98 Major Marcos St." in html, "Official QC headquarters address missing"
    assert "pkmkpi.pwd@gmail.com" in html, "Official email address missing"

    # AEIOU Strategic Pillars
    assert "Awareness" in html, "Pillar A (Awareness) missing"
    assert "Empowerment" in html, "Pillar E (Empowerment) missing"
    assert "Involvement" in html, "Pillar I (Involvement) missing"
    assert "Cooperation" in html, "Pillar O (Cooperation) missing"
    assert "Unity" in html, "Pillar U (Unity) missing"

    # 5 Filipino Core Values
    assert "Maka-Panginoon" in html, "Core Value 1 (Maka-Panginoon) missing"
    assert "Maka-Bansa" in html, "Core Value 2 (Maka-Bansa) missing"
    assert "Maka-Tao" in html, "Core Value 3 (Maka-Tao) missing"
    assert "Maka-Kalikasan" in html, "Core Value 4 (Maka-Kalikasan) missing"
    assert "Maka-Kapansanan" in html, "Core Value 5 (Maka-Kapansanan) missing"

    # Official Logo Seal Asset
    assert "https://hercules-cdn.com/file_i4OBoUSEzlHLaDR5Aq9cATGe" in html, (
        "Official federation seal logo CDN URL missing"
    )

    # Accessibility & Interactive Components
    assert "a11y-fab" in html, "Accessibility FAB missing"
    assert "a11y-panel" in html, "Accessibility modal panel missing"
    assert "sector-drawer" in html, "Sector sliding drawer missing"
    assert "copy-toast" in html, "1-click copy toast missing"

    # Interactive Section IDs
    assert 'id="home"' in html, "Home hero anchor missing"
    assert 'id="about"' in html, "About section anchor missing"
    assert 'id="aeiou"' in html, "AEIOU section anchor missing"
    assert 'id="values"' in html, "Core Values section anchor missing"
    assert 'id="regions"' in html, "17 Regions section anchor missing"
    assert 'id="sectors"' in html, "10 Sectors section anchor missing"
    assert 'id="support"' in html, "Support section anchor missing"
    assert 'id="contact"' in html, "Contact footer section anchor missing"


def test_federation_regions_dataset():
    """Validates full coverage of all 17 regions across Luzon, Visayas, Mindanao clusters."""
    data_js = read_file("src/data/regions.js")

    expected_region_ids = [
        "ncr", "car", "r1", "r2", "r3", "r4a", "mimaropa", "r5",  # Luzon (8)
        "r6", "r7", "r8",                                           # Visayas (3)
        "r9", "r10", "r11", "r12", "r13", "barmm"                  # Mindanao (6)
    ]

    assert len(expected_region_ids) == 17, "Expected exactly 17 regions"

    for r_id in expected_region_ids:
        assert f'id: "{r_id}"' in data_js, f"Region ID '{r_id}' missing in regions.js"

    # Check island group distribution in data
    luzon_count = len(re.findall(r'islandGroup:\s*"luzon"', data_js))
    visayas_count = len(re.findall(r'islandGroup:\s*"visayas"', data_js))
    mindanao_count = len(re.findall(r'islandGroup:\s*"mindanao"', data_js))

    assert luzon_count == 8, f"Expected 8 Luzon regions, found {luzon_count}"
    assert visayas_count == 3, f"Expected 3 Visayas regions, found {visayas_count}"
    assert mindanao_count == 6, f"Expected 6 Mindanao regions, found {mindanao_count}"


def test_disability_classifications_dataset():
    """Validates 10 disability classifications data in disabilities.js."""
    data_js = read_file("src/data/disabilities.js")

    expected_categories = [
        "visual", "hearing", "physical", "psychosocial", "intellectual",
        "learning", "speech", "autism", "chronic", "multiple"
    ]
    assert len(expected_categories) == 10, "Expected exactly 10 disability categories"

    for cat in expected_categories:
        assert f'id: "{cat}"' in data_js, (
            f"Disability category '{cat}' missing in disabilities.js"
        )


def test_landing_page_playwright_e2e():
    """Validates end-to-end interactive flows in headless browser."""
    index_uri = pathlib.Path(os.path.join(ROOT_DIR, "index.html")).as_uri()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(index_uri, wait_until="load")

        # 1. Page Title & Accessible Skip Link
        assert "PKMKPI" in page.title(), "Page title does not include PKMKPI"
        skip_link = page.locator("a[href='#main-content']")
        assert skip_link.count() > 0, "Skip to content link missing"

        # 2. Verify GSAP / ScrollTrigger initialized on page
        gsap_status = page.evaluate("""() => {
            return (typeof window.gsap !== 'undefined') && (typeof window.ScrollTrigger !== 'undefined');
        }""")
        assert gsap_status is True, "GSAP and/or ScrollTrigger not initialized on window"

        # 3. 3D Tilt Card Physics on mouse move
        tilt_card = page.locator(".tilt-card").first
        tilt_card.scroll_into_view_if_needed()
        box = tilt_card.bounding_box()
        assert box is not None, "Could not find bounding box for tilt-card"
        page.mouse.move(box["x"] + 15, box["y"] + 15)
        page.wait_for_timeout(150)

        tilt_transform = page.evaluate("""() => {
            const el = document.querySelector('.tilt-card');
            return el ? window.getComputedStyle(el).transform : 'none';
        }""")
        assert tilt_transform != "none" and "matrix" in tilt_transform, (
            f"3D tilt transform expected matrix transform on hover, got: {tilt_transform}"
        )

        # 4. Hybrid Scroll Reveal Trigger on Scroll
        page.evaluate("() => window.scrollTo(0, 1000)")
        page.wait_for_timeout(250)
        revealed_count = page.evaluate("""() => {
            return document.querySelectorAll('.sr-item.is-revealed').length;
        }""")
        assert revealed_count > 0, "Scroll reveal items did not trigger .is-revealed on scroll"

        # 5. Accessibility Suite UI interactions
        fab = page.locator("#a11y-fab")
        panel = page.locator("#a11y-panel")
        assert not panel.is_visible(), "Accessibility panel should be closed initially"
        fab.click()
        assert panel.is_visible(), "Accessibility panel did not open after FAB click"

        # Font scale toggle
        font_btn = page.locator('[data-action="font-scale"]')
        font_btn.click()
        font_scale = page.evaluate("() => document.documentElement.style.getPropertyValue('--font-scale')")
        assert font_scale in ["0.9", "1.0", "1.15"], f"Unexpected font-scale value: {font_scale}"

        # High contrast toggle
        contrast_btn = page.locator('[data-action="high-contrast"]')
        contrast_btn.click()
        has_contrast = page.evaluate("() => document.body.classList.contains('high-contrast-mode')")
        assert has_contrast is True, "High contrast mode class not applied to body"

        # Dyslexia mode toggle
        dyslexia_btn = page.locator('[data-action="dyslexia"]')
        dyslexia_btn.click()
        has_dyslexia = page.evaluate("() => document.body.classList.contains('dyslexia-mode')")
        assert has_dyslexia is True, "Dyslexia mode class not applied to body"

        # Motion pause toggle
        motion_btn = page.locator('[data-action="pause-motion"]')
        motion_btn.click()
        has_paused = page.evaluate("() => document.body.classList.contains('animations-paused')")
        assert has_paused is True, "Animations paused class not applied to body"

        # Close accessibility panel
        close_btn = page.locator("#a11y-close")
        close_btn.click()
        assert not panel.is_visible(), "Accessibility panel did not close on close button click"

        # 6. V2 Sliding Right-Side Drawer Panel
        sector_card = page.locator("[data-disability-card]").first
        sector_card.scroll_into_view_if_needed()
        sector_card.click()
        page.wait_for_timeout(150)
        drawer_open = page.evaluate("""() => {
            const d = document.querySelector('#sector-drawer');
            return d && d.classList.contains('open');
        }""")
        assert drawer_open is True, "Sliding sector drawer did not open on sector card click"

        drawer_close = page.locator("#drawer-close")
        drawer_close.click()
        page.wait_for_timeout(150)
        drawer_closed = page.evaluate("""() => {
            const d = document.querySelector('#sector-drawer');
            return d && !d.classList.contains('open');
        }""")
        assert drawer_closed is True, "Sliding sector drawer did not close on close button click"

        # 7. V2 1-Click Copy Toast
        copy_card = page.locator("[data-copy]").first
        copy_card.scroll_into_view_if_needed()
        copy_card.click()
        page.wait_for_timeout(150)
        toast_visible = page.evaluate("""() => {
            const t = document.querySelector('#copy-toast');
            return t && t.classList.contains('show');
        }""")
        assert toast_visible is True, "1-click copy toast did not show on banking card click"

        # 8. V2 17-Region Island Tab Filtering
        visayas_tab = page.locator('[data-filter="visayas"]')
        visayas_tab.scroll_into_view_if_needed()
        visayas_tab.click()
        page.wait_for_timeout(150)

        visayas_visible_count = page.evaluate("""() => {
            const cards = Array.from(document.querySelectorAll('#regions-grid [data-region-island]'));
            return cards.filter(c => c.style.display !== 'none').length;
        }""")
        assert visayas_visible_count == 3, f"Expected 3 Visayas cards visible, found {visayas_visible_count}"

        all_tab = page.locator('[data-filter="all"]')
        all_tab.click()
        page.wait_for_timeout(150)
        all_visible_count = page.evaluate("""() => {
            const cards = Array.from(document.querySelectorAll('#regions-grid [data-region-island]'));
            return cards.filter(c => c.style.display !== 'none').length;
        }""")
        assert all_visible_count == 17, f"Expected 17 cards visible for all filter, found {all_visible_count}"

        browser.close()


def run_all_tests():
    print("Running PKMKPI V2 Landing Page Verification Suite...")
    test_files_exist()
    print("  [PASS] Zero-Build Architecture & Required Files Integrity")
    test_exact_content_and_images()
    print("  [PASS] Exact Institutional Copy, Declarations, SEC Reg & Image CDN URLs")
    test_federation_regions_dataset()
    print("  [PASS] 17-Region Federation Dataset Completeness (Luzon: 8, Visayas: 3, Mindanao: 6)")
    test_disability_classifications_dataset()
    print("  [PASS] 10 Disability Classifications Dataset & Rights")
    test_landing_page_playwright_e2e()
    print("  [PASS] Playwright E2E Interactive Verification (GSAP, 3D Tilt, Reveal, A11y Suite, Drawer, Copy, Tabs)")
    print("\nALL V2 LANDING PAGE TESTS PASSED (100%).")


if __name__ == "__main__":
    run_all_tests()
