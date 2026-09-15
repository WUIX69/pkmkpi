// src/data/regions.js
const FEDERATION_REGIONS = [
  // Luzon Cluster
  {
    id: "ncr",
    name: "National Capital Region (NCR)",
    islandGroup: "luzon",
    coordinator: "Quezon City & Manila Metro PWD Council",
    memberOrgs: ["Metro Manila Federation of PWDs", "QC Deaf & Hard of Hearing Association", "Pasong Tamo Orthopedic PWD Guild"],
    advocacyFocus: "Urban barrier-free infrastructure, MRT/LRT accessibility compliance, corporate workforce inclusion."
  },
  {
    id: "car",
    name: "Cordillera Administrative Region (CAR)",
    islandGroup: "luzon",
    coordinator: "Baguio & Highland PWD Coalition",
    memberOrgs: ["Cordillera Federation of PWDs", "Benguet Indigenous PWD Council"],
    advocacyFocus: "Mountainous transport accessibility, indigenous PWD health assistance, community rehabilitation."
  },
  {
    id: "r1",
    name: "Region I (Ilocos Region)",
    islandGroup: "luzon",
    coordinator: "Ilocos Regional PWD Alliance",
    memberOrgs: ["Ilocos Norte PWD Association", "Pangasinan Livelihood PWD League"],
    advocacyFocus: "Agri-livelihood training, coastal accessibility accommodations, rural assistive devices."
  },
  {
    id: "r2",
    name: "Region II (Cagayan Valley)",
    islandGroup: "luzon",
    coordinator: "Cagayan Valley Federation of PWDs",
    memberOrgs: ["Isabela PWD Cooperative", "Tuguegarao Visually Impaired Guild"],
    advocacyFocus: "Disaster-resilient PWD evacuation protocols, agricultural cooperatives, braille literacy."
  },
  {
    id: "r3",
    name: "Region III (Central Luzon)",
    islandGroup: "luzon",
    coordinator: "Central Luzon Regional Chapter",
    memberOrgs: ["Pampanga PWD Federation", "Bulacan Orthopedic Assembly", "Tarlac Deaf Association"],
    advocacyFocus: "Industrial plant accessibility, Magna Carta RA 7277 discount audits, inclusive employment."
  },
  {
    id: "r4a",
    name: "Region IV-A (CALABARZON)",
    islandGroup: "luzon",
    coordinator: "CALABARZON Federation of PWDs",
    memberOrgs: ["Cavite Disability Council", "Laguna Special Needs Association", "Batangas PWD League"],
    advocacyFocus: "Technological training, accessible housing compliance, community-based livelihood incubators."
  },
  {
    id: "mimaropa",
    name: "MIMAROPA (Region IV-B)",
    islandGroup: "luzon",
    coordinator: "Island Provinces PWD Network",
    memberOrgs: ["Palawan PWD Federation", "Mindoro Island Disability Alliance"],
    advocacyFocus: "Island boat transport accessibility, mobile medical missions, eco-tourism PWD jobs."
  },
  {
    id: "r5",
    name: "Region V (Bicol Region)",
    islandGroup: "luzon",
    coordinator: "Bicol Regional PWD Coalition",
    memberOrgs: ["Albay Disability Council", "Camarines Sur PWD Alliance"],
    advocacyFocus: "Emergency early-warning systems for Deaf/Blind, disaster risk reduction inclusion."
  },

  // Visayas Cluster
  {
    id: "r6",
    name: "Region VI (Western Visayas)",
    islandGroup: "visayas",
    coordinator: "Western Visayas PWD Assembly",
    memberOrgs: ["Iloilo Federation of PWDs", "Negros Occidental Disability Guild"],
    advocacyFocus: "Inclusive education scholarships, sugarland worker disability support, sign language training."
  },
  {
    id: "r7",
    name: "Region VII (Central Visayas)",
    islandGroup: "visayas",
    coordinator: "Cebu & Central Visayas PWD Alliance",
    memberOrgs: ["Cebu City Coalition of PWDs", "Bohol Disability Network"],
    advocacyFocus: "BPO/tech accessible workplaces, legal aid clinics for disability discrimination cases."
  },
  {
    id: "r8",
    name: "Region VIII (Eastern Visayas)",
    islandGroup: "visayas",
    coordinator: "Leyte & Samar PWD Federation",
    memberOrgs: ["Tacloban PWD Assembly", "Samar Regional Disability Guild"],
    advocacyFocus: "Typhoon rehabilitation, livelihood start-up grants, rural health unit access."
  },

  // Mindanao Cluster
  {
    id: "r9",
    name: "Region IX (Zamboanga Peninsula)",
    islandGroup: "mindanao",
    coordinator: "Zamboanga Regional PWD Chapter",
    memberOrgs: ["Zamboanga City PWD Coalition", "Zamboanga del Sur Disability League"],
    advocacyFocus: "Cross-cultural PWD peacebuilding, assistive wheelchair fabrication, market stall priority."
  },
  {
    id: "r10",
    name: "Region X (Northern Mindanao)",
    islandGroup: "mindanao",
    coordinator: "Northern Mindanao PWD Alliance",
    memberOrgs: ["Cagayan de Oro PWD Council", "Bukidnon Indigenous PWD League"],
    advocacyFocus: "Agro-forestry livelihood projects, accessible public transport vehicles."
  },
  {
    id: "r11",
    name: "Region XI (Davao Region)",
    islandGroup: "mindanao",
    coordinator: "Davao Regional Federation of PWDs",
    memberOrgs: ["Davao City Disability Assembly", "Davao del Norte PWD Guild"],
    advocacyFocus: "Inclusive sports & paralympics training, government employment quota monitoring."
  },
  {
    id: "r12",
    name: "Region XII (SOCCSKSARGEN)",
    islandGroup: "mindanao",
    coordinator: "SOCCSKSARGEN PWD Coalition",
    memberOrgs: ["General Santos PWD Association", "South Cotabato Disability Council"],
    advocacyFocus: "Fisheries and agri-enterprise for PWDs, accessible public buildings certification."
  },
  {
    id: "r13",
    name: "Region XIII (Caraga)",
    islandGroup: "mindanao",
    coordinator: "Caraga Regional PWD League",
    memberOrgs: ["Butuan City Disability Coalition", "Surigao PWD Assembly"],
    advocacyFocus: "Mining area rehabilitation and safety, community livelihood cooperatives."
  },
  {
    id: "barmm",
    name: "Bangsamoro Autonomous Region (BARMM)",
    islandGroup: "mindanao",
    coordinator: "Bangsamoro Disability Action Council",
    memberOrgs: ["BARMM PWD Alliance", "Cotabato Inclusive Network"],
    advocacyFocus: "Post-conflict rehabilitation, Islamic accessible finance, peace & disability inclusion."
  }
];

if (typeof window !== "undefined") {
  window.FEDERATION_REGIONS = FEDERATION_REGIONS;
  window.PKMKPI_Regions = FEDERATION_REGIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { FEDERATION_REGIONS };
}