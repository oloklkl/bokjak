import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from './getThunk';

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
            .addCase(getMovie.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.seriesData = action.payload;
                state.error = null;
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.loading = false;
            });
    },
});
export const tvActions = tvSlice.actions;
export default tvSlice.reducer;
