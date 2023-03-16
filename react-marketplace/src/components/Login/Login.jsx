import React, { useState } from 'react';
import s from '../../scss/components/login.module.scss';
import Registration from './Registration';

const Login = ({ setLogin, login }) => {
  const [reg, setReg] = useState(false);

  return (
    <div className={s.login}>
      <div className={s.loginForm}>
        <img onClick={() => setLogin(false)} src="./img/category/close.svg" alt="" />
        <div className={s.loginTitle}>
          <h2 onClick={() => setLogin(true)} className={login === true ? s.titleActive : ''}>
            Вход
          </h2>
          <p>/</p>
          <h2 onClick={() => setReg(true)}>Регистрация</h2>
        </div>
        <div className={s.loginInputs}>
          <input type="text" placeholder="Email или телефон*" />
          <input type="text" placeholder="Пароль*" />
        </div>

        <button>Войти</button>
      </div>
      <div>{reg && <Registration setLogin={setLogin} setReg={setReg} reg={reg} />}</div>
    </div>
  );
};

export default Login;
