import { BarButton, IconButton } from '../../../ui'
import { BellSimple, Play } from '@phosphor-icons/react'
import AgeLabel from '../../../ui/AgeLabel'
import {
  ButtonGroup,
  ImageCont,
  LabelWrapper,
  SooncardCont,
  SoonItemCont,
  TextCont,
} from './style'
import genres from '../../../assets/api/genreData'

const SoonContItem = ({ content, ...props }) => {
  const bgurl = `https://image.tmdb.org/t/p/original`
  const logoUrl = content.logoImage
    ? `https://image.tmdb.org/t/p/original${content.logoImage}`
    : null
  const desc = content.overview
  const title = content.title
  const date = content.release_date
  const year = date.split('-')[0]
  const genreNames =
    content.genre_ids
      ?.map((id) => {
        const genre = genres.find((genre) => genre.id === id) // 장르 데이터에서 id로 매칭
        return genre ? genre.name : null // 장르 이름 반환, 없으면 null
      })
      .filter(Boolean) // null, undefined 제거
      .join(' · ') || '장르 없음'

  return (
    <SoonItemCont {...props}>
      <h2 className="soonDate">3월 6일 공개</h2>
      <SooncardCont>
        <ImageCont>
          <img src={`${bgurl}${content.backdrop_path}`} alt={title} />
          <div className="icon">
            <IconButton
              className="border"
              icon={<Play size={24} weight="fill" />}
              text="Play"
            />
          </div>
        </ImageCont>
        <TextCont>
          <div className="soonLogo">
            <img src={logoUrl} alt={title} />
            <IconButton
              className="soonIconTop"
              icon={<BellSimple size={24} />}
              text="BellSimple"
            />
          </div>
          <div className="textarea">
            <h2>3월 6일 공개</h2>
            <LabelWrapper>
              <AgeLabel text="ALL" />
              <em>·</em>
              <span>{year}</span>
              <em>·</em>
              <span>{genreNames}</span>
            </LabelWrapper>
            <p>{desc}</p>
          </div>
          <ButtonGroup>
            <BarButton text="미리보기" width="366px" height="42px" />
            <IconButton icon={<BellSimple size={24} />} text="BellSimple" />
          </ButtonGroup>
        </TextCont>
      </SooncardCont>
    </SoonItemCont>
  )
}

export default SoonContItem
