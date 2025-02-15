import styled from 'styled-components';
import { media } from '../../styled/media';
import { color, font } from '../../styled/theme';

export const FooterWrap = styled.footer`
    padding: 80px 0 0;

    ${media.mobile} {
        padding: 64px 0 0;
    }

    .footer_inner {
        height: 260px;
        box-sizing: border-box;
        position: relative;
        color: ${color('gray', '40')};
        font-size: ${font('body', 'xsm')};
        margin: 45px 0;

        ${media.tablet} {
            margin: 35px 0;
            height: 255px;
        }
        ${media.mobile} {
            margin: 30px 0;
            height: 360px;
        }
    }
`;

export const FooterMenu = styled.ul`
    display: flex;
    gap: 50px;
    margin-bottom: 40px;

    ${media.tablet} {
        gap: 30px;
    }

    ${media.mobile} {
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 40px;
        justify-content: space-between;
    }

    li {
        font-size: ${font('body', 'sm')};

        ${media.mobile} {
            width: 40%;
        }
    }

    a {
        color: ${color('gray', '40')};

        &:hover {
            color: ${color('primary', '70')};
        }
    }

    strong {
        font-weight: 700;
    }

    .hidden-tablet-mobile {
        ${media.tablet} {
            display: none;
        }
        ${media.mobile} {
            display: none;
        }
    }
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;

    ${media.mobile} {
        flex-direction: column;
    }
`;

export const FooterInfo = styled.div`
    p {
        display: flex;
        align-items: center;
        margin: 0;

        &::before {
            content: '';
            display: inline-block;
            width: 1px;
            height: 12px;
            background-color: ${color('gray', '50')};
            margin-right: 30px;
            align-self: center;
        }
    }
    span {
        display: flex;
        align-items: center;
    }

    .footer-info-item {
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 5px;
        align-items: center;
    }
`;

export const FooterIink = styled.ul`
    display: flex;
    align-items: flex-end;
    gap: 20px;

    svg:hover {
        fill: ${color('gray', '0')};
    }

    ${media.mobile} {
        margin-top: 40px;
    }
`;
