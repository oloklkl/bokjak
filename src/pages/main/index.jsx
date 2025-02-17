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
          <ThumbnailCont />
          <ThumbnailCont />
        </div>
        <SoonCont />
        <div className="inner">
          <ThumbnailCont />
          <ThumbnailCont />
          <FlipBackCont />
          <ThumbnailCont />
          <ThumbnailCont />
          <SeriesCont />
        </div>
        {/* <BottomNavigation /> */}
      </MainWrap>
    </>
  )
}

export default Main
