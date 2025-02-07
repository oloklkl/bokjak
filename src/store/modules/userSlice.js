import { createSlice } from '@reduxjs/toolkit';
// 메인페이지
const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
