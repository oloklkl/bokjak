import DetailPreview from './DetailPreview';
import EpisodeList from './EpisodeList';
import MoreLikeThisList from './MoreLikeThisList';
import { DetailContentWrap, DetailWrap } from './style';
import Dimmed from '../../ui/Dimmed';
import Description from './Description';
import { useSelector } from 'react-redux';
import BokjakUrlModal from './BokjakUrlModal';
import CreateRoomModal from './CreateRoomModal';

const Detail = () => {
    const { isUrlModalOpen, isCreateOpen } = useSelector((state) => state.detailR);
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
            <Dimmed class="dimmed-active" />
            <Dimmed zindex={150} class={isUrlModalOpen && 'dimmed-active'} />
            {isUrlModalOpen && <BokjakUrlModal />}
            {isCreateOpen && <CreateRoomModal />}
        </>
    );
};

export default Detail;
