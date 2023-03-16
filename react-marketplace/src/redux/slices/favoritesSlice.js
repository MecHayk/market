import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsFavorites: (state, action) => {
      if (state.favoriteItems.find((favObj) => favObj.id === action.payload.id)) {
        state.favoriteItems = state.favoriteItems.filter((obj) => obj.id !== action.payload.id);
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
  },
});

export const { addItemsFavorites } = cartSlice.actions;

export default cartSlice.reducer;
