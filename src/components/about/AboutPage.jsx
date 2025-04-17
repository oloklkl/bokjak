import AboutDisplay from './AboutDisplay/AboutDisplay'
import AboutFaq from './AboutFaq'
import AboutHotContents from './AboutHotContents'
import AboutMemberShip from './AboutMemberShip'
import AboutUpdateContents from './AboutUpdateContents'
import AboutWhyBokjak from './aboutWhyBokjak/AboutWhyBokjak'

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
