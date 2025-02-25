import { IconButton } from '../../../ui'
import { Info, Play } from '@phosphor-icons/react'
import { InfoCont, StateBar, ViewHistoryItemCont } from './style'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ViewHistoryContItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const desc = content.overview
  const title = content.title
  const totalTime = 120

  const [remainingTime] = useState(Math.floor(Math.random() * 120) + 1)
  const progress = ((totalTime - remainingTime) / totalTime) * 100
  return (
    <ViewHistoryItemCont {...props}>
      <div className="thumbnailCont">
        <img src={`${bgurl}${content.backdrop_path}`} alt={title} />

        <div className="icon">
          <Link>
            <IconButton
              className="border"
              icon={<Play size={24} weight="fill" />}
              text="Play"
            />
          </Link>
        </div>
        <StateBar>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </StateBar>
      </div>
      <InfoCont>
        <div className="textarea">
          <h2>{title}</h2>
          <span>{desc}</span>
        </div>
        <Link to={`/video/${content.id}`}>
          <IconButton className="none" icon={<Info size={24} />} text="Info" />
        </Link>
      </InfoCont>
    </ViewHistoryItemCont>
  )
}

export default ViewHistoryContItem
