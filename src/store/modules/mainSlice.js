import { createSlice } from '@reduxjs/toolkit';
// 메인페이지
const initialState = {};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {},
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;
