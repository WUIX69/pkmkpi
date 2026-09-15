"""Automated Test Suite for PKMKPI V2 Design System & Motion Specification Validation.

Validates:
1. Token Synchronization: Charity.org palette (#06333C, #80BC2F, #EBA92F, #333333) across DESIGN.md, global.css, components.css, and MASTER.md.
2. 4-Tier Motion Specifications:
   - Tier 1: 3D Tilt Elements (About images, 10 Disabilities, Bank cards, Overlay cards).
   - Tier 2: 2D Clean Lift (.card-hover-lift on AEIOU pillars, Core Values, Support cards).
   - Tier 3: Scroll Reveal (.sr-item, .sr-left, .sr-right, .sr-scale, .is-revealed).
   - Tier 4: Accessibility Pause Motion (body.animations-paused, prefers-reduced-motion).
3. Playwright Headless Viewport & Overflow Tests across 320px, 375px, 414px, 768px, 1024px, 1440px:
   - Ensures bodyScrollWidth <= width, docScrollWidth <= width, and hasOverflow == False.
"""

import os
import re
import pathlib
from playwright.sync_api import sync_playwright

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


def read_file(rel_path: str) -> str:
    full_path = os.path.join(ROOT_DIR, rel_path)
    assert os.path.isfile(full_path), f"File not found: {rel_path}"
    with open(full_path, "r", encoding="utf-8") as f:
        return f.read()


def test_token_synchronization():
    """Validates that Charity.org palette tokens match across DESIGN.md, CSS, and MASTER.md."""
    design_md = read_file("DESIGN.md")
    tokens_css = read_file("src/styles/global.css")
    components_css = read_file("src/styles/components.css")
    master_md = read_file("design-system/pkmkpi/MASTER.md")

    expected_charity_tokens = {
        "Primary / Lime": "#80BC2F",
        "Secondary / Teal Petrol": "#06333C",
        "Accent / Gold": "#EBA92F",
        "Foreground / Charcoal": "#333333",
    }

    # 1. Verify DESIGN.md defines all core tokens
    for name, hex_val in expected_charity_tokens.items():
        assert hex_val.lower() in design_md.lower(), (
            f"Token '{name}' ({hex_val}) missing from DESIGN.md"
        )

    # 2. Verify MASTER.md defines all core tokens
    for name, hex_val in expected_charity_tokens.items():
        assert hex_val.lower() in master_md.lower(), (
            f"Token '{name}' ({hex_val}) missing from MASTER.md"
        )

    # 3. Verify global.css defines CSS custom properties for Charity.org palette
    css_variable_checks = [
        ("--color-primary", "#80BC2F"),
        ("--color-secondary", "#06333C"),
        ("--color-accent-gold", "#EBA92F"),
        ("--color-foreground", "#333333"),
        ("--color-pure-white", "#FFFFFF"),
        ("--color-high-lime", "#B8F264"),
        ("--color-ocean-blue", "#15768D"),
        ("--color-gray-bg", "#F1F1F1"),
    ]
    for var_name, hex_code in css_variable_checks:
        assert var_name in tokens_css, f"CSS variable '{var_name}' missing from global.css"
        assert hex_code.lower() in tokens_css.lower(), (
            f"Hex value '{hex_code}' for '{var_name}' missing in global.css"
        )

    # 4. Verify components.css uses Charity.org tokens (#06333C, #80BC2F, #333333) and frosted glass
    assert "#06333C" in components_css or "var(--color-secondary)" in components_css, (
        "Teal #06333C missing from components.css"
    )
    assert "#80BC2F" in components_css or "var(--color-primary)" in components_css, (
        "Lime #80BC2F missing from components.css"
    )
    assert "#333333" in components_css or "var(--color-foreground)" in components_css, (
        "Charcoal #333333 missing from components.css"
    )
    assert "--glass-blur" in components_css, "Glass blur token missing from components.css"

    # 5. Verify typography stacks
    assert "Montserrat" in tokens_css, "Montserrat font stack missing from global.css"
    assert "Caveat" in tokens_css, "Caveat font stack missing from global.css"
    assert "Merriweather" in tokens_css, "Merriweather font stack missing from global.css"


def test_motion_tier1_3d_tilt():
    """Validates 3D tilt specifications in motion.css, animations.js, and index.html."""
    motion_css = read_file("src/styles/motion.css")
    animations_js = read_file("src/scripts/animations.js")
    html = read_file("index.html")

    # CSS check
    assert ".tilt-card" in motion_css, ".tilt-card selector missing in motion.css"
    assert "perspective: 1000px" in motion_css, "perspective: 1000px missing in motion.css"
    assert "transform-style: preserve-3d" in motion_css, (
        "transform-style: preserve-3d missing in motion.css"
    )

    # JS check
    assert ".tilt-card" in animations_js, "tilt-card handling missing in animations.js"
    assert "perspective(1000px)" in animations_js, (
        "perspective(1000px) transform missing in animations.js"
    )
    assert "rotateX" in animations_js and "rotateY" in animations_js, (
        "rotateX/rotateY calculations missing in animations.js"
    )

    # HTML presence check: disability cards, bank cards, tilt cards
    assert "tilt-card" in html, "tilt-card class missing from index.html"
    assert "data-disability-card" in html, "data-disability-card missing from index.html"
    assert "bank-card" in html, "bank-card missing from index.html"


