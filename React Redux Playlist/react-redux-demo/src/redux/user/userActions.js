import axios from "axios"
import { FETCH_USERS_FAILED, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetch_user_request = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetch_user_success = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetch_user_failed = error => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetch_user_request())

        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(fetch_user_success(response.data))
        }
        catch(error){
            dispatch(fetch_user_failed(error.message))
        }
    }
}