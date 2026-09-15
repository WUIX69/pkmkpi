// Press & Media data for the PKMKPI Press page.
//
// PKMKPI has not published any verified press releases or official
// statements of its own yet, so this file intentionally does NOT
// contain any item labeled as a PKMKPI press release. Instead it holds
// verified, publicly published disability-sector/government coverage,
// each clearly attributed to its real source (never to PKMKPI) with a
// working link back to the original article. Nothing here is invented
// — no dates, quotes, statistics, or claims beyond what each source
// states.
//
// Shape:
//   {
//     id,          // unique id
//     title,        // real headline, as published by the source
//     date,         // ISO date string, only if verified/published by the source
//     summary,      // short, original factual summary (not copied text)
//     source,       // name of the publishing organization/outlet
//     sourceUrl,    // link to the original, verified article
//   }
//
// When PKMKPI issues its own verified press releases, add them to
// `officialReleases` below using the same shape (source should read
// "PKMKPI" only when PKMKPI itself is the publisher).

export const officialReleases = []

export const sectorUpdates = [
  {
    id: "dswd-3-innovative-programs",
    title:
      "DSWD Advances PH Social Protection with 3 Innovative Programs for Vulnerable Children, Persons with Disabilities per PBBM's Directive",
    date: null,
    summary:
      "The Department of Social Welfare and Development (DSWD) highlighted three new programs aimed at strengthening social protection for vulnerable children and persons with disabilities, in line with a directive from President Ferdinand R. Marcos Jr.",
    source: "Department of Social Welfare and Development (DSWD)",
    sourceUrl:
      "https://www.dswd.gov.ph/dswd-advances-ph-social-protection-with-3-innovative-programs-for-vulnerable-children-persons-with-disabilities-per-pbbms-directive/",
  },
  {
    id: "dswd-therafee-project-2026",
    title:
      "More Than 1,800 Family Careworkers, Persons with Disabilities to Benefit from DSWD's 'TheraFee' Project in 2026",
    date: "2026-03-13",
    summary:
      "DSWD announced that its TheraFee Project is being expanded for 2026, with more than 1,800 family and community care workers expected to benefit alongside persons with disabilities who have high support needs.",
    source: "Department of Social Welfare and Development (DSWD)",
    sourceUrl:
      "https://www.dswd.gov.ph/more-than-1800-family-careworkers-persons-with-disabilities-to-benefit-from-dswds-therafee-project-in-2026/",
  },
  {
    id: "ncda-unified-pwd-id-2026",
    title: "NCDA Enhances Unified PWD ID System, Eyes Full Implementation in 2026",
    date: "2026-01-07",
    summary:
      "The National Council on Disability Affairs (NCDA) is enhancing the unified PWD identification system, including QR-code-enabled physical and digital IDs, with nationwide implementation targeted for 2026.",
    source: "Philippine News Agency",
    sourceUrl: "https://www.pna.gov.ph/articles/1266416",
  },
]
