import styled from 'styled-components'
import { media } from '../styled/media'
import { color, font } from '../styled/theme'

const BookMarkLabelWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 24px;
  font-weight: bold;
  font-size: ${font('detail', 'sm')};
  background-color: ${color('primary', 'default')};
  color: ${color('gray', '0')};
  border-radius: 0 0 7px 7px;
  ${media.mobile} {
    width: 38px;
    height: 16px;
    border-radius: 0 0 5px 5px;
    font-size: ${font('label', 'xsm')};
  }
  &.dubbing {
    background-color: ${color('gray', '80')};
  }
  &.detail {
    width: 60px;
    height: 50px;
    padding-top: 20px;
  }
  &.detailDub {
    background-color: ${color('gray', '80')};
    width: 60px;
    height: 50px;
    padding-top: 20px;
  }
`

const BookMarkLabel = ({ children, ...props }) => {
  return (
    <BookMarkLabelWrap {...props}>
      {children}
      {props.text}
    </BookMarkLabelWrap>
  )
}

export default BookMarkLabel
