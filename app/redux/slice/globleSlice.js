import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  totalEstimate: 0,
  allProductList: [],
  productDetail: {},
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
    setAllProductList(state, action) {
      state.allProductList = action.payload
    },
    setProductDetail(state, action) {
      state.productDetail = action.payload
    },
  }
})

export const {
  setTotalPrice,
  setTotalEstimate,
  setAllProductList,
  setProductDetail
} = globleSlice.actions


export const selectTotalPrice = (state) => state?.globle?.totalPrice
export const selectTotalEstimate = (state) => state?.globle?.totalEstimate
export const selectAllProductList = (state) => state?.globle?.allProductList
export const selectProductDetail = (state) => state?.globle?.productDetail

export default globleSlice.reducer
