import { TopItemCont, TopNumberImg, TopThumbnailImg } from './style'

const TopContItem = ({ content, numberImg, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const title = content.title
  return (
    <TopItemCont {...props}>
      {numberImg && (
        <TopNumberImg>
          <img src={numberImg} alt={`순위 이미지 ${title}`} />
        </TopNumberImg>
      )}
      <TopThumbnailImg>
        <img src={`${bgurl}${content.poster_path}`} alt={title} />
      </TopThumbnailImg>
    </TopItemCont>
  )
}

export default TopContItem
