import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItems, clearCart } from '../../redux/slices/cartSlice';
import s from '../../scss/pages/cart.module.scss';
import { EmptyCart } from './EmptyCart';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(clearCart());
  };

  const onRemoveItem = (id) => {
    dispatch(removeItems(id));
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={s.cart}>
      <h1 className={s.title}>Корзина</h1>
      {cartItems.length > 0 ? (
        <div className={s.cartRow}>
          <div className={s.cartColumn}>
            {cartItems.map((item) => (
              <div className={s.cartCard}>
                <div className={s.cartCardLeft}>
                  <img className={s.itemImg} src={item.img} alt="Img" />
                  <h3 className={s.name}>{item.name}</h3>
                </div>
                <div className={s.cartCardRight}>
                  <h3 className={s.price}>{item.price} ₽</h3>
                  <img
                    onClick={() => onRemoveItem(item.id)}
                    className={s.itemDelete}
                    src="./img/garbage.svg"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className={s.cartInfo}>
              <p className={s.cartInfoTitle}>В корзине {cartItems.length} товара</p>
              <p className={s.cartInfoTotal}>{totalCount} ₽</p>
              <Link to="checkout">
                <button>Перейти к оформлению</button>
              </Link>
            </div>
            <button onClick={onClickClear} className={s.deleteCart}>
              Очистить корзину
            </button>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
