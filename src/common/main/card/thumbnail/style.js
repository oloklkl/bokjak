import styled from 'styled-components'

export const TopItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

export const TopThumbCont = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  aspect-ratio: 2 / 3;
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
    object-position: center center;
  }
`
