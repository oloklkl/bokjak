import BottomNavigation from '../../common/bottomnavigation'
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
      <BokjakModal />
      <VisualWrap>{/* <Intro /> */}</VisualWrap>
      <MainWrap>
        {/* <BokjakCont />
        <ViewHistoryCont />
        <TopCont />
        <ThumbnailCont />
        <SoonCont />
        <FlipBackCont />
        <SeriesCont /> */}
        {/* <BottomNavigation /> */}
      </MainWrap>
    </>
  )
}

export default Main
