import { BellSimpleRinging, Link } from '@phosphor-icons/react';
import { BarButton } from '../../../ui';
import {
    ButtonWrap,
    GroupNotificationContent,
    GroupNotificationImage,
    GroupNotificationItemWrap,
    IconWrap,
    TextWrap,
} from './style';

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
                    <BarButton icon={<Link />} className='link' text='공유' width='265px' height='42px' />
                </ButtonWrap>
            </GroupNotificationContent>
        </GroupNotificationItemWrap>
    );
};

export default GroupNotificationItem;
