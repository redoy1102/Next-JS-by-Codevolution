import pkg from "redux-logger"; // Import redux-logger
import { createStore, applyMiddleware } from "redux"; // Import redux functions
import rootReducer from "./reducers/rootReducer.js"; // Import your root reducer

const { createLogger } = pkg;

const logger = createLogger(); // Create logger middleware

// Create Redux store with logger middleware
const store = createStore(rootReducer, applyMiddleware(logger));

export default store; // Export the store