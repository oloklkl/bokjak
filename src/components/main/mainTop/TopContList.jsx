import styled from 'styled-components'
import { font } from '../../../styled/theme'
import TopContItem from './TopContItem'
import { IconButton } from '../../../ui'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { media } from '../../../styled/media'

const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  ${media.mobile} {
    gap: 20px;
  }
`

const TitleCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1540px;
  ${media.tablet} {
    gap: 620px;
  }
  ${media.mobile} {
    gap: 320px;
  }

  h2 {
    font-size: ${font('title', 'xxlg')};
    ${media.tablet} {
      font-size: ${font('title', 'xlg')};
    }
    ${media.mobile} {
      font-size: ${font('title', 'lg')};
    }
  }
  h3 {
    font-size: ${font('body', 'sm')};
  }
`
const TopList = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: start;
  ${media.tablet} {
    gap: 16px;
  }
  ${media.mobile} {
    gap: 10px;
  }
`
const PageNation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-69%, -50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1540px;
`

const TopContList = () => {
  return (
    <>
      <TopTitle>
        <TitleCont>
          <h2>title</h2>
          <h3>more</h3>
        </TitleCont>
      </TopTitle>
      <TopList>
        <TopContItem />
        <TopContItem />
        <TopContItem />
        <TopContItem />
        <TopContItem />
        <TopContItem />
        <TopContItem />
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
      </TopList>
    </>
  )
}

export default TopContList
