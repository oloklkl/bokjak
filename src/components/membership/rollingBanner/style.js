import styled from 'styled-components';
import { media } from '../../../styled/media';

export const RollingBannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow: hidden;
    width: 100%;
`;

export const RowRight = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
    animation: scrollRight 40s linear infinite;

    ${media.tablet} {
        gap: 18px;
    }

    ${media.mobile} {
        gap: 12px;
    }

    @keyframes scrollRight {
        0% {
            transform: translateX(-50%);
        }
        100% {
            transform: translateX(00%);
        }
    }

    img {
        border-radius: 7px;
        height: 200px;
        width: auto;
        object-fit: cover;
        aspect-ratio: 16 / 9;
        /* object-fit: cover;
        aspect-ratio: 3 / 2; // 가로 긴 비율 유지하려면 이거도 추가 가능 */

        ${media.tablet} {
            height: 100px;
        }

        ${media.mobile} {
            height: 65px;
        }
    }
`;

export const RowLeft = styled.div`
    display: flex;
    gap: 24px;
    animation: scrollLeft 40s linear infinite;

    ${media.tablet} {
        gap: 18px;
    }

    ${media.mobile} {
        gap: 12px;
    }

    @keyframes scrollLeft {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    img {
        border-radius: 7px;
        height: 200px;
        width: auto;
        object-fit: cover;
        aspect-ratio: 16 / 9;
        /* object-fit: cover; */
        /* aspect-ratio: 3 / 2; // 가로 긴 비율 유지하려면 이거도 추가 가능 */

        ${media.tablet} {
            height: 100px;
        }

        ${media.mobile} {
            height: 65px;
        }
    }
`;
