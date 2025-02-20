import { BokjakItemCont, ImgCont, TextCont } from './style'

const BokjakContItem = ({ content, ...props }) => {
  // 복작 데이터에서 타이틀과 시간을 가져오기
  const title = content.title
  const bokjakTitle = content.bokjak_title
  const people = content.expected_participants
  const logoUrl = content.logoImage
    ? `https://image.tmdb.org/t/p/original${content.logoImage}`
    : null

  return (
    <BokjakItemCont {...props}>
      <ImgCont>
        <img className="logoImg" src={logoUrl} alt={title} />
      </ImgCont>
      <TextCont>
        <h3>{bokjakTitle}</h3>
        <h4>{people}명 참여 예정</h4>
      </TextCont>
    </BokjakItemCont>
  )
}

export default BokjakContItem
