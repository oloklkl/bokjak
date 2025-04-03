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
        <AboutDisplay />
        <AboutMemberShip />
        <AboutHotContents />
        <AboutWhyBokjak />
        <AboutUpdateContents />
        <AboutFaq />
      </AboutWrap>
    </>
  )
}

export default About
