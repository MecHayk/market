import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  monitorsItems: [],
  status: 'loading',
};

export const fetchMonitors = createAsyncThunk('monitors/fetchmonitorsStatus', async (params) => {
  const { order, sortBy, search, currentPage } = params;
  const monitorsItemsResponse = await axios.get(
    `http://localhost:3005/monitors?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`,
  );

  return monitorsItemsResponse.data;
});

export const productSlice = createSlice({
  name: 'monitors',
  initialState,
  reducers: {
    setMonitorsItems: (state, action) => {
      state.monitorsItems = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMonitors.fulfilled, (state, action) => {
      state.monitorsItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchMonitors.pending, (state) => {
      state.status = 'loading';
      state.monitorsItems = [];
    });
    builder.addCase(fetchMonitors.rejected, (state, action) => {
      state.status = 'error';
      state.monitorsItems = [];
    });
  },
});

export const { setMonitorsItems } = productSlice.actions;

export default productSlice.reducer;
