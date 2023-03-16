import React from 'react';
import { Link } from 'react-router-dom';
import s from '../../scss/pages/emptyCart.module.scss';

export const EmptyCart = () => {
  return (
    <div className={s.emptyCart}>
      <h3>В корзине нет товаров</h3>
      <img src="./img/emptyCart.svg" alt="Cart" />
      <p>Найдите то, что вам нужно в каталоге или при помощи поиска</p>
      <Link to="/">
        <button>Вернуться к покупкам</button>
      </Link>
    </div>
  );
};
