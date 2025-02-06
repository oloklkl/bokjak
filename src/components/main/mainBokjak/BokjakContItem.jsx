import styled from 'styled-components'
import { color, font } from '../../../styled/theme'

const BokjakItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .bg {
    width: 130px;
    height: 130px;
    background: ${color('gray', '80')};
    border-radius: 999px;
  }
  .title {
    width: 130px;
    text-align: center;
    h3 {
      font-size: ${font('body', 'lg')};
    }
    h4 {
      font-size: ${font('body', 'sm')};
      color: ${color('gray', '40')};
    }
  }
`

const BokjakContItem = () => {
  return (
    <BokjakItemWrap>
      <div className="bkcont bg">
        <img src="" alt="" />
      </div>
      <div className="bkcont  title">
        <h3>title</h3>
        <h4>desc</h4>
      </div>
    </BokjakItemWrap>
  )
}

export default BokjakContItem
