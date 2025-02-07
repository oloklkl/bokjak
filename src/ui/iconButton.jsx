import styled from 'styled-components';
import { media } from '../styled/media';
import { color } from '../styled/theme';

const IconBtnWrap = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    background-color: ${color('gray', '70')};
    border-radius: 9999px;

    svg {
        width: 24px;
        height: 24px;
        fill: ${color('gray', '0')};
    }

    ${media.mobile} {
        width: 33px;
        height: 33px;
        svg {
            width: 18px;
            height: 18px;
        }
    }

    &:hover {
        background-color: ${color('gray', '80')};
    }
    &.none {
        background-color: #00000000;
    }
    &.b30 {
        background-color: #00000030;
    }
    &.border {
        background-color: #00000030;
        border: 1px solid ${color('gray', '0')};
    }

    &.gray40 {
        svg {
            fill: ${color('gray', '40')};
        }
    }
    &.click {
        background-color: ${color('gray', '0')};
        svg {
            fill: ${color('primary', 'default')};
        }
    }
    &.small-icon {
        width: 24px;
        height: 24px;
        svg {
            width: 18px;
            height: 18px;
        }
        ${media.mobile} {
            width: 18px;
            height: 18px;
            svg {
                width: 14px;
                height: 14px;
            }
        }
    }
`;

const IconButton = (props) => {
    return (
        <IconBtnWrap {...props}>
            {props.icon}
            <span className='hide'>{props.text}</span>
        </IconBtnWrap>
    );
};

export default IconButton;
