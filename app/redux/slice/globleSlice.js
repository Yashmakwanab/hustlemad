import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  totalEstimate: 0,
  allProductList: [],
}

export const globleSlice = createSlice({
  name: "globle",
  initialState,
  reducers: {
    setTotalPrice(state, action) {
      state.totalPrice = action.payload
    },
    setTotalEstimate(state, action) {
      state.totalEstimate = action.payload
    },
    setAllProductList(state,action){
        state.allProductList = action.payload
      },
  }
})

export const {
  setTotalPrice,
  setTotalEstimate,
  setAllProductList,
} = globleSlice.actions


export const selectTotalPrice = (state) => state?.globle?.totalPrice
export const selectTotalEstimate = (state) => state?.globle?.totalEstimate
export const selectAllProductList = (state) => state?.globle?.allProductList

export default globleSlice.reducer
