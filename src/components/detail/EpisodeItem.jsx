import { EpisodeItemWrap } from './style';

const EpisodeItem = () => {
    return (
        <EpisodeItemWrap>
            <div className="episode-num">1</div>
            <div className="episode-preview"></div>
            <div className="episode-info-wrap">
                <div className="episode-sum">
                    <span className="episode-title">episode title</span>
                    <span>runtime</span>
                </div>
                <span className="episode-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis dolorum, mollitia unde officia
                    consequuntur accusantium hic. Aut alias ab autem omnis aliquid, quaerat consequuntur culpa eum
                </span>
            </div>
        </EpisodeItemWrap>
    );
};

export default EpisodeItem;
