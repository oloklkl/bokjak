import { Link } from 'react-router-dom'
import { BarButton } from '../../ui'
import { AboutMemberShipWrap } from './style'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

function AboutMemberShip() {
  const ghostRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      ghostRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: ghostRef.current,
          start: 'top 100%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <>
      <AboutMemberShipWrap className="aboutMemberShipWrap">
        <div className="icon-floating">
          <img
            src="https://github.com/lse-7660/bokjak-image/blob/main/images/about/star.png?raw=true"
            alt="star"
            className="icon star"
          />
          <img
            src="https://github.com/lse-7660/bokjak-image/blob/main/images/about/flower.png?raw=true"
            alt="ghost"
            className="icon flower"
          />
          <img
            src="https://github.com/lse-7660/bokjak-image/blob/main/images/about/flower-sm.png?raw=true"
            alt="ghost"
            className="icon flower-sm"
          />
          <img
            ref={ghostRef}
            src="https://github.com/lse-7660/bokjak-image/blob/main/images/about/ghost.png?raw=true"
            alt="ghost"
            className="icon ghost"
          />
          <span className="icon ghost-text">우리 같이 복작하자!</span>
        </div>
        <div className="aboutMemberShip-cont">
          <div className="text-area">
            <h1>WE ARE BOKJAK</h1>
            <p className="subtitle">
              단순한 감상을 넘어 모두와 함께 소통하는 복작
            </p>
            <p className="desc">
              &apos; <span className="highlight">BOKJAK</span> &apos;은 단순한
              콘텐츠 제공을 넘어 그치지 않습니다.
              <br />
              개인 맞춤형 추천, 실시간 동시 감상 및 채팅 기능 그리고 다양하고
              깊이 있는 라이브러리까지!
              <br />
              혼자 볼 때도, 함께 볼 때도 최상의 시청 경험을 제공합니다.
            </p>
          </div>
          <div className="stats">
            <div className="stat">
              <h3>1,200편 이상의 영화</h3>
              <p>
                스릴 넘치는 블록버스터와 <br className="m-only" /> 독점작 포함
              </p>
            </div>
            <div className="line"></div>
            <div className="stat">
              <h3>
                20,000편 이상의 <br className="t-only" /> 에피소드
              </h3>
              <p>액션, 코미디, 드라마 등 다양한 장르</p>
            </div>
            <div className="line"></div>
            <div className="stat">
              <h3>신규 및 단독 콘텐츠</h3>
              <p>매주 업로드 되는 최신 콘텐츠</p>
            </div>
          </div>
          <Link to="/about/faq">
            <BarButton
              className="memberShip-goto"
              text="멤버십 구독하기"
              width="300px"
              height="60px"
            />
          </Link>
        </div>
      </AboutMemberShipWrap>
    </>
  )
}

export default AboutMemberShip
