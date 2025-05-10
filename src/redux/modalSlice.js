import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: 0,
  },
  reducers: {
    modalOpenFunc: (state) => {
    
      state.value += 1
    }
 //   incrementByAmount: (state, action) => {
 //     state.value += action.payload
  //  },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = modalSlice.actions

export default modalSlice.reducer