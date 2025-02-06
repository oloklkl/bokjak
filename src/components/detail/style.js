import styled from 'styled-components';
import { color, font } from '../../styled/theme';

export const DetailWrap = styled.div`
    position: absolute;
    width: 100%;

    overflow-x: hidden;

    width: clamp(984px, 90vw, 1080px);
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    margin: 40px auto;

    border-radius: 24px;
    background-color: ${color('gray', '80')};

    color: ${color('gray', '0')};
`;

export const DetailPreviewWrap = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    background-color: white;

    div {
        &.detailpreview-wrap {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;

            height: 100%;
            padding: 40px;
        }
        &.detailpreview-util-wrap {
            width: 100%;
            display: flex;
            gap: 12px;
        }
    }
`;

export const DetailContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px;
    padding: 60px 40px;
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
    display: flex;
    flex-direction: column;
    gap: 30px;
    h3 {
        font-size: ${font('heading', 'md')};
        font-weight: 600;
    }
    button {
        &.season-dropdown-toggle {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 160px;
            height: 44px;
            padding: 0 20px;
            overflow: hidden;

            border: 1px solid ${color('gray', '0')};
            border-radius: 9999px;

            background-color: transparent;
            color: ${color('gray', '0')};
            font-size: ${font('body', 'md')};

            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 100%;
                background-color: ${color('gray', '0')};

                transition: all 0.2s ease;
                z-index: -1;
            }

            &:hover {
                color: ${color('gray', '90')};

                &::before {
                    width: 100%;
                }
            }
        }
    }
    div.season-dropdown {
        position: relative;
    }
    ul {
        &.season-dropdown-list {
            position: absolute;
            top: 54px;
            left: 0;
            width: 160px;
            border-radius: 10px;
            padding: 14px 0;
            background-color: ${color('gray', '0')};
            color: ${color('gray', '90')};
        }
    }
    li {
        &.season-dropdown-item {
            padding: 12px 20px;
        }
    }
    .moreLikeThisSwiper.swiper {
        overflow: visible;
    }
`;

export const EpisodeItemWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 20px 0;
    border-radius: 10px;
    transition: all 0.2s ease;

    div {
        &.episode-preview {
            width: 240px;
            aspect-ratio: 16/9;
            border-radius: 6px;
            background-color: white;
            transition: all 0.2s ease;
        }
        &.episode-info-wrap {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 595px;
        }

        &.episode-num {
            width: 65px;
            font-size: ${font('heading', 'lg')};
            font-weight: 600;
            text-align: right;
        }
        &.episode-sum {
            display: flex;
            gap: 24px;
        }
    }
    span {
        &.episode-title {
            font-weight: 600;
        }
        &.episode-desc {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
        }
    }

    &:hover {
        background-color: ${color('gray', '70')};

        div {
            &.episode-preview {
                transform: scale(1.05);
            }
        }
    }
`;

export const MoreLikeThisItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    height: auto;
    aspect-ratio: 3/4;
    padding: 40px 20px;

    border-radius: 10px;
    background-color: white;

    transition: all 0.3s ease;

    div {
        &.morelikethis-card-tags {
            display: flex;
            gap: 10px;
            span {
                font-size: ${font('detail', 'md')};
                color: ${color('gray', '30')};
            }
        }
    }

    p {
        &.morelikethis-card-title {
            font-size: ${font('title', 'xlg')};
            font-weight: 600;
            text-align: left;
        }
        &.morelikethis-card-desc {
            text-align: left;
        }
    }

    &:hover {
        background-color: ${color('gray', '70')};
        transform: translateY(-20px);
    }
`;

export const DetailModalCom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    position: absolute;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 10px;
    background-color: ${color('gray', '80')};
    border: 1px solid ${color('gray', '70')};

    p {
        &.bj-modal-title {
            font-size: ${font('title', 'xlg')};
            font-weight: 600;
            text-align: center;
        }
        &.bjmodal-close-button {
            position: absolute;
            top: 20px;
            right: 20px;
        }
        &.bjmodal-close-button-left {
            position: absolute;
            top: 20px;
            left: 20px;
        }
    }

    div {
        &.bj-create-modal-wrap {
            display: flex;
            flex-direction: column;
            gap: 60px;
        }
    }

    form {
        &.bj-create-modal-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }

    input {
        &.bjmodal-input {
            width: 340px;
            background-color: transparent;
            border-radius: 7px;
            border: 1px solid ${color('gray', '60')};
            padding: 12px;

            &:focus {
                outline: none;
                border: 1px solid ${color('gray', '0')};
            }
        }
    }
`;
