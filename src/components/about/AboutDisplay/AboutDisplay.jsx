import useIsDesktop from './useIsDesktop'
import AboutDisplayDesktop from './AboutDisplayDesktop'
import AboutDisplayMobile from './AboutDisplayMobile'

function AboutDisplay() {
  const isDesktop = useIsDesktop()

  return isDesktop ? <AboutDisplayDesktop /> : <AboutDisplayMobile />
}

export default AboutDisplay
