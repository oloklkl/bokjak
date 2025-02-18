import { BellSimple, Link, X } from '@phosphor-icons/react'
import { BarButton, IconButton } from '../../../ui'
import Dimmed from '../../../ui/Dimmed'
import BookMarkLabel from '../../../ui/BookMarkLabel'
import { BokjakDetailCont, BokjakModalCont } from './style'

const BokjakModal = ({ content, closeModal }) => {
  const title = content.title
  return (
    <Dimmed>
      <BokjakModalCont>
        <BokjakDetailCont>
          <div className="detailTop">
            <div className="titleTxt">
              <h2>주술회전</h2>
              <div className="subTitle">
                <h3>파티방 제목</h3>
                <em>|</em>
                <h3>2명 참여 예정</h3>
              </div>
            </div>
            <IconButton
              className="none"
              icon={<X size={24} />}
              text="close"
              onClick={closeModal}
            />
          </div>
          <div className="detailMid">
            <div className="imgBox">
              <img
                src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
                alt={title}
              />
            </div>
            <div className="textarea">
              <BookMarkLabel text="더빙" className="modal" />
              <h2>애니메이션 : 주술회전 2기</h2>
              <div className="category">
                <span>애니</span>
                <em>·</em>
                <span>액션</span>
                <em>·</em>
                <span>공포</span>
              </div>
              <span className="enterDate">2월 5일 23:00 입장</span>
            </div>
          </div>
          <div className="detailBottom">
            <BarButton
              className="share modalBtn"
              icon={<Link size={24} />}
              text="공유"
              width="110px"
              height="42px"
            />
            <BarButton
              className="modalBtn"
              icon={<BellSimple size={24} />}
              text="알림받기"
              width="230px"
              height="42px"
            />
          </div>
        </BokjakDetailCont>
      </BokjakModalCont>
    </Dimmed>
  )
}

export default BokjakModal
