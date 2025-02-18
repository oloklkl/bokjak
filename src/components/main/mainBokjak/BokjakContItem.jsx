import { BokjakItemCont, ImgCont, TextCont } from './style'

const BokjakContItem = ({ content, bokjakData, ...props }) => {
  const logoUrl = content.logoImage
    ? `https://image.tmdb.org/t/p/original${content.logoImage}`
    : null
  const date = bokjakData ? bokjakData.bokjak_time : '입장시간 없음'
  const title = bokjakData ? bokjakData.bokjak_title : '제목 없음'
  return (
    <BokjakItemCont {...props}>
      <ImgCont>
        <img className="logoImg" src={logoUrl} alt={title} />
      </ImgCont>
      <TextCont>
        <h3>{title}</h3>
        <h4>{date}</h4>
      </TextCont>
    </BokjakItemCont>
  )
}

export default BokjakContItem
