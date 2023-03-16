import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import favorites from './slices/favoritesSlice';
import cart from './slices/cartSlice';
import smartphones from './slices/smartphonesSlice';
import fridges from './slices/fridgesSlice';
import monitors from './slices/monitiorsSlice';
import computers from './slices/computersSlice';
import processors from './slices/processorsSlice';
import washings from './slices/washingsSlice';
import tv from './slices/tvSlice';
import nootebooks from './slices/nootebooksSlice';

export const store = configureStore({
  reducer: {
    filter,
    favorites,
    cart,
    smartphones,
    fridges,
    monitors,
    computers,
    processors,
    washings,
    tv,
    nootebooks,
  },
});
