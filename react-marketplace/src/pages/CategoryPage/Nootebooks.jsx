import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import s from '../../scss/pages/categoryPage.module.scss';
import Card from '../../components/Products/Card';
import Sort from '../../components/Products/Sort';
import AppContext from '../../context';
import Skeleton from '../../components/Products/Skeleton';
import Pagination from '../../components/Products/Pagination';

const Nootebooks = () => {
  const nootebooks = useSelector((state) => state.nootebooks.nootebooksItems);
  const status = useSelector((state) => state.nootebooks.status);

  const { onAddToFavorite } = useContext(AppContext);

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const nootebooksItems = nootebooks.map((obj) => (
    <Card key={obj.id} onAddToFavorite={onAddToFavorite} {...obj} />
  ));

  return (
    <div className={s.category}>
      <div className={s.title}>
        <h1>Ноутбуки</h1>
        <p>{nootebooks.length} товаров</p>
      </div>

      <Sort />

      <div className={s.categoryWrapper}>{status === 'loading' ? skeleton : nootebooksItems}</div>

      <Pagination />
    </div>
  );
};

export default Nootebooks;
