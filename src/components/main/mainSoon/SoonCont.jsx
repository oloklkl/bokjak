import styled from 'styled-components'
import SoonContList from './SoonContList'
import { media } from '../../../styled/media'
import { color } from '../../../styled/theme'

const SoonSection = styled.div`
  width: 100%;
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
const SoonCont = () => {
  return (
    <SoonSection>
      <SoonContList />
    </SoonSection>
  )
}

export default SoonCont
