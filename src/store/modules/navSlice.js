import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeLink: null,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setActiveLink: (state, action) => {
            state.activeLink = action.payload;
        },
    },
});

export const { setActiveLink } = navSlice.actions;
export default navSlice.reducer;
