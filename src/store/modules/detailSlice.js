// detailSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { getContentDetail } from './getThunk';
// 상세페이지

const initialState = {
    loading: false,
    error: null,
    isDetailOpen: false,
    currentContent: null,
    currentGenre: null,
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
            state.currentContent = null;
        },
        openDetailModal: (state, action) => {
            state.isDetailOpen = true;
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
    extraReducers: (builder) => {
        builder
            .addCase(getContentDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getContentDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.currentContent = action.payload;
            })
            .addCase(getContentDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
