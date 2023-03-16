import React from 'react';
import s from '../../scss/pages/category.module.scss';

const Category = ({ id, item, category }) => {
  return (
    <div className={s.category}>
      <h1>{item}</h1>
      
      <div className={s.categoryList}>
        <ul className={s.categoryItems}>
          {category.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
