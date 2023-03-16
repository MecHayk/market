import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  page: '',
  nootebooksItems: [],
  status: 'loading',
};

export const fetchNootebooks = createAsyncThunk(
  'nootebooks/fetchNootebooksStatus',
  async (params) => {
    const { order, sortBy, search, currentPage, page } = params;
    const nootebooksItemsResponse = await axios.get(
      `http://localhost:3005/nootebooks?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`,
    );

    return nootebooksItemsResponse.data;
  },
);

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
  name: 'nootebooks',
  initialState,
  reducers: {
    setnootebooksItems: (state, action) => {
      state.nootebooksItems = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNootebooks.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchNootebooks.fulfilled, (state, action) => {
      state.nootebooksItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchNootebooks.rejected, (state, action) => {
      state.status = 'error';
    });
  },
});

export const { setNootebooksItems, setPage } = productSlice.actions;

export default productSlice.reducer;
