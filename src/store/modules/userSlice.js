import { createSlice } from '@reduxjs/toolkit';
// 메인페이지
const initialState = {
    bokjakAlarm: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBokjakAlarm: (state, action) => {
            const exists = state.bokjakAlarm.some(
                (alarm) => alarm.id === action.payload.id
            );

            if (exists) {
                // 이미 존재하면 삭제
                state.bokjakAlarm =
                    state.bokjakAlarm.filter(
                        (alarm) =>
                            alarm.id !== action.payload.id
                    );
            } else {
                // 존재하지 않으면 추가
                state.bokjakAlarm = [
                    ...state.bokjakAlarm,
                    action.payload,
                ];
            }
        },
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
