import React from 'react';
import Banners from './Banners';
import PopularBrands from './PopularBrands';
import PopularCategory from './PopularCategory';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <PopularCategory />
      <Banners />
      <PopularBrands />
      <Services />
    </div>
  );
};

export default Home;
