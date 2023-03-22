import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../redux/slices/userSlice';
import s from '../../scss/components/navigate.module.scss';
import Catalog from '../Catalog/Catalog';
import Login from '../Login/Login';
import Search from '../Search/Search';
import SearchBar from './SearchBar';

const Navigate = () => {
  const [catalogOpened, setCatalogOpened] = useState(false);
  const [authArea, setAuthArea] = useState(false);
  const [login, setLogin] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const favoritesItem = useSelector((state) => state.favorites.favoriteItems);

  const searchBarRef = useRef();

  const { isAuth, email, name } = useAuth();

  const logOut = () => {
    dispatch(removeUser());
    setAuthArea(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(searchBarRef.current)) {
        setSearchBar(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={searchBarRef} className={s.navigate}>
        <div className={s.navigateContent}>
          <div className={s.navigateButton}>
            <button onClick={() => setCatalogOpened(true)}>
              Каталог товаров
              <svg
                fill="none"
                height="28"
                viewBox="0 0 28 28"
                width="28"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                  fill="#0d6efd"
                />
                <path
                  d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                  fill="#0d6efd"
                />
                <path
                  d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
                  fill="#0d6efd"
                />
              </svg>
            </button>
          </div>
          <Search setSearchBar={setSearchBar} searchBar={searchBar} />

          <div className={s.navigateProfile}>
            {isAuth ? (
              <div onClick={() => setAuthArea(!authArea)} className={s.login}>
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 11.5C6.6625 11.5 0 13.175 0 16.5V17.75C0 18.4375 0.5625 19 1.25 19H18.75C19.4375 19 20 18.4375 20 17.75V16.5C20 13.175 13.3375 11.5 10 11.5Z"
                    fill="#8B96A5"
                  />
                </svg>
                <p>Мой кабинет</p>
              </div>
            ) : (
              <div onClick={() => setLogin(true)} className={s.login}>
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 11.5C6.6625 11.5 0 13.175 0 16.5V17.75C0 18.4375 0.5625 19 1.25 19H18.75C19.4375 19 20 18.4375 20 17.75V16.5C20 13.175 13.3375 11.5 10 11.5Z"
                    fill="#8B96A5"
                  />
                </svg>
                {<p>Войти</p>}
              </div>
            )}

            <Link to="favorites">
              <div className={s.favorites}>
                <span className={s.favoriteCount}>{favoritesItem.length}</span>
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.35 17.1302C11.59 17.8202 10.42 17.8202 9.66003 17.1202L9.55003 17.0202C4.30003 12.2702 0.870031 9.16017 1.00003 5.28017C1.06003 3.58017 1.93003 1.95017 3.34003 0.990166C5.98003 -0.809834 9.24003 0.0301659 11 2.09017C12.76 0.0301659 16.02 -0.819834 18.66 0.990166C20.07 1.95017 20.94 3.58017 21 5.28017C21.14 9.16017 17.7 12.2702 12.45 17.0402L12.35 17.1302Z"
                    fill="#8B96A5"
                  />
                </svg>

                <p>Избранное</p>
              </div>
            </Link>

            <Link to="cart">
              <div className={s.cart}>
                <span className={s.cartCount}>{cartItems.length}</span>
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z"
                    fill="#8B96A5"
                  />
                </svg>
                <p>Корзина</p>
              </div>
            </Link>
          </div>
        </div>
        {searchBar && <SearchBar setSearchBar={setSearchBar} />}

        {authArea ? (
          <div className={s.authArea}>
            <h3>Мой кабинет</h3>
            <p>Пользователь: </p>
            <p>{email}</p>
            <button onClick={logOut}>Выйти</button>
          </div>
        ) : (
          ''
        )}
      </div>
      {login && <Login setLogin={setLogin} login={login} />}

      <Catalog
        opened={catalogOpened}
        setCatalogOpened={setCatalogOpened}
        onCloseCatalog={() => setCatalogOpened(false)}
      />
    </>
  );
};

export default Navigate;
