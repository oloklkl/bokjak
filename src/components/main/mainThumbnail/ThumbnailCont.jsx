import styled from 'styled-components';
import ThumbnailContList from './ThumbnailContList';
import { media } from '../../../styled/media';

const ThumbnailWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    padding: 100px 0 50px 0;
    ${media.tablet} {
        padding: 80px 0 40px 0;
    }
    ${media.mobile} {
        gap: 20px;
        padding: 40px 0 20px 0;
    }
`;

const ThumbnailCont = () => {
    return (
        <ThumbnailWrap>
            <ThumbnailContList />
        </ThumbnailWrap>
    );
};

export default ThumbnailCont;
