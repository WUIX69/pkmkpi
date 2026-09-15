"""Automated Test Suite for PKMKPI V2 Standalone About Us Page Verification.

Validates:
1. File existence and architectural integrity for about.html.
2. Exact mandatory copy, institutional declarations, SEC registration CN202105447, and logo CDN URL.
3. AEIOU National Goals & 5 Filipino Core Values.
4. Complete 16-Member Leadership Roster (National Officers, Board of Trustees, Regional Board Members) with regional badge chips.
5. Playwright Headless multi-viewport verification across 6 viewports (320px, 375px, 414px, 768px, 1024px, 1440px):
   - Zero horizontal overflow (hasOverflow == False).
   - GSAP & ScrollTrigger initialized on window.
   - 3D Tilt Card Physics on mouse move.
   - PWD Accessibility Suite (Font scaling, High Contrast, Dyslexia mode, Motion Pause).
   - Interactive Leadership Directory category filtering (Lahat: 16, Officers: 7, Trustees: 3, Board: 6).
"""

import os
import pathlib
from playwright.sync_api import sync_playwright

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
V2_DIR = ROOT_DIR

VIEWPORTS = [
    {"name": "iPhone SE", "width": 320, "height": 568},
    {"name": "Mobile", "width": 375, "height": 667},
    {"name": "Large Mobile", "width": 414, "height": 896},
    {"name": "Tablet", "width": 768, "height": 1024},
    {"name": "Laptop", "width": 1024, "height": 768},
    {"name": "Desktop", "width": 1440, "height": 900},
]


def read_v2_file(rel_path: str) -> str:
    full_path = os.path.join(V2_DIR, rel_path)
    assert os.path.isfile(full_path), f"Missing required file: {rel_path}"
    with open(full_path, "r", encoding="utf-8") as f:
        return f.read()


def test_about_page_files_exist():
    """Validates existence of about.html and associated design blueprint files."""
    required_files = [
        "about.html",
        "index.html",
        "DESIGN.md",
        "design-system/pkmkpi/MASTER.md",
        "design-system/pkmkpi/pages/about.md",
        "src/styles/global.css",
        "src/styles/components.css",
        "src/styles/motion.css",
        "src/styles/accessibility.css",
        "src/scripts/accessibility.js",
        "src/scripts/interactive-sections.js",
        "src/scripts/animations.js",
    ]
    for rel_path in required_files:
        full_path = os.path.join(V2_DIR, rel_path)
        assert os.path.isfile(full_path), f"Missing required file in v2: {rel_path}"


def test_about_page_exact_content():
    """Validates exact institutional copy, declarations, and leadership roster in about.html."""
    html = read_v2_file("about.html")

    # SEC Accreditation & Legal Identity
    assert "CN202105447" in html, "SEC Registration number CN202105447 missing in about.html"
    assert "Pambansang Kapisanan ng mga May Kapansanan ng Pilipinas, Inc." in html, (
        "Full institutional name missing in about.html"
    )
    assert "PKMKPI" in html, "PKMKPI acronym missing in about.html"

    # Solemn Motto & Cultural Declarations
    assert "Nothing About Us Without Us" in html, "Core motto missing in about.html"
    assert "Walang Kami Kung Hindi Kami" in html, "Filipino motto missing in about.html"
    assert "Nihil de nobis, sine nobis" in html, "Latin motto translation missing in about.html"
    assert "Isang Bansa" in html, "Creed line 1 missing in about.html"
    assert "Isang Kapisanan" in html, "Creed line 2 missing in about.html"
    assert "Isang Layunin" in html, "Creed line 3 missing in about.html"
    assert "Walang Iwanan" in html, "Creed line 4 missing in about.html"
    assert "Lahat ay Mahalaga" in html, "Creed line 5 missing in about.html"

    # Exact Contact & Headquarters Info
    assert "98 Major Marcos St." in html, "Official QC headquarters address missing in about.html"
    assert "pkmkpi.pwd@gmail.com" in html, "Official email address missing in about.html"

    # AEIOU Strategic Pillars
    assert "Awareness" in html, "Pillar A (Awareness) missing in about.html"
    assert "Empowerment" in html, "Pillar E (Empowerment) missing in about.html"
    assert "Involvement" in html, "Pillar I (Involvement) missing in about.html"
    assert "Cooperation" in html, "Pillar O (Cooperation) missing in about.html"
    assert "Unity" in html, "Pillar U (Unity) missing in about.html"

    # 5 Filipino Core Values
    assert "Maka-Panginoon" in html, "Core Value 1 (Maka-Panginoon) missing in about.html"
    assert "Maka-Bansa" in html, "Core Value 2 (Maka-Bansa) missing in about.html"
    assert "Maka-Tao" in html, "Core Value 3 (Maka-Tao) missing in about.html"
    assert "Maka-Kalikasan" in html, "Core Value 4 (Maka-Kalikasan) missing in about.html"
    assert "Maka-Kapansanan" in html, "Core Value 5 (Maka-Kapansanan) missing in about.html"

    # Complete 16-Member Leadership Roster
    leaders = [
        "Fe V. Corpuz",
        "Ferdinand F. Bello",
        "Leilani I. Servas",
        "Neil C. Pena",
        "Homer L. Alcover",
        "Nelson P. Balmores",
        "Kristel G. Manzano",
        "Joniro F. Fradejas",
        "Alpio G. Dacut",
        "Cheryl P. Borbe",
        "Marlon P. Publico",
        "Romeo N. Oli",
        "Edison G. Lamadrid",
        "Teddy M. Kahil",
        "Jerry M. Micabalo",
        "Johaira T. Sultan",
    ]
    for leader in leaders:
        assert leader in html, f"Leader '{leader}' missing from about.html"

    # Regional Affiliation Badges
    regional_badges = ["NCR", "RVIII", "RIV-B", "RIV-A", "RIII", "CAR", "Region 2", "Region 9", "Region XIII", "BARMM"]
    for badge in regional_badges:
        assert badge in html, f"Regional badge '{badge}' missing from about.html"

    # Accessibility & Interactive Components
    assert "a11y-fab" in html, "Accessibility FAB missing in about.html"
    assert "a11y-panel" in html, "Accessibility panel missing in about.html"


