import styled from 'styled-components'

export const MultiBanner = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }
`

export const BannerImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0) 54%
    );
    border-radius: 12px;
  }
  .bannerImg {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
`

export const BannerTit = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .bannerLogo {
    width: 300px;
    height: 157px;
    object-fit: contain;
  }

  span {
    color: white;
    font-size: 24px;
    line-height: 1.5;
  }
`
