import { Link } from 'react-router-dom'
import { DisplayWrap } from './style'
import { ArrowUpRight } from '@phosphor-icons/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import { BarButton, IconButton } from '../../../ui'

gsap.registerPlugin(ScrollTrigger)

function AboutDisplay() {
  const videoRef = useRef(null)
  const msBtnRef = useRef(null)

  useEffect(() => {
    let ctx

    const initGsap = () => {
      ctx = gsap.context(() => {
        gsap.set(videoRef.current, { transformOrigin: 'right center' })

        gsap.to(videoRef.current, {
          scaleX: 1.75,
          scaleY: 1.6,
          yPercent: 38,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 2,
          },
        })

        ScrollTrigger.create({
          trigger: videoRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          pinSpacing: true,
        })

        gsap.set(msBtnRef.current, { opacity: -40 })

        gsap.to(msBtnRef.current, {
          x: 0,
          opacity: 1,
          duration: 3,
          scrollTrigger: {
            trigger: videoRef.current,
            start: 'top bottom',
            end: '+=200%',
            scrub: 3,
          },
        })
      })
    }

    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    if (mediaQuery.matches) initGsap()

    return () => ctx?.revert() // Cleanup
  }, [])

  return (
    <>
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
            <span className="highlight">월 7,900원</span>으로 복작의 모든
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
            <video
              src="https://github.com/lse-7660/bokjak-image/blob/main/images/aboutVideo/about-video.mp4?raw=true"
              autoPlay
              muted
              loop
              alt="video"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          <Link href="/membership" to="/membership">
            <div className="msBtn" ref={msBtnRef}>
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
      <pinScroll></pinScroll>
    </>
  )
}

export default AboutDisplay
