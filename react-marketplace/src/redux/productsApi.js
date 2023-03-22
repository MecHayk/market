import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005/' }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ order, sortBy, search, currentPage, page }) =>
        `${page}?_page=${currentPage}&_limit=10&_sort=${sortBy}&_order=${order}${search}`,
    }),
    getAllProducts: build.query({
      query: ({ search }) => `allProducts?${search}`,
    }),
    getFullProduct: build.query({
      query: ({ page, product }) => `${page}/${product}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetAllProductsQuery, useGetFullProductQuery } = productsApi;
