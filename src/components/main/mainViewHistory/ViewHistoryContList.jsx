import styled from 'styled-components'
import ViewHistoryContItem from './ViewHistoryContItem'
import { font } from '../../../styled/theme'
const ViewHistoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  .titleCont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 1400px;
  }
  h2 {
    font-size: ${font('title', 'xxlg')};
  }
  h3 {
    font-size: ${font('body', 'sm')};
  }

  .border {
    width: 24px;
    height: 24px;
  }
`

const ViewHistoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: start;
`
const ViewHistoryContList = () => {
  return (
    <>
      <ViewHistoryTitle>
        <div className="titleCont">
          <h2>title</h2>
          <h3>more</h3>
        </div>
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
