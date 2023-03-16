import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price, 0);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
