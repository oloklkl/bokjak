import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { IconButton, RecentSearchButton } from '../../ui';
import {
    Container,
    Nav,
    PopularList,
    PopularListContainer,
    RecentKeywords,
    SearchBar,
    Section,
    SearchResults,
    SearchResultsContainer,
    SearchResultList,
} from './style';
import BottomNavigation from '../../common/bottomnavigation';
import ThumbnailCard from '../../ui/ThumbnailCard';

const Search = () => {
    const { movies, tvShows } = useSelector((state) => state.contentR);
    const isAuthed = useSelector((state) => state.authR.authed);

    const [recentSearches, setRecentSearches] = useState(['무파사: 라이온 킹', '런닝맨', '판다 플랜']);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleRemove = useCallback((searchText) => {
        setRecentSearches((prevSearches) => prevSearches.filter((text) => text !== searchText));
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const queryWithoutSpaces = query.replace(/\s+/g, '').toLowerCase();

        if (query.trim()) {
            const combinedItems = [...movies, ...tvShows];
            const filtered = combinedItems.filter((item) => {
                const title = item?.title || item?.name || '';
                const titleWithoutSpaces = title.replace(/\s+/g, '').toLowerCase(); // 제목에서도 공백을 제거
                return titleWithoutSpaces.includes(queryWithoutSpaces);
            });
            setFilteredResults(filtered);
        } else {
            setFilteredResults([]);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && searchQuery.trim()) {
            setRecentSearches((prevSearches) => {
                const updatedSearches = prevSearches.includes(searchQuery)
                    ? prevSearches
                    : [searchQuery, ...prevSearches].slice(0, 10);
                return updatedSearches;
            });
        }
    };

    const combinedPopularItems = [...movies, ...tvShows];
    const firstHalf = combinedPopularItems.slice(0, 5);
    const secondHalf = combinedPopularItems.slice(5, 10);

    return (
        <Container>
            <div className='inner'>
                <SearchBar>
                    <div className='input-container'>
                        <input
                            type='text'
                            placeholder='제목으로 검색해보세요.'
                            value={searchQuery}
                            onChange={handleSearch}
                            onKeyDown={handleKeyDown}
                        />
                        <IconButton
                            className='search-icon gray40 none'
                            icon={<MagnifyingGlass size={24} />}
                            text='MagnifyingGlass'
                        />
                    </div>
                </SearchBar>

                {/* 최근 검색어 */}
                <Nav aria-label='최근 검색어'>
                    <h2>최근 검색어</h2>
                    {isAuthed ? (
                        <RecentKeywords>
                            {recentSearches.map((text) => (
                                <RecentSearchButton key={text} text={text} onRemove={handleRemove} />
                            ))}
                        </RecentKeywords>
                    ) : (
                        <p>로그인하면 검색 기록이 저장돼요! 😊</p>
                    )}
                </Nav>

                {/* 검색 결과 */}
                {searchQuery.trim() && filteredResults.length > 0 && (
                    <SearchResults>
                        <h2>검색 결과</h2>
                        <SearchResultsContainer>
                            {filteredResults.map((item, index) => (
                                <SearchResultList key={index}>
                                    <li>
                                        <ThumbnailCard content={item} />
                                    </li>
                                </SearchResultList>
                            ))}
                        </SearchResultsContainer>
                    </SearchResults>
                )}

                {/* 인기 검색어 */}
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
