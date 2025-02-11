// ThumbnailContList copy.jsx

import styled from 'styled-components';
import { font } from '../../../styled/theme';
import { IconButton } from '../../../ui';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import ThumbnailCard from '../../../common/main/card/thumbnail/ThumbnailCard';
import { media } from '../../../styled/media';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContentDetail, getMovies, getTvShows } from '../../../store/modules/getThunk';
import ThumbnailCard2 from '../../../common/main/card/thumbnail/ThumbnailCard copy';
import { detailActions } from '../../../store/modules/detailSlice';

const ThumbnailText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const TitleCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 1540px;
    ${media.tablet} {
        gap: 620px;
    }
    ${media.mobile} {
        gap: 320px;
    }

    h2 {
        font-size: ${font('title', 'xxlg')};
        ${media.tablet} {
            font-size: ${font('title', 'xlg')};
        }
        ${media.mobile} {
            font-size: ${font('title', 'lg')};
        }
    }
    h3 {
        font-size: ${font('body', 'sm')};
    }
`;
const ThumbnailList = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: start;
`;
const PageNation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-64%, -50%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1540px;
`;

const ThumbnailContList2 = () => {
    const { movies } = useSelector((state) => state.contentR);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const showDetailModal = (type, id) => {
        dispatch(getContentDetail({ type, id }));
        dispatch(detailActions.openDetailModal({}));
    };

    return (
        <>
            <ThumbnailText>
                <TitleCont>
                    <h2>title</h2>
                    <h3>more</h3>
                </TitleCont>
            </ThumbnailText>
            <ThumbnailList>
                {movies.map((movie) => (
                    <ThumbnailCard2
                        key={movie.id}
                        movie={movie}
                        onClick={() => {
                            showDetailModal('movie', movie.id);
                        }}
                    />
                ))}

                <PageNation>
                    <IconButton className="b30" icon={<CaretLeft size={24} />} text="caretLeft" />
                    <IconButton className="b30" icon={<CaretRight size={24} />} text="caretRight" />
                </PageNation>
            </ThumbnailList>
        </>
    );
};

export default ThumbnailContList2;
