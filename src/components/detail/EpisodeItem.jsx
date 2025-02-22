import { useSelector } from 'react-redux';
import { EpisodeItemWrap } from './style';

const EpisodeItem = ({ episode }) => {
    const { currentContent } = useSelector((state) => state.detailR);
    const bgurl = `https://image.tmdb.org/t/p/w500`;
    const { width } = useSelector((state) => state.windowR);

    return (
        <EpisodeItemWrap>
            {width > 600 ? (
                <>
                    {width >= 1024 && <div className="episode-num">{episode.episode_number}</div>}

                    <div className="episode-preview">
                        <img
                            src={
                                episode.still_path
                                    ? `${bgurl}${episode.still_path}`
                                    : `${bgurl}${currentContent.backdrop_path}`
                            }
                            alt=""
                        />
                    </div>
                    <div className="episode-info-wrap">
                        <div className="episode-sum">
                            {width < 1024 && <span>{episode.episode_number}</span>}
                            <span className="episode-title">{episode.name}</span>
                            <span>{episode.runtime && `${episode.runtime}분`}</span>
                        </div>
                        <span className="episode-desc">{episode.overview}</span>
                    </div>
                </>
            ) : (
                <>
                    <div className="episode-preview-wrap-mo">
                        <div className="episode-preview">
                            <img
                                src={
                                    episode.still_path
                                        ? `${bgurl}${episode.still_path}`
                                        : `${bgurl}${currentContent.backdrop_path}`
                                }
                                alt=""
                            />
                        </div>
                        <div className="episode-sum">
                            {width < 1024 && <span>{episode.episode_number}</span>}
                            <span className="episode-title">{episode.name}</span>
                            <span>{episode.runtime && `${episode.runtime}분`}</span>
                        </div>
                    </div>
                    <span className="episode-desc">{episode.overview}</span>
                </>
            )}
        </EpisodeItemWrap>
    );
};

export default EpisodeItem;