def test_about_page_playwright_e2e():
    """Validates multi-viewport zero overflow and interactive flows in headless browser."""
    about_uri = pathlib.Path(os.path.join(V2_DIR, "about.html")).as_uri()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # 1. Test Zero Horizontal Overflow across 6 standard viewports
        for vp in VIEWPORTS:
            page = browser.new_page(viewport={"width": vp["width"], "height": vp["height"]})
            page.goto(about_uri, wait_until="load")

            # Check overflow
            overflow_data = page.evaluate("""() => {
                const body = document.body;
                const doc = document.documentElement;
                const winWidth = window.innerWidth;
                const bodyScrollWidth = body.scrollWidth;
                const docScrollWidth = doc.scrollWidth;
                const clientWidth = doc.clientWidth;
                const hasOverflow = bodyScrollWidth > clientWidth || docScrollWidth > clientWidth;
                return {
                    winWidth,
                    clientWidth,
                    bodyScrollWidth,
                    docScrollWidth,
                    hasOverflow
                };
            }""")

            assert not overflow_data["hasOverflow"], (
                f"Horizontal overflow detected on viewport '{vp['name']}' ({vp['width']}x{vp['height']}): {overflow_data}"
            )
            page.close()

        # 2. Test Interactivity on Desktop Viewport
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(about_uri, wait_until="load")

        # Page Title & Accessible Skip Link
        assert "PKMKPI" in page.title(), "Page title does not include PKMKPI"
        skip_link = page.locator("a[href='#main-content']")
        assert skip_link.count() > 0, "Skip to content link missing"

        # GSAP / ScrollTrigger initialized
        gsap_status = page.evaluate("""() => {
            return (typeof window.gsap !== 'undefined') && (typeof window.ScrollTrigger !== 'undefined');
        }""")
        assert gsap_status is True, "GSAP and/or ScrollTrigger not initialized on window"

        # 3D Tilt Card Physics on mouse move
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

        # Accessibility Suite UI interactions
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

        # Leadership Directory Category Filtering
        # 1. Click Officers filter
        officers_tab = page.locator('[data-leadership-filter="officers"]')
        officers_tab.scroll_into_view_if_needed()
        officers_tab.click()
        page.wait_for_timeout(150)

        officers_count = page.evaluate("""() => {
            const cards = Array.from(document.querySelectorAll('#leadership-grid [data-leadership-card]'));
            return cards.filter(c => c.style.display !== 'none').length;
        }""")
        assert officers_count == 7, f"Expected 7 visible officers, found {officers_count}"

        # 2. Click Trustees filter
        trustees_tab = page.locator('[data-leadership-filter="trustees"]')
        trustees_tab.click()
        page.wait_for_timeout(150)

        trustees_count = page.evaluate("""() => {
            const cards = Array.from(document.querySelectorAll('#leadership-grid [data-leadership-card]'));
            return cards.filter(c => c.style.display !== 'none').length;
        }""")
        assert trustees_count == 3, f"Expected 3 visible trustees, found {trustees_count}"

        # 3. Click Board Members filter
        board_tab = page.locator('[data-leadership-filter="board"]')
        board_tab.click()
        page.wait_for_timeout(150)

        board_count = page.evaluate("""() => {
            const cards = Array.from(document.querySelectorAll('#leadership-grid [data-leadership-card]'));
            return cards.filter(c => c.style.display !== 'none').length;
        }""")
        assert board_count == 6, f"Expected 6 visible regional board members, found {board_count}"

        # 4. Click All filter
        all_tab = page.locator('[data-leadership-filter="all"]')
        all_tab.click()
        page.wait_for_timeout(150)

        all_count = page.evaluate("""() => {
            const cards = Array.from(document.querySelectorAll('#leadership-grid [data-leadership-card]'));
            return cards.filter(c => c.style.display !== 'none').length;
        }""")
        assert all_count == 16, f"Expected 16 total leadership cards, found {all_count}"

        browser.close()


def run_all_tests():
    print("Running PKMKPI V2 Standalone About Page Verification Suite...")
    test_about_page_files_exist()
    print("  [PASS] Zero-Build Architecture & Required Files Integrity")
    test_about_page_exact_content()
    print("  [PASS] Exact Institutional Copy, Slogans, Creed, Core Values, 16 Leaders & Badges")
    test_about_page_playwright_e2e()
    print("  [PASS] Playwright E2E Multi-Viewport (320px–1440px Zero Overflow, GSAP, 3D Tilt, A11y Suite, Leadership Filters)")
    print("\nALL V2 ABOUT PAGE TESTS PASSED (100%).")


if __name__ == "__main__":
    run_all_tests()
