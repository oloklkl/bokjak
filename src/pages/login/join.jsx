import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
    BackgroundImage,
    BokjakLoginContent,
    JoinActions,
    JoinWrap,
    LoginContent,
    LoginHeader,
    LoginWrap,
    Logo,
} from './style';
import { authActions } from '../../store/modules/authSlice';
import { BarButton } from '../../ui';

const Join = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        tel: '',
        email: '',
        password: '',
    });
    const { username, tel, email, password } = user;
    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!username.trim()) return;
        dispatch(authActions.signup(user));
        navigate('/login');
    };
    return (
        <LoginWrap onSubmit={onSubmit}>
            <Link to={'/'}>
                <Logo
                    src='https://raw.githubusercontent.com/lse-7660/bokjak-image/1cc1bc51d66246dcc6e27bc9ed887e2759fba6d1/images/common/bokjak.svg'
                    alt='logo'
                ></Logo>
                <BackgroundImage />
            </Link>
            <LoginContent>
                <BokjakLoginContent>
                    <LoginHeader>
                        <h1>Bokjak 회원가입</h1>
                    </LoginHeader>
                    <JoinWrap>
                        <form>
                            <p>
                                <input
                                    type='text'
                                    placeholder='닉네임 (2자 이상)'
                                    name='username'
                                    value={username}
                                    onChange={changeInput}
                                />
                            </p>
                            <p>
                                <input
                                    type='email'
                                    placeholder='이메일 (example@gmail.com)'
                                    name='email'
                                    value={email}
                                    onChange={changeInput}
                                />
                            </p>
                            <p>
                                <input
                                    type='password'
                                    placeholder='비밀번호'
                                    name='password'
                                    value={password}
                                    onChange={changeInput}
                                />
                            </p>
                            <span>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리</span>
                            <JoinActions>
                                <BarButton className='share' text='가입하기' width='490px' height='50px' />
                            </JoinActions>
                        </form>
                    </JoinWrap>
                </BokjakLoginContent>
            </LoginContent>
        </LoginWrap>
    );
};

export default Join;
