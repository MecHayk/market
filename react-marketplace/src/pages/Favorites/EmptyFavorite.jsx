import React from 'react';
import { Link } from 'react-router-dom';
import s from '../../scss/pages/emptyFavorites.module.scss';

const EmptyFavorite = () => {
  return (
    <div className={s.emptyFav}>
      <h3>В избранных нет товаров</h3>
      <img src="./img/emptyFav.svg" alt="Emoji" />
      <p>Найдите то, что вам нужно в каталоге или при помощи поиска</p>
      <Link to="/">
        <button>Вернуться к покупкам</button>
      </Link>
    </div>
  );
};

export default EmptyFavorite;
