import { useDispatch, useSelector } from 'react-redux';
import { UpcomingNotificationListWrap } from './style';
import UpcomingNotificationItem from './UpcomingNotificationItem';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
    getContentByGenre,
    getContentDetail,
    getMovies,
} from '../../../store/modules/getThunk';
import ThumbnailCard from '../../../ui/ThumbnailCard';

const UpcomingNotificationList = () => {
    const { movies } = useSelector(
        (state) => state.contentR
    );
    const { user, joinData } = useSelector(
        (state) => state.authR
    );
    const dispatch = useDispatch();
    const location = useLocation();

    const currentUser = joinData.find(
        (item) => item.id === user.id
    );

    const userSoonAlarmData = currentUser.soonAlarm;
    // useEffect(() => {
    //     dispatch(getMovies());
    // }, [dispatch]);

    // const filteredMovies = movies.filter(
    //     (content) => content.overview
    // );

    return (
        <UpcomingNotificationListWrap>
            {userSoonAlarmData &&
            userSoonAlarmData.length > 0 ? (
                userSoonAlarmData
                    // .slice(0, 10)
                    .map((content) => (
                        <UpcomingNotificationItem
                            key={content.id}
                            content={content}
                        >
                            <Link
                                to={`/movie/${content.id}`}
                                state={{
                                    previousLocation:
                                        location,
                                }}
                            >
                                <ThumbnailCard
                                    content={content}
                                />
                            </Link>
                        </UpcomingNotificationItem>
                    ))
            ) : (
                <p>
                    공개 예정작! 알림 설정하고 가장 먼저
                    만나보세요!
                </p>
            )}
        </UpcomingNotificationListWrap>
    );
};

export default UpcomingNotificationList;
