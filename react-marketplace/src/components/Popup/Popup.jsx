import React, { useState, useEffect, useRef } from 'react';
import s from '../../scss/components/popup.module.scss';

const cityList = ['Волгоград', 'Москва', 'Саратов', 'Воронеж', 'Ростов'];

const Popup = ({ onClickItem }) => {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(0);

  const onClickListItem = (index) => {
    setCity(index);
    setOpen(false);
  };

  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(popupRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={popupRef} className={s.cityInfo}>
      <span onClick={() => setOpen(!open)}>
        {cityList[city]}
        <img src="./../../img/arrow-down.svg" alt="Arrow-down" />
      </span>

      {open && (
        <div className={s.popup}>
          <ul >
            {cityList.map((item, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(index)}
                className={city === index ? 'active' : ''}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Popup;
