import { TopItemCont, TopNumberImg, TopThumbnailImg } from './style'

const TopContItem = () => {
  return (
    <TopItemCont>
      {/* <div className="topItemImg"> */}
      <TopNumberImg>
        <img
          src="https://raw.githubusercontent.com/lse-7660/bokjak-image/c9ff4c8cc09bdda334eb731251f0ec9a55642779/images/main/top/numberImg/pc/pc_number2.svg"
          alt=""
        />
      </TopNumberImg>
      <TopThumbnailImg>
        <img
          src="https://github.com/lse-7660/bokjak-image/blob/main/images/main/intro/introSlide1.png?raw=true"
          alt=""
        />
      </TopThumbnailImg>
      {/* </div> */}
    </TopItemCont>
  )
}

export default TopContItem
