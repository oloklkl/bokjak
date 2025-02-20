import { configureStore } from '@reduxjs/toolkit';
import authR from './modules/authSlice';
import categoryR from './modules/categorySlice';
import detailR from './modules/detailSlice';
import filmoR from './modules/filmoSlice';
import mainR from './modules/mainSlice';
import videoR from './modules/videoSlice';
import movieR from './modules/movieSlice';
import userR from './modules/userSlice';
import chatR from './modules/chatSlice';
import tvR from './modules/tvSlice';
import contentR from './modules/contentSlice';
import navR from './modules/navSlice';
import windowR from './modules/windowSlice';

export const store = configureStore({
    reducer: { authR, categoryR, detailR, filmoR, mainR, videoR, movieR, userR, chatR, tvR, contentR, navR, windowR },
});
