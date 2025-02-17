import { BookmarkSimple, Heart, X } from '@phosphor-icons/react';
import { BarButton, IconButton } from '../../ui';
import { DetailPreviewWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { detailActions } from '../../store/modules/detailSlice';
import { Link, useNavigate } from 'react-router-dom';

const DetailPreview = () => {
    const { currentContent } = useSelector((state) => state.detailR);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goPrevPage = () => {
        navigate(-1);
        dispatch(detailActions.clearCurrentData());
    };

    const bgurl = `https://image.tmdb.org/t/p/w500`;

    return (
        <DetailPreviewWrap className="detail-preview">
            {/* <div className="detail-preview-intro-gradient"></div> */}
            {currentContent.videos.results[0] ? (
                <iframe
                    id="player"
                    type="text/html"
                    width="640"
                    height="390"
                    src={`http://www.youtube.com/embed/${currentContent.videos.results[0].key}?autoplay=1&mute=1&controls=0&enablejsapi=1&loop=1&playlist=${currentContent.videos.results[0].key}`}
                    allow="autoplay"
                ></iframe>
            ) : (
                <img src={`${bgurl}${currentContent.backdrop_path}`} alt="" className="detail-preview-introimg" />
            )}

            <div className="detailpreview-buttons-wrap">
                <div className="detailpreview-wrap">
                    <IconButton onClick={goPrevPage} className="b30" icon={<X />} />
                    <div className="detailpreview-util-wrap">
                        <BarButton text="재생하기" width="240px" height="42px">
                            <Link to="/video" />
                        </BarButton>
                        <IconButton className="" icon={<Heart />} text="좋아요" />
                        <IconButton className="" icon={<BookmarkSimple />} text="북마크" />
                        <IconButton
                            onClick={() => dispatch(detailActions.openUrlModal())}
                            className=""
                            icon="https://raw.githubusercontent.com/lse-7660/bokjak-image/f7683cb4e88d31d422118d70c20dcdccb0ad102e/images/icon/bokjak-icon.svg"
                            text="모여보기"
                        />
                    </div>
                </div>
            </div>
        </DetailPreviewWrap>
    );
};

export default DetailPreview;
