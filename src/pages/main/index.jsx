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
          <ThumbnailCont title="한 번 보면 빠져드는" />
          <ThumbnailCont title="오늘의 추천작" />
        </div>
        <SoonCont />
        <div className="inner">
          <ThumbnailCont title="판타지 세계 속으로 다이브 ~" />
          <ThumbnailCont title="스릴 넘치는 미스터리, 끝까지 놓치지 마세요" />
          <FlipBackCont />
          <ThumbnailCont title="지금, 이 콘텐츠!!" />
          <ThumbnailCont title="마음을 울리는 로맨스" />
          <SeriesCont />
        </div>
        {/* <BottomNavigation /> */}
      </MainWrap>
    </>
  )
}

export default Main
