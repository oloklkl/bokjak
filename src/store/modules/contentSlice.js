import { createSlice } from '@reduxjs/toolkit';
import {
    getMovies,
    getTrending,
    getTvShows,
    getUpcoming,
} from './getThunk';

const initialState = {
    movies: [],
    tvShows: [],
    trending: [],
    upcoming: [],
    loading: {
        movies: false,
        tvShows: false,
        trending: false,
        upcoming: false,
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
            .addCase(
                getMovies.fulfilled,
                (state, action) => {
                    state.loading.movies = false;
                    state.movies = action.payload;
                }
            )
            .addCase(
                getMovies.rejected,
                (state, action) => {
                    state.loading.movies = false;
                    state.error = action.error.message;
                }
            )
            .addCase(getTvShows.pending, (state) => {
                state.loading.tvShows = true;
            })
            .addCase(
                getTvShows.fulfilled,
                (state, action) => {
                    state.loading.tvShows = false;
                    state.tvShows = action.payload;
                }
            )
            .addCase(
                getTvShows.rejected,
                (state, action) => {
                    state.loading.tvShows = false;
                    state.error = action.error.message;
                }
            )
            .addCase(getTrending.pending, (state) => {
                state.loading.trending = true;
            })
            .addCase(
                getTrending.fulfilled,
                (state, action) => {
                    state.loading.trending = false;
                    state.trending = action.payload;
                }
            )
            .addCase(
                getTrending.rejected,
                (state, action) => {
                    state.loading.trending = false;
                    state.error = action.error.message;
                }
            )
            .addCase(getUpcoming.pending, (state) => {
                state.loading.upcoming = true;
            })
            .addCase(
                getUpcoming.fulfilled,
                (state, action) => {
                    const upcomingWithLogo =
                        action.payload.filter(
                            (item) => item.logoImage
                        );
                    state.loading.upcoming = false;
                    state.upcoming = upcomingWithLogo;
                }
            )
            .addCase(
                getUpcoming.rejected,
                (state, action) => {
                    state.loading.upcoming = false;
                    state.error = action.error.message;
                }
            );
    },
});

export default contentSlice.reducer;
