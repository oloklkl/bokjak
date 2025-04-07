import { useState } from 'react';
import { BarButton } from '../../ui';
import {
    MembershipContainer,
    Plans,
    Plan,
    MembershipInfo,
    MembershipWrap,
    MembershipContent,
    DeviceSupportWrap,
    DeviceSupportItem,
} from './style';
import { X } from '@phosphor-icons/react';

const Membership = () => {
    const [hoveredPlan, setHoveredPlan] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <MembershipContainer>
            <h2>
                지금 복작을 구독하고, <span>매주 새로운 콘텐츠를 경험하세요!</span>
            </h2>

            <div className='inner'>
                <MembershipContent>
                    <MembershipWrap>
                        <h2>원하는 구독권을 선택해주세요!</h2>
                        <Plans>
                            <Plan
                                className='premium'
                                onMouseEnter={() => setHoveredPlan('premium')}
                                onMouseLeave={() => setHoveredPlan(null)}
                            >
                                <h3>Premium</h3>
                                <ul>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'premium'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-movie.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-movie.png?raw=true'
                                            }
                                            alt='movie-img'
                                        />
                                    </li>
                                    <li>VOD 12만편 이상</li>
                                    <li>
                                        <p>
                                            <span>최대</span>4<span>대</span>
                                        </p>
                                    </li>
                                    <li>최대 4대 동시 감상</li>
                                    <li>
                                        <p>
                                            4K&nbsp;
                                            <img
                                                src={
                                                    hoveredPlan === 'premium'
                                                        ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-ultra.png?raw=true'
                                                        : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-ultra.png?raw=true'
                                                }
                                                alt='UltraHD-img'
                                            />
                                        </p>
                                    </li>
                                    <li>Ultra HD 4K 지원</li>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'premium'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-hor.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-hor.png?raw=true'
                                            }
                                            alt='HDT-img'
                                        />
                                    </li>
                                    <li>HDR 10+지원</li>
                                    <li>
                                        <p>
                                            300<span>개</span>
                                        </p>
                                    </li>
                                    <li>비디오 300개 저장</li>
                                </ul>
                            </Plan>

                            <Plan
                                className='standard'
                                onMouseEnter={() => setHoveredPlan('standard')}
                                onMouseLeave={() => setHoveredPlan(null)}
                            >
                                <h3>Standard</h3>
                                <ul>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'standard'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-movie.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-movie.png?raw=true'
                                            }
                                            alt='movie-img'
                                        />
                                    </li>
                                    <li>VOD 12만편 이상</li>
                                    <li>
                                        <p>
                                            <span>최대</span>2<span>대</span>
                                        </p>
                                    </li>
                                    <li>최대 2대 동시 감상</li>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'standard'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-full.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-full.png?raw=true'
                                            }
                                            alt='fullHD-img'
                                        />
                                    </li>
                                    <li>FHD 지원</li>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'standard'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-hor.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-hor.png?raw=true'
                                            }
                                            alt='HDT-img'
                                        />
                                    </li>
                                    <li>HDR 10+지원</li>
                                    <li>
                                        <p>
                                            200<span>개</span>
                                        </p>
                                    </li>
                                    <li>비디오 200개 저장</li>
                                </ul>
                            </Plan>

                            <Plan
                                className='basic'
                                onMouseEnter={() => setHoveredPlan('basic')}
                                onMouseLeave={() => setHoveredPlan(null)}
                            >
                                <h3>Basic</h3>
                                <ul>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'basic'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-movie.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-movie.png?raw=true'
                                            }
                                            alt='movie-img'
                                        />
                                    </li>
                                    <li>VOD 12만편 이상</li>
                                    <li>
                                        <p>
                                            <span>오직</span>1<span>대</span>
                                        </p>
                                    </li>
                                    <li>오직 1대 감상</li>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'basic'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-hd.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-hd.png?raw=true'
                                            }
                                            alt='hd-img'
                                        />
                                    </li>
                                    <li>HD 지원</li>
                                    <li>
                                        <X size={32} className='x' />
                                    </li>
                                    <li>HDR 10+미지원</li>
                                    <li>
                                        <p>
                                            100<span>개</span>
                                        </p>
                                    </li>
                                    <li>비디오 100개 저장</li>
                                </ul>
                            </Plan>
                        </Plans>

                        <DeviceSupportWrap>
                            {/* Premium or Standard */}
                            <DeviceSupportItem
                                className={`premium-standard ${
                                    hoveredPlan === 'premium' || hoveredPlan === 'standard' ? 'hover' : ''
                                }`}
                            >
                                <h3>지원기기</h3>
                                <ul>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'premium' || hoveredPlan === 'standard'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-devices1-2.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-devices1.png?raw=true'
                                            }
                                            alt='디바이스'
                                        />
                                    </li>
                                    <li>모바일, 태블릿, PC, TV 지원</li>
                                </ul>
                            </DeviceSupportItem>

                            {/* Basic */}
                            <DeviceSupportItem className={`basic ${hoveredPlan === 'basic' ? 'hover' : ''}`}>
                                <h3>지원기기</h3>
                                <ul>
                                    <li>
                                        <img
                                            src={
                                                hoveredPlan === 'basic'
                                                    ? 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/hover-devices2-2.png?raw=true'
                                                    : 'https://github.com/lse-7660/bokjak-image/blob/main/images/membership/default-devices2.png?raw=true'
                                            }
                                            alt='디바이스'
                                        />
                                    </li>
                                    <li>모바일, 태블릿, PC 지원</li>
                                </ul>
                            </DeviceSupportItem>
                        </DeviceSupportWrap>

                        <BarButton className='select' text='premium 선택하기' width='300px' height='60px' />
                    </MembershipWrap>
                </MembershipContent>

                <MembershipInfo>
                    <h3>구독 안내</h3>
                    <p>결제 금액에는 VAT가 포함되어 있어요.</p>
                    <p>정기결제는 이용 기간이 끝나기 24시간 이내에 자동으로 결제돼요.</p>
                    <p>
                        정기결제는 언제든지 자동 결제를 해지할 수 있어요. 이 경우 다음 결제 예정일부터 결제가 진행되지
                        않아요.
                    </p>
                    <p>
                        구매 후 7일 이상 지나거나 서비스 이용 내역이 있는 경우 구독을 즉시 취소하려면 복작 고객센터에
                        문의해 주세요. 이경우 복작 이용약관 제 15조 2항에 따라 회사에 적용하는 소정의 기준율을 적용하여
                        이용대금을 차감하고 환불받을 수 있어요.
                    </p>
                    <p>저작권자의 요청에 따라 일부 콘텐츠의 동시 재생이 제한될 수 있어요.</p>
                    <p>해외 서비스 대상 국가에서는 다운로드를 제공하지 않습니다.</p>
                    <p>해외 서비스 대상 국가 : 싱가폴, 인도네시아, 말레이시아, 필리핀, 베트남, 라오스, 태국</p>
                    <p>해외 서비스 대상 국가가 아닌 국가에서는 서비스 이용이 불가합니다.</p>
                    <p>
                        프리미엄 이용권은 동시에 4명, 스텐다드 이용권은 2명이 동시에 시청할 수 있습니다. 베이직 이용권은
                        1명만 시청할 수 있습니다.
                    </p>
                </MembershipInfo>
            </div>
        </MembershipContainer>
    );
};

export default Membership;
