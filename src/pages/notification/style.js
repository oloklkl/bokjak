import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const Container = styled.div`
    width: 100%;
`;

export const LoginPrompt = styled.div`
    p {
        margin-top: 100px;
        color: ${color('gray', '30')};
        font-size: ${font('heading', 'md')};

        ${media.tablet} {
            font-size: ${font('heading', 'sm')};
        }
        ${media.mobile} {
            font-size: ${font('heading', 'xs')};
            margin-bottom: 20px;
        }
    }
`;

export const ContentWrapper = styled.div``;
export const NotificationSection = styled.div``;
export const SectionTitle = styled.div``;
