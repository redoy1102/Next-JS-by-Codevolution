import { createSlice } from "@reduxjs/toolkit"
import { createFetchThunk } from "../../utils/createFetchThunk";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createFetchThunk(
    "user/fetchUsers", 
    "https://jsonplaceholder.typicode.com/users"
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}, // No synchronous reducers in this case
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchUsers.fulfilled, (state, { payload }) => {
            state.loading = false,
            state.users = payload,
            state.error = null
        })
        .addCase(fetchUsers.rejected, (state, { payload }) => {
            state.loading = false,
            state.users = [],
            state.error = payload
        })
    }
})

export default userSlice.reducer