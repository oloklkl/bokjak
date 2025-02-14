import { useSelector } from 'react-redux';
import { EpisodeItemWrap } from './style';

const EpisodeItem = ({ episode }) => {
    const { currentContent } = useSelector((state) => state.detailR);
    const bgurl = `https://image.tmdb.org/t/p/w500`;

    return (
        <EpisodeItemWrap>
            <div className="episode-num">{episode.episode_number}</div>
            <div className="episode-preview">
                <img
                    src={
                        episode.still_path ? `${bgurl}${episode.still_path}` : `${bgurl}${currentContent.backdrop_path}`
                    }
                    alt=""
                />
            </div>
            <div className="episode-info-wrap">
                <div className="episode-sum">
                    <span className="episode-title">{episode.name}</span>
                    <span>{episode.runtime && `${episode.runtime}분`}</span>
                </div>
                <span className="episode-desc">{episode.overview}</span>
            </div>
        </EpisodeItemWrap>
    );
};

export default EpisodeItem;
