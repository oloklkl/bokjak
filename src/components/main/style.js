import styled from 'styled-components'
import { media } from '../../styled/media'

export const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 3;
  pointer-events: none;

  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }

  .b30 {
    pointer-events: auto;
  }
`
