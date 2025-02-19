import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const KakaoAuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get('code');

        if (code) {
            console.log('카카오 인가 코드:', code);
        } else {
            console.error('카카오 로그인 실패');
        }

        navigate('/');
    }, [location, navigate]);

    return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoAuthCallback;
