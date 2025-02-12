import { useState } from 'react';
import styled from 'styled-components';
import { color, font } from '../styled/theme';
import { media } from '../styled/media';

export const ContentFlipCardWrap = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 3/4;
    padding: 40px 20px;

    border-radius: 10px;
    background-color: white;

    transition: all 0.3s ease;

    div {
        &.content-flip-card-wrap {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        &.content-flip-card-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            span {
                font-size: ${font('detail', 'md')};
                color: ${color('gray', '30')};
            }
        }
    }

    p {
        &.content-flip-card-title {
            font-size: ${font('title', 'xlg')};
            font-weight: 600;
            text-align: left;
            word-wrap: break-word;
        }
        &.content-flip-card-desc {
            text-align: left;
        }
    }

    ${media.desktop} {
        &:hover {
            background-color: ${color('gray', '70')};
            transform: translateY(-20px);
        }
    }
`;

const ContentFlipCard = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <ContentFlipCardWrap onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
            {isShow && (
                <div className="content-flip-card-wrap">
                    <p className="content-flip-card-title">블라이저택의 유령</p>
                    <div className="content-flip-card-tags">
                        <span>2013</span>
                        <span>액션</span>
                        <span>범죄</span>
                        <span>스릴러</span>
                    </div>
                    <p className="content-flip-card-desc">
                        초호화 저택에서 일하게 된 가정 교사. 그녀가 이곳에 숨은 어두운 비밀을 파헤치기 시작한다. 고딕
                        미스터리 시리즈.
                    </p>
                </div>
            )}
        </ContentFlipCardWrap>
    );
};

export default ContentFlipCard;
