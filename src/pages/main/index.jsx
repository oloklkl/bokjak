import styled from 'styled-components'
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
import { VisualWrap } from './style'

const Main = () => {
  return (
    <>
      <div className="inner">
        <VisualWrap>
          <Intro />
        </VisualWrap>
        <BokjakCont />
        {/* <ViewHistoryCont /> */}
      </div>
      {/* <TopCont /> */}
      <div className="inner">{/* <ThumbnailCont /> */}</div>
      {/* <SoonCont /> */}
      <div className="inner">
        {/* <FlipBackCont /> */}
        {/* <SeriesCont /> */}
      </div>
      {/* <BottomNavigation /> */}
    </>
  )
}

export default Main
