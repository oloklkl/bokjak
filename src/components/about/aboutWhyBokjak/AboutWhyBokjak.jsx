import AboutWhyBokjakDesktop from './AboutWhyBokjakDesktop'
import AboutWhyBokjakMobile from './AboutWhyBokjakMobile'
import useIsDesktop from './useIsDesktop'

function AboutWhyBokjak() {
  const isDesktop = useIsDesktop()

  return isDesktop ? <AboutWhyBokjakDesktop /> : <AboutWhyBokjakMobile />
}

export default AboutWhyBokjak
