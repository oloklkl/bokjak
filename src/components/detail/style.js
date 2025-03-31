import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const DetailWindow = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    z-index: 100;

    &::-webkit-scrollbar {
        display: none;
    }
`;

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
    border: 1px solid ${color('gray', '70')};

    color: ${color('gray', '0')};

    ${media.tablet} {
        margin: 40px 0 0 0;
        width: 100%;

        border-radius: 20px;
    }
`;

export const DetailPreviewWrap = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    /* background-color: white; */
    overflow: hidden;

    iframe {
        width: 100%;
        height: 100%;
        aspect-ratio: 16/9;
        /* transform: scale(1.15); */
    }

    img {
        &.detail-preview-introimg {
            width: 100%;
        }
    }

    div {
        &.detail-preview-intro-gradient {
            width: 100%;
            height: 100%;
            background-color: transparent;
        }

        &.detailpreview-buttons-wrap {
            position: absolute;
            top: 0;
            width: 100%;
            aspect-ratio: 16/9;
            background: linear-gradient(
                #00000000,
                #00000080
            );
        }

        &.detailpreview-wrap {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;

            height: 100%;
            padding: 40px;

            ${media.tablet} {
                padding: 30px;
            }

            ${media.mobile} {
                padding: 20px;
                justify-content: center;
                align-items: center;
            }
        }
    }
`;

export const DetailContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px;
    padding: 60px 40px;

    ${media.tablet} {
        gap: 100px;
        padding: 60px 30px;
    }

    ${media.mobile} {
        gap: 60px;
        padding: 20px;
    }

    div {
        &.mobile-detail-tab-wrap {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    }
`;

export const DescriptionWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;

    a {
        &:hover {
            color: ${color('primary', 'default')};
        }
    }

    h2 {
        font-size: ${font('display', 'md')};
        font-weight: 600;

        ${media.mobile} {
            font-size: ${font('title', 'xxlg')};
        }
    }
    div {
        &.desc-title-wrap {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        &.desc-info-wrap {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            ${media.tablet} {
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
            }

            ${media.mobile} {
                font-size: ${font('body', 'sm')};
            }
        }

        &.desc-inner {
            display: flex;
            flex-direction: column;
            gap: 24px;

            max-width: 558px;

            ${media.tablet} {
                gap: 20px;

                max-width: 100%;
            }
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
            min-width: 60px;
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

        ${media.tablet} {
            display: none;
        }
    }

    &:hover {
        color: ${color('gray', '90')};
        padding: 0 16px;

        &::before {
            height: 100%;
        }

        ${media.tablet} {
            color: ${color('gray', '0')};
            padding: 0;
        }
    }

    ${media.mobile} {
        width: 54px;
        height: 18px;
        border-bottom: 0;
        font-size: ${font('detail', 'sm')};
    }
`;

export const DetailSectionWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    ${media.mobile} {
        gap: 14px;
    }

    div {
        &.morelikethis-wrap-mo {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 14px;
        }

        &.season-episode-list {
            position: relative;
        }

        &.show-more-episodes {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%);

            width: 50px;
            height: 50px;
            background-color: white;
            border-radius: 9999px;

            svg {
                color: ${color('gray', '90')};
            }

            &:hover {
                background-color: ${color('gray', '50')};
            }
        }

        &.show-more-episodes-line {
            height: 1px;
            background-color: ${color('gray', '70')};
        }
    }

    h3 {
        font-size: ${font('heading', 'md')};
        font-weight: 600;

        ${media.mobile} {
            font-size: ${font('heading', 'xs')};
        }
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

            ${media.mobile} {
                margin-bottom: 16px;
            }

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

    ${media.mobile} {
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
        padding-top: 0;
        padding-bottom: 14px;
    }

    div {
        &.episode-preview {
            width: 240px;
            aspect-ratio: 16/9;
            border-radius: 6px;
            /* background-color: white; */
            overflow: hidden;
            transition: all 0.2s ease;

            ${media.tablet} {
                min-width: 210px;
            }
            ${media.mobile} {
                min-width: 134px;
                width: 134px;
            }

            img {
                width: 100%;
            }
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

            ${media.tablet} {
                display: grid;
                gap: 10px;
                grid-template-columns: 1fr 12fr 4fr;
            }
        }
        &.episode-preview-wrap-mo {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }
    span {
        &.episode-title {
            font-weight: 600;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
        }
        &.episode-desc {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }

        ${media.mobile} {
            font-size: ${font('body', 'sm')};
        }
    }

    &:hover {
        background-color: ${color('gray', '70')};

        div {
            &.episode-preview {
                ${media.desktop} {
                    transform: scale(1.05);
                }
            }
        }
    }
`;

export const DetailModalCom = styled.div`
    position: fixed;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* padding: 64px 0; */

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

        &.create-room-modal-wrap-mo {
            position: relative;
            width: 100%;
            height: 100%;
            margin-top: 30px;
            background-color: ${color('gray', '80')};
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
            color: ${color('gray', '0')};

            &:focus {
                outline: none;
                border: 1px solid ${color('gray', '0')};
            }

            ${media.mobile} {
                width: auto;
            }
        }
    }

    ${media.mobile} {
        width: 100%;
        height: 100%;
        background-color: #00000090;
    }
`;
