import { siteInfo } from "../data/siteInfo"
import { socialChannels } from "../data/homeContentExtra"
import { MailIcon, PinIcon, FacebookIcon } from "../components/icons"
import ContactForm from "../components/contact/ContactForm"
import PageHero from "../components/PageHero"
import Reveal from "../components/Reveal"

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Reach out with questions about membership, partnerships, or how to get involved with the national federation."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal className="space-y-5">
            <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <h2 className="font-display text-lg font-semibold text-primary">
                Get in touch
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <span className="text-base-content/75">{siteInfo.address}</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="text-base-content/75 transition-colors hover:text-secondary"
                  >
                    {siteInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <h2 className="font-display text-lg font-semibold text-primary">
                Follow us
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {socialChannels.map((channel) => (
                  <li key={channel.handle}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base-content/75 transition-colors hover:text-secondary"
                    >
                      <FacebookIcon className="h-4 w-4 shrink-0 text-secondary" />
                      {channel.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact
