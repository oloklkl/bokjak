import { FlipBackItemCont, ImageCont } from './style'

const FlipBackContItem = ({ content, ...props }) => {
  const imageUrl = content.imageUrl || ''

  return (
    <FlipBackItemCont {...props}>
      <ImageCont>
        <img src={imageUrl} alt="title" />
      </ImageCont>
      {/* {flipped && (
        <div className="flip-card-back">
          <p>여기에는 뒷면 내용이 들어갑니다.</p>
        </div>
      )} */}
    </FlipBackItemCont>
  )
}

export default FlipBackContItem
