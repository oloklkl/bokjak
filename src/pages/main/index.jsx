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
        <BokjakCont />
        <ViewHistoryCont />
        <TopCont />
        <ThumbnailCont />
        <ThumbnailCont />
        <SoonCont />
        <ThumbnailCont />
        <ThumbnailCont />
        <FlipBackCont />
        <ThumbnailCont />
        <ThumbnailCont />
        <SeriesCont />
        {/* <BottomNavigation /> */}
      </MainWrap>
    </>
  )
}

export default Main
