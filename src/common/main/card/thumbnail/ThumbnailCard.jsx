import { TopItemWrap, TopThumbCont } from './style'

const ThumbnailCard = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const logoUrl = content.logoImage
    ? `https://image.tmdb.org/t/p/original${content.logoImage}`
    : null
  return (
    <>
      <TopItemWrap {...props}>
        <TopThumbCont>
          <img src={`${bgurl}${content.poster_path}`} alt="" />
          {/* {logoUrl && <img src={logoUrl} />} */}
        </TopThumbCont>
      </TopItemWrap>
    </>
  )
}

export default ThumbnailCard
