import styled from 'styled-components';
import { font } from '../../styled/theme';

export const SubWrap = styled.div`
    h2 {
        font-size: ${font('title', 'xxlg')};
        font-weight: 700;
    }
`;

export const VisualWrap = styled.section`
    width: 100%;
    height: 800px;
    position: relative;
`;
export const CategoryWrap = styled.div`
    h2 {
        margin-top: 80px;
    }
`;

export const ButtonWrap = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 28px;
    margin: 40px 0 80px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ContentWrap = styled.div``;
