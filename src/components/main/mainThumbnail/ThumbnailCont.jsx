import { ThumbnailSection } from './style'
import ThumbnailContList from './ThumbnailContList'

const ThumbnailCont = ({ title, targetGenreId, isRandom }) => {
  return (
    <ThumbnailSection>
      <ThumbnailContList
        title={title}
        targetGenreId={targetGenreId}
        isRandom={isRandom}
      />
    </ThumbnailSection>
  )
}

export default ThumbnailCont
