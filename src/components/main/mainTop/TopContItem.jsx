import ThumbnailCard from '../../../ui/ThumbnailCard'
import ThumbnailCardHover from '../../../ui/ThumbnailCardHover'
import { TopItemCont, TopNumberImg, TopThumbnailImg } from './style'

const TopContItem = ({ content, numberImg, ...props }) => {
  const title = content.title
  return (
    <TopItemCont {...props}>
      {numberImg && (
        <TopNumberImg>
          <img src={numberImg} alt={`순위 이미지 ${title}`} />
        </TopNumberImg>
      )}

      <TopThumbnailImg>
        <ThumbnailCard content={content}></ThumbnailCard>
      </TopThumbnailImg>
    </TopItemCont>
  )
}

export default TopContItem
