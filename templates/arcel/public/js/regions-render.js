// js/regions-render.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("regions-grid");
  const filterBtns = document.querySelectorAll(".region-filter-btn");
  if (!grid || typeof FEDERATION_REGIONS === "undefined") return;

  function cardHTML(region) {
    const orgs = region.memberOrgs.map(o => `<li>${o}</li>`).join("");
    return `
      <article class="card-hover-lift hc-surface bg-accent-green border border-hairline rounded-sm p-6 sr-item" data-island="${region.islandGroup}">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-title-md text-accent-green-bright ">${region.name}</h3>
          <span class="text-caption uppercase text-white bg-primary px-2 py-1 rounded-xs shrink-0 ml-2">${region.islandGroup}</span>
        </div>
        <p class="text-body-sm text-ink-muted mb-3"><span class="font-semibold text-ink">Coordinator:</span> ${region.coordinator}</p>
        <ul class="text-body-sm text-ink-muted list-disc list-inside mb-3 space-y-0.5">${orgs}</ul>
        <p class="text-body-sm text-ink-light leading-relaxed"><span class="font-semibold text-ink">Advocacy focus:</span> ${region.advocacyFocus}</p>
      </article>
    `;
  }

  function render(filter = "all") {
    const filtered = filter === "all"
      ? FEDERATION_REGIONS
      : FEDERATION_REGIONS.filter(r => r.islandGroup === filter);
    grid.innerHTML = filtered.map(cardHTML).join("");

    // Force-reveal cards since they're injected after the scroll-reveal
    // observer's initial scan and never get picked up automatically.
 grid.querySelectorAll(".sr-item").forEach(el => {
    el.classList.add("sr-visible");
  });
}

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      render(btn.dataset.regionFilter);
    });
  });

  render();
});