import styled from 'styled-components'
import { color } from '../../../../styled/theme'
import { media } from '../../../../styled/media'

const TopItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

const TopThumbCont = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 340px;
  ${media.tablet} {
    width: 160px;
    height: 230px;
  }
  ${media.mobile} {
    width: 110px;
    height: 160px;
  }
`

const TopThumbnailBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .imgBox {
    background: ${color('gray', '70')};
    border-radius: 7px;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
  }
`

const ThumbnailCard = ({ movie, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/w500`
  return (
    <>
      <TopItemWrap {...props}>
        <TopThumbCont>
          <TopThumbnailBox>
            <div className="imgBox">
              <img src={`${bgurl}${movie.backdrop_path}`} alt="" />
            </div>
          </TopThumbnailBox>
        </TopThumbCont>
      </TopItemWrap>
    </>
  )
}

export default ThumbnailCard
