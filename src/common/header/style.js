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
        width: 100%;
        height: 72px;

        ${media.tablet} {
            height: 56px;
        }
        ${media.mobile} {
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }

    h1 {
        img {
            width: 140px;
            ${media.tablet} {
                width: 37px;
            }
            ${media.mobile} {
                width: 49px;
            }
        }
    }
`;

export const NavWrap = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const NavCenter = styled.ul`
    display: flex;
    align-items: center;

    ${media.desktop} {
        margin-left: 150px;
        gap: 50px;
    }

    ${media.tablet} {
        margin-left: 40px;
        gap: 30px;
    }
    ${media.mobile} {
        margin-left: 0;
        gap: 20px;
    }

    li {
        text-align: center;

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
            /* width: 140px; */
            gap: 5px;
        }
    }
`;

export const NavRight = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;

    ${media.tablet} {
        gap: 2px;
    }
    ${media.mobile} {
        display: none;
    }
`;
