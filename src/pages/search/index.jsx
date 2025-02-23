import { MagnifyingGlass } from '@phosphor-icons/react';
import { IconButton, RecentSearchButton } from '../../ui';
import { Container, Nav, PopularList, PopularListContainer, RecentKeywords, SearchBar, Section } from './style';
import BottomNavigation from '../../common/bottomnavigation';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
    const { movies, tvShows } = useSelector((state) => state.contentR);
    const isAuthed = useSelector((state) => state.authR.authed);

    const [recentSearches, setRecentSearches] = useState([
        '무파사: 라이온 킹',
        '모아나2',
        '런닝맨',
        '위키드',
        '판다 플랜',
        '수퍼 소닉3',
    ]);

    const handleRemove = useCallback((searchText) => {
        setRecentSearches((prevSearches) => prevSearches.filter((text) => text !== searchText));
    }, []);

    const combinedPopularItems = [...movies, ...tvShows];
    const firstHalf = combinedPopularItems.slice(0, 5);
    const secondHalf = combinedPopularItems.slice(5, 10);

    return (
        <Container>
            <div className='inner'>
                <SearchBar>
                    <div className='input-container'>
                        <input type='text' placeholder='제목, 장르, 배우로 검색해보세요.' />
                        <IconButton
                            className='search-icon gray40 none'
                            icon={<MagnifyingGlass size={24} />}
                            text='MagnifyingGlass'
                        />
                    </div>
                </SearchBar>

                <Nav aria-label='최근 검색어'>
                    <h2>최근 검색어</h2>
                    {isAuthed ? (
                        <RecentKeywords>
                            {recentSearches.map((text) => (
                                <RecentSearchButton key={text} text={text} onRemove={handleRemove} />
                            ))}
                        </RecentKeywords>
                    ) : (
                        <p>로그인을 해주세요.</p>
                    )}
                </Nav>

                <Section aria-labelledby='popular-searches'>
                    <h2 id='popular-searches'>실시간 인기 검색어</h2>

                    <PopularListContainer>
                        <PopularList as='ol'>
                            {firstHalf.map((item, index) => (
                                <li key={index} className='left'>
                                    <span>{index + 1}</span>
                                    {item.title}
                                </li>
                            ))}
                        </PopularList>

                        <PopularList as='ol'>
                            {secondHalf.map((item, index) => (
                                <li key={index} className='right'>
                                    <span>{index + 6}</span>
                                    {item.title}
                                </li>
                            ))}
                        </PopularList>
                    </PopularListContainer>
                </Section>
                <BottomNavigation />
            </div>
        </Container>
    );
};

export default Search;
