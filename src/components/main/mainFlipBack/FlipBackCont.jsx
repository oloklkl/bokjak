import styled from 'styled-components'
import FlipBackContList from './FlipBackContList'
import { media } from '../../../styled/media'
const FlipBackSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 0;
  ${media.tablet} {
    padding: 80px 0;
  }
  ${media.mobile} {
    gap: 20px;
    padding: 40px 0;
  }
`
const FlipBackCont = () => {
  return (
    <FlipBackSection>
      <FlipBackContList />
    </FlipBackSection>
  )
}

export default FlipBackCont
