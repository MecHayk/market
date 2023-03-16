import React, { useState } from 'react';
import s from '../../scss/components/catalog.module.scss';
import catalog from '../../assets/catalog.json';
import Category from './Category';

const Catalog = ({ opened, onCloseCatalog }) => {
  const [page, setPage] = useState();

  return (
    <div className={`${s.overlay} ${opened ? s.overlayVisible : ''}`}>
      <div className={s.catalogItems}>
        <div className={s.catalog}>
          <div className={s.icons}>
            <img src="./img/logo.svg" alt="Logo" />
          </div>

          <div className={s.category}>
            {catalog.map((obj) => (
              <li onMouseEnter={() => setPage(obj.id)} key={obj.id}>
                <img src={obj.img} alt="" />
                {obj.item}
              </li>
            ))}
          </div>
        </div>
        <div className={s.items}>
          <div className={s.itemsRow}>
            <div className={s.navigateSearch}>
              <input placeholder="Поиск по товарам" />
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                  fill="grey"
                />
              </svg>
            </div>
            <div>
              <img
                className={s.close}
                onClick={onCloseCatalog}
                src="./img/category/close.svg"
                alt="Close"
              />
            </div>
          </div>
          {catalog.map((obj) => (obj.id === page ? <Category key={obj.id} {...obj} /> : ''))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
