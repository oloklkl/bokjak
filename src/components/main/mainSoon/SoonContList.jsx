import styled from 'styled-components'
import { media } from '../../../styled/media'
import { font } from '../../../styled/theme'
import SoonContItem from './SoonContItem'

const SoonTitle = styled.div`
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
  gap: 1400px;
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

const SoonList = styled.div`
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

const SoonContList = () => {
  return (
    <>
      <SoonTitle>
        <TitleCont>
          <h2>title</h2>
          <h3>more</h3>
        </TitleCont>
      </SoonTitle>
      <SoonList>
        <SoonContItem />
        <SoonContItem />
        <SoonContItem />
        <SoonContItem />
        <SoonContItem />
      </SoonList>
    </>
  )
}

export default SoonContList
