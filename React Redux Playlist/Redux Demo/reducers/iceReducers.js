import { BUY_ICE } from "../actionTypes.js"

const initialIceState = {
    numOfIce: 10
}

const iceReducer = (state = initialIceState, action) => {
    switch(action.type){
        case BUY_ICE:
            return {
                ...state,
                numOfIce: state.numOfIce - 1
            }
        default:
            return state
    }
}

export default iceReducer;