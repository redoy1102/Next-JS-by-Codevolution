const BUY_ICE = "Buy Ice"

function buy_ice(){
    return {
        type: BUY_ICE,
        info: "My first ice cream"
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}