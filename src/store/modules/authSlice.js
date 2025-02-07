import { createSlice } from '@reduxjs/toolkit'
// 로그인, 로그아웃
const initialState = {}

export const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {},
});


export const authActions = authSlice.actions
export default authSlice.reducer
