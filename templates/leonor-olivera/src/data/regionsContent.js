// The 17 administrative regions of the Philippines, grouped by island
// group. These are the actual official regions of the country — not
// federation-specific data. PKMKPI has member federations across all
// seventeen, but per-region membership counts, contact persons, and
// local program details are not yet available, so the "dossier" for
// each region intentionally does not invent those numbers.

export const islandGroups = [
  { id: "luzon", label: "Luzon & NCR" },
  { id: "visayas", label: "Visayas" },
  { id: "mindanao", label: "Mindanao & BARMM" },
]

export const regions = [
  { id: "ncr", island: "luzon", name: "National Capital Region (NCR)" },
  { id: "car", island: "luzon", name: "Cordillera Administrative Region (CAR)" },
  { id: "region1", island: "luzon", name: "Region I — Ilocos Region" },
  { id: "region2", island: "luzon", name: "Region II — Cagayan Valley" },
  { id: "region3", island: "luzon", name: "Region III — Central Luzon" },
  { id: "region4a", island: "luzon", name: "Region IV-A — CALABARZON" },
  { id: "mimaropa", island: "luzon", name: "MIMAROPA Region" },
  { id: "region5", island: "luzon", name: "Region V — Bicol Region" },
  { id: "region6", island: "visayas", name: "Region VI — Western Visayas" },
  { id: "region7", island: "visayas", name: "Region VII — Central Visayas" },
  { id: "region8", island: "visayas", name: "Region VIII — Eastern Visayas" },
  { id: "region9", island: "mindanao", name: "Region IX — Zamboanga Peninsula" },
  { id: "region10", island: "mindanao", name: "Region X — Northern Mindanao" },
  { id: "region11", island: "mindanao", name: "Region XI — Davao Region" },
  { id: "region12", island: "mindanao", name: "Region XII — SOCCSKSARGEN" },
  { id: "caraga", island: "mindanao", name: "Region XIII — Caraga" },
  { id: "barmm", island: "mindanao", name: "BARMM" },
]
