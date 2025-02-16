import { BarButton } from '../../../ui'
import { IntroBannerCont, IntroImgCont, IntroTextCont } from './style'

const IntroItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const logoUrl = content.logoImage
    ? `https://image.tmdb.org/t/p/original${content.logoImage}`
    : null
  const desc = content.overview
  const title = content.title
  const btnText = props.text
  return (
    <IntroBannerCont {...props}>
      <IntroImgCont>
        <img
          className="introSlideImg"
          src={`${bgurl}${content.backdrop_path}`}
          alt={title}
        />
      </IntroImgCont>
      <IntroTextCont>
        <img className="introSlideLogo" src={logoUrl} alt={title} />
        <span>{desc}</span>
        <BarButton
          className="introBtn"
          text="재생하기"
          width="300px"
          height="60px"
        />
      </IntroTextCont>
    </IntroBannerCont>
  )
}

export default IntroItem
