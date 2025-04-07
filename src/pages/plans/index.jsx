import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../login/style';
import { BarButton } from '../../ui';
import { PlansFormBox, PlansHeader, PlansInner, PlansPageWrapper } from './style';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Plans = () => {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState('');
    const { authed } = useSelector((state) => state.authR);

    const handleChange = (e) => {
        setSelectedPlan(e.target.value);
    };

    const handleClick = () => {
        if (!selectedPlan) {
            alert('결제 주기를 선택해주세요.'); // 경고 메시지 출력
            return;
        }

        if (authed) {
            navigate('/'); // 로그인 상태: 홈으로 이동
        } else {
            navigate('/login'); // 로그아웃 상태: 로그인 페이지로 이동
        }
    };

    return (
        <PlansPageWrapper>
            <Link to={'/'}>
                <Logo
                    src='https://raw.githubusercontent.com/lse-7660/bokjak-image/1cc1bc51d66246dcc6e27bc9ed887e2759fba6d1/images/common/bokjak.svg'
                    alt='logo'
                ></Logo>
            </Link>
            <PlansInner>
                <PlansHeader>
                    <h2>Premium 구독권의</h2>
                    <h2> 결제 주기를 선택하세요</h2>
                    <span>정기 결제 주기를 선택해주세요.</span>
                </PlansHeader>
                <PlansFormBox>
                    <form>
                        <fieldset>
                            <label className={selectedPlan === '1month' ? 'active' : ''}>
                                <input type='radio' name='plan' value='1month' onChange={handleChange} />
                                <div className='plan-box'>
                                    <span>1개월</span>
                                    <strong>월 13,900원</strong>
                                </div>
                            </label>

                            <label className={selectedPlan === '12month' ? 'active' : ''}>
                                <input type='radio' name='plan' value='12month' onChange={handleChange} />
                                <div className='plan-box'>
                                    <span>
                                        12개월 <span className='badge'>16% 할인</span>
                                    </span>
                                    <div className='price'>
                                        <strong>연 139,000원</strong>
                                        <small>월 11,583원</small>
                                    </div>
                                </div>
                            </label>

                            <BarButton
                                className='select'
                                text='선택하기'
                                width='800px'
                                height='60px'
                                onClick={handleClick}
                                disabled={!selectedPlan}
                            />
                        </fieldset>
                    </form>
                </PlansFormBox>
            </PlansInner>
        </PlansPageWrapper>
    );
};

export default Plans;
