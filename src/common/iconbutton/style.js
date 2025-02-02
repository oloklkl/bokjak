import styled from 'styled-components';
import { media } from '../../styled/media';
import { color } from '../../styled/theme';

export const ButtonStyle = styled.div`
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        background-color: ${color('gray', '70')};
        border-radius: 9999px;

        svg {
            width: 24px;
            height: 24px;
            fill: ${color('gray', '0')};
        }

        ${media.mobile} {
            width: 33px;
            height: 33px;
            svg {
                width: 18px;
                height: 18px;
            }
        }

        &.hover {
            background-color: ${color('gray', '80')};
        }
    }
`;
