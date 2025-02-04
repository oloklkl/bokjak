import { createSlice } from '@reduxjs/toolkit';
// 영상 재생 페이지
const initialState = {};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {},
});

export const videoActions = videoSlice.actions;
export default videoSlice.reducer;
