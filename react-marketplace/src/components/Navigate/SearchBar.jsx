import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from '../../scss/components/searchBar.module.scss';
import popularCategory from '../../assets/popularCategory.json';
import { searchItems } from '../../searching';
import SearchBarCard from './SearchBarCard';

const SearchBar = ({ setSearchBar }) => {
  const searchValue = useSelector((state) => state.filter.searchValue);

  const computers = useSelector((state) => state.computers.computersItems);
  const fridges = useSelector((state) => state.fridges.fridgesItems);
  const processors = useSelector((state) => state.processors.processorsItems);
  const monitors = useSelector((state) => state.monitors.monitorsItems);
  const nootebooks = useSelector((state) => state.nootebooks.nootebooksItems);
  const smartphones = useSelector((state) => state.smartphones.smartphonesItems);
  const tv = useSelector((state) => state.tv.tvItems);
  const washing = useSelector((state) => state.washings.washingsItems);

  const categoryConcat = computers.concat(
    fridges,
    processors,
    washing,
    monitors,
    nootebooks,
    smartphones,
    tv,
  );

  return (
    <div className={s.searchBar}>
      <div className={s.popular}>
        <p>Популярные категории</p>
      </div>

      <div className={s.searchCategory}>
        {popularCategory.map((obj) => (
          <Link to={obj.page}>
            <div key={obj.id}>
              <p onClick={() => setSearchBar(false)}>{obj.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={s.searchBarCard}>
        {searchValue &&
          searchItems(categoryConcat, searchValue).map((obj, index) => (
            <SearchBarCard key={index} {...obj} />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
