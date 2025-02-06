import styled from 'styled-components'
import BokjakContList from './BokjakContList'

const BokjakWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BokjakCont = () => {
  return (
    <div>
      <BokjakWrap>
        <BokjakContList />
      </BokjakWrap>
    </div>
  )
}

export default BokjakCont
