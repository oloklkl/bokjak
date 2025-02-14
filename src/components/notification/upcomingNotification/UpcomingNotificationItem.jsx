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
        color: ${color('gray', '20')};
        font-size: ${font('title', 'xlg')};
        font-weight: bold;
        width: 100px;

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
        border-radius: 7px;

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
        color: ${color('gray', '20')};

        ${media.desktop} {
            margin-right: 5px;
        }

        ${media.tablet} {
            font-size: ${font('body', 'md')};
        }
        ${media.mobile} {
            margin-right: 10px;
            font-size: ${font('body', 'md')};
        }
    }
    em,
    span {
        font-size: ${font('detail', 'lg')};
        color: ${color('gray', '40')};

        ${media.tablet} {
            font-size: ${font('detail', 'md')};
        }
        ${media.mobile} {
            font-size: ${font('detail', 'md')};
        }
    }
    em {
        margin: 0 5px;
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
        color: ${color('gray', '40')};
        font-size: ${font('title', 'md')};

        ${media.tablet} {
            font-size: ${font('body', 'md')};
            margin-top: 20px;
        }
        ${media.mobile} {
            font-size: ${font('body', 'xsm')};
        }
    }
`;

const UpcomingUpIconWrap = styled.div`
    cursor: pointer;

    ${media.desktop} {
        display: none;
    }
    ${media.tablet} {
        display: flex;
    }
`;

const UpcomingDownIconWrap = styled.div`
    cursor: pointer;
    width: 60px;

    ${media.tablet} {
        display: none;
    }
`;

const UpcomingHeaderWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
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
