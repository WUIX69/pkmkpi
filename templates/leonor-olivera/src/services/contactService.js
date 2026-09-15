// Contact form submission service.
//
// There is currently NO real backend endpoint for this form. This
// function is written so a backend developer can wire it up later
// by replacing the body of `submitContactForm` with a real fetch()
// call — the rest of the app (ContactForm component, loading/error
// states) already expects this exact contract and will not need to
// change.
//
// Expected real implementation, once an endpoint exists:
//
//   export async function submitContactForm(payload) {
//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     })
//     if (!response.ok) {
//       throw new Error("Failed to submit the contact form.")
//     }
//     return response.json()
//   }

export class ContactServiceUnavailableError extends Error {
  constructor() {
    super("The contact form is not yet connected to a backend.")
    this.name = "ContactServiceUnavailableError"
  }
}

// payload: { name, organization, region, contactNumber, email, message }
export async function submitContactForm(payload) {
  void payload
  // Intentionally does NOT simulate a successful network request.
  // Throwing here is the honest behavior until a real API endpoint
  // exists — the UI treats this as a normal submission error and
  // tells the person how to reach the federation directly instead.
  throw new ContactServiceUnavailableError()
}
