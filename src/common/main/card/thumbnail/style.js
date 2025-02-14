import styled from 'styled-components'

export const TopItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

export const TopThumbCont = styled.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  width: clamp(110px, 18vw, 234px);
  height: clamp(160px, 25vw, 340px);
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
  }
`
