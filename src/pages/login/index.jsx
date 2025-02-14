import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButtons, LoginContent, LoginHeader, LoginNotice, LoginWrap, Logo } from './style';

const Login = () => {
    return (
        <LoginWrap>
            <Link to={'/'}>
                <Logo
                    src='https://raw.githubusercontent.com/lse-7660/bokjak-image/1cc1bc51d66246dcc6e27bc9ed887e2759fba6d1/images/common/bokjak.svg'
                    alt='logo'
                ></Logo>
            </Link>
            <LoginContent>
                <LoginHeader>
                    <h1>반가워요!</h1>
                    <h1>계정을 선택해주세요.</h1>
                </LoginHeader>
                <LoginButtons>
                    <button>
                        <img
                            className='kakao'
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/61105440a091e532b03925524f6d2b5296cd750b/images/login/kakao.svg'
                            alt='kakao'
                        />
                        <span>카카오로 시작하기</span>
                    </button>
                    <button>
                        <img
                            className='naver'
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/c29adbc54b8bd12cf848cf80178e1b52dc94dd89/images/login/naver.svg'
                            alt='apple'
                        />
                        <span>네이버로 시작하기</span>
                    </button>
                    <button>
                        <img
                            className='apple'
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/61105440a091e532b03925524f6d2b5296cd750b/images/login/apple.svg'
                            alt='naver'
                        />
                        <span>Apple로 시작하기</span>
                    </button>
                    <button>
                        <img
                            className='google'
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/61105440a091e532b03925524f6d2b5296cd750b/images/login/google.svg'
                            alt='google'
                        />
                        <span>구글로 시작하기</span>
                    </button>
                </LoginButtons>
                <LoginNotice>SNS계정으로 간편하게 이용해보세요.</LoginNotice>
            </LoginContent>
        </LoginWrap>
    );
};

export default Login;
