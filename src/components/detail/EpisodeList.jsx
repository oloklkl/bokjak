import { useState } from 'react';
import { DetailSectionWrap } from './style';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import EpisodeItem from './EpisodeItem';
import { useSelector } from 'react-redux';

const EpisodeList = () => {
    const { currentContent } = useSelector((state) => state.detailR);
    const [isShow, setIsShow] = useState(false);
    const toggleDropdown = () => {
        setIsShow(!isShow);
    };
    return (
        <DetailSectionWrap>
            <h3>에피소드</h3>
            <div className="season-dropdown">
                <button className="season-dropdown-toggle" onClick={toggleDropdown}>
                    <span>시즌 1</span>
                    {isShow ? <CaretUp /> : <CaretDown />}
                </button>
                {isShow && (
                    <ul className="season-dropdown-list">
                        {currentContent.seasonDetails.map((season) => (
                            <li key={season.id} className="season-dropdown-item">
                                {season.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {currentContent.seasonDetails[0].episodes.map((episode) => (
                <EpisodeItem key={episode.id} episode={episode} />
            ))}
        </DetailSectionWrap>
    );
};

export default EpisodeList;
