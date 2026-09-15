import { contributionMethods } from "../data/contributeContent"
import { siteInfo } from "../data/siteInfo"
import { MailIcon, PinIcon } from "../components/icons"
import PageHero from "../components/PageHero"
import Reveal from "../components/Reveal"

function Contribute() {
  return (
    <>
      <PageHero
        eyebrow="Contribute"
        title="Stand with the PWD sector"
        description="Your contribution helps PKMKPI's member federations serve Persons With Disability and Persons with Work-Related Disability across all seventeen regions of the Philippines."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {contributionMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Reveal key={method.id} delay={index * 80}>
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-content">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-lg font-semibold text-primary">
                    {method.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-base-content/70">
                    {method.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal
          delay={260}
          className="mt-10 rounded-2xl border border-primary/15 bg-primary/5 p-6 sm:p-7"
        >
          <h2 className="font-display text-base font-semibold text-primary">
            No online donation channel is set up yet
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-base-content/70">
            PKMKPI does not yet have a published bank account, payment
            gateway, or QR code for online donations on this website. To
            make a contribution of any kind, please reach the federation
            directly using the details below, and our team will guide you
            through the process.
          </p>

          <ul className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
            <li className="flex items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MailIcon className="h-4 w-4" />
              </span>
              <a href={`mailto:${siteInfo.email}`} className="font-semibold text-primary underline decoration-secondary/40 underline-offset-2 hover:text-secondary">
                {siteInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <PinIcon className="h-4 w-4" />
              </span>
              <span className="text-base-content/75">{siteInfo.address}</span>
            </li>
          </ul>
        </Reveal>
      </section>
    </>
  )
}

export default Contribute
