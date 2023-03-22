import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from '../../scss/components/header.module.scss';
import Popup from '../Popup/Popup';

const Header = () => {
  const [setPopupItem] = useState(0);

  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <Link to="/">
          <div className={s.logo}>
            <img src="./../../img/logo.svg" alt="Logo" />
          </div>
        </Link>
        <div className={s.cityInfo}>
          <Popup onClickItem={(id) => setPopupItem(id)} />
          <p>+7 (844) 999-99-99</p>
        </div>
        <div className={s.rigthInfo}>
          <li>Акции</li>
          <li>Доставка</li>
          <li>Обратная связь</li>
        </div>
      </div>
    </div>
  );
};

export default Header;
