import styled from 'styled-components'

const TopItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

const TopThumbCont = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: clamp(160px, 25vw, 340px);
`

const TopThumbnailBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(110px, 18vw, 234px);
  height: 100%;

  .imgBox {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    object-fit: cover;
  }
`


const ThumbnailCard = ({ content, ...props }) => {
    const bgurl = `https://image.tmdb.org/t/p/w500`;
    return (
        <>
            <TopItemWrap {...props}>
                <TopThumbCont>
                    <TopThumbnailBox>
                        <div className="imgBox">
                            <img src={`${bgurl}${content.backdrop_path}`} alt="" />
                        </div>
                    </TopThumbnailBox>
                </TopThumbCont>
            </TopItemWrap>
        </>
    );
};


export default ThumbnailCard
