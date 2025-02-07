import { BarButton } from '../../../ui'
import { BannerImg, BannerTit, IntroBanner } from '../style'

const IntroItem = ({ imgUrl, logoUrl, imgTitle, title, btnText }) => {
  return (
    <>
      <IntroBanner>
        <BannerImg>
          <div className="overlay"></div>
          <img className="bannerImg" src={imgUrl} alt={imgTitle} />
        </BannerImg>
        <BannerTit>
          <img className="bannerLogo" src={logoUrl} alt={imgTitle} />
          <span>{title}</span>
          <BarButton text={btnText} width="300px" height="60px" />
        </BannerTit>
      </IntroBanner>
    </>
  )
}

export default IntroItem
