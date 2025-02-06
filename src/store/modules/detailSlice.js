import { createSlice } from '@reduxjs/toolkit';
// 상세페이지
const initialState = {
    isUrlModalOpen: false,
    isCreateOpen: false,
};

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        openUrlModal: (state, action) => {
            state.isUrlModalOpen = true;
        },
        closeUrlModal: (state, action) => {
            state.isUrlModalOpen = false;
        },
        openCreateModal: (state, action) => {
            state.isCreateOpen = true;
        },
        closeCreateModal: (state, action) => {
            state.isCreateOpen = false;
        },
        closeAllModal: (state, action) => {
            state.isCreateOpen = false;
            state.isUrlModalOpen = false;
        },
    },
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
