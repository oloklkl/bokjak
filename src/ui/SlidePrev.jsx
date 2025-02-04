import { CaretLeft } from '@phosphor-icons/react';
import styled from 'styled-components';
import { color } from '../styled/theme';

const SlidePrevWrap = styled.button`
    width: 66px;
    height: 66px;
    background-color: #00000050;
    color: ${color('gray', '0')};
    border-radius: 9999px;
    svg {
        width: 42px;
        height: 42px;
    }

    &:hover {
        background-color: ${color('gray', '70')};
    }
`;

const SlidePrev = () => {
    return (
        <SlidePrevWrap>
            <CaretLeft weight={'thin'} />
        </SlidePrevWrap>
    );
};

export default SlidePrev;
