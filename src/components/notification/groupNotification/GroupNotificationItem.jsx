import { BellSimpleRinging, Link } from '@phosphor-icons/react';
import { BarButton } from '../../../ui';
import { GroupNotificationItemWrap } from '../style';
import styled from 'styled-components';
import { color, font } from '../../../styled/theme';
import { media } from '../../../styled/media';

const GroupNotificationImage = styled.div`
    position: relative;
    width: 300px;
    height: 430px;

    ${media.tablet} {
        width: 200px;
        height: 300px;
    }
    ${media.mobile} {
        width: 180px;
        height: 270px;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00000070;
    }
`;

const GroupNotificationContent = styled.div`
    width: 300px;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
`;

const TextWrap = styled.div`
    h2 {
        font-size: ${font('title', 'md')};
        font-weight: 700;
        position: absolute;
        top: 62%;
        left: 20px;

        ${media.tablet} {
            font-size: ${font('body', 'sm')};
        }
        ${media.mobile} {
            font-size: ${font('body', 'xsm')};
        }
    }
    span {
        color: ${color('gray', '30')};
        font-size: ${font('body', 'md')};
        position: absolute;
        top: 70%;
        left: 140px;

        ${media.tablet} {
            font-size: ${font('body', 'xsm')};
        }
        ${media.mobile} {
            font-size: ${font('label', 'xsm')};
        }
    }
    span:nth-of-type(1) {
        position: absolute;
        top: 70%;
        left: 20px;
    }
`;

const IconWrap = styled.div`
    position: absolute;
    top: 5%;
    right: 25%;

    ${media.tablet} {
        right: 15%;
    }
    ${media.mobile} {
        right: 5%;
    }
`;

const ButtonWrap = styled.div`
    position: absolute;
    top: 78%;
    margin-top: auto;

    ${media.tablet} {
    }
    ${media.mobile} {
    }
`;

const GroupNotificationItem = () => {
    return (
        <GroupNotificationItemWrap>
            <GroupNotificationImage>
                <img
                    src='https://github.com/oloklkl/bokjak-image/blob/main/images/main/flipback/flipcard1.png?raw=true'
                    alt=''
                />
            </GroupNotificationImage>
            <GroupNotificationContent>
                <IconWrap>
                    <BellSimpleRinging size={24} weight='fill' />
                </IconWrap>
                <TextWrap>
                    <h2>콘텐츠 제목</h2>
                    <span>파티방 제목</span>
                    <span>13:30</span>
                </TextWrap>
                <ButtonWrap>
                    <BarButton icon={<Link />} text='공유' width='265px' height='42px' />
                </ButtonWrap>
            </GroupNotificationContent>
        </GroupNotificationItemWrap>
    );
};

export default GroupNotificationItem;
