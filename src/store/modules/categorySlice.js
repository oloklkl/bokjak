import { createSlice } from '@reduxjs/toolkit';
// 카테고리별 콘텐츠 페이지
const initialState = {};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
