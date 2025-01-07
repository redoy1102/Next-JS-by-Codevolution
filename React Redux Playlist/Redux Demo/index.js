import store from './store.js';
import { buy_cake, buy_ice } from './actions.js';

console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() =>
    console.log('Updated state:', store.getState())
);

store.dispatch(buy_cake());
store.dispatch(buy_ice());

unsubscribe();