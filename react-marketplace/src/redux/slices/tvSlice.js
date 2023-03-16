import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tvItems: [],
  status: 'loading',
};

export const fetchTv = createAsyncThunk('tv/fetchtvStatus', async (params) => {
  const { order, sortBy, search, currentPage } = params;
  const tvItemsResponse = await axios.get(`http://localhost:3005/tv?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`);

  return tvItemsResponse.data;
});

export const productSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    setTvItems: (state, action) => {
      state.tvItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTv.fulfilled, (state, action) => {
      state.tvItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchTv.pending, (state) => {
      state.status = 'loading';
      state.tvItems = [];
    });
    builder.addCase(fetchTv.rejected, (state, action) => {
      state.status = 'error';
      state.tvItems = [];
    });
  },
});

export const { setTvItems } = productSlice.actions;

export default productSlice.reducer;
