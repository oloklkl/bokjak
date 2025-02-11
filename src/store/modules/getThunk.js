import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API
const options = {
    api_key: 'f32ee508f6b204c8a5175aaadefb59c7',
    language: 'ko-KR',
    with_origin_country: 'KR',
    // genres: 28,
};

export const getMovie = createAsyncThunk('movie/getMovie', async () => {
    const url = `https://api.themoviedb.org/3/discover/movie`;
    try {
        // const res = await axios.get(url);
        const res = await axios.get(url, {
            params: options,
        });
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
});

export const getTv = createAsyncThunk('movie/getMovie', async () => {
    const url = `https://api.themoviedb.org/3/discover/tv`;
    try {
        // const res = await axios.get(url);
        const res = await axios.get(url, {
            params: options,
        });
        return res.data.results;
    } catch (error) {
        console.log(error);
    }
});
