import { createSlice } from '@reduxjs/toolkit';
import { getMovies, getTvShows } from './getThunk';

const initialState = {
    movies: [],
    tvShows: [],
    loading: false,
    error: null,
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getTvShows.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTvShows.fulfilled, (state, action) => {
                state.loading = false;
                state.tvShows = action.payload;
            })
            .addCase(getTvShows.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default contentSlice.reducer;
