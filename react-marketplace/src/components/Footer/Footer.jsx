import React from 'react';
import s from '../../scss/components/footer.module.scss';
import Popup from '../Popup/Popup';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerRow}>
        <div className={s.subscribeTitle}>
          <h2>Хочу быть в курсе акций и новинок</h2>
        </div>

        <div className={s.subscribeInput}>
          <input placeholder="Мой e-mail" type="text" />
          <button>Подписаться</button>
        </div>
      </div>

      <div className={s.contacts}>
        <div className={s.contactsLeft}>
          <h1>Контакты</h1>
          <p>Адреса магазинов</p>
          <div className={s.cityInfo}>
            <p>+7 (844) 243-33-33</p>
            <Popup />
          </div>
          <button>Задать вопрос</button>

          <div>
            <img src="../img/social/youtube.svg" alt="" />
            <img src="../img/social/vk.svg" alt="" />
            <img src="../img/social/ok.svg" alt="" />
            <img src="../img/social/tik-tok.svg" alt="" />
            <img src="../img/social/telegram.svg" alt="" />
          </div>
        </div>

        <div className={s.contactsRight}>
          <div>
            <p>Журнал</p>
            <p>Акции</p>
            <p>Покупателям</p>
            <p>Информация</p>
            <p>Доставка</p>
            <p>Гарантия</p>
            <p>Кредит и рассрочка</p>
          </div>
          <div>
            <p>Сервисный центр</p>
            <p>Услуги</p>
            <p>Корпоративным клиентам</p>
            <p>Аренда помещений</p>
            <p>Партнерская программа</p>
            <p>Обзоры</p>
            <p>Форрум</p>
          </div>
          <div>
            <p>Клуб Brand</p>
            <p>Конфигуратор</p>
            <p>Подбор расходных материалов</p>
            <p>Brand</p>
            <p>Новости</p>
            <p>Вакансии</p>
            <p>Документы</p>
          </div>
        </div>
      </div>
      <p className={s.footerLast}>© Brand, 2023</p>
    </div>
  );
};

export default Footer;
