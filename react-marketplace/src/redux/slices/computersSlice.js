import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  computersItems: [],
  status: 'loading',
};

export const fetchComputers = createAsyncThunk('computers/fetchcomputersStatus', async (params) => {
  const { order, sortBy, search, currentPage } = params;  
  const computersItemsResponse = await axios.get(`http://localhost:3005/computers?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`);

  return computersItemsResponse.data;
});

export const productSlice = createSlice({
  name: 'computers',
  initialState,
  reducers: {
    setComputersItems: (state, action) => {
      state.computersItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchComputers.fulfilled, (state, action) => {
      state.computersItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchComputers.pending, (state) => {
      state.status = 'loading';
      state.computersItems = [];
    });
    builder.addCase(fetchComputers.rejected, (state, action) => {
      state.status = 'error';
      state.computersItems = [];
    });
  },
});

export const { setComputersItems } = productSlice.actions;

export default productSlice.reducer;