import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItems } from '../../redux/slices/cartSlice';
import { addItemsFavorites } from '../../redux/slices/favoritesSlice';
import { useGetFullProductQuery } from '../../redux/productsApi';
import s from '../../scss/pages/fullProduct.module.scss';

const FullProduct = () => {
  const { page, product } = useParams();
  const dispatch = useDispatch();

  const { data = [] } = useGetFullProductQuery({ page, product });

  const addItemToFavorites = () => {
    const item = { ...data };
    dispatch(addItemsFavorites(item));
  };

  const addItemToCart = () => {
    const item = { ...data };
    dispatch(addItems(item));
  };

  return (
    <div className={s.fullProduct}>
      <div className={s.productTitle}>
        <div className={s.productName}>
          <p>{data.name}</p>
        </div>
        <div className={s.productRating}>
          <img src="../../img/categoryPage/star.svg" alt="" />
          <p>{data.rating}</p>
          <img src="../../img/categoryPage/comment.svg" alt="" />
          <p>{data.commentsCount}</p>
        </div>
      </div>
      <div className={s.productInfo}>
        <div className={s.productImg}>
          <img src={data.img} alt="" />
        </div>
        <div className={s.productFeatures}>
          <p>Характеристики:</p>
          <ul>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem: ipsum dolor sit amet bods.</li>
            <li>Lorem: ipsum dolor sit amet doda djip tles.</li>
            <li>Lorem: ipsum dolor sit amet lolas boer.</li>
            <li>Lorem: ipsum dolor sit amet sim folaet molaw cicka.</li>
            <li>Lorem: ipsum dolor sit amet koloe pawq.</li>
          </ul>
        </div>
        <div className={s.productPrice}>
          <h2>{data.price} ₽</h2>
          <button onClick={addItemToCart} className={s.cartButton}>В корзину</button>
          <button onClick={addItemToFavorites} className={s.favoriteButton}>В избранное</button>
        </div>
      </div>
    </div>
  );
};

export default FullProduct;
