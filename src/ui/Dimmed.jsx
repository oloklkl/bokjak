import styled from 'styled-components';

const DimmedWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #00000000;
    z-index: ${(props) => props.zindex};
    transition: all 0.2s ease;
    pointer-events: ${(props) => (props.className?.includes('dimmed-active') ? 'auto' : 'none')};

    &.dimmed-active {
        background-color: #00000080;
    }
`;

const Dimmed = (props) => {
    return <DimmedWrap {...props} className={`dimmed ${props.className}`}></DimmedWrap>;
};

export default Dimmed;
