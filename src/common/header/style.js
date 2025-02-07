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
        ${media.mobile} {
            height: 50px;
        }

        img {
            width: 140px;
            height: 40px;

            ${media.tablet} {
                width: 37px;
                height: 30px;
            }
            ${media.mobile} {
                width: 48px;
                height: 30px;
                margin-top: 10px;
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
        margin-left: 30px;
        gap: 30px;
    }
    ${media.mobile} {
        height: 50px;
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

            &:hover {
                color: ${color('gray', '0')};
            }

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
            gap: 5px;

            svg:hover {
                fill: ${color('gray', '0')};
            }
        }
    }
`;

export const NavRight = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;

    svg:hover {
        fill: ${color('gray', '0')};
    }

    ${media.tablet} {
        gap: 2px;
    }
    ${media.mobile} {
        display: none;
    }
`;
