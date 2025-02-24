import { createSlice } from '@reduxjs/toolkit';
import { useEffect } from 'react';
// 로그인, 로그아웃
const initialState = {
    joinData: JSON.parse(localStorage.getItem('joinData')) || [
        {
            id: 1,
            username: '복작',
            tel: '010-0000-0000',
            email: 'bokjak@naver.com',
            password: 'a1234',
            likedContent: [],
            bookmarkedContent: [],
            soonAlarm: [],
            bokjakAlarm: [],
        },
    ],
    authed: JSON.parse(localStorage.getItem('authed')) || false,
    user: JSON.parse(localStorage.getItem('user')) || null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const newItem = state.joinData.find((item) => item.email === email);
            if (newItem && newItem.password === password) {
                state.authed = true;
                state.user = newItem;
                localStorage.setItem('authed', JSON.stringify(true));
                localStorage.setItem('user', JSON.stringify(newItem));
            } else {
                state.authed = false;
                localStorage.removeItem('authed');
                localStorage.removeItem('user');
            }
        },
        logout: (state) => {
            state.authed = false;
            state.user = null;
            localStorage.removeItem('authed');
            localStorage.removeItem('user');
        },
        signup: (state, action) => {
            const user = action.payload;
            const newId = state.joinData.length ? state.joinData[state.joinData.length - 1].id + 1 : 1;
            state.joinData.push({ id: newId, ...user });
            localStorage.setItem('joinData', JSON.stringify(state.joinData));
        },
        setLiked: (state, action) => {
            const newLike = action.payload;

            const index = state.user.likedContent.findIndex((item) => item.id === newLike.id);

            if (index !== -1) {
                state.user.likedContent.splice(index, 1);
            } else {
                state.user.likedContent.push(newLike);
            }
        },
        setBookmarked: (state, action) => {
            const newBookmark = action.payload;

            const index = state.user.bookmarkedContent.findIndex((item) => item.id === newBookmark.id);

            if (index !== -1) {
                state.user.bookmarkedContent.splice(index, 1);
            } else {
                state.user.bookmarkedContent.push(newBookmark);
            }
        },
        setSoonAlarm: (state, action) => {
            const newSoon = action.payload;
            state.joinData.soonAlarm = [...state.joinData.soonAlarm, ...newSoon];
        },
        setBokjakAlarm: (state, action) => {
            const newBokjak = action.payload;
            state.joinData.bokjakAlarm = [...state.joinData.bokjakAlarm, ...newBokjak];
        },
    },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
