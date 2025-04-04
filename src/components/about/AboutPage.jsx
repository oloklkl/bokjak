import AboutDisplay from './AboutDisplay'
import AboutFaq from './AboutFaq'
import AboutHotContents from './AboutHotContents'
import AboutMemberShip from './AboutMemberShip'
import AboutUpdateContents from './AboutUpdateContents'
import AboutWhyBokjak from './AboutWhyBokjak'

function AboutPage() {
  return (
    <>
      <div className="inner">
        <AboutDisplay />
        <AboutMemberShip />
        <AboutHotContents />
        <AboutWhyBokjak />
        <AboutUpdateContents />
        <AboutFaq />
      </div>
    </>
  )
}

export default AboutPage
