import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const MyPageWrap = styled.div`
    .share {
        color: ${color('gray', '40')};
        border: 1px solid ${color('gray', '60')};
        background: ${color('gray', '90')};
        font-size: ${font('label', 'lg')};
        margin: 80px auto;

        &:hover {
            color: ${color('gray', '0')};
        }

        ${media.tablet} {
            font-size: ${font('label', 'md')};
            width: 350px;
            height: 35px;
        }
        ${media.mobile} {
            width: 350px;
            height: 40px;
            margin: 64px auto;
            font-size: ${font('label', 'sm')};
        }
    }
`;
