import { BellSimpleRinging } from '@phosphor-icons/react';
import AgeLabel from '../../../ui/AgeLabel';
import { UpcomingNotificationItemWrap } from '../style';
import styled from 'styled-components';
import { color, font } from '../../../styled/theme';
import { media } from '../../../styled/media';

const UpcomingContentWrap = styled.div`
    ${media.desktop} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }

    ${media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const HeaderTitle = styled.div`
    h2 {
        font-size: ${font('title', 'lg')};
        width: 70px;

        ${media.tablet} {
            font-size: ${font('title', 'lg')};
            margin-bottom: 10px;
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
    ${media.desktop} {
        margin-top: 15px;
    }
    ${media.tablet} {
        margin-left: 30px;
        margin-bottom: 15px;
    }
    ${media.mobile} {
    }

    h3 {
        font-size: ${font('title', 'md')};

        ${media.desktop} {
            margin-right: 5px;
        }

        ${media.tablet} {
            font-size: ${font('body', 'md')};
        }
        ${media.mobile} {
            margin-right: 10px;
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
`;

const UpcomingActionWrap = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    margin-bottom: 10px;

    ${media.tablet} {
    }
`;

const UpcomingDescription = styled.div`
    p {
        color: ${color('gray', '30')};
        font-size: ${font('title', 'md')};

        ${media.tablet} {
            font-size: ${font('body', 'md')};
            margin-top: 20px;
        }
    }

    ${media.mobile} {
        display: none;
    }
`;
const UpcomingIconWrap = styled.div`
    cursor: pointer;
    width: 60px;

    ${media.tablet} {
        width: 40px;
        transform: translateX(400px) translateY(-213px);
    }
    ${media.mobile} {
        transform: translateX(400px) translateY(-75px);
    }
`;

const FlexWrap = styled.div`
    ${media.desktop} {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    ${media.tablet} {
        display: flex;
        align-items: center;
    }
`;

const UpcomingNotificationItem = () => {
    return (
        <UpcomingNotificationItemWrap>
            <UpcomingContentWrap>
                <HeaderTitle>
                    <h2>2월1일</h2>
                </HeaderTitle>
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
                        <em>·</em>
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
                <UpcomingIconWrap>
                    <BellSimpleRinging size={24} weight='fill' />
                </UpcomingIconWrap>
            </UpcomingContentWrap>
        </UpcomingNotificationItemWrap>
    );
};

export default UpcomingNotificationItem;
