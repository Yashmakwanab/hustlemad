import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  totalEstimate: 0,
  allProductList: [],
  productDetail: {},
  quantityNumber: 100
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
    setQuantityNumber(state, action) {
      state.quantityNumber = action.payload
    },
    setCustomOrderList(state, action) {
      state.push(action.payload)
    },
  }
})

export const {
  setTotalPrice,
  setTotalEstimate,
  setAllProductList,
  setProductDetail,
  setCustomOrderList,
  setQuantityNumber,
} = globleSlice.actions


export const selectTotalPrice = (state) => state?.globle?.totalPrice
export const selectTotalEstimate = (state) => state?.globle?.totalEstimate
export const selectAllProductList = (state) => state?.globle?.allProductList
export const selectProductDetail = (state) => state?.globle?.productDetail
export const selectCustomOrderList = (state) => state?.globle?.customOrderList
export const selectQuantityNumber = (state) => state?.globle?.quantityNumber

export default globleSlice.reducer
