import { createSlice } from '@reduxjs/toolkit';
// 영상 재생 페이지
const initialState = {
    width: window.innerWidth,
};

export const windowSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        setWindowWidth: (state, action) => {
            state.width = action.payload;
        },
    },
});

export const windowActions = windowSlice.actions;
export default windowSlice.reducer;
