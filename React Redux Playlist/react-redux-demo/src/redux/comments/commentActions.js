import axios from "axios"
import { FETCH_COMMENTS_FAILED, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./commentTypes"

export const fetch_comments_request = () => {
    return{
        type: FETCH_COMMENTS_REQUEST
    }
}

export const fetch_comments_success = comments => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetch_comments_failed = error => {
    return {
        type: FETCH_COMMENTS_FAILED,
        payload: error
    }
}

export const fetchComments = dispatch => {
    return async (dispatch) => {
        dispatch(fetch_comments_request())

        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            dispatch(fetch_comments_success(response.data))
        }
        catch(error){
            dispatch(fetch_comments_failed(error.message))
        }
    }
}