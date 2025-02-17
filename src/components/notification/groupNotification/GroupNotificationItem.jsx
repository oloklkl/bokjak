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

const GroupNotificationItem = ({ content, onClick }) => {
    return (
        <GroupNotificationItemWrap>
            <GroupNotificationImage>
                <img
                    src={
                        content.poster_path
                            ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
                            : 'https://via.placeholder.com/300x430'
                    }
                    alt={content.title || '콘텐츠 이미지'}
                />
            </GroupNotificationImage>
            <GroupNotificationContent>
                <IconWrap onClick={onClick}>
                    <BellSimpleRinging size={24} weight='fill' />
                </IconWrap>
                <TextWrap>
                    <h2>{content.title}</h2>
                    <span>{content.partyTitle || '파티방 제목'}</span>
                    <span>{content.time || '13:30'}</span>
                </TextWrap>
                <ButtonWrap>
                    <BarButton icon={<Link />} className='link' text='공유' width='265px' height='42px' />
                </ButtonWrap>
            </GroupNotificationContent>
        </GroupNotificationItemWrap>
    );
};

export default GroupNotificationItem;
