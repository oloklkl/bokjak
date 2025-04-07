import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getHighRated,
    getNowPlaying,
    getPopular,
    getRecommended,
    getTopRated,
    getTrending,
} from '../../store/modules/getThunk';

const titles = {
    movie: [
        '🎬 지금 뜨는 영화', // trending
        '🔥 꼭 봐야 할 최신작', // nowplaying
        '💎 인생 영화 컬렉션', //vote순
        '🏆 평점 만점 영화', //toprated
        '🍿 모두가 주목하는 화제작', //popular
        '⭐ 후회 없는 추천작', //popular
    ],
    series: [
        '📺 요즘 핫한 시리즈',
        '🎉 새롭게 공개된 최신작',
        '💎 두고두고 볼 명작',
        '🔥 입소문 난 인기작',
        '🏆 믿고 보는 평점 고득점',
        '⭐ 정주행 필수 추천작',
    ],
};

const SubPage2 = () => {
    const dispatch = useDispatch();
    const currentCategory = location.pathname.split('/')[2]; // 'movie' or 'series'
    const {
        trending,
        nowPlaying,
        highRated,
        topRated,
        popular,
        recommended,
    } = useSelector((state) => state.contentR);

    useEffect(() => {
        const type =
            currentCategory === 'movie' ? 'movie' : 'tv';

        dispatch(getTrending(type));
        dispatch(getNowPlaying(type));
        dispatch(getHighRated(type));
        dispatch(getTopRated(type));
        dispatch(getPopular(type));
        dispatch(getRecommended(type));
    }, [currentCategory, dispatch]);

    return (
        <div className="inner">
            <div>
                <div>TRENDING</div>
                {trending.map((item) => (
                    <span key={item.id}>
                        {item.title || item.name} |
                    </span>
                ))}
            </div>
            <br />
            <div>
                <div>NOW PLAYING</div>
                {nowPlaying.map((item) => (
                    <span key={item.id}>
                        {item.title || item.name} |
                    </span>
                ))}
            </div>
            <br />
            <div>
                <div>HIGH RATED</div>
                {highRated.map((item) => (
                    <span key={item.id}>
                        {item.title || item.name} |
                    </span>
                ))}
            </div>
            <br />
            <div>
                <div>TOP RATED</div>
                {topRated.map((item) => (
                    <span key={item.id}>
                        {item.title || item.name} |
                    </span>
                ))}
            </div>
            <br />
            <div>
                <div>POPULAR</div>
                {popular.map((item) => (
                    <span key={item.id}>
                        {item.title || item.name} |
                    </span>
                ))}
            </div>
            <br />
            <div>
                <div>RECOMMENDED</div>
                {recommended.map((item) => (
                    <span key={item.id}>
                        {item.title || item.name} |
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SubPage2;
