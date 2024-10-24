import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    // { id: 1, title: 'product 1'},
    // { id: 2, title: 'product 2'},
  ],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload

      return [
        ...state,
        {
          ...newProduct,
        }
      ]
    },
    clearCart: (state) => {
      return []
    }
  }
})

export default cartSlice.reducer

export const { addToCart, clearCart } = cartSlice.actions