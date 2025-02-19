import { Link, useNavigate } from 'react-router-dom';
import { BackgroundImage, BokjakLoginContent, LoginContent, LoginHeader, LoginNotice, LoginWrap, Logo } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { authActions } from '../../store/modules/authSlice';
import { BarButton } from '../../ui';

const BokjakLogin = () => {
    const { authed, user: myUser } = useSelector((state) => state.authR);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login(user));
        setUser({ email: '', password: '' });
    };

    useEffect(() => {
        if (authed) {
            navigate('/');
        } else {
            // setUser({ email: '', password: '' });
            //포커스
        }
    }, [authed]);

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
                        <h1>bokjak 로그인</h1>
                    </LoginHeader>
                    <form>
                        <p>
                            <input
                                type='email'
                                name='email'
                                value={email}
                                onChange={changeInput}
                                placeholder='이메일 주소 또는 아이디'
                            />
                        </p>
                        <p>
                            <input
                                type='password'
                                name='password'
                                value={password}
                                onChange={changeInput}
                                placeholder='비밀번호'
                            />
                        </p>
                        <p>
                            <span>테스트 이메일: bokjak@naver.com </span>
                            <span>테스트 비밀번호 : a1234</span>
                        </p>
                        <p className='btn'>
                            <BarButton
                                className='loginbutton'
                                type='submit'
                                text='로그인'
                                width='490px'
                                height='50px'
                            />
                        </p>
                        <Link to='/login/join'>
                            <span>회원가입</span>
                        </Link>
                    </form>
                </BokjakLoginContent>
                <LoginNotice>SNS계정으로 간편하게 이용해보세요.</LoginNotice>
            </LoginContent>
        </LoginWrap>
    );
};

export default BokjakLogin;
