// pkmkpi-v2/src/scripts/accessibility.js
/**
 * PKMKPI V2 PWD Accessibility Suite (Zero-Build)
 * Features:
 * - Persistent Accessible Modal (Alt+A shortcut, Escape to close, focus trap)
 * - 3-step font scaler (--font-scale: 0.9 / 1.0 / 1.15)
 * - AAA High-Contrast mode toggle (Dark & Gold)
 * - Dyslexia-friendly typeface switcher (OpenDyslexic)
 * - Instant animation pause toggle (body.animations-paused + CustomEvent broadcast)
 * - Web Speech API text-to-speech reader with real-time utterance state
 */

(function initPKMKPIAccessibility() {
  function setupA11y() {
    const fab = document.getElementById('a11y-fab');
    const panel = document.getElementById('a11y-panel');
    const closeBtn = document.getElementById('a11y-close');
    const fontScaleIndicator = document.getElementById('font-scale-indicator');

    if (!fab || !panel) return;

    let lastFocusedElement = null;

    // Toggle Panel Visibility
    const openPanel = () => {
      lastFocusedElement = document.activeElement;
      panel.classList.remove('hidden');
      panel.classList.add('flex');
      panel.setAttribute('aria-hidden', 'false');
      fab.setAttribute('aria-expanded', 'true');

      if (window.gsap) {
        gsap.fromTo(panel, 
          { opacity: 0, y: 16, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power3.out' }
        );
      }

      // Focus first actionable item in panel
      const firstAction = panel.querySelector('button');
      if (firstAction) firstAction.focus();
    };

    const closePanel = () => {
      panel.classList.add('hidden');
      panel.classList.remove('flex');
      panel.setAttribute('aria-hidden', 'true');
      fab.setAttribute('aria-expanded', 'false');

      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      } else {
        fab.focus();
      }
    };

    const togglePanel = () => {
      const isHidden = panel.classList.contains('hidden');
      if (isHidden) {
        openPanel();
      } else {
        closePanel();
      }
    };

    fab.addEventListener('click', togglePanel);
    closeBtn?.addEventListener('click', closePanel);

    // Keyboard shortcut: Alt+A & Escape
    window.addEventListener('keydown', (e) => {
      if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        togglePanel();
      }
      if (e.key === 'Escape' && !panel.classList.contains('hidden')) {
        e.preventDefault();
        closePanel();
      }
    });

    // Panel Focus Trap
    panel.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusables = panel.querySelectorAll('button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Action Handlers
    const actionButtons = panel.querySelectorAll('[data-action]');
    const fontButtons = panel.querySelectorAll('[data-a11y-font]');
    let currentScale = 1.0;
    const scales = [0.9, 1.0, 1.15];

    fontButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-a11y-font');
        if (type === 'decrease') currentScale = 0.9;
        else if (type === 'reset') currentScale = 1.0;
        else if (type === 'increase') currentScale = 1.15;
        document.documentElement.style.setProperty('--font-scale', currentScale);
        if (fontScaleIndicator) {
          fontScaleIndicator.textContent = `${Math.round(currentScale * 100)}%`;
        }
      });
    });

    actionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');

        if (action === 'font-scale') {
          const nextIdx = (scales.indexOf(currentScale) + 1) % scales.length;
          currentScale = scales[nextIdx];
          document.documentElement.style.setProperty('--font-scale', currentScale);
          if (fontScaleIndicator) {
            fontScaleIndicator.textContent = `${Math.round(currentScale * 100)}%`;
          }
          btn.setAttribute('aria-valuenow', currentScale);
        } else if (action === 'high-contrast') {
          const isHighContrast = document.body.classList.toggle('high-contrast-mode');
          btn.setAttribute('aria-pressed', String(isHighContrast));
        } else if (action === 'dyslexia') {
          const isDyslexia = document.body.classList.toggle('dyslexia-mode');
          btn.setAttribute('aria-pressed', String(isDyslexia));
        } else if (action === 'pause-motion') {
          const isPaused = document.body.classList.toggle('animations-paused');
          btn.setAttribute('aria-pressed', String(isPaused));

          // Broadcast custom event for GSAP & native animations engine
          window.dispatchEvent(new CustomEvent('pkmkpi-motion-toggle', {
            detail: { paused: isPaused }
          }));
        }
      });
    });

    // Reset All Settings Handler
    const resetAllBtn = panel.querySelector('[data-a11y-reset="all"]');
    if (resetAllBtn) {
      resetAllBtn.addEventListener('click', () => {
        // 1. Reset font scale
        currentScale = 1.0;
        document.documentElement.style.setProperty('--font-scale', '1.0');
        if (fontScaleIndicator) fontScaleIndicator.textContent = '100%';

        // 2. Reset High Contrast
        document.body.classList.remove('high-contrast-mode');
        const contrastBtn = panel.querySelector('[data-action="high-contrast"]');
        if (contrastBtn) contrastBtn.setAttribute('aria-pressed', 'false');

        // 3. Reset Dyslexia Mode
        document.body.classList.remove('dyslexia-mode');
        const dyslexiaBtn = panel.querySelector('[data-action="dyslexia"]');
        if (dyslexiaBtn) dyslexiaBtn.setAttribute('aria-pressed', 'false');

        // 4. Reset Pause Motion
        document.body.classList.remove('animations-paused');
        const motionBtn = panel.querySelector('[data-action="pause-motion"]');
        if (motionBtn) motionBtn.setAttribute('aria-pressed', 'false');
        window.dispatchEvent(new CustomEvent('pkmkpi-motion-toggle', {
          detail: { paused: false }
        }));

        // 5. Stop TTS
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const ttsBtn = panel.querySelector('[data-action="tts-read"]');
          if (ttsBtn) {
            ttsBtn.classList.remove('bg-brand-gold');
            ttsBtn.classList.add('bg-brand-lime');
            ttsBtn.setAttribute('aria-pressed', 'false');
          }
        }
      });
    }

    actionButtons.forEach(btn => {
      if (btn.getAttribute('data-action') === 'tts-read') {
        btn.addEventListener('click', () => {
          // Web Speech API Text-to-Speech Engine
          if ('speechSynthesis' in window) {
            if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
              window.speechSynthesis.cancel();
              btn.classList.remove('bg-brand-gold');
              btn.classList.add('bg-brand-lime');
              btn.setAttribute('aria-pressed', 'false');
            } else {
              window.speechSynthesis.cancel(); // Clear queue
              const mainEl = document.querySelector('main') || document.getElementById('main-content') || document.body;

              // Extract human readable text, excluding scripts, svgs, navigation, and modal drawers
              let textContent = '';
              const clone = mainEl.cloneNode(true);
              clone.querySelectorAll('script, style, noscript, svg, nav, aside, #a11y-panel, #sector-drawer').forEach(el => el.remove());
              textContent = (clone.innerText || clone.textContent || '').replace(/\s+/g, ' ').trim();

              if (!textContent) {
                textContent = document.title;
              }

              const utterance = new SpeechSynthesisUtterance(textContent.slice(0, 4000));
              utterance.rate = 0.95;
              utterance.pitch = 1.0;
              utterance.lang = 'tl-PH'; // Philippine locale

              const resetBtn = () => {
                btn.classList.remove('bg-brand-gold');
                btn.classList.add('bg-brand-lime');
                btn.setAttribute('aria-pressed', 'false');
              };

              utterance.onstart = () => {
                btn.classList.remove('bg-brand-lime');
                btn.classList.add('bg-brand-gold');
                btn.setAttribute('aria-pressed', 'true');
              };

              utterance.onend = resetBtn;
              utterance.onerror = resetBtn;

              window.speechSynthesis.speak(utterance);
            }
          } else {
            alert('Web Speech API is not supported on this browser.');
          }
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupA11y);
  } else {
    setupA11y();
  }
})();
