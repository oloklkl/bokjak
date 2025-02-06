import styled from 'styled-components'
import TopContList from './TopContList'

const TopWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  padding: 40px 0;
`

const TopCont = () => {
  return (
    <TopWrap>
      <TopContList />
    </TopWrap>
  )
}

export default TopCont
