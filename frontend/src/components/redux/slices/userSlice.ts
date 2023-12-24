import { createSlice } from "@reduxjs/toolkit";

const initialState = {userInfo: {
    displayName: null
}}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userInfo = action.payload
        }
    }
});

export const { setUserDetails } = userSlice.actions

export default userSlice.reducer