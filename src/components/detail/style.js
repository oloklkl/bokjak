import styled from 'styled-components';
import { color, font } from '../../styled/theme';

export const DetailWrap = styled.div`
    position: absolute;
    width: 100%;

    width: clamp(984px, 90vw, 1080px);
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    margin: 80px auto;

    border-radius: 24px;
    background-color: ${color('gray', '80')};

    color: ${color('gray', '0')};
    div {
        &.detail-inner {
            padding: 40px 40px;
        }
    }
`;

export const DescriptionWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;

    h2 {
        font-size: ${font('display', 'md')};
        font-weight: 600;
    }
    div {
        &.desc-info-wrap {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        &.desc-inner {
            display: flex;
            flex-direction: column;
            gap: 24px;

            max-width: 558px;
        }
        &.desc-info {
            display: flex;
            gap: 14px;
        }

        &.detail-tags-list {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        &.detail-tags {
            display: flex;
            gap: 30px;
        }
        &.tag-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            max-width: 470px;
        }
    }

    span {
        &.tag-label {
            display: block;
            width: 60px;
        }
    }
`;

export const MoreDetailInfoWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    height: 46px;
    border-bottom: 1px solid ${color('gray', '0')};
    position: relative;
    transition: all 0.2s ease;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: ${color('gray', '0')};
        transition: all 0.2s ease;
        z-index: -1;
    }

    &:hover {
        color: ${color('gray', '90')};
        padding: 0 16px;

        &::before {
            height: 100%;
        }
    }
`;

export const DetailSectionWrap = styled.div`
    h3 {
    }
`;
