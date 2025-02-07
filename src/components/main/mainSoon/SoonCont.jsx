import styled from 'styled-components'
import SoonContList from './SoonContList'
import { media } from '../../../styled/media'

const SoonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  padding: 100px 0;
  ${media.tablet} {
    padding: 80px 0;
  }
  ${media.mobile} {
    gap: 20px;
    padding: 40px 0;
  }
`
const SoonCont = () => {
  return (
    <SoonWrap>
      <SoonContList />
    </SoonWrap>
  )
}

export default SoonCont
