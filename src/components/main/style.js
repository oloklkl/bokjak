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

  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }
`
