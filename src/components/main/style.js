import styled from 'styled-components'
import { color, font } from '../../styled/theme'

export const MultiIntro = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 830px;
`
export const Slide = styled.div`
  width: 100%;
  .swiper {
    border-radius: 12px;
  }
`
export const IntroBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const BannerImg = styled.div`
  width: 100%;
  height: 830px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 830px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0) 54%
    );
    border-radius: 12px;
  }
  .bigImg {
    width: 100%;
    height: 830px;
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
  white-space: pre-line;

  .bannerLogo {
    width: 300px;
    height: 157px;
    object-fit: contain;
  }

  span {
    color: ${color('gray', '0')};
    font-size: ${font('title', 'lg')};
    line-height: 1.5;
  }
  .btn {
    color: ${color('gray', '0')};
    font-size: ${font('title', 'md')};
    font-weight: bold;
  }
`
