import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice';
import { addItemsFavorites } from '../../redux/slices/favoritesSlice';
import s from '../../scss/components/card.module.scss';

const Card = ({ id, name, img, rating, commentsCount, price, favorited = false }) => {
  const [isFavorite, setIsFavorite] = useState(favorited);
  const dispatch = useDispatch();

  const addItemToFavorites = () => {
    const item = {
      id,
      name,
      img,
      rating,
      commentsCount,
      price,
    };
    dispatch(addItemsFavorites(item));
    setIsFavorite(!isFavorite);
  }; 

  const addItemToCart = () => {
    const item = {
      id,
      name,
      img,
      rating,
      commentsCount,
      price,
    };
    dispatch(addItems(item));
  };

  return (
    <div className={s.categoryCard}>
      <div className={s.categoryImg}>
        <img src={img} alt="" />
      </div>

      <div className={s.ratingComment}>
        <div>
          <img src="./../img/categoryPage/star.svg" alt="" />
          <p>{rating}</p>
        </div>
        <div>
          <img src="./../img/categoryPage/comment.svg" alt="" />
          <p>{commentsCount}</p>
        </div>
        <div className={s.favorites} onClick={addItemToFavorites}>
          {isFavorite ? (
            <svg height="15" version="1.1" width="10" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0 -1028.4)">
                <path
                  d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                  fill="#0d6efd"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="5"
              height="5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.5 0.824951C12.76 0.824951 11.09 1.63495 10 2.91495C8.91 1.63495 7.24 0.824951 5.5 0.824951C2.42 0.824951 0 3.24495 0 6.32495C0 10.105 3.4 13.185 8.55 17.865L10 19.175L11.45 17.855C16.6 13.185 20 10.105 20 6.32495C20 3.24495 17.58 0.824951 14.5 0.824951ZM10.1 16.375L10 16.475L9.9 16.375C5.14 12.065 2 9.21495 2 6.32495C2 4.32495 3.5 2.82495 5.5 2.82495C7.04 2.82495 8.54 3.81495 9.07 5.18495H10.94C11.46 3.81495 12.96 2.82495 14.5 2.82495C16.5 2.82495 18 4.32495 18 6.32495C18 9.21495 14.86 12.065 10.1 16.375Z"
                fill="#808080"
              />
            </svg>
          )}
        </div>
      </div>
      <div className={s.categoryInfo}>
        <p>{name}</p>
        <h3>{price} ₽</h3>
      </div>

      <div className={s.cartImg} onClick={addItemToCart}>
        <img src="./../img/categoryPage/cart.svg" alt="" />
      </div>
    </div>
  );
};

export default Card;
