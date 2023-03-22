import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../redux/productsApi';
import { setPage } from '../../redux/slices/productsSlice';
import { setProductName } from '../../redux/slices/productsSlice';
import s from '../../scss/components/searchBar.module.scss';
import popularCategory from '../../assets/popularCategory.json';
import SearchBarCard from './SearchBarCard';

const SearchBar = ({ setSearchBar }) => {
  const searchValue = useSelector((state) => state.filter.searchValue);

  const page = useSelector((state) => state.products.page);
  const search = searchValue ? `&q=${searchValue}` : '';
  const dispatch = useDispatch();

  const onClickCategory = (opened, pageName, categoryName) => {
    setSearchBar(opened);
    dispatch(setPage(pageName));
    dispatch(setProductName(categoryName));
  };

  const { data = [] } = useGetAllProductsQuery({ search });

  return (
    <div className={s.searchBar}>
      <div className={s.popular}>
        <p>Популярные категории</p>
      </div>

      <div className={s.searchCategory}>
        {popularCategory.map((obj) => (
          <Link key={obj.id} to={`/catalog/${obj.page}`}>
            <div key={obj.id}>
              <p onClick={() => onClickCategory(false, obj.page, obj.name)}>{obj.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={s.searchBarCard}>
        {searchValue && data.map((obj, index) => <Link to={`/catalog/${page}/${obj.id}`}><SearchBarCard key={index} {...obj} /></Link>)}
      </div>
    </div>
  );
};

export default SearchBar;
