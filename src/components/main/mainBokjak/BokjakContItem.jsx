import styled from 'styled-components'
import { color, font } from '../../../styled/theme'

const BokjakItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
const BokjakImg = styled.div`
  width: 130px;
  height: 130px;
  background: ${color('gray', '80')};
  border-radius: 999px;
`
const BokjakTitle = styled.div`
  width: 130px;
  text-align: center;
  h3 {
    font-size: ${font('body', 'lg')};
  }
  h4 {
    font-size: ${font('body', 'sm')};
    color: ${color('gray', '40')};
  }
`

const BokjakContItem = () => {
  return (
    <BokjakItemWrap>
      <BokjakImg>
        <img src="" alt="" />
      </BokjakImg>
      <BokjakTitle>
        <h3>title</h3>
        <h4>desc</h4>
      </BokjakTitle>
    </BokjakItemWrap>
  )
}

export default BokjakContItem
