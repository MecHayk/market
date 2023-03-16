import React from 'react';
import s from '../../scss/components/registration.module.scss';

const Registration = ({ setLogin, setReg, reg }) => {
  const loginOpened = () => {
    setLogin(true);
    setReg(false);
  };

  return (
    <div className={s.registration}>
      <div className={s.registrationForm}>
        <img onClick={() => setLogin(false)} src="./img/category/close.svg" alt="" />
        <div className={s.registrationTitle}>
          <h2 onClick={loginOpened}>Вход</h2>
          <p>/</p>
          <h2 onClick={() => setReg(true)} className={reg === true ? s.titleActive : ''}>
            Регистрация
          </h2>
        </div>
        <div className={s.registrationInputs}>
          <input type="text" placeholder="Ваше имя*" />
          <input type="text" placeholder="Email*" />
          <input type="text" placeholder="Телефон*" />
          <input type="text" placeholder="Придумайте пароль*" />
        </div>
        <button>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Registration;
