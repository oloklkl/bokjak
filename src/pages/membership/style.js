import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const MembershipContainer = styled.div`
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
        width: 100%;
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
    gap: 24px;

    ${media.tablet} {
        width: auto;
    }

    ${media.mobile} {
        width: 100%;
        gap: 16px;
    }
`;

export const Plan = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 5.5rem 0 2rem;
    border-radius: 10px;
    background-color: ${color('gray', '80')};
    transition: 0.3s;
    cursor: pointer;
    border: 2px solid transparent;

    ${media.mobile} {
        padding: 3rem 10px 1rem;
    }

    &:hover,
    &.selected {
        li {
            color: ${color('gray', '0')};
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

    &.premium,
    &.standard,
    &.basic {
        &:hover,
        &.selected {
            border: 2px solid ${color('primary', 'default')};
            /* border-image: linear-gradient(90deg, #dd33ff, #8000ff) 1; */
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
                margin-bottom: 2.5rem;
                font-size: ${font('body', 'xsm')};
            }

            .subtext {
                font-size: ${font('body', 'xsm')};
                color: ${color('gray', '50')};

                ${media.mobile} {
                    font-size: ${font('label', 'xsm')};
                    display: block;
                }
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
`;

export const DeviceSupportWrap = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 24px;

    ${media.tablet} {
        width: 708px;
    }

    ${media.mobile} {
        width: 100%;
        height: auto;
        gap: 16px;
        margin-top: 20px;
    }
`;

export const DeviceSupportItem = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: ${color('gray', '80')};
    padding: 1rem;
    transition: all 0.3s ease;
    border: ${({ isActive }) => (isActive ? '2px solid transparent' : '2px solid transparent')};
    border-image: ${({ isActive }) => (isActive ? 'linear-gradient(90deg, #dd33ff, #8000ff)' : 'none')};
    border-image-slice: 2;

    h3,
    li {
        color: ${({ isActive }) => (isActive ? color('gray', '0') : color('gray', '30'))};
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
            width: 55%;
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
