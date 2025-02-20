import { createSlice } from '@reduxjs/toolkit'
import topdata from '../../assets/api/topData'
import soondate from '../../assets/api/soonDate'
import genredata from '../../assets/api/genreData'
import bokjakdata from '../../assets/api/bokjakData'
// 메인페이지
const initialState = {
  topData: topdata,
  soonDate: soondate,
  genreData: genredata,
  bokjakData: bokjakdata,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
})

export const mainActions = mainSlice.actions
export default mainSlice.reducer
