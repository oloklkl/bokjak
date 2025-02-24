import {
    BookmarkSimple,
    Heart,
    Play,
    X,
} from '@phosphor-icons/react';
import { BarButton, IconButton } from '../../ui';
import { DetailPreviewWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { detailActions } from '../../store/modules/detailSlice';
import { Link, useNavigate } from 'react-router-dom';
import UtilButtonWrap from './UtilButtonWrap';

const DetailPreview = () => {
    const { currentContent } = useSelector(
        (state) => state.detailR
    );
    const { width } = useSelector((state) => state.windowR);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goPrevPage = () => {
        navigate(-1);
        dispatch(detailActions.clearCurrentData());
    };

    const bgurl = `https://image.tmdb.org/t/p/w500`;

    return (
        <DetailPreviewWrap className="detail-preview">
            {currentContent.videos.results[0] ? (
                <iframe
                    id="player"
                    type="text/html"
                    width="640"
                    height="390"
                    src={
                        currentContent.videos.results[0] &&
                        `http://www.youtube.com/embed/${currentContent.videos.results[0].key}?autoplay=1&mute=1&controls=0&enablejsapi=1&loop=1&playlist=${currentContent.videos.results[0].key}`
                    }
                    allow="autoplay"
                ></iframe>
            ) : (
                <img
                    src={`${bgurl}${currentContent.backdrop_path}`}
                    alt=""
                    className="detail-preview-introimg"
                />
            )}

            <div className="detailpreview-buttons-wrap">
                {width > 600 ? (
                    <div className="detailpreview-wrap">
                        <IconButton
                            onClick={goPrevPage}
                            className="b30"
                            icon={<X />}
                        />
                        <UtilButtonWrap />
                    </div>
                ) : (
                    <div className="detailpreview-wrap">
                        <Link to="/video">
                            <Play size={44} weight="fill" />
                        </Link>
                    </div>
                )}
            </div>
        </DetailPreviewWrap>
    );
};

export default DetailPreview;
