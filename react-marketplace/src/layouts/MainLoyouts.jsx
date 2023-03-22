import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navigate from '../components/Navigate/Navigate';

import s from '../scss/app.module.scss';

const MainLoyouts = ({ onClickCatalog, setSearchValue, onChangeSearchInput }) => {
  return (
    <>
   
      <div className={s.wrapper}>
        <Header />
        <Navigate setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} />

        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default MainLoyouts;
