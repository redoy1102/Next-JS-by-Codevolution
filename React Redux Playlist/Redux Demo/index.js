const redux = require('redux')
const createStore = redux.createStore;


const BUY_CAKE = "Buy cake"
const BUY_CHOCOLATE = "Buy chocolate"

// 1. Action creator
function buy_cake(){
    return {
        type: BUY_CAKE,
        info: "My first redux action",
    }
}

function buy_chocolate(){
    return {
        type: BUY_CHOCOLATE,
        info: "Buying my chocolate"
    }
}

// 2. Initial state
const initialState = {
    numOfCakes: 10,
    numOfChocolate: 20
}

// 3. Reducer
// Syntax of reducer: (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case BUY_CHOCOLATE:
            return {
                ...state,
                numOfChocolate: state.numOfChocolate - 1
            }

        default:
            return state
    }
}


// 4. Store

const store = createStore(reducer)
console.log('Initial state: ', store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buy_cake())      // 10-1 = 9
store.dispatch(buy_cake())      // 9-1 = 8
store.dispatch(buy_cake())      // 8-1 = 7

store.dispatch(buy_chocolate())

unsubscribe()