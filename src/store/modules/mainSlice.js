import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {},
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;
