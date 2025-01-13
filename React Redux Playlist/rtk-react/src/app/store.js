import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCreamSlice'
import usersReducer from '../features/user/userSlice'
import commentsReducer from '../features/comments/commentSlice'


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: usersReducer,
        comment: commentsReducer
    }
})

export default store