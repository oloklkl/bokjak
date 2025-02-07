import DetailPreview from './DetailPreview';
import EpisodeList from './EpisodeList';
import MoreLikeThisList from './MoreLikeThisList';
import { DetailContentWrap, DetailWrap } from './style';
import Dimmed from '../../ui/Dimmed';
import Description from './Description';
import { useDispatch, useSelector } from 'react-redux';
import BokjakUrlModal from './BokjakUrlModal';
import CreateRoomModal from './CreateRoomModal';
import { detailActions } from '../../store/modules/detailSlice';
import RoomCreatedModal from './RoomCreatedModal';

const Detail = () => {
    const { isUrlModalOpen, isCreateOpen, isRoomCreated } = useSelector((state) => state.detailR);
    const dispatch = useDispatch();
    return (
        <>
            <DetailWrap className="detail">
                <DetailPreview />
                <DetailContentWrap className="detail-content">
                    <Description />
                    <EpisodeList />
                    <MoreLikeThisList />
                </DetailContentWrap>
            </DetailWrap>
            <Dimmed zindex={10} className="dimmed-active" />
            <Dimmed
                onClick={() => dispatch(detailActions.closeAllModal())}
                zindex={150}
                className={`${isUrlModalOpen ? 'dimmed-active' : ''}`}
            />
            {isUrlModalOpen && <BokjakUrlModal />}
            {isCreateOpen && <CreateRoomModal />}
            {isRoomCreated && <RoomCreatedModal />}
        </>
    );
};

export default Detail;
