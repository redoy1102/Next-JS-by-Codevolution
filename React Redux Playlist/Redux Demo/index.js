const BUY_CAKE = "Buy cake"

// Action creator
function buy_cake(){
    return {
        type: BUY_CAKE,
        info: "My first redux action",
    }
}

// Syntax of reducer: (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state
    }
}
 