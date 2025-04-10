import { useEffect } from 'react';
import BottomNavigation from '../../common/bottomnavigation';
import { ButtonWrap, CategoryWrap, ContentWrap, SubWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';
import SubThumbnailCont from '../../components/subpage/subThumbnailCont/SubThumbnailCont';
import CategorySlider from '../../components/subpage/categorySlider/CategorySlider';
import SupTopCont from '../../components/subpage/supTopCont/SupTopCont';
import {
    getHighRated,
    getNowPlaying,
    getPopular,
    getRecommended,
    getTopRated,
    getTrending,
} from '../../store/modules/getThunk';

const SubPage = () => {
    const dispatch = useDispatch();
    const currentCategory = location.pathname.split('/')[2]; // 'movie' or 'series'
    const { trending, nowPlaying, highRated, topRated, popular, recommended } = useSelector((state) => state.contentR);

    useEffect(() => {
        const type = currentCategory === 'movie' ? 'movie' : 'tv';

        dispatch(getTrending(type));
        dispatch(getNowPlaying(type));
        dispatch(getHighRated(type));
        dispatch(getTopRated(type));
        dispatch(getPopular(type));
        dispatch(getRecommended(type));
    }, [currentCategory, dispatch]);

    return (
        <SubWrap>
            <div className='inner'>
                <CategoryWrap>
                    <h2>카테고리</h2>
                    <ButtonWrap>
                        <CategorySlider />
                    </ButtonWrap>
                </CategoryWrap>
            </div>

            <ContentWrap>
                <SupTopCont />
                <div className='inner'>
                    <SubThumbnailCont title='TRENDING' contents={trending} />
                    <SubThumbnailCont title='NOW PLAYING' contents={nowPlaying} />
                    <SubThumbnailCont title='HIGH RATED' contents={highRated} />
                    <SubThumbnailCont title='TOP RATED' contents={topRated} />
                    <SubThumbnailCont title='POPULAR' contents={popular} />
                    <SubThumbnailCont title='RECOMMENDED' contents={recommended} />
                </div>
            </ContentWrap>

            <BottomNavigation />
        </SubWrap>
    );
};

export default SubPage;
