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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/modules/authSlice';

const genres = {
    28: '액션',
    12: '모험',
    16: '애니메이션',
    35: '코미디',
    80: '범죄',
    99: '다큐멘터리',
    18: '드라마',
    10751: '가족',
    14: '판타지',
    36: '역사',
    27: '공포',
    10402: '음악',
    9648: '미스터리',
    10749: '로맨스',
    878: 'SF',
    10770: 'TV 영화',
    53: '스릴러',
    10752: '전쟁',
    37: '서부',
};

const UpcomingNotificationItem = ({ content }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(authActions.setSoonAlarm(content));
    };

    const genreNames =
        content.genre_ids
            ?.map((id) => genres[id])
            .filter(Boolean)
            .join(' · ') || '장르 없음';

    const releaseMonth = content.release_date
        ? `${parseInt(
              content.release_date.split('-')[1],
              10
          )}월`
        : '월 정보 없음';

    const releaseYear = content.release_date
        ? content.release_date.split('-')[0]
        : '연도 없음';

    const getAgeLabel = (content) => {
        if (content.adult) return '19+';
        if (content.vote_average >= 8) return '15+';
        if (content.vote_average >= 6) return '12+';
        return 'ALL';
    };

    const ageLabel = getAgeLabel(content);

    return (
        <UpcomingNotificationItemWrap>
            <UpcomingContentWrap>
                <UpcomingHeaderWrap>
                    <HeaderTitle>
                        <h2>{releaseMonth}</h2>
                    </HeaderTitle>
                    <UpcomingUpIconWrap
                        onClick={handleRemove}
                    >
                        <BellSimpleRinging
                            size={24}
                            weight="fill"
                        />
                    </UpcomingUpIconWrap>
                </UpcomingHeaderWrap>
                <FlexWrap>
                    <UpcomingImageWrap>
                        <img
                            src={
                                content.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
                                    : 'https://via.placeholder.com/300x430'
                            }
                            alt={
                                content.title ||
                                '영화 포스터'
                            }
                        />
                    </UpcomingImageWrap>
                    <UpcomingInfoWrap>
                        <UpcomingActionWrap>
                            <h3>{content.title}</h3>
                            <AgeLabel text={ageLabel} />
                        </UpcomingActionWrap>
                        <span>
                            {content.release_date
                                ? content.release_date.split(
                                      '-'
                                  )[0]
                                : '연도 없음'}
                        </span>
                        <em>·</em>
                        <span>{genreNames}</span>
                    </UpcomingInfoWrap>
                </FlexWrap>
                <UpcomingDescription>
                    <p>
                        {content.overview ||
                            '상세 내용 없음'}
                    </p>
                </UpcomingDescription>
                <UpcomingDownIconWrap
                    onClick={handleRemove}
                >
                    <BellSimpleRinging
                        size={24}
                        weight="fill"
                    />
                </UpcomingDownIconWrap>
            </UpcomingContentWrap>
        </UpcomingNotificationItemWrap>
    );
};

export default UpcomingNotificationItem;
