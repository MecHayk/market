import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  fridgesItems: [],
  status: 'loading',
};

export const fetchFridges = createAsyncThunk('fridges/fetchfridgesStatus', async (params) => {
  const { order, sortBy, search, currentPage } = params;
  const fridgesItemsResponse = await axios.get(`http://localhost:3005/fridges?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`);

  return fridgesItemsResponse.data;
});

export const productSlice = createSlice({
  name: 'fridges',
  initialState,
  reducers: {
    setFridgesItems: (state, action) => {
      state.fridgesItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFridges.fulfilled, (state, action) => {
      state.fridgesItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchFridges.pending, (state) => {
      state.status = 'loading';
      state.fridgesItems = [];
    });
    builder.addCase(fetchFridges.rejected, (state, action) => {
      state.status = 'error';
      state.fridgesItems = [];
    });
  },
});

export const { setFridgesItems } = productSlice.actions;

export default productSlice.reducer;
