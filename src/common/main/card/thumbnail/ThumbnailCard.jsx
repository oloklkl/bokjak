import { TopItemWrap, TopThumbCont } from './style'

const ThumbnailCard = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/w500`
  const logoUrl = content.logoImage
    ? `https://image.tmdb.org/t/p/w500${content.logoImage}`
    : null
  return (
    <>
      <TopItemWrap {...props}>
        <TopThumbCont>
          <img src={`${bgurl}${content.backdrop_path}`} alt="" />
          {/* {logoUrl && <img src={logoUrl} />} */}
        </TopThumbCont>
      </TopItemWrap>
    </>
  )
}

export default ThumbnailCard
