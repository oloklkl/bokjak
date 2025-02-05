import React from 'react';
import DetailPreview from './DetailPreview';
import EpisodeList from './EpisodeList';
import MoreLikeThisList from './MoreLikeThisList';
import { DetailContentWrap, DetailWrap } from './style';
import Dimmed from '../../ui/Dimmed';
import Description from './Description';

const Detail = () => {
    return (
        <>
            <DetailWrap className="detail">
                <DetailPreview />
                <DetailContentWrap>
                    <Description />
                    <EpisodeList />
                    <MoreLikeThisList />
                </DetailContentWrap>
            </DetailWrap>
            <Dimmed />
        </>
    );
};

export default Detail;
