import styled, { keyframes } from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const VideoWrapCom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    @media (max-aspect-ratio: 1/1) {
        flex-direction: column;
        height: 100vh;
    }
`;

export const ProgressBar = styled.div`
    input[type='range'] {
        margin-bottom: 30px;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 6px;

        border-radius: 3px;
        outline: none;
        background: linear-gradient(
            to right,
            ${color('primary', 'default')} var(--progress),
            ${color('gray', '30')} 0
        );

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            background: ${color('primary', 'default')};
            border-radius: 50%;
        }
    }
`;

export const VideoPlayerWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${color('gray', '50')};

    @media (max-aspect-ratio: 1/1) {
        width: 100vw;
        height: 100%;
    }
    .pointer {
        cursor: pointer;
    }
    iframe {
        pointer-events: none;
    }

    div.video-play-bar {
        /* color: ${color('primary', 'default')}; */
    }

    div {
        &.video-player {
            width: 100%;
            height: 100%;
        }

        &.video-util-wrap {
            /* pointer-events: none; */

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 24px;
            img {
                width: 30px;
                height: 30px;
            }
        }

        &.video-controls-wrap {
            /* pointer-events: none; */
            display: flex;
            justify-content: space-between;
        }
        &.video-controls {
            display: flex;
            gap: 24px;
            align-items: center;
            pointer-events: all;

            span {
                &.video-play-time {
                    font-size: ${font('detail', 'md')};
                }
            }
        }
        &.video-util-top {
            position: relative;
            display: flex;
            justify-content: space-between;
            pointer-events: all;

            ul {
                &.video-option-list {
                    position: absolute;
                    right: 0;
                    width: auto;
                    min-width: 232px;
                    padding: 10px 20px;
                    border-radius: 7px;
                    background-color: ${color(
                        'gray',
                        '80'
                    )};
                    li {
                        &.video-option-item {
                            padding: 15px 0;

                            div {
                                &.option-depth1 {
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;

                                    svg {
                                        size: 18px;
                                    }
                                }
                            }
                        }

                        li {
                            &.depth2-item {
                                padding: 15px 0;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const BokjakChatWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;

    visibility: hidden;

    width: 0;
    min-width: 0;
    height: 100vh;
    background-color: ${color('gray', '80')};
    transition: all 0.2s ease;

    @media (max-aspect-ratio: 1/1) {
        width: 100vw;
        height: 0;
    }

    &.chat-window-active {
        visibility: visible;
        width: 30%;
        min-width: 400px;
        padding: 78px 24px 24px 24px;

        @media (max-aspect-ratio: 1/1) {
            width: 100%;
            height: 60%;
            min-height: 60%;
            padding: 20px;
            /* border-radius: 12px; */
        }
    }

    P {
        &.chat-exit {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            padding: 24px;
        }
    }

    div {
        &.chat-content-wrap {
            display: flex;
            flex-direction: column-reverse;
            gap: 12px;

            height: 100%;

            overflow-y: auto;
            -ms-overflow-style: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
`;

export const ChatItemWrap = styled.div`
    display: flex;
    gap: 20px;

    span {
        &.chat-username {
            width: auto;
            font-weight: 600;
            white-space: nowrap;
        }
    }
`;

export const ChatFormWrap = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    svg {
        &.emoji-picker-btn {
            position: absolute;
            bottom: 9px;
            right: 46px;
            color: ${color('gray', '60')};
            z-index: 20;
            width: 24px;
            height: 24px;

            ${media.desktop} {
                right: 9px;
                bottom: 9px;
            }
        }
    }

    aside {
        &.emoji-picker {
            position: absolute;
            bottom: 50px;
            right: 0;
            min-width: 300px;
            max-width: 400px;
        }
    }

    input {
        position: relative;

        width: 100%;
        height: 42px;
        padding: 12px;

        border-radius: 7px;
        border: 1px solid ${color('gray', '60')};
        background-color: ${color('gray', '80')};

        color: ${color('gray', '0')};
    }
    button {
        &.chatform-submit-btn {
            position: absolute;
            bottom: 6px;
            right: 6px;

            width: 30px;
            height: 30px;
            background-color: ${color(
                'primary',
                'default'
            )};
            border-radius: 4px;
            ${media.desktop} {
                display: none;
            }
        }
    }
`;

const floatEmoji = keyframes`
0% {

}
`;
