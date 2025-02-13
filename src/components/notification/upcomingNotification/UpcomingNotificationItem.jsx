import { BellSimpleRinging } from '@phosphor-icons/react';
import AgeLabel from '../../../ui/AgeLabel';
import { UpcomingNotificationItemWrap } from '../style';
import styled from 'styled-components';
import { color, font } from '../../../styled/theme';
import { media } from '../../../styled/media';

const UpcomingContentWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.mobile} {
    }
`;

const HeaderTitle = styled.div`
    width: 13%;

    ${media.tablet} {
        width: 40%;
    }
    ${media.mobile} {
        width: 80%;
    }

    h2 {
        font-size: ${font('title', 'lg')};
        margin-left: 10px;

        ${media.tablet} {
            font-size: ${font('title', 'lg')};
        }
        ${media.mobile} {
            font-size: ${font('title', 'md')};
        }
    }
`;

const UpcomingImageWrap = styled.div`
    img {
        width: 130px;
        height: 160px;

        ${media.tablet} {
            width: 100px;
            height: 140px;
        }
        ${media.mobile} {
            width: 90px;
            height: 115px;
        }
    }
`;

const UpcomingInfoWrap = styled.div`
    margin-left: 40px;
    width: 17%;

    ${media.tablet} {
        width: 25%;
    }
    ${media.mobile} {
        width: 80%;
    }

    h3 {
        font-size: ${font('title', 'md')};
        margin-right: 5px;

        ${media.tablet} {
            font-size: ${font('title', 'lg')};
        }
        ${media.mobile} {
            font-size: ${font('body', 'sm')};
        }
    }
    em,
    span {
        font-size: ${font('detail', 'md')};
        color: ${color('gray', '30')};

        ${media.tablet} {
            font-size: ${font('detail', 'md')};
        }
        ${media.mobile} {
            font-size: ${font('detail', 'sm')};
        }
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
    width: 80%;

    p {
        color: ${color('gray', '30')};
        margin-left: 50px;
    }

    ${media.tablet} {
        display: none;
    }
`;
const UpcomingIconWrap = styled.div`
    width: 20%;
    margin-left: 100px;
    cursor: pointer;

    ${media.tablet} {
        margin-right: 50px;
    }
    ${media.mobile} {
        margin-left: 10px;
        margin-right: 0;
    }
`;

const UpcomingNotificationItem = () => {
    return (
        <UpcomingNotificationItemWrap>
            <UpcomingContentWrap>
                <HeaderTitle>
                    <h2>2월1일</h2>
                </HeaderTitle>
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
