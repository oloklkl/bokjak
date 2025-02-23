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

    const [recentSearches, setRecentSearches] = useState([
        '무파사: 라이온 킹',
        '모아나 2',
        '런닝맨',
        '위키드',
        '판다 플랜',
        '수퍼 소닉3',
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleRemove = useCallback((searchText) => {
        setRecentSearches((prevSearches) => prevSearches.filter((text) => text !== searchText));
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query) {
            const combinedItems = [...movies, ...tvShows];
            const filtered = combinedItems.filter((item) => {
                const title = item.title || item.name || '';
                return title.toLowerCase().includes(query.toLowerCase());
            });
            setFilteredResults(filtered);
        } else {
            setFilteredResults([]);
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
                            placeholder='제목, 장르, 배우로 검색해보세요.'
                            value={searchQuery}
                            onChange={handleSearch}
                        />
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

                {/* 검색 결과 */}
                {searchQuery && (
                    <SearchResults>
                        <h2>검색 결과</h2>
                        <SearchResultsContainer>
                            {filteredResults.length > 0 ? (
                                filteredResults.map((item, index) => (
                                    <SearchResultList key={index}>
                                        <li>
                                            <ThumbnailCard content={item} />
                                        </li>
                                    </SearchResultList>
                                ))
                            ) : (
                                <p>검색 결과가 없습니다.</p>
                            )}
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
