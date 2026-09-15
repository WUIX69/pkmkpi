import { NavLink } from "react-router-dom"
import { navLinks } from "../data/navLinks"
import { siteInfo } from "../data/siteInfo"
import { socialChannels } from "../data/homeContentExtra"
import logo from "../assets/footer-logo.png"
import { FacebookIcon, MailIcon, PinIcon, ShieldIcon } from "./icons"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-content">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="rounded-2xl border border-accent/30 bg-primary-content/5 px-6 py-8 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {siteInfo.shortName}
          </p>
          <div className="mx-auto mt-3 max-w-2xl space-y-1 font-display text-lg italic sm:text-xl">
            {siteInfo.motto.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="block aspect-square h-12 w-12 shrink-0 overflow-visible rounded-full">
              <img
                src={logo}
                alt={`${siteInfo.shortName} logo`}
                className="h-full w-full rounded-full object-contain object-center"
              />
            </span>
            <p className="font-display text-lg font-semibold leading-tight">
              {siteInfo.shortName}
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-primary-content/75">
            {siteInfo.tagline}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-content/20 px-3 py-1 text-xs text-primary-content/70">
            <ShieldIcon className="h-3.5 w-3.5 text-accent" />
            SEC Reg. No. {siteInfo.secRegNo}
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className="text-primary-content/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-content/80">
            <li className="flex gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{siteInfo.address}</span>
            </li>
            <li className="flex gap-2">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                href={`mailto:${siteInfo.email}`}
                className="transition-colors hover:text-accent"
              >
                {siteInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Follow Us
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {socialChannels.map((channel) => (
              <li key={channel.handle}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-content/80 transition-colors hover:text-accent"
                >
                  <FacebookIcon className="h-4 w-4 shrink-0" />
                  <span>{channel.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-5 text-center text-xs text-primary-content/70 sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {siteInfo.foundedYear}–{currentYear} {siteInfo.shortName}. All
          rights reserved.
        </p>
        <div className="flex gap-4">
          <span className="cursor-default text-primary-content/50">
            Privacy Policy
          </span>
          <span className="cursor-default text-primary-content/50">
            Terms of Use
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
