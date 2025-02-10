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
import BookMarkLabel from '../../ui/BookMarkLabel'
import { MainWrap, VisualWrap } from './style'

const Main = () => {
  return (
    <>
      <VisualWrap>
        <Intro />
      </VisualWrap>
      <MainWrap>
        <BookMarkLabel text="더빙" className="dubbing" />
        <BokjakCont />
        <ViewHistoryCont />
        <TopCont />
        <ThumbnailCont />
        <ThumbnailCont />
        <SoonCont />
        <FlipBackCont />
        <SeriesCont />
      </MainWrap>
    </>
  )
}

export default Main
