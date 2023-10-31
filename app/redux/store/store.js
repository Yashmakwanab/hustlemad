import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import globleReducer from "../slice/globleSlice";

const store =configureStore({
    reducer:{
        cart:cartReducer,
        globle: globleReducer,
    }
})

export default store;