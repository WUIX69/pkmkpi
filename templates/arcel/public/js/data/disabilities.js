// public/js/data/disabilities.js
const DISABILITY_CLASSIFICATIONS = [
  {
    id: "visual",
    name: "Visual Impairment & Blindness",
    iconSvg: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    summary: "Total blindness, low vision, and partial sight impairments requiring screen readers, braille, and tactile navigation.",
    rights: "Guaranteed assistive tech subsidies, braille voting ballots, and public building tactile floor paths under BP 344."
  },
  {
    id: "hearing",
    name: "Hearing & Deaf Impairment",
    iconSvg: '<path d="M6 8a6 6 0 0 1 12 0c0 4-2 5-2 8a4 4 0 0 1-8 0"/><path d="M12 12v3"/>',
    summary: "Deaf, hard-of-hearing, and deafblind individuals communicating primarily via Filipino Sign Language (FSL).",
    rights: "Mandatory FSL broadcast interpreters (RA 11106), visual fire alarm systems, and video relay communication access."
  },
  {
    id: "physical",
    name: "Orthopedic & Physical Mobility",
    iconSvg: '<circle cx="8" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M8 19V5h5l4 6h-9M12 11l3 4h4"/>',
    summary: "Wheelchair users, amputees, cerebral palsy, and neuromuscular conditions affecting physical movement.",
    rights: "Ramped public facilities (BP 344), dedicated parking stalls, and barrier-free public mass transport."
  },
  {
    id: "psychosocial",
    name: "Psychosocial & Mental Health",
    iconSvg: '<path d="M9.5 2a5.5 5.5 0 0 0-5.4 6.6A5 5 0 0 0 5 18h1v3h5v-3h1a5.5 5.5 0 0 0 3-10.1A5.5 5.5 0 0 0 9.5 2z"/><path d="M9 9v3M9 15h.01"/>',
    summary: "Bipolar disorder, chronic depression, schizophrenia, and PTSD affecting emotional and social functioning.",
    rights: "Mental Health Act (RA 11036) workplace protection, PhilHealth medicine coverage, and freedom from employment stigma."
  },
  {
    id: "intellectual",
    name: "Intellectual Disability",
    iconSvg: '<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/>',
    summary: "Down syndrome and developmental delays impacting cognitive and adaptive living skills.",
    rights: "Special education (SPED) access, supported employment programs, and institutional protection from exploitation."
  },
  {
    id: "learning",
    name: "Learning Disability",
    iconSvg: '<path d="M2 5h7a3 3 0 0 1 3 3v11a2.5 2.5 0 0 0-2.5-2.5H2z"/><path d="M22 5h-7a3 3 0 0 0-3 3v11a2.5 2.5 0 0 1 2.5-2.5H22z"/>',
    summary: "Dyslexia, dyscalculia, and ADHD affecting processing, reading, and written communication.",
    rights: "Alternative exam testing formats, academic accommodations, and specialized multi-sensory learning support."
  },
  {
    id: "speech",
    name: "Speech & Language Impairment",
    iconSvg: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    summary: "Stuttering, apraxia, and vocal cord conditions affecting verbal speech and communication.",
    rights: "Augmentative and alternative communication (AAC) devices access and speech therapy support."
  },
  {
    id: "autism",
    name: "Autism Spectrum Disorder",
    iconSvg: '<path d="M12 2a5 5 0 0 0-5 5c0 1.5.6 2.5 1.5 3.5L6 13a5 5 0 0 0 5 5c1.5 0 2.5-.6 3.5-1.5l2.5 2.5a5 5 0 0 0-5-5c-1.5 0-2.5.6-3.5 1.5L6 13a5 5 0 0 1 5-5"/><circle cx="12" cy="7" r="1"/><circle cx="17" cy="12" r="1"/><circle cx="7" cy="16" r="1"/>',
    summary: "Neurodevelopmental condition affecting social interaction, sensory processing, and communication patterns.",
    rights: "Sensory-friendly public zones, individualized educational programs, and inclusive workplace accommodations."
  },
  {
    id: "chronic",
    name: "Chronic Illness with Disability",
    iconSvg: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/><path d="M9 12h1.5l1-2 2 4 1-2H16"/>',
    summary: "Kidney failure (dialysis), severe lupus, cancer, and rare diseases causing functional disability.",
    rights: "Mandatory 20% discount on maintenance medicines and diagnostic procedures, hospital express lanes."
  },
  {
    id: "multiple",
    name: "Multiple Disabilities",
    iconSvg: '<path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    summary: "Combination of two or more distinct impairments (e.g., deaf-blindness or physical + intellectual disability).",
    rights: "Comprehensive multidisciplinary care plans, caregiver respite support, and prioritized government social safety nets."
  }
];

if (typeof window !== "undefined") {
  window.DISABILITY_CLASSIFICATIONS = DISABILITY_CLASSIFICATIONS;
  window.PKMKPI_Disabilities = DISABILITY_CLASSIFICATIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { DISABILITY_CLASSIFICATIONS };
}