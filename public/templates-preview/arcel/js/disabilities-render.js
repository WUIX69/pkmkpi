// public/js/disabilities-render.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("disabilities-grid");
  if (!grid || typeof DISABILITY_CLASSIFICATIONS === "undefined") return;

  function cardHTML(d, index) {
    const number = String(index + 1).padStart(2, "0");
    return `
      <article class="card-hover-lift hc-surface bg-accent-green border border-hairline rounded-sm p-6 sr-item">
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-xs text-primary-light flex items-center justify-center" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              ${d.iconSvg}
            </svg>
          </div>
          <span class="text-title-lg font-montserrat text-accent-gold leading-none">${number}</span>
        </div>
        <h3 class="text-title-md text-accent-green mb-2">${d.name}</h3>
        <p class="text-body-sm text-ink-muted leading-relaxed mb-3">${d.summary}</p>
        <p class="text-body-sm text-ink-light leading-relaxed"><span class="font-semibold text-ink">Rights &amp; support:</span> ${d.rights}</p>
      </article>
    `;
  }

  grid.innerHTML = DISABILITY_CLASSIFICATIONS.map((d, index) => cardHTML(d, index)).join("");

  grid.querySelectorAll(".sr-item").forEach(el => {
    el.classList.add("sr-visible");
  });
});