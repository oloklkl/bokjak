import { SeriesCardCont, SeriesItemCont } from './style'

const SeriesContItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const title = content.name

  return (
    <SeriesItemCont {...props}>
      <h2>{title}</h2>
      <SeriesCardCont>
        <img src={`${bgurl}${content.backdrop_path}`} alt={title} />
      </SeriesCardCont>
    </SeriesItemCont>
  )
}

export default SeriesContItem
