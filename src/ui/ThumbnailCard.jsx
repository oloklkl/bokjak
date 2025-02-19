import { useState } from 'react'
import ThumbnailCardHover from './ThumbnailCardHover'
import styled from 'styled-components'

const ThumbItemWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

const ThumbTopCont = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  aspect-ratio: 2 / 3;
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    object-position: center center;
  }
`

const ThumbnailCard = ({ content, ...props }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState(null)

  const bgurl = `https://image.tmdb.org/t/p/original`
  const title = content.title

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsHovered(true)
    }, 200)
    setHoverTimeout(timeout)
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    setIsHovered(false)
  }

  return (
    <ThumbItemWrap
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <ThumbTopCont>
        <img src={`${bgurl}${content.poster_path}`} alt={title} />
      </ThumbTopCont>
      {isHovered && <ThumbnailCardHover content={content} />}
    </ThumbItemWrap>
  )
}

export default ThumbnailCard
