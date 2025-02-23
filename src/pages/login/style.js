import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const LoginWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    ${media.tablet} {
        background-color: ${color('gray', '90')};
    }
`;

export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://raw.githubusercontent.com/lse-7660/bokjak-image/main/images/login/background.png');
    background-size: cover;
    background-position: center;
    z-index: -1;
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
    background-color: rgba(0, 0, 0, 0.7);
    padding: 40px 55px;
    width: auto;
    height: auto;

    ${media.tablet} {
        background-color: ${color('gray', '90')};
        padding: 10px 0;
        width: auto;
    }
    ${media.mobile} {
        width: auto;
    }
`;

export const LoginHeader = styled.div`
    h1 {
        font-size: ${font('heading', 'sm')};
        text-align: center;

        ${media.mobile} {
            font-size: ${font('heading', 'xs')};
        }
    }
`;

export const LoginButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 40px;

    ${media.tablet} {
        height: 35px;
    }

    ${media.mobile} {
        height: 30px;
    }

    .kakao,
    .google,
    .apple {
        width: 30px;
        height: auto;
        display: flex;
        align-content: flex-end;
    }

    .kokoo,
    .google {
        ${media.tablet} {
            width: 27px;
        }

        ${media.mobile} {
            width: 25px;
        }
    }

    span {
        /* flex: 1; */
        text-align: center;
        font-size: ${font('body', 'md')};
        color: ${color('gray', '30')};

        ${media.mobile} {
            font-size: ${font('body', 'sm')};
        }
    }
`;

export const LoginNotice = styled.span`
    display: block;
    color: ${color('gray', '30')};
    font-size: ${font('detail', 'md')};
    margin: 20px 0 14px;
    text-align: center;
    padding: 15px;
    border-top: 1px solid ${color('gray', '70')};

    ${media.mobile} {
        font-size: ${font('detail', 'sm')};
    }
`;

export const BokjakLoginContent = styled.div`
    h1 {
        margin-bottom: 40px;
    }
    input {
        width: 490px;
        height: 60px;
        display: flex;
        align-items: center;
        padding: 12px 20px;
        background: ${color('gray', '100')};
        border-radius: 7px;
        border: 1px solid ${color('gray', '60')};
        font-size: ${font('body', 'md')};
        color: ${color('gray', '0')};

        ${media.tablet} {
            height: 58px;
        }
        ${media.mobile} {
            width: 345px;
            height: 60px;
            gap: 80px;
        }
    }
    p {
        margin-bottom: 24px;
    }
    span {
        display: flex;
        color: ${color('gray', '40')};
        font-size: ${font('body', 'xsm')};
        margin-bottom: 10px;
    }

    .loginbutton {
        font-size: ${font('body', 'sm')};
    }

    .loginbutton {
        ${media.tablet} {
            height: 48px;
        }
        ${media.mobile} {
            width: 345px;
            height: 43px;
        }
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    margin-top: 10px;
    cursor: pointer;

    span {
        margin-top: 10px;
        color: ${color('gray', '40')};
        font-size: ${font('detail', 'md')};

        ${media.mobile} {
            font-size: ${font('detail', 'sm')};
        }
    }
`;

// join page 시작

export const JoinWrap = styled.div`
    p:nth-of-type(3) {
        margin-bottom: 5px;
    }
`;

export const JoinActions = styled.div`
    .share {
        margin-top: 20px;

        ${media.mobile} {
            width: 345px;
        }
    }
`;
