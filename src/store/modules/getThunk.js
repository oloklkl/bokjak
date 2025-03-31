// getThunk.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'f32ee508f6b204c8a5175aaadefb59c7';
const BASE_URL = 'https://api.themoviedb.org/3';

// 콘텐츠 목록 가져오기 (영화 & TV)
export const getMovies = createAsyncThunk(
    'content/getMovies',
    async () => {
        try {
            // 영화 기본 목록 가져오기
            const res = await axios.get(
                `${BASE_URL}/discover/movie`,
                {
                    params: {
                        api_key: API_KEY,
                        language: 'ko-KR',
                    },
                }
            );

            const movies = res.data.results;

            // 각 영화에 대한 로고 이미지 요청
            const moviesWithDetails = await Promise.all(
                movies.map(async (movie) => {
                    try {
                        const detailRes = await axios.get(
                            `${BASE_URL}/movie/${movie.id}`,
                            {
                                params: {
                                    api_key: API_KEY,
                                    language: 'ko-KR',
                                    append_to_response:
                                        'images',
                                    include_image_language:
                                        'en,null',
                                },
                            }
                        );

                        // 로고 이미지가 있으면 추가
                        const logoImage =
                            detailRes.data.images?.logos
                                ?.length > 0
                                ? detailRes.data.images
                                      .logos[0].file_path
                                : null;

                        return { ...movie, logoImage };
                    } catch (error) {
                        console.error(
                            `영화 ID ${movie.id}의 상세 정보를 가져오는 중 오류 발생:`,
                            error
                        );
                        return {
                            ...movie,
                            logoImage: null,
                        }; // 오류 발생 시 기본값 반환
                    }
                })
            );

            return moviesWithDetails;
        } catch (error) {
            console.error('getMovies 오류:', error);
            throw error;
        }
    }
);

export const getTvShows = createAsyncThunk(
    'content/getTvShows',
    async () => {
        const res = await axios.get(
            `${BASE_URL}/discover/tv`,
            {
                params: {
                    api_key: API_KEY,
                    language: 'ko-KR',
                    with_origin_country: 'KR',
                },
            }
        );
        return res.data.results;
    }
);

export const getTrending = createAsyncThunk(
    'content/getTrending',
    async () => {
        const res = await axios.get(
            `${BASE_URL}/trending/all/week`,
            {
                params: {
                    api_key: API_KEY,
                    language: 'ko-KR',
                },
            }
        );
        return res.data.results;
    }
);

// 공개예정작 정보 가져오기기
export const getUpcoming = createAsyncThunk(
    'content/getUpcoming',
    async () => {
        // 1. 개봉 예정 영화 목록 가져오기
        const res = await axios.get(
            `${BASE_URL}/movie/upcoming`,
            {
                params: {
                    api_key: API_KEY,
                    language: 'ko-KR',
                },
            }
        );

        const movies = res.data.results;

        // 2. 각 영화의 로고 이미지 가져오기
        const moviesWithLogos = await Promise.all(
            movies.map(async (movie) => {
                try {
                    const imageRes = await axios.get(
                        `${BASE_URL}/movie/${movie.id}/images`,
                        {
                            params: {
                                api_key: API_KEY,
                                language: 'ko',
                            },
                        }
                    );

                    // logos 배열에서 첫 번째 로고 이미지 선택
                    const logoImage = imageRes.data
                        .logos?.[0]?.file_path
                        ? `https://image.tmdb.org/t/p/original${imageRes.data.logos[0].file_path}`
                        : null;

                    return {
                        ...movie,
                        logoImage, // 로고 이미지 추가
                    };
                } catch (error) {
                    console.error(
                        `로고 이미지를 불러오는 데 실패함: ${movie.id}`,
                        error
                    );
                    return { ...movie, logoImage: null }; // 오류 발생 시 기본값 설정
                }
            })
        );

        return moviesWithLogos;
    }
);

// 콘텐츠 상세 정보 가져오기
export const getContentDetail = createAsyncThunk(
    'detail/getContentDetail',
    async ({ type, id }) => {
        const res = await axios.get(
            `${BASE_URL}/${type}/${id}`,
            {
                params: {
                    api_key: API_KEY,
                    language: 'ko-KR',
                    append_to_response:
                        'credits,videos,genres,seasons,images',
                    include_image_language: 'en,null',
                },
            }
        );
        if (type === 'tv' && res.data.seasons) {
            const seasonDetails = await Promise.all(
                res.data.seasons.map(async (season) => {
                    const seasonRes = await axios.get(
                        `${BASE_URL}/tv/${id}/season/${season.season_number}`,
                        {
                            params: {
                                api_key: API_KEY,
                                language: 'ko-KR',
                            },
                        }
                    );
                    return seasonRes.data;
                })
            );
            res.data.seasonDetails = seasonDetails;
        }
        return res.data;
    }
);

export const getContentByGenre = createAsyncThunk(
    'content/getContentByGenre',
    async ({ type, genreId }) => {
        // 장르 목록 가져오기
        const genreRes = await axios.get(
            `${BASE_URL}/genre/${type}/list`,
            {
                params: {
                    api_key: API_KEY,
                    language: 'ko-KR',
                },
            }
        );

        // 장르 ID와 이름 매핑
        const genreMap = genreRes.data.genres.reduce(
            (acc, genre) => {
                acc[genre.id] = genre.name;
                return acc;
            },
            {}
        );

        // 콘텐츠 데이터 가져오기
        const contentRes = await axios.get(
            `${BASE_URL}/discover/${type}`,
            {
                params: {
                    api_key: API_KEY,
                    language: 'ko-KR',
                    with_genres: Array.isArray(genreId)
                        ? genreId.join(',')
                        : genreId, // 여러 개일 경우, 쉼표로 연결
                },
            }
        );

        // genreId가 배열이면 포함된 장르가 하나라도 있는지 확인
        const filteredContent =
            contentRes.data.results.filter(
                (content) =>
                    Array.isArray(genreId)
                        ? content.genre_ids.some((id) =>
                              genreId.includes(id)
                          ) // genreId 배열에 하나라도 포함되면 유지
                        : content.genre_ids.includes(
                              genreId
                          ) // 단일 ID일 경우
            );

        // 콘텐츠에 장르 이름 추가
        const contentWithGenres = filteredContent.map(
            (content) => ({
                ...content,
                genre_names: content.genre_ids.map(
                    (id) => genreMap[id] || '알 수 없음'
                ),
            })
        );

        return contentWithGenres;
    }
);

export const getPeopleBySearch = createAsyncThunk(
    'people/getPeopleBySearch',
    async ({ query }) => {
        const res = await axios.get(
            `${BASE_URL}/search/person`,
            {
                params: {
                    api_key: API_KEY,
                    language: 'ko-KR',
                    query: query,
                },
            }
        );
        return res.data.results;
    }
);

export const getContentById = createAsyncThunk(
    'content/getContentById',
    async ({ type, id }) => {
        const res = await axios.get(
            `${BASE_URL}/${type}/${id}`,
            {
                params: {
                    api_key: API_KEY,
                    language: 'ko-KR',
                },
            }
        );
        return res.data;
    }
);
