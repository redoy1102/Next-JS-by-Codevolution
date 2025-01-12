import { combineReducers } from "redux";
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './ice_cream/iceCreamReducer'
import usersReducer from './user/userReducer'
import commentsReducer from "./comments/commentReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: usersReducer,
    comments: commentsReducer
})

export default rootReducer;