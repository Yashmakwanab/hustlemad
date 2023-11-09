import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import globleReducer from "../slice/globleSlice";
import customOrderReducer from "../slice/customOrderSlice";

const store =configureStore({
    reducer:{
        cart:cartReducer,
        globle: globleReducer,
        customOrder: customOrderReducer
    }
})

export default store;