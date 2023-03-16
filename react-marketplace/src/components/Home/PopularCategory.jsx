import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import popularCategory from '../../assets/popularCategory.json';
import { setPage } from '../../redux/slices/nootebooksSlice';

import s from '../../scss/components/popularCategory.module.scss';

const PopularCategory = () => {
  const dispatch = useDispatch();

  const onClickCategory = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className={s.categoryBlock}>
      <h1>Популярные категории</h1>

      <div className={s.categoryWrapper}>
        {popularCategory.map((obj) => (
          <Link key={obj.id} to={obj.page}>
            <div onClick={() => onClickCategory(obj.page)} key={obj.id} className={s.categoryCards}>
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
