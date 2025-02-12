import styled from 'styled-components'
import ViewHistoryContList from './ViewHistoryContList'
import { media } from '../../../styled/media'

const ViewHistorySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0 50px;
  ${media.tablet} {
    padding: 60px 0 40px;
  }
  ${media.mobile} {
    padding: 40px 0 20px;
  }
`

const ViewHistoryCont = () => {
  return (
    <ViewHistorySection>
      <ViewHistoryContList />
    </ViewHistorySection>
  )
}

export default ViewHistoryCont
