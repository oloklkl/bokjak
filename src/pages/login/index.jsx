import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButtons, LoginContent, LoginHeader, LoginWrap } from './style';
import { IconButton } from '../../ui';
import { AppleLogo } from '@phosphor-icons/react';

const Login = () => {
    return (
        <LoginWrap>
            <Link to={'/'}>
                <img
                    src='https://raw.githubusercontent.com/lse-7660/bokjak-image/1cc1bc51d66246dcc6e27bc9ed887e2759fba6d1/images/common/bokjak.svg'
                    alt='logo'
                />
            </Link>
            <LoginContent>
                <LoginHeader>
                    <h1>반가워요!</h1>
                    <h1>계정을 선택해주세요.</h1>
                </LoginHeader>
                <LoginButtons>
                    <button>
                        <img
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/18cb6ec19defe09b46ec12917c88c31e962632b7/images/login/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1.svg'
                            alt=''
                        ></img>
                    </button>
                    <button>
                        <IconButton className='none' icon={<AppleLogo size={24} />} text='AppleLogo' />
                    </button>
                    <button>
                        <img
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/18cb6ec19defe09b46ec12917c88c31e962632b7/images/login/%EB%84%A4%EC%9D%B4%EB%B2%84.svg'
                            alt=''
                        ></img>
                    </button>
                    <button>
                        <img
                            src='https://raw.githubusercontent.com/lse-7660/bokjak-image/18cb6ec19defe09b46ec12917c88c31e962632b7/images/login/%EA%B5%AC%EA%B8%80.svg'
                            alt=''
                        ></img>
                    </button>
                </LoginButtons>
            </LoginContent>
        </LoginWrap>
    );
};

export default Login;
