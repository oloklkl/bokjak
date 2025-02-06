import styled from 'styled-components'
import { font } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import ThumbnailCard from '../../../common/main/card/thumbnail/ThumbnailCard'

const ThumbnailText = styled.div`
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
  gap: 1540px;

  h2 {
    font-size: ${font('title', 'xxlg')};
  }
  h3 {
    font-size: ${font('body', 'sm')};
  }
`
const ThumbnailList = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: start;
`
const PageNation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-64%, -50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1540px;
`

const ThumbnailContList = () => {
  return (
    <>
      <ThumbnailText>
        <TitleCont>
          <h2>title</h2>
          <h3>more</h3>
        </TitleCont>
      </ThumbnailText>
      <ThumbnailList>
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <ThumbnailCard />
        <PageNation>
          <IconButton
            className="b30"
            icon={<CaretLeft size={24} />}
            text="caretLeft"
          />
          <IconButton
            className="b30"
            icon={<CaretRight size={24} />}
            text="caretRight"
          />
        </PageNation>
      </ThumbnailList>
    </>
  )
}

export default ThumbnailContList
