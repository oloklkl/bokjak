import { Link } from 'react-router-dom'
import { DisplayWrap } from './style'

function AboutDisplay() {
  return (
    <>
      <DisplayWrap>
        <div className="text-area">
          <div className="headTit">
            <h2>
              언제 어디서나, <br /> 원하는 모든 콘텐츠를 <br /> 한곳에서
            </h2>
            <div className="bokjak-eyes">
              <img src="" alt="" />
            </div>
          </div>
          <p>월 5,500원으로 복작의 모든 콘텐츠를 즐겨보세요!</p>
          <button className="login-button">로그인 하러가기</button>
        </div>
        <div className="display-video">
          <video src="" alt="" />
          <div className="msBtn">
            <div className="ms-title">
              <span>BOKJAK</span>
              <span>MEMBERSHIP</span>
            </div>
            <Link href="#">자세히 보기</Link>
          </div>
        </div>
      </DisplayWrap>
    </>
  )
}

export default AboutDisplay
