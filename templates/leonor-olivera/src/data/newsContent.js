// News data for the PKMKPI News page.
//
// Populated with real, verified news items only. Every entry below is
// based strictly on a published, cited source (see `source` /
// `sourceUrl` on each article) — nothing here is invented. Where an
// article does not involve PKMKPI directly, the summary and body text
// are written to attribute the program/announcement to the actual
// government agency or outlet, not to PKMKPI.
//
// Shape expected by the News page, NewsPreview, NewsArticle, and
// related components:
//   {
//     id,          // unique id, e.g. "2026-regional-summit"
//     slug,         // URL-safe identifier used by /news/:slug, e.g. "2026-regional-summit"
//     title,        // headline
//     category,     // one of `newsCategories` below
//     date,         // ISO date string, e.g. "2026-08-28"
//     featured,     // true for the single article shown as the featured story
//     excerpt,      // 1-2 sentence summary shown on cards
//     content: [],  // array of paragraph strings for the full article
//     image,        // optional: a photo URL (local "/images/news/<file>.jpg"
//                   // or remote) — falls back to the on-brand
//                   // NewsMediaPlaceholder when omitted or if it fails to load
//     imageAlt,     // accessible alt text describing the photo
//     source,       // name of the publishing organization/outlet
//     sourceUrl,    // link to the original, verified article
//   }

export const newsCategories = [
  "Advocacy",
  "Community",
  "Events",
  "Partnerships",
  "Legislation",
  "Announcements",
]

// Maps each category to an icon key and color tokens used by
// NewsMediaPlaceholder, so future real articles get an on-brand
// placeholder "photo" until real images are uploaded.
export const categoryTheme = {
  Advocacy: {
    icon: "megaphone",
    from: "from-primary",
    to: "to-secondary",
  },
  Community: {
    icon: "users",
    from: "from-secondary",
    to: "to-primary",
  },
  Events: {
    icon: "calendar",
    from: "from-accent",
    to: "to-secondary",
  },
  Partnerships: {
    icon: "handshake",
    from: "from-primary",
    to: "to-accent",
  },
  Legislation: {
    icon: "gavel",
    from: "from-neutral",
    to: "to-primary",
  },
  Announcements: {
    icon: "bell",
    from: "from-secondary",
    to: "to-accent",
  },
}

export const newsArticles = [
  {
    id: "bauan-free-hearing-aids-phase-2",
    slug: "bauan-free-hearing-aids-phase-2",
    title: "56 Bauangueños Undergo Phase 2 Mold Fittings for Free Hearing Aids",
    category: "Community",
    date: "2026-02-06",
    featured: true,
    excerpt:
      "The Municipality of Bauan reports that 56 residents underwent Phase 2 mold fittings for free hearing aids, with PKMKPI named among the organizations involved in the project.",
    content: [
      "The Municipality of Bauan has reported that 56 Bauangueños underwent Phase 2 mold fittings as part of an ongoing free hearing aid project for residents with hearing impairments.",
      "In its report, the municipal government named the Pambansang Kapisanan ng mga May Kapansanan sa Pilipinas, Inc. (PKMKPI) among the organizations involved in the initiative, alongside local government partners coordinating the fitting sessions.",
      "The mold fitting stage is a key step in preparing custom hearing aids for beneficiaries before the devices are finalized and distributed.",
      "This item was originally published by the Municipality of Bauan and was last updated on February 9, 2026.",
    ],
    image: "https://loremflickr.com/1200/800/hearingaid,earmold,audiology/all?lock=101",
    imageAlt:
      "An audiologist fitting a custom earmold hearing aid for a patient",
    source: "Municipality of Bauan",
    sourceUrl: "https://bauan.gov.ph/mold-fittings-of-free-hearing-aids/",
  },
  {
    id: "ncda-unified-pwd-id-2026",
    slug: "ncda-unified-pwd-id-2026",
    title: "NCDA Enhances Unified PWD ID System, Eyes Full Implementation in 2026",
    category: "Announcements",
    date: "2026-01-07",
    featured: false,
    excerpt:
      "The National Council on Disability Affairs (NCDA) is enhancing the unified PWD identification system, including QR-code-enabled physical and digital IDs, with nationwide rollout targeted for 2026.",
    content: [
      "The National Council on Disability Affairs (NCDA) is enhancing the country's unified identification system for persons with disabilities (PWDs), according to a report by the Philippine News Agency.",
      "The upgraded system is designed to introduce QR-code-enabled PWD IDs in both physical and digital form, with the NCDA targeting full nationwide implementation within 2026.",
      "This is a national government initiative led by the NCDA and is shared here as sector news relevant to the disability community; it is not a PKMKPI-run program.",
    ],
    image: "https://loremflickr.com/1200/800/idcard,identification,qrcode/all?lock=102",
    imageAlt:
      "A close-up of an identification card being issued, representing the unified PWD ID system",
    source: "Philippine News Agency",
    sourceUrl: "https://www.pna.gov.ph/articles/1266416",
  },
  {
    id: "dswd-therafee-project-2026",
    slug: "dswd-therafee-project-2026",
    title: "DSWD's Expanded 'TheraFee' Project to Benefit Over 1,800 Care Workers and PWDs in 2026",
    category: "Announcements",
    date: "2026-03-13",
    featured: false,
    excerpt:
      "The Department of Social Welfare and Development (DSWD) expects more than 1,800 family and community care workers, along with persons with disabilities with high support needs, to benefit from its expanded TheraFee Project in 2026.",
    content: [
      "The Department of Social Welfare and Development (DSWD) has announced that its TheraFee Project is being expanded for 2026, with more than 1,800 family and community care workers expected to benefit alongside persons with disabilities who have high support needs.",
      "The project is administered by the DSWD as part of its broader social welfare programs for caregiving households and individuals requiring intensive support.",
      "This is a DSWD-led national program and is shared here as sector news; PKMKPI is not the implementing organization for this project.",
    ],
    image: "/images/news/dswd-therafee-community.jpg",
    imageAlt:
      "Care workers and community members, including persons with disabilities, gathered at a local social welfare event",
    source: "Department of Social Welfare and Development",
    sourceUrl:
      "https://www.dswd.gov.ph/more-than-1800-family-careworkers-persons-with-disabilities-to-benefit-from-dswds-therafee-project-in-2026/",
  },
  {
    id: "dswd-calls-inclusive-policies",
    slug: "dswd-calls-inclusive-policies",
    title: "DSWD Calls for Inclusive Policies to Protect PWD Rights",
    category: "Advocacy",
    date: "2026-07-20",
    featured: false,
    excerpt:
      "The Department of Social Welfare and Development is pushing for stronger, more inclusive laws for persons with disabilities, pointing to continuing barriers in services, employment, education, transportation, and participation.",
    content: [
      "The Department of Social Welfare and Development (DSWD) has called for stronger and more inclusive policies to improve the lives of persons with disabilities, according to a report by the Philippine News Agency.",
      "The agency highlighted continuing barriers faced by PWDs across several areas, including access to services, employment, education, transportation, and civic participation.",
      "This advocacy statement was issued by the DSWD as a national government agency and is shared here as sector news relevant to the broader disability rights conversation.",
    ],
    image: "/images/news/dswd-inclusive-policies-advocacy.jpg",
    imageAlt:
      "An advocate speaking at a National Disability Rights Week event calling for inclusive policies",
    source: "Philippine News Agency",
    sourceUrl: "https://www.pna.gov.ph/index.php/articles/1279806",
  },
]
