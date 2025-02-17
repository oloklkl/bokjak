import { useLocation } from 'react-router-dom';
import BottomNavigation from '../../common/bottomnavigation';
import { Intro, ThumbnailCont, TopCont } from '../../components';
import { CategoryButton } from '../../ui';
import { VisualWrap } from '../main/style';
import { ButtonWrap, CategoryWrap, ContentWrap, SubWrap } from './style';

const SubPage = () => {
    const location = useLocation();
    const currentCategory = location.pathname.split('/')[2];

    const categories = [
        { name: '영화', path: 'movie' },
        { name: '코미디', path: 'comedy' },
        { name: '드라마', path: 'drama' },
        { name: '예능', path: 'entertainment' },
        { name: '로맨스', path: 'romance' },
        { name: '공포', path: 'horror' },
        { name: '스릴러', path: 'thriller' },
        { name: '애니메이션', path: 'animation' },
        { name: '판타지', path: 'fantasy' },
        { name: '가족', path: 'family' },
        { name: '어드벤처', path: 'adventure' },
    ];

    return (
        <SubWrap>
            <div className='inner'>
                <VisualWrap>
                    <Intro />
                </VisualWrap>
                <CategoryWrap>
                    <h2>카테고리</h2>
                    <ButtonWrap>
                        {categories.map((cat) => (
                            <CategoryButton
                                key={cat.path}
                                text={cat.name}
                                to={`/subpage/${cat.path}`}
                                isActive={currentCategory === cat.path}
                            />
                        ))}
                    </ButtonWrap>
                </CategoryWrap>
            </div>
            <ContentWrap>
                <TopCont />
                <div className='inner'>
                    {['movie', 'drama'].includes(currentCategory) ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <ThumbnailCont key={index} category={currentCategory} />
                        ))
                    ) : (
                        <p>해당 카테고리의 콘텐츠가 없습니다.</p>
                    )}
                </div>
            </ContentWrap>
            <BottomNavigation />
        </SubWrap>
    );
};

export default SubPage;
