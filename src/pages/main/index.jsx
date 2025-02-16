import BottomNavigation from '../../common/bottomnavigation'
import ThumbnailCardHover from '../../common/main/card/thumbnail/ThumbnailCardHover'
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
import BokjakModal from '../../components/main/mainBokjak/BokjakModal'
import { MainWrap, VisualWrap } from './style'

const Main = () => {
  return (
    <>
      {/* <BokjakModal /> */}
      <ThumbnailCardHover />
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
