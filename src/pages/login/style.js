import styled from 'styled-components';
import { color } from '../../styled/theme';

export const LoginWrap = styled.div`
    background-color: ${color('gray', '50')};
    margin: 80px 0;
    img {
        width: 140px;
        height: 40px;
    }
`;

export const LoginContent = styled.div`
    background-color: ${color('gray', '30')};
`;

export const LoginHeader = styled.div``;

export const LoginButtons = styled.div`
    botton {
        color: #00000070;
    }
`;
