import { ThumbnailSection } from './style'
import ThumbnailContList from './ThumbnailContList'

const ThumbnailCont = ({ title, targetGenreId, typeFilter }) => {
  return (
    <ThumbnailSection>
      <ThumbnailContList
        title={title}
        targetGenreId={targetGenreId}
        typeFilter={typeFilter}
      />
    </ThumbnailSection>
  )
}

export default ThumbnailCont
