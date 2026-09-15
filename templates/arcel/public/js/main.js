(() => {
  "use strict";

  const status = document.getElementById("a11y-status");
  const announce = (msg) => {
    if (status) status.textContent = msg;
  };

  /* ---------------- Mobile menu ---------------- */
  const menuBtn = document.getElementById("btn-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
  }

/* ---------------- Tier 3: scroll reveal ---------------- */
const revealTargets = document.querySelectorAll(".sr-item, .sr-left, .sr-right, .sr-scale");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sr-visible");
          entry.target.classList.remove("delay-80", "delay-160", "delay-240", "delay-320", "delay-400");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
} else {
  revealTargets.forEach((el) => {
    el.classList.add("sr-visible");
    el.classList.remove("delay-80", "delay-160", "delay-240", "delay-320", "delay-400");
  });
}

  /* ---------------- Tier 1: 3D tilt on hero image ---------------- */
  const tiltCard = document.getElementById("tilt-card");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (tiltCard && !prefersReducedMotion) {
    const maxTilt = 12;

    tiltCard.addEventListener("mousemove", (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * maxTilt * 2;
      const rotateX = y * -maxTilt * 2;
      tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      tiltCard.style.boxShadow =
        "0 20px 40px -15px rgba(10, 37, 64, 0.16), 0 0 0 1px rgba(217, 119, 6, 0.25)";
    });

    tiltCard.addEventListener("mouseleave", () => {
      tiltCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
      tiltCard.style.boxShadow = "";
    });
  }

  /* ---------------- Accessibility: high contrast toggle ---------------- */
  const contrastBtn = document.getElementById("btn-contrast");
  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      const active = document.body.classList.toggle("high-contrast");
      contrastBtn.setAttribute("aria-pressed", String(active));
      announce(active ? "High contrast mode enabled" : "High contrast mode disabled");
    });
  }

  /* ---------------- Accessibility: 3-step font scaler ---------------- */
  const textSizeBtn = document.getElementById("btn-textsize");
  const scales = [1, 1.15, 0.9];
  const scaleLabels = ["Standard text size", "Enlarged text size", "Compact text size"];
  let scaleIndex = 0;
  if (textSizeBtn) {
    textSizeBtn.addEventListener("click", () => {
      scaleIndex = (scaleIndex + 1) % scales.length;
      document.documentElement.style.setProperty("--font-scale", String(scales[scaleIndex]));
      announce(scaleLabels[scaleIndex]);
    });
  }

  /* ---------------- Accessibility: read page aloud (Web Speech API) ---------------- */
  const ttsBtn = document.getElementById("btn-tts");
  if (ttsBtn && "speechSynthesis" in window) {
    let speaking = false;

    ttsBtn.addEventListener("click", () => {
      if (speaking) {
        window.speechSynthesis.cancel();
        speaking = false;
        ttsBtn.setAttribute("aria-pressed", "false");
        announce("Reading stopped");
        return;
      }

      const main = document.getElementById("main");
      const text = main ? main.innerText : document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.onend = () => {
        speaking = false;
        ttsBtn.setAttribute("aria-pressed", "false");
      };

      window.speechSynthesis.speak(utterance);
      speaking = true;
      ttsBtn.setAttribute("aria-pressed", "true");
      announce("Reading page aloud");
    });
  } else if (ttsBtn) {
    ttsBtn.setAttribute("disabled", "true");
    ttsBtn.classList.add("opacity-40", "cursor-not-allowed");
  }

  /* ---------------- Keyboard shortcut: Alt+A toggles high contrast ---------------- */
  document.addEventListener("keydown", (e) => {
    if (e.altKey && (e.key === "a" || e.key === "A")) {
      contrastBtn?.click();
    }
  });
})();
