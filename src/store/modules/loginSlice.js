import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
