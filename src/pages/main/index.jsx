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
import AgeLabel from '../../ui/AgeLabel'
import BookMarkLabel from '../../ui/BookMarkLabel'
import { MainWrap, VisualWrap } from './style'

const Main = () => {
  return (
    <>
      <VisualWrap>
        <Intro />
      </VisualWrap>
      <MainWrap>
        <BookMarkLabel text="NEW" />
        <BookMarkLabel text="더빙" className="dubbing" />
        <BookMarkLabel text="NEW" className="detail" />
        <BookMarkLabel text="더빙" className="detailDub" />
        <AgeLabel text="ALL" />
        <AgeLabel text="ALL" className="detail" />
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
