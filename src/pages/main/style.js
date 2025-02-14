import styled from 'styled-components'
import { media } from '../../styled/media'

export const VisualWrap = styled.section`
  width: 100%;
  height: 800px;
  position: relative;
  ${media.tablet} {
    height: 650px;
  }
  ${media.mobile} {
    height: 470px;
  }
`
export const MainWrap = styled.div`
  &.main {
  }
  .inner {
    padding: 100px 0;
  }
`
