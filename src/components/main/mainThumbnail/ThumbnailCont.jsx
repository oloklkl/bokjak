import styled from 'styled-components'
import ThumbnailContList from './ThumbnailContList'

const ThumbnailWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 40px 0;
`

const ThumbnailCont = () => {
  return (
    <ThumbnailWrap>
      <ThumbnailContList />
    </ThumbnailWrap>
  )
}

export default ThumbnailCont
