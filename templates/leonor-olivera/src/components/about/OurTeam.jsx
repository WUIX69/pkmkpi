import { teamMembers } from "../../data/teamContent"
import Reveal from "../Reveal"
import { useScrollReveal } from "../../hooks/useScrollReveal"

// Single team card: uses its own scroll-reveal hook so the entrance
// (fade + rise + scale) and hover state can be scoped to
// .team-card-anim without touching the generic .reveal used elsewhere.
function TeamCard({ member, delay }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`team-card-anim ${isVisible ? "is-visible" : ""} group flex h-full flex-col items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 text-center shadow-sm transition-shadow duration-300`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className="team-card-photo-wrap relative aspect-square w-full overflow-hidden rounded-full border-2 border-secondary/20 bg-base-200 ring-4 ring-primary/5">
        <img
          src={member.photo}
          alt={member.name}
          className="team-card-photo h-full w-full object-cover object-center"
        />
        <div className="team-card-photo-overlay absolute inset-0" aria-hidden="true" />
      </div>
      <p className="team-card-name font-display text-sm font-semibold text-primary sm:text-base">
        {member.name}
      </p>
    </div>
  )
}

function OurTeam({ showHeading = true }) {
  return (
    <section className="bg-base-200/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {showHeading && (
          <Reveal className="text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              The people behind PKMKPI
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-primary sm:text-3xl">
              Our Team
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-secondary" aria-hidden="true" />
          </Reveal>
        )}

        <div className="team-grid mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
