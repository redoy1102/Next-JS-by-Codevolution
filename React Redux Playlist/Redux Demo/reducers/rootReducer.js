import { combineReducers } from "redux";
import cakeReducer from "./cakeReducer.js";
import iceReducer from "./iceReducers.js";

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

export default rootReducer;