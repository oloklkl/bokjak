import { BellSimpleRinging } from '@phosphor-icons/react';
import AgeLabel from '../../../ui/AgeLabel';
import {
    FlexWrap,
    HeaderTitle,
    UpcomingActionWrap,
    UpcomingContentWrap,
    UpcomingDescription,
    UpcomingDownIconWrap,
    UpcomingHeaderWrap,
    UpcomingImageWrap,
    UpcomingInfoWrap,
    UpcomingNotificationItemWrap,
    UpcomingUpIconWrap,
} from './style';

const UpcomingNotificationItem = ({ content }) => {
    return (
        <UpcomingNotificationItemWrap>
            <UpcomingContentWrap>
                <UpcomingHeaderWrap>
                    <HeaderTitle>
                        <h2>2월1일</h2>
                    </HeaderTitle>
                    <UpcomingUpIconWrap>
                        <BellSimpleRinging size={24} weight='fill' />
                    </UpcomingUpIconWrap>
                </UpcomingHeaderWrap>
                <FlexWrap>
                    <UpcomingImageWrap>
                        <img
                            src={
                                content.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
                                    : 'https://via.placeholder.com/300x430'
                            }
                            alt={content.title || '영화 포스터'}
                        />
                    </UpcomingImageWrap>
                    <UpcomingInfoWrap>
                        <UpcomingActionWrap>
                            <h3>{content.title}</h3>
                            <AgeLabel text='ALL' />
                        </UpcomingActionWrap>
                        <span>2017</span>
                        <em>·</em>
                        <span>액션</span>
                        <em>·</em>
                        <span>SF</span>
                        <em>·</em>
                        <span>해외영화</span>
                    </UpcomingInfoWrap>
                </FlexWrap>
                <UpcomingDescription>
                    <p>{content.overview || '상세 내용 없음'}</p>
                </UpcomingDescription>
                <UpcomingDownIconWrap>
                    <BellSimpleRinging size={24} weight='fill' />
                </UpcomingDownIconWrap>
            </UpcomingContentWrap>
        </UpcomingNotificationItemWrap>
    );
};

export default UpcomingNotificationItem;
