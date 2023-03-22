import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../redux/slices/userSlice';
import s from '../../scss/components/registration.module.scss';

const Registration = ({ setLogin, setReg, reg }) => {
  const loginOpened = () => {
    setLogin(true);
    setReg(false);
  };

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
    const { name, email, telephone, password } = data;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, name, telephone)
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
    <div className={s.registration}>
      <div className={s.registrationForm}>
        <img onClick={() => setLogin(false)} src="./../img/category/close.svg" alt="" />
        <div className={s.registrationTitle}>
          <h2 onClick={loginOpened}>Вход</h2>
          <p>/</p>
          <h2 onClick={() => setReg(true)} className={reg === true ? s.titleActive : ''}>
            Регистрация
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email*
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
            Придумайте пароль*
            <input
              type="password"
              {...register('password', {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов.',
                },
              })}
            />
          </label>
          <div style={{ height: 40 }} className={s.errors}>
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>

          <label>
            Телефон*
            <input
              {...register('telephone', {
                required: 'Поле обязательно к заполнению',
              })}
            />
          </label>
          <div style={{ height: 40 }} className={s.errors}>
            {errors?.telephone && <p>{errors?.telephone?.message || 'Error!'}</p>}
          </div>

          <label>
            Ваше имя *
            <input
              {...register('name', {
                required: 'Поле обязательно к заполнению',
              })}
            />
          </label>
          <div style={{ height: 40 }} className={s.errors}>
            {errors?.name && <p>{errors?.name?.message || 'Error!'}</p>}
          </div>

          <input value="регистрация" type="submit" disabled={!isValid} />
        </form>
      </div>
    </div>
  );
};

export default Registration;
