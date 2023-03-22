import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../redux/slices/userSlice';

import s from '../../scss/components/login.module.scss';
import Registration from './Registration';

const Login = ({ setLogin, login }) => {
  const [reg, setReg] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name: user.name,
          }),
        );
        setLogin(false);
        navigate('/');
      })
      .catch(console.error);
  };

  return (
    <div className={s.login}>
      <div className={s.loginForm}>
        <img onClick={() => setLogin(false)} src="./../img/category/close.svg" alt="" />
        <div className={s.loginTitle}>
          <h2 onClick={() => setLogin(true)} className={login === true ? s.titleActive : ''}>
            Вход
          </h2>
          <p>/</p>
          <h2 onClick={() => setReg(true)}>Регистрация</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email или телефон *
            <input
              {...register('email', {
                required: 'Поле обязательно к заполнению',
              })}
            />
          </label>
          <div style={{ height: 40 }} className={s.errors}>
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
          </div>

          <label>
            Пароль*
            <input
              type="password"
              {...register('password', {
                required: 'Поле обязательно к заполнению',
              })}
            />
          </label>
          <div style={{ height: 40 }} className={s.errors}>
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
          <input value="Войти" type="submit" disabled={!isValid} />
        </form>
      </div>

      <div>{reg && <Registration setLogin={setLogin} setReg={setReg} reg={reg} />}</div>
    </div>
  );
};

export default Login;
