import { useEffect, useRef, useState, Suspense } from 'react';
import qs from 'qs';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setFilters } from './redux/slices/filterSlice';
import Home from './components/Home/Home';
import Products from './pages/ProductsPage/Products';
import { Favorites } from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Login from './components/Login/Login';
import AppContext from './context';
import { sortList } from './components/Products/Sort';
import MainLoyouts from './layouts/MainLoyouts';
import { fetchProducts } from './redux/slices/productsSlice';
import FullProduct from './components/Products/FullProduct';

function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);

  // const sortId = useSelector((state) => state.filter.sortId.sortProperty);
  // const currentPage = useSelector((state) => state.filter.currentPage);
  // const searchValue = useSelector((state) => state.filter.searchValue);
  // const page = useSelector((state) => state.nootebooks.page);

  //   const order = sortId.includes('-') ? 'asc' : 'desc';
  //   const sortBy = sortId.replace('-', '');
  //   const search = searchValue ? `&q=${searchValue}` : '';

  const getProducts = async () => {
    dispatch(fetchProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{}}>
      <Routes>
        <Route path="/" element={<MainLoyouts />}>
          <Route path="/" element={<Home />} />
          <Route path="catalog/:page" element={<Products />} />

          <Route path="favorites" element={<Favorites />} />

          <Route path="cart" element={<Cart />} />

          <Route path="login" element={<Login />} />

          <Route path="cart/checkout" element={<Checkout />} />

          <Route path="catalog/:page/:product" element={<FullProduct />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