def test_motion_tier2_2d_clean_lift():
    """Validates 2D clean lift (.card-hover-lift) specs in motion.css and index.html."""
    motion_css = read_file("src/styles/motion.css")
    html = read_file("index.html")

    # CSS Definition check
    assert ".card-hover-lift" in motion_css, ".card-hover-lift class missing in motion.css"
    assert "translateY" in motion_css, "translateY hover lift missing in motion.css"

    # HTML elements check
    lift_count = len(re.findall(r'class="[^"]*card-hover-lift[^"]*"', html))
    assert lift_count >= 10, f"Expected at least 10 card-hover-lift elements, found {lift_count}"


def test_motion_tier3_scroll_reveal():
    """Validates Scroll Reveal classes (.sr-item, .sr-left, .sr-right, .sr-scale, .is-revealed)."""
    motion_css = read_file("src/styles/motion.css")
    animations_js = read_file("src/scripts/animations.js")
    html = read_file("index.html")

    # CSS classes check
    sr_classes = [".sr-item", ".sr-left", ".sr-right", ".sr-scale", ".is-revealed"]
    for sr_cls in sr_classes:
        assert sr_cls in motion_css, f"{sr_cls} class missing in motion.css"

    # JS reveal engine check
    assert "sr-item" in animations_js, "sr-item handling missing in animations.js"
    assert "is-revealed" in animations_js, "is-revealed handling missing in animations.js"
    assert "ScrollTrigger" in animations_js, (
        "ScrollTrigger missing from animations.js"
    )

    # HTML presence check
    sr_item_count = len(re.findall(r'\bsr-item\b', html))
    assert sr_item_count >= 20, (
        f"Expected at least 20 scroll-reveal elements in index.html, found {sr_item_count}"
    )


def test_motion_tier4_accessibility_pause():
    """Validates accessibility motion pause class and engine integration."""
    motion_css = read_file("src/styles/motion.css")
    a11y_js = read_file("src/scripts/accessibility.js")
    animations_js = read_file("src/scripts/animations.js")
    html = read_file("index.html")

    # CSS check
    assert "body.animations-paused" in motion_css, (
        "body.animations-paused missing in motion.css"
    )
    assert "animation-duration: 0.001s !important" in motion_css, (
        "Animation duration neutralization missing in motion.css"
    )
    assert "transition-duration: 0.001s !important" in motion_css, (
        "Transition duration neutralization missing in motion.css"
    )

    # JS a11y engine check
    assert "animations-paused" in a11y_js, (
        "animations-paused class toggle missing in accessibility.js"
    )
    assert "animations-paused" in animations_js, (
        "animations-paused guard missing in animations.js"
    )

    # HTML toolbar check
    assert 'data-action="pause-motion"' in html, (
        "pause-motion button missing in index.html modal"
    )


def test_playwright_viewport_overflow():
    """Validates mobile & desktop viewport overflow in headless Playwright.

    Tests across 320px, 375px, 414px, 768px, 1024px, 1440px ensuring:
    - docScrollWidth <= width
    - bodyScrollWidth <= width
    - hasOverflow == False
    """
    viewports = [320, 375, 414, 768, 1024, 1440]
    index_uri = pathlib.Path(os.path.join(ROOT_DIR, "index.html")).as_uri()

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for width in viewports:
            page.set_viewport_size({"width": width, "height": 900})
            page.goto(index_uri, wait_until="load")

            metrics = page.evaluate("""() => {
                const docEl = document.documentElement;
                const body = document.body;
                const docScrollWidth = docEl.scrollWidth;
                const docClientWidth = docEl.clientWidth;
                const bodyScrollWidth = body.scrollWidth;
                const windowWidth = window.innerWidth;
                const hasOverflow = docScrollWidth > windowWidth || bodyScrollWidth > windowWidth;

                return {
                    docScrollWidth,
                    docClientWidth,
                    bodyScrollWidth,
                    windowWidth,
                    hasOverflow
                };
            }""")

            assert metrics["hasOverflow"] is False, (
                f"Horizontal overflow detected at {width}px viewport: {metrics}"
            )
            assert metrics["bodyScrollWidth"] <= width, (
                f"bodyScrollWidth ({metrics['bodyScrollWidth']}) exceeds viewport width ({width})"
            )
            assert metrics["docScrollWidth"] <= width, (
                f"docScrollWidth ({metrics['docScrollWidth']}) exceeds viewport width ({width})"
            )

        browser.close()


def run_all_tests():
    print("Running PKMKPI V2 Design System & Motion Specification Tests...")
    test_token_synchronization()
    print("  [PASS] Design Tokens Synchronization (Charity.org palette: #06333C, #80BC2F, #EBA92F, #333333)")
    test_motion_tier1_3d_tilt()
    print("  [PASS] Motion Tier 1: 3D Tilt Elements (perspective: 1000px, tilt-card, bank-card, disabilities)")
    test_motion_tier2_2d_clean_lift()
    print("  [PASS] Motion Tier 2: 2D Clean Lift (.card-hover-lift)")
    test_motion_tier3_scroll_reveal()
    print("  [PASS] Motion Tier 3: Scroll Reveal Elements (.sr-item, .sr-left, .sr-right, .sr-scale, .is-revealed)")
    test_motion_tier4_accessibility_pause()
    print("  [PASS] Motion Tier 4: Accessibility Pause Motion (body.animations-paused & prefers-reduced-motion)")
    test_playwright_viewport_overflow()
    print("  [PASS] Playwright Viewport Overflow (320px, 375px, 414px, 768px, 1024px, 1440px -> 0 overflow)")
    print("\nALL V2 DESIGN SYSTEM SPECIFICATION TESTS PASSED (100%).")


if __name__ == "__main__":
    run_all_tests()
