import { BokjakItemCont, ImgCont, TextCont } from './style'

const BokjakContItem = ({ content, ...props }) => {
  const logoUrl = content.logoImage
    ? `https://image.tmdb.org/t/p/original${content.logoImage}`
    : null
  const date = content.release_date
  const title = content.title
  return (
    <BokjakItemCont {...props}>
      <ImgCont>
        <img className='logoImg' src={logoUrl} alt={title} />
      </ImgCont>
      <TextCont>
        <h3>{title}</h3>
        <h4>{date}</h4>
      </TextCont>
    </BokjakItemCont>
  )
}

export default BokjakContItem
