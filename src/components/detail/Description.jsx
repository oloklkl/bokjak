import React, { useState } from 'react';
import { DescriptionWrap } from './style';
import MoreDetailInfo from './MoreDetailInfo';
import { Link } from 'react-router-dom';

const Description = () => {
    const [isShow, setIsShow] = useState(false);
    const showMoreInfo = () => {
        setIsShow(!isShow);
    };

    return (
        <DescriptionWrap>
            <h2>힐하우스의 유령</h2>
            <div className="desc-info-wrap">
                <div className="desc-inner">
                    <div className="desc-info">
                        <span>2020</span>
                        <span>에피소드 12개</span>
                    </div>
                    <p>
                        셜리 잭슨의 고딕 소설을 현대적으로
                        재해석한 작품. 분열된 가족과 이들의
                        옛집에 관한 이야기로, &lt;롤링
                        스톤&gt;에서 '두말할 나위 없이
                        무시무시하다'라며 극찬했다.
                    </p>
                    <div className="detail-tags-list">
                        {isShow && (
                            <>
                                <div className="detail-tags">
                                    <span className="tag-label">
                                        장르
                                    </span>
                                    <div className="tag-list">
                                        <span className="tag-item">
                                            호러
                                        </span>
                                        <span className="tag-item">
                                            액션
                                        </span>
                                    </div>
                                </div>
                                <div className="detail-tags">
                                    <span className="tag-label">
                                        감독
                                    </span>
                                    <div className="tag-list">
                                        <span className="tag-item">
                                            <Link>
                                                Zara Payne
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="detail-tags">
                                    <span className="tag-label">
                                        출연진
                                    </span>
                                    <div className="tag-list">
                                        <span className="tag-item">
                                            <Link>
                                                Clara Norman
                                            </Link>
                                        </span>
                                        <span className="tag-item">
                                            <Link>
                                                Lily Norton
                                            </Link>
                                        </span>
                                        <span className="tag-item">
                                            <Link>
                                                Rebecca
                                                Thompson
                                            </Link>
                                        </span>
                                        <span className="tag-item">
                                            <Link>
                                                Hannah
                                                Allison
                                            </Link>
                                        </span>
                                        <span className="tag-item">
                                            <Link>
                                                Lily Fisher
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <MoreDetailInfo
                    showMoreInfo={showMoreInfo}
                    isShow={isShow}
                />
            </div>
        </DescriptionWrap>
    );
};

export default Description;
