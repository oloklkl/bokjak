import { MagnifyingGlass } from '@phosphor-icons/react';
import { CategoryButton, IconButton } from '../../ui';
import { Container, PopularList, SearchBar } from './style';
import { useState } from 'react';

const Search = () => {
    const [popularSearches, setPopularSearches] = useState([
        '이혼숙려캠프',
        '원경',
        '명탐정 코난 2025(자막)',
        '짱구는 못말려 24',
        '놀라운 토요일',
        '스터디그룹',
        '나 혼자 산다',
        '선재 업고 튀어',
        '유 퀴즈 온 더 블럭',
        '커플팰리스',
    ]);
    return (
        <Container>
            <SearchBar>
                <input type='text' placeholder='제목, 장르, 배우로 검색해보세요.' />
                <IconButton className='gray40 none' icon={<MagnifyingGlass size={24} />} text='MagnifyingGlass' />
            </SearchBar>

            <nav aria-label='최근 검색어'>
                <h2>최근 검색어</h2>
                <CategoryButton text='또 오해영' />
                <CategoryButton text='나 혼자 산다' />
                <CategoryButton text='런닝맨' />
                <CategoryButton text='위키드' />
                <CategoryButton text='너의 이름은' />
                <CategoryButton text='환승연애' />
            </nav>

            <div aria-labelledby='popular-searches'>
                <h2 id='popular-searches'>실시간 인기 검색어</h2>
                <PopularList as='ol'>
                    {popularSearches.map((item, index) => (
                        <li key={index}>
                            <span>{index + 1}</span>
                            {item}
                        </li>
                    ))}
                </PopularList>
            </div>
        </Container>
    );
};

export default Search;
