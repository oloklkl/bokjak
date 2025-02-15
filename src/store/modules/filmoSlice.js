import { createSlice } from '@reduxjs/toolkit';
import { getPeopleBySearch } from './getThunk';
// 감독, 출연자 필모그래피 페이지
const initialState = {
    loading: {
        movies: false,
        tvShows: false,
    },
    error: null,
    currentPerson: null,
    filmoData: null,
};

export const filmoSlice = createSlice({
    name: 'filmo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPeopleBySearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                getPeopleBySearch.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.currentPerson = action.payload;
                    state.filmoData =
                        state.currentPerson[0].known_for;
                }
            )
            .addCase(
                getPeopleBySearch.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                }
            );
    },
});

export const filmoActions = filmoSlice.actions;
export default filmoSlice.reducer;
