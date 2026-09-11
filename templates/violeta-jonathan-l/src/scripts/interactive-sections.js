// pkmkpi-v2/src/scripts/interactive-sections.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. 1-Click Clipboard Copy with Toast Feedback
  const copyElements = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('copy-toast');
  const toastMsg = document.getElementById('copy-toast-msg');
  let toastTimeout;

  copyElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = el.getAttribute('data-copy');
      if (!textToCopy) return;

      const showToast = () => {
        if (toast) {
          if (toastMsg) {
            toastMsg.textContent = `Na-kopya (${textToCopy}) sa clipboard!`;
          }
          toast.classList.add('show');
          clearTimeout(toastTimeout);
          toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
          }, 3500);
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(showToast).catch(() => {
          fallbackCopy(textToCopy);
          showToast();
        });
      } else {
        fallbackCopy(textToCopy);
        showToast();
      }
    });

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    ta.style.pointerEvents = 'none';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.warn('Fallback copy failed', err);
    }
    document.body.removeChild(ta);
  }

  // 2. Sliding Right-Side Drawer Panel Logic
  const drawer = document.getElementById('sector-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close');
  const drawerTitle = document.getElementById('drawer-title');
  const drawerIcon = document.getElementById('drawer-icon');
  const drawerContent = document.getElementById('drawer-content');
  let lastFocusedElement;

  const sectors = window.DISABILITY_CLASSIFICATIONS || window.PKMKPI_Disabilities || [];

  const openDrawer = (sector) => {
    if (!drawer) return;
    lastFocusedElement = document.activeElement;
    if (drawerTitle) drawerTitle.textContent = sector.name;
    if (drawerIcon) drawerIcon.textContent = sector.icon || '♿';
    if (drawerContent) {
      drawerContent.innerHTML = `
        <div class="space-y-4">
          <div class="bg-brand-petrol-dark p-4 rounded-2xl border border-brand-petrol-light">
            <h4 class="text-xs font-black text-brand-gold uppercase tracking-wider mb-1">Sector Overview & Needs</h4>
            <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">${sector.summary}</p>
          </div>

          <div class="bg-brand-petrol-dark p-4 rounded-2xl border border-brand-petrol-light">
            <h4 class="text-xs font-black text-brand-lime uppercase tracking-wider mb-1">Guaranteed Legal Rights</h4>
            <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">${sector.rights}</p>
          </div>

          <div class="bg-brand-petrol-dark/60 p-4 rounded-2xl border border-brand-petrol-light">
            <h4 class="text-xs font-black text-brand-highlime uppercase tracking-wider mb-1">Governing Laws</h4>
            <ul class="text-xs text-gray-300 space-y-1 list-disc list-inside">
              <li>Magna Carta for Disabled Persons (RA 7277 / RA 9442)</li>
              <li>Accessibility Law (Batas Pambansa Blg. 344)</li>
              <li>Mandatory 1% PWD Employment Quota (RA 10524)</li>
              <li>Filipino Sign Language Act (RA 11106 - Deaf Sector)</li>
              <li>Mental Health Act (RA 11036 - Psychosocial Sector)</li>
            </ul>
          </div>

          <a href="#contribute" onclick="document.getElementById('drawer-close').click()" class="btn-pill-primary w-full text-center block text-xs uppercase tracking-wider py-3 shadow-lg font-black mt-4">
            Support This Sector
          </a>
        </div>
      `;
    }

    drawer.classList.add('open');
    if (overlay) {
      overlay.classList.add('open');
    }
    drawer.setAttribute('aria-hidden', 'false');
    closeBtn?.focus();
    document.addEventListener('keydown', trapFocus);
  };

  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (overlay) {
      overlay.classList.remove('open');
    }
    drawer.setAttribute('aria-hidden', 'true');
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
    document.removeEventListener('keydown', trapFocus);
  };

  const trapFocus = (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      return;
    }
    if (e.key === 'Tab' && drawer) {
      const focusables = drawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  };

  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // 3. Attach Click Listeners to Static Sector Cards
  const sectorCards = document.querySelectorAll('[data-disability-card]');
  sectorCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-disability-card') || '0', 10);
      if (sectors[idx]) openDrawer(sectors[idx]);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(card.getAttribute('data-disability-card') || '0', 10);
        if (sectors[idx]) openDrawer(sectors[idx]);
      }
    });
  });

  // 4. Island Tabs Filtering on Static Region Cards
  const islandTabs = document.querySelectorAll('#island-tabs button');
  const regionCards = document.querySelectorAll('#regions-grid [data-region-island]');

  islandTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      islandTabs.forEach(t => {
        t.className = 'bg-brand-petrol-dark text-gray-300 hover:text-white border border-brand-petrol-light font-bold text-xs px-5 py-2.5 rounded-full transition-all';
      });
      tab.className = 'bg-brand-lime text-brand-petrol font-black text-xs px-5 py-2.5 rounded-full transition-all';
      const filter = tab.getAttribute('data-filter') || 'all';

      regionCards.forEach(card => {
        const group = card.getAttribute('data-region-island');
        if (filter === 'all' || group === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Mobile Navigation Menu Toggle is handled by animations.js with GSAP motion

  // 6. Leadership Directory Category Filtering (about.html)
  const leadershipFilters = document.querySelectorAll('[data-leadership-filter]');
  const leadershipCards = document.querySelectorAll('[data-leadership-card]');

  if (leadershipFilters.length > 0 && leadershipCards.length > 0) {
    leadershipFilters.forEach(tab => {
      tab.addEventListener('click', () => {
        leadershipFilters.forEach(t => {
          t.className = 'bg-brand-petrol-dark text-gray-300 hover:text-white border border-brand-petrol-light font-bold text-xs px-5 py-2.5 rounded-full transition-all';
        });
        tab.className = 'bg-brand-lime text-brand-petrol font-black text-xs px-5 py-2.5 rounded-full transition-all';
        const filter = tab.getAttribute('data-leadership-filter') || 'all';

        leadershipCards.forEach(card => {
          const category = card.getAttribute('data-leadership-category');
          if (filter === 'all' || category === filter) {
            card.style.display = '';
            if (window.gsap) {
              window.gsap.fromTo(card, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
            }
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
