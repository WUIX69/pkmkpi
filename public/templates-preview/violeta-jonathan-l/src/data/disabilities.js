// packages/data/disabilities.js
const DISABILITY_CLASSIFICATIONS = [
  {
    id: "visual",
    name: "Visual Impairment & Blindness",
    icon: "👁️",
    summary: "Total blindness, low vision, and partial sight impairments requiring screen readers, braille, and tactile navigation.",
    rights: "Guaranteed assistive tech subsidies, braille voting ballots, and public building tactile floor paths under BP 344."
  },
  {
    id: "hearing",
    name: "Hearing & Deaf Impairment",
    icon: "🦻",
    summary: "Deaf, hard-of-hearing, and deafblind individuals communicating primarily via Filipino Sign Language (FSL).",
    rights: "Mandatory FSL broadcast interpreters (RA 11106), visual fire alarm systems, and video relay communication access."
  },
  {
    id: "physical",
    name: "Orthopedic & Physical Mobility",
    icon: "♿",
    summary: "Wheelchair users, amputees, cerebral palsy, and neuromuscular conditions affecting physical movement.",
    rights: "Ramped public facilities (BP 344), dedicated parking stalls, and barrier-free public mass transport."
  },
  {
    id: "psychosocial",
    name: "Psychosocial & Mental Health",
    icon: "🧠",
    summary: "Bipolar disorder, chronic depression, schizophrenia, and PTSD affecting emotional and social functioning.",
    rights: "Mental Health Act (RA 11036) workplace protection, PhilHealth medicine coverage, and freedom from employment stigma."
  },
  {
    id: "intellectual",
    name: "Intellectual Disability",
    icon: "💡",
    summary: "Down syndrome and developmental delays impacting cognitive and adaptive living skills.",
    rights: "Special education (SPED) access, supported employment programs, and institutional protection from exploitation."
  },
  {
    id: "learning",
    name: "Learning Disability",
    icon: "📖",
    summary: "Dyslexia, dyscalculia, and ADHD affecting processing, reading, and written communication.",
    rights: "Alternative exam testing formats, academic accommodations, and specialized multi-sensory learning support."
  },
  {
    id: "speech",
    name: "Speech & Language Impairment",
    icon: "💬",
    summary: "Stuttering, apraxia, and vocal cord conditions affecting verbal speech and communication.",
    rights: "Augmentative and alternative communication (AAC) devices access and speech therapy support."
  },
  {
    id: "autism",
    name: "Autism Spectrum Disorder",
    icon: "🧩",
    summary: "Neurodevelopmental condition affecting social interaction, sensory processing, and communication patterns.",
    rights: "Sensory-friendly public zones, individualized educational programs, and inclusive workplace accommodations."
  },
  {
    id: "chronic",
    name: "Chronic Illness with Disability",
    icon: "❤️",
    summary: "Kidney failure (dialysis), severe lupus, cancer, and rare diseases causing functional disability.",
    rights: "Mandatory 20% discount on maintenance medicines and diagnostic procedures, hospital express lanes."
  },
  {
    id: "multiple",
    name: "Multiple Disabilities",
    icon: "🛡️",
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
