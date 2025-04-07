import { createSlice } from '@reduxjs/toolkit';
import {
    getHighRated,
    getMovies,
    getNowPlaying,
    getPopular,
    getRecommended,
    getTopRated,
    getTrending,
    getTvShows,
    getUpcoming,
} from './getThunk';

const initialState = {
    movies: [],
    tvShows: [],
    trending: [],
    nowPlaying: [],
    highRated: [],
    topRated: [],
    popular: [],
    recommended: [],
    upcoming: [],
    loading: {
        movies: false,
        tvShows: false,
        trending: false,
        upcoming: false,
        nowPlaying: false,
        highRated: false,
        topRated: false,
        popular: false,
        recommended: false,
    },
    error: null,
};

const handleAsyncCases = (
    builder,
    thunk,
    key,
    transform = (data) => data
) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.loading[key] = true;
        })
        .addCase(thunk.fulfilled, (state, action) => {
            state[key] = transform(action.payload);
            state.loading[key] = false;
        })
        .addCase(thunk.rejected, (state, action) => {
            state.loading[key] = false;
            state.error = action.error.message;
        });
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncCases(builder, getMovies, 'movies');
        handleAsyncCases(builder, getTvShows, 'tvShows');
        handleAsyncCases(builder, getTrending, 'trending');
        handleAsyncCases(
            builder,
            getUpcoming,
            'upcoming',
            (data) => data.filter((item) => item.logoImage)
        );
        handleAsyncCases(
            builder,
            getNowPlaying,
            'nowPlaying'
        );
        handleAsyncCases(
            builder,
            getHighRated,
            'highRated'
        );
        handleAsyncCases(builder, getTopRated, 'topRated');
        handleAsyncCases(builder, getPopular, 'popular');
        handleAsyncCases(
            builder,
            getRecommended,
            'recommended'
        );
    },
});

export default contentSlice.reducer;
