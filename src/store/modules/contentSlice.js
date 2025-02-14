import { createSlice } from '@reduxjs/toolkit';
import { getMovies, getTrending, getTvShows } from './getThunk';

const initialState = {
    movies: [],
    tvShows: [],
    trending: [],
    loading: {
        movies: false,
        tvShows: false,
        trending: false,
    },
    error: null,
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading.movies = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading.movies = false;
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading.movies = false;
                state.error = action.error.message;
            })
            .addCase(getTvShows.pending, (state) => {
                state.loading.tvShows = true;
            })
            .addCase(getTvShows.fulfilled, (state, action) => {
                state.loading.tvShows = false;
                state.tvShows = action.payload;
            })
            .addCase(getTvShows.rejected, (state, action) => {
                state.loading.tvShows = false;
                state.error = action.error.message;
            })
            .addCase(getTrending.pending, (state) => {
                state.loading.trending = true;
            })
            .addCase(getTrending.fulfilled, (state, action) => {
                state.loading.trending = false;
                state.trending = action.payload;
            })
            .addCase(getTrending.rejected, (state, action) => {
                state.loading.trending = false;
                state.error = action.error.message;
            });
    },
});

export default contentSlice.reducer;
