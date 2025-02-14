import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const LoginWrap = styled.div`
    position: relative;
    background-color: ${color('gray', '90')};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    ${media.tablet} {
    }
    ${media.mobile} {
    }
`;

export const Logo = styled.img`
    position: absolute;
    top: 80px;
    left: 160px;
    width: 140px;
    height: 40px;

    ${media.tablet} {
        top: 50px;
        left: 60px;
    }
    ${media.mobile} {
        top: 50px;
        left: 20px;
    }
`;

export const LoginContent = styled.div`
    background-color: ${color('gray', '70')};
    padding: 40px 55px;
    width: 600px;
    height: 600px;

    ${media.tablet} {
        background-color: ${color('gray', '90')};
        padding: 10px 0;
        width: 470px;
        height: 596px;
    }
    ${media.mobile} {
        width: 345px;
        height: 545px;
    }
`;

export const LoginHeader = styled.div`
    h1 {
        font-size: ${font('heading', 'sm')};
        text-align: center;

        ${media.tablet} {
        }
        ${media.mobile} {
            font-size: ${font('heading', 'xs')};
        }
    }

    h1:nth-of-type(2) {
        margin-bottom: 40px;
        ${media.tablet} {
        }
        ${media.mobile} {
        }
    }
`;

export const LoginButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    button {
        width: 490px;
        height: 60px;
        display: flex;
        align-items: center;
        gap: 130px;
        padding: 12px 20px;
        background: #00000070;
        border-radius: 7px;
        border: 1px solid ${color('gray', '50')};

        &:hover {
            background: ${color('gray', '50')};
            span {
                color: ${color('gray', '0')};
                font-weight: 700;
            }
        }

        ${media.tablet} {
            height: 58px;
        }
        ${media.mobile} {
            width: 345px;
            height: 60px;
            gap: 80px;
        }
    }

    .kakao {
        width: 30px;
        height: auto;

        ${media.mobile} {
            width: 25px;
        }
    }

    .naver {
        width: 25px;
        height: auto;

        ${media.mobile} {
            width: 22px;
        }
    }

    .apple {
        width: 25px;
        height: auto;

        ${media.mobile} {
            width: 22px;
        }
    }

    .google {
        width: 27px;
        height: auto;

        ${media.mobile} {
            width: 24px;
        }
    }

    span {
        /* flex: 1; */
        text-align: center;
        font-size: ${font('body', 'md')};
        color: ${color('gray', '30')};

        ${media.tablet} {
        }
        ${media.mobile} {
            font-size: ${font('body', 'sm')};
        }
    }
`;

export const LoginNotice = styled.span`
    display: block;
    color: ${color('gray', '40')};
    font-size: ${font('detail', 'md')};
    margin-top: 30px;
    text-align: center;

    ${media.tablet} {
    }
    ${media.mobile} {
        font-size: ${font('detail', 'sm')};
    }
`;
