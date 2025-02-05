import { createSlice } from '@reduxjs/toolkit'
import introdata from '../../assets/api/mainIntro'
// 메인페이지
const initialState = {
  introData: introdata,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
})

export const mainActions = mainSlice.actions
export default mainSlice.reducer
