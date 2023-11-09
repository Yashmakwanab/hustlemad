"use client";
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"customOrder",
    initialState:[],
    reducers:{
        addCustomProduct: (state, action) => {
            state.push(action.payload);
          },
        removeCustomProduct: (state, action) => {
            return state.filter((item)=>item.swagName !== action.payload);
        },
    }
})

export const {addCustomProduct,removeCustomProduct} = cartSlice.actions;
export default cartSlice.reducer;