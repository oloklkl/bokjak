// Detail.jsx

import DetailPreview from './DetailPreview';
import EpisodeList from './EpisodeList';
import MoreLikeThisList from './MoreLikeThisList';
import { DetailContentWrap, DetailWindow, DetailWrap } from './style';
import Dimmed from '../../ui/Dimmed';
import Description from './Description';
import { useDispatch, useSelector } from 'react-redux';
import BokjakUrlModal from './BokjakUrlModal';
import CreateRoomModal from './CreateRoomModal';
import { detailActions } from '../../store/modules/detailSlice';
import RoomCreatedModal from './RoomCreatedModal';
import { useNavigate, useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const Detail = () => {
    const { type } = useParams();
    const { isUrlModalOpen, isCreateOpen, isRoomCreated } = useSelector((state) => state.detailR);
    const { currentContent } = useSelector((state) => state.detailR);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bgurl = `https://image.tmdb.org/t/p/w500`;

    const goPrevPage = () => {
        navigate(-1);
        dispatch(detailActions.clearCurrentData());
    };

    if (!currentContent) return <div>Loading...</div>;
    return (
        <DetailWindow className="detail-window">
            <DetailWrap className="detail">
                <DetailPreview />

                <DetailContentWrap className="detail-content">
                    <Description />
                    {type === 'tv' && <EpisodeList />}
                    <MoreLikeThisList />
                </DetailContentWrap>
            </DetailWrap>
            <Dimmed onClick={goPrevPage} zindex={10} className="dimmed-active" />
            <Dimmed
                onClick={() => dispatch(detailActions.closeAllModal())}
                zindex={150}
                className={`${isUrlModalOpen ? 'dimmed-active' : ''}`}
            />
            {isUrlModalOpen && <BokjakUrlModal />}
            {isCreateOpen && <CreateRoomModal />}
            {isRoomCreated && <RoomCreatedModal />}
        </DetailWindow>
    );
};

export default Detail;
