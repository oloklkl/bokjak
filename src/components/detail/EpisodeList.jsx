import React from 'react';
import { DetailSectionWrap } from './style';

const EpisodeList = () => {
    return (
        <DetailSectionWrap>
            <h3>에피소드</h3>
            <select name="season" id="">
                <option value="">시즌 1</option>
                <option value="">시즌 2</option>
                <option value="">시즌 3</option>
            </select>
        </DetailSectionWrap>
    );
};

export default EpisodeList;
