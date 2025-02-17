import { FlipBackItemCont, ImageCont } from './style'

const FlipBackContItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const title = content.title
  return (
    <FlipBackItemCont {...props}>
      <ImageCont>
        <img src={`${bgurl}${content.backdrop_path}`} alt={title} />
      </ImageCont>
    </FlipBackItemCont>
  )
}

export default FlipBackContItem
