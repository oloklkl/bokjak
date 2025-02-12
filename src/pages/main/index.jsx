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
      <VisualWrap>
        <Intro />
      </VisualWrap>
      {/* <div className="inner"> */}
      {/* <BokjakCont /> */}
      {/* <ViewHistoryCont /> */}
      <TopCont />
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
