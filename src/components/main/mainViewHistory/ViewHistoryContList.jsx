import styled from 'styled-components'
import ViewHistoryContItem from './ViewHistoryContItem'
import { font } from '../../../styled/theme'
const ViewHistoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`
const TitleCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1400px;

  h2 {
    font-size: ${font('title', 'xxlg')};
  }
  h3 {
    font-size: ${font('body', 'sm')};
  }
`

const ViewHistoryList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: start;
`
const ViewHistoryContList = () => {
  return (
    <>
      <ViewHistoryTitle>
        <TitleCont>
          <h2>title</h2>
          <h3>more</h3>
        </TitleCont>
      </ViewHistoryTitle>
      <ViewHistoryList>
        <ViewHistoryContItem />
        <ViewHistoryContItem />
        <ViewHistoryContItem />
        <ViewHistoryContItem />
        <ViewHistoryContItem />
      </ViewHistoryList>
    </>
  )
}

export default ViewHistoryContList
