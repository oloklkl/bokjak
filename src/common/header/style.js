import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';
import { IconButton } from '../../ui';

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
        gap: 27px;
    }
    ${media.mobile} {
        height: 50px;
        margin-left: 0;
        gap: 30px;
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
        .category-link {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 5px;

            svg:hover {
                fill: ${color('gray', '0')};
            }
            ${media.tablet} {
                gap: 2px;
            }
        }
    }
`;

export const CategoryDropdown = styled.ul`
    position: absolute;
    width: 100%;
    background: #11111190;
    backdrop-filter: blur(3px);
    z-index: 9999;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    left: 0;

    ${media.desktop} {
        flex-wrap: wrap;
        height: 400px;
        padding: 64px 160px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

        li {
            display: block;
            padding: 12px 20px;
        }
        span {
            display: flex;
            text-align: left;
            font-size: ${font('body', 'md')};
        }
    }

    ${media.tablet} {
        flex-wrap: wrap;
        height: 968px;
        padding: 80px 147px 324px 100px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

        li {
            display: block;
            padding: 12px 0;
            margin-bottom: 9px;
        }
        span {
            display: flex;
            text-align: left;
            font-size: ${font('body', 'sm')};
        }
    }
    ${media.mobile} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        padding: 20px 128px;
        height: 100%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

        li {
            display: block;
            padding: 3px 0;
        }
        span {
            display: flex;
            font-size: ${font('body', 'mm')};
        }
    }
`;

export const CloseButton = styled(IconButton)`
    display: none;

    ${media.mobile} {
        display: flex;
        margin: 10px auto;

        &:hover {
            border-radius: 50%;
            background-color: ${color('primary', 'default')};
        }
    }
`;

export const NavRight = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    z-index: 9999;

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
