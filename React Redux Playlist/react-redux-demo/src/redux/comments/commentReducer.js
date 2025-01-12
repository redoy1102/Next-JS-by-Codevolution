import { FETCH_COMMENTS_FAILED, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./commentTypes"


const initialState = {
    loading: false,
    comments: [],
    error: ''
}

const commentsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_COMMENTS_REQUEST:
            return{
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
                error: ''
            }
        case FETCH_COMMENTS_FAILED:
            return {
                loading: false,
                comments: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default commentsReducer;