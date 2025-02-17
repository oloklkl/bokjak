import styled from 'styled-components';
import { color, font } from '../styled/theme';
import { media } from '../styled/media';
import { X } from '@phosphor-icons/react';

const RecentSearchBtnWrap = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 32px;
    height: 55px;
    border-radius: 9999px;
    background-color: ${color('gray', '80')};
    color: ${color('gray', '30')};
    font-size: ${font('title', 'lg')};

    &:hover {
        background-color: ${color('gray', '70')};
        color: ${color('gray', '0')};
        border: 1px solid ${color('gray', '0')};

        .delete-icon {
            color: ${color('gray', '0')};
        }
    }

    .delete-icon {
        color: ${color('gray', '50')};
        transition: color 0.2s ease;

        &:hover {
            color: ${color('gray', '0')};
        }
    }

    ${media.tablet} {
        padding: 0 32px;
        height: 45px;
        font-size: ${font('detail', 'lg')};
    }

    ${media.mobile} {
        padding: 0 20px;
        height: 45px;
        font-size: ${font('detail', 'lg')};
    }
`;

const RecentSearchButton = ({ text, onRemove }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onRemove(text);
    };

    return (
        <RecentSearchBtnWrap onClick={handleClick}>
            {text}
            <X size={24} className='delete-icon' />
        </RecentSearchBtnWrap>
    );
};

export default RecentSearchButton;
