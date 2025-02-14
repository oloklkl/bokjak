import BottomNavigation from '../../common/bottomnavigation';
import { Intro, ThumbnailCont, TopCont } from '../../components';
import { CategoryButton } from '../../ui';
import { VisualWrap } from '../main/style';
import { ButtonWrap, CategoryWrap, ContentWrap, SubWrap } from './style';

const SubPage = () => {
    return (
        <SubWrap>
            <VisualWrap>
                <Intro />
            </VisualWrap>
            <CategoryWrap>
                <h2>카테고리</h2>
                <ButtonWrap>
                    <CategoryButton text='영화' />
                    <CategoryButton text='코미디' />
                    <CategoryButton text='예능' />
                    <CategoryButton text='로맨스' />
                    <CategoryButton text='공포' />
                    <CategoryButton text='스릴러' />
                    <CategoryButton text='애니메이션' />
                    <CategoryButton text='판타지' />
                    <CategoryButton text='가족' />
                    <CategoryButton text='어드벤처' />
                </ButtonWrap>
            </CategoryWrap>
            <ContentWrap>
                <TopCont />
                <ThumbnailCont />
                <ThumbnailCont />
                <ThumbnailCont />
                <ThumbnailCont />
                <ThumbnailCont />
                <ThumbnailCont />
            </ContentWrap>
            <BottomNavigation />
        </SubWrap>
    );
};

export default SubPage;
