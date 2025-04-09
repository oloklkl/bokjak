import styled from 'styled-components';
import { media } from '../../styled/media';
import { color, font } from '../../styled/theme';

export const PlansPageWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    ${media.tablet} {
        background-color: ${color('gray', '90')};
    }
`;

export const PlansInner = styled.div`
    padding: 40px 55px;
    width: auto;
    height: auto;
`;

export const PlansHeader = styled.div`
    text-align: center;
    margin-bottom: 60px;

    h2 {
        font-size: ${font('title', 'exlg')};
        font-weight: bold;

        ${media.tablet} {
            font-size: ${font('title', 'xlg')};
        }
        ${media.mobile} {
            font-size: ${font('title', 'lg')};
        }
    }

    span {
        display: block;
        font-size: ${font('title', 'md')};
        color: ${color('gray', '50')};
        margin-top: 20px;

        ${media.mobile} {
            margin-top: 10px;
            font-size: ${font('title', 'sm')};
        }
    }
`;

export const PlansFormBox = styled.div`
    label {
        width: 800px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 30px 20px;
        cursor: pointer;
        font-size: 19px;
        font-weight: bold;
        background-color: ${color('gray', '80')};
        border-radius: 7px;

        &.active {
            border: 2px solid ${color('primary', 'default')};
            background-color: ${color('gray', '70')};

            .plan-box {
                span,
                strong {
                    color: ${color('gray', '0')};
                }
            }
        }

        input[type='radio'] {
            appearance: none;
            width: 30px;
            height: 30px;
            border: 2px solid ${color('primary', 'default')};
            border-radius: 50%;
            background: transparent;
            cursor: pointer;

            &:checked {
                border-color: ${color('primary', 'default')};
                background-color: ${color('primary', 'default')};

                &:after {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 15px;
                    border: solid #fff;
                    border-width: 0 3px 3px 0; /* 체크 표시의 선 */
                    transform: rotate(43deg) translateX(4px) translateY(-4px);
                }
            }
        }

        ${media.tablet} {
            width: 600px;
        }

        ${media.mobile} {
            width: 350px;
        }

        .plan-box {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                display: inline-block;
                font-size: ${font('title', 'lg')};
                color: ${color('gray', '40')};
                margin-left: 20px;

                ${media.tablet} {
                    font-size: ${font('title', 'lg')};
                }
                ${media.mobile} {
                    font-size: ${font('body', 'md')};
                }

                .badge {
                    background-color: ${color('primary', 'default')};
                    color: ${color('gray', '0')};
                    font-size: ${font('label', 'sm')};
                    border-radius: 5px;
                    padding: 3px 5px;
                    margin-left: 5px;

                    ${media.mobile} {
                        font-size: ${font('body', 'xsm')};
                    }
                }
            }

            strong {
                font-size: ${font('title', 'xlg')};
                color: ${color('gray', '40')};

                ${media.tablet} {
                    font-size: ${font('title', 'lg')};
                }
                ${media.mobile} {
                    font-size: ${font('body', 'md')};
                }
            }

            .price {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
            small {
                font-size: ${font('body', 'sm')};
                color: ${color('gray', '40')};

                ${media.mobile} {
                    font-size: ${font('body', 'xsm')};
                }
            }
        }
    }

    .select {
        background: linear-gradient(90deg, #dd33ff, #8000ff);
        margin-top: 3rem;
        font-weight: bold;
        font-size: ${font('body', 'lg')};

        ${media.tablet} {
            width: 600px;
            font-size: ${font('label', 'lg')};
        }

        ${media.mobile} {
            width: 350px;
            height: 50px;
            font-size: ${font('label', 'sm')};
        }

        &:hover {
            transition: all 0.3s ease-in-out;
            background: linear-gradient(90deg, #b401cf, #4f01b6);
        }

        &:disabled {
            background: ${color('gray', '50')};
            cursor: not-allowed; /* 비활성화 상태 */
            opacity: 0.6; /* 시각적 비활성화 효과 */
        }
    }
`;
