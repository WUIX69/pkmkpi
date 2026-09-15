import { socialChannels } from "../../data/homeContentExtra"
import { FacebookIcon, ArrowRightIcon } from "../icons"
import Reveal from "../Reveal"

function SocialChannels() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Reveal className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
          Join the Community
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
          Connect with us online
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {socialChannels.map((channel, index) => (
          <Reveal key={channel.handle} delay={index * 100}>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-content">
                <FacebookIcon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-base-content/50">
                {channel.name}
              </p>
              <p className="mt-1 font-display text-base font-semibold text-primary">
                {channel.handle}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-base-content/65">
                {channel.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                Visit page
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SocialChannels
