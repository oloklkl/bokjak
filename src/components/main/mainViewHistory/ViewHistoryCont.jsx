import styled from 'styled-components'
import ViewHistoryContList from './ViewHistoryContList'

const ViewHistoryWrap = styled.div`
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
    <div>
      <ViewHistoryWrap>
        <ViewHistoryContList />
      </ViewHistoryWrap>
    </div>
  )
}

export default BokjakCont
