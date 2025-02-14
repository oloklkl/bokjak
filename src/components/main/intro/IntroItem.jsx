import { BarButton } from '../../../ui'
import { IntroBannerCont, IntroImgCont, IntroTextCont } from './style'

const IntroItem = ({ imgUrl, logoUrl, imgTitle, title, btnText }) => {
  return (
    <IntroBannerCont>
      <IntroImgCont>
        <img className="introSlideImg" src={imgUrl} alt={imgTitle} />
      </IntroImgCont>
      <IntroTextCont>
        <img className="introSlideLogo" src={logoUrl} alt={imgTitle} />
        <span>{title}</span>
        <BarButton
          className="introBtn"
          text={btnText}
          width="300px"
          height="60px"
        />
      </IntroTextCont>
    </IntroBannerCont>
  )
}

export default IntroItem
