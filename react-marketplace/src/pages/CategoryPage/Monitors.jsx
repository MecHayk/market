import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import s from '../../scss/pages/categoryPage.module.scss';
import Card from '../../components/Products/Card';
import Sort from '../../components/Products/Sort';
import AppContext from '../../context';
import Skeleton from '../../components/Products/Skeleton';
import Pagination from '../../components/Products/Pagination';

const Monitors = () => {
  const monitors = useSelector((state) => state.monitors.monitorsItems);
  const status = useSelector((state) => state.nootebooks.status);

  const { onAddToFavorite } = useContext(AppContext);

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const monitorsItems = monitors.map((obj) => <Card onAddToFavorite={onAddToFavorite} {...obj} />);

  return (
    <div className={s.category}>
      <div className={s.title}>
        <h1>Мониторы</h1>
        <p>{monitors.length} товаров</p>
      </div>

      <Sort />

      <div className={s.categoryWrapper}>{status === 'loading' ? skeleton : monitorsItems}</div>

      <Pagination />
    </div>
  );
};

export default Monitors;