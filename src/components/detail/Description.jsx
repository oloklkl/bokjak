// Description.jsx

import { DescriptionWrap } from './style';
import MoreDetailInfo from './MoreDetailInfo';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Description = () => {
    const { currentContent } = useSelector((state) => state.detailR);

    const [isShow, setIsShow] = useState(false);
    const showMoreInfo = () => {
        setIsShow(!isShow);
    };

    return (
        <DescriptionWrap>
            <h2>{currentContent.title}</h2>
            <div className="desc-info-wrap">
                <div className="desc-inner">
                    <div className="desc-info">
                        <span>{currentContent.release_date.split('-')[0]}</span>
                        <span>{currentContent.runtime}분</span>
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
                                                    <Link>{item.name}</Link>
                                                </span>
                                            ))}
                                    </div>
                                </div>
                                <div className="detail-tags">
                                    <span className="tag-label">출연진</span>
                                    <div className="tag-list">
                                        {currentContent.credits.cast.slice(0, 10).map((cast) => (
                                            <span key={cast.id} className="tag-item">
                                                <Link>{cast.name}</Link>
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
