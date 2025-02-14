import styled from 'styled-components'
import ThumbnailContList from './ThumbnailContList'
import { media } from '../../../styled/media'

const ThumbnailSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0 50px;
  ${media.tablet} {
    padding: 80px 0 40px;
  }
  ${media.mobile} {
    gap: 20px;
    padding: 40px 0 20px;
  }
`

const ThumbnailCont = () => {
  return (
    <ThumbnailSection>
      <ThumbnailContList />
    </ThumbnailSection>
  )
}

export default ThumbnailCont
