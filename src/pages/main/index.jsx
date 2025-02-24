// import BottomNavigation from '../../common/bottomnavigation'
import { Link } from 'react-router-dom'
import {
  Intro,
  BokjakCont,
  FlipBackCont,
  SeriesCont,
  SoonCont,
  ThumbnailCont,
  TopCont,
  ViewHistoryCont,
} from '../../components'
import { MainWrap, VisualWrap } from './style'

const Main = () => {
  return (
    <>
      <VisualWrap>
        <Intro />
      </VisualWrap>
      <MainWrap>
        <div className="inner">
          <BokjakCont />
          <ViewHistoryCont />
        </div>

        <TopCont />
        <div className="inner">
          <ThumbnailCont title="요즘 뜨는영화" typeFilter="movie" />
          <ThumbnailCont title="인기 드라마" typeFilter="tv" />
        </div>
        <SoonCont />
        <div className="inner">
          <ThumbnailCont
            title="생동감 넘치는 액션 영화"
            typeFilter=""
            targetGenreId={28}
          />
          <ThumbnailCont
            title="웃음이 필요한 순간"
            typeFilter="tv"
            // targetGenreId={35}
          />
          <FlipBackCont />
          <ThumbnailCont title="지금, 이 콘텐츠!!" typeFilter="" />
          <ThumbnailCont
            title="잠 못들게 하는 스릴러 영화"
            typeFilter="movie"
            targetGenreId={53}
          />
          <SeriesCont />
        </div>
        {/* <BottomNavigation /> */}
      </MainWrap>
    </>
  )
}

export default Main
