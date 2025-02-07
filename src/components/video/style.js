import styled from 'styled-components';
import { color } from '../../styled/theme';

export const VideoWrapCom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const VideoPlayerWrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${color('gray', '50')};

    &.ytp-show-cards-title {
        display: none;
    }
`;

export const BokjakChatWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    min-width: 360px;
    width: 30%;
    height: 100vh;
    background-color: ${color('gray', '80')};
    padding: 24px;
    div {
        &.chat-content-wrap {
            overflow-y: scroll;
            -ms-overflow-style: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
`;

export const ChatItemWrap = styled.div``;
