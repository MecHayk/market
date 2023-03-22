import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/productsApi';
import s from '../../scss/pages/categoryPage.module.scss';
import Card from '../../components/Products/Card';
import Sort from '../../components/Products/Sort';
import Skeleton from '../../components/Products/Skeleton';
import Pagination from '../../components/Products/Pagination';

const Products = () => {
  const sortId = useSelector((state) => state.filter.sortId.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const page = useSelector((state) => state.products.page);
  const productName = useSelector((state) => state.products.productName);

  const order = sortId.includes('-') ? 'asc' : 'desc';
  const sortBy = sortId.replace('-', '');
  const search = searchValue ? `&q=${searchValue}` : '';

  const { data = [], isLoading } = useGetProductsQuery({
    order,
    sortBy,
    search,
    currentPage,
    page, 
  });

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const products = data.map((obj) => (
    <Link key={obj.id} to={`/catalog/${page}/${obj.id}`}>
      <Card {...obj} />
    </Link>
  ));

  return (
    <div className={s.category}>
      <div className={s.title}>
        <h1>{productName}</h1>
        <p>{data.length} товаров</p>
      </div>
      <Sort />
      <div className={s.categoryWrapper}>{isLoading ? skeleton : products}</div>
      <Pagination />
    </div>
  );
};

export default Products;
