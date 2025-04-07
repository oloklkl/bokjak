import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const MembershipContainer = styled.div`
    padding: 2rem;
    color: ${color('gray', '0')};
    width: 100%;

    h2 {
        margin-bottom: 8rem;
        font-size: ${font('title', 'xxlg')};
        font-weight: bold;
        text-align: center;

        ${media.tablet} {
            font-size: ${font('title', 'exlg')};
        }

        ${media.mobile} {
            font-size: ${font('title', 'xlg')};
        }

        span {
            ${media.mobile} {
                display: block;
            }
        }
    }
`;

export const LogoRows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const RowRight = styled.div`
    display: flex;
    gap: 24px;

    img {
        border-radius: 7px;
        height: 200px;

        ${media.tablet} {
            height: 100px;
        }

        ${media.mobile} {
            height: 65px;
        }
    }
`;

export const RowLeft = styled.div`
    display: flex;
    gap: 24px;

    img {
        border-radius: 7px;
        height: 200px;

        ${media.tablet} {
            height: 100px;
        }

        ${media.mobile} {
            height: 65px;
        }
    }
`;

export const MembershipHeader = styled.div`
    h2 {
        margin-top: 200px;

        ${media.tablet} {
            margin-top: 150px;
        }

        ${media.mobile} {
            margin-top: 120px;
        }
    }
`;

export const MembershipContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const MembershipWrap = styled.div`
    display: flex;
    width: 1000px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-weight: bold;

    ${media.tablet} {
        width: 708px;
    }

    ${media.mobile} {
        width: 348px;
    }
    h2 {
        margin-top: 200px;
    }

    .select {
        ${media.desktop} {
            display: none;
        }

        ${media.tablet} {
            background: linear-gradient(90deg, #dd33ff, #8000ff);
            border-radius: 7px;
            width: 100%;
            margin-top: 3rem;
            font-size: ${font('label', 'lg')};
            font-weight: bold;
        }

        ${media.mobile} {
            font-size: ${font('label', 'sm')};
            height: 42px;
        }

        &:hover {
            transition: all 0.3s ease-in-out;
            background: linear-gradient(90deg, #b401cf, #4f01b6);
        }
    }
`;

export const Plans = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.4rem;

    ${media.tablet} {
        width: auto;
    }

    ${media.mobile} {
        width: 348px;
        gap: 1.6rem;
    }
`;

export const Plan = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 5rem 0 2rem;
    border-radius: 10px;
    background-color: ${color('gray', '80')};
    transition: 0.3s;
    cursor: pointer;
    border: 2px solid transparent;

    ${media.mobile} {
        padding: 3.5rem 0 1rem;
    }

    &:hover {
        li {
            color: ${color('gray', '0')};

            .default-img {
                opacity: 0;
            }

            .hover-img {
                opacity: 1;
            }
        }

        h3 {
            background-color: ${color('primary', 'default')};
        }

        p,
        span {
            color: ${color('primary', 'default')};
        }

        img {
            filter: drop-shadow(0 0 0.75rem ${color('primary', 'default')});
        }

        .x {
            color: ${color('primary', 'default')};
        }
    }

    h3 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin-bottom: 3rem;
        font-size: ${font('title', 'exlg')};
        background-color: ${color('gray', '60')};
        border-radius: 7px 7px 0 0;
        padding: 10px;

        ${media.tablet} {
            font-size: ${font('title', 'xlg')};
        }

        ${media.mobile} {
            font-size: 1.1rem;
        }
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            margin-bottom: 0.5rem;
            font-size: ${font('body', 'sm')};
            color: ${color('gray', '30')};

            .x {
                ${media.mobile} {
                    display: none;
                }
            }

            ${media.mobile} {
                padding: 0 0.5rem;
                margin-bottom: 2rem;
                font-size: ${font('body', 'xsm')};
            }
        }

        li:nth-child(2),
        li:nth-child(4),
        li:nth-child(6),
        li:nth-child(8) {
            margin-bottom: 20px;
        }

        p {
            font-size: ${font('title', 'xxlg')};

            ${media.mobile} {
                display: none;
            }
        }

        span {
            font-size: ${font('title', 'lg')};

            ${media.mobile} {
            }
        }

        img {
            ${media.mobile} {
                display: none;
            }
        }
    }

    &.premium,
    &.standard,
    &.basic {
        &:hover {
            border: 2px solid ${color('primary', 'default')};
            /* border-image: linear-gradient(90deg, #dd33ff, #8000ff) 1; */
        }
    }
`;

export const DeviceSupportWrap = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    gap: 2.4rem;
    margin-top: 2.4rem;

    ${media.tablet} {
        width: 708px;
    }

    ${media.mobile} {
        width: 348px;
        margin-top: 1.6rem;
    }
`;

export const DeviceSupportItem = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: ${color('gray', '80')};
    padding: 1rem;
    transition: border-color 0.3s ease;

    &.hover {
        border: 2px solid ${color('primary', 'default')};
        border-image: linear-gradient(90deg, #dd33ff, #8000ff) 1;

        h3,
        li {
            color: ${color('gray', '0')};
        }
    }

    ${media.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.7rem;
    }

    h3 {
        display: block;
        width: 25%;
        border-radius: 7px;
        font-size: ${font('body', 'sm')};
        background-color: ${color('gray', '60')};
        padding: 10px 20px;

        ${media.tablet} {
            width: 40%;
            padding: 10px 15px;
        }

        ${media.mobile} {
            width: 60%;
            padding: 5px 10px;
            font-size: ${font('body', 'xsm')};
        }
    }

    ul {
        padding: 3rem;

        ${media.mobile} {
            padding: 1rem;
        }

        li {
            font-size: ${font('body', 'sm')};
            color: ${color('gray', '30')};

            ${media.mobile} {
                font-size: ${font('body', 'xsm')};
            }

            img {
                ${media.mobile} {
                    display: none;
                }
            }
        }

        li:nth-child(1) {
            margin-bottom: 1rem;
        }
    }
`;

export const MembershipInfo = styled.div`
    color: ${color('gray', '40')};
    margin-top: 8rem;
    font-size: 0.9rem;
    opacity: 0.8;

    h3 {
        font-size: ${font('detail', 'md')};
        font-weight: bold;
        margin-bottom: 10px;

        ${media.mobile} {
            font-size: ${font('detail', 'sm')};
        }
    }

    p {
        font-size: ${font('detail', 'sm')};

        ${media.mobile} {
            font-size: ${font('detail', 'xsm')};
        }
    }
`;
