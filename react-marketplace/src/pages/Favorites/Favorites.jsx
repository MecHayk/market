import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Products/Card';
import AppContext from '../../context';
import s from '../../scss/pages/categoryPage.module.scss';
import EmptyFavorite from './EmptyFavorite';

export const Favorites = () => {
  const { onAddToFavorite } = useContext(AppContext);
  const favoritesItem = useSelector((state) => state.favorites.favoriteItems);

  return (
    <>
      <div className={s.title}>
        <h1>Избранные товары</h1>
      </div>
      {favoritesItem.length > 0 ? (
        <div className={s.category}>
          <div className={s.categoryWrapper}>
            {favoritesItem.map((item, index) => (
              <Card {...item} favorited={true} onAddToFavorite={onAddToFavorite} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyFavorite />
      )}
    </>
  );
};
