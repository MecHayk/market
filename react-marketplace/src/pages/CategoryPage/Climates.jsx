import React from 'react';
import Sort from '../../components/Products/Sort';
import s from '../../scss/pages/categoryPage.module.scss';
const Climates = () => {
  return (
    <div className={s.category}>
      <div className={s.title}>
        <h1>Климатическая техника</h1>
        <p>0 товаров</p>
      </div>
      <Sort />
    </div>
  );
};

export default Climates;
