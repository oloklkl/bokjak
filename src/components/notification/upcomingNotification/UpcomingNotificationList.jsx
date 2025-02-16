import { useDispatch, useSelector } from 'react-redux';
import { UpcomingNotificationListWrap } from './style';
import UpcomingNotificationItem from './UpcomingNotificationItem';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getContentByGenre, getContentDetail, getMovies } from '../../../store/modules/getThunk';
import ThumbnailCard from '../../../common/main/card/thumbnail/ThumbnailCard';

const UpcomingNotificationList = () => {
    const { movies } = useSelector((state) => state.contentR);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const filteredMovies = movies.filter((content) => content.overview);

    return (
        <UpcomingNotificationListWrap>
            {filteredMovies && filteredMovies.length > 0 ? (
                filteredMovies.map((content) => (
                    <UpcomingNotificationItem key={content.id} content={content}>
                        <Link to={`/movie/${content.id}`} state={{ previousLocation: location }}>
                            <ThumbnailCard content={content} />
                        </Link>
                    </UpcomingNotificationItem>
                ))
            ) : (
                <p>로딩 중...</p>
            )}
        </UpcomingNotificationListWrap>
    );
};

export default UpcomingNotificationList;
