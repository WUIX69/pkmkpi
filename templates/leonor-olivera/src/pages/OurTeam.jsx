import PageHero from "../components/PageHero"
import OurTeamSection from "../components/about/OurTeam"

function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet the people behind PKMKPI"
        description="The dedicated team working every day to advance the rights and welfare of Persons With Disabilities across the Philippines."
      />
      <OurTeamSection showHeading={false} />
    </>
  )
}

export default OurTeamPage
