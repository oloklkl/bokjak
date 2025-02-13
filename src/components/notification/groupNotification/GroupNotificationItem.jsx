import { BellSimpleRinging, Link } from '@phosphor-icons/react';
import { BarButton } from '../../../ui';
import { GroupNotificationItemWrap } from '../style';
import styled from 'styled-components';
import { color, font } from '../../../styled/theme';

const GroupNotificationImage = styled.div`
    position: relative;
    width: 300px;
    height: 430px;

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

    h2 {
        font-size: ${font('title', 'md')};
        font-weight: 700;
        position: absolute;
        top: 62%;
        left: 20px;
    }
    span {
        color: ${color('gray', '30')};
        font-size: ${font('body', 'md')};
        position: absolute;
        top: 70%;
        left: 140px;
    }
    span:nth-of-type(1) {
        position: absolute;
        top: 70%;
        left: 20px;
    }
`;

const TextWrap = styled.div``;

const IconWrap = styled.div`
    position: absolute;
    top: 20px;
    right: -45px;
`;

const ButtonWrap = styled.div`
    position: absolute;
    top: 78%;
    margin-top: auto;
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
                    <span>시간</span>
                </TextWrap>
                <ButtonWrap>
                    <BarButton icon={<Link />} text='공유' width='265px' height='42px' />
                </ButtonWrap>
            </GroupNotificationContent>
        </GroupNotificationItemWrap>
    );
};

export default GroupNotificationItem;
