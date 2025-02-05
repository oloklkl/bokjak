import { createSlice } from '@reduxjs/toolkit'
// 감독, 출연자 필모그래피 페이지
const initialState = {}

export const filmoSlice = createSlice({
  name: 'filmo',
  initialState,
  reducers: {},
})

export const filmoActions = filmoSlice.actions
export default filmoSlice.reducer
