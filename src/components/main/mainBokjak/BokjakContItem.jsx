import BokjakModal from './BokjakModal'
import { BokjakItemCont, ImgCont, TextCont } from './style'

const BokjakContItem = ({ content, ...props }) => {
  return (
    <BokjakItemCont {...props}>
      <ImgCont>
        <img
          src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
          alt=""
        />
      </ImgCont>
      <TextCont>
        <h3>title</h3>
        <h4>desc</h4>
      </TextCont>
    </BokjakItemCont>
  )
}

export default BokjakContItem
