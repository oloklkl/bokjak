import styled from 'styled-components'
import { color, font } from '../../../styled/theme'
import { IconButton } from '../../../ui'
import { Play } from '@phosphor-icons/react'

const ViewHistoryItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  video {
    width: 320px;
    height: 180px;
    source {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  .title {
    width: 130px;
    text-align: center;
    h3 {
      font-size: ${font('body', 'lg')};
    }
    h4 {
      font-size: ${font('body', 'sm')};
      color: ${color('gray', '40')};
    }
  }
`

const ViewHistoryContItem = () => {
  return (
    <ViewHistoryItemBox>
      <div className="videoCont">
        <video controls>
          <source src="movie.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="icon">
        <IconButton
          className="border"
          icon={<Play size={32} weight="fill" />}
          text="smiley"
        />
      </div>
      <div className="stateBar"></div>
    </ViewHistoryItemBox>
  )
}

export default ViewHistoryContItem
