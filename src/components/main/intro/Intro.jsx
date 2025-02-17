import IntroList from './introList'
import { IntroSection } from './style'

const Intro = () => {
  return (
    <IntroSection>
      <div className="inner">
        <IntroList />
      </div>
    </IntroSection>
  )
}

export default Intro
