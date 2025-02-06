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
      <VisualWrap>{/* <Intro /> */}</VisualWrap>
      <MainWrap>
        <BokjakCont />
        <ViewHistoryCont />
        <TopCont />
        <ThumbnailCont />
        <SoonCont />
        <FlipBackCont />
        <SeriesCont />
      </MainWrap>
    </>
  )
}

export default Main
