import { createSlice } from '@reduxjs/toolkit';
// 상세페이지
const initialState = {
    isDetailOpen: true,
    isUrlModalOpen: false,
    isCreateOpen: false,
    isRoomCreated: false,
};

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        closeDetailModal: (state, action) => {
            state.isDetailOpen = false;
        },
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
            state.isRoomCreated = false;
        },
        openRoomCreatedModal: (state, action) => {
            state.isCreateOpen = false;
            state.isUrlModalOpen = true;
            state.isRoomCreated = true;
        },
    },
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
