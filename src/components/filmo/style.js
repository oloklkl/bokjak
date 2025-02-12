import styled from 'styled-components';
import { font } from '../../styled/theme';
import { media } from '../../styled/media';

export const FilmoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 120px;

    padding: 100px 0;
    ${media.mobile} {
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding: 40px 0;
    }

    h2 {
        text-align: center;
        font-size: ${font('heading', 'lg')};
        font-weight: 600;

        ${media.tablet} {
            font-size: ${font('heading', 'md')};
        }
        ${media.mobile} {
            font-size: ${font('heading', 'sm')};
        }
    }
    div {
        &.filmo-card-wrap {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 10px;

            @media (max-width: 1240px) {
                grid-template-columns: repeat(4, 1fr);
            }

            ${media.tablet} {
                grid-template-columns: repeat(3, 1fr);
            }
            ${media.mobile} {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
`;
