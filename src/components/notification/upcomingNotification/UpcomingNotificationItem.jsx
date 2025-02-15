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

const UpcomingNotificationItem = () => {
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
                            src='https://github.com/oloklkl/bokjak-image/blob/main/images/main/flipback/flipcard1.png?raw=true'
                            alt=''
                        />
                    </UpcomingImageWrap>
                    <UpcomingInfoWrap>
                        <UpcomingActionWrap>
                            <h3>스파이더맨 : 파 프롬 홈</h3>
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
                    <p>
                        시빌 워 당시 토니 스타크에게 발탁되어 대단한 활약을 펼친 스파이더맨 피터 파커. 허세와 정의감으로
                        똘똘 뭉친 그는 세상을 위협하는 강력한 적 처벌에 맞서려 한다.
                    </p>
                </UpcomingDescription>
                <UpcomingDownIconWrap>
                    <BellSimpleRinging size={24} weight='fill' />
                </UpcomingDownIconWrap>
            </UpcomingContentWrap>
        </UpcomingNotificationItemWrap>
    );
};

export default UpcomingNotificationItem;
