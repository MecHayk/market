import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productsItems: [],
  page: 'nootebooks',
  productName: 'Ноутбуки',
  status: 'loading',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProductsStatus',
  async (params) => {
    const { order, sortBy, search, currentPage, page } = params;
    const productsItemsResponse = await axios.get(
      `http://localhost:3005/allProducts`,
    );

    return productsItemsResponse.data;
  },
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductssItems: (state, action) => {
      state.productsItems = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsItems = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'error';
    });
  },
});

export const { setProductssItems, setPage, setProductName } = productSlice.actions;

export default productSlice.reducer;
