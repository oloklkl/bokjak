import { FlipBackItemCont, ImageCont } from './style'

const FlipBackContItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const title = content.title

  return (
    <FlipBackItemCont {...props}>
      <ImageCont>
        {[
          content.backdrop_path,
          content.poster_path,
          content.backdrop_path,
          content.backdrop_path,
          content.backdrop_path,
        ].map((path, index) => (
          <img key={index} src={`${bgurl}${path}`} alt={title} />
        ))}
      </ImageCont>
    </FlipBackItemCont>
  )
}

export default FlipBackContItem
