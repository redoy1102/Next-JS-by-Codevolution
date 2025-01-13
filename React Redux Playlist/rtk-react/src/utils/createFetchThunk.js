import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createFetchThunk = (type, api) => {
    return createAsyncThunk(
        type,
        async (_, { rejectWithValue }) => {
            try{
                const response = await axios.get(api)
                return response.data;
            }
            catch(error){
                return rejectWithValue(error.message)
            }
        }
    )
}
