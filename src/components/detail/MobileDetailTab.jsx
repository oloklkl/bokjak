import styled from 'styled-components';
import { color } from '../../styled/theme';
import { useState } from 'react';
import EpisodeList from './EpisodeList';
import MoreLikeThisList from './MoreLikeThisList';

const MobileDetailTabWrap = styled.div`
    &.mobile-detail-tab {
        display: flex;
        justify-content: space-around;
    }
    div {
        &.detail-tab-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 40px;
            color: ${color('gray', '50')};

            &.detail-tab-item-active {
                color: ${color('gray', '0')};
                font-weight: 600;
                border-bottom: 2px solid ${color('gray', '0')};
            }
        }
    }
`;

const MobileDetailTab = () => {
    const [isTabActive, setIsTabActive] = useState(true);
    const episodeTab = () => {
        setIsTabActive(true);
    };
    const moreLikeThisTab = () => {
        setIsTabActive(false);
    };
    console.log(isTabActive);
    return (
        <div className="mobile-detail-tab-wrap">
            <MobileDetailTabWrap className="mobile-detail-tab">
                <div onClick={episodeTab} className={`detail-tab-item ${isTabActive && 'detail-tab-item-active'}`}>
                    <span>에피소드</span>
                </div>
                <div
                    onClick={moreLikeThisTab}
                    className={`detail-tab-item ${!isTabActive && 'detail-tab-item-active'}`}
                >
                    <span>관련 콘텐츠</span>
                </div>
            </MobileDetailTabWrap>
            {isTabActive ? <EpisodeList /> : <MoreLikeThisList />}
        </div>
    );
};

export default MobileDetailTab;
