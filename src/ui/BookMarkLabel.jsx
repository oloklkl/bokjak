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
  padding: 6px 4px;
  ${media.mobile} {
    width: 38px;
    height: 16px;
    border-radius: 0 0 5px 5px;
    font-size: ${font('label', 'xsm')};
  }
  // NEW 디테일(서브창)
  &.detail {
    width: 60px;
    height: 50px;
    padding: 30px 4px 6px 6px;
  }

  // 더빙 (썸네일)
  &.dubbing {
    background-color: ${color('gray', '80')};
  }

  // 더빙 디테일(서브창)
  &.detailDub {
    background-color: ${color('gray', '80')};
    width: 60px;
    height: 50px;
    padding: 30px 4px 6px 6px;
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
