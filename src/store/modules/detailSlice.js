import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {},
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
