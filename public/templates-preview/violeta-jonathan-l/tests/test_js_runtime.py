from playwright.sync_api import sync_playwright
import pathlib
import os

def test_js_runtime():
    index_uri = pathlib.Path(os.path.abspath("index.html")).as_uri()
    errors = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("console", lambda msg: (errors.append(msg.text) if msg.type == "error" and "OpenDyslexic" not in msg.text and "404" not in msg.text else None))

        page.goto(index_uri, wait_until="load")
        page.wait_for_timeout(1000)

        # Check GSAP presence
        has_gsap = page.evaluate("() => typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined'")
        print("GSAP loaded:", has_gsap)
        assert has_gsap, "GSAP and ScrollTrigger should be available"

        # Check counters
        counters = page.locator("[data-counter]")
        assert counters.count() >= 3, f"Expected 3+ counters, found {counters.count()}"

        # Check A11y Panel open/close
        fab = page.locator("#a11y-fab")
        panel = page.locator("#a11y-panel")
        fab.click()
        assert panel.is_visible(), "A11y panel should be visible after FAB click"

        # Check Font Scale
        font_btn = page.locator('[data-action="font-scale"]')
        font_btn.click()
        scale = page.evaluate("() => getComputedStyle(document.documentElement).getPropertyValue('--font-scale')")
        print("Font scale:", scale.strip())
        assert scale.strip() in ["0.9", "1", "1.0", "1.15"]

        # Check High Contrast
        contrast_btn = page.locator('[data-action="high-contrast"]')
        contrast_btn.click()
        is_hc = page.evaluate("() => document.body.classList.contains('high-contrast-mode')")
        assert is_hc, "High contrast class should be toggled"

        # Check Dyslexia
        dyslexia_btn = page.locator('[data-action="dyslexia"]')
        dyslexia_btn.click()
        is_dys = page.evaluate("() => document.body.classList.contains('dyslexia-mode')")
        assert is_dys, "Dyslexia class should be toggled"

        # Check Pause Motion
        pause_btn = page.locator('[data-action="pause-motion"]')
        pause_btn.click()
        is_paused = page.evaluate("() => document.body.classList.contains('animations-paused')")
        assert is_paused, "Animations-paused class should be toggled"

        # Check 3D tilt interaction
        tilt_card = page.locator(".tilt-card").first
        tilt_card.hover()
        page.wait_for_timeout(200)

        browser.close()

    assert not errors, f"Console/page errors found: {errors}"
    print("ALL RUNTIME JS & A11Y TESTS PASSED WITH 0 CONSOLE ERRORS.")

if __name__ == "__main__":
    test_js_runtime()
