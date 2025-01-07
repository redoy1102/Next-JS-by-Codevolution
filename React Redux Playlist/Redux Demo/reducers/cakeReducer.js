import { BUY_CAKE } from "../actionTypes.js"

const initialCakeState = {
    numOfCake: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            }
        default:
            return state
    }
}

export default cakeReducer;