import styled from 'styled-components';
import { color } from '../styled/theme';

const BarBtnWrap = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: ${(props) => props.width};
    min-width: ${(props) => props.minWidth};
    height: ${(props) => props.height};
    background-color: ${color('primary', 'default')};
    color: ${color('gray', '0')};

    svg,
    img {
        width: 24px;
        height: 24px;
    }

    a {
        position: absolute;
        width: ${(props) => props.width};
        height: ${(props) => props.height};
    }

    &:hover {
        background-color: ${color('primary', '50')};
    }
    &.share {
        background-color: ${color('gray', '70')};
        &:hover {
            background-color: ${color('gray', '80')};
        }
    }
`;

const BarButton = ({ children, ...props }) => {
    return (
        <BarBtnWrap {...props}>
            {typeof props.icon === 'string' ? <img src={props.icon} alt={props.text} /> : <>{props.icon}</>}
            {children}
            {props.text}
        </BarBtnWrap>
    );
};

export default BarButton;
