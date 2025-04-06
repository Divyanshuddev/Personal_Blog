import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feature/users/usersSlice';
import loginReducer from '../feature/users/userLoginSlice';
export const store = configureStore({
    reducer:{
        users:userReducer,
        login:loginReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;