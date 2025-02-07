import { createSlice } from '@reduxjs/toolkit';
// 영상 재생 페이지
const initialState = {
    isChatOpen: false,
};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        showChatWindow: (state, action) => {
            state.isChatOpen = !state.isChatOpen;
        },
    },
});

export const videoActions = videoSlice.actions;
export default videoSlice.reducer;
