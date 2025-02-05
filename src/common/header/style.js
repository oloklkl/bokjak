import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const HeaderWrap = styled.header`
    display: flex;
    justify-content: center;

    .header_inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1600px;
        width: 100%;
        height: 72px;
    }

    h1 {
        img {
            width: 140px;
        }
    }
`;

export const NavWrap = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    ${media.mobile} {
        flex-direction: column;
    }
`;

export const NavCenter = styled.ul`
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 150px;

    ${media.tablet} {
        margin-left: 50px;
    }

    li {
        a {
            text-decoration: none;
            font-size: 16px;
            color: ${color('gray', '40')};
            font-size: ${font('title', 'lg')};
            ${media.tablet} {
                font-size: ${font('body', 'md')};
            }
            ${media.mobile} {
                font-size: ${font('body', 'sm')};
            }
        }
        .category {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const NavRight = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    ${media.mobile} {
        display: none;
    }
`;
