import { createSlice } from '@reduxjs/toolkit';
import { getTvShows } from './getThunk';

const initialState = {
    seriesData: [],
    loading: true,
    error: null,
    currentData: null,
};
export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTvShows.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTvShows.fulfilled, (state, action) => {
                state.loading = false;
                state.seriesData = action.payload;
                state.error = null;
            })
            .addCase(getTvShows.rejected, (state, action) => {
                state.loading = false;
            });
    },
});
export const tvActions = tvSlice.actions;
export default tvSlice.reducer;
