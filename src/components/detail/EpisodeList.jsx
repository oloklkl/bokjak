import { useState } from 'react';
import { DetailSectionWrap } from './style';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import EpisodeItem from './EpisodeItem';
import { useSelector } from 'react-redux';

const EpisodeList = () => {
    const { currentContent } = useSelector(
        (state) => state.detailR
    );
    const { width } = useSelector((state) => state.windowR);
    const [isShow, setIsShow] = useState(false);
    const [isEpisodeShow, setIsEpisodeShow] =
        useState(false);
    const toggleDropdown = () => {
        setIsShow(!isShow);
    };
    return (
        <DetailSectionWrap>
            {width > 600 && <h3>에피소드</h3>}

            <div className="season-dropdown">
                <button
                    className="season-dropdown-toggle"
                    onClick={toggleDropdown}
                >
                    <span>시즌 1</span>
                    {isShow ? <CaretUp /> : <CaretDown />}
                </button>
                {isShow && (
                    <ul className="season-dropdown-list">
                        {currentContent.seasonDetails.map(
                            (season) => (
                                <li
                                    key={season.id}
                                    className="season-dropdown-item"
                                >
                                    {season.name}
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
            <div className="season-episode-list">
                {currentContent.seasonDetails[0].episodes
                    .slice(
                        0,
                        isEpisodeShow
                            ? currentContent
                                  .seasonDetails[0].episodes
                                  .length
                            : 12
                    )
                    .map((episode) => (
                        <EpisodeItem
                            key={episode.id}
                            episode={episode}
                        />
                    ))}
                {!isEpisodeShow &&
                    currentContent.seasonDetails[0].episodes
                        .length > 12 && (
                        <>
                            <div className="show-more-episodes-line"></div>
                            <div
                                className="show-more-episodes"
                                onClick={() =>
                                    setIsEpisodeShow(true)
                                }
                            >
                                <span className="hide">
                                    전체 에피소드 보기
                                </span>
                                <CaretDown />
                            </div>
                        </>
                    )}
            </div>
        </DetailSectionWrap>
    );
};

export default EpisodeList;
