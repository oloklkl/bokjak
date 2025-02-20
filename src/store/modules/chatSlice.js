import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    chatData: [],
    isChatOpen: false,
    isEmojiOpen: false,
    emojiArray: [],
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
            const emoji = action.payload.emoji;
            const newEmojis = Array.from(
                {
                    length:
                        Math.floor(Math.random() * 3) + 8,
                },
                () => ({
                    id: uuidv4(),
                    emoji,
                    left: Math.random() * 20 - 10,
                    delay: Math.random() * 0.5,
                    duration: Math.random() * 2 + 1.5,
                })
            );
            state.emojiArray = [
                ...state.emojiArray,
                ...newEmojis,
            ];
            state.isEmojiOpen = false;
        },
        removeEmoji: (state, action) => {
            const id = action.payload;
            state.emojiArray = state.emojiArray.filter(
                (item) => item.id !== id
            );
        },
    },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
