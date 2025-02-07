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
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/61105440a091e532b03925524f6d2b5296cd750b/images/login/kakao.svg'
                            alt='kakao'
                        />
                        <span>카카오로 시작하기</span>
                    </button>
                    <button>
                        <img
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/18cb6ec19defe09b46ec12917c88c31e962632b7/images/login/%EB%84%A4%EC%9D%B4%EB%B2%84.svg'
                            alt='apple'
                        />
                        <span>네이버로 시작하기</span>
                    </button>
                    <button>
                        <img
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/61105440a091e532b03925524f6d2b5296cd750b/images/login/apple.svg'
                            alt='naver'
                        />
                        <span>Apple로 시작하기</span>
                    </button>
                    <button>
                        <img
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/61105440a091e532b03925524f6d2b5296cd750b/images/login/google.svg'
                            alt='google'
                        />
                        <span>구글로 시작하기</span>
                    </button>
                </LoginButtons>
                <LoginNotice>SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.</LoginNotice>
            </LoginContent>
        </LoginWrap>
    );
};

export default Login;
