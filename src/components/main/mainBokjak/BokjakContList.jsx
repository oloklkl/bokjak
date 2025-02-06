import styled from 'styled-components'
import BokjakContItem from './BokjakContItem'
import { font } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { QuestionMark } from '@phosphor-icons/react'

const BokjakTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`
const TitleCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;

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

const BokjakList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: start;
`

const BokjakContList = () => {
  return (
    <>
      <BokjakTitle>
        <TitleCont>
          <h2>title</h2>
          <IconButton
            className="border"
            icon={<QuestionMark size={18} />}
            text="smiley"
          />
        </TitleCont>
      </BokjakTitle>
      <BokjakList>
        <BokjakContItem />
        <BokjakContItem />
        <BokjakContItem />
        <BokjakContItem />
        <BokjakContItem />
      </BokjakList>
    </>
  )
}

export default BokjakContList
