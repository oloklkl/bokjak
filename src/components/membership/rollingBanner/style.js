import styled from 'styled-components';
import { media } from '../../../styled/media';

export const RollingBannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const RowRight = styled.div`
    display: flex;
    gap: 24px;
    animation: scrollRight 40s linear infinite;

    @keyframes scrollRight {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    img {
        border-radius: 7px;
        height: 200px;
        width: auto;
        object-fit: cover;
        aspect-ratio: 3 / 2; // 가로 긴 비율 유지하려면 이거도 추가 가능

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

    @keyframes scrollLeft {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    img {
        border-radius: 7px;
        height: 200px;
        width: auto;
        object-fit: cover;
        aspect-ratio: 3 / 2; // 가로 긴 비율 유지하려면 이거도 추가 가능

        ${media.tablet} {
            height: 100px;
        }

        ${media.mobile} {
            height: 65px;
        }
    }
`;
