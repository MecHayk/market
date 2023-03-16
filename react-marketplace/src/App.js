import { useEffect, useRef, useState, Suspense } from 'react';
import qs from 'qs';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSmartphones } from './redux/slices/smartphonesSlice';
import { fetchFridges } from './redux/slices/fridgesSlice';
import { fetchMonitors } from './redux/slices/monitiorsSlice';
import { fetchComputers } from './redux/slices/computersSlice';
import { fetchProcessors } from './redux/slices/processorsSlice';
import { fetchWashings } from './redux/slices/washingsSlice';
import { fetchTv } from './redux/slices/tvSlice';
import { fetchNootebooks } from './redux/slices/nootebooksSlice';
import { setCurrentPage, setFilters } from './redux/slices/filterSlice';
import Home from './components/Home/Home';
import Climates from './pages/CategoryPage/Climates';
import Computers from './pages/CategoryPage/Computers';
import Proccesors from './pages/CategoryPage/Proccesors';
import Garden from './pages/CategoryPage/Garden';
import Monitors from './pages/CategoryPage/Monitors';
import Fridges from './pages/CategoryPage/Fridges';
import Nootebooks from './pages/CategoryPage/Nootebooks';
import Smartphones from './pages/CategoryPage/Smartphones';
import Tv from './pages/CategoryPage/Tv';
import Washings from './pages/CategoryPage/Washings';
import { Favorites } from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Login from './components/Login/Login';
import AppContext from './context';
import { sortList } from './components/Products/Sort';
import MainLoyouts from './layouts/MainLoyouts';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const sortId = useSelector((state) => state.filter.sortId.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const page = useSelector((state) => state.nootebooks.page);

  const getProducts = async () => {
    const order = sortId.includes('-') ? 'asc' : 'desc';
    const sortBy = sortId.replace('-', '');
    const search = searchValue ? `&q=${searchValue}` : '';


    dispatch(fetchNootebooks({ order, sortBy, search, currentPage, page }));
    dispatch(fetchSmartphones({ order, sortBy, search, currentPage }));
    dispatch(fetchFridges({ order, sortBy, search, currentPage }));
    dispatch(fetchMonitors({ order, sortBy, search, currentPage }));
    dispatch(fetchComputers({ order, sortBy, search, currentPage }));
    dispatch(fetchProcessors({ order, sortBy, search, currentPage }));
    dispatch(fetchWashings({ order, sortBy, search, currentPage }));
    dispatch(fetchTv({ order, sortBy, search, currentPage }));
  };

  useEffect(() => {
    getProducts();
  }, [sortId, searchValue, currentPage, page]);

  return (
    <AppContext.Provider value={{}}>
      <Routes>
        <Route path="/" element={<MainLoyouts />}>
          <Route path="/" element={<Home />} />
          <Route path="nootebooks" element={<Nootebooks />} />
          <Route path="smartphones" element={<Smartphones />} />
          <Route path="tvs" element={<Tv />} />
          <Route path="monitors" element={<Monitors />} />
          <Route path="proccesors" element={<Proccesors />} />
          <Route path="gardens" element={<Garden />} />
          <Route path="washings" element={<Washings />} />
          <Route path="climates" element={<Climates />} />
          <Route path="fridges" element={<Fridges />} />
          <Route path="computers" element={<Computers />} />

          <Route path="favorites" element={<Favorites />} />

          <Route path="cart" element={<Cart />} />

          <Route path="login" element={<Login />} />

          <Route path="cart/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
