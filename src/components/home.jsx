import React from 'react';
import CityCard from './city';

const HomePage = () => (
  <>
    <div className="header">
      <h2>Air Polution</h2>
    </div>

    <div className="cont-city">
      <CityCard />
    </div>

  </>
);

export default HomePage;
