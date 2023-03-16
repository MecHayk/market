import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  sortId: { name: 'по рейтингу', sortProperty: 'rating' },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortId: (state, action) => {
      state.sortId = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setFilters: (state, action) => {
      state.currentPage = Number(action.payload.currentPage);
      state.sortId = Number(action.payload.sortId);
    },
  },
});

export const { setSortId, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
 