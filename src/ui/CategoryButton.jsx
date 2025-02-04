import styled from 'styled-components';
import { color, font } from '../styled/theme';
import { media } from '../styled/media';

const CategoryBtnWrap = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 0 46px;
    height: 60px;
    border-radius: 9999px;
    background-color: ${color('gray', '80')};
    color: ${color('gray', '30')};

    font-size: ${font('title', 'lg')};

    &:hover {
        background-color: ${color('gray', '70')};
        color: ${color('gray', '0')};
        border: 1px solid ${color('gray', '0')};
    }

    ${media.tablet} {
        padding: 0 46px;
        height: 50px;
        font-size: ${font('detail', 'lg')};
    }

    ${media.mobile} {
        padding: 0 30px;
        height: 40px;
        font-size: ${font('detail', 'sm')};
    }
`;

const CategoryButton = (props) => {
    return <CategoryBtnWrap>{props.text}</CategoryBtnWrap>;
};

export default CategoryButton;
