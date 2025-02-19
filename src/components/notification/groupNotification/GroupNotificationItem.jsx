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
import { useEffect, useState } from 'react';

const partyTitles = ['안녕', '들어와', '모여봐요', '함께 즐기자', '시작합니다', '밤새 놀자!', '우리끼리 파티!'];

const GroupNotificationItem = ({ content, onClick }) => {
    const [randomPartyTitle, setRandomPartyTitle] = useState('');
    const [randomTime, setRandomTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const title = content?.partyTitle || partyTitles[Math.floor(Math.random() * partyTitles.length)];
        setRandomPartyTitle(title);
    }, [content?.partyTitle]);

    useEffect(() => {
        if (!content?.time) {
            const time = `${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}:${String(
                Math.floor(Math.random() * 60)
            ).padStart(2, '0')}`;
            setRandomTime(time);
        }
    }, [content?.time]);

    useEffect(() => {
        const randomMonth = Math.floor(Math.random() * 12) + 1;
        const randomDay = Math.floor(Math.random() * 28) + 1;
        setDate(`${randomMonth}월 ${randomDay}일`);
    }, []);

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
                    <h2>{content?.title}</h2>
                    <span>{randomPartyTitle}</span>
                    <span>{date}</span>
                    <p>{content?.time || randomTime}</p>
                </TextWrap>
                <ButtonWrap>
                    <BarButton icon={<Link />} className='link' text='공유' width='265px' height='42px' />
                </ButtonWrap>
            </GroupNotificationContent>
        </GroupNotificationItemWrap>
    );
};

export default GroupNotificationItem;
