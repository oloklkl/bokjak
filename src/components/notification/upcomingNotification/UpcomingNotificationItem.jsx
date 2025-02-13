import { BellSimpleRinging } from '@phosphor-icons/react';
import AgeLabel from '../../../ui/AgeLabel';
import { UpcomingNotificationItemWrap } from '../style';
import styled from 'styled-components';
import { color, font } from '../../../styled/theme';
import { media } from '../../../styled/media';

const UpcomingContentWrap = styled.div`
    display: flex;
    align-items: center;

    h2 {
        font-size: ${font('title', 'lg')};
        width: 10%;
        margin-left: 10px;
    }
`;
const UpcomingImageWrap = styled.div`
    img {
        width: 130px;
        height: 160px;
    }
`;
const UpcomingInfoWrap = styled.div`
    margin-left: 40px;
    width: 17%;
    h3 {
        font-size: ${font('title', 'md')};
        margin-right: 5px;
    }
    em,
    span {
        font-size: ${font('detail', 'md')};
        color: ${color('gray', '30')};
    }
    span {
        margin-right: 4px;
    }
`;

const UpcomingActionWrap = styled.div`
    display: flex;
    align-items: center;
`;

const UpcomingDescription = styled.div`
    p {
        color: ${color('gray', '30')};
        width: 75%;
        margin-left: 50px;
    }
    ${media.tablet} {
        display: none;
    }
`;
const UpcomingIconWrap = styled.div`
    margin-right: 100px;
`;

const UpcomingNotificationItem = () => {
    return (
        <UpcomingNotificationItemWrap>
            <UpcomingContentWrap>
                <h2>2월1일</h2>
                <UpcomingImageWrap>
                    <img
                        src='https://github.com/oloklkl/bokjak-image/blob/main/images/main/flipback/flipcard1.png?raw=true'
                        alt=''
                    />
                </UpcomingImageWrap>
                <UpcomingInfoWrap>
                    <UpcomingActionWrap>
                        <h3>제목</h3>
                        <AgeLabel text='ALL' />
                    </UpcomingActionWrap>
                    <em>·</em>
                    <span>2017</span>
                    <em>·</em>
                    <span>액션</span>
                    <em>·</em>
                    <span>SF</span>
                    <em>·</em>
                    <span>해외영화</span>
                </UpcomingInfoWrap>
                <UpcomingDescription>
                    <p>
                        시빌 워 당시 토니 스타크에게 발탁되어 대단한 활약을 펼친 스파이더맨 피터 파커. 허세와 정의감으로
                        똘똘 뭉친 그는 세상을 위협하는 강력한 적 처벌에 맞서려 한다.
                    </p>
                </UpcomingDescription>
                <UpcomingIconWrap>
                    <BellSimpleRinging size={24} weight='fill' />
                </UpcomingIconWrap>
            </UpcomingContentWrap>
        </UpcomingNotificationItemWrap>
    );
};

export default UpcomingNotificationItem;
