import { configureStore } from "@reduxjs/toolkit";
import shopApiReducer from "../features/shopApi/shopApiSlice";
import homeReducer from "../features/home/homeSlice";

const store = configureStore({
    reducer:{
        shopApi:shopApiReducer,
        home:homeReducer
    }
})

export default store;