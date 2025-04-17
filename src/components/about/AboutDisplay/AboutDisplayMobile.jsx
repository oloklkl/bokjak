import { Link } from 'react-router-dom'
import { BarButton, IconButton } from '../../../ui'
import { ArrowUpRight } from '@phosphor-icons/react'
import { DisplayWrap } from './style'
import { useSelector } from 'react-redux'

function AboutDisplayMobile() {
  const { authed } = useSelector((state) => state.authR)

  return (
    <DisplayWrap className="aboutDisplayWrap">
      <div className="text-area">
        <div className="text-area__headTit">
          <h2>
            언제 어디서나, <br /> 원하는 모든 콘텐츠를 <br /> 한곳에서
          </h2>
          <div className="bokjak-eyes">
            <IconButton
              className="bokjak-eyes__icon none"
              icon={
                <img src="https://raw.githubusercontent.com/lse-7660/bokjak-image/35fcf1d77c5dd2e6ce2fa78a1b1dddea1e18adbf/images/newAbout/bokjak-eyes.png" />
              }
              text="bokjak-eyes__icon"
            />
          </div>
        </div>
        <p>
          <span className="highlight">월 7,900원</span>으로 복작의 모든 콘텐츠를
          즐겨보세요!
        </p>
        <Link to={authed ? '/membership' : '/login'}>
          <BarButton
            className="login-goto"
            text={authed ? '멤버십 보러가기' : '로그인 하러가기'}
            width="300px"
            height="60px"
          />
        </Link>
      </div>
      <div className="aboutVideo-wrap">
        <div className="video-cont">
          <video
            src="https://github.com/lse-7660/bokjak-image/blob/main/images/aboutVideo/about-video.mp4?raw=true"
            autoPlay
            muted
            loop
            alt="video"
          />
        </div>

        <Link href="/membership" to="/membership">
          <div className="msBtn">
            <div className="ms-title">
              <span>BOKJAK</span>
              <span>MEMBERSHIP</span>
            </div>
            <div className="ms-goto">
              <IconButton
                className="ms-goto__icon none"
                icon={<ArrowUpRight size={32} weight="bold" />}
                text="ArrowUpRight"
              />
              <span>자세히 보기</span>
            </div>
          </div>
        </Link>
      </div>
    </DisplayWrap>
  )
}

export default AboutDisplayMobile
