import { Link } from 'react-router-dom'
import { DisplayWrap } from './style'
import { BarButton, IconButton } from '../../ui'
import { ArrowUpRight } from '@phosphor-icons/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function AboutDisplay() {
  const videoRef = useRef(null)
  const msBtnRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(videoRef.current, { transformOrigin: 'right center' })

      gsap.to(videoRef.current, {
        scaleX: 1.75,
        scaleY: 1.4,
        y: '30%',
        duration: 2,
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
          pin: true,
          pinSpacing: false,
        },
      })

      gsap.set(msBtnRef.current, { opacity: -30 })

      gsap.to(msBtnRef.current, {
        x: 0,
        opacity: 13,
        duration: 1,
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <DisplayWrap>
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
            <span className="highlight">월 5,500원</span>으로 복작의 모든
            콘텐츠를 즐겨보세요!
          </p>
          <BarButton
            className="login-goto"
            text="로그인 하러가기"
            width="300px"
            height="60px"
          />
        </div>
        <div className="aboutVideo-wrap" ref={videoRef}>
          <div className="video-cont">
            <video src="" alt="" />
          </div>
          <Link href="#">
            <div className="msBtn" ref={msBtnRef}>
              <div className="ms-title">
                <span>BOKJAK</span>
                <span>MEMBERSHIP</span>
              </div>
              <div className="ms-goto">
                <IconButton
                  className="ms-goto__icon none"
                  icon={<ArrowUpRight size={24} />}
                  text="ArrowUpRight"
                />
                <span>자세히 보기</span>
              </div>
            </div>
          </Link>
        </div>
      </DisplayWrap>
    </>
  )
}

export default AboutDisplay
