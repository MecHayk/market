import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

import s from '../../scss/components/paginate.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.filter.currentPage);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <div>
      <ReactPaginate
        className={s.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={4}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
