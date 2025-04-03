import AboutDisplay from '../../components/about/AboutDisplay'
import AboutFaq from '../../components/about/AboutFaq'
import AboutHotContents from '../../components/about/AboutHotContents'
import AboutMemberShip from '../../components/about/AboutMemberShip'
import AboutUpdateContents from '../../components/about/AboutUpdateContents'
import AboutWhyBokjak from '../../components/about/AboutWhyBokjak'
import { AboutWrap } from './style'

const About = () => {
  return (
    <>
      <AboutWrap>
        <div className="inner">
          <AboutDisplay />
          <AboutMemberShip />
          <AboutHotContents />
          <AboutWhyBokjak />
          <AboutUpdateContents />
          <AboutFaq />
        </div>
      </AboutWrap>
    </>
  )
}

export default About
