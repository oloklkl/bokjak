import { createSlice } from '@reduxjs/toolkit';
// 영상 재생 페이지
const initialState = {
    isChatOpen: false,
    isOptionOpen: false,
};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        showChatWindow: (state, action) => {
            state.isChatOpen = !state.isChatOpen;
        },
        showOptions: (state, action) => {
            state.isOptionOpen = !state.isOptionOpen;
        },
    },
});

export const videoActions = videoSlice.actions;
export default videoSlice.reducer;
