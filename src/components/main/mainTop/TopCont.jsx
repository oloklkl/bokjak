import styled from 'styled-components'
import TopContList from './TopContList'
import { media } from '../../../styled/media'
import { color } from '../../../styled/theme'

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${color('gray', '80')};
  padding: 100px 0;

  ${media.tablet} {
    padding: 80px 0;
  }
  ${media.mobile} {
    gap: 20px;
    padding: 40px 0;
  }
`

const TopCont = () => {
  return (
    <TopWrap>
      <TopContList />
    </TopWrap>
  )
}

export default TopCont
