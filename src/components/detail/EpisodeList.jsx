import { useState } from 'react';
import { DetailSectionWrap } from './style';
import { CaretDown, CaretUp } from '@phosphor-icons/react';
import EpisodeItem from './EpisodeItem';

const EpisodeList = () => {
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
                        <li className="season-dropdown-item">시즌 1</li>
                        <li className="season-dropdown-item">시즌 2</li>
                        <li className="season-dropdown-item">시즌 3</li>
                    </ul>
                )}
            </div>
            <EpisodeItem />
        </DetailSectionWrap>
    );
};

export default EpisodeList;
