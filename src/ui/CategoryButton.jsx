import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, font } from '../styled/theme';
import { media } from '../styled/media';

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 46px;
    height: 60px;
    border-radius: 9999px;
    font-size: ${font('title', 'lg')};
    background-color: ${({ $isActive }) => ($isActive ? color('gray', '0') : color('gray', '80'))};
    color: ${({ $isActive }) => ($isActive ? color('gray', '100') : color('gray', '30'))};
    border: ${({ $isActive }) => ($isActive ? `1px solid ${color('gray', '0')}` : 'none')};
    text-decoration: none;

    &:hover {
        background-color: ${color('gray', '70')};
        color: ${color('gray', '0')};
        border: 1px solid ${color('gray', '0')};
    }

    ${media.tablet} {
        height: 50px;
        font-size: ${font('detail', 'lg')};
    }

    ${media.mobile} {
        height: 40px;
        font-size: ${font('detail', 'sm')};
    }
`;

const CategoryButton = ({ text, to, isActive = false }) => {
    return (
        <StyledLink to={to} $isActive={isActive}>
            {text}
        </StyledLink>
    );
};

export default CategoryButton;
