import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  totalEstimate: 0,
  allSerpDestinations: [],
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
    setAllSerpDestinations(state,action){
        state.allSerpDestinations = action.payload
      },
  }
})

export const {
  setTotalPrice,
  setTotalEstimate,
  setAllSerpDestinations,
} = globleSlice.actions


export const selectTotalPrice = (state) => state?.globle?.totalPrice
export const selectTotalEstimate = (state) => state?.globle?.totalEstimate
export const selectAllSerpDestinations = (state) => state?.globle?.allSerpDestinations

export default globleSlice.reducer
