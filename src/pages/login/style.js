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
    width: 600px;
    height: 650px;

    ${media.tablet} {
        background-color: ${color('gray', '90')};
        padding: 10px 0;
        width: auto;
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

        ${media.mobile} {
            font-size: ${font('heading', 'xs')};
        }
    }

    h1:nth-of-type(2) {
        margin-bottom: 40px;
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
        background: ${color('gray', '100')};
        border-radius: 7px;
        border: 1px solid ${color('gray', '60')};

        &:hover {
            background: ${color('gray', '70')};
            border: 1px solid ${color('gray', '0')};

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
    .bokjak {
        width: 32px;
        height: auto;
        margin-left: -4px;

        ${media.mobile} {
            width: 27px;
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

    ${media.mobile} {
        font-size: ${font('detail', 'sm')};
    }
`;
