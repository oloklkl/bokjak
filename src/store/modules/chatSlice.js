import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    chatData: [],
    isChatOpen: false,
    emoji: [],
    currentEmoji: '',
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        toggleChatWindow: (state, action) => {
            state.isChatOpen = !state.isChatOpen;
        },
        addChat: (state, action) => {
            const text = action.payload;
            state.chatData = [
                {
                    id: uuidv4(),
                    ...text,
                },
                ...state.chatData,
            ];
        },
        setEmoji: (state, action) => {
            const NewEmoji = Array.from({ length: 10 }, () => ({
                id: uuidv4(),
                duration: Math.random() * 1.5 + 1,
            }));
            state.emoji = [state.emoji, NewEmoji];
            state.currentEmoji = action.payload;
        },
        removeEmoji: (state, action) => {
            const id = action.payload;
            state.emoji = state.emoji.filter((item) => item.id !== id);
        },
    },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
