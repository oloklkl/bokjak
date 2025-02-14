import styled from 'styled-components'
import TopContList from './TopContList'
import { media } from '../../../styled/media'
import { color } from '../../../styled/theme'

const TopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${color('gray', '80')};
  padding: 100px 0 50px;
  ${media.tablet} {
    padding: 80px 0;
  }
  ${media.mobile} {
    padding: 40px 0;
  }
`

const TopCont = () => {
  return (
    <TopSection>
      <TopContList />
    </TopSection>
  )
}

export default TopCont
