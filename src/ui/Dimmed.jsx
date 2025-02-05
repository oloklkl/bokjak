import React from 'react';
import styled from 'styled-components';

const DimmedWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
`;

const Dimmed = () => {
    return <DimmedWrap></DimmedWrap>;
};

export default Dimmed;
