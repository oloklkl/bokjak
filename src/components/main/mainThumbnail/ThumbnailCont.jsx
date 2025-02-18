import { ThumbnailSection } from './style'
import ThumbnailContList from './ThumbnailContList'

const ThumbnailCont = ({ title }) => {
  return (
    <ThumbnailSection>
      <ThumbnailContList title={title} />
    </ThumbnailSection>
  )
}

export default ThumbnailCont
