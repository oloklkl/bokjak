import { AboutMemberShipWrap } from './style'

function AboutMemberShip() {
  return (
    <>
      <AboutMemberShipWrap>
        <div className="AboutMemberShip-cont">
          <div className="text-area">
            <h1>
              WE ARE <span className="highlight">BOKJAK</span>
            </h1>
            <p className="subtitle">
              단순한 감상을 넘어 모두와 함께 소통하는 복작
            </p>
            <p className="desc">
              <span className="highlight">BOKJAK</span>은 단순한 콘텐츠 제공을
              넘어 그치지 않습니다.
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
              <p>소니 픽쳐스, 유니버설 픽쳐스 독점 제공</p>
            </div>
            <div className="stat">
              <h3>20,000편 이상의 에피소드</h3>
              <p>넷플, 쿠팡, 티빙 등 다양한 라인업</p>
            </div>
            <div className="stat">
              <h3>신규 및 단독 콘텐츠</h3>
              <p>북작 오리지널 콘텐츠 독점 공개</p>
            </div>
          </div>
          <button className="join-button">멤버십 가입하기</button>
        </div>
      </AboutMemberShipWrap>
    </>
  )
}

export default AboutMemberShip
