import styled from 'styled-components';
import { color, font } from '../../styled/theme';
import { media } from '../../styled/media';

export const Container = styled.div``;

export const SearchBar = styled.div`
    display: flex;
    margin: 40px 0 80px;

    ${media.mobile} {
        margin: 60px 0 40px;
    }

    .input-container {
        position: relative;
        width: 100%;
    }

    input {
        padding: 15px 50px 15px 15px;
        border: none;
        outline: none;
        width: 100%;
        height: 65px;
        color: ${color('gray', '0')};

        ${media.desktop} {
            border: none;
            background: ${color('gray', '90')};
            border-bottom: 2px solid ${color('gray', '0')};
            font-size: 28px;
        }

        ${media.tablet} {
            height: 53px;
            background: ${color('gray', '70')};
            font-size: ${font('title', 'xlg')};
            border-radius: 7px;
        }
        ${media.mobile} {
            height: 43px;
            font-size: ${font('title', 'md')};
        }
    }

    .search-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

        svg:hover {
            fill: ${color('gray', '0')};
        }
    }
`;

export const Nav = styled.nav`
    h2 {
        font-size: ${font('title', 'xlg')};
        font-weight: 700;
        margin-bottom: 24px;

        ${media.tablet} {
            font-size: ${font('title', 'md')};
        }
    }

    ${media.mobile} {
        display: none;
    }

    P {
        margin-bottom: 50px;
        color: ${color('gray', '30')};

        ${media.desktop} {
            font-size: ${font('title', 'lg')};
        }
        ${media.tablet} {
            font-size: ${font('body', 'md')};
        }
    }
`;

export const RecentKeywords = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    margin-bottom: 100px;
`;

/* 검색 결과 시작*/
export const SearchResults = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;

    h2 {
        font-weight: 700;
        margin-bottom: 24px;

        ${media.desktop} {
            font-size: ${font('title', 'xlg')};
        }
        ${media.tablet} {
            font-size: ${font('title', 'md')};
        }
    }
`;

export const SearchResultsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    padding: 80px 0 40px;
    gap: 40px;

    ${media.tablet} {
        padding: 60px 0 30px;
    }
    ${media.mobile} {
        gap: 20px;
        padding: 40px 0 20px;
    }
`;

export const SearchResultList = styled.div`
    width: 100%;
    max-width: 250px;
    display: flex;
    position: relative;

    li {
        display: block;
        width: 100%;
        max-width: 250px;
        margin-bottom: 16px;
        padding: 0 16px;
    }
`;

/* 검색 결과 끝*/

/* 인기 검색어 시작*/
export const Section = styled.div`
    h2 {
        font-weight: 700;
        margin-bottom: 24px;

        ${media.desktop} {
            font-size: ${font('title', 'xlg')};
        }
        ${media.tablet} {
            font-size: ${font('title', 'md')};
        }
    }
`;

export const PopularListContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${media.mobile} {
        flex-direction: column;
    }

    h2 {
        font-weight: 700;
        margin-bottom: 24px;

        ${media.desktop} {
            font-size: ${font('title', 'xlg')};
        }
        ${media.tablet} {
            font-size: ${font('title', 'md')};
        }
    }
`;

export const PopularList = styled.ol`
    list-style-type: none;
    padding: 0;

    li {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        font-size: ${font('title', 'lg')};
        color: ${color('gray', '30')};

        &:hover {
            color: ${color('gray', '0')};
            cursor: pointer;
        }

        ${media.tablet} {
            font-size: ${font('body', 'md')};
        }
        ${media.mobile} {
            font-size: ${font('body', 'sm')};
            margin-bottom: 20px;
        }
    }
    .left {
        margin-right: 100px;
    }
    .right {
        transform: translateX(-350px);

        ${media.tablet} {
            transform: translateX(-100px);
        }
        ${media.mobile} {
            transform: translateX(0);
        }
    }

    span {
        color: ${color('primary', 'default')};
        margin-right: 20px;
        width: 30px;
        text-align: center;
    }
`;
/* 인기 검색어 끝*/
