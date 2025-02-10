import { CaretRight, Check } from '@phosphor-icons/react';
import styled from 'styled-components';

const VideoOptionDropdownWrap = styled.div`
    ul {
        &.video-option-depth2 {
            display: none;
        }
    }
`;

// const optionList = [
//     { id: 1, depth1: '화질 설정', depth2: ['자동', '1080p', '720p', '720p'] },
//     { id: 2, depth1: '재생 속도', depth2: ['x 0.5', 'x 1.0', 'x 1.2', 'x 1.5', 'x 2.0'] },
//     { id: 3, depth1: '오프닝/엔딩 자동스킵', depth2: ['켜기', '끄기'] },
//     { id: 4, depth1: '에피소드 자동재생', depth2: ['켜기', '끄기'] },
// ];

const VideoOptionDropdown = () => {
    return (
        <VideoOptionDropdownWrap>
            <ul>
                <li className="video-option-depth1">
                    <span>화질 설정</span>
                    <CaretRight />
                    <ul className="video-option-depth2">
                        <li>
                            <Check />
                            <span>자동</span>
                        </li>
                        <li>
                            <Check />
                            <span>1080p</span>
                        </li>
                        <li>
                            <Check />
                            <span>720p</span>
                        </li>
                    </ul>
                </li>
                <li className="video-option-depth1">
                    <span>재생 속도</span>
                    <CaretRight />
                    <ul className="video-option-depth2">
                        <li>
                            <Check />
                            <span>x 0.5</span>
                        </li>
                        <li>
                            <Check />
                            <span>x 1.0</span>
                        </li>
                        <li>
                            <Check />
                            <span>x 1.2</span>
                        </li>
                        <li>
                            <Check />
                            <span>x 1.5</span>
                        </li>
                        <li>
                            <Check />
                            <span>x 2.0</span>
                        </li>
                    </ul>
                </li>
                <li className="video-option-depth1">
                    <span>오프닝/엔딩 자동스킵</span>
                    <CaretRight />
                    <ul className="video-option-depth2">
                        <li>
                            <Check />
                            <span>켜기</span>
                        </li>
                        <li>
                            <Check />
                            <span>끄기</span>
                        </li>
                    </ul>
                </li>
                <li className="video-option-depth1">
                    <span>에피소드 자동재생</span>
                    <CaretRight />
                    <ul className="video-option-depth2">
                        <li>
                            <Check />
                            <span>켜기</span>
                        </li>
                        <li>
                            <Check />
                            <span>끄기</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </VideoOptionDropdownWrap>
    );
};

export default VideoOptionDropdown;
