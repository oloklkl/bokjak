import styled from 'styled-components'
import BokjakContList from './BokjakContList'

const BokjakContWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 40px 0;
`

const BokjakCont = () => {
  return (
    <BokjakContWrap>
      <BokjakContList />
    </BokjakContWrap>
  )
}

export default BokjakCont
