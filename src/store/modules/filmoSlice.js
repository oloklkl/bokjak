import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const filmoSlice = createSlice({
    name: 'filmo',
    initialState,
    reducers: {},
});

export const filmoActions = filmoSlice.actions;
export default filmoSlice.reducer;
