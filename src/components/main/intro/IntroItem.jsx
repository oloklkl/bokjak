import { BarButton } from '../../../ui'
import { IntroImgCont, IntroTextCont, IntroBannerCont } from '../style'

const IntroItem = ({ imgUrl, logoUrl, imgTitle, title, btnText }) => {
  return (
    <IntroBannerCont>
      <IntroImgCont>
        <div className="overlay"></div>
        <img className="introSlideImg" src={imgUrl} alt={imgTitle} />
      </IntroImgCont>
      <IntroTextCont>
        <img className="introSlideLogo" src={logoUrl} alt={imgTitle} />
        <span>{title}</span>
        <BarButton className="btn" text={btnText} width="300px" height="60px" />
      </IntroTextCont>
    </IntroBannerCont>
  )
}

export default IntroItem
