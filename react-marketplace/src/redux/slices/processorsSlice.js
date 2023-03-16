import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  processorsItems: [],
  status: 'loading',
};

export const fetchProcessors = createAsyncThunk(
  'processors/fetchprocessorsStatus',
  async (params) => {
    const { order, sortBy, search, currentPage } = params;
    const processorsItemsResponse = await axios.get(
      `http://localhost:3005/processors?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`,
    );

    return processorsItemsResponse.data;
  },
);

export const productSlice = createSlice({
  name: 'processors',
  initialState,
  reducers: {
    setprocessorsItems: (state, action) => {
      state.processorsItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProcessors.fulfilled, (state, action) => {
      state.processorsItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProcessors.pending, (state) => {
      state.status = 'loading';
      state.processorsItems = [];
    });
    builder.addCase(fetchProcessors.rejected, (state, action) => {
      state.status = 'error';
      state.processorsItems = [];
    });
  },
});

export const { setprocessorsItems } = productSlice.actions;

export default productSlice.reducer;
