import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  washingsItems: [],
  status: 'loading',
};

export const fetchWashings = createAsyncThunk('washings/fetchwashingsStatus', async (params) => {
  const { order, sortBy, search, currentPage } = params;
  const washingsItemsResponse = await axios.get(
    `http://localhost:3005/washings?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`,
  );

  return washingsItemsResponse.data;
});

export const productSlice = createSlice({
  name: 'washings',
  initialState,
  reducers: {
    setWashingsItems: (state, action) => {
      state.washingsItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWashings.fulfilled, (state, action) => {
      state.washingsItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchWashings.pending, (state) => {
      state.status = 'loading';
      state.washingsItems = [];
    });
    builder.addCase(fetchWashings.rejected, (state, action) => {
      state.status = 'error';
      state.washingsItems = [];
    });
  },
});

export const { setWashingsItems } = productSlice.actions;

export default productSlice.reducer;
