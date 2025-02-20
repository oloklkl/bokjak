import { createSlice } from '@reduxjs/toolkit';

// 로그인, 로그아웃
const initialState = {
    joinData: JSON.parse(localStorage.getItem('joinData')) || [
        {
            id: 1,
            username: '복작',
            tel: '010-0000-0000',
            email: 'bokjak@naver.com',
            password: 'a1234',
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
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
