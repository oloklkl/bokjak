import styled from 'styled-components';
import { font } from '../../styled/theme';

export const SubWrap = styled.div`
    h2 {
        font-size: ${font('title', 'xxlg')};
        font-weight: 700;
    }
`;

export const VisualWrap = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
`;
export const CategoryWrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 80px 0;
`;

export const ButtonWrap = styled.div`
    /* display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 28px; */
    margin: 40px 0 0;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ContentWrap = styled.div``;
