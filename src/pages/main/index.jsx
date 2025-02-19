// import BottomNavigation from '../../common/bottomnavigation'
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
          <ThumbnailCont title="오늘의 추천작" isRandom={true} />
          <ThumbnailCont title="생동감 넘치는 액션 영화" targetGenreId={28} />
        </div>
        <SoonCont />
        <div className="inner">
          <ThumbnailCont title="지금 뜨고 있는 드라마" targetGenreId={878} />
          <ThumbnailCont
            title="스릴 넘치는 미스터리, 끝까지 놓치지 마세요"
            targetGenreId={9648}
          />
          <FlipBackCont />
          <ThumbnailCont title="지금, 이 콘텐츠!!" isRandom={true} />
          <ThumbnailCont title="마음을 울리는 로맨스" targetGenreId={10749} />
          <SeriesCont />
        </div>
        {/* <BottomNavigation /> */}
      </MainWrap>
    </>
  )
}

export default Main
