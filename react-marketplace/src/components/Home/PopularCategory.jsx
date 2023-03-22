import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import popularCategory from '../../assets/popularCategory.json';
import s from '../../scss/components/popularCategory.module.scss';

import { setPage } from '../../redux/slices/productsSlice';
import { setProductName } from '../../redux/slices/productsSlice';

const PopularCategory = () => {
  const dispatch = useDispatch();

  const onClickCategory = (page, productName) => {
    dispatch(setPage(page));
    dispatch(setProductName(productName));
  };

  return (
    <div className={s.categoryBlock}>
      <h1>Популярные категории</h1>
      <div className={s.categoryWrapper}>
        {popularCategory.map((obj) => (
          <Link key={obj.id} to={`/catalog/${obj.page}`}>
            <div
              onClick={() => onClickCategory(obj.page, obj.name)}
              key={obj.id}
              className={s.categoryCards}>
              <img src={obj.img} alt="icon" />
              <p>{obj.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
