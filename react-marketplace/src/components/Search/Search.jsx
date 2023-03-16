import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/slices/filterSlice';
import s from '../../scss/components/search.module.scss';

const Search = ({ searchBar, setSearchBar }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const searchBarRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.composedPath().includes(searchBarRef.current)) {
        setSearchBar(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  return (
    <>
      <div className={s.navigateSearch}>
        <input
          ref={inputRef}
          onChange={onChangeInput}
          value={value}
          onClick={() => setSearchBar(!searchBar)}
          placeholder="Поиск по товарам"
          className={searchBar && s.activeInput}
        />
        {value && <img onClick={onClickClear} src="./img/category/close.svg" alt="" />}
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            fill="grey"
          />
        </svg>
      </div>
    </>
  );
};

export default Search;
