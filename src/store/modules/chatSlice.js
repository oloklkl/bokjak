import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    chatData: [],
    isChatOpen: false,
    isEmojiOpen: false,
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
        toggleEmoji: (state, action) => {
            state.isEmojiOpen = !state.isEmojiOpen;
        },
        setEmoji: (state, action) => {
            console.log(action.payload);
            state.isEmojiOpen = false;
        },
        removeEmoji: (state, action) => {
            const id = action.payload;
            state.emoji = state.emoji.filter((item) => item.id !== id);
        },
    },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
