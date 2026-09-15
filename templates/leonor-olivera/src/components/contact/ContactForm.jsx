import { useState } from "react"
import { submitContactForm } from "../../services/contactService"
import { siteInfo } from "../../data/siteInfo"
import { CheckCircleIcon, SendIcon } from "../icons"

const initialForm = {
  name: "",
  organization: "",
  region: "",
  contactNumber: "",
  email: "",
  message: "",
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = "Please enter your full name."
  }

  if (!form.email.trim()) {
    errors.email = "Please enter an email address."
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  if (!form.message.trim()) {
    errors.message = "Please enter a message or inquiry."
  }

  return errors
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | submitting | success | error

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setStatus("submitting")
    try {
      await submitContactForm(form)
      setStatus("success")
      setForm(initialForm)
    } catch {
      setStatus("error")
    }
  }

  const isSubmitting = status === "submitting"

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7">
      <h2 className="font-display text-lg font-semibold text-primary">
        Send a message
      </h2>
      <p className="mt-1 text-sm text-base-content/60">
        This form isn't connected to a backend yet, so submissions can't be
        sent from here. Please email{" "}
        <a href={`mailto:${siteInfo.email}`} className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-2 hover:text-primary">
          {siteInfo.email}
        </a>{" "}
        directly in the meantime.
      </p>

      {status === "success" && (
        <div
          role="status"
          className="mt-5 flex items-center gap-3 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success"
        >
          <CheckCircleIcon className="h-5 w-5 shrink-0" />
          Your message was validated successfully.
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
        >
          This form can't be submitted yet — there's no backend connected.
          Please email us directly at{" "}
          <a href={`mailto:${siteInfo.email}`} className="font-semibold underline">
            {siteInfo.email}
          </a>{" "}
          instead.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-base-content/80">
            Full name <span className="text-error">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            value={form.name}
            onChange={handleChange}
            className={`input input-bordered mt-1.5 w-full transition-colors duration-200 focus:border-secondary ${errors.name ? "input-error" : ""}`}
            placeholder="Juan Dela Cruz"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="organization" className="text-sm font-semibold text-base-content/80">
              Organization
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              value={form.organization}
              onChange={handleChange}
              className="input input-bordered mt-1.5 w-full transition-colors duration-200 focus:border-secondary"
              placeholder="Your federation or organization"
            />
          </div>

          <div>
            <label htmlFor="region" className="text-sm font-semibold text-base-content/80">
              Region
            </label>
            <input
              id="region"
              name="region"
              type="text"
              value={form.region}
              onChange={handleChange}
              className="input input-bordered mt-1.5 w-full transition-colors duration-200 focus:border-secondary"
              placeholder="e.g. Region VII — Central Visayas"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contactNumber" className="text-sm font-semibold text-base-content/80">
              Contact number
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={form.contactNumber}
              onChange={handleChange}
              className="input input-bordered mt-1.5 w-full transition-colors duration-200 focus:border-secondary"
              placeholder="09XX XXX XXXX"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-semibold text-base-content/80">
              Email address <span className="text-error">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              value={form.email}
              onChange={handleChange}
              className={`input input-bordered mt-1.5 w-full transition-colors duration-200 focus:border-secondary ${errors.email ? "input-error" : ""}`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-xs text-error">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-semibold text-base-content/80">
            Message / Inquiry <span className="text-error">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={`textarea textarea-bordered mt-1.5 w-full transition-colors duration-200 focus:border-secondary ${errors.message ? "textarea-error" : ""}`}
            placeholder="How can we help?"
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-error">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full gap-2 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transform-none sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner loading-sm" />
              Sending...
            </>
          ) : (
            <>
              Send message
              <SendIcon className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
