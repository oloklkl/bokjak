import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
    },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
