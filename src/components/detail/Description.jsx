// Description.jsx

import { DescriptionWrap } from './style';
import MoreDetailInfo from './MoreDetailInfo';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeopleBySearch } from '../../store/modules/getThunk';
import AgeLabel from '../../ui/AgeLabel';
import UtilButtonWrap from './UtilButtonWrap';

const Description = () => {
    const { type } = useParams();
    const { currentContent } = useSelector((state) => state.detailR);
    const { width } = useSelector((state) => state.windowR);
    const dispatch = useDispatch();
    const [isShow, setIsShow] = useState(false);
    const showMoreInfo = () => {
        setIsShow(!isShow);
    };

    const toFilmo = (query, type, id) => {
        dispatch(getPeopleBySearch({ query }));
    };

    return (
        <DescriptionWrap>
            <div className="desc-title-wrap">
                <h2>{type === 'movie' ? currentContent.title : currentContent.name}</h2>
                {width <= 600 && <UtilButtonWrap />}
            </div>
            <div className="desc-info-wrap">
                <div className="desc-inner">
                    <div className="desc-info">
                        <AgeLabel text={currentContent.adult ? '19+' : 'ALL'} />
                        <span>
                            {type === 'movie'
                                ? currentContent.release_date.split('-')[0]
                                : currentContent.first_air_date.split('-')[0]}
                        </span>
                        <span>
                            {type === 'movie'
                                ? `${currentContent.runtime}분`
                                : `${currentContent.seasons[0].episode_count}개 에피소드`}
                        </span>
                    </div>
                    <p>{currentContent.overview}</p>
                    <div className="detail-tags-list">
                        {isShow && (
                            <>
                                <div className="detail-tags">
                                    <span className="tag-label">장르</span>
                                    <div className="tag-list">
                                        {currentContent.genres.map((genre) => (
                                            <span key={genre.id} className="tag-item">
                                                {genre.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="detail-tags">
                                    <span className="tag-label">감독</span>
                                    <div className="tag-list">
                                        {currentContent.credits.crew
                                            .filter((item) => item.job === 'Director')
                                            .map((item) => (
                                                <span key={item.id} className="tag-item">
                                                    <Link to={`/filmo/${item.id}`} onClick={() => toFilmo(item.name)}>
                                                        {item.name}
                                                    </Link>
                                                </span>
                                            ))}
                                    </div>
                                </div>
                                <div className="detail-tags">
                                    <span className="tag-label">출연진</span>
                                    <div className="tag-list">
                                        {currentContent.credits.cast.slice(0, 10).map((cast) => (
                                            <span key={cast.id} className="tag-item">
                                                <Link to={`/filmo/${cast.id}`} onClick={() => toFilmo(cast.name)}>
                                                    {cast.name}
                                                </Link>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <MoreDetailInfo showMoreInfo={showMoreInfo} isShow={isShow} />
            </div>
        </DescriptionWrap>
    );
};

export default Description;
