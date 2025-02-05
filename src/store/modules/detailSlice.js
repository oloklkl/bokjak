import { createSlice } from '@reduxjs/toolkit'
// 상세페이지
const initialState = {}

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
})

export const detailActions = detailSlice.actions
export default detailSlice.reducer
