// pkmkpi-v2/src/scripts/animations.js
/**
 * PKMKPI V2 Comprehensive 4-Tier Motion & Micro-Interaction Engine
 * - Tier 1: Tactile 3D Perspective Tilt Physics (GSAP + Spring Recovery)
 * - Tier 2: Clean 2D Micro-Lift Elevation
 * - Tier 3: Zero-Lag Scroll Reveals & Stagger Batches (GSAP ScrollTrigger)
 * - Tier 4: Accessibility Motion Bypass (Instant Override + CustomEvent Sync)
 */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function initPKMKPIAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Helper: Check if animations are paused via PWD Accessibility toolbar toggle
  function isMotionPaused() {
    return document.body.classList.contains('animations-paused');
  }

  // =========================================================================
  // 1. Mobile Menu Toggle Interaction
  // =========================================================================
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileMenu && !menuBtn.dataset.animBound) {
    menuBtn.dataset.animBound = 'true';

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isExpanded));
      
      if (!isExpanded) {
        mobileMenu.classList.remove('hidden');
        gsap.fromTo(mobileMenu, 
          { opacity: 0, y: -10, scale: 0.98 }, 
          { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out', overwrite: 'auto' }
        );
      } else {
        gsap.to(mobileMenu, {
          opacity: 0,
          y: -10,
          scale: 0.98,
          duration: 0.18,
          ease: 'power2.in',
          overwrite: 'auto',
          onComplete: () => mobileMenu.classList.add('hidden')
        });
      }

      if (menuIconOpen && menuIconClose) {
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        gsap.to(mobileMenu, {
          opacity: 0,
          y: -10,
          scale: 0.98,
          duration: 0.15,
          ease: 'power2.in',
          overwrite: 'auto',
          onComplete: () => mobileMenu.classList.add('hidden')
        });
        menuBtn.setAttribute('aria-expanded', 'false');
        if (menuIconOpen && menuIconClose) {
          menuIconOpen.classList.remove('hidden');
          menuIconClose.classList.add('hidden');
        }
      });
    });
  }

  // =========================================================================
  // 2. Active Navbar Scroll Spy & Header Elevation
  // =========================================================================
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('header.site-header');
  const nav = document.querySelector('.floating-island-nav');

  function updateNavSpy() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 30) {
      header?.classList.add('scrolled');
      nav?.classList.add('nav-scrolled');
    } else {
      header?.classList.remove('scrolled');
      nav?.classList.remove('nav-scrolled');
    }

    let currentId = 'home';
    const scrollPos = scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id') || currentId;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateNavSpy, { passive: true });
  window.addEventListener('resize', updateNavSpy, { passive: true });
  updateNavSpy();

  // =========================================================================
  // 3. High-Impact Zero-Lag Scroll Reveal Engine (GSAP Directional + Expo.out)
  // =========================================================================
  const srElements = document.querySelectorAll('.sr-item');

  srElements.forEach(el => {
    let fromVars = { opacity: 0, y: 40, x: 0, scale: 1 };
    if (el.classList.contains('sr-left')) {
      fromVars = { opacity: 0, x: -50, y: 0, scale: 1 };
    } else if (el.classList.contains('sr-right')) {
      fromVars = { opacity: 0, x: 50, y: 0, scale: 1 };
    } else if (el.classList.contains('sr-scale')) {
      fromVars = { opacity: 0, scale: 0.94, y: 30, x: 0 };
    }

    if (isMotionPaused()) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
      el.classList.add('is-revealed');
    } else {
      gsap.set(el, fromVars);
    }
  });

  ScrollTrigger.batch(".sr-item", {
    interval: 0.04,
    batchMax: 6,
    onEnter: batch => {
      batch.forEach((el, index) => {
        if (isMotionPaused()) {
          gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1 });
          el.classList.add('is-revealed');
          return;
        }
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "expo.out",
          delay: index * 0.035,
          overwrite: "auto",
          onStart: () => el.classList.add('is-revealed'),
          onComplete: () => el.classList.add('is-revealed')
        });
      });
    },
    once: true
  });

  // Reveal above-fold items immediately on mount with zero accumulation delay
  requestAnimationFrame(() => {
    srElements.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.95 && !el.classList.contains('is-revealed')) {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "expo.out",
          delay: Math.min(idx * 0.025, 0.12),
          overwrite: "auto",
          onStart: () => el.classList.add('is-revealed'),
          onComplete: () => el.classList.add('is-revealed')
        });
      }
    });
  });

  // =========================================================================
  // 4. Clean Tactile 3D Card Tilt Physics (Infinite Re-Hover Robust GSAP)
  // =========================================================================
  const tiltElements = document.querySelectorAll('.tilt-card, .bank-card, .img-overlay-card, [data-region-island]');

  tiltElements.forEach(card => {
    // Avoid double attaching if element has data-disability-card
    if (card.hasAttribute('data-disability-card')) return;

    // Ensure perspective(1000px) is applied
    gsap.set(card, { transformPerspective: 1000, transformStyle: "preserve-3d" });

    card.addEventListener('mouseenter', () => {
      if (isMotionPaused()) return;
      card.style.zIndex = '25';
      gsap.to(card, { scale: 1.06, y: -8, duration: 0.2, ease: "power1.out", overwrite: "auto" });
    });

    card.addEventListener('mousemove', (e) => {
      if (isMotionPaused()) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Multiplier: max ±16deg tilt for crisp, palpable 3D depth
      const rotateX = ((y - centerY) / centerY) * -16;
      const rotateY = ((x - centerX) / centerX) * 16;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.12,
        ease: "power1.out",
        overwrite: "auto"
      });
    });

    card.addEventListener('mouseleave', () => {
      card.style.zIndex = '';
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.4)",
        overwrite: "auto"
      });
    });

    // Mobile Touch Handlers
    card.addEventListener('touchstart', (e) => {
      if (isMotionPaused() || !e.touches || e.touches.length === 0) return;
      card.style.zIndex = '25';
      gsap.to(card, { scale: 1.06, y: -8, duration: 0.2, ease: "power1.out", overwrite: "auto" });
      const rect = card.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -16;
      const rotateY = ((x - centerX) / centerX) * 16;
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.12,
        ease: "power1.out",
        overwrite: "auto"
      });
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (isMotionPaused() || !e.touches || e.touches.length === 0) return;
      const rect = card.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -16;
      const rotateY = ((x - centerX) / centerX) * 16;
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.12,
        ease: "power1.out",
        overwrite: "auto"
      });
    }, { passive: true });

    card.addEventListener('touchend', () => {
      card.style.zIndex = '';
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.4)",
        overwrite: "auto"
      });
    }, { passive: true });
  });

  // =========================================================================
  // 4B. Cursor-Following Spotlight / Flashlight Effect
  // =========================================================================
  const spotlightCards = document.querySelectorAll('.spotlight-card, [data-disability-card]');

  spotlightCards.forEach(card => {
    let beam = card.querySelector('.spotlight-beam');
    if (!beam) {
      beam = document.createElement('div');
      beam.className = 'spotlight-beam';
      card.appendChild(beam);
    }

    function updateSpotlight(clientX, clientY) {
      if (isMotionPaused()) return;
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      beam.style.background = `radial-gradient(450px circle at ${x}px ${y}px, rgba(184, 242, 100, 0.32) 0%, rgba(128, 188, 47, 0.15) 40%, transparent 75%)`;
    }

    card.addEventListener('mouseenter', () => {
      if (isMotionPaused()) return;
      gsap.to(beam, { opacity: 1, duration: 0.2 });
    });

    card.addEventListener('mousemove', (e) => {
      updateSpotlight(e.clientX, e.clientY);
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(beam, { opacity: 0, duration: 0.2 });
    });

    card.addEventListener('touchstart', (e) => {
      if (isMotionPaused()) return;
      if (e.touches && e.touches.length > 0) {
        gsap.to(beam, { opacity: 1, duration: 0.2 });
        updateSpotlight(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        updateSpotlight(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    card.addEventListener('touchend', () => {
      gsap.to(beam, { opacity: 0, duration: 0.2 });
    }, { passive: true });
  });

  // =========================================================================
  // 5. Metric Stat Counters
  // =========================================================================
  const counterElements = document.querySelectorAll('[data-counter], .counter-val');

  counterElements.forEach(el => {
    const target = parseInt(el.getAttribute('data-counter') || el.getAttribute('data-target') || el.innerText, 10);
    if (isNaN(target)) return;
    const suffix = el.getAttribute('data-suffix') || '';

    if (!el.getAttribute('aria-label')) {
      el.setAttribute('aria-label', `${target}${suffix}`);
    }

    const counterObj = { val: 0 };
    
    ScrollTrigger.create({
      trigger: el,
      once: true,
      onEnter: () => gsap.to(counterObj, { val: target, duration: 1.4, ease: "power2.out", onUpdate: () => el.innerText = Math.floor(counterObj.val) + suffix })
    });
  });

  // =========================================================================
  // 6. Accessibility Motion Toggle Integration
  // =========================================================================
  function syncMotionPause(paused) {
    if (paused) {
      ScrollTrigger.getAll().forEach(st => st.disable());
      gsap.globalTimeline.pause();
      gsap.set('.sr-item', { opacity: 1, x: 0, y: 0, scale: 1 });
      gsap.set('.tilt-card', { clearProps: "all" });
      
      counterElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-counter') || el.getAttribute('data-target') || el.innerText, 10);
        if (!isNaN(target)) {
          const suffix = el.getAttribute('data-suffix') || '';
          el.innerText = `${target}${suffix}`;
        }
      });
    } else {
      ScrollTrigger.getAll().forEach(st => st.enable());
      gsap.globalTimeline.play();
    }
  }

  window.addEventListener('pkmkpi-motion-toggle', (e) => {
    syncMotionPause(Boolean(e.detail?.paused));
  });

  const bodyObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'class') {
        syncMotionPause(document.body.classList.contains('animations-paused'));
      }
    }
  });
  bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  
  // =========================================================================
  // 7. Floating Accessibility Action Button (a11y-fab) GSAP Tactile Engine
  // =========================================================================
  const fab = document.getElementById('a11y-fab');
  if (fab) {
    // Fast tactile entrance
    gsap.fromTo(fab, 
      { opacity: 0.8, scale: 0.85 }, 
      { opacity: 1, scale: 1, duration: 0.18, ease: 'power2.out' }
    );

    fab.addEventListener('mouseenter', () => {
      if (isMotionPaused()) return;
      gsap.to(fab, { scale: 1.12, duration: 0.15, ease: 'power2.out', overwrite: 'auto' });
    });

    fab.addEventListener('mouseleave', () => {
      if (isMotionPaused()) return;
      gsap.to(fab, { scale: 1, duration: 0.15, ease: 'power2.out', overwrite: 'auto' });
    });

    fab.addEventListener('mousedown', () => {
      if (isMotionPaused()) return;
      gsap.to(fab, { scale: 0.94, duration: 0.08, ease: 'power1.out', overwrite: 'auto' });
    });

    fab.addEventListener('mouseup', () => {
      if (isMotionPaused()) return;
      gsap.to(fab, { scale: 1.12, duration: 0.12, ease: 'back.out(1.4)', overwrite: 'auto' });
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPKMKPIAnimations);
} else {
  initPKMKPIAnimations();
}
