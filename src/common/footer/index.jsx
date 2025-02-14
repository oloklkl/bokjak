import React from 'react';
import { FooterContent, FooterIink, FooterInfo, FooterMenu, FooterWrap } from './style';
import { Link } from 'react-router-dom';
import { IconButton } from '../../ui';
import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';

const Footer = () => {
    return (
        <FooterWrap>
            <div className='inner'>
                <div className='footer_inner'>
                    <FooterMenu>
                        <li>
                            <Link to={'/'}>
                                <strong>개인정보처리방침</strong>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>고객센터</Link>
                        </li>
                        <li>
                            <Link to={'/'}>이용약관</Link>
                        </li>
                        <li className='hidden-tablet-mobile'>
                            <Link to={'/'}>자주 묻는 질문</Link>
                        </li>
                        <li>
                            <Link to={'/'}>이벤트</Link>
                        </li>
                        <li className='hidden-tablet-mobile'>
                            <Link to={'/'}>채용정보</Link>
                        </li>
                    </FooterMenu>
                    <FooterContent>
                        <FooterInfo className='footer_info'>
                            <div className='footer-info-item'>
                                <span>대표</span>
                                <p>고태곤</p>
                            </div>
                            <div className='footer-info-item'>
                                <span>고객센터</span>
                                <p>02-532-6500</p>
                            </div>
                            <div className='footer-info-item'>
                                <span>주소</span>
                                <p>서울 서초구 서초대로77길 41(대동2빌팅 5,9,10층)</p>
                            </div>
                            <div className='footer-info-item'>
                                <span>사업자등록번호</span>
                                <p>153-88-00321</p>
                            </div>
                            <div className='footer-info-item'>
                                <span>이메일 주소</span>
                                <p>reaver75@ezenac.co.kr</p>
                            </div>
                        </FooterInfo>
                        <FooterIink>
                            <li>
                                <Link to={'/'}>
                                    <IconButton
                                        className='gray40 none'
                                        icon={<YoutubeLogo size={24} />}
                                        text='YoutubeLogo'
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <IconButton
                                        className='gray40 none'
                                        icon={<InstagramLogo size={24} />}
                                        text='InstagramLogo'
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    <IconButton
                                        className='gray40 none'
                                        icon={<FacebookLogo size={24} />}
                                        text='FacebookLogo'
                                    />
                                </Link>
                            </li>
                        </FooterIink>
                    </FooterContent>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;
