import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        '코미디',
        '공포',
        '판타지',
        '무협',
        'SF',
        '예능',
        '다큐멘터리',
        '가족',
        '키즈',
        '액션',
        '로맨스',
        '스릴러',
        '어드벤처',
        '성인',
        '미스터리',
        '범죄',
        '애니메이션',
        '한국 TV 프로그램',
        '외국 TV 프로그램',
    ],
    isOpen: false,
    selectedCategory: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        toggleCategory: (state) => {
            state.isOpen = !state.isOpen;
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
});

export const { toggleCategory, selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
