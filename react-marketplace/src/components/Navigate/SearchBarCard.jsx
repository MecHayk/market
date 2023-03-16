import React from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice';

import s from '../../scss/components/searchBarCard.module.scss';

const SearchBarCard = ({ id, name, price, img }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item = {
      id,
      name,
      img,
      price,
    };
    dispatch(addItems(item));
  };

  return (
    <div className={s.searchBarCard}>
      <div className={s.img}>
        <img src={img} alt="" />
      </div>

      <div className={s.info}>
        <p>{name}</p>
        <span>{price}</span>
      </div>

      <div onClick={addItemToCart} className={s.cartImg}>
        <img src="./img/categoryPage/cart.svg" alt="" />
      </div>
    </div>
  );
};

export default SearchBarCard;
