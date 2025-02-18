import { FlipBackItemCont, ImageCont } from './style'

const FlipBackContItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const title = content.title

  // 화면 크기에 따라 보여줄 이미지 개수 설정
  const getImageCount = () => {
    const width = window.innerWidth

    if (width >= 1024) {
      return 5 // 데스크탑
    } else if (width >= 600) {
      return 4 // 태블릿
    } else {
      return 3 // 모바일
    }
  }

  const imageCount = getImageCount()
  const imageSlices = Array.from({ length: imageCount }, (_, index) => {
    return `${bgurl}${content.backdrop_path}` // 슬라이스된 이미지를 URL로 설정
  })

  return (
    <FlipBackItemCont {...props}>
      <ImageCont>
        {imageSlices.map((slice, index) => (
          <img key={index} src={slice} alt={`${title} slice ${index + 1}`} />
        ))}
      </ImageCont>
    </FlipBackItemCont>
  )
}

export default FlipBackContItem
