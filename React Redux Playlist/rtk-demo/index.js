const store = require('./app/store')
const { cakeActions } = require('./features/cake/cakeSlice')
const { iceCreamActions } = require('./features/iceCream/iceCreamSlice')

console.log('Initial state:', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated state: ', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(1))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(1))

unsubscribe()