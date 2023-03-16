import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortId } from '../../redux/slices/filterSlice';
import s from '../../scss/components/sort.module.scss';

export const sortList = [
  { name: 'по цене возр', sortProperty: '-price' },
  { name: 'по цене убыв', sortProperty: 'price' },
  { name: 'по рейтингу', sortProperty: 'rating' },
  { name: 'по отзывам', sortProperty: 'commentsCount' },
  { name: 'по названию', sortProperty: '-name' },
];

const Sort = () => {
  const dispatch = useDispatch();

  const onClickSortItem = (item) => {
    dispatch(setSortId(item));
  };

  return (
    <div className={s.sort}>
      {sortList.map((items, index) => (
        <span key={index} onClick={() => onClickSortItem(items)}>
          {items.name}
        </span>
      ))}
    </div>
  );
};

export default Sort;
