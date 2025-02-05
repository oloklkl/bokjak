import React from 'react';
import DetailPreview from './DetailPreview';
import EpisodeList from './EpisodeList';
import MoreLikeThisList from './MoreLikeThisList';
import { DetailWrap } from './style';
import Dimmed from '../../ui/Dimmed';
import Description from './Description';

const Detail = () => {
    return (
        <>
            <DetailWrap className="detail">
                <DetailPreview />
                <div className="detail-inner">
                    <Description />
                    <EpisodeList />
                    <MoreLikeThisList />
                </div>
            </DetailWrap>
            <Dimmed />
        </>
    );
};

export default Detail;
