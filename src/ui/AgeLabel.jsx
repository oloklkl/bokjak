import styled from 'styled-components'
import { media } from '../styled/media'
import { color, font } from '../styled/theme'

const AgeLabelWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 22.5px;
  font-size: ${font('detail', 'sm')};
  background-color: ${color('gray', '70')};
  color: ${color('gray', '0')};
  border-radius: 9999px;
  padding: 6px 4px;
  ${media.mobile} {
    width: 34px;
    height: 16px;
    font-size: ${font('label', 'xsm')};
  }
  // 디테일(서브)
  &.detail {
    width: 60px;
    height: 24px;
    font-size: ${font('label', 'sm')};
  }
`

const AgeLabel = (props) => {
  return <AgeLabelWrap {...props}>{props.text}</AgeLabelWrap>
}

export default AgeLabel
