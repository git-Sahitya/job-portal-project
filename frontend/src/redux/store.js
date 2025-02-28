import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./authSlice";
import jobSlice from  './jobSlice'
import jobReducer from './jobSlice'


const store = configureStore({
    reducer: {
        auth : authReducer,
        job : jobSlice,
        jobs: jobReducer,

    }
})

export default store