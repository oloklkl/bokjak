import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// API
const options = {
  api_key: 'f32ee508f6b204c8a5175aaadefb59c7',
  lenguage: 'ko-KR',
  genres: 28,
}

export const getMovie = createAsyncThunk('movie/getMovie', async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing`
  try {
    // const res = await axios.get(url);
    const res = await axios.get(url, {
      params: options,
    })
    return res.data.results
  } catch (error) {
    console.log(error)
  }
})
