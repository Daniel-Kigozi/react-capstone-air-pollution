import React from 'react';
import { useSelector } from 'react-redux';
import CityCard from './city';
import { selectAllCountries } from '../redux/countrySlice';

const HomePage = () => {
  const countriesArray = useSelector(selectAllCountries);
  return (
    <>
      <div className="header">
        <h2>Air Pollution</h2>
      </div>

      <div className="cont-city">
        {

countriesArray.map((country) => (
  <CityCard
    key={country.name}
    name={country.name}
    continent={country.continent}
    flag={country.flag}
  />
))
 }
      </div>
    </>
  );
};

export default HomePage;
