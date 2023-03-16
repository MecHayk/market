import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import s from '../../scss/pages/checkout.module.scss';


const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const deliveryCategory = ['Самовывоз', 'Доставка'];
  const paymentCategory = ['Наличными или картой при получении', 'Банковской картой'];
  const shopAdress = [
    'Магазин "Историческая"',
    'Магазин "Белый Аист"',
    'Магазин "Волжский-Стройград"',
    'Пункт выдачи "Тулака"',
    'Пункт выдачи "Заречный"',
  ];

  const [delivery, setDelivery] = useState(0);
  const [payment, setPayment] = useState(0);
  const [adress, setAdress] = useState(0);

  const totalCount = cartItems.reduce((sum, item) => sum + item.price, 0);


  return (
    <div className={s.checkout}>
      <div className={s.checkoutLeft}>
        <div className={s.checkoutTitle}>
          <h1>Оформление заказа</h1>
        </div>
        <div className={s.info}>
          <div className={s.userInfo}>
            <h2>1. Данные получателя</h2>
            <h3>Получатель</h3>
            <div className={s.userInputs}>
              <div>
                <p>Имя*</p>
                <input placeholder="Введите ваше имя" type="text" />
                <p>Фамилия*</p>
                <input placeholder="Введите вашу фамилию" type="text" />
              </div>
              <div className={s.userTel}>
                <p>Телефон*</p>
                <input placeholder="+7" type="text" />
                <p>Телефон если не дозвонимся</p>
                <input placeholder="+7" type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className={s.productDelivery}>
          <h2>2. Способ получения</h2>
          {deliveryCategory.map((categoryName, i) => (
            <>
              <button
                key={i}
                onClick={() => setDelivery(i)}
                className={delivery === i ? s.activeButton : ''}>
                {categoryName}
              </button>
            </>
          ))}
        </div>

        {delivery === 0 ? (
          <div className={s.pickup}>
            <h3>Пожалуйста, выберите пункт самовывоза.</h3>
            <p>Магазины, пункты выдачи заказов и партнерские сети.</p>
            <ul>
              {shopAdress.map((item, i) => (
                <li
                  key={i}
                  onClick={() => setAdress(i)}
                  className={adress === i ? s.activeAdress : ''}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={s.delivery}>
            <div className={s.inputRow1}>
              <div>
                <p>Город*</p>
                <input type="text" placeholder="Введите город" />
              </div>
              <div>
                <p>Улица*</p>
                <input type="text" placeholder="Введите улицу" />
              </div>
            </div>
            <div className={s.inputRow2}>
              <div>
                <p>Дом*</p>
                <input type="text" />
              </div>
              <div>
                <p>Строение</p>
                <input type="text" />
              </div>
              <div>
                <p>Корпус</p>
                <input type="text" />
              </div>
            </div>
            <div className={s.inputRow3}>
              <div>
                <p>Подъезд</p>
                <input type="text" />
              </div>
              <div>
                <p>Этаж</p>
                <input type="text" />
              </div>
              <div>
                <p>Квартира</p>
                <input type="text" />
              </div>
            </div>
          </div>
        )}

        <div className={s.payment}>
          <h2>3. Подтверждение и оплата</h2>
          <h3>Выберите способ оплаты</h3>

          {paymentCategory.map((categoryName, i) => (
            <>
              <button
                key={i}
                onClick={() => setPayment(i)}
                className={payment === i ? s.activeButton : ''}>
                {categoryName}
              </button>
            </>
          ))}
        </div>

        <div className={s.productOrder}>
          <p>{cartItems.length} товар</p>
          <h2>Итого: {totalCount} ₽</h2>
          <button>Оформить заказ</button>
        </div>

        <div className={s.checkoutDesc}>
          <p>
            Нажимая кнопку «Оформить заказ», я даю свое согласие на сбор и обработку моих
            персональных данных в соответствии с Политикой и принимаю условия Публичной оферты
          </p>
        </div>
      </div>

      <div className={s.checkoutRight}>
        <div className={s.productInfo}>
          <div className={s.productName}>
            <h3>{cartItems.length} позиций в заказе</h3>
            {cartItems.map((obj) => (
              <div>
                <p>{obj.name}</p>
                <p>{obj.price} ₽</p>
              </div>
            ))}
          </div>
          <div className={s.productCount}>
            <p>Итого:</p>
            <h2>{totalCount} ₽</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
