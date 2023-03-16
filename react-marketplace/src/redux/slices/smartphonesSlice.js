import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  smartphonesItems: [],
  status: 'loading',
};

export const fetchSmartphones = createAsyncThunk(
  'smartphones/fetchSmartphonesStatus',
  async (params) => {
    const { order, sortBy, search, currentPage } = params;
    const smartphonesItemsResponse = await axios.get(
      `http://localhost:3005/smartphones?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`,
    );

    return smartphonesItemsResponse.data;
  },
);

export const productSlice = createSlice({
  name: 'smartphones',
  initialState,
  reducers: {
    setSmartphonesItems: (state, action) => {
      state.smartphonesItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSmartphones.fulfilled, (state, action) => {
      state.smartphonesItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchSmartphones.pending, (state) => {
      state.status = 'loading';
      state.smartphonesItems = [];
    });
    builder.addCase(fetchSmartphones.rejected, (state, action) => {
      state.status = 'error';
      state.smartphonesItems = [];
    });
  },
});

export const { setSmartphonesItems } = productSlice.actions;

export default productSlice.reducer;
