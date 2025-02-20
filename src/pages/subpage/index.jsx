import { useLocation } from 'react-router-dom';
import BottomNavigation from '../../common/bottomnavigation';
import { Intro, TopCont } from '../../components';
import { VisualWrap } from '../main/style';
import { ButtonWrap, CategoryWrap, ContentWrap, SubWrap } from './style';
import { useSelector } from 'react-redux';
import SubThumbnailCont from '../../components/subpage/subThumbnailCont/SubThumbnailCont';
import CategorySlider from '../../components/subpage/categorySlider/CategorySlider';

const SubPage = () => {
    const location = useLocation();
    const currentCategory = location.pathname.split('/')[2];
    const { movies, tvShows } = useSelector((state) => state.contentR);

    const titles = {
        movie: [
            '🎬 지금 뜨는 영화',
            '🔥 꼭 봐야 할 최신작',
            '💎 인생 영화 컬렉션',
            '🏆 평점 만점 영화',
            '🍿 모두가 주목하는 화제작',
            '⭐ 후회 없는 추천작',
        ],
        series: [
            '📺 요즘 핫한 시리즈',
            '🎉 새롭게 공개된 최신작',
            '💎 두고두고 볼 명작',
            '🔥 입소문 난 인기작',
            '🏆 믿고 보는 평점 고득점',
            '⭐ 정주행 필수 추천작',
        ],
    };

    const contentList = currentCategory === 'movie' ? movies : currentCategory === 'series' ? tvShows : [];

    const filledContents = [...contentList];
    while (filledContents.length < 60) {
        filledContents.push(...contentList);
    }

    const shuffleWithoutConsecutiveDuplicates = (arr) => {
        let shuffledArr;
        do {
            shuffledArr = [...arr].sort(() => Math.random() - 0.5);
        } while (hasConsecutiveDuplicates(shuffledArr));
        return shuffledArr;
    };

    const hasConsecutiveDuplicates = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].id === arr[i - 1].id) {
                return true;
            }
        }
        return false;
    };

    const contentChunks = [];
    for (let i = 0; i < 6; i++) {
        if (i >= 2) {
            const shuffledContents = shuffleWithoutConsecutiveDuplicates(filledContents);
            contentChunks.push(shuffledContents.slice(i * 10, (i + 1) * 10));
        } else {
            contentChunks.push(filledContents.slice(i * 10, (i + 1) * 10));
        }
    }

    return (
        <SubWrap>
            <div className='inner'>
                <VisualWrap>
                    <Intro />
                </VisualWrap>

                <CategoryWrap>
                    <h2>카테고리</h2>
                    <ButtonWrap>
                        <CategorySlider />
                    </ButtonWrap>
                </CategoryWrap>
            </div>

            <ContentWrap>
                <TopCont />
                <div className='inner'>
                    {['movie', 'series'].includes(currentCategory) ? (
                        titles[currentCategory].map((title, index) => (
                            <SubThumbnailCont key={index} title={title} contents={contentChunks[index]} />
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
