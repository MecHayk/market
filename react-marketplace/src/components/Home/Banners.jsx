import React from 'react';
import s from '../../scss/components/banners.module.scss';

const Banners = () => {
  return (
    <div className={s.banners}>
      <img className={s.img1} src="https://cdn.citilink.ru/NLnM8Q3QMveGZfQ6L1KYq2e7P36WDeGRRCdNXhbb_zU/resizing_type:fit/gravity:sm/width:610/height:210/plain/banners/nw_banner_2_14292_A_1675759774.jpg" alt="" />
      <img className={s.img2} src="https://cdn.citilink.ru/PN0ftBqvcNd2zw9rtJipDcvItiBGW-6l60H2DCi-cjU/resizing_type:fit/gravity:sm/width:610/height:210/plain/banners/nw_banner_2_14633_A_1675270522.jpg" alt="" />
      <img className={s.img3} src="https://cdn.citilink.ru/wm5dCvwvNKGLxDxYLcscWVgsCJ-paWv-FbWw8o83WmM/resizing_type:fit/gravity:sm/width:304/height:210/plain/banners/nw_banner_2_14685_B_1675698021.png" alt="" />
    </div>
  );
};

export default Banners;