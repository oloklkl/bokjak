import { useState } from 'react';
import { MoreLikeThisItemWrap } from './style';

const MoreLikeThisItem = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <MoreLikeThisItemWrap onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
            {isShow && (
                <>
                    <p className="morelikethis-card-title">블라이저택의 유령</p>
                    <div className="morelikethis-card-tags">
                        <span>2013</span>
                        <span>액션</span>
                        <span>범죄</span>
                        <span>스릴러</span>
                    </div>
                    <p className="morelikethis-card-desc">
                        초호화 저택에서 일하게 된 가정 교사. 그녀가 이곳에 숨은 어두운 비밀을 파헤치기 시작한다. 고딕
                        미스터리 시리즈.
                    </p>
                </>
            )}
        </MoreLikeThisItemWrap>
    );
};

export default MoreLikeThisItem;
