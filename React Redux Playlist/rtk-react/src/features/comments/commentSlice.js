import { createSlice, } from "@reduxjs/toolkit"
import { createFetchThunk } from "../../utils/createFetchThunk";

const initialState = {
    loading: false,
    comments: [],
    error: ''
}

export const fetchComments = createFetchThunk(
    "comments/fetchComments",
    "https://jsonplaceholder.typicode.com/comments"
)

const commentsSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchComments.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchComments.fulfilled, (state, { payload }) => {
            state.loading = false,
            state.comments = payload,
            state.error = null
        })
        .addCase(fetchComments.rejected, (state, { payload }) => {
            state.loading = false,
            state.comments = [],
            state.error = payload
        })
    }
})

export default commentsSlice.reducer