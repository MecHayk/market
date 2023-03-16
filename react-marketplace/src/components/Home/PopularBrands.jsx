import React from 'react';
import s from '../../scss/components/popularBrands.module.scss';

const PopularBrands = () => {
  return (
    <div className={s.popularBrands}>
      <div className={s.brandsTitle}>
        <h1>Популярные бренды</h1>
      </div>
      <div className={s.brandsIcon}>
        <img
          src="https://cdn.citilink.ru/tzdPG3Zmu67-U7j3GX8YplNL5G0tY2Y543A1R9CPuC4/resizing_type:auto/gravity:sm/width:180/plain/brands-logo/98a2dd4cdb4d5503bcc7d1365516d14e.png"
          alt="Apple"
        />
        <img
          src="https://cdn.citilink.ru/VlxYTt95m1F9dkufPFIw6eqN56jXe5mHaYabZ1WnP68/resizing_type:auto/gravity:sm/width:180/plain/brands-logo/50bc82cf5cf2452f6ca43abe4e01636c.png"
          alt="Chuwi"
        />
        <img
          src="https://cdn.citilink.ru/pAPP4dSu0sLtaOLW3UdwsjHApU65jFTdFCFCd6HQN2Y/resizing_type:auto/gravity:sm/width:180/plain/brands-logo/58ef8fed16c3d401b198e9daf34a9a81.png"
          alt="Delongi"
        />
        <img
          src="https://cdn.citilink.ru/EiXK4gTRAD2OViIEGf1cj1q4qLiX7ftbb9n23Hv4bho/resizing_type:auto/gravity:sm/width:180/plain/brands-logo/6ebbe174611eb0cb4f989ee018a9cbeb.png"
          alt="Geozon"
        />
        <img
          src="https://cdn.citilink.ru/W2zKlP64vf8a4Z0V1VnfI8JEaTCB_WUlHGw74htf0BA/resizing_type:auto/gravity:sm/width:180/plain/brands-logo/dac4b49282eaaca1fa21af255f0e027d.png"
          alt="Huawei"
        />
        <img
          src="https://cdn.citilink.ru/rA0mIgC_zPLSbMcnLX2HqFieRFbEQ5_Qr_sQDHycwyw/resizing_type:auto/gravity:sm/width:180/plain/brands-logo/dc279b2dce45eecd072c14a81a474f1e.png"
          alt="Realme"
        />
        <img
          src="https://cdn.citilink.ru/3kJo9fQ0cXCFuJNRpEATojfpktzgtDifJmbniEPCTXU/resizing_type:auto/gravity:sm/width:180/plain/brands-logo/e2cf27dad6800b85cb31f90f0ed1b29f.png"
          alt="Whirpool"
        />
        <img
          src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png"
          alt="Xiomi"
        />
      </div>
    </div>
  );
};

export default PopularBrands;
