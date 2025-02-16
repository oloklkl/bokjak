import { TopItemCont, TopNumberImg, TopThumbnailImg } from './style'

const TopContItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const title = content.title
  return (
    <TopItemCont {...props}>
      <TopNumberImg>
        <img
          src="https://raw.githubusercontent.com/lse-7660/bokjak-image/c9ff4c8cc09bdda334eb731251f0ec9a55642779/images/main/top/numberImg/pc/pc_number2.svg"
          alt=""
        />
      </TopNumberImg>
      <TopThumbnailImg>
        <img src={`${bgurl}${content.poster_path}`} alt={title} />
      </TopThumbnailImg>
    </TopItemCont>
  )
}

export default TopContItem
