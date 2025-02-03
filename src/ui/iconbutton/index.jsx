import React from 'react';
import { ButtonStyle } from './style';

const IconBtn = (props) => {
    const { icon, text } = props;

    return (
        <ButtonStyle>
            <button className="">
                {icon}
                <span className="hide">{text}</span>
            </button>
        </ButtonStyle>
    );
};

export default IconBtn;
